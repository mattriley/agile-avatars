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
                noCloser: 'According to [this issue](https://github.com/blueimp/JavaScript-MD5/issues/26), the original use case was to hash email addresses for Gravatar.'
            }
        },
        'module-composer': {
            usedFor: 'Module composition / dependency injection.',
            comments: {
                noCloser: 'This library was extracted from Agile Avatars.'
            }
        },
        'vanilla-picker': {
            usedFor: 'Presenting a color picker to change the color of a role.'
        },
        'c8': {
            usedFor: 'Code coverage',
            alternativesConsidered: {
                nyc: 'nyc was originally used for code coverage and was fine however c8 was chosen for leveraging [native coverage](https://nodejs.org/dist/latest-v10.x/docs/api/cli.html#cli_node_v8_coverage_dir) in recent versions of Node and V8'
            }
        },
        'chokidar-cli': {
            usedFor: 'Running tests automatically on file change.'
        },
        'doctoc': {
            usedFor: 'Generating README table of contents.'
        },
        'ejs': {
            usedFor: 'Generating README from a template.'
        },
        'eslint': {
            usedFor: 'Linting and code formatting.',
            alternativesConsidered: {
                prettier: 'Prettier was originally used for code formatting but was dropped due to limited configurability.'
            }
        },
        'husky': {
            usedFor: 'Running pre-commit validation scripts.'
        },
        'jsdom': {
            usedFor: 'Emulating a web browser so tests can be run with Node.js for speed.',
            comments: {
                lowImpact: 'There does not seem to be any viable replacement for JSDOM. The fallback would be to run the tests in a browser. The cost is estimated to be low.'
            }
        },
        'module-indexgen': {
            usedFor: 'Generating index.js files.',
            comments: {
                noCloser: 'This library was extracted from Agile Avatars.'
            }
        },
        'parcel-bundler': {
            usedFor: 'Bundling the application.',
            comments: {
                noDeps: 'Parcel has many dependencies. An exception is made for ease of use.',
                lowLearning: 'Designed to be easier to use than webpack.'
            }
        },
        'tap-mocha-reporter': {
            usedFor: 'Formatting test output. Supports indented TAP output.'
        },
        'zora': {
            usedFor: 'Lightweight test harness optimised for speed and simplicity.',
            alternativesConsidered: {
                tape: 'tape was originally used however zora is newer and has some advantages over tape.'
            }
        }
    }
};
