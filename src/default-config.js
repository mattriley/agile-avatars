/* eslint-disable no-undef */

export default {
    isTest: process.env.STAGE !== 'prod',
    mixpanelToken: process.env.MIXPANEL_TOKEN,
    app: {
        name: process.env.DISPLAY_NAME,
        issues: process.env.ISSUES_URL,
        source: process.env.SOURCE_CODE_URL
    },
    author: {
        name: process.env.AUTHOR_NAME,
        profile: process.env.AUTHOR_URL
    },
    gravatar: {
        domain: 'https://secure.gravatar.com',
        size: 600,
        fallbacks: [
            'robohash',
            'monsterid',
            'wavatar',
            'retro',
            'identicon',
            'mp'
        ],
        errorMessage: 'An error occurred. Please check your connection and try again.'
    },
    options: {
        layout: 'modes | shapes | size | spacing | sort | outline',
        modes: [
            'active',
            'passive'
        ],
        shapes: [
            'circle',
            'square'
        ],
        shapeRadius: {
            circle: 50,
            square: 0
        },
        active: {
            min: 0,
            max: 999,
            step: 1
        },
        passive: {
            min: 0,
            max: 999,
            step: 1
        },
        size: {
            min: 100,
            max: 600,
            step: 10
        },
        spacing: {
            min: 0,
            max: 10,
            step: 1
        },
        sort: {
            orderAdded: 'Order added',
            roleThenName: 'Role, then name',
            name: 'Name'
        }
    },
    tags: {
        layout: 'tagImage | tagName roleName',
        imagePadding: 17
    },
    roles: {
        nilRole: {
            roleName: '',
            color: '#ffffff'
        },
        presetColors: {
            BA: '#6688c3',
            DEV: '#48a56a',
            PO: '#ce4a4a',
            QA: '#eaaf41',
            TL: '#000000',
            XD: '#b25da6'
        }
    },
    debounce: {
        adjustTagInstanceCounts: 100,
        sortTagList: 50
    },
    storage: {
        stores: [
            'settings',
            'roles',
            'tags',
            'tagInstances'
        ],
        defaults: {
            settings: {
                app: {
                    modal: 'welcome',
                    nilRoleId: null
                },
                options: {
                    sort: 'orderAdded',
                    shape: 'circle',
                    active: 1,
                    passive: 0,
                    size: 170,
                    spacing: 4,
                    outline: true
                },
                gravatar: {
                    fallback: 'robohash',
                    freetext: '',
                    status: 'ready',
                    errorMessage: ''
                }
            }
        }
    }
};
