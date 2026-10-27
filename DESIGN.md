# Kalkulator Zakat — Design Documentation

## Design Principles (Applied from wealth-physics.md Law 3 & 4)

1. **Trust through precision** (Law 3): Exact nisab values (RM 15,000 based on 85g gold @ RM 176/g), precise calculations shown
2. **Stand out from competitors** (Law 4): While competitors are ads-heavy and cluttered, we're clean, beautiful, instant
3. **Mobile-first**: Most "kalkulator zakat" searches are on mobile during Ramadan
4. **Respectful professionalism**: Islamic theme without being overly religious - modern and accessible

## Color Palette

- **Primary Green**: `#059669` (wealth, halal, Islamic association)
- **Primary Dark**: `#047857` (depth, trust)
- **Gold**: `#D4AF37` / `#F59E0B` (accents, Islamic geometric patterns)
- **Background**: `#f8fafc` with green gradient
- **Text**: `#1e293b` (high readability)

## Icon Design

**Islamic Geometric Pattern + Money Symbol**
- 8-pointed star motif (common in Islamic art)
- Stylized 'Z' for Zakat inside a coin
- Green and gold color scheme
- Clean, modern, not overly decorative

Files:
- `icons/icon.svg` - main scalable icon (512x512 artboard)
- Header logo inline SVG - simplified version for header

## Typography

- System font stack: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto...`
- Clean, highly readable
- Font sizes scale down on mobile (@media max-width: 640px)

## Layout

- Single-column, card-based design
- Maximum width: 800px
- Responsive grid for Zakat type cards (auto-fit, min 280px)
- Tabs for different calculator types (4 tabs)

## Mobile Responsiveness

Tested breakpoint: `@media (max-width: 640px)`
- Remove container border-radius on mobile (edge-to-edge)
- Reduce padding (32px → 24px, 24px → 20px)
- Scale down font sizes (28px → 24px for h1)
- Tab font size reduced (14px → 13px)
- Result amount size reduced (32px → 28px)

All key elements tested:
- ✓ Header and logo
- ✓ Info boxes with Zakat explanations
- ✓ Tab navigation (scrollable horizontally if needed)
- ✓ Form inputs (full width, touch-friendly 16px font)
- ✓ Calculate buttons
- ✓ Results display
- ✓ Footer

## Social Media Assets

### OG Card (Open Graph)
- File: `social/og-card.svg` (1200x630)
- Shows: App icon, title, tagline, 2 key features
- Uses: Green gradient background, gold accents
- Text: All in Bahasa Melayu

**Note**: For full PNG support, convert `social/og-card.svg` to `social/og-card.png` using:
```bash
# Using ImageMagick (if available)
magick convert -density 300 social/og-card.svg social/og-card.png

# Or use online converter: cloudconvert.com, etc.
```

## PWA Icons (To Generate)

The manifest.json references:
- `icons/icon-192.png` (192x192)
- `icons/icon-512.png` (512x512)

To generate from SVG:
```bash
# Convert icons/icon.svg to PNG at different sizes
magick convert -density 300 -resize 192x192 icons/icon.svg icons/icon-192.png
magick convert -density 300 -resize 512x512 icons/icon.svg icons/icon-512.png
```

For now, modern browsers support SVG favicons via:
```html
<link rel="icon" type="image/svg+xml" href="icons/icon.svg">
```

## Design Checklist (Completed)

- [x] Icon: Islamic geometric pattern with green/gold theme
- [x] Header logo: Matches favicon design
- [x] Color scheme: Green (#059669) with gold accents (#D4AF37)
- [x] Mobile-first responsive design
- [x] Clean, modern aesthetic (not overly "Islamic")
- [x] OG card for social sharing
- [x] Typography optimized for readability
- [x] Form inputs: Large, touch-friendly
- [x] Buttons: Clear, accessible
- [x] Results: Visually distinct (green for wajib, blue for tidak wajib)

## Applied Marketing Laws

**Law 3 (Trust is engineered)**:
- Precise nisab value with calculation breakdown
- Shows "Dikemaskini: Oktober 2026" (transparency)
- Honest "Percuma, tiada akaun diperlukan" messaging

**Law 4 (Attention goes to outrageous)**:
- Breaking the norm: competitors are ugly and ad-heavy, ours is beautiful and clean
- Not shocking (inappropriate for religious tool), but distinctly better
- Visual contrast: while others use dull blues/grays, we use vibrant green and gold

## Next Steps (for SEO/Package step)

- Add structured data (already in index.html)
- Meta tags (already optimized)
- Privacy page (already created: privasi.html)
- Consider: WhatsApp share button for Ramadan viral sharing
