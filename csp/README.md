# FedexTest

This is a test application for FedEx frontend case:

## JavaScript Security Engineering Demo

Run this with/without CSP enabled for the case of sending a POST request to specific URL. Note: ON/OFF for unsafe-inline CSS might be a better use case to differentiate between CSP and CORS better.

## Requirements

1. :white_check_mark: SPA form
2. :white_check_mark: First name, last name, e-mail and password
3. :white_check_mark: All these fields are required
4. :white_check_mark: Password validation:

- :white_check_mark: Minimum 8 characters
- :white_check_mark: Should have lower and uppercase letters
- :white_check_mark: Shouldn't contain user's first or last name

5. :white_check_mark: Email validation (using Angular's validator and minor custom checks)
6. :white_check_mark: Send a POST request to [https://demo-api.now.sh/users](https://demo-api.now.sh/users) in a JSON such as

```
{
  firstName: "Thomas",
  lastName: "Shelby",
  email: "thomas@shelby.co.uk"
}
```

## Tools to use

1. :white_check_mark: Latest Angular and TypeScript
2. :white_check_mark: UX/UI based on a CSS Framework (using latest Angular Material)
3. :white_check_mark: Don't bother about old borwsers
4. :white_check_mark: Solution is available on GitLab, here

## Review criteria

- Correctness – Is it production-ready application? Does the application do what was asked? If not, does the README explain why it is missing and/or different?
- Code quality – Are there any code smells? Is the coding style consistent with the Angular style guide?
- Testing - Is your logic covered with unit or integration tests?
- UX – Is the web interface understandable and pleasing to use?
- Documentation – Is there a README covering how to build and run your project?
- Technical choices – Are choices of libraries, architecture etc. appropriate for the task?

## How to run

Assuming that you have installed `Node.js` and `npm` on your machine please do the following commands in the terminal to run this application locally:

1. `git clone https://gitlab.com/danieldanielecki/fedex-test.git` please remember about the default `master` branch. The other branches I'm leaving you for investigation
2. `npm install`
3. `npm run serve` or `ng serve` or if you're using Docker `docker-compose -f "docker-compose.yml" up -d --build`
4. Visit `localhost:4200` in your preferred browser (please don't use Internet Explorer)

### Server-Side Rendering (SSR) locally using ng

1. `git clone https://gitlab.com/danieldanielecki/fedex-test.git` please remember about the default `master` branch. The other branches I'm leaving you for investigation
2. `npm install`
3. `npm run dev:ssr`
4. Visit `localhost:4200` in your preferred browser (please don't use Internet Explorer)

### Server-Side Rendering (SSR) locally using Node

1. `git clone https://gitlab.com/danieldanielecki/fedex-test.git` please remember about the default `master` branch. The other branches I'm leaving you for investigation
2. `npm install`
3. `npm run build:ssr`
4. `npm run serve:ssr`
5. Visit `localhost:4000` in your preferred browser (please don't use Internet Explorer)

Disclaimer: the deployed application is takes an advantage of `Cloud Functions for Firebase` to render SSR.

## About

The application generally contains what was required, on top of this there are several additions:

1. GitHub Flow-like, as wrote the `feature` branches I'm leaving only for the reason to show it, in real projects after every merge to the `develop` branch the `feature` branches should be removed.
2. Automated deployment to Firebase, which consits of these (automated) steps:

- Build
- Test
  - Known vulnerabilities using `audit-ci` (`Vulnerabilities`) - that's the reason why **not** `yarn`, in most cases you can fix these simply `npm audit fix`. Unfortunately, for this case during the day of deployment one of unfeasible to fix packages got something and therefore there are something like 15 medium vulnerabilities within this app deployed.
  - Style formatting (`Quality` in pipelines) - to keep track of consitent code
  - Static Code Application Security Testing (`SAST` in pipelines) - basically linting
  - Unit Testing (`Unit` in pipelines) - using `Jest`, code coverage around 90%
  - End-to-End Testing (`E2E` in pielines) - using `Cypress`, several sample test cases
- Staging - deployment to staging environment [https://fedex-staging.firebaseapp.com](https://fedex-staging.firebaseapp.com)
- Mozilla Observatory to check security on the staging environment. This is just a showcase how to include this in the pipeline, to do so Server Side Rendering (SSR) with (for example) Firebase Cloud Functions is required, within this deadline it wasn't possible.
- Production - deployment to production environment [https://fedex-production.firebaseapp.com](https://fedex-production.firebaseapp.com)
- Mozilla Observatory to check security on the staging environment. This is just a showcase how to include this in the pipeline, to do so Server Side Rendering (SSR) with (for example) Firebase Cloud Functions is required, within this deadline it wasn't possible.

Update 29.03.2021: unfortunately, to have working `SSR` using `Cloud Functions for Firebase` some changes have been introduced after upgrading the project. Now, the SSR has been added, but `ng deploy` (new way of deploying to `Firebase`) doesn't work with CI systems. Read more in [Issue#2523](https://github.com/angular/angularfire/issues/2523) and [PR#2327](https://github.com/angular/angularfire/pull/2327).

3. `Docker`
4. Monorepository `Nx`
5. Application architecture to distinguish between `CoreModule`, `SharedModule` and other (`FeatureModule`'s)
6. Responsive Web Design using `Angular Grid Layout` (`CSS Flexbox` + `CSS Grid Layout`)
7. `ARIA` tested `ChromeVox`
8. `SweetAlert`'s for user information
9. `JSDoc` for documentation of the core logic
10. Accessibility plugin `Agastya`
11. Progressive Web Application
12. (New) Angular Universal/SSR using `Cloud Functions for Firebase` on deployment, or locally as described in "How to run"
13. (New) Content Security Policy (CSP) with Security Headers
14. (New) TypeScript's Strict Security Compiler Rules, more than just `ng new myProject --strict`, source: [my thesis, section 4.2.2. Compilers Rules, pages 34 - 36](https://www.utupub.fi/bitstream/handle/10024/148335/Master%20of%20Science%20Technology%20Thesis%20-%20Daniel%20Danielecki.pdf)
15. (New) `robots.txt` and `sitemap.xml` included

## Lighthouse results

- Performance 81/100
- Accessibility 100/100
- Best Practices 93/100
- SEO 83/100
- Progressive Web App :white_check_mark:

## Vulnerabilities remark

Vulnerabilities could've been removed if SSR wouldn't be enabled. `Cloud Functions for Firebase` are known of causing quite many turbulences to have it working. Hence, a specific versions of `firebase-admin` and `firebase-tools` packages were required. From security point of view, it has introduced some vulnerabilities. That's part of `devDependencies` though, so theoretically in the deployed production-ready bundle it 

## Feedback

1. One test is without `expect` https://gitlab.com/danieldanielecki/fedex-test/-/blob/master/libs/home/src/lib/home/validators/validator.names-in-password.spec.ts#L25-32
2. Validation could've been done in less naive way without if/else, but in some kind of regular expressions + `concat` combination
