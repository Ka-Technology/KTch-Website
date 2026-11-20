"""Generate 1200x630 Open Graph images: logo + page title on dark, with a red accent.
Run from the site folder:  python3 scripts/og.py   (needs Pillow and Noto Sans Bold installed)."""
import glob, os, re
from PIL import Image, ImageDraw, ImageFont

FONT = 'NotoSans-Bold.ttf'  # resolved from system fonts; install Noto Sans if missing
W, H = 1200, 630
logo = Image.open('public/brand/ka-circle-symbol.png').convert('RGBA').resize((120, 120), Image.LANCZOS)

def card(slug, title, sub='Ka Technology · Portland, Oregon'):
    im = Image.new('RGB', (W, H), '#0b0b0c')
    d = ImageDraw.Draw(im)
    d.rectangle([0, H - 16, W, H], fill='#ff3131')
    im.paste(logo, (72, 64), logo)
    size = 84
    while size > 40:
        f = ImageFont.truetype(FONT, size)
        words, lines, cur = title.split(), [], ''
        for w in words:
            t = (cur + ' ' + w).strip()
            if d.textlength(t, font=f) > W - 144 and cur: lines.append(cur); cur = w
            else: cur = t
        lines.append(cur)
        if len(lines) <= 3: break
        size -= 6
    y = H - 120 - len(lines) * size * 1.02
    for l in lines:
        d.text((72, y), l, font=f, fill='#f4f4f3'); y += size * 1.02
    d.text((72, H - 92), sub, font=ImageFont.truetype(FONT, 28), fill='#ff4d4d')
    im.save(f'public/og/{slug}.png', optimize=True)

def fm(path, key):
    m = re.search(rf'^{key}:\s*(.+)$', open(path).read(), re.M)
    return m.group(1).strip().strip('"') if m else ''

card('default', 'Giving people the power of meaningful choices.')
for slug, t in [('services', 'Consulting services'), ('work', 'Our work'), ('products', 'Our software'), ('about', 'Our story'), ('careers', 'Build with us'), ('contact', "Let's talk.")]:
    card(slug, t)
for p in glob.glob('src/content/projects/*.md'):
    s = os.path.basename(p)[:-3]; card(f'work-{s}', f"{fm(p, 'client')}: {fm(p, 'title')}")
for p in glob.glob('src/content/products/*.md'):
    s = os.path.basename(p)[:-3]; card(f'product-{s}', f"{fm(p, 'name')}: {fm(p, 'tagline')}")
print('ok')
