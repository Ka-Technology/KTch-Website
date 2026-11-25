"""Generate 1200x630 Open Graph images: logo + page title on dark, with a red accent.
Run from the site folder:  python3 scripts/og.py   (needs Pillow and Noto Sans Bold installed)."""
import glob, os, re
from PIL import Image, ImageDraw, ImageFont

FONT = 'NotoSans-Bold.ttf'  # resolved from system fonts; install Noto Sans if missing
W, H = 1200, 630
# the Ka Technology 3.0 logo (symbol + wordmark, from src/components/Logo.astro), in Ka red
logo = Image.open('scripts/ka-logo-3.png').convert('RGBA')
logo = logo.resize((860, round(860 * logo.height / logo.width)), Image.LANCZOS)

def card(slug, title):
    """White card: the line (tagline or page title) in Ka red at the bottom, the logo larger above it,
    centred in the space between the top edge and the line."""
    im = Image.new('RGB', (W, H), '#ffffff')
    d = ImageDraw.Draw(im)
    d.rectangle([0, H - 16, W, H], fill='#ff3131')
    size = 72
    while size > 36:
        f = ImageFont.truetype(FONT, size)
        words, lines, cur = title.split(), [], ''
        for w in words:
            t = (cur + ' ' + w).strip()
            if d.textlength(t, font=f) > W - 200 and cur: lines.append(cur); cur = w
            else: cur = t
        lines.append(cur)
        if len(lines) <= 2: break
        size -= 6
    top = H - 84 - len(lines) * size * 1.1
    y = top
    for l in lines:
        d.text(((W - d.textlength(l, font=f)) / 2, y), l, font=f, fill='#ff3131'); y += size * 1.1
    ink_top = top + size * 0.25          # where the letters actually start inside the first line
    im.paste(logo, ((W - logo.width) // 2, round((ink_top - logo.height) / 2)), logo)
    im.save(f'public/og/{slug}.png', optimize=True)

def fm(path, key):
    m = re.search(rf'^{key}:\s*(.+)$', open(path).read(), re.M)
    return m.group(1).strip().strip('"') if m else ''

card('default', 'Giving people the power of meaningful choices.')
for slug, t in [('services', 'Consulting services'), ('work', 'Our work'), ('products', 'Products'), ('about', 'Our story'), ('careers', 'Build with us'), ('contact', 'Let’s talk.')]:
    card(slug, t)
for p in glob.glob('src/content/projects/*.md'):
    s = os.path.basename(p)[:-3]; name = fm(p, 'heading') or fm(p, 'client')
    card(f'work-{s}', f"{name}: {fm(p, 'title')}".replace("'", '’'))
for p in glob.glob('src/content/products/*.md'):
    if fm(p, 'hidden') == 'true': continue  # hidden products get no preview image
    s = os.path.basename(p)[:-3]; card(f'product-{s}', f"{fm(p, 'name')}: {fm(p, 'tagline')}".replace("'", '’'))
print('ok')
