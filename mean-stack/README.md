## Angular Security MasterClass - Web Security Fundamentals Course

This course is currently ongoing development, please make sure to checkout the branch
mentioned at the beginning of each course section.

In the end this master branch will contain the complete code of the course.

## JavaScript Security Engineering Demo

Many examples are here, first of all for CSRF run this script without `checkCsrfToken` enabled, and redirect to the vulnerable CSRF form. Secondly, run this with `checkCsrfToken` enabled.

Regarding HS256/RS256 showcase generating JWT and its checks. Pay attention into very similar (just 1-2 characters difference in payload) header and payload, which means it's deterministic. Showcasing something probabilistic might be also an interesting use case.

For passwords - run `hash.js` and `hash-salt.js` showing for the same password without salt we're getting the same hash. For the same password with salt, we're getting always different hash.
