# Ebbsfleet Indian Community website

Static website for **ebbsfleetindiancommunity.co.uk**, hosted free on GitHub Pages.
`ebbsfleetindiancommunity.com` redirects here from a second, tiny repository (see the `eic-com-redirect` package).

## Pages

| File | Page |
|---|---|
| `index.html` | Home |
| `events.html` | Events & faith calendar |
| `directory.html` | Local business directory + "List or recommend a business" form |
| `gallery.html` | Photo gallery |
| `ask-padosi.html` | Ask Padosi (AI neighbour) |
| `sponsor.html` | Become a sponsor + "Register your interest" form |

Everything runs in the browser: no server or build step. `assets/` holds the logo, the small
`petite-vue` library that powers the interactive parts, and `eic-runtime.js`.

## One-time setup

### 1. Create the repository
1. Sign in at github.com and create a new **public** repository, e.g. `eic-website`.
2. Upload **every file in this folder** (including the hidden `.nojekyll` file and the `CNAME` file) to the root of the repository and commit.
   - Tip: on a Mac, press `Cmd + Shift + .` in Finder to see hidden files before dragging them in.

### 2. Turn on GitHub Pages
1. Repository → **Settings → Pages**.
2. *Source*: **Deploy from a branch** → Branch **main**, folder **/ (root)** → **Save**.
3. *Custom domain*: `ebbsfleetindiancommunity.co.uk` (already filled from the `CNAME` file) → **Save**.

### 3. Point the .co.uk domain at GitHub (at your domain registrar)
Delete any existing `A`/`AAAA` records for the root domain (`@`) first, then add:

| Type | Host / Name | Value |
|---|---|---|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| AAAA | @ | 2606:50c0:8000::153 |
| AAAA | @ | 2606:50c0:8001::153 |
| AAAA | @ | 2606:50c0:8002::153 |
| AAAA | @ | 2606:50c0:8003::153 |
| CNAME | www | `YOUR-GITHUB-USERNAME.github.io` |

### 4. Switch on HTTPS
DNS can take from a few minutes up to 24 hours. When **Settings → Pages** shows
"DNS check successful", tick **Enforce HTTPS**.

### 5. (Recommended) Verify the domain
**GitHub → your profile Settings → Pages → Add a domain** and follow the TXT-record steps.
This stops anyone else from claiming your domain on GitHub.

## Updating the site
Edit a file on github.com (pencil icon) or upload a replacement, then commit.
The live site updates within a minute or two.

## Good to know before launch
- **Forms:** "List your business" adds the listing on screen only (it isn't saved yet), and
  "Register your interest" opens the visitor's email app addressed to
  ebbsfleetindiancommunity@gmail.com. To receive form entries automatically, connect a form
  service such as Formspree or Web3Forms.
- **Ask Padosi** answers from the listings built into `ask-padosi.html`; questions it can't
  match open Google Search / Google Maps. A real AI answer needs a small backend.
- **Directory listings** came from directory.ebbsfleet.info — check with that team before launch.
- Placeholders still to fill: event times & venues, gallery photos, organiser photos.
