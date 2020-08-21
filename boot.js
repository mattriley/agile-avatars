const composer = require('module-composer');
const src = require('./src');

module.exports = ({ window, ...overrides }) => {

    const context = composer(src, { overrides }, compose => {

        const config = compose('config', { window });
        const io = compose('io', { config, window });
        const util = compose('util', { config });
    
        const { stores, settings, subscriptions } = compose('storage', { config }, storage => storage.initialise());
    
        const core = compose('core', { config });
        const services = compose('services', { subscriptions, settings, stores, core, io, util, config });
        
        const elements = compose('elements', { io, window });
        const { el } = elements;
        compose('components', { el, elements, services, subscriptions, util, config, window });

    });

    context.services.system.initialise();
    window.agileavatars = context;
    return context;
    
};


// const merge = require('lodash.merge');
// const composer = require('module-composer');
// const src = require('./src');

// module.exports = ({ window, ...overrides }) => {

//     const context = composer(src, compose1 => {

//         const compose = (key, arg, cb) => {
//             const res1 = compose1(key, arg, res => {                
//                 return cb ? cb(res) : res;
//                 // const a = merge(res, overrides[key]);
//             });
//             console.log(key, res1);
//             return res1;
//         };
    
//         const { config } = compose('config', { window });
//         const { io } = compose('io', { config, window });
//         const { util } = compose('util', { config });
    
//         const { stores, settings, subscriptions } = compose('storage', { config }, ({ storage }) => storage.initialise());
    
//         const { core } = compose('core', { config });
//         const { services } = compose('services', { subscriptions, settings, stores, core, io, util, config });
        
//         const { elements } = compose('elements', { io, window });
//         const { el } = elements;
//         compose('components', { el, elements, services, subscriptions, util, config, window });
        

//     });

    
//     context.services.system.initialise();

//     console.log(context);
    
//     // const context = {        
//     //     elements,
//     //     components,
//     //     services,
//     //     storage,
//     //     state,
//     //     stores,
//     //     settings,
//     //     subscriptions,
//     //     util,
//     //     core,
//     //     io,
//     //     config,
//     //     window
//     // };


//     window.agileavatars = context;
//     return context;
    
// };


// const merge = require('lodash.merge');
// const composer = require('module-composer');
// const src = require('./src');

// module.exports = ({ window, ...overrides }) => {

//     const context = composer(src, compose1 => {

//         const compose = (key, arg, cb) => {
//             const res1 = compose1(key, arg, res => merge(res, overrides[key]));
//             const res2 = cb ? cb(res1) : { [key]: res1 };
//             return res2;
//         };
    
//         const { config } = compose('config', { window });
//         const { io } = compose('io', { config, window });
//         const { util } = compose('util', { config });
    
//         const { stores, settings, subscriptions } = compose('storage', { config }, storage => storage.initialise());
    
//         const { core } = compose('core', { config });
//         const { services } = compose('services', { subscriptions, settings, stores, core, io, util, config });
        
//         const { elements } = compose('elements', { io, window });
//         const { el } = elements;
//         compose('components', { el, elements, services, subscriptions, util, config, window });
        

//     });

    
//     context.services.system.initialise();

//     console.log(context);
    
//     // const context = {        
//     //     elements,
//     //     components,
//     //     services,
//     //     storage,
//     //     state,
//     //     stores,
//     //     settings,
//     //     subscriptions,
//     //     util,
//     //     core,
//     //     io,
//     //     config,
//     //     window
//     // };


//     window.agileavatars = context;
//     return context;
    
// };
