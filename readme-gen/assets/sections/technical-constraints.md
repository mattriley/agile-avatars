### General

- No languages that compile to JavaScript, e.g. TypeScript.  
- No frameworks, e.g. Angular, Vue.  
- No view rendering libraries, e.g. React.  
- No CSS-in-JS libraries, e.g. Styled Components.  
- No CSS pre-processors, e.g. SASS, SCSS.  
- No state management libraries, e.g. Flux, Redux.  
- No functional programming libraries, e.g. Rambda, Immutable.  
- No general purpose utility libraries, e.g. Lodash, Underscore.  
- No task runners, e.g. Grunt, Gulp.  
- No globals. Access to _window_ strictly controlled.  
- No classes/prototypes.  

Further reading:

- [List of languages that compile to JS](https://github.com/jashkenas/coffeescript/wiki/List-of-languages-that-compile-to-JS)
- [The Brutal Lifecycle of JavaScript Frameworks - Ian Allen](https://stackoverflow.blog/2018/01/11/brutal-lifecycle-javascript-frameworks/)
- [You Might Not Need TypeScript (or Static Types) - Eric Elliott](https://medium.com/javascript-scene/you-might-not-need-typescript-or-static-types-aa7cb670a77b)
- [The Shocking Secret About Static Types - Eric Elliott](https://medium.com/javascript-scene/the-shocking-secret-about-static-types-514d39bf30a3)
- [The TypeScript Tax - Eric Elliot](https://medium.com/javascript-scene/the-typescript-tax-132ff4cb175b)

### Testing

- Optimised for speed/fast feedback. Single digit seconds for entire suite.
- No compilation/pre-processing required to run tests.
- No globals. e.g. Mocha, Jest.
- No hooks. e.g. _beforeEach_, _afterEach_.
- No BDD-style assertion libraries, e.g. _should_ or _expect_ found in Mocha, Jest.
- No mocking libraries, e.g. Sinon, Jest.    
- No circumvention of the module loading system, e.g. Rewire, Proxyquire, Jest.

#### Further reading

- [Mocks Aren't Stubs - Martin Fowler](https://martinfowler.com/articles/mocksArentStubs.html)
- [Classical and Mockist Testing](https://martinfowler.com/articles/mocksArentStubs.html#ClassicalAndMockistTesting)
- [Mockists Are Dead. Long Live Classicists - Fabio Pereria, ThoughtWorks](https://www.thoughtworks.com/insights/blog/mockists-are-dead-long-live-classicists)
- [TDD test suites should run in 10 seconds or less - Mark Seemann](https://blog.ploeh.dk/2012/05/24/TDDtestsuitesshouldrunin10secondsorless/)
- [I strongly recommend that you skip all BDD style assertion libraries - Eric Elliott](https://medium.com/@_ericelliott/i-strongly-recommend-that-you-skip-all-bdd-style-assertion-libraries-including-code-acae26344d4)
- [Mocking is a code smell - Eric Elliott](https://medium.com/javascript-scene/mocking-is-a-code-smell-944a70c90a6a)
