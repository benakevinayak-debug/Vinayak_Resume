# VINAYAK BENAKE | GAME ANIMATOR

Colourful, game-UI-inspired portfolio and interactive resume. Plain HTML, CSS and vanilla JavaScript with GSAP + ScrollTrigger. No backend and no build step — it runs on GitHub Pages as it is.

```
Vinayak-Resume/
├── index.html                 page structure, SEO + LinkedIn preview tags
├── css/style.css              design system (colours at the top in :root)
├── js/script.js               ALL content (the DATA object) + interactions
├── js/vendor/                 optional offline copy of GSAP
├── assets/
│   ├── images/portrait.jpg    hero portrait (your supplied image, unaltered)
│   ├── images/og-image.jpg    1200×630 preview card for LinkedIn / WhatsApp
│   ├── videos/  gifs/  thumbnails/   your animation media
│   ├── icons/                 favicon.svg, favicon-32.png, apple-touch-icon.png
│   └── documents/resume.pdf   your original PDF, unchanged
└── README.md
```

---

## ⚠️ Confirm before you share the link

| Item | Where | What to do |
|---|---|---|
| **Tip Tales end date** | `js/script.js` → `missions` → Mission 02 → `end: null` | Replace `null` with the real date, e.g. `end: "Feb 2026"`. Until then the card shows an amber **End date to confirm** badge. Then set `showConfirmFlags: false`. |
| **ZVKY description** | Mission 03 → `brief` | One line: game animation for the studio's projects, working in Spine. Edit or add lines. |
| **Spine** | `skills` (Spine Animation) and `loadout` (Game Rig) | Not on the PDF; included because you use it in your current work. Delete those entries if you prefer. |
| **Education years** | `education` | B.Com and HSC are both 2018–2019, exactly as on the PDF. |
| **Live address** | `index.html` (`SITE_URL`, 4 places) and `DATA.person.siteUrl` | See "After deploying" below. |

---

## Editing your information

Open **`js/script.js`**. Everything is in the `DATA` object at the top:

- `person` — name, titles, tagline, company, email, phone, location, LinkedIn, portfolio link, live site URL
- `bio`, `focus`, `stats`, `education` — Character Profile
- `missions` — jobs, newest first. `status: "live"` marks the current one. `open: true` shows the production list expanded by default.
- `skillGroups` + `skills` — skill tree colours and nodes (`x`/`y` place a node on a 1000 × 620 map, `from` draws its connecting line)
- `loadout` — software cards and proficiency tiers
- `categories`, `replays`, `slots` — showreel
- `workflow` — pipeline steps

If your name or role changes, also update the `<title>`, description and Open Graph tags at the top of `index.html`, and regenerate `og-image.jpg`.

**Colours:** edit the five palette tokens at the top of `css/style.css` (`--blue`, `--orange`, `--purple`, `--cyan`, `--navy`) and the gradients below them.

## Replacing the portrait

Replace `assets/images/portrait.jpg` (keep the filename; a portrait-ish image around 1200 px wide works best). Change which part shows in the frame with `--portrait-pos` at the top of `css/style.css` — `100% 30%` keeps the right side and upper third; `50% 20%` centres it.

## Adding animation videos and GIFs

1. Copy the file into the right folder:
   - MP4 → `assets/videos/` (H.264, ideally under ~15 MB)
   - GIF → `assets/gifs/`
   - Optional poster image (16:9 JPG) → `assets/thumbnails/`
2. Add an entry to `DATA.replays`:

```js
{ title: "Hero Idle Loop", cat: "idle", type: "mp4",
  src: "assets/videos/hero-idle.mp4", poster: "assets/thumbnails/hero-idle.jpg",
  desc: "Spine idle loop for a game character." },

{ title: "Run Cycle", cat: "cycles", type: "gif", src: "assets/gifs/run-cycle.gif", desc: "2D run cycle." },

{ title: "New Episode", cat: "series", type: "youtube", yt: "VIDEO_ID" },        // from youtu.be/VIDEO_ID
{ title: "Reel 2026",   cat: "reels",  type: "drive",   drive: "FILE_ID" },      // drive.google.com/file/d/FILE_ID — share as "Anyone with the link"
```

`cat` must match a category id: `reels`, `series`, `rhymes`, `stories`, `ai`, `game` (Game Character Animation), `idle`, `cycles` (Walk & Run Cycles), `spine`. When a category gets its first item, its dashed **Slot open** card disappears. `showEmptySlots: false` hides all of them.

The six links from your PDF are already wired in: Work Reel, Piku & Tuki Episode, Piku & Tuki Nursery Rhymes, Ghode Ka Hatoda Rhymes, Cinderella and AI Cinematic Work Reel.

---

## Testing locally

Use a local server — double-clicking `index.html` (`file://`) blocks YouTube embeds.

```bash
cd Vinayak-Resume
python3 -m http.server 8000
# open http://localhost:8000
```

(or the **Live Server** extension in VS Code)

Checklist: loader + **Skip** (or Esc) · keys **1–6** and ↑/↓ on the main menu · every top-bar link · **Options** panel · ☰ menu on tablet/phone · open/close a mission's productions · skill nodes (on phones they open a panel) · equipment cards (open an Inspect panel) · showreel filters, play, fullscreen · pipeline steps · Email, Copy Link, Share, Download Resume, LinkedIn.

---

## Deploying to GitHub Pages

1. Create a **public** repository on GitHub, e.g. `vinayak-resume`.
2. Put the **contents** of this folder at the repository root (so `index.html` is at the top level): drag-and-drop with *Add file → Upload files*, or:
   ```bash
   cd Vinayak-Resume
   git init && git add . && git commit -m "Portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/vinayak-resume.git
   git push -u origin main
   ```
3. On GitHub: **Settings → Pages → Build and deployment → Deploy from a branch → main / (root) → Save**.
4. After a minute or two the site is at `https://YOUR-USERNAME.github.io/vinayak-resume/` — open it in a private window to confirm it loads without logging in.

### After deploying (for LinkedIn previews and Copy Link)

1. In `index.html`, replace all four `SITE_URL` with your address **without** the trailing slash, e.g. `https://your-username.github.io/vinayak-resume`.
2. In `js/script.js`, set `siteUrl: "https://your-username.github.io/vinayak-resume/"`.
3. Commit and push. Then paste your link into the **LinkedIn Post Inspector** (linkedin.com/post-inspector) to refresh the preview card.

All asset paths are relative and the site uses HTTPS-only resources, so it works in a sub-folder like this with no other changes.

---

## Motion, accessibility, performance

- GSAP 3.12.5 + ScrollTrigger load from cdnjs. If that fails, the site tries `js/vendor/gsap.min.js` and `js/vendor/ScrollTrigger.min.js` (download both from cdnjs into that folder for a fully offline copy). Without GSAP all content still shows, just without animation.
- **Reduce motion** setting: no particles, parallax, reveals or looping effects.
- Panels (menu, options, inspect) sit above a dark scrim, lock page scrolling, trap keyboard focus, close with Esc / ✕ / clicking outside, and scroll inside themselves when content is taller than the screen.
- Fixed layering order (`css/style.css` header): atmosphere 0 · page 1 · rail 40 · top bar 50 · scrim 80 · panels 90 · toast 100 · loader 200.
- Videos load only when played; thumbnails are lazy-loaded; particles pause when the tab is hidden.
