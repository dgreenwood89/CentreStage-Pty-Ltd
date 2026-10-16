# Project notes

- When syncing the website (copying CentreStage.dc.html to index.html and 404.html), also regenerate frozenvip/index.html: a copy of CentreStage.dc.html with title, description, canonical, og:title/description/url, twitter:title/description set to "CentreStage | Private invitation" / "A private invitation from CentreStage." / https://centrestage.org.au/frozenvip/, and robots set to "noindex, nofollow, noarchive". In that copy, change the base-href script regex from replace(/[^\/]*$/,'') to replace(/[^\/]*\/[^\/]*$/,'') so assets resolve from the site root.
- /frozenvip is linked from the footer only ("VIP invitations"). Never add it to the menus, sitemap or robots.txt.

- Also regenerate frozencastbio/index.html from "Frozen Cast Bio.dc.html" whenever that file changes: insert <base href="/">, robots "noindex, nofollow, noarchive", and title/og "CentreStage | Cast portal" after <head>. It is linked from the footer only ("Frozen cast bios"); never in menus, sitemap or robots.txt.
- Never publish private/ (cast bio codes CSV) to GitHub.
