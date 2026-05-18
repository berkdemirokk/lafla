# Lafla — placeholder app icon generator.
#
# Direction A from docs/APP_ICON_BRIEF.md: bold pink "L" on near-black
# with cyan inner glow. This is a deliberately simple Python/Pillow
# implementation — it's NOT production-quality (a designer or DALL-E 3
# pass will replace it). Ships a usable icon so the app doesn't look
# like a placeholder during testing.
#
# Usage: python tools/generate-placeholder-icon.py
# Output: apps/mobile/assets/icon.png + adaptive-icon.png (1024x1024)

from PIL import Image, ImageDraw, ImageFilter
from pathlib import Path

OUT_ICON = Path("apps/mobile/assets/icon.png")
OUT_ADAPTIVE = Path("apps/mobile/assets/adaptive-icon.png")

SIZE = 1024
BG = (0, 0, 0, 255)
PINK = (255, 6, 122, 255)
CYAN = (0, 255, 255, 255)


def draw_icon(canvas: Image.Image) -> None:
    draw = ImageDraw.Draw(canvas)

    # Geometric L composed of two rectangles.
    # Center vertical stroke: width 200px, height 720px, centered horizontally
    # Bottom horizontal stroke: width 540px, height 200px

    stroke_w = 200
    vertical_h = 720
    horizontal_w = 540

    # Compute positions so the L sits visually centered
    cx = SIZE // 2
    top = (SIZE - vertical_h - 30) // 2  # nudge up slightly for optical balance

    vertical_x0 = cx - 250  # left-shifted so L isn't off-center after horizontal stroke
    vertical_x1 = vertical_x0 + stroke_w
    vertical_y0 = top
    vertical_y1 = top + vertical_h

    horizontal_x0 = vertical_x0
    horizontal_x1 = vertical_x0 + horizontal_w
    horizontal_y0 = vertical_y1 - stroke_w
    horizontal_y1 = vertical_y1

    # Draw cyan glow first (offset slightly bigger, will blur)
    glow_layer = Image.new("RGBA", (SIZE, SIZE), (0, 0, 0, 0))
    glow_draw = ImageDraw.Draw(glow_layer)
    pad = 24
    glow_draw.rectangle(
        [vertical_x0 - pad, vertical_y0 - pad, vertical_x1 + pad, vertical_y1 + pad],
        fill=(0, 255, 255, 120),
    )
    glow_draw.rectangle(
        [horizontal_x0 - pad, horizontal_y0 - pad, horizontal_x1 + pad, horizontal_y1 + pad],
        fill=(0, 255, 255, 120),
    )
    glow_layer = glow_layer.filter(ImageFilter.GaussianBlur(radius=40))
    canvas.alpha_composite(glow_layer)

    # Draw the L in pink
    draw.rectangle([vertical_x0, vertical_y0, vertical_x1, vertical_y1], fill=PINK)
    draw.rectangle(
        [horizontal_x0, horizontal_y0, horizontal_x1, horizontal_y1], fill=PINK
    )

    # Small cyan dot at the end of the horizontal stroke — speech-bubble hint
    dot_r = 28
    dot_cx = horizontal_x1 + 60
    dot_cy = horizontal_y0 + stroke_w // 2
    draw.ellipse(
        [dot_cx - dot_r, dot_cy - dot_r, dot_cx + dot_r, dot_cy + dot_r], fill=CYAN
    )


def make_icon(path: Path, adaptive: bool = False) -> None:
    canvas = Image.new("RGBA", (SIZE, SIZE), BG)
    draw_icon(canvas)

    # Flatten to RGB (App Store requires no alpha channel)
    out = Image.new("RGB", (SIZE, SIZE), (0, 0, 0))
    out.paste(canvas, mask=canvas.split()[3])

    path.parent.mkdir(parents=True, exist_ok=True)
    out.save(path, "PNG", optimize=True)
    print(f"wrote {path} ({path.stat().st_size} bytes)")


if __name__ == "__main__":
    make_icon(OUT_ICON)
    make_icon(OUT_ADAPTIVE, adaptive=True)
    print(
        "\nDone. Replace with DALL-E 3 / Midjourney output via "
        "docs/APP_ICON_PROMPTS.md for production quality."
    )
