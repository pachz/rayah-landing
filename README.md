# Rayah Landing

Static marketing site for Rayah — HTML, CSS, and Tailwind.

**Dev:** `pnpm install` (or `npm install`), then `pnpm run dev` to watch and rebuild CSS.

**Build CSS once:** `pnpm run build`

Open `index.html` in a browser or serve the folder with any static server.

## Locales

Translations live in:

- `locales/en.json`
- `locales/ar.json`

When opening pages directly from disk (`file://`), browsers may block JSON fetch requests.  
In that case, the site falls back to `locales/locales.js`.

After editing locale JSON files, regenerate the fallback bundle:

- `npm run sync-locales` (or `pnpm run sync-locales`)

## Shared Layout (Navbar/Footer)

Shared layout partials live in:

- `partials/navbar.html`
- `partials/footer.html`

In static/file mode (`file://`), the site may use `js/shared-layout.js` as fallback for these partials.
After editing navbar/footer partials, regenerate fallback layout:

- `npm run sync-layout` (or `pnpm run sync-layout`)

- `python3 -m http.server 5500`