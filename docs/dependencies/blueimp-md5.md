#### Purpose

Fetching profiled and images from Gravatar requires the MD5 hash of an email address.

#### Alternatives considered

- __Node's built in crypto module__\
  It doesn't seem possible to extract individual algorithms from crypto. The consequence is a minified bundle size of 431.78 KB compared with blueimp's 4.86 KB. The difference is significant and justifies the extra dependency.

#### Contingency plan

Change to one of the many other MD5 implementations available in JavaScript, or Node's built in crypto module as a last resort.
