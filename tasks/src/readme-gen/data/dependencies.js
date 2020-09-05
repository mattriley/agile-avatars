module.exports = {
    constraints: {
        noHype: 'Not driven by hype or popularity',
        noNative: 'No alternative built into JavaScript exists',
        noVanilla: 'Non-trivial to implement with vanilla JavaScript',
        noNode: 'No alternative built into Node.js exists',
        noCloser: 'No alternative that more closely matches the need exists',
        noDeps: 'No alternative with fewer dependencies exists',
        lowLearning: 'Low learning curve',
        lowMaintenance: 'Low maintenance',
        lowChange: 'Low likelihood of changing in a material way',
        lowImpact: 'Low impact of material change'
    },
    dependencies: {
        '@sentry/browser': {
            usedFor: 'Integration with [Sentry](https://sentry.io/) for monitoring and alerting.'
        },
        'blueimp-md5': {
            usedFor: 'Hashing of email addresses for use with the Gravatar service.',
            comments: {
                noNative: 'JavaScript does not feature a built-in MD5 implementation.',
                noNode: 'The crypto module supports MD5. It does not seem possible to extract individual algorithms from crypto. The consequence is a minified bundle size of 431.78 KB compared with 4.86 KB for blueimp-md5 which is a significant difference.',
                noCloser: 'According to [this issue](https://github.com/blueimp/JavaScript-MD5/issues/26), the original use case was to hash email addresses for Gravatar.',
                noDeps: 'blueimp-md5 has zero dependencies.',
                lowImpact: 'The cost of identifying and integrating an alternative MD5 implementation is estimated to be low.'
            }
        },
        'lodash': {
            usedFor: 'Utility functions for when there is no suitable built-in JavaScript alternative.',
            comments: {
                noNative: 'Many lodash utility functions do have suitable built-in JavaScript alternatives. lodash is only used where this is not the case.',
                noCloser: 'Each lodash utility function does have a standalone package available on NPM. Given more than a couple of utility functions are being used, a single dependency on lodash is easier to manage.',
                noDeps: 'lodash has zero dependencies.',
                lowImpact: 'The cost of identifying and integrating an alternative utility library is estimated to be low.'
            }
        },
        'module-composer': {
            usedFor: 'Module composition / dependency injection. Extracted from Agile Avatars.',
            comments: {
                noCloser: 'This library was built with the specific constraints of Agile Avatars in mind.',
                lowImpact: 'The fallback would be to copy the code back into Agile Avatars. The cost is estimated to be low.'
            }
        },
        'vanilla-picker': {
            usedFor: 'Presenting a color picker to change the color of a role.',
            comments: {
                lowImpact: 'The cost of identifying and integrating an alternative color picker is estimated to be low.'
            }
        },
        'c8': {
            usedFor: 'Code coverage',
            comments: {
                lowImpact: 'To cost of identifying and integrating an alternative code coverage tool is estimated to be low.'                
            },
            alternativesConsidered: {
                nyc: 'nyc was originally used for code coverage and was fine however c8 was chosen for leveraging [native coverage](https://nodejs.org/dist/latest-v10.x/docs/api/cli.html#cli_node_v8_coverage_dir) in recent versions of Node and V8'
            }
        },
        'ejs': {
            usedFor: 'Generating README from a template.',
            comments: {
                lowImpact: 'The cost of identifying and integrating an alternative templating library is estimated to be low.'
            }
        },
        'eslint': {
            usedFor: 'Linting and code formatting.',
            comments: {
                lowImpact: 'The cost of identifying and integrating an alternative linter is estimated to be low.'
            },
            alternativesConsidered: {
                prettier: 'Prettier was originally used for code formatting but was dropped due to limited configurability.'
            }
        },
        'jsdom': {
            usedFor: 'Emulating a web browser so tests can be run with Node.js for speed.',
            comments: {
                lowImpact: 'There does not seem to be any viable replacement for JSDOM. The fallback would be to run the tests in a browser. The cost is estimated to be low.'
            }
        },
        'module-indexgen': {
            usedFor: 'Generating index.js files. Extracted from Agile Avatars.',
            comments: {
                noCloser: 'This library was built with the specific constraints of Agile Avatars in mind.',
                lowImpact: 'The fallback would be to either copy the code back into Agile Avatars, or to simply drop the dependency and edit index.js files manually. The cost is estimated to be low.'
            }
        },
        'parcel-bundler': {
            usedFor: 'Bundling the application.',
            comments: {
                noDeps: 'Parcel has many dependencies. An exception is made for ease of use.',
                lowLearning: 'Designed to be easier to use than webpack.',
                lowImpact: 'The cost of identifying and integrating an alternative bundler is estimated to be low.'
            }
        }
    }
};