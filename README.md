# Lara Zanotti TESOL Teaching Portfolio

This folder contains a responsive, multi-page static portfolio for local preview or static hosting. It uses HTML, CSS, and a small JavaScript file; there is no build step, server, database, login, or third-party runtime dependency.

## Files and folders

```text
tesol-portfolio/
├── index.html
├── about.html
├── teaching-philosophy.html
├── resume.html
├── syllabus-calendar.html
├── lesson-plans.html
├── teaching-video.html
├── materials.html
├── contact.html
├── styles.css
├── script.js
├── README.md
└── assets/
    ├── documents/
    │   ├── Lara-Zanotti-Resume.docx
    │   ├── Sample-Reading-Course-Syllabus-and-Calendar.docx
    │   ├── Lesson-Plan-Asking-for-Directions.docx
    │   ├── Lesson-Plan-Explaining-Charts-and-Graphs.docx
    │   └── Lesson-Plan-Ordering-Food.docx
    └── images/
        └── Profile-Picture.jpg
```

## Supplied materials used

- Profile photograph, introduction, and teaching philosophy.
- The expanded CV as the résumé source, revised to reflect the current TESOL master's status and to generalize institution and staff names.
- An anonymized reading syllabus and grouped course calendar.
- Three representative lesson plans: asking for directions, explaining charts and graphs, and ordering food.
- A description of the supplied reading-skills assessment and other slide/activity materials.

## Materials intentionally not published in original form

- The original slide decks are not included because their images and identifying details have not been checked for public release. Their activity purposes are summarized on the Materials page.
- The original reading assessment is not attached. It contains third-party reading material and should receive a permissions and answer-key review before public distribution. One answer key states 12,000 miles where the passage text states 1,200 miles.
- Institutional and placement names, class identifiers, staff names, and student identifiers have been removed or generalized in the public portfolio and downloadable files.
- A teaching video is intentionally marked as forthcoming.

## Placeholder replacement checklist

| Exact text | File | Location | Replace with |
| --- | --- | --- | --- |
| Forthcoming | `teaching-video.html` | Teaching Video page status | Video title, approved viewing or embed link, lesson context, reflection, and captions or transcript when available. |

## Privacy review before publishing

GitHub Pages, Cloudflare Pages, and Vercel publish a public website. The portfolio includes the phone number, email address, and LinkedIn profile supplied in the CV, and it uses the supplied portrait. Confirm those details are intended for public access. Review the source documents and any future videos or slides for learner faces, names, school identifiers, metadata, and permission to share. The original slide decks and reading assessment are not included in this package.

## Accessibility checks and remaining review

- Semantic page landmarks, one main heading per page, consistent navigation, a skip link, descriptive link names, an image alternative, and a labeled mobile navigation button are included.
- Keyboard focus styling, a keyboard-operable mobile menu with Escape support, reduced-motion handling, responsive layouts, print styles, and table headers are included.
- Palette contrast was checked for normal text and interactive elements; the site is designed to target WCAG 2.2 AA.
- Static source checks confirmed page titles, language, headings, landmarks, image text alternatives, navigation references, and local links. Keyboard behavior and responsive rules were reviewed in the source. A browser-based keyboard-only test and screen-reader review could not be run here; verify them again on the published site. Review captions or a transcript when a video is added. Third-party Word and external LinkedIn/mail/phone handlers are outside this site's control.
- This is not a claim of certified WCAG conformance. Recheck with the hosting URL and assistive technology before sharing with an employer or program.

## Preview locally

1. Extract this ZIP so the folder `tesol-portfolio` remains intact.
2. Open a terminal in that folder.
3. Run `python -m http.server 8000` (or `python3 -m http.server 8000`).
4. Open `http://localhost:8000` in a browser.
5. Use the menu links and verify each download. Test at a narrow viewport and with keyboard-only navigation.
6. Stop the server with Ctrl+C.

Opening `index.html` directly may work, but a local web server better matches how the site will behave online.

## Publish with GitHub Pages

GitHub Pages is a beginner-friendly choice for this plain static site. It does not require a build command. A Pages site is public even if the repository settings or surrounding account context may feel private, so review personal details and classroom content first.

1. Create or sign in to an account at [GitHub](https://github.com/).
2. Create a repository. A personal site uses the exact name `YOUR-USERNAME.github.io`; a project site can use `tesol-portfolio`.
3. For a project site on GitHub Free, use a public repository. A private repository does not automatically make the published website private.
4. Upload the complete contents of this folder, keeping `index.html` at the root and preserving the `assets/` structure. Do not upload the outer folder as an extra nested level.
5. Commit the files with a message such as `Add TESOL teaching portfolio`.
6. Open repository **Settings**, then **Pages**. Choose **Deploy from a branch**, select `main` and `/` (root), and save.
7. Wait for deployment, then open **Settings → Pages → Visit site**. The first deployment can take several minutes.
8. Test the public URL: each page, every download, portrait, navigation, mobile width, and keyboard access. Test while signed out or in a private browser window.

To update the site, edit the local copy, check the changed pages, upload the changed files to the same repository, and commit. Wait for the new deployment and recheck the public URL. If the site seems unchanged, check the Pages deployment status and refresh without the browser cache.

### Common GitHub Pages problems

- **404 or blank page:** ensure `index.html` is in the published root, Pages uses the intended branch/folder, and deployment has completed.
- **Missing styles or scripts:** check exact filenames, capitalization, and relative paths.
- **Missing downloads or images:** confirm the assets were uploaded and the `assets/documents/` and `assets/images/` paths match exactly.
- **Links work locally but fail online:** replace local computer paths with relative web paths and test on the published URL.
- **A project site's CSS or images fail:** keep relative paths; root-based paths such as `/styles.css` can point to the wrong location on a project site.
- **Updates do not appear:** check the latest commit and deployment, wait several minutes, then hard-refresh or use a private window.

If browser uploads are awkward, GitHub Desktop can clone the repository, copy the site files, commit changes, and push them. Still verify the file tree and Pages settings in GitHub.

## Hosting alternatives

**Cloudflare Pages** is useful for Git-connected deployments and preview URLs. Connect the GitHub repository under Workers & Pages, select the production branch (usually `main`), leave the build command blank for this site, and set the output directory to the folder containing `index.html` (the repository root). Future pushes can deploy automatically; test both preview and production URLs.

**Vercel** is useful for Git-connected previews or a future move to a framework. Import the GitHub repository, confirm the project root contains `index.html`, choose a no-framework/static configuration with no build command, and deploy. Future commits can create previews; verify production branch settings and test the live site.

Both alternatives publish public URLs. Neither needs a build step for this project. The Git repository remains the editable source; changes deploy after future commits or pushes.

## Requesting changes

Describe the page and the change in ordinary language. For example: “Make the About Me page warmer and shorter,” “Replace the forthcoming video message with my approved video link and transcript,” or “Add a new lesson plan and keep the link accessible.” Recheck privacy and accessibility before publishing updates.
