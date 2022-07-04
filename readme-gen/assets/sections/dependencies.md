## Position

The position taken in this application is to view depenendencies as liabilities.
That's not to say dependencies should be avoided at all costs.
The constraints below are designed to minimise dependencies and encourage due diligence in cases where dependencies might be appropriate.

Further reading:
- [Unix philosophy - Wikipedia](https://en.wikipedia.org/wiki/Unix_philosophy)
- [Dependency Management Guidelines For Rails Teams - Brandon Dees](https://blog.engineyard.com/dependency-management-guidelines-for-rails-teams)
- [3 pitfalls of relying on third-party code libraries - Andy Henson](https://www.foxsoft.co.uk/3-pitfalls-of-relying-on-third-party-code-libraries/)

## Constraints

<%- await lib.renderDependencyConstraints() %>

Production dependencies need to be carefully considered in order to keep the bundle size small. We can be more liberal with development dependencies as they don't impact the bundle size.

The following sections lists all dependencies, including:

- Description and Homepage taken from package.json.
- Number of production dependencies followed by:
  - :boom: = 0 dependencies, :white_check_mark: = 1-9 dependencies, :warning: = 10+ dependencies
  - NB: There's no science behind these numbers. This is simply a guide to help keep the number of dependencies low.
  - NB: It would be even better to list the total number of dependencies in the entire dependency tree.
- Description of what the dependency is used for.
- Clarifying comments against the constraints listed above.
  
