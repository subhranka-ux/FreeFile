# FreeFile — Phase 1

A premium-minimal, privacy-first foundation for a free file utility website.

## Phase 1 scope

Included and implemented:
- Responsive homepage and navigation
- Eight tool categories
- Search across the Phase 1 tool directory
- Category filtering
- Favourites saved in local browser storage
- Recently previewed tools saved locally
- Light and dark themes with saved preference
- Clear local favourites and recent list
- PWA manifest and service worker shell caching
- Cloudflare Pages static deployment configuration
- Accessible labels, focus styles, reduced-motion support
- No accounts, ads, payment flows or remote file uploads

Important: the tool catalogue is a roadmap preview. The cards are explicitly marked **Planned**. The PDF, image, document, archive, audio, video and QR processing engines are not implemented in Phase 1. A card click explains that the tool is planned; it does not fake a conversion.

## Requirements

- Node.js 20.19+ or 22.12+
- npm

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Validate and build

```bash
npm run typecheck
npm run build
npm run preview
```

The production site is generated in `dist/`.

## Deploy to Cloudflare Pages

1. Create a GitHub repository and upload the contents of this project.
2. In Cloudflare, open **Workers & Pages** and create a Pages project connected to the repository.
3. Set the build command to `npm run build`.
4. Set the build output directory to `dist`.
5. Use Node.js 20.19+ or 22.12+ in the build environment.
6. Deploy.

No environment variables or backend services are required for Phase 1.

## GitHub Pages note

This project is configured with `base: "/"` for Cloudflare Pages and root-domain hosting. If you deploy to a GitHub Pages project subpath, update `base` in `vite.config.ts` to `"/REPOSITORY_NAME/"` and update the PWA service worker scope/start URL accordingly.

## Privacy notes

Phase 1 does not upload user files. Favourites, recent previews and theme preference are stored in localStorage. The clear-local-data control clears favourites and recent previews; the theme preference remains. Browser storage may be unavailable or cleared by the browser, and the app remains usable.

The service worker caches the app shell and same-origin static assets. It does not cache arbitrary file uploads.

## Quality and release status

Phase 1 is a UI and application-foundation milestone, not the completed FreeFile product. The planned tools must be implemented and tested in later phases before they are presented as working services.

Automated build/type checks should be run in the target environment after dependency installation. Test on current Android Chrome and desktop browsers before public release.
