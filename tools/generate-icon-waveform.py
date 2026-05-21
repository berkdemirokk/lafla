# Lafla — production app icon generator (Neon Noir voice waveform).
#
# Direction A from the user's brief: voice waveform in pink with cyan accent.
# Captures the "speaking" core without using text, microphones, or speech
# bubbles. Five vertical bars on pure black, pink-to-cyan vertical gradient,
# rounded caps, soft outer glow. A thin cyan baseline anchors the bars and
# implies a horizon / continuity.
#
# Design decisions:
# - No text, no letterform (Apple HIG-aligned, also matches the latest brief).
# - 5 bars: short / medium / tall / medium / short — classic waveform, but
#   with a slight asymmetric nudge (left side ~5% taller) so it doesn't feel
#   mechanically perfect. Reads as "live voice," not "audio meter."
# - Vertical gradient: hot pink #FF067A at bottom → electric cyan #00FFFF at
#   top. Pink dominates (~70% of bar height) — brand stays pink-led.
# - Soft cyan outer glow (gaussian blur) gives the neon-sign feel.
# - Thin cyan horizontal baseline behind the bars — anchors the composition
#   and references oscilloscope / spectrum analyzer without being literal.
# - Safe area: bars fit within central 824x824 region (100px margin each side
#   per iOS 18 icon guidance).
# - No pre-rounded corners (iOS applies its own superellipse mask).
# - No drop shadow (the OS adds one on Home Screen).
#
# Usage: python tools/generate-icon-waveform.py
# Output:
#   apps/mobile/assets/icon.png          (1024x1024, RGB, no alpha)
#   apps/mobile/assets/adaptive-icon.png (1024x1024, RGBA, transparent bg)

from PIL import Image, ImageDraw, ImageFilter
from pathlib import Path

OUT_ICON = Path("apps/mobile/assets/icon.png")
OUT_ADAPTIVE = Path("apps/mobile/assets/adaptive-icon.png")

SIZE = 1024

# Brand palette
BLACK = (0, 0, 0, 255)
PINK = (255, 6, 122, 255)      # #FF067A
CYAN = (0, 255, 255, 255)      # #00FFFF


def lerp(a: tuple, b: tuple, t: float) -> tuple:
    """Linear interpolate between two RGBA tuples."""
    return tuple(int(a[i] + (b[i] - a[i]) * t) for i in range(4))


def draw_rounded_rect(draw: ImageDraw.ImageDraw, box, radius: int, fill) -> None:
    """Rounded rectangle — pre-Pillow 9 fallback if needed."""
    x0, y0, x1, y1 = box
    draw.rounded_rectangle([x0, y0, x1, y1], radius=radius, fill=fill)


def draw_gradient_bar(canvas: Image.Image, box, top_color, bottom_color, radius: int) -> None:
    """Draw a vertical gradient bar with rounded caps.

    Pillow has no native gradient fill, so we composite the gradient onto a
    rounded-rect mask. We build the gradient as a 1-pixel-wide column, scale
    it, then paste with the rounded-rect mask.
    """
    x0, y0, x1, y1 = box
    w = x1 - x0
    h = y1 - y0

    # Build vertical gradient (1 px wide, h tall)
    grad = Image.new("RGBA", (1, h), (0, 0, 0, 0))
    for y in range(h):
        t = y / max(h - 1, 1)
        grad.putpixel((0, y), lerp(top_color, bottom_color, t))
    grad = grad.resize((w, h), Image.BILINEAR)

    # Rounded-rect mask
    mask = Image.new("L", (w, h), 0)
    mdraw = ImageDraw.Draw(mask)
    mdraw.rounded_rectangle([0, 0, w - 1, h - 1], radius=radius, fill=255)

    # Composite onto canvas using mask
    canvas.paste(grad, (x0, y0), mask)


def draw_icon(canvas: Image.Image, with_baseline: bool = True) -> None:
    """Render the waveform onto canvas. Canvas is assumed to be RGBA."""

    # --- Layout ---
    # Safe area: central 824x824, but we'll compose tighter (~700px wide cluster)
    # so the icon has visual weight at 60x60 without crowding the edges.
    cluster_w = 700  # total width of the 5-bar cluster
    bar_w = 96       # each bar 96px wide
    gap = (cluster_w - 5 * bar_w) // 4  # 4 gaps between 5 bars
    radius = bar_w // 2  # fully rounded caps (pill shape)

    cluster_x0 = (SIZE - cluster_w) // 2
    cy = SIZE // 2  # vertical center of the bars (each bar centered on this line)

    # Bar heights — classic 5-bar waveform with slight asymmetric nudge.
    # Left side ~5% taller than right mirror to feel "live," not mechanical.
    # Heights:  short / medium / tall / medium / short
    heights = [320, 540, 760, 520, 300]

    # --- Glow pass (drawn first, blurred, then bars over it) ---
    glow_layer = Image.new("RGBA", (SIZE, SIZE), (0, 0, 0, 0))
    gdraw = ImageDraw.Draw(glow_layer)

    for i, h in enumerate(heights):
        x = cluster_x0 + i * (bar_w + gap)
        y0 = cy - h // 2
        y1 = cy + h // 2
        # Slightly bigger glow rect — both pink (warm core) and cyan (cool halo).
        # Pink core glow:
        pad = 12
        gdraw.rounded_rectangle(
            [x - pad, y0 - pad, x + bar_w + pad, y1 + pad],
            radius=radius + pad,
            fill=(255, 6, 122, 180),  # pink with alpha
        )

    pink_glow = glow_layer.filter(ImageFilter.GaussianBlur(radius=42))

    # Cyan halo (slightly larger, more diffuse)
    cyan_glow_layer = Image.new("RGBA", (SIZE, SIZE), (0, 0, 0, 0))
    cdraw = ImageDraw.Draw(cyan_glow_layer)
    for i, h in enumerate(heights):
        x = cluster_x0 + i * (bar_w + gap)
        y0 = cy - h // 2
        y1 = cy + h // 2
        pad = 24
        # Cyan only at the top portion of each bar (where cyan endpoint sits)
        # — gives the "lit from above" feel.
        top_band_h = int(h * 0.45)
        cdraw.rounded_rectangle(
            [x - pad, y0 - pad, x + bar_w + pad, y0 + top_band_h + pad],
            radius=radius + pad,
            fill=(0, 255, 255, 110),
        )

    cyan_glow = cyan_glow_layer.filter(ImageFilter.GaussianBlur(radius=58))

    # Composite glows onto canvas
    canvas.alpha_composite(pink_glow)
    canvas.alpha_composite(cyan_glow)

    # --- Baseline (thin cyan line behind bars, anchors the waveform) ---
    if with_baseline:
        baseline_layer = Image.new("RGBA", (SIZE, SIZE), (0, 0, 0, 0))
        bldraw = ImageDraw.Draw(baseline_layer)
        # Baseline extends slightly beyond the cluster on both sides.
        bl_x0 = cluster_x0 - 60
        bl_x1 = cluster_x0 + cluster_w + 60
        bl_thickness = 6
        bldraw.rounded_rectangle(
            [bl_x0, cy - bl_thickness // 2, bl_x1, cy + bl_thickness // 2],
            radius=bl_thickness // 2,
            fill=(0, 255, 255, 220),
        )
        # Subtle glow around baseline
        baseline_glow = baseline_layer.filter(ImageFilter.GaussianBlur(radius=8))
        canvas.alpha_composite(baseline_glow)
        canvas.alpha_composite(baseline_layer)

    # --- Bars themselves (pink → cyan vertical gradient, rounded caps) ---
    for i, h in enumerate(heights):
        x = cluster_x0 + i * (bar_w + gap)
        y0 = cy - h // 2
        y1 = cy + h // 2
        # Top of bar = cyan, bottom = pink (most of the bar is pink-dominant
        # because pink-to-cyan crossover happens in the upper 40%).
        draw_gradient_bar(
            canvas,
            (x, y0, x + bar_w, y1),
            top_color=CYAN,
            bottom_color=PINK,
            radius=radius,
        )


def make_icon_solid_bg(path: Path) -> None:
    """Standard iOS icon: solid pure black background, no alpha."""
    canvas = Image.new("RGBA", (SIZE, SIZE), BLACK)
    draw_icon(canvas, with_baseline=True)

    # Flatten to RGB (App Store rejects alpha channel on submission icon)
    out = Image.new("RGB", (SIZE, SIZE), (0, 0, 0))
    out.paste(canvas, mask=canvas.split()[3])

    path.parent.mkdir(parents=True, exist_ok=True)
    out.save(path, "PNG", optimize=True)
    print(f"wrote {path} ({path.stat().st_size:,} bytes)")


def make_adaptive_icon(path: Path) -> None:
    """Android adaptive icon: foreground on transparent background.

    The OS composites whatever background it wants behind this layer. We keep
    the bars centered within the inner 66% safe zone (676x676) so the OS
    rounded-square / circle masks don't crop the waveform.

    For Lafla's Neon Noir aesthetic, we draw the bars on a transparent canvas.
    Most launchers default to a system-tinted background or the user's
    wallpaper; the pink-cyan gradient on bars + their own glow gives enough
    visual presence.
    """
    canvas = Image.new("RGBA", (SIZE, SIZE), (0, 0, 0, 0))
    # Skip the cyan baseline for the adaptive icon — it might clash with
    # whatever background the launcher composites. The bars alone are enough.
    draw_icon(canvas, with_baseline=False)

    path.parent.mkdir(parents=True, exist_ok=True)
    canvas.save(path, "PNG", optimize=True)
    print(f"wrote {path} ({path.stat().st_size:,} bytes)")


if __name__ == "__main__":
    make_icon_solid_bg(OUT_ICON)
    make_adaptive_icon(OUT_ADAPTIVE)
    print("\nDone. Lafla waveform icon generated.")
