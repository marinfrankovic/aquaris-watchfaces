# AQUARIS watch-face catalog

Public showcase for AQUARIS watch faces by Marin Frankovic.

**Website:** https://marinfrankovic.github.io/aquaris-watchfaces/

**R01 details:** https://marinfrankovic.github.io/aquaris-watchfaces/?face=r01

This repository contains the website and approved simulator screenshots only. Watch-face source, developer signing keys, PRG/IQ packages, device data, and development configuration belong outside this repository. There are no watch-face downloads or purchase links.

## Preview and publish

Open [index.html](index.html) in a desktop browser. No build step, package installation, server, external font service, analytics, or account is needed. JavaScript renders the catalog from [catalog.js](catalog.js); the installation guide and disclaimer remain available without it.

GitHub Pages serves `main` from the repository root. Push approved site changes to `main` to publish. Keep the repository public; the private watch-face development repository must never be used as the Pages source.

## Add a watch face

1. Add a new object to the array in [catalog.js](catalog.js), using R01 as the schema. Give it a stable unique `id` and the next series name, such as R02. Each entry gets a shareable `?face=id` detail view.
2. Provide `compatibleWatches` with a name and validation status for each supported Garmin watch, plus a `compatibilityNote`. State known limitations; do not infer model support from equal display sizes or shared simulator profiles.
3. Add curated PNG images under `assets/`, with meaningful alt text and captions identifying simulator versus physical-watch captures. Keep the square image format, and crop away desktop UI and private information.
4. Describe actual features, settings, units, data freshness, missing-data behavior, and limitations. Update installation guidance if the process differs for a new project.
5. Test both display-mode buttons, the detail link, collection navigation, unknown IDs, images, and horizontal overflow at desktop and mobile sizes. Keep generated validation screenshots outside the public repository.
6. Review `git diff --cached` and `git status --ignored --short`. Confirm no source files are silently ignored and no secrets, local paths, `.prg`, `.iq`, signing keys, debug files, or private project content enter the commit.

## Assets and compatibility

R01 is currently declared for **Garmin fenix 8 AMOLED 47 mm (454 x 454)** only. Other case sizes and watch families are not listed as supported.

- `assets/r01-active.png`: latest active-mode Garmin IQ simulator capture, cropped at native resolution.
- `assets/r01-aod.png`: low-power two-zone simulator capture, cropped at native resolution. No brightness enhancement is applied.
- `assets/aquaris.svg`: AQUARIS wave mark used by this showcase.

The current R01 details distinguish simulator validation from physical-watch testing. Screenshots illustrate the design, not guaranteed sensor readings, battery life, or display behavior on every device.

## Disclaimer

AQUARIS is an independent personal project, not affiliated with or endorsed by Garmin or Casio. Trademarks belong to their owners. Software and previews are provided as-is; readings are not medical advice or safety-critical navigation data. Read the full disclaimer on the website before installing a separately supplied build. Public repository access does not grant a separate license to redistribute the watch-face artwork or branding.