# Pizza42 - Overview

Three operating environments for the online Pizza shop:

1. [Live production][1] Kubernetes ([OpenShift][2]) environment
2. Local Kubernetes environment for development, based on [OpenShift's 'oc cluster up'][3]
3. Local node.js setup

## Completed Tasks

- [x] Show how a new customer can sign up and an existing customer can sign in with email/password or Google
- [x] Ensure that if a customer signs in with either an email/password or Google, it will be treated as the same user if they use the same email address
> If the user doesn't use Google, we won't be able to get connection count
- [x] Show that the solution can be built as a “modern” web application (SPA) which can then securely call the API backend of Pizza 42 using OAuth.
- [x] Require that a customer has a verified email address before they can place a pizza order, but they should still be able to sign into the app.
- [x] Use Auth0 features to gather additional information about a user (specifically their gender) without prompting them directly.
> By ensuring use of appropriate scope
- [x] Use Auth0 to call the Google People API to fetch the total number of Google connections a user has and store that count in their user profile.

# TODO

- [ ] Add pizza menu to the website
- [ ] Add a environment management file to use during build


[1]: http://pizza42-pizza42.e8ca.engint.openshiftapps.com/
[2]: https://www.openshift.com/
[3]: https://github.com/openshift/origin/blob/master/docs/cluster_up_down.md