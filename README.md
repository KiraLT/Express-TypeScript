# Express-TypeScript

[![Docker](https://github.com/KiraLT/Express-TypeScript/workflows/Docker/badge.svg?branch=master)](https://github.com/users/KiraLT/packages/container/package/Express-TypeScript)
[![CodeQL](https://github.com/KiraLT/Express-TypeScript/workflows/CodeQL/badge.svg?branch=master)](https://github.com/KiraLT/Express-TypeScript/actions?query=workflow%3ACodeQL)
[![Dependencies](https://david-dm.org/KiraLT/Express-TypeScript.svg)](https://david-dm.org/KiraLT/Express-TypeScript)

ExpressJS + TypeScript template

## Dependencies

### Core

* [TypeScript](https://www.typescriptlang.org/) - a language which builds on JavaScript, by adding static type definitions.
* [ExpressJS](https://expressjs.com) - Fast, unopinionated, minimalist web framework for Node.js.
* [express-async-errors](https://www.npmjs.com/package/express-async-errors) - `async` / `await` support for `ExpressJS`.
* [cors](https://www.npmjs.com/package/cors) - node.js package for providing a `Connect`/`Express` middleware that can be used to enable [CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing) with various options.


### Optional

* [swagger-ui-express](https://www.npmjs.com/package/swagger-ui-express) - allows you to serve auto-generated [swagger-ui](https://swagger.io/tools/swagger-ui/) generated API docs from express, based on a `swagger.yaml` file.
* [winston](https://www.npmjs.com/package/winston) - logging library.
* [yamljs](https://www.npmjs.com/package/yamljs) - yaml parser, used for parsing `swagger.yaml`.


### Tools

* [prettier](https://prettier.io/) - it is an opinionated code formatter. It enforces a consistent style by parsing your code and re-printing it with its own rules that take the maximum line length into account, wrapping code when necessary.
* [nodemon](https://www.npmjs.com/package/nodemon) - dev server with live reload support.
* [ts-node](https://www.npmjs.com/package/ts-node) - `TypeScript` execution and REPL for node, requied for `Nodemon` to work.
 
## Commands

* `npm run start` - run JavaScript entry point (run `build` first)
* `npm run build` - compile `TypeScript` to JavaScript
* `npm run dev` - run `TypeScript` dev server with live reload
* `npm run prettify` - format all code using [prettier](https://prettier.io/)

## CI/CD

### Github

#### Codeql analysis

This action runs GitHub's industry-leading static analysis engine, CodeQL, against a repository's source code to find security vulnerabilities. It then automatically uploads the results to GitHub so they can be displayed in the repository's security tab

> [Documentation](https://github.com/github/codeql-action)

#### Docker publish container

This action pushes docker image to GitHub public ghcr.io container registry. After each commit container is published with `latest` tag. After new version release (git tag which matches `vX.X.X`) container is published with version tag (without `v`).

**Requied secrets:**

* `IMAGE_NAME` - docker image name.
* `CR_PAT` - [personal access token](https://docs.github.com/en/free-pro-team@latest/packages/managing-container-images-with-github-container-registry/pushing-and-pulling-docker-images#authenticating-to-github-container-registry).

> [Documentation](https://docs.github.com/en/free-pro-team@latest/packages/managing-container-images-with-github-container-registry/pushing-and-pulling-docker-images)

### GitLab

This package is compatible with GitLab [Auto DevOpts](https://docs.gitlab.com/ee/topics/autodevops/), it should be [enabled in settings](https://docs.gitlab.com/ee/topics/autodevops/#enablingdisabling-auto-devops).

## Deployment

### Heroku

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/KiraLT/torrent-stream-server)
