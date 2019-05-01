# blog
[![Netlify Status](https://api.netlify.com/api/v1/badges/7c10f21b-3acc-43d6-bbc9-5566ccaf6821/deploy-status)](https://app.netlify.com/sites/kohlicekjan-blog/deploys)
[![Build Status](https://travis-ci.org/kohlicekjan/blog.svg?branch=master)](https://travis-ci.org/kohlicekjan/blog)
[![Dependency Status](https://david-dm.org/kohlicekjan/blog.svg)](https://david-dm.org/kohlicekjan/blog)
[![Known Vulnerabilities](https://snyk.io/test/github/kohlicekjan/blog/badge.svg)](https://snyk.io/test/github/kohlicekjan/blog)
[![GitHub license](https://img.shields.io/github/license/kohlicekjan/blog.svg)](https://github.com/kohlicekjan/blog/blob/master/LICENSE)

Jan Kohlíček's personal blog powered by Gatsby.

Visit the actual site at [kohlicekjan-blog.netlify.com](https://kohlicekjan-blog.netlify.com)

## Getting Started

### Installation

Prerequisites: Node.js (>=10), npm version 6+.

Clone the `blog` repository using git:
```sh
$ git clone https://github.com/kohlicekjan/blog
$ cd blog/
```

Install dependencies:
```sh
$ npm install
```

### Build
Static files will be built to `public/`
```sh
$ npm run build
```

### Start the server
```sh
$ npm run serve
```

Your site is now running at `http://localhost:8000`

<!--
## Docker
```sh
docker build -t kohlicekjan/blog .
```

```sh
docker run -it --rm -p 8082:8081 kohlicekjan/blog:latest
```
 -->