# JavaScript Security Engineering

This repository is for mine JavaScript Security Engineering 2.5 hours workshop with demos around

## Feedback

Lots of information, JWT part has 1 slide to improve regarding what "RS" (apparently that's hashing algorithm, not signature algorithm) and "256" (it's just length) means exactly according to definitions.

Also in JWT, PKC is so expensive in computation that's why asymmetric and symmetric crypto is combined, so it's not like symmetric crypto is not being used.

Crypto topic could've been covered more in depth, but it would give even longer talk. Generally speaking, each of those topic can be a separated conference talk.

From Web Security point of view, only SQL Injection was missing, but it wasn't too much related to JavaScript that's why it was skipped.

Don't know why `csrfCookie && csrfHeader && csrfCookie === csrfHeader` is set like this in CSRF example, not just `srfCookie === csrfHeader`. In addition to that, it'd pass if both would be undefined, then we'd have `undefined === undefined`.

As written, in CSP subfolder, something different than blocking a POST request could've been shown to differentiate better between CORS and CSP. Maybe `unsafe-inline` might be an interesting case
