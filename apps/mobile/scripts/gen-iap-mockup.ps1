# Lafla — IAP Review Screenshot Generator
#
# Apple App Store Connect IAP Review Screenshot. ASCII-safe source.
# Output: 1290x2796 PNG per tier.

Add-Type -AssemblyName System.Drawing

$outDir = Join-Path $PSScriptRoot "..\assets\iap-mockups"
if (-not (Test-Path $outDir)) {
    New-Item -ItemType Directory -Path $outDir | Out-Null
}

function New-PaywallMockup {
    param(
        [string]$OutPath,
        [string]$TierLabel,
        [string]$Price,
        [string]$PriceUnit,
        [string]$DiscountPill,
        [bool]$YearlyActive
    )

    # Apple IAP Review Screenshot — 1242x2208 (iPhone 5.5") most reliable.
    # 1290x2796 (6.7" Pro Max) reject ediliyor IAP review için (sadece App Store screenshots'ta).
    $w = 1242
    $h = 2208
    $bmp = New-Object System.Drawing.Bitmap $w, $h
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
    $g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit

    # Background gradient
    $bgRect = New-Object System.Drawing.Rectangle 0, 0, $w, $h
    $bgGrad = New-Object System.Drawing.Drawing2D.LinearGradientBrush `
        $bgRect, ([System.Drawing.Color]::FromArgb(255, 11, 4, 19)), `
        ([System.Drawing.Color]::FromArgb(255, 26, 9, 40)), `
        ([System.Drawing.Drawing2D.LinearGradientMode]::Vertical)
    $g.FillRectangle($bgGrad, $bgRect)

    # Brushes
    $brushPink = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(255, 255, 6, 122))
    $brushCyan = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(255, 0, 255, 255))
    $brushWhite = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::White)
    $brushGray = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(255, 160, 160, 175))
    $brushDim = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(255, 100, 100, 115))
    $brushDark = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(255, 24, 16, 38))
    $brushBlack = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::Black)

    # Top: Lafla wordmark + close X
    $fontWordmark = New-Object System.Drawing.Font "Segoe UI", 52, ([System.Drawing.FontStyle]::Bold)
    $g.DrawString("lafla", $fontWordmark, $brushPink, 80, 110)
    $fontX = New-Object System.Drawing.Font "Segoe UI", 30, ([System.Drawing.FontStyle]::Regular)
    $g.DrawString("X", $fontX, $brushDim, $w - 140, 130)

    # Proof line
    $fontProof = New-Object System.Drawing.Font "Segoe UI", 22, ([System.Drawing.FontStyle]::Italic)
    $g.DrawString("935 scenarios . 7 modes . IELTS Speaking", $fontProof, $brushDim, 80, 220)

    # Hero
    $fontHero = New-Object System.Drawing.Font "Segoe UI", 72, ([System.Drawing.FontStyle]::Bold)
    $g.DrawString("Lafla Pro", $fontHero, $brushWhite, 80, 310)

    $fontSubHero = New-Object System.Drawing.Font "Segoe UI", 32, ([System.Drawing.FontStyle]::Regular)
    $g.DrawString("Stop freezing in English.", $fontSubHero, $brushGray, 80, 420)

    # Tier toggle
    $toggleY = 560
    $toggleH = 90
    $toggleW = 1080
    $toggleX = 80
    $g.FillRectangle($brushDark, $toggleX, $toggleY, $toggleW, $toggleH)

    if ($YearlyActive) {
        $activeX = $toggleX + 540
    } else {
        $activeX = $toggleX
    }
    $g.FillRectangle($brushPink, $activeX, $toggleY, 540, $toggleH)

    $fontTier = New-Object System.Drawing.Font "Segoe UI", 26, ([System.Drawing.FontStyle]::Bold)
    if ($YearlyActive) {
        $g.DrawString("Monthly", $fontTier, $brushGray, $toggleX + 180, $toggleY + 28)
        $g.DrawString("Yearly", $fontTier, $brushWhite, $toggleX + 720, $toggleY + 28)
    } else {
        $g.DrawString("Monthly", $fontTier, $brushWhite, $toggleX + 180, $toggleY + 28)
        $g.DrawString("Yearly", $fontTier, $brushGray, $toggleX + 720, $toggleY + 28)
    }

    # Price card
    $cardX = 70
    $cardY = 710
    $cardW = $w - 140
    $cardH = 420
    $g.FillRectangle($brushDark, $cardX, $cardY, $cardW, $cardH)
    $borderPen = New-Object System.Drawing.Pen ([System.Drawing.Color]::FromArgb(180, 255, 6, 122)), 4
    $g.DrawRectangle($borderPen, $cardX, $cardY, $cardW, $cardH)

    # Price
    $fontPrice = New-Object System.Drawing.Font "Segoe UI", 120, ([System.Drawing.FontStyle]::Bold)
    $g.DrawString($Price, $fontPrice, $brushWhite, $cardX + 50, $cardY + 50)

    $fontPriceUnit = New-Object System.Drawing.Font "Segoe UI", 30, ([System.Drawing.FontStyle]::Regular)
    $g.DrawString($PriceUnit, $fontPriceUnit, $brushGray, $cardX + 50, $cardY + 230)

    # Discount pill (only if not empty)
    if ($DiscountPill -and $DiscountPill.Length -gt 0) {
        $g.FillRectangle($brushCyan, $cardX + 50, $cardY + 290, 300, 60)
        $fontPill = New-Object System.Drawing.Font "Segoe UI", 24, ([System.Drawing.FontStyle]::Bold)
        $g.DrawString($DiscountPill, $fontPill, $brushBlack, $cardX + 75, $cardY + 306)
    }

    # Features
    $featuresY = 1200
    $featureRows = @(
        "+ Unlimited access to all 935 scenarios",
        "+ IELTS Band estimate + weakness report",
        "+ Deep pronunciation analysis (phoneme drill)",
        "+ Hard Mode - real exam difficulty",
        "+ Ad-free + all side-rail modes"
    )
    $fontFeature = New-Object System.Drawing.Font "Segoe UI", 32, ([System.Drawing.FontStyle]::Regular)
    foreach ($f in $featureRows) {
        $g.DrawString($f, $fontFeature, $brushWhite, 90, $featuresY)
        $featuresY += 70
    }

    # CTA
    $ctaY = 1660
    $ctaH = 120
    $g.FillRectangle($brushPink, 80, $ctaY, $w - 160, $ctaH)
    $fontCta = New-Object System.Drawing.Font "Segoe UI", 36, ([System.Drawing.FontStyle]::Bold)
    $ctaText = "Start Lafla Pro $TierLabel"
    $ctaSize = $g.MeasureString($ctaText, $fontCta)
    $ctaX = ($w - $ctaSize.Width) / 2
    $g.DrawString($ctaText, $fontCta, $brushWhite, $ctaX, $ctaY + 36)

    # Footer
    $fontFooter = New-Object System.Drawing.Font "Segoe UI", 22, ([System.Drawing.FontStyle]::Regular)
    $g.DrawString("Restore Purchases  .  Terms  .  Privacy", $fontFooter, $brushDim, 280, 1830)

    # Legal disclaimer
    $fontLegal = New-Object System.Drawing.Font "Segoe UI", 16, ([System.Drawing.FontStyle]::Regular)
    $g.DrawString("Subscription auto-renews. Cancel anytime in iOS Settings -> Apple ID ->", $fontLegal, $brushDim, 110, 1930)
    $g.DrawString("Subscriptions. Terms: berkdemirokk.github.io/lafla/terms.html . Privacy: berkdemirokk.github.io/lafla/privacy.html", $fontLegal, $brushDim, 110, 1960)

    # Save
    $bmp.Save($OutPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $bmp.Dispose()
    $g.Dispose()

    Write-Host "Generated: $OutPath ($($w)x$($h))"
}

# Monthly
$monthlyPath = Join-Path $outDir "lafla-pro-monthly.png"
New-PaywallMockup `
    -OutPath $monthlyPath `
    -TierLabel "Monthly" `
    -Price "TL 99" `
    -PriceUnit "/ month  .  auto-renews" `
    -DiscountPill "" `
    -YearlyActive $false

# Yearly
$yearlyPath = Join-Path $outDir "lafla-pro-yearly.png"
New-PaywallMockup `
    -OutPath $yearlyPath `
    -TierLabel "Yearly" `
    -Price "TL 999" `
    -PriceUnit "/ year  .  auto-renews" `
    -DiscountPill "SAVE 16%" `
    -YearlyActive $true

Write-Host ""
Write-Host "Upload to ASC:"
Write-Host "  Monthly: $monthlyPath"
Write-Host "  Yearly:  $yearlyPath"
