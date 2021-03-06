# My Start Page

Open source new tab extension

[![Netlify Status](https://api.netlify.com/api/v1/badges/f17a321d-5c04-496a-9350-64b5df3335e9/deploy-status)](https://app.netlify.com/sites/my-start-page/deploys)
[![Known Vulnerabilities](https://snyk.io/test/github/mikesprague/my-start-page/badge.svg?targetFile=package.json)](https://snyk.io/test/github/mikesprague/my-start-page?targetFile=package.json)
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fmikesprague%2Fmy-start-page.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2Fmikesprague%2Fmy-start-page?ref=badge_shield)

## Contents

- [About](#about)
- [Install](#install)
- [Demo](#demo)
- [Screenshots](#screenshots)
- [Uses](#uses)
- [License](#license)

## About

- Layout/design based on what I liked from the Momentum browser extension
- Date and time with greeting
- Current temp/conditions (powered by [Dark Sky](https://darksky.net/poweredby/))
- Random quote (from [Quotes on Design API](https://quotesondesign.com/api/))
- Random background image (from [Unsplash API](https://unsplash.com/developers/))
- Top posts from some useful sites
  - [GitHub Trending Repositories](https://www.github.com/trending/)
  - [DEV Community Recent Posts](htpps://dev.to/)
  - [Hacker News Top Posts](https://news.ycombinator.com/)
  - [Product Hunt Top Posts](https://producthunt.com/)
  - [Reddit Popular Posts](https://www.reddit.com/r/popular)

## Install

- [Chrome Store](https://chrome.google.com/webstore/detail/pjmobojmaaemcnoiccepkecplpddaaaa)
- Firefox - coming soon (works, not currently listed)

## Demo

Demo available as a progressive web app (PWA):

- [https://my-start.page](https://my-start.page)

## Screenshots

![My Start Page Screenshot One](./screenshot-1.png "My Start Page Screenshot One")
![My Start Page Screenshot Two](./screenshot-2.png "My Start Page Screenshot Two")
![My Start Page Screenshot Three](./screenshot-3.png "My Start Page Screenshot Three")
![My Start Page Screenshot Four](./screenshot-4.png "My Start Page Screenshot Four")

## Uses

- Demo hosting - [Netlify](https://www.netlify.com)
- Serveless functions used for backend API - [Netlify Functions](https://www.netlify.com/products/functions/)
- Dependency monitoring - [Snyk](https://github.com/snyk/snyk)
- Icons - [FontAwesome](https://fontawesome.com/)
- Font ([Roboto Slab](https://fonts.google.com/specimen/Roboto+Slab?query=roboto+slab)) - [Google Fonts](https://fonts.google.com/)
- Tooltips and content popups - [tippy.js](https://github.com/atomiks/tippyjs)
- Date/time lib - [dayjs](https://github.com/iamkun/dayjs)
- CSS framework (bc I am lazy) - [bootstrap](https://github.com/twbs/bootstrap)
  - NOTE: unused CSS bloat removed during webpack build
- HTTP lib/client - [axios](https://github.com/axios/axios/)
- Open source license compliance monitoring - [FOSSA](https://fossa.com/)

## License

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fmikesprague%2Fmy-start-page.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2Fmikesprague%2Fmy-start-page?ref=badge_large)

MIT License

Copyright (c) 2020 Michael Sprague

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
