# Project notes

- When syncing the website (copying CentreStage.dc.html to index.html and 404.html), also regenerate frozenvip/index.html: a copy of CentreStage.dc.html with title, description, canonical, og:title/description/url, twitter:title/description set to "CentreStage | Private invitation" / "A private invitation from CentreStage." / https://centrestage.org.au/frozenvip/, and robots set to "noindex, nofollow, noarchive". In that copy, change the base-href script regex from replace(/[^\/]*$/,'') to replace(/[^\/]*\/[^\/]*$/,'') so assets resolve from the site root.
- /frozenvip is linked from the footer only ("VIP invitations"). Never add it to the menus, sitemap or robots.txt.
