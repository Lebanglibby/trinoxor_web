"""
Trinoxor Budget PDF Generator — Enhanced Edition
Run: python generate_budget_pdf.py
"""

import os, math
from io import BytesIO
from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.lib.units import mm
from reportlab.platypus import SimpleDocTemplate, Table, TableStyle, Paragraph, Spacer, KeepTogether
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_RIGHT
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from PIL import Image as PILImage

# ── Register Fonts ────────────────────────────────────────────
FD = 'C:/Windows/Fonts/'
pdfmetrics.registerFont(TTFont('Cal',    FD + 'calibri.ttf'))
pdfmetrics.registerFont(TTFont('CalB',   FD + 'calibrib.ttf'))
pdfmetrics.registerFont(TTFont('CalI',   FD + 'calibrii.ttf'))
pdfmetrics.registerFont(TTFont('CalBI',  FD + 'calibriz.ttf'))
pdfmetrics.registerFont(TTFont('Cand',   FD + 'Candara.ttf'))
pdfmetrics.registerFont(TTFont('CandB',  FD + 'Candarab.ttf'))
pdfmetrics.registerFont(TTFont('CandI',  FD + 'Candarai.ttf'))

# ── Brand Colors ──────────────────────────────────────────────
BLUE         = colors.HexColor('#1E3A8A')
BLUE_MID     = colors.HexColor('#2D4FA3')
BLUE_LIGHT   = colors.HexColor('#EFF6FF')
PURPLE       = colors.HexColor('#8B5CF6')
PURPLE_LIGHT = colors.HexColor('#F5F3FF')
PURPLE_MID   = colors.HexColor('#7C3AED')
ORANGE       = colors.HexColor('#F59E0B')
ORANGE_LIGHT = colors.HexColor('#FFFBEB')
DARK         = colors.HexColor('#1F2937')
GRAY         = colors.HexColor('#6B7280')
GRAY_LIGHT   = colors.HexColor('#9CA3AF')
LIGHT        = colors.HexColor('#F8FAFC')
BORDER       = colors.HexColor('#E5E7EB')
GREEN        = colors.HexColor('#059669')
GREEN_LIGHT  = colors.HexColor('#ECFDF5')
RED          = colors.HexColor('#DC2626')
RED_LIGHT    = colors.HexColor('#FEF2F2')
WHITE        = colors.white

BASE_DIR  = os.path.dirname(os.path.abspath(__file__))
LOGO_PATH = os.path.normpath(os.path.join(BASE_DIR, '..', 'public', 'images', 'logos', 'final_logo.png'))
OUTPUT    = os.path.join(BASE_DIR, 'Trinoxor_Budget_2026.pdf')
W, H      = A4

# Column widths for 4-col tables
CW4 = [68*mm, 57*mm, 24*mm, 21*mm]
# Column widths for summary
CW2 = [132*mm, 38*mm]


# ── Circular logo helper ──────────────────────────────────────
def make_circular_logo(path, size=200):
    """Crop logo to circle, return as ReportLab ImageReader-compatible BytesIO PNG."""
    img = PILImage.open(path).convert('RGBA')
    img = img.resize((size, size), PILImage.LANCZOS)
    mask = PILImage.new('L', (size, size), 0)
    from PIL import ImageDraw
    draw = ImageDraw.Draw(mask)
    draw.ellipse((0, 0, size, size), fill=255)
    result = PILImage.new('RGBA', (size, size), (0, 0, 0, 0))
    result.paste(img, (0, 0), mask)
    buf = BytesIO()
    result.save(buf, format='PNG')
    buf.seek(0)
    return buf


# ── Paragraph helper ─────────────────────────────────────────
def p(text, size=13, color=DARK, bold=False, align=TA_LEFT, italic=False, font=None, leading=None):
    if font:
        fn = font
    elif bold and italic:
        fn = 'CalBI'
    elif bold:
        fn = 'CalB'
    elif italic:
        fn = 'CalI'
    else:
        fn = 'Cal'
    return Paragraph(text, ParagraphStyle('_',
        fontSize=size, textColor=color, fontName=fn,
        alignment=align, leading=leading or size * 1.55,
        wordWrap='CJK'))


# ── Section header with left accent bar ──────────────────────
def section_header(number, title, accent=BLUE):
    num_cell  = p(number, size=14, color=WHITE, bold=True, align=TA_CENTER)
    text_cell = p(title,  size=15, color=WHITE, bold=True, align=TA_LEFT)
    tbl = Table([[num_cell, text_cell]], colWidths=[14*mm, 156*mm])
    tbl.setStyle(TableStyle([
        ('BACKGROUND',    (0,0), (0,0),  colors.HexColor(_darken(accent))),
        ('BACKGROUND',    (1,0), (1,0),  accent),
        ('TOPPADDING',    (0,0), (-1,-1), 9),
        ('BOTTOMPADDING', (0,0), (-1,-1), 9),
        ('LEFTPADDING',   (0,0), (0,0),  4),
        ('LEFTPADDING',   (1,0), (1,0),  10),
        ('VALIGN',        (0,0), (-1,-1), 'MIDDLE'),
    ]))
    return tbl


def _darken(c, factor=0.75):
    """Return a slightly darker hex of a HexColor."""
    r = int(c.red   * 255 * factor)
    g = int(c.green * 255 * factor)
    b = int(c.blue  * 255 * factor)
    return '#{:02X}{:02X}{:02X}'.format(r, g, b)


# ── Sub-section label ─────────────────────────────────────────
def sub_label(icon, text, accent=BLUE):
    return Table(
        [[p(icon, size=13, color=WHITE, bold=True, align=TA_CENTER),
          p(text, size=13, color=WHITE, bold=True)]],
        colWidths=[10*mm, 160*mm],
        style=TableStyle([
            ('BACKGROUND',    (0,0), (-1,-1), accent),
            ('TOPPADDING',    (0,0), (-1,-1), 7),
            ('BOTTOMPADDING', (0,0), (-1,-1), 7),
            ('LEFTPADDING',   (0,0), (0,0),  6),
            ('LEFTPADDING',   (1,0), (1,0),  8),
            ('VALIGN',        (0,0), (-1,-1), 'MIDDLE'),
            ('ROUNDEDCORNERS', [4]),
        ])
    )


# ── Data table ────────────────────────────────────────────────
def data_table(rows, accent=BLUE, col_widths=None):
    cw = col_widths or CW4
    header = [p(h, size=8.5, color=WHITE, bold=True, align=TA_CENTER) for h in rows[0]]
    body = []
    for i, row in enumerate(rows[1:]):
        body.append([
            p(str(cell), size=9, color=DARK,
              align=TA_RIGHT if j == len(row)-1 else TA_LEFT,
              bold=(j == len(row)-1))
            for j, cell in enumerate(row)
        ])
    data = [header] + body
    row_bg = [WHITE, LIGHT]
    return Table(data, colWidths=cw, repeatRows=1, style=TableStyle([
        ('BACKGROUND',    (0,0),  (-1,0),  accent),
        ('ROWBACKGROUNDS',(0,1),  (-1,-1), row_bg),
        ('LINEBELOW',     (0,0),  (-1,-1), 0.5, BORDER),
        ('LINEAFTER',     (0,0),  (-1,-1), 0.5, BORDER),
        ('TOPPADDING',    (0,0),  (-1,-1), 7),
        ('BOTTOMPADDING', (0,0),  (-1,-1), 7),
        ('LEFTPADDING',   (0,0),  (-1,-1), 9),
        ('RIGHTPADDING',  (0,0),  (-1,-1), 9),
        ('VALIGN',        (0,0),  (-1,-1), 'MIDDLE'),
        # Highlight cost column
        ('TEXTCOLOR',     (-1,1), (-1,-1), accent),
    ]))


# ── Subtotal bar ──────────────────────────────────────────────
def subtotal_bar(amount, accent=BLUE):
    return Table(
        [[p('', size=9),
          p('SUBTOTAL', size=8, color=colors.HexColor(_lighten(accent, 0.7)), bold=True, align=TA_RIGHT),
          p(amount, size=10, color=WHITE, bold=True, align=TA_RIGHT)]],
        colWidths=[90*mm, 40*mm, 40*mm],
        style=TableStyle([
            ('BACKGROUND',    (0,0), (-1,-1), accent),
            ('TOPPADDING',    (0,0), (-1,-1), 7),
            ('BOTTOMPADDING', (0,0), (-1,-1), 7),
            ('LEFTPADDING',   (0,0), (-1,-1), 10),
            ('RIGHTPADDING',  (0,0), (-1,-1), 10),
            ('VALIGN',        (0,0), (-1,-1), 'MIDDLE'),
        ])
    )


def _lighten(c, factor=0.6):
    r = int(255 - (255 - c.red   * 255) * factor)
    g = int(255 - (255 - c.green * 255) * factor)
    b = int(255 - (255 - c.blue  * 255) * factor)
    return '#{:02X}{:02X}{:02X}'.format(r, g, b)


# ── Impact box ────────────────────────────────────────────────
def impact_box(points, accent=PURPLE):
    items = '  ·  '.join(f'✓  {pt}' for pt in points)
    return Table(
        [[p(items, size=8.5, color=accent, italic=True)]],
        colWidths=[170*mm],
        style=TableStyle([
            ('BACKGROUND',    (0,0), (-1,-1), colors.HexColor(_lighten(accent, 0.12))),
            ('TOPPADDING',    (0,0), (-1,-1), 7),
            ('BOTTOMPADDING', (0,0), (-1,-1), 7),
            ('LEFTPADDING',   (0,0), (-1,-1), 12),
            ('RIGHTPADDING',  (0,0), (-1,-1), 12),
            ('LINEAFTER',     (0,0), (0,-1),  3, accent),
        ])
    )


def sp(n=3):
    return Spacer(1, n * mm)


BH        = 58 * mm   # banner height — must match topMargin on later pages
LOGO_SIZE = 42 * mm
LOGO_BUF  = None       # cached circular logo bytes


def _get_logo_buf():
    global LOGO_BUF
    if LOGO_BUF is None and os.path.exists(LOGO_PATH):
        LOGO_BUF = make_circular_logo(LOGO_PATH, size=300)
    return LOGO_BUF


def _draw_banner(canvas):
    """Draw gradient banner, decorative elements, logo, and text — logo drawn LAST so it's on top."""
    # 1. Gradient background
    steps = 60
    for i in range(steps):
        t = i / steps
        if t < 0.5:
            tt = t / 0.5
            r = int(0x1E + (0x8B - 0x1E) * tt)
            g = int(0x3A + (0x5C - 0x3A) * tt)
            b = int(0x8A + (0xF6 - 0x8A) * tt)
        else:
            tt = (t - 0.5) / 0.5
            r = int(0x8B + (0xF5 - 0x8B) * tt)
            g = int(0x5C + (0x9E - 0x5C) * tt)
            b = int(0xF6 + (0x0B - 0xF6) * tt)
        canvas.setFillColorRGB(r/255, g/255, b/255)
        x = W * i / steps
        canvas.rect(x, H - BH, W / steps + 1, BH, fill=1, stroke=0)

    # 2. Decorative translucent circles (drawn before logo)
    canvas.setFillColorRGB(1, 1, 1, 0.06)
    canvas.circle(W - 18*mm, H - 8*mm,  38*mm, fill=1, stroke=0)
    canvas.circle(W - 10*mm, H - 42*mm, 22*mm, fill=1, stroke=0)
    canvas.setFillColorRGB(1, 1, 1, 0.04)
    canvas.circle(30*mm, H - 50*mm, 28*mm, fill=1, stroke=0)

    # 3. Title text (drawn before logo so logo sits on top if overlapping)
    lx = 16 * mm
    tx = lx + LOGO_SIZE + 8*mm
    canvas.setFillColor(WHITE)
    canvas.setFont('CalB', 20)
    canvas.drawString(tx, H - 22*mm, 'Business Tech Launch Budget 2026')
    canvas.setFont('CandB', 13)
    canvas.drawString(tx, H - 33*mm, 'Trinoxor Integrated Technologies')
    canvas.setFont('CalB', 9)
    canvas.drawString(tx, H - 43*mm, 'Refined with Priority Focus  ·  Reseller Model  ·  BWP Estimates')

    # 4. Orange accent line
    canvas.setStrokeColor(ORANGE)
    canvas.setLineWidth(3)
    canvas.line(0, H - BH, W, H - BH)

    # 5. Circular logo — drawn LAST so it sits on top of everything
    ly = H - BH + (BH - LOGO_SIZE) / 2
    buf = _get_logo_buf()
    if buf:
        buf.seek(0)
        from reportlab.lib.utils import ImageReader
        canvas.drawImage(ImageReader(buf), lx, ly,
                         width=LOGO_SIZE, height=LOGO_SIZE, mask='auto')
        # White ring
        canvas.setStrokeColor(WHITE)
        canvas.setLineWidth(2.5)
        canvas.setFillColor(colors.Color(0, 0, 0, alpha=0))   # transparent fill
        cx = lx + LOGO_SIZE / 2
        cy = ly + LOGO_SIZE / 2
        canvas.circle(cx, cy, LOGO_SIZE / 2 + 2, fill=0, stroke=1)


def _draw_footer(canvas, doc):
    canvas.setStrokeColor(BORDER)
    canvas.setLineWidth(0.5)
    canvas.line(20*mm, 16*mm, W - 20*mm, 16*mm)
    canvas.setFont('CandB', 8)
    canvas.setFillColor(BLUE)
    canvas.drawCentredString(W / 2, 10*mm, 'Trinoxor Integrated Technologies')
    canvas.setFont('Cal', 7.5)
    canvas.setFillColor(GRAY)
    canvas.drawCentredString(W / 2, 6*mm, 'Secure  ·  Scalable  ·  Seamless  ·  www.trinoxor.com')
    canvas.setFont('Cal', 8)
    canvas.setFillColor(GRAY_LIGHT)
    canvas.drawRightString(W - 20*mm, 8*mm, f'Page {doc.page}')


def draw_first_page(canvas, doc):
    canvas.saveState()
    _draw_banner(canvas)
    _draw_footer(canvas, doc)
    canvas.restoreState()


def draw_later_pages(canvas, doc):
    """Later pages get a compact banner (same height) so content never overlaps."""
    canvas.saveState()
    _draw_banner(canvas)
    _draw_footer(canvas, doc)
    canvas.restoreState()


# ── Build PDF ─────────────────────────────────────────────────
def build():
    # topMargin must equal BH so ReportLab reserves space on EVERY page for the banner
    doc = SimpleDocTemplate(OUTPUT, pagesize=A4,
                            leftMargin=20*mm, rightMargin=20*mm,
                            topMargin=BH + 6*mm, bottomMargin=24*mm)
    story = []

    # Extra breathing room below banner on page 1 only
    story.append(Spacer(1, 6*mm))

    # ── Intro card ────────────────────────────────────────────
    intro_tbl = Table([[p(
        'We are launching lean, using a <b>Reseller Model</b> to keep startup costs low while '
        'generating revenue from day one. Costs are split into <b>One-Time Setup</b>, '
        '<b>Annual Renewals</b>, and <b>Monthly Operations</b>. The monthly running cost '
        'is not a burden. Once we have more <b>monthly subscribers than annual ones</b>, '
        'the business pays for itself and starts turning a profit.',
        size=13, color=DARK
    )]], colWidths=[170*mm])
    intro_tbl.setStyle(TableStyle([
        ('BACKGROUND',    (0,0), (-1,-1), BLUE_LIGHT),
        ('TOPPADDING',    (0,0), (-1,-1), 10),
        ('BOTTOMPADDING', (0,0), (-1,-1), 10),
        ('LEFTPADDING',   (0,0), (-1,-1), 14),
        ('RIGHTPADDING',  (0,0), (-1,-1), 14),
        ('LINEAFTER',     (0,0), (0,-1),  3, BLUE),
    ]))
    story.append(intro_tbl)
    story.append(sp(6))

    # ══════════════════════════════════════════════════════════
    # SECTION 1
    # ══════════════════════════════════════════════════════════
    story.append(KeepTogether([
        section_header('01', 'Official Licensing & Developer Accounts', BLUE),
        sp(2),
        data_table([
            ['Item', 'Description', 'Frequency', 'Est. Cost (BWP)'],
            ['PPRA Code 120 (01 & 03)', 'ICT Technical Support — Systems & Data Center', 'Annual',   'P 300.00'],
            ['Google Play Console',     'Android Developer Lifetime Access',              'One-Time', 'P 350.00'],
            ['Apple Developer Fee',     'iOS App Store Access  ($99 / year)',             'Annual',   'P 1,800.00'],
            ['CIPA Annual Return',      'Mandatory company compliance',                   'Annual',   'P 500.00'],
        ], BLUE),
        subtotal_bar('P 2,950.00', BLUE),
    ]))
    story.append(sp(6))

    # ══════════════════════════════════════════════════════════
    # SECTION 2
    # ══════════════════════════════════════════════════════════
    story.append(KeepTogether([
        section_header('02', 'Infrastructure & Reselling — Deposit Model', PURPLE),
        sp(2),
        data_table([
            ['Item', 'Provider Recommendation', 'Frequency', 'Est. Cost (BWP)'],
            ['Domain Reseller Deposit',    'ResellerClub or Netim  (.bw / .com domains)',    'Deposit', 'P 1,500.00'],
            ['25 cPanel Reseller Hosting', 'A2 Hosting or SiteGround  (Turbo / GrowBig)',    'Monthly', 'P 500.00'],
        ], PURPLE),
        subtotal_bar('P 2,000.00', PURPLE),
    ]))
    story.append(sp(6))

    # ══════════════════════════════════════════════════════════
    # SECTION 3
    # ══════════════════════════════════════════════════════════
    story.append(KeepTogether([
        section_header('03', 'Hardware — Workstation', ORANGE),
        sp(2),
        data_table([
            ['Item', 'Recommended Specs', 'Frequency', 'Est. Cost (BWP)'],
            ['Pro-Tier Laptop / Desktop', 'Core i5 / Ryzen 5  ·  16 GB RAM  ·  512 GB SSD', 'One-Time', 'P 8,500.00'],
        ], ORANGE),
        subtotal_bar('P 8,500.00', ORANGE),
    ]))
    story.append(sp(6))

    # ══════════════════════════════════════════════════════════
    # SECTION 4
    # ══════════════════════════════════════════════════════════
    from reportlab.platypus import PageBreak
    story.append(PageBreak())
    story.append(section_header('04', 'Priority Tools — Hosting, Web & App Development', RED))
    story.append(sp(4))

    # 4A ──────────────────────────────────────────────────────
    story.append(KeepTogether([
        sub_label('A', 'Hosting Enhancement  (Reseller Optimization)', BLUE_MID),
        sp(2),
        data_table([
            ['Item', 'Description', 'Frequency', 'Est. Cost (BWP)'],
            ['Cloudflare  (Free Plan)',    'CDN, SSL, DDoS protection',          'Free',    'P 0.00'],
            ['Automated Backups  (Addon)', 'Protect client websites',            'Monthly', 'P 100.00'],
            ['WHMCS Billing System',       'Automate hosting sales & invoicing', 'Monthly', 'P 300.00'],
        ], BLUE_MID),
        subtotal_bar('P 400.00', BLUE_MID),
        sp(2),
        impact_box(['Sell hosting professionally', 'Automate billing & account creation', 'Protect client data'], BLUE),
    ]))
    story.append(sp(5))

    # 4B ──────────────────────────────────────────────────────
    story.append(KeepTogether([
        sub_label('B', 'Website Development Efficiency Tools', PURPLE_MID),
        sp(2),
        data_table([
            ['Item', 'Description', 'Frequency', 'Est. Cost (BWP)'],
            ['Premium Themes / Templates',     'Faster website delivery for clients', 'Per Project', 'P 300.00'],
            ['UI Kits / Design Systems',        'For React / frontend work',           'One-Time',   'P 500.00'],
            ['Developer Tools  (VS Code AI…)', 'Speed up coding workflow',            'Monthly',    'P 150.00'],
            ['GitHub  (Private Repos)',         'Project management & backups',        'Free / Paid','P 0 – P 150'],
        ], PURPLE_MID),
        subtotal_bar('P 950.00', PURPLE_MID),
        sp(2),
        impact_box(['Faster delivery = more clients', 'Better design quality', 'Easier project management'], PURPLE),
    ]))
    story.append(sp(5))

    # 4C ──────────────────────────────────────────────────────
    story.append(KeepTogether([
        sub_label('C', 'App Development & Backend Services', GREEN),
        sp(2),
        data_table([
            ['Item', 'Description', 'Frequency', 'Est. Cost (BWP)'],
            ['Firebase  (Starter / Blaze)',    'Auth, database, push notifications', 'Monthly',  'P 200.00'],
            ['API Hosting  (within reseller)', 'Host small APIs initially',          'Included', 'P 0.00'],
            ['Payment Integration Setup',      'For apps — future monetization',     'One-Time', 'P 300.00'],
        ], GREEN),
        subtotal_bar('P 500.00', GREEN),
        sp(2),
        impact_box(['Build real production apps', 'Supports scalable backend when needed'], GREEN),
    ]))
    story.append(sp(5))

    # 4D ──────────────────────────────────────────────────────
    story.append(KeepTogether([
        sub_label('D', 'Basic Security & Monitoring  (Essential)', RED),
        sp(2),
        data_table([
            ['Item', 'Description', 'Frequency', 'Est. Cost (BWP)'],
            ['Uptime Monitoring Tools', 'Alerts when client sites go down', 'Monthly', 'P 100.00'],
            ['Basic Malware Protection','Protect client websites',          'Monthly', 'P 100.00'],
        ], RED),
        subtotal_bar('P 200.00', RED),
        sp(2),
        impact_box(['Reliable uptime = client trust', 'Proactive security posture'], RED),
    ]))
    story.append(sp(8))

    # ══════════════════════════════════════════════════════════
    # SUMMARY
    from reportlab.platypus import PageBreak
    story.append(PageBreak())
    # ══════════════════════════════════════════════════════════
    story.append(section_header('', 'Updated Total Summary', DARK))
    story.append(sp(2))

    sum_header = [
        p('Category',    size=9, color=WHITE, bold=True),
        p('Total (BWP)', size=9, color=WHITE, bold=True, align=TA_RIGHT),
    ]
    sum_rows = [
        ['Immediate One-Time Costs',     'P 9,350.00'],
        ['Annual Renewals',              'P 2,600.00'],
        ['Monthly Hosting  (Reseller)',  'P 500.00'],
        ['Domain Deposit',               'P 1,500.00'],
        ['Priority Tools  (Monthly Avg)','P 1,050.00 – P 1,550.00'],
    ]
    tbl_data = [sum_header] + [
        [p(r[0], size=9.5), p(r[1], size=9.5, bold=True, color=BLUE, align=TA_RIGHT)]
        for r in sum_rows
    ]
    story.append(Table(tbl_data, colWidths=CW2, style=TableStyle([
        ('BACKGROUND',    (0,0),  (-1,0),  DARK),
        ('ROWBACKGROUNDS',(0,1),  (-1,-1), [WHITE, LIGHT]),
        ('LINEBELOW',     (0,0),  (-1,-1), 0.5, BORDER),
        ('TOPPADDING',    (0,0),  (-1,-1), 8),
        ('BOTTOMPADDING', (0,0),  (-1,-1), 8),
        ('LEFTPADDING',   (0,0),  (-1,-1), 12),
        ('RIGHTPADDING',  (0,0),  (-1,-1), 12),
        ('VALIGN',        (0,0),  (-1,-1), 'MIDDLE'),
    ])))
    story.append(sp(6))

    # ══════════════════════════════════════════════════════════
    # GRAND TOTAL CARD
    # ══════════════════════════════════════════════════════════
    grand = Table([
        [p('GRAND TOTAL  —  REALISTIC VIEW', size=10, color=colors.HexColor('#93C5FD'),
           bold=True, align=TA_CENTER, font='CandB')],
        [p('Startup  (One-Time + Setup)', size=9, color=colors.HexColor('#CBD5E1'),
           align=TA_CENTER)],
        [p('P 13,450.00', size=26, color=ORANGE, bold=True, align=TA_CENTER, font='CalB')],
        [p('Monthly Running Cost', size=9, color=colors.HexColor('#CBD5E1'), align=TA_CENTER)],
        [p('P 1,550  –  P 2,050', size=16, color=WHITE, bold=True, align=TA_CENTER, font='CalB')],
    ], colWidths=[170*mm])
    grand.setStyle(TableStyle([
        ('BACKGROUND',    (0,0), (-1,-1), BLUE),
        ('BACKGROUND',    (0,2), (-1,2),  colors.HexColor('#162D6E')),
        ('BACKGROUND',    (0,4), (-1,4),  colors.HexColor('#162D6E')),
        ('TOPPADDING',    (0,0), (-1,-1), 8),
        ('BOTTOMPADDING', (0,0), (-1,-1), 8),
        ('TOPPADDING',    (0,0), (-1,0),  14),
        ('BOTTOMPADDING', (0,-1),(-1,-1), 14),
        ('LINEABOVE',     (0,2), (-1,2),  0.5, colors.HexColor('#2D4FA3')),
        ('LINEBELOW',     (0,2), (-1,2),  0.5, colors.HexColor('#2D4FA3')),
    ]))
    story.append(grand)
    story.append(sp(5))

    # Disclaimer
    story.append(p(
        'All costs are estimates in Botswana Pula (BWP). Actual figures may vary based on provider '
        'pricing, exchange rates, and specific business requirements. '
        'This document is for internal planning purposes only.',
        size=7.5, color=GRAY_LIGHT, italic=True, align=TA_CENTER
    ))

    doc.build(story, onFirstPage=draw_first_page, onLaterPages=draw_later_pages)
    print(f'PDF saved -> {OUTPUT}')


if __name__ == '__main__':
    build()
