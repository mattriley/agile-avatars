// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"7Aums":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "fe4256060641b553";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id1][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"bNKaB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _css = require("./css/*.css");
var _compose = require("./compose");
var _composeDefault = parcelHelpers.interopDefault(_compose);
const isLocalhost = /localhost/.test(window.location.host);
const configs = [
    {
        gtag: {
            enabled: !isLocalhost
        }
    },
    {
        sentry: {
            enabled: !isLocalhost
        }
    }
];
const composition = (0, _composeDefault.default)({
    window,
    configs
});
const { config , modules  } = composition;
window.app = composition;
window.document.title = config.app.name;
const app = modules.startup.start();
document.getElementById("app").append(app);

},{"./css/*.css":"e8bJt","./compose":"h7Hg4","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e8bJt":[function(require,module,exports) {
const _temp0 = require("./app.css");
const _temp1 = require("./control-panel.css");
const _temp2 = require("./gravatar-spinner.css");
const _temp3 = require("./gravatar.css");
const _temp4 = require("./header.css");
const _temp5 = require("./image-upload-options.css");
const _temp6 = require("./modal.css");
const _temp7 = require("./nil-role.css");
const _temp8 = require("./options.css");
const _temp9 = require("./roles.css");
const _temp10 = require("./site.css");
const _temp11 = require("./tags.css");
const _temp12 = require("./tips.css");
module.exports = {
    "app": _temp0,
    "control-panel": _temp1,
    "gravatar-spinner": _temp2,
    "gravatar": _temp3,
    "header": _temp4,
    "image-upload-options": _temp5,
    "modal": _temp6,
    "nil-role": _temp7,
    "options": _temp8,
    "roles": _temp9,
    "site": _temp10,
    "tags": _temp11,
    "tips": _temp12
};

},{"./app.css":"kAqBG","./control-panel.css":"lbJQ1","./gravatar-spinner.css":"lzZ2Y","./gravatar.css":"fmsRK","./header.css":"fEdOe","./image-upload-options.css":"lpAaO","./modal.css":"kYEzY","./nil-role.css":"bzUOW","./options.css":"aECCS","./roles.css":"ksyl8","./site.css":"hT9aR","./tags.css":"28Y7d","./tips.css":"3SozC"}],"kAqBG":[function() {},{}],"lbJQ1":[function() {},{}],"lzZ2Y":[function() {},{}],"fmsRK":[function() {},{}],"fEdOe":[function() {},{}],"lpAaO":[function() {},{}],"kYEzY":[function() {},{}],"bzUOW":[function() {},{}],"aECCS":[function() {},{}],"ksyl8":[function() {},{}],"hT9aR":[function() {},{}],"28Y7d":[function() {},{}],"3SozC":[function() {},{}],"h7Hg4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _moduleComposer = require("module-composer");
var _moduleComposerDefault = parcelHelpers.interopDefault(_moduleComposer);
var _indexJs = require("./modules/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _defaultConfigJs = require("./default-config.js");
var _defaultConfigJsDefault = parcelHelpers.interopDefault(_defaultConfigJs);
const { storage , util  } = (0, _indexJsDefault.default);
exports.default = ({ window , overrides , configs  })=>{
    const { compose , config  } = (0, _moduleComposerDefault.default)({
        window,
        ...(0, _indexJsDefault.default)
    }, {
        overrides,
        defaultConfig: (0, _defaultConfigJsDefault.default),
        configs
    });
    // Data
    const { stores  } = compose("stores", {
        storage,
        config
    });
    const { subscriptions  } = compose("subscriptions", {
        stores,
        util
    });
    // Domain
    const { core  } = compose("core", {
        util,
        config
    });
    const { io  } = compose("io", {
        window
    });
    const { services  } = compose("services", {
        subscriptions,
        stores,
        core,
        io,
        util,
        config
    });
    const { vendorServices  } = compose("vendorServices", {
        io,
        config,
        window
    });
    // Presentation
    const { ui  } = compose("ui", {
        window
    });
    const { elements  } = compose("elements", {
        ui,
        util
    });
    const { vendorComponents  } = compose("vendorComponents", {
        ui,
        config,
        window
    });
    const { components  } = compose("components", {
        ui,
        elements,
        vendorComponents,
        vendorServices,
        services,
        subscriptions,
        util,
        config
    });
    const { styles  } = compose("styles", {
        ui,
        subscriptions,
        config
    });
    // Startup    
    compose("diagnostics", {
        stores,
        util
    });
    compose("startup", {
        ui,
        components,
        styles,
        services,
        subscriptions,
        stores,
        util,
        config,
        window
    });
    return compose.end();
};

},{"module-composer":"5p2RA","./modules/index.js":"aOVNo","./default-config.js":"48ejv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5p2RA":[function(require,module,exports) {
const composers = require("./composers");
const initialiseProps = require("./initialise-props");
module.exports = (target, userOptions = {})=>{
    let ended = false;
    const { props , options , config  } = initialiseProps(target, userOptions);
    const baseCompose = composers.base(props);
    const timeCompose = composers.time(props, baseCompose);
    const composeFunc = options.stats ? timeCompose : baseCompose;
    const end = ()=>{
        if (ended) throw new Error("Composition has already ended");
        ended = true;
        return props;
    };
    const compose = (key, deps = {})=>{
        if (ended) throw new Error("Composition has ended");
        return composeFunc(key, deps);
    };
    Object.assign(compose, props, {
        end
    });
    return {
        compose,
        config
    };
};

},{"./composers":"gYdMp","./initialise-props":"gAfrR"}],"gYdMp":[function(require,module,exports) {
module.exports = {
    base: require("./base-compose"),
    time: require("./time-compose")
};

},{"./base-compose":"lCa6p","./time-compose":"ekNWT"}],"lCa6p":[function(require,module,exports) {
const util = require("./util");
module.exports = (props)=>{
    const { target: target1 , options  } = props;
    const recurse = (target, parentKey, deps)=>{
        if (!util.isPlainObject(target)) return target;
        const product = {};
        deps = util.set({
            ...deps
        }, parentKey, product);
        const evaluate = (val, key)=>util.isPlainFunction(val) ? val(deps) : recurse(val, key, deps);
        return Object.assign(product, util.mapValues(target, evaluate));
    };
    return (key, deps)=>{
        if (!key) throw new Error("key is required");
        if (!util.has(target1, key)) throw new Error(`${key} not found`);
        if (props.composedDependencies[key]) throw new Error(`${key} already composed`);
        deps = {
            ...options.defaults,
            ...deps
        };
        const recursed = recurse(util.get(target1, key), key, deps);
        const customised = util.invoke(recursed, options.customiser, recursed) ?? recursed;
        const overridden = util.merge(customised, util.get(options.overrides, key));
        util.set(props.modules, key, overridden);
        props.dependencies[key] = props.composedDependencies[key] = Object.keys(deps);
        return props.modules;
    };
};

},{"./util":"cSt0i"}],"cSt0i":[function(require,module,exports) {
const flattenDeep = require("lodash/flattenDeep");
const get = require("lodash/get");
const has = require("lodash/has");
const invoke = require("lodash/invoke");
const isFunction = require("lodash/isFunction");
const isPlainObject = require("lodash/isPlainObject");
const mapValues = require("lodash/mapValues");
const merge = require("lodash/merge");
const pick = require("lodash/pick");
const set = require("lodash/set");
const upperFirst = require("lodash/upperFirst");
const isPlainFunction = (val)=>isFunction(val) && !(val.prototype && val.prototype.constructor === val);
const mergeValues = (target, obj, keys)=>merge(target, ...flattenDeep(pickValues(obj, keys)));
const pickValues = (obj, keys)=>Object.values(pick(obj, keys));
module.exports = {
    get,
    has,
    invoke,
    isPlainFunction,
    isPlainObject,
    mapValues,
    merge,
    mergeValues,
    set,
    upperFirst
};

},{"lodash/flattenDeep":"hGdgE","lodash/get":"8UELX","lodash/has":"jni8c","lodash/invoke":"7nahN","lodash/isFunction":"cfti6","lodash/isPlainObject":"cvSNF","lodash/mapValues":"aMVMF","lodash/merge":"2WcC0","lodash/pick":"bY5l6","lodash/set":"uwDF1","lodash/upperFirst":"lX6jB"}],"hGdgE":[function(require,module,exports) {
var baseFlatten = require("./_baseFlatten");
/** Used as references for various `Number` constants. */ var INFINITY = 1 / 0;
/**
 * Recursively flattens `array`.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flattenDeep([1, [2, [3, [4]], 5]]);
 * // => [1, 2, 3, 4, 5]
 */ function flattenDeep(array) {
    var length = array == null ? 0 : array.length;
    return length ? baseFlatten(array, INFINITY) : [];
}
module.exports = flattenDeep;

},{"./_baseFlatten":"60rt9"}],"60rt9":[function(require,module,exports) {
var arrayPush = require("./_arrayPush"), isFlattenable = require("./_isFlattenable");
/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */ function baseFlatten(array, depth, predicate, isStrict, result) {
    var index = -1, length = array.length;
    predicate || (predicate = isFlattenable);
    result || (result = []);
    while(++index < length){
        var value = array[index];
        if (depth > 0 && predicate(value)) {
            if (depth > 1) // Recursively flatten arrays (susceptible to call stack limits).
            baseFlatten(value, depth - 1, predicate, isStrict, result);
            else arrayPush(result, value);
        } else if (!isStrict) result[result.length] = value;
    }
    return result;
}
module.exports = baseFlatten;

},{"./_arrayPush":"ivo5r","./_isFlattenable":"O762m"}],"ivo5r":[function(require,module,exports) {
/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */ function arrayPush(array, values) {
    var index = -1, length = values.length, offset = array.length;
    while(++index < length)array[offset + index] = values[index];
    return array;
}
module.exports = arrayPush;

},{}],"O762m":[function(require,module,exports) {
var Symbol = require("./_Symbol"), isArguments = require("./isArguments"), isArray = require("./isArray");
/** Built-in value references. */ var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;
/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */ function isFlattenable(value) {
    return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
}
module.exports = isFlattenable;

},{"./_Symbol":"7lsL9","./isArguments":"8ReNj","./isArray":"dZaTH"}],"7lsL9":[function(require,module,exports) {
var root = require("./_root");
/** Built-in value references. */ var Symbol = root.Symbol;
module.exports = Symbol;

},{"./_root":"dSYUs"}],"dSYUs":[function(require,module,exports) {
var freeGlobal = require("./_freeGlobal");
/** Detect free variable `self`. */ var freeSelf = typeof self == "object" && self && self.Object === Object && self;
/** Used as a reference to the global object. */ var root = freeGlobal || freeSelf || Function("return this")();
module.exports = root;

},{"./_freeGlobal":"kAk32"}],"kAk32":[function(require,module,exports) {
var global = arguments[3];
/** Detect free variable `global` from Node.js. */ var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
module.exports = freeGlobal;

},{}],"8ReNj":[function(require,module,exports) {
var baseIsArguments = require("./_baseIsArguments"), isObjectLike = require("./isObjectLike");
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/** Built-in value references. */ var propertyIsEnumerable = objectProto.propertyIsEnumerable;
/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */ var isArguments = baseIsArguments(function() {
    return arguments;
}()) ? baseIsArguments : function(value) {
    return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
};
module.exports = isArguments;

},{"./_baseIsArguments":"gx70P","./isObjectLike":"3BLi4"}],"gx70P":[function(require,module,exports) {
var baseGetTag = require("./_baseGetTag"), isObjectLike = require("./isObjectLike");
/** `Object#toString` result references. */ var argsTag = "[object Arguments]";
/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */ function baseIsArguments(value) {
    return isObjectLike(value) && baseGetTag(value) == argsTag;
}
module.exports = baseIsArguments;

},{"./_baseGetTag":"lOnbo","./isObjectLike":"3BLi4"}],"lOnbo":[function(require,module,exports) {
var Symbol = require("./_Symbol"), getRawTag = require("./_getRawTag"), objectToString = require("./_objectToString");
/** `Object#toString` result references. */ var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
/** Built-in value references. */ var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */ function baseGetTag(value) {
    if (value == null) return value === undefined ? undefinedTag : nullTag;
    return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
module.exports = baseGetTag;

},{"./_Symbol":"7lsL9","./_getRawTag":"995sO","./_objectToString":"bmE3g"}],"995sO":[function(require,module,exports) {
var Symbol = require("./_Symbol");
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */ var nativeObjectToString = objectProto.toString;
/** Built-in value references. */ var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */ function getRawTag(value) {
    var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
    try {
        value[symToStringTag] = undefined;
        var unmasked = true;
    } catch (e) {}
    var result = nativeObjectToString.call(value);
    if (unmasked) {
        if (isOwn) value[symToStringTag] = tag;
        else delete value[symToStringTag];
    }
    return result;
}
module.exports = getRawTag;

},{"./_Symbol":"7lsL9"}],"bmE3g":[function(require,module,exports) {
/** Used for built-in method references. */ var objectProto = Object.prototype;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */ var nativeObjectToString = objectProto.toString;
/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */ function objectToString(value) {
    return nativeObjectToString.call(value);
}
module.exports = objectToString;

},{}],"3BLi4":[function(require,module,exports) {
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */ function isObjectLike(value) {
    return value != null && typeof value == "object";
}
module.exports = isObjectLike;

},{}],"dZaTH":[function(require,module,exports) {
/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */ var isArray = Array.isArray;
module.exports = isArray;

},{}],"8UELX":[function(require,module,exports) {
var baseGet = require("./_baseGet");
/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */ function get(object, path, defaultValue) {
    var result = object == null ? undefined : baseGet(object, path);
    return result === undefined ? defaultValue : result;
}
module.exports = get;

},{"./_baseGet":"kMRe3"}],"kMRe3":[function(require,module,exports) {
var castPath = require("./_castPath"), toKey = require("./_toKey");
/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */ function baseGet(object, path) {
    path = castPath(path, object);
    var index = 0, length = path.length;
    while(object != null && index < length)object = object[toKey(path[index++])];
    return index && index == length ? object : undefined;
}
module.exports = baseGet;

},{"./_castPath":"apxk5","./_toKey":"bEgue"}],"apxk5":[function(require,module,exports) {
var isArray = require("./isArray"), isKey = require("./_isKey"), stringToPath = require("./_stringToPath"), toString = require("./toString");
/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */ function castPath(value, object) {
    if (isArray(value)) return value;
    return isKey(value, object) ? [
        value
    ] : stringToPath(toString(value));
}
module.exports = castPath;

},{"./isArray":"dZaTH","./_isKey":"4wPWG","./_stringToPath":"1m1j5","./toString":"joIdQ"}],"4wPWG":[function(require,module,exports) {
var isArray = require("./isArray"), isSymbol = require("./isSymbol");
/** Used to match property names within property paths. */ var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/;
/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */ function isKey(value, object) {
    if (isArray(value)) return false;
    var type = typeof value;
    if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) return true;
    return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}
module.exports = isKey;

},{"./isArray":"dZaTH","./isSymbol":"i3BHC"}],"i3BHC":[function(require,module,exports) {
var baseGetTag = require("./_baseGetTag"), isObjectLike = require("./isObjectLike");
/** `Object#toString` result references. */ var symbolTag = "[object Symbol]";
/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */ function isSymbol(value) {
    return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
}
module.exports = isSymbol;

},{"./_baseGetTag":"lOnbo","./isObjectLike":"3BLi4"}],"1m1j5":[function(require,module,exports) {
var memoizeCapped = require("./_memoizeCapped");
/** Used to match property names within property paths. */ var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
/** Used to match backslashes in property paths. */ var reEscapeChar = /\\(\\)?/g;
/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */ var stringToPath = memoizeCapped(function(string) {
    var result = [];
    if (string.charCodeAt(0) === 46 /* . */ ) result.push("");
    string.replace(rePropName, function(match, number, quote, subString) {
        result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
    });
    return result;
});
module.exports = stringToPath;

},{"./_memoizeCapped":"j3xlQ"}],"j3xlQ":[function(require,module,exports) {
var memoize = require("./memoize");
/** Used as the maximum memoize cache size. */ var MAX_MEMOIZE_SIZE = 500;
/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */ function memoizeCapped(func) {
    var result = memoize(func, function(key) {
        if (cache.size === MAX_MEMOIZE_SIZE) cache.clear();
        return key;
    });
    var cache = result.cache;
    return result;
}
module.exports = memoizeCapped;

},{"./memoize":"azHKC"}],"azHKC":[function(require,module,exports) {
var MapCache = require("./_MapCache");
/** Error message constants. */ var FUNC_ERROR_TEXT = "Expected a function";
/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */ function memoize(func, resolver) {
    if (typeof func != "function" || resolver != null && typeof resolver != "function") throw new TypeError(FUNC_ERROR_TEXT);
    var memoized = function() {
        var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
        if (cache.has(key)) return cache.get(key);
        var result = func.apply(this, args);
        memoized.cache = cache.set(key, result) || cache;
        return result;
    };
    memoized.cache = new (memoize.Cache || MapCache);
    return memoized;
}
// Expose `MapCache`.
memoize.Cache = MapCache;
module.exports = memoize;

},{"./_MapCache":"664I1"}],"664I1":[function(require,module,exports) {
var mapCacheClear = require("./_mapCacheClear"), mapCacheDelete = require("./_mapCacheDelete"), mapCacheGet = require("./_mapCacheGet"), mapCacheHas = require("./_mapCacheHas"), mapCacheSet = require("./_mapCacheSet");
/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */ function MapCache(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while(++index < length){
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}
// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype["delete"] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;
module.exports = MapCache;

},{"./_mapCacheClear":"7kHs4","./_mapCacheDelete":"4ny9y","./_mapCacheGet":"gVeFY","./_mapCacheHas":"idSOY","./_mapCacheSet":"lXUJT"}],"7kHs4":[function(require,module,exports) {
var Hash = require("./_Hash"), ListCache = require("./_ListCache"), Map = require("./_Map");
/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */ function mapCacheClear() {
    this.size = 0;
    this.__data__ = {
        "hash": new Hash,
        "map": new (Map || ListCache),
        "string": new Hash
    };
}
module.exports = mapCacheClear;

},{"./_Hash":"jFMT5","./_ListCache":"3UZeo","./_Map":"8YjF4"}],"jFMT5":[function(require,module,exports) {
var hashClear = require("./_hashClear"), hashDelete = require("./_hashDelete"), hashGet = require("./_hashGet"), hashHas = require("./_hashHas"), hashSet = require("./_hashSet");
/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */ function Hash(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while(++index < length){
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}
// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype["delete"] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;
module.exports = Hash;

},{"./_hashClear":"f2NRo","./_hashDelete":"cCdgz","./_hashGet":"eKqTO","./_hashHas":"ghnqP","./_hashSet":"6i99R"}],"f2NRo":[function(require,module,exports) {
var nativeCreate = require("./_nativeCreate");
/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */ function hashClear() {
    this.__data__ = nativeCreate ? nativeCreate(null) : {};
    this.size = 0;
}
module.exports = hashClear;

},{"./_nativeCreate":"6i8Uf"}],"6i8Uf":[function(require,module,exports) {
var getNative = require("./_getNative");
/* Built-in method references that are verified to be native. */ var nativeCreate = getNative(Object, "create");
module.exports = nativeCreate;

},{"./_getNative":"9PCIl"}],"9PCIl":[function(require,module,exports) {
var baseIsNative = require("./_baseIsNative"), getValue = require("./_getValue");
/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */ function getNative(object, key) {
    var value = getValue(object, key);
    return baseIsNative(value) ? value : undefined;
}
module.exports = getNative;

},{"./_baseIsNative":"2U9Pn","./_getValue":"kKx5I"}],"2U9Pn":[function(require,module,exports) {
var isFunction = require("./isFunction"), isMasked = require("./_isMasked"), isObject = require("./isObject"), toSource = require("./_toSource");
/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */ var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
/** Used to detect host constructors (Safari). */ var reIsHostCtor = /^\[object .+?Constructor\]$/;
/** Used for built-in method references. */ var funcProto = Function.prototype, objectProto = Object.prototype;
/** Used to resolve the decompiled source of functions. */ var funcToString = funcProto.toString;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/** Used to detect if a method is native. */ var reIsNative = RegExp("^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */ function baseIsNative(value) {
    if (!isObject(value) || isMasked(value)) return false;
    var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
    return pattern.test(toSource(value));
}
module.exports = baseIsNative;

},{"./isFunction":"cfti6","./_isMasked":"cMDzi","./isObject":"cGhqJ","./_toSource":"bYHc7"}],"cfti6":[function(require,module,exports) {
var baseGetTag = require("./_baseGetTag"), isObject = require("./isObject");
/** `Object#toString` result references. */ var asyncTag = "[object AsyncFunction]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", proxyTag = "[object Proxy]";
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */ function isFunction(value) {
    if (!isObject(value)) return false;
    // The use of `Object#toString` avoids issues with the `typeof` operator
    // in Safari 9 which returns 'object' for typed arrays and other constructors.
    var tag = baseGetTag(value);
    return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}
module.exports = isFunction;

},{"./_baseGetTag":"lOnbo","./isObject":"cGhqJ"}],"cGhqJ":[function(require,module,exports) {
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */ function isObject(value) {
    var type = typeof value;
    return value != null && (type == "object" || type == "function");
}
module.exports = isObject;

},{}],"cMDzi":[function(require,module,exports) {
var coreJsData = require("./_coreJsData");
/** Used to detect methods masquerading as native. */ var maskSrcKey = function() {
    var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
    return uid ? "Symbol(src)_1." + uid : "";
}();
/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */ function isMasked(func) {
    return !!maskSrcKey && maskSrcKey in func;
}
module.exports = isMasked;

},{"./_coreJsData":"6gJwQ"}],"6gJwQ":[function(require,module,exports) {
var root = require("./_root");
/** Used to detect overreaching core-js shims. */ var coreJsData = root["__core-js_shared__"];
module.exports = coreJsData;

},{"./_root":"dSYUs"}],"bYHc7":[function(require,module,exports) {
/** Used for built-in method references. */ var funcProto = Function.prototype;
/** Used to resolve the decompiled source of functions. */ var funcToString = funcProto.toString;
/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */ function toSource(func) {
    if (func != null) {
        try {
            return funcToString.call(func);
        } catch (e) {}
        try {
            return func + "";
        } catch (e1) {}
    }
    return "";
}
module.exports = toSource;

},{}],"kKx5I":[function(require,module,exports) {
/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */ function getValue(object, key) {
    return object == null ? undefined : object[key];
}
module.exports = getValue;

},{}],"cCdgz":[function(require,module,exports) {
/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */ function hashDelete(key) {
    var result = this.has(key) && delete this.__data__[key];
    this.size -= result ? 1 : 0;
    return result;
}
module.exports = hashDelete;

},{}],"eKqTO":[function(require,module,exports) {
var nativeCreate = require("./_nativeCreate");
/** Used to stand-in for `undefined` hash values. */ var HASH_UNDEFINED = "__lodash_hash_undefined__";
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */ function hashGet(key) {
    var data = this.__data__;
    if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? undefined : result;
    }
    return hasOwnProperty.call(data, key) ? data[key] : undefined;
}
module.exports = hashGet;

},{"./_nativeCreate":"6i8Uf"}],"ghnqP":[function(require,module,exports) {
var nativeCreate = require("./_nativeCreate");
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function hashHas(key) {
    var data = this.__data__;
    return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}
module.exports = hashHas;

},{"./_nativeCreate":"6i8Uf"}],"6i99R":[function(require,module,exports) {
var nativeCreate = require("./_nativeCreate");
/** Used to stand-in for `undefined` hash values. */ var HASH_UNDEFINED = "__lodash_hash_undefined__";
/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */ function hashSet(key, value) {
    var data = this.__data__;
    this.size += this.has(key) ? 0 : 1;
    data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
    return this;
}
module.exports = hashSet;

},{"./_nativeCreate":"6i8Uf"}],"3UZeo":[function(require,module,exports) {
var listCacheClear = require("./_listCacheClear"), listCacheDelete = require("./_listCacheDelete"), listCacheGet = require("./_listCacheGet"), listCacheHas = require("./_listCacheHas"), listCacheSet = require("./_listCacheSet");
/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */ function ListCache(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while(++index < length){
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}
// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype["delete"] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;
module.exports = ListCache;

},{"./_listCacheClear":"7AKQv","./_listCacheDelete":"j2Z5O","./_listCacheGet":"6Zrrs","./_listCacheHas":"i1CBK","./_listCacheSet":"2Rcur"}],"7AKQv":[function(require,module,exports) {
/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */ function listCacheClear() {
    this.__data__ = [];
    this.size = 0;
}
module.exports = listCacheClear;

},{}],"j2Z5O":[function(require,module,exports) {
var assocIndexOf = require("./_assocIndexOf");
/** Used for built-in method references. */ var arrayProto = Array.prototype;
/** Built-in value references. */ var splice = arrayProto.splice;
/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */ function listCacheDelete(key) {
    var data = this.__data__, index = assocIndexOf(data, key);
    if (index < 0) return false;
    var lastIndex = data.length - 1;
    if (index == lastIndex) data.pop();
    else splice.call(data, index, 1);
    --this.size;
    return true;
}
module.exports = listCacheDelete;

},{"./_assocIndexOf":"cRVsl"}],"cRVsl":[function(require,module,exports) {
var eq = require("./eq");
/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */ function assocIndexOf(array, key) {
    var length = array.length;
    while(length--){
        if (eq(array[length][0], key)) return length;
    }
    return -1;
}
module.exports = assocIndexOf;

},{"./eq":"aVz5f"}],"aVz5f":[function(require,module,exports) {
/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */ function eq(value, other) {
    return value === other || value !== value && other !== other;
}
module.exports = eq;

},{}],"6Zrrs":[function(require,module,exports) {
var assocIndexOf = require("./_assocIndexOf");
/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */ function listCacheGet(key) {
    var data = this.__data__, index = assocIndexOf(data, key);
    return index < 0 ? undefined : data[index][1];
}
module.exports = listCacheGet;

},{"./_assocIndexOf":"cRVsl"}],"i1CBK":[function(require,module,exports) {
var assocIndexOf = require("./_assocIndexOf");
/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function listCacheHas(key) {
    return assocIndexOf(this.__data__, key) > -1;
}
module.exports = listCacheHas;

},{"./_assocIndexOf":"cRVsl"}],"2Rcur":[function(require,module,exports) {
var assocIndexOf = require("./_assocIndexOf");
/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */ function listCacheSet(key, value) {
    var data = this.__data__, index = assocIndexOf(data, key);
    if (index < 0) {
        ++this.size;
        data.push([
            key,
            value
        ]);
    } else data[index][1] = value;
    return this;
}
module.exports = listCacheSet;

},{"./_assocIndexOf":"cRVsl"}],"8YjF4":[function(require,module,exports) {
var getNative = require("./_getNative"), root = require("./_root");
/* Built-in method references that are verified to be native. */ var Map = getNative(root, "Map");
module.exports = Map;

},{"./_getNative":"9PCIl","./_root":"dSYUs"}],"4ny9y":[function(require,module,exports) {
var getMapData = require("./_getMapData");
/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */ function mapCacheDelete(key) {
    var result = getMapData(this, key)["delete"](key);
    this.size -= result ? 1 : 0;
    return result;
}
module.exports = mapCacheDelete;

},{"./_getMapData":"aptgk"}],"aptgk":[function(require,module,exports) {
var isKeyable = require("./_isKeyable");
/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */ function getMapData(map, key) {
    var data = map.__data__;
    return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
}
module.exports = getMapData;

},{"./_isKeyable":"icylN"}],"icylN":[function(require,module,exports) {
/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */ function isKeyable(value) {
    var type = typeof value;
    return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
}
module.exports = isKeyable;

},{}],"gVeFY":[function(require,module,exports) {
var getMapData = require("./_getMapData");
/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */ function mapCacheGet(key) {
    return getMapData(this, key).get(key);
}
module.exports = mapCacheGet;

},{"./_getMapData":"aptgk"}],"idSOY":[function(require,module,exports) {
var getMapData = require("./_getMapData");
/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function mapCacheHas(key) {
    return getMapData(this, key).has(key);
}
module.exports = mapCacheHas;

},{"./_getMapData":"aptgk"}],"lXUJT":[function(require,module,exports) {
var getMapData = require("./_getMapData");
/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */ function mapCacheSet(key, value) {
    var data = getMapData(this, key), size = data.size;
    data.set(key, value);
    this.size += data.size == size ? 0 : 1;
    return this;
}
module.exports = mapCacheSet;

},{"./_getMapData":"aptgk"}],"joIdQ":[function(require,module,exports) {
var baseToString = require("./_baseToString");
/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */ function toString(value) {
    return value == null ? "" : baseToString(value);
}
module.exports = toString;

},{"./_baseToString":"goDP8"}],"goDP8":[function(require,module,exports) {
var Symbol = require("./_Symbol"), arrayMap = require("./_arrayMap"), isArray = require("./isArray"), isSymbol = require("./isSymbol");
/** Used as references for various `Number` constants. */ var INFINITY = 1 / 0;
/** Used to convert symbols to primitives and strings. */ var symbolProto = Symbol ? Symbol.prototype : undefined, symbolToString = symbolProto ? symbolProto.toString : undefined;
/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */ function baseToString(value) {
    // Exit early for strings to avoid a performance hit in some environments.
    if (typeof value == "string") return value;
    if (isArray(value)) // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + "";
    if (isSymbol(value)) return symbolToString ? symbolToString.call(value) : "";
    var result = value + "";
    return result == "0" && 1 / value == -INFINITY ? "-0" : result;
}
module.exports = baseToString;

},{"./_Symbol":"7lsL9","./_arrayMap":"imI5Z","./isArray":"dZaTH","./isSymbol":"i3BHC"}],"imI5Z":[function(require,module,exports) {
/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */ function arrayMap(array, iteratee) {
    var index = -1, length = array == null ? 0 : array.length, result = Array(length);
    while(++index < length)result[index] = iteratee(array[index], index, array);
    return result;
}
module.exports = arrayMap;

},{}],"bEgue":[function(require,module,exports) {
var isSymbol = require("./isSymbol");
/** Used as references for various `Number` constants. */ var INFINITY = 1 / 0;
/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */ function toKey(value) {
    if (typeof value == "string" || isSymbol(value)) return value;
    var result = value + "";
    return result == "0" && 1 / value == -INFINITY ? "-0" : result;
}
module.exports = toKey;

},{"./isSymbol":"i3BHC"}],"jni8c":[function(require,module,exports) {
var baseHas = require("./_baseHas"), hasPath = require("./_hasPath");
/**
 * Checks if `path` is a direct property of `object`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = { 'a': { 'b': 2 } };
 * var other = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.has(object, 'a');
 * // => true
 *
 * _.has(object, 'a.b');
 * // => true
 *
 * _.has(object, ['a', 'b']);
 * // => true
 *
 * _.has(other, 'a');
 * // => false
 */ function has(object, path) {
    return object != null && hasPath(object, path, baseHas);
}
module.exports = has;

},{"./_baseHas":"2SDbO","./_hasPath":"4QNMG"}],"2SDbO":[function(require,module,exports) {
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * The base implementation of `_.has` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */ function baseHas(object, key) {
    return object != null && hasOwnProperty.call(object, key);
}
module.exports = baseHas;

},{}],"4QNMG":[function(require,module,exports) {
var castPath = require("./_castPath"), isArguments = require("./isArguments"), isArray = require("./isArray"), isIndex = require("./_isIndex"), isLength = require("./isLength"), toKey = require("./_toKey");
/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */ function hasPath(object, path, hasFunc) {
    path = castPath(path, object);
    var index = -1, length = path.length, result = false;
    while(++index < length){
        var key = toKey(path[index]);
        if (!(result = object != null && hasFunc(object, key))) break;
        object = object[key];
    }
    if (result || ++index != length) return result;
    length = object == null ? 0 : object.length;
    return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
}
module.exports = hasPath;

},{"./_castPath":"apxk5","./isArguments":"8ReNj","./isArray":"dZaTH","./_isIndex":"aJpx0","./isLength":"hrTBx","./_toKey":"bEgue"}],"aJpx0":[function(require,module,exports) {
/** Used as references for various `Number` constants. */ var MAX_SAFE_INTEGER = 9007199254740991;
/** Used to detect unsigned integer values. */ var reIsUint = /^(?:0|[1-9]\d*)$/;
/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */ function isIndex(value, length) {
    var type = typeof value;
    length = length == null ? MAX_SAFE_INTEGER : length;
    return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}
module.exports = isIndex;

},{}],"hrTBx":[function(require,module,exports) {
/** Used as references for various `Number` constants. */ var MAX_SAFE_INTEGER = 9007199254740991;
/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */ function isLength(value) {
    return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}
module.exports = isLength;

},{}],"7nahN":[function(require,module,exports) {
var baseInvoke = require("./_baseInvoke"), baseRest = require("./_baseRest");
/**
 * Invokes the method at `path` of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the method to invoke.
 * @param {...*} [args] The arguments to invoke the method with.
 * @returns {*} Returns the result of the invoked method.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': [1, 2, 3, 4] } }] };
 *
 * _.invoke(object, 'a[0].b.c.slice', 1, 3);
 * // => [2, 3]
 */ var invoke = baseRest(baseInvoke);
module.exports = invoke;

},{"./_baseInvoke":"gUHNE","./_baseRest":"kd260"}],"gUHNE":[function(require,module,exports) {
var apply = require("./_apply"), castPath = require("./_castPath"), last = require("./last"), parent = require("./_parent"), toKey = require("./_toKey");
/**
 * The base implementation of `_.invoke` without support for individual
 * method arguments.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the method to invoke.
 * @param {Array} args The arguments to invoke the method with.
 * @returns {*} Returns the result of the invoked method.
 */ function baseInvoke(object, path, args) {
    path = castPath(path, object);
    object = parent(object, path);
    var func = object == null ? object : object[toKey(last(path))];
    return func == null ? undefined : apply(func, object, args);
}
module.exports = baseInvoke;

},{"./_apply":"gUweg","./_castPath":"apxk5","./last":"fv3GK","./_parent":"1hPE8","./_toKey":"bEgue"}],"gUweg":[function(require,module,exports) {
/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */ function apply(func, thisArg, args) {
    switch(args.length){
        case 0:
            return func.call(thisArg);
        case 1:
            return func.call(thisArg, args[0]);
        case 2:
            return func.call(thisArg, args[0], args[1]);
        case 3:
            return func.call(thisArg, args[0], args[1], args[2]);
    }
    return func.apply(thisArg, args);
}
module.exports = apply;

},{}],"fv3GK":[function(require,module,exports) {
/**
 * Gets the last element of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the last element of `array`.
 * @example
 *
 * _.last([1, 2, 3]);
 * // => 3
 */ function last(array) {
    var length = array == null ? 0 : array.length;
    return length ? array[length - 1] : undefined;
}
module.exports = last;

},{}],"1hPE8":[function(require,module,exports) {
var baseGet = require("./_baseGet"), baseSlice = require("./_baseSlice");
/**
 * Gets the parent value at `path` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} path The path to get the parent value of.
 * @returns {*} Returns the parent value.
 */ function parent(object, path) {
    return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
}
module.exports = parent;

},{"./_baseGet":"kMRe3","./_baseSlice":"cqqI2"}],"cqqI2":[function(require,module,exports) {
/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */ function baseSlice(array, start, end) {
    var index = -1, length = array.length;
    if (start < 0) start = -start > length ? 0 : length + start;
    end = end > length ? length : end;
    if (end < 0) end += length;
    length = start > end ? 0 : end - start >>> 0;
    start >>>= 0;
    var result = Array(length);
    while(++index < length)result[index] = array[index + start];
    return result;
}
module.exports = baseSlice;

},{}],"kd260":[function(require,module,exports) {
var identity = require("./identity"), overRest = require("./_overRest"), setToString = require("./_setToString");
/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */ function baseRest(func, start) {
    return setToString(overRest(func, start, identity), func + "");
}
module.exports = baseRest;

},{"./identity":"dgTUN","./_overRest":"16F1z","./_setToString":"b5kjI"}],"dgTUN":[function(require,module,exports) {
/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */ function identity(value) {
    return value;
}
module.exports = identity;

},{}],"16F1z":[function(require,module,exports) {
var apply = require("./_apply");
/* Built-in method references for those with the same name as other `lodash` methods. */ var nativeMax = Math.max;
/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */ function overRest(func, start, transform) {
    start = nativeMax(start === undefined ? func.length - 1 : start, 0);
    return function() {
        var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array(length);
        while(++index < length)array[index] = args[start + index];
        index = -1;
        var otherArgs = Array(start + 1);
        while(++index < start)otherArgs[index] = args[index];
        otherArgs[start] = transform(array);
        return apply(func, this, otherArgs);
    };
}
module.exports = overRest;

},{"./_apply":"gUweg"}],"b5kjI":[function(require,module,exports) {
var baseSetToString = require("./_baseSetToString"), shortOut = require("./_shortOut");
/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */ var setToString = shortOut(baseSetToString);
module.exports = setToString;

},{"./_baseSetToString":"lgihM","./_shortOut":"7ulLs"}],"lgihM":[function(require,module,exports) {
var constant = require("./constant"), defineProperty = require("./_defineProperty"), identity = require("./identity");
/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */ var baseSetToString = !defineProperty ? identity : function(func, string) {
    return defineProperty(func, "toString", {
        "configurable": true,
        "enumerable": false,
        "value": constant(string),
        "writable": true
    });
};
module.exports = baseSetToString;

},{"./constant":"1HI6K","./_defineProperty":"cZOnw","./identity":"dgTUN"}],"1HI6K":[function(require,module,exports) {
/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */ function constant(value) {
    return function() {
        return value;
    };
}
module.exports = constant;

},{}],"cZOnw":[function(require,module,exports) {
var getNative = require("./_getNative");
var defineProperty = function() {
    try {
        var func = getNative(Object, "defineProperty");
        func({}, "", {});
        return func;
    } catch (e) {}
}();
module.exports = defineProperty;

},{"./_getNative":"9PCIl"}],"7ulLs":[function(require,module,exports) {
/** Used to detect hot functions by number of calls within a span of milliseconds. */ var HOT_COUNT = 800, HOT_SPAN = 16;
/* Built-in method references for those with the same name as other `lodash` methods. */ var nativeNow = Date.now;
/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */ function shortOut(func) {
    var count = 0, lastCalled = 0;
    return function() {
        var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
        lastCalled = stamp;
        if (remaining > 0) {
            if (++count >= HOT_COUNT) return arguments[0];
        } else count = 0;
        return func.apply(undefined, arguments);
    };
}
module.exports = shortOut;

},{}],"cvSNF":[function(require,module,exports) {
var baseGetTag = require("./_baseGetTag"), getPrototype = require("./_getPrototype"), isObjectLike = require("./isObjectLike");
/** `Object#toString` result references. */ var objectTag = "[object Object]";
/** Used for built-in method references. */ var funcProto = Function.prototype, objectProto = Object.prototype;
/** Used to resolve the decompiled source of functions. */ var funcToString = funcProto.toString;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/** Used to infer the `Object` constructor. */ var objectCtorString = funcToString.call(Object);
/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */ function isPlainObject(value) {
    if (!isObjectLike(value) || baseGetTag(value) != objectTag) return false;
    var proto = getPrototype(value);
    if (proto === null) return true;
    var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
    return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}
module.exports = isPlainObject;

},{"./_baseGetTag":"lOnbo","./_getPrototype":"8ASKT","./isObjectLike":"3BLi4"}],"8ASKT":[function(require,module,exports) {
var overArg = require("./_overArg");
/** Built-in value references. */ var getPrototype = overArg(Object.getPrototypeOf, Object);
module.exports = getPrototype;

},{"./_overArg":"dpUvl"}],"dpUvl":[function(require,module,exports) {
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */ function overArg(func, transform) {
    return function(arg) {
        return func(transform(arg));
    };
}
module.exports = overArg;

},{}],"aMVMF":[function(require,module,exports) {
var baseAssignValue = require("./_baseAssignValue"), baseForOwn = require("./_baseForOwn"), baseIteratee = require("./_baseIteratee");
/**
 * Creates an object with the same keys as `object` and values generated
 * by running each own enumerable string keyed property of `object` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, key, object).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Object} Returns the new mapped object.
 * @see _.mapKeys
 * @example
 *
 * var users = {
 *   'fred':    { 'user': 'fred',    'age': 40 },
 *   'pebbles': { 'user': 'pebbles', 'age': 1 }
 * };
 *
 * _.mapValues(users, function(o) { return o.age; });
 * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
 *
 * // The `_.property` iteratee shorthand.
 * _.mapValues(users, 'age');
 * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
 */ function mapValues(object1, iteratee) {
    var result = {};
    iteratee = baseIteratee(iteratee, 3);
    baseForOwn(object1, function(value, key, object) {
        baseAssignValue(result, key, iteratee(value, key, object));
    });
    return result;
}
module.exports = mapValues;

},{"./_baseAssignValue":"fprBU","./_baseForOwn":"6MqUM","./_baseIteratee":"2fsgg"}],"fprBU":[function(require,module,exports) {
var defineProperty = require("./_defineProperty");
/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */ function baseAssignValue(object, key, value) {
    if (key == "__proto__" && defineProperty) defineProperty(object, key, {
        "configurable": true,
        "enumerable": true,
        "value": value,
        "writable": true
    });
    else object[key] = value;
}
module.exports = baseAssignValue;

},{"./_defineProperty":"cZOnw"}],"6MqUM":[function(require,module,exports) {
var baseFor = require("./_baseFor"), keys = require("./keys");
/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */ function baseForOwn(object, iteratee) {
    return object && baseFor(object, iteratee, keys);
}
module.exports = baseForOwn;

},{"./_baseFor":"k0bbR","./keys":"6fHVw"}],"k0bbR":[function(require,module,exports) {
var createBaseFor = require("./_createBaseFor");
/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */ var baseFor = createBaseFor();
module.exports = baseFor;

},{"./_createBaseFor":"hCIGA"}],"hCIGA":[function(require,module,exports) {
/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */ function createBaseFor(fromRight) {
    return function(object, iteratee, keysFunc) {
        var index = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
        while(length--){
            var key = props[fromRight ? length : ++index];
            if (iteratee(iterable[key], key, iterable) === false) break;
        }
        return object;
    };
}
module.exports = createBaseFor;

},{}],"6fHVw":[function(require,module,exports) {
var arrayLikeKeys = require("./_arrayLikeKeys"), baseKeys = require("./_baseKeys"), isArrayLike = require("./isArrayLike");
/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */ function keys(object) {
    return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}
module.exports = keys;

},{"./_arrayLikeKeys":"dquIQ","./_baseKeys":"c0eiI","./isArrayLike":"gMCbp"}],"dquIQ":[function(require,module,exports) {
var baseTimes = require("./_baseTimes"), isArguments = require("./isArguments"), isArray = require("./isArray"), isBuffer = require("./isBuffer"), isIndex = require("./_isIndex"), isTypedArray = require("./isTypedArray");
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */ function arrayLikeKeys(value, inherited) {
    var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
    for(var key in value)if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
    (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
    isIndex(key, length)))) result.push(key);
    return result;
}
module.exports = arrayLikeKeys;

},{"./_baseTimes":"odqYd","./isArguments":"8ReNj","./isArray":"dZaTH","./isBuffer":"cn85h","./_isIndex":"aJpx0","./isTypedArray":"6SVKk"}],"odqYd":[function(require,module,exports) {
/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */ function baseTimes(n, iteratee) {
    var index = -1, result = Array(n);
    while(++index < n)result[index] = iteratee(index);
    return result;
}
module.exports = baseTimes;

},{}],"cn85h":[function(require,module,exports) {
var root = require("./_root"), stubFalse = require("./stubFalse");
/** Detect free variable `exports`. */ var freeExports = exports && !exports.nodeType && exports;
/** Detect free variable `module`. */ var freeModule = freeExports && true && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */ var moduleExports = freeModule && freeModule.exports === freeExports;
/** Built-in value references. */ var Buffer = moduleExports ? root.Buffer : undefined;
/* Built-in method references for those with the same name as other `lodash` methods. */ var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;
/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */ var isBuffer = nativeIsBuffer || stubFalse;
module.exports = isBuffer;

},{"./_root":"dSYUs","./stubFalse":"dx4uy"}],"dx4uy":[function(require,module,exports) {
/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */ function stubFalse() {
    return false;
}
module.exports = stubFalse;

},{}],"6SVKk":[function(require,module,exports) {
var baseIsTypedArray = require("./_baseIsTypedArray"), baseUnary = require("./_baseUnary"), nodeUtil = require("./_nodeUtil");
/* Node.js helper references. */ var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */ var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
module.exports = isTypedArray;

},{"./_baseIsTypedArray":"lGSsl","./_baseUnary":"eJXq4","./_nodeUtil":"5edNe"}],"lGSsl":[function(require,module,exports) {
var baseGetTag = require("./_baseGetTag"), isLength = require("./isLength"), isObjectLike = require("./isObjectLike");
/** `Object#toString` result references. */ var argsTag = "[object Arguments]", arrayTag = "[object Array]", boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", funcTag = "[object Function]", mapTag = "[object Map]", numberTag = "[object Number]", objectTag = "[object Object]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", weakMapTag = "[object WeakMap]";
var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
/** Used to identify `toStringTag` values of typed arrays. */ var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */ function baseIsTypedArray(value) {
    return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}
module.exports = baseIsTypedArray;

},{"./_baseGetTag":"lOnbo","./isLength":"hrTBx","./isObjectLike":"3BLi4"}],"eJXq4":[function(require,module,exports) {
/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */ function baseUnary(func) {
    return function(value) {
        return func(value);
    };
}
module.exports = baseUnary;

},{}],"5edNe":[function(require,module,exports) {
var freeGlobal = require("./_freeGlobal");
/** Detect free variable `exports`. */ var freeExports = exports && !exports.nodeType && exports;
/** Detect free variable `module`. */ var freeModule = freeExports && true && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */ var moduleExports = freeModule && freeModule.exports === freeExports;
/** Detect free variable `process` from Node.js. */ var freeProcess = moduleExports && freeGlobal.process;
/** Used to access faster Node.js helpers. */ var nodeUtil = function() {
    try {
        // Use `util.types` for Node.js 10+.
        var types = freeModule && freeModule.require && freeModule.require("util").types;
        if (types) return types;
        // Legacy `process.binding('util')` for Node.js < 10.
        return freeProcess && freeProcess.binding && freeProcess.binding("util");
    } catch (e) {}
}();
module.exports = nodeUtil;

},{"./_freeGlobal":"kAk32"}],"c0eiI":[function(require,module,exports) {
var isPrototype = require("./_isPrototype"), nativeKeys = require("./_nativeKeys");
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */ function baseKeys(object) {
    if (!isPrototype(object)) return nativeKeys(object);
    var result = [];
    for(var key in Object(object))if (hasOwnProperty.call(object, key) && key != "constructor") result.push(key);
    return result;
}
module.exports = baseKeys;

},{"./_isPrototype":"iG4eR","./_nativeKeys":"k97u2"}],"iG4eR":[function(require,module,exports) {
/** Used for built-in method references. */ var objectProto = Object.prototype;
/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */ function isPrototype(value) {
    var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
    return value === proto;
}
module.exports = isPrototype;

},{}],"k97u2":[function(require,module,exports) {
var overArg = require("./_overArg");
/* Built-in method references for those with the same name as other `lodash` methods. */ var nativeKeys = overArg(Object.keys, Object);
module.exports = nativeKeys;

},{"./_overArg":"dpUvl"}],"gMCbp":[function(require,module,exports) {
var isFunction = require("./isFunction"), isLength = require("./isLength");
/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */ function isArrayLike(value) {
    return value != null && isLength(value.length) && !isFunction(value);
}
module.exports = isArrayLike;

},{"./isFunction":"cfti6","./isLength":"hrTBx"}],"2fsgg":[function(require,module,exports) {
var baseMatches = require("./_baseMatches"), baseMatchesProperty = require("./_baseMatchesProperty"), identity = require("./identity"), isArray = require("./isArray"), property = require("./property");
/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */ function baseIteratee(value) {
    // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
    // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
    if (typeof value == "function") return value;
    if (value == null) return identity;
    if (typeof value == "object") return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
    return property(value);
}
module.exports = baseIteratee;

},{"./_baseMatches":"2mdwX","./_baseMatchesProperty":"48kxC","./identity":"dgTUN","./isArray":"dZaTH","./property":"8aSQI"}],"2mdwX":[function(require,module,exports) {
var baseIsMatch = require("./_baseIsMatch"), getMatchData = require("./_getMatchData"), matchesStrictComparable = require("./_matchesStrictComparable");
/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */ function baseMatches(source) {
    var matchData = getMatchData(source);
    if (matchData.length == 1 && matchData[0][2]) return matchesStrictComparable(matchData[0][0], matchData[0][1]);
    return function(object) {
        return object === source || baseIsMatch(object, source, matchData);
    };
}
module.exports = baseMatches;

},{"./_baseIsMatch":"joJZV","./_getMatchData":"48Qyi","./_matchesStrictComparable":"a9Bav"}],"joJZV":[function(require,module,exports) {
var Stack = require("./_Stack"), baseIsEqual = require("./_baseIsEqual");
/** Used to compose bitmasks for value comparisons. */ var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */ function baseIsMatch(object, source, matchData, customizer) {
    var index = matchData.length, length = index, noCustomizer = !customizer;
    if (object == null) return !length;
    object = Object(object);
    while(index--){
        var data = matchData[index];
        if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) return false;
    }
    while(++index < length){
        data = matchData[index];
        var key = data[0], objValue = object[key], srcValue = data[1];
        if (noCustomizer && data[2]) {
            if (objValue === undefined && !(key in object)) return false;
        } else {
            var stack = new Stack;
            if (customizer) var result = customizer(objValue, srcValue, key, object, source, stack);
            if (!(result === undefined ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result)) return false;
        }
    }
    return true;
}
module.exports = baseIsMatch;

},{"./_Stack":"atP87","./_baseIsEqual":"7i3qr"}],"atP87":[function(require,module,exports) {
var ListCache = require("./_ListCache"), stackClear = require("./_stackClear"), stackDelete = require("./_stackDelete"), stackGet = require("./_stackGet"), stackHas = require("./_stackHas"), stackSet = require("./_stackSet");
/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */ function Stack(entries) {
    var data = this.__data__ = new ListCache(entries);
    this.size = data.size;
}
// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype["delete"] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;
module.exports = Stack;

},{"./_ListCache":"3UZeo","./_stackClear":"6CpyN","./_stackDelete":"dGFb0","./_stackGet":"6zFUp","./_stackHas":"3VJUX","./_stackSet":"ZfrYM"}],"6CpyN":[function(require,module,exports) {
var ListCache = require("./_ListCache");
/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */ function stackClear() {
    this.__data__ = new ListCache;
    this.size = 0;
}
module.exports = stackClear;

},{"./_ListCache":"3UZeo"}],"dGFb0":[function(require,module,exports) {
/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */ function stackDelete(key) {
    var data = this.__data__, result = data["delete"](key);
    this.size = data.size;
    return result;
}
module.exports = stackDelete;

},{}],"6zFUp":[function(require,module,exports) {
/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */ function stackGet(key) {
    return this.__data__.get(key);
}
module.exports = stackGet;

},{}],"3VJUX":[function(require,module,exports) {
/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function stackHas(key) {
    return this.__data__.has(key);
}
module.exports = stackHas;

},{}],"ZfrYM":[function(require,module,exports) {
var ListCache = require("./_ListCache"), Map = require("./_Map"), MapCache = require("./_MapCache");
/** Used as the size to enable large array optimizations. */ var LARGE_ARRAY_SIZE = 200;
/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */ function stackSet(key, value) {
    var data = this.__data__;
    if (data instanceof ListCache) {
        var pairs = data.__data__;
        if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
            pairs.push([
                key,
                value
            ]);
            this.size = ++data.size;
            return this;
        }
        data = this.__data__ = new MapCache(pairs);
    }
    data.set(key, value);
    this.size = data.size;
    return this;
}
module.exports = stackSet;

},{"./_ListCache":"3UZeo","./_Map":"8YjF4","./_MapCache":"664I1"}],"7i3qr":[function(require,module,exports) {
var baseIsEqualDeep = require("./_baseIsEqualDeep"), isObjectLike = require("./isObjectLike");
/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */ function baseIsEqual(value, other, bitmask, customizer, stack) {
    if (value === other) return true;
    if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) return value !== value && other !== other;
    return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}
module.exports = baseIsEqual;

},{"./_baseIsEqualDeep":"6GoQ9","./isObjectLike":"3BLi4"}],"6GoQ9":[function(require,module,exports) {
var Stack = require("./_Stack"), equalArrays = require("./_equalArrays"), equalByTag = require("./_equalByTag"), equalObjects = require("./_equalObjects"), getTag = require("./_getTag"), isArray = require("./isArray"), isBuffer = require("./isBuffer"), isTypedArray = require("./isTypedArray");
/** Used to compose bitmasks for value comparisons. */ var COMPARE_PARTIAL_FLAG = 1;
/** `Object#toString` result references. */ var argsTag = "[object Arguments]", arrayTag = "[object Array]", objectTag = "[object Object]";
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */ function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
    var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
    objTag = objTag == argsTag ? objectTag : objTag;
    othTag = othTag == argsTag ? objectTag : othTag;
    var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
    if (isSameTag && isBuffer(object)) {
        if (!isBuffer(other)) return false;
        objIsArr = true;
        objIsObj = false;
    }
    if (isSameTag && !objIsObj) {
        stack || (stack = new Stack);
        return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
    }
    if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
        var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
        if (objIsWrapped || othIsWrapped) {
            var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
            stack || (stack = new Stack);
            return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
        }
    }
    if (!isSameTag) return false;
    stack || (stack = new Stack);
    return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}
module.exports = baseIsEqualDeep;

},{"./_Stack":"atP87","./_equalArrays":"dQBwf","./_equalByTag":"iqa6H","./_equalObjects":"klCEf","./_getTag":"cRPhM","./isArray":"dZaTH","./isBuffer":"cn85h","./isTypedArray":"6SVKk"}],"dQBwf":[function(require,module,exports) {
var SetCache = require("./_SetCache"), arraySome = require("./_arraySome"), cacheHas = require("./_cacheHas");
/** Used to compose bitmasks for value comparisons. */ var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */ function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
    var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
    if (arrLength != othLength && !(isPartial && othLength > arrLength)) return false;
    // Check that cyclic values are equal.
    var arrStacked = stack.get(array);
    var othStacked = stack.get(other);
    if (arrStacked && othStacked) return arrStacked == other && othStacked == array;
    var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache : undefined;
    stack.set(array, other);
    stack.set(other, array);
    // Ignore non-index properties.
    while(++index < arrLength){
        var arrValue = array[index], othValue1 = other[index];
        if (customizer) var compared = isPartial ? customizer(othValue1, arrValue, index, other, array, stack) : customizer(arrValue, othValue1, index, array, other, stack);
        if (compared !== undefined) {
            if (compared) continue;
            result = false;
            break;
        }
        // Recursively compare arrays (susceptible to call stack limits).
        if (seen) {
            if (!arraySome(other, function(othValue, othIndex) {
                if (!cacheHas(seen, othIndex) && (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) return seen.push(othIndex);
            })) {
                result = false;
                break;
            }
        } else if (!(arrValue === othValue1 || equalFunc(arrValue, othValue1, bitmask, customizer, stack))) {
            result = false;
            break;
        }
    }
    stack["delete"](array);
    stack["delete"](other);
    return result;
}
module.exports = equalArrays;

},{"./_SetCache":"1SXrY","./_arraySome":"aLDHW","./_cacheHas":"70cVb"}],"1SXrY":[function(require,module,exports) {
var MapCache = require("./_MapCache"), setCacheAdd = require("./_setCacheAdd"), setCacheHas = require("./_setCacheHas");
/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */ function SetCache(values) {
    var index = -1, length = values == null ? 0 : values.length;
    this.__data__ = new MapCache;
    while(++index < length)this.add(values[index]);
}
// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;
module.exports = SetCache;

},{"./_MapCache":"664I1","./_setCacheAdd":"cZViu","./_setCacheHas":"4zNID"}],"cZViu":[function(require,module,exports) {
/** Used to stand-in for `undefined` hash values. */ var HASH_UNDEFINED = "__lodash_hash_undefined__";
/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */ function setCacheAdd(value) {
    this.__data__.set(value, HASH_UNDEFINED);
    return this;
}
module.exports = setCacheAdd;

},{}],"4zNID":[function(require,module,exports) {
/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */ function setCacheHas(value) {
    return this.__data__.has(value);
}
module.exports = setCacheHas;

},{}],"aLDHW":[function(require,module,exports) {
/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */ function arraySome(array, predicate) {
    var index = -1, length = array == null ? 0 : array.length;
    while(++index < length){
        if (predicate(array[index], index, array)) return true;
    }
    return false;
}
module.exports = arraySome;

},{}],"70cVb":[function(require,module,exports) {
/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function cacheHas(cache, key) {
    return cache.has(key);
}
module.exports = cacheHas;

},{}],"iqa6H":[function(require,module,exports) {
var Symbol = require("./_Symbol"), Uint8Array = require("./_Uint8Array"), eq = require("./eq"), equalArrays = require("./_equalArrays"), mapToArray = require("./_mapToArray"), setToArray = require("./_setToArray");
/** Used to compose bitmasks for value comparisons. */ var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
/** `Object#toString` result references. */ var boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", mapTag = "[object Map]", numberTag = "[object Number]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]";
var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]";
/** Used to convert symbols to primitives and strings. */ var symbolProto = Symbol ? Symbol.prototype : undefined, symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;
/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */ function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
    switch(tag){
        case dataViewTag:
            if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) return false;
            object = object.buffer;
            other = other.buffer;
        case arrayBufferTag:
            if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other))) return false;
            return true;
        case boolTag:
        case dateTag:
        case numberTag:
            // Coerce booleans to `1` or `0` and dates to milliseconds.
            // Invalid dates are coerced to `NaN`.
            return eq(+object, +other);
        case errorTag:
            return object.name == other.name && object.message == other.message;
        case regexpTag:
        case stringTag:
            // Coerce regexes to strings and treat strings, primitives and objects,
            // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
            // for more details.
            return object == other + "";
        case mapTag:
            var convert = mapToArray;
        case setTag:
            var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
            convert || (convert = setToArray);
            if (object.size != other.size && !isPartial) return false;
            // Assume cyclic values are equal.
            var stacked = stack.get(object);
            if (stacked) return stacked == other;
            bitmask |= COMPARE_UNORDERED_FLAG;
            // Recursively compare objects (susceptible to call stack limits).
            stack.set(object, other);
            var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
            stack["delete"](object);
            return result;
        case symbolTag:
            if (symbolValueOf) return symbolValueOf.call(object) == symbolValueOf.call(other);
    }
    return false;
}
module.exports = equalByTag;

},{"./_Symbol":"7lsL9","./_Uint8Array":"6xFrA","./eq":"aVz5f","./_equalArrays":"dQBwf","./_mapToArray":"kAwkU","./_setToArray":"2qJif"}],"6xFrA":[function(require,module,exports) {
var root = require("./_root");
/** Built-in value references. */ var Uint8Array = root.Uint8Array;
module.exports = Uint8Array;

},{"./_root":"dSYUs"}],"kAwkU":[function(require,module,exports) {
/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */ function mapToArray(map) {
    var index = -1, result = Array(map.size);
    map.forEach(function(value, key) {
        result[++index] = [
            key,
            value
        ];
    });
    return result;
}
module.exports = mapToArray;

},{}],"2qJif":[function(require,module,exports) {
/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */ function setToArray(set) {
    var index = -1, result = Array(set.size);
    set.forEach(function(value) {
        result[++index] = value;
    });
    return result;
}
module.exports = setToArray;

},{}],"klCEf":[function(require,module,exports) {
var getAllKeys = require("./_getAllKeys");
/** Used to compose bitmasks for value comparisons. */ var COMPARE_PARTIAL_FLAG = 1;
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */ function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
    var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
    if (objLength != othLength && !isPartial) return false;
    var index = objLength;
    while(index--){
        var key = objProps[index];
        if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) return false;
    }
    // Check that cyclic values are equal.
    var objStacked = stack.get(object);
    var othStacked = stack.get(other);
    if (objStacked && othStacked) return objStacked == other && othStacked == object;
    var result = true;
    stack.set(object, other);
    stack.set(other, object);
    var skipCtor = isPartial;
    while(++index < objLength){
        key = objProps[index];
        var objValue = object[key], othValue = other[key];
        if (customizer) var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
        // Recursively compare objects (susceptible to call stack limits).
        if (!(compared === undefined ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
            result = false;
            break;
        }
        skipCtor || (skipCtor = key == "constructor");
    }
    if (result && !skipCtor) {
        var objCtor = object.constructor, othCtor = other.constructor;
        // Non `Object` object instances with different constructors are not equal.
        if (objCtor != othCtor && "constructor" in object && "constructor" in other && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) result = false;
    }
    stack["delete"](object);
    stack["delete"](other);
    return result;
}
module.exports = equalObjects;

},{"./_getAllKeys":"d2kML"}],"d2kML":[function(require,module,exports) {
var baseGetAllKeys = require("./_baseGetAllKeys"), getSymbols = require("./_getSymbols"), keys = require("./keys");
/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */ function getAllKeys(object) {
    return baseGetAllKeys(object, keys, getSymbols);
}
module.exports = getAllKeys;

},{"./_baseGetAllKeys":"aeckf","./_getSymbols":"5p5Yd","./keys":"6fHVw"}],"aeckf":[function(require,module,exports) {
var arrayPush = require("./_arrayPush"), isArray = require("./isArray");
/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */ function baseGetAllKeys(object, keysFunc, symbolsFunc) {
    var result = keysFunc(object);
    return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}
module.exports = baseGetAllKeys;

},{"./_arrayPush":"ivo5r","./isArray":"dZaTH"}],"5p5Yd":[function(require,module,exports) {
var arrayFilter = require("./_arrayFilter"), stubArray = require("./stubArray");
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Built-in value references. */ var propertyIsEnumerable = objectProto.propertyIsEnumerable;
/* Built-in method references for those with the same name as other `lodash` methods. */ var nativeGetSymbols = Object.getOwnPropertySymbols;
/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */ var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
    if (object == null) return [];
    object = Object(object);
    return arrayFilter(nativeGetSymbols(object), function(symbol) {
        return propertyIsEnumerable.call(object, symbol);
    });
};
module.exports = getSymbols;

},{"./_arrayFilter":"hmIQ7","./stubArray":"6TgRy"}],"hmIQ7":[function(require,module,exports) {
/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */ function arrayFilter(array, predicate) {
    var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
    while(++index < length){
        var value = array[index];
        if (predicate(value, index, array)) result[resIndex++] = value;
    }
    return result;
}
module.exports = arrayFilter;

},{}],"6TgRy":[function(require,module,exports) {
/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */ function stubArray() {
    return [];
}
module.exports = stubArray;

},{}],"cRPhM":[function(require,module,exports) {
var DataView = require("./_DataView"), Map = require("./_Map"), Promise = require("./_Promise"), Set = require("./_Set"), WeakMap = require("./_WeakMap"), baseGetTag = require("./_baseGetTag"), toSource = require("./_toSource");
/** `Object#toString` result references. */ var mapTag = "[object Map]", objectTag = "[object Object]", promiseTag = "[object Promise]", setTag = "[object Set]", weakMapTag = "[object WeakMap]";
var dataViewTag = "[object DataView]";
/** Used to detect maps, sets, and weakmaps. */ var dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map), promiseCtorString = toSource(Promise), setCtorString = toSource(Set), weakMapCtorString = toSource(WeakMap);
/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */ var getTag = baseGetTag;
// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map) != mapTag || Promise && getTag(Promise.resolve()) != promiseTag || Set && getTag(new Set) != setTag || WeakMap && getTag(new WeakMap) != weakMapTag) getTag = function(value) {
    var result = baseGetTag(value), Ctor = result == objectTag ? value.constructor : undefined, ctorString = Ctor ? toSource(Ctor) : "";
    if (ctorString) switch(ctorString){
        case dataViewCtorString:
            return dataViewTag;
        case mapCtorString:
            return mapTag;
        case promiseCtorString:
            return promiseTag;
        case setCtorString:
            return setTag;
        case weakMapCtorString:
            return weakMapTag;
    }
    return result;
};
module.exports = getTag;

},{"./_DataView":"ejRu5","./_Map":"8YjF4","./_Promise":"jbvCt","./_Set":"4xGLf","./_WeakMap":"av50V","./_baseGetTag":"lOnbo","./_toSource":"bYHc7"}],"ejRu5":[function(require,module,exports) {
var getNative = require("./_getNative"), root = require("./_root");
/* Built-in method references that are verified to be native. */ var DataView = getNative(root, "DataView");
module.exports = DataView;

},{"./_getNative":"9PCIl","./_root":"dSYUs"}],"jbvCt":[function(require,module,exports) {
var getNative = require("./_getNative"), root = require("./_root");
/* Built-in method references that are verified to be native. */ var Promise = getNative(root, "Promise");
module.exports = Promise;

},{"./_getNative":"9PCIl","./_root":"dSYUs"}],"4xGLf":[function(require,module,exports) {
var getNative = require("./_getNative"), root = require("./_root");
/* Built-in method references that are verified to be native. */ var Set = getNative(root, "Set");
module.exports = Set;

},{"./_getNative":"9PCIl","./_root":"dSYUs"}],"av50V":[function(require,module,exports) {
var getNative = require("./_getNative"), root = require("./_root");
/* Built-in method references that are verified to be native. */ var WeakMap = getNative(root, "WeakMap");
module.exports = WeakMap;

},{"./_getNative":"9PCIl","./_root":"dSYUs"}],"48Qyi":[function(require,module,exports) {
var isStrictComparable = require("./_isStrictComparable"), keys = require("./keys");
/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */ function getMatchData(object) {
    var result = keys(object), length = result.length;
    while(length--){
        var key = result[length], value = object[key];
        result[length] = [
            key,
            value,
            isStrictComparable(value)
        ];
    }
    return result;
}
module.exports = getMatchData;

},{"./_isStrictComparable":"lpdGS","./keys":"6fHVw"}],"lpdGS":[function(require,module,exports) {
var isObject = require("./isObject");
/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */ function isStrictComparable(value) {
    return value === value && !isObject(value);
}
module.exports = isStrictComparable;

},{"./isObject":"cGhqJ"}],"a9Bav":[function(require,module,exports) {
/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */ function matchesStrictComparable(key, srcValue) {
    return function(object) {
        if (object == null) return false;
        return object[key] === srcValue && (srcValue !== undefined || key in Object(object));
    };
}
module.exports = matchesStrictComparable;

},{}],"48kxC":[function(require,module,exports) {
var baseIsEqual = require("./_baseIsEqual"), get = require("./get"), hasIn = require("./hasIn"), isKey = require("./_isKey"), isStrictComparable = require("./_isStrictComparable"), matchesStrictComparable = require("./_matchesStrictComparable"), toKey = require("./_toKey");
/** Used to compose bitmasks for value comparisons. */ var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */ function baseMatchesProperty(path, srcValue) {
    if (isKey(path) && isStrictComparable(srcValue)) return matchesStrictComparable(toKey(path), srcValue);
    return function(object) {
        var objValue = get(object, path);
        return objValue === undefined && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
    };
}
module.exports = baseMatchesProperty;

},{"./_baseIsEqual":"7i3qr","./get":"8UELX","./hasIn":"57qii","./_isKey":"4wPWG","./_isStrictComparable":"lpdGS","./_matchesStrictComparable":"a9Bav","./_toKey":"bEgue"}],"57qii":[function(require,module,exports) {
var baseHasIn = require("./_baseHasIn"), hasPath = require("./_hasPath");
/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */ function hasIn(object, path) {
    return object != null && hasPath(object, path, baseHasIn);
}
module.exports = hasIn;

},{"./_baseHasIn":"in8KZ","./_hasPath":"4QNMG"}],"in8KZ":[function(require,module,exports) {
/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */ function baseHasIn(object, key) {
    return object != null && key in Object(object);
}
module.exports = baseHasIn;

},{}],"8aSQI":[function(require,module,exports) {
var baseProperty = require("./_baseProperty"), basePropertyDeep = require("./_basePropertyDeep"), isKey = require("./_isKey"), toKey = require("./_toKey");
/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */ function property(path) {
    return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}
module.exports = property;

},{"./_baseProperty":"4HOmE","./_basePropertyDeep":"c9dhz","./_isKey":"4wPWG","./_toKey":"bEgue"}],"4HOmE":[function(require,module,exports) {
/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */ function baseProperty(key) {
    return function(object) {
        return object == null ? undefined : object[key];
    };
}
module.exports = baseProperty;

},{}],"c9dhz":[function(require,module,exports) {
var baseGet = require("./_baseGet");
/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */ function basePropertyDeep(path) {
    return function(object) {
        return baseGet(object, path);
    };
}
module.exports = basePropertyDeep;

},{"./_baseGet":"kMRe3"}],"2WcC0":[function(require,module,exports) {
var baseMerge = require("./_baseMerge"), createAssigner = require("./_createAssigner");
/**
 * This method is like `_.assign` except that it recursively merges own and
 * inherited enumerable string keyed properties of source objects into the
 * destination object. Source properties that resolve to `undefined` are
 * skipped if a destination value exists. Array and plain object properties
 * are merged recursively. Other objects and value types are overridden by
 * assignment. Source objects are applied from left to right. Subsequent
 * sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 0.5.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = {
 *   'a': [{ 'b': 2 }, { 'd': 4 }]
 * };
 *
 * var other = {
 *   'a': [{ 'c': 3 }, { 'e': 5 }]
 * };
 *
 * _.merge(object, other);
 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
 */ var merge = createAssigner(function(object, source, srcIndex) {
    baseMerge(object, source, srcIndex);
});
module.exports = merge;

},{"./_baseMerge":"lMODl","./_createAssigner":"7RrvA"}],"lMODl":[function(require,module,exports) {
var Stack = require("./_Stack"), assignMergeValue = require("./_assignMergeValue"), baseFor = require("./_baseFor"), baseMergeDeep = require("./_baseMergeDeep"), isObject = require("./isObject"), keysIn = require("./keysIn"), safeGet = require("./_safeGet");
/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */ function baseMerge(object, source, srcIndex, customizer, stack) {
    if (object === source) return;
    baseFor(source, function(srcValue, key) {
        stack || (stack = new Stack);
        if (isObject(srcValue)) baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
        else {
            var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + "", object, source, stack) : undefined;
            if (newValue === undefined) newValue = srcValue;
            assignMergeValue(object, key, newValue);
        }
    }, keysIn);
}
module.exports = baseMerge;

},{"./_Stack":"atP87","./_assignMergeValue":"c7MYR","./_baseFor":"k0bbR","./_baseMergeDeep":"9JvYT","./isObject":"cGhqJ","./keysIn":"c9sMs","./_safeGet":"bXTnf"}],"c7MYR":[function(require,module,exports) {
var baseAssignValue = require("./_baseAssignValue"), eq = require("./eq");
/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */ function assignMergeValue(object, key, value) {
    if (value !== undefined && !eq(object[key], value) || value === undefined && !(key in object)) baseAssignValue(object, key, value);
}
module.exports = assignMergeValue;

},{"./_baseAssignValue":"fprBU","./eq":"aVz5f"}],"9JvYT":[function(require,module,exports) {
var assignMergeValue = require("./_assignMergeValue"), cloneBuffer = require("./_cloneBuffer"), cloneTypedArray = require("./_cloneTypedArray"), copyArray = require("./_copyArray"), initCloneObject = require("./_initCloneObject"), isArguments = require("./isArguments"), isArray = require("./isArray"), isArrayLikeObject = require("./isArrayLikeObject"), isBuffer = require("./isBuffer"), isFunction = require("./isFunction"), isObject = require("./isObject"), isPlainObject = require("./isPlainObject"), isTypedArray = require("./isTypedArray"), safeGet = require("./_safeGet"), toPlainObject = require("./toPlainObject");
/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */ function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
    var objValue = safeGet(object, key), srcValue = safeGet(source, key), stacked = stack.get(srcValue);
    if (stacked) {
        assignMergeValue(object, key, stacked);
        return;
    }
    var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : undefined;
    var isCommon = newValue === undefined;
    if (isCommon) {
        var isArr = isArray(srcValue), isBuff = !isArr && isBuffer(srcValue), isTyped = !isArr && !isBuff && isTypedArray(srcValue);
        newValue = srcValue;
        if (isArr || isBuff || isTyped) {
            if (isArray(objValue)) newValue = objValue;
            else if (isArrayLikeObject(objValue)) newValue = copyArray(objValue);
            else if (isBuff) {
                isCommon = false;
                newValue = cloneBuffer(srcValue, true);
            } else if (isTyped) {
                isCommon = false;
                newValue = cloneTypedArray(srcValue, true);
            } else newValue = [];
        } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
            newValue = objValue;
            if (isArguments(objValue)) newValue = toPlainObject(objValue);
            else if (!isObject(objValue) || isFunction(objValue)) newValue = initCloneObject(srcValue);
        } else isCommon = false;
    }
    if (isCommon) {
        // Recursively merge objects and arrays (susceptible to call stack limits).
        stack.set(srcValue, newValue);
        mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
        stack["delete"](srcValue);
    }
    assignMergeValue(object, key, newValue);
}
module.exports = baseMergeDeep;

},{"./_assignMergeValue":"c7MYR","./_cloneBuffer":"6zXd4","./_cloneTypedArray":"7eG7Y","./_copyArray":"jJ8fu","./_initCloneObject":"dG1H0","./isArguments":"8ReNj","./isArray":"dZaTH","./isArrayLikeObject":"RyRVf","./isBuffer":"cn85h","./isFunction":"cfti6","./isObject":"cGhqJ","./isPlainObject":"cvSNF","./isTypedArray":"6SVKk","./_safeGet":"bXTnf","./toPlainObject":"9QCta"}],"6zXd4":[function(require,module,exports) {
var root = require("./_root");
/** Detect free variable `exports`. */ var freeExports = exports && !exports.nodeType && exports;
/** Detect free variable `module`. */ var freeModule = freeExports && true && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */ var moduleExports = freeModule && freeModule.exports === freeExports;
/** Built-in value references. */ var Buffer = moduleExports ? root.Buffer : undefined, allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;
/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */ function cloneBuffer(buffer, isDeep) {
    if (isDeep) return buffer.slice();
    var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
    buffer.copy(result);
    return result;
}
module.exports = cloneBuffer;

},{"./_root":"dSYUs"}],"7eG7Y":[function(require,module,exports) {
var cloneArrayBuffer = require("./_cloneArrayBuffer");
/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */ function cloneTypedArray(typedArray, isDeep) {
    var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
    return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}
module.exports = cloneTypedArray;

},{"./_cloneArrayBuffer":"7fi2W"}],"7fi2W":[function(require,module,exports) {
var Uint8Array = require("./_Uint8Array");
/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */ function cloneArrayBuffer(arrayBuffer) {
    var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
    new Uint8Array(result).set(new Uint8Array(arrayBuffer));
    return result;
}
module.exports = cloneArrayBuffer;

},{"./_Uint8Array":"6xFrA"}],"jJ8fu":[function(require,module,exports) {
/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */ function copyArray(source, array) {
    var index = -1, length = source.length;
    array || (array = Array(length));
    while(++index < length)array[index] = source[index];
    return array;
}
module.exports = copyArray;

},{}],"dG1H0":[function(require,module,exports) {
var baseCreate = require("./_baseCreate"), getPrototype = require("./_getPrototype"), isPrototype = require("./_isPrototype");
/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */ function initCloneObject(object) {
    return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
}
module.exports = initCloneObject;

},{"./_baseCreate":"ef1VZ","./_getPrototype":"8ASKT","./_isPrototype":"iG4eR"}],"ef1VZ":[function(require,module,exports) {
var isObject = require("./isObject");
/** Built-in value references. */ var objectCreate = Object.create;
/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */ var baseCreate = function() {
    function object() {}
    return function(proto) {
        if (!isObject(proto)) return {};
        if (objectCreate) return objectCreate(proto);
        object.prototype = proto;
        var result = new object;
        object.prototype = undefined;
        return result;
    };
}();
module.exports = baseCreate;

},{"./isObject":"cGhqJ"}],"RyRVf":[function(require,module,exports) {
var isArrayLike = require("./isArrayLike"), isObjectLike = require("./isObjectLike");
/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */ function isArrayLikeObject(value) {
    return isObjectLike(value) && isArrayLike(value);
}
module.exports = isArrayLikeObject;

},{"./isArrayLike":"gMCbp","./isObjectLike":"3BLi4"}],"bXTnf":[function(require,module,exports) {
/**
 * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */ function safeGet(object, key) {
    if (key === "constructor" && typeof object[key] === "function") return;
    if (key == "__proto__") return;
    return object[key];
}
module.exports = safeGet;

},{}],"9QCta":[function(require,module,exports) {
var copyObject = require("./_copyObject"), keysIn = require("./keysIn");
/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */ function toPlainObject(value) {
    return copyObject(value, keysIn(value));
}
module.exports = toPlainObject;

},{"./_copyObject":"gfA7W","./keysIn":"c9sMs"}],"gfA7W":[function(require,module,exports) {
var assignValue = require("./_assignValue"), baseAssignValue = require("./_baseAssignValue");
/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */ function copyObject(source, props, object, customizer) {
    var isNew = !object;
    object || (object = {});
    var index = -1, length = props.length;
    while(++index < length){
        var key = props[index];
        var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined;
        if (newValue === undefined) newValue = source[key];
        if (isNew) baseAssignValue(object, key, newValue);
        else assignValue(object, key, newValue);
    }
    return object;
}
module.exports = copyObject;

},{"./_assignValue":"5M3eX","./_baseAssignValue":"fprBU"}],"5M3eX":[function(require,module,exports) {
var baseAssignValue = require("./_baseAssignValue"), eq = require("./eq");
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */ function assignValue(object, key, value) {
    var objValue = object[key];
    if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === undefined && !(key in object)) baseAssignValue(object, key, value);
}
module.exports = assignValue;

},{"./_baseAssignValue":"fprBU","./eq":"aVz5f"}],"c9sMs":[function(require,module,exports) {
var arrayLikeKeys = require("./_arrayLikeKeys"), baseKeysIn = require("./_baseKeysIn"), isArrayLike = require("./isArrayLike");
/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */ function keysIn(object) {
    return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}
module.exports = keysIn;

},{"./_arrayLikeKeys":"dquIQ","./_baseKeysIn":"23s7e","./isArrayLike":"gMCbp"}],"23s7e":[function(require,module,exports) {
var isObject = require("./isObject"), isPrototype = require("./_isPrototype"), nativeKeysIn = require("./_nativeKeysIn");
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */ function baseKeysIn(object) {
    if (!isObject(object)) return nativeKeysIn(object);
    var isProto = isPrototype(object), result = [];
    for(var key in object)if (!(key == "constructor" && (isProto || !hasOwnProperty.call(object, key)))) result.push(key);
    return result;
}
module.exports = baseKeysIn;

},{"./isObject":"cGhqJ","./_isPrototype":"iG4eR","./_nativeKeysIn":"5CFL0"}],"5CFL0":[function(require,module,exports) {
/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */ function nativeKeysIn(object) {
    var result = [];
    if (object != null) for(var key in Object(object))result.push(key);
    return result;
}
module.exports = nativeKeysIn;

},{}],"7RrvA":[function(require,module,exports) {
var baseRest = require("./_baseRest"), isIterateeCall = require("./_isIterateeCall");
/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */ function createAssigner(assigner) {
    return baseRest(function(object, sources) {
        var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : undefined, guard = length > 2 ? sources[2] : undefined;
        customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : undefined;
        if (guard && isIterateeCall(sources[0], sources[1], guard)) {
            customizer = length < 3 ? undefined : customizer;
            length = 1;
        }
        object = Object(object);
        while(++index < length){
            var source = sources[index];
            if (source) assigner(object, source, index, customizer);
        }
        return object;
    });
}
module.exports = createAssigner;

},{"./_baseRest":"kd260","./_isIterateeCall":"7JSn7"}],"7JSn7":[function(require,module,exports) {
var eq = require("./eq"), isArrayLike = require("./isArrayLike"), isIndex = require("./_isIndex"), isObject = require("./isObject");
/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */ function isIterateeCall(value, index, object) {
    if (!isObject(object)) return false;
    var type = typeof index;
    if (type == "number" ? isArrayLike(object) && isIndex(index, object.length) : type == "string" && index in object) return eq(object[index], value);
    return false;
}
module.exports = isIterateeCall;

},{"./eq":"aVz5f","./isArrayLike":"gMCbp","./_isIndex":"aJpx0","./isObject":"cGhqJ"}],"bY5l6":[function(require,module,exports) {
var basePick = require("./_basePick"), flatRest = require("./_flatRest");
/**
 * Creates an object composed of the picked `object` properties.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [paths] The property paths to pick.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.pick(object, ['a', 'c']);
 * // => { 'a': 1, 'c': 3 }
 */ var pick = flatRest(function(object, paths) {
    return object == null ? {} : basePick(object, paths);
});
module.exports = pick;

},{"./_basePick":"3dMQF","./_flatRest":"bmlRd"}],"3dMQF":[function(require,module,exports) {
var basePickBy = require("./_basePickBy"), hasIn = require("./hasIn");
/**
 * The base implementation of `_.pick` without support for individual
 * property identifiers.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @returns {Object} Returns the new object.
 */ function basePick(object, paths) {
    return basePickBy(object, paths, function(value, path) {
        return hasIn(object, path);
    });
}
module.exports = basePick;

},{"./_basePickBy":"kGNmD","./hasIn":"57qii"}],"kGNmD":[function(require,module,exports) {
var baseGet = require("./_baseGet"), baseSet = require("./_baseSet"), castPath = require("./_castPath");
/**
 * The base implementation of  `_.pickBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @param {Function} predicate The function invoked per property.
 * @returns {Object} Returns the new object.
 */ function basePickBy(object, paths, predicate) {
    var index = -1, length = paths.length, result = {};
    while(++index < length){
        var path = paths[index], value = baseGet(object, path);
        if (predicate(value, path)) baseSet(result, castPath(path, object), value);
    }
    return result;
}
module.exports = basePickBy;

},{"./_baseGet":"kMRe3","./_baseSet":"5Mi1g","./_castPath":"apxk5"}],"5Mi1g":[function(require,module,exports) {
var assignValue = require("./_assignValue"), castPath = require("./_castPath"), isIndex = require("./_isIndex"), isObject = require("./isObject"), toKey = require("./_toKey");
/**
 * The base implementation of `_.set`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */ function baseSet(object, path, value, customizer) {
    if (!isObject(object)) return object;
    path = castPath(path, object);
    var index = -1, length = path.length, lastIndex = length - 1, nested = object;
    while(nested != null && ++index < length){
        var key = toKey(path[index]), newValue = value;
        if (key === "__proto__" || key === "constructor" || key === "prototype") return object;
        if (index != lastIndex) {
            var objValue = nested[key];
            newValue = customizer ? customizer(objValue, key, nested) : undefined;
            if (newValue === undefined) newValue = isObject(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};
        }
        assignValue(nested, key, newValue);
        nested = nested[key];
    }
    return object;
}
module.exports = baseSet;

},{"./_assignValue":"5M3eX","./_castPath":"apxk5","./_isIndex":"aJpx0","./isObject":"cGhqJ","./_toKey":"bEgue"}],"bmlRd":[function(require,module,exports) {
var flatten = require("./flatten"), overRest = require("./_overRest"), setToString = require("./_setToString");
/**
 * A specialized version of `baseRest` which flattens the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @returns {Function} Returns the new function.
 */ function flatRest(func) {
    return setToString(overRest(func, undefined, flatten), func + "");
}
module.exports = flatRest;

},{"./flatten":"71l7m","./_overRest":"16F1z","./_setToString":"b5kjI"}],"71l7m":[function(require,module,exports) {
var baseFlatten = require("./_baseFlatten");
/**
 * Flattens `array` a single level deep.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flatten([1, [2, [3, [4]], 5]]);
 * // => [1, 2, [3, [4]], 5]
 */ function flatten(array) {
    var length = array == null ? 0 : array.length;
    return length ? baseFlatten(array, 1) : [];
}
module.exports = flatten;

},{"./_baseFlatten":"60rt9"}],"uwDF1":[function(require,module,exports) {
var baseSet = require("./_baseSet");
/**
 * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
 * it's created. Arrays are created for missing index properties while objects
 * are created for all other missing properties. Use `_.setWith` to customize
 * `path` creation.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.set(object, 'a[0].b.c', 4);
 * console.log(object.a[0].b.c);
 * // => 4
 *
 * _.set(object, ['x', '0', 'y', 'z'], 5);
 * console.log(object.x[0].y.z);
 * // => 5
 */ function set(object, path, value) {
    return object == null ? object : baseSet(object, path, value);
}
module.exports = set;

},{"./_baseSet":"5Mi1g"}],"lX6jB":[function(require,module,exports) {
var createCaseFirst = require("./_createCaseFirst");
/**
 * Converts the first character of `string` to upper case.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.upperFirst('fred');
 * // => 'Fred'
 *
 * _.upperFirst('FRED');
 * // => 'FRED'
 */ var upperFirst = createCaseFirst("toUpperCase");
module.exports = upperFirst;

},{"./_createCaseFirst":"arkB7"}],"arkB7":[function(require,module,exports) {
var castSlice = require("./_castSlice"), hasUnicode = require("./_hasUnicode"), stringToArray = require("./_stringToArray"), toString = require("./toString");
/**
 * Creates a function like `_.lowerFirst`.
 *
 * @private
 * @param {string} methodName The name of the `String` case method to use.
 * @returns {Function} Returns the new case function.
 */ function createCaseFirst(methodName) {
    return function(string) {
        string = toString(string);
        var strSymbols = hasUnicode(string) ? stringToArray(string) : undefined;
        var chr = strSymbols ? strSymbols[0] : string.charAt(0);
        var trailing = strSymbols ? castSlice(strSymbols, 1).join("") : string.slice(1);
        return chr[methodName]() + trailing;
    };
}
module.exports = createCaseFirst;

},{"./_castSlice":"eHx77","./_hasUnicode":"b3sZ0","./_stringToArray":"dl1Gh","./toString":"joIdQ"}],"eHx77":[function(require,module,exports) {
var baseSlice = require("./_baseSlice");
/**
 * Casts `array` to a slice if it's needed.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {number} start The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the cast slice.
 */ function castSlice(array, start, end) {
    var length = array.length;
    end = end === undefined ? length : end;
    return !start && end >= length ? array : baseSlice(array, start, end);
}
module.exports = castSlice;

},{"./_baseSlice":"cqqI2"}],"b3sZ0":[function(require,module,exports) {
/** Used to compose unicode character classes. */ var rsAstralRange = "\ud800-\udfff", rsComboMarksRange = "\\u0300-\\u036f", reComboHalfMarksRange = "\\ufe20-\\ufe2f", rsComboSymbolsRange = "\\u20d0-\\u20ff", rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange, rsVarRange = "\\ufe0e\\ufe0f";
/** Used to compose unicode capture groups. */ var rsZWJ = "\\u200d";
/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */ var reHasUnicode = RegExp("[" + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + "]");
/**
 * Checks if `string` contains Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
 */ function hasUnicode(string) {
    return reHasUnicode.test(string);
}
module.exports = hasUnicode;

},{}],"dl1Gh":[function(require,module,exports) {
var asciiToArray = require("./_asciiToArray"), hasUnicode = require("./_hasUnicode"), unicodeToArray = require("./_unicodeToArray");
/**
 * Converts `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */ function stringToArray(string) {
    return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
}
module.exports = stringToArray;

},{"./_asciiToArray":"1GB6M","./_hasUnicode":"b3sZ0","./_unicodeToArray":"5Z8Ku"}],"1GB6M":[function(require,module,exports) {
/**
 * Converts an ASCII `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */ function asciiToArray(string) {
    return string.split("");
}
module.exports = asciiToArray;

},{}],"5Z8Ku":[function(require,module,exports) {
/** Used to compose unicode character classes. */ var rsAstralRange = "\ud800-\udfff", rsComboMarksRange = "\\u0300-\\u036f", reComboHalfMarksRange = "\\ufe20-\\ufe2f", rsComboSymbolsRange = "\\u20d0-\\u20ff", rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange, rsVarRange = "\\ufe0e\\ufe0f";
/** Used to compose unicode capture groups. */ var rsAstral = "[" + rsAstralRange + "]", rsCombo = "[" + rsComboRange + "]", rsFitz = "\ud83c[\udffb-\udfff]", rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")", rsNonAstral = "[^" + rsAstralRange + "]", rsRegional = "(?:\ud83c[\udde6-\uddff]){2}", rsSurrPair = "[\ud800-\udbff][\udc00-\udfff]", rsZWJ = "\\u200d";
/** Used to compose unicode regexes. */ var reOptMod = rsModifier + "?", rsOptVar = "[" + rsVarRange + "]?", rsOptJoin = "(?:" + rsZWJ + "(?:" + [
    rsNonAstral,
    rsRegional,
    rsSurrPair
].join("|") + ")" + rsOptVar + reOptMod + ")*", rsSeq = rsOptVar + reOptMod + rsOptJoin, rsSymbol = "(?:" + [
    rsNonAstral + rsCombo + "?",
    rsCombo,
    rsRegional,
    rsSurrPair,
    rsAstral
].join("|") + ")";
/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */ var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
/**
 * Converts a Unicode `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */ function unicodeToArray(string) {
    return string.match(reUnicode) || [];
}
module.exports = unicodeToArray;

},{}],"ekNWT":[function(require,module,exports) {
const util = require("./util");
module.exports = (props, compose)=>(key, deps)=>{
        const { stats  } = props;
        const startTime = performance.now();
        const result = compose(key, deps);
        const duration = performance.now() - startTime;
        util.set(stats.modules, [
            key,
            "duration"
        ], duration);
        stats.totalDuration += duration;
        return result;
    };

},{"./util":"cSt0i"}],"gAfrR":[function(require,module,exports) {
const util = require("./util");
const eject = require("./eject");
const mermaid = require("./mermaid");
const defaultOptions = require("./default-options");
module.exports = (target, userOptions)=>{
    const options = util.merge({}, defaultOptions, userOptions);
    const config = util.mergeValues({}, options, options.configKeys);
    const stats = {
        durationUnit: "ms",
        totalDuration: 0,
        modules: {}
    };
    const optionalStats = options.stats ? {
        stats
    } : {};
    const props = {
        defaultOptions,
        userOptions,
        options,
        config,
        target,
        modules: {
            ...target
        },
        dependencies: util.mapValues(target, ()=>[]),
        composedDependencies: {},
        ...optionalStats,
        mermaid: (opts)=>mermaid(props.dependencies, opts),
        eject: ()=>eject(target, props.composedDependencies)
    };
    return {
        ...props,
        props
    };
};

},{"./util":"cSt0i","./eject":"jwSru","./mermaid":"6ZU5X","./default-options":"4Lf6H"}],"jwSru":[function(require,module,exports) {
const util = require("./util");
const flatten = require("flat");
module.exports = (target, deps1)=>{
    const targetKeys = Object.keys(deps1);
    const lines = Object.entries(deps1).flatMap(([targetKey, deps])=>{
        const moduleName = targetKey.split(".").pop();
        const keys = Object.keys(flatten({
            [moduleName]: util.get(target, targetKey)
        }));
        return [
            "",
            `const ${moduleName} = { ...modules.${targetKey} };`,
            `const ${moduleName}Dependencies = { ${[
                moduleName,
                ...deps
            ].join(", ")} };`,
            ...keys.map((key)=>`${key} = ${key}({ ...${moduleName}Dependencies });`)
        ];
    }).concat("", `return { ${[
        "...modules",
        ...targetKeys.map((key)=>key.split(".").pop())
    ].join(", ")} };`, "");
    const uniqDeps = Array.from(new Set(Object.values(deps1).flat()));
    const args = uniqDeps.filter((dep)=>!target[dep]);
    return [
        `(modules, { ${args.join(", ")} }) => {`,
        `${lines.map((line)=>" ".repeat(line ? 4 : 0) + line).join("\n")}`,
        "};"
    ].join("\n");
};

},{"./util":"cSt0i","flat":"6JeOT"}],"6JeOT":[function(require,module,exports) {
module.exports = flatten;
flatten.flatten = flatten;
flatten.unflatten = unflatten;
function isBuffer(obj) {
    return obj && obj.constructor && typeof obj.constructor.isBuffer === "function" && obj.constructor.isBuffer(obj);
}
function keyIdentity(key) {
    return key;
}
function flatten(target, opts) {
    opts = opts || {};
    const delimiter = opts.delimiter || ".";
    const maxDepth = opts.maxDepth;
    const transformKey = opts.transformKey || keyIdentity;
    const output = {};
    function step(object, prev, currentDepth) {
        currentDepth = currentDepth || 1;
        Object.keys(object).forEach(function(key) {
            const value = object[key];
            const isarray = opts.safe && Array.isArray(value);
            const type = Object.prototype.toString.call(value);
            const isbuffer = isBuffer(value);
            const isobject = type === "[object Object]" || type === "[object Array]";
            const newKey = prev ? prev + delimiter + transformKey(key) : transformKey(key);
            if (!isarray && !isbuffer && isobject && Object.keys(value).length && (!opts.maxDepth || currentDepth < maxDepth)) return step(value, newKey, currentDepth + 1);
            output[newKey] = value;
        });
    }
    step(target);
    return output;
}
function unflatten(target1, opts) {
    opts = opts || {};
    const delimiter = opts.delimiter || ".";
    const overwrite = opts.overwrite || false;
    const transformKey = opts.transformKey || keyIdentity;
    const result1 = {};
    const isbuffer = isBuffer(target1);
    if (isbuffer || Object.prototype.toString.call(target1) !== "[object Object]") return target1;
    // safely ensure that the key is
    // an integer.
    function getkey(key) {
        const parsedKey = Number(key);
        return isNaN(parsedKey) || key.indexOf(".") !== -1 || opts.object ? key : parsedKey;
    }
    function addKeys(keyPrefix, recipient, target) {
        return Object.keys(target).reduce(function(result, key) {
            result[keyPrefix + delimiter + key] = target[key];
            return result;
        }, recipient);
    }
    function isEmpty(val) {
        const type = Object.prototype.toString.call(val);
        const isArray = type === "[object Array]";
        const isObject = type === "[object Object]";
        if (!val) return true;
        else if (isArray) return !val.length;
        else if (isObject) return !Object.keys(val).length;
    }
    target1 = Object.keys(target1).reduce(function(result, key) {
        const type = Object.prototype.toString.call(target1[key]);
        const isObject = type === "[object Object]" || type === "[object Array]";
        if (!isObject || isEmpty(target1[key])) {
            result[key] = target1[key];
            return result;
        } else return addKeys(key, result, flatten(target1[key], opts));
    }, {});
    Object.keys(target1).forEach(function(key) {
        const split = key.split(delimiter).map(transformKey);
        let key1 = getkey(split.shift());
        let key2 = getkey(split[0]);
        let recipient = result1;
        while(key2 !== undefined){
            if (key1 === "__proto__") return;
            const type = Object.prototype.toString.call(recipient[key1]);
            const isobject = type === "[object Object]" || type === "[object Array]";
            // do not write over falsey, non-undefined values if overwrite is false
            if (!overwrite && !isobject && typeof recipient[key1] !== "undefined") return;
            if (overwrite && !isobject || !overwrite && recipient[key1] == null) recipient[key1] = typeof key2 === "number" && !opts.object ? [] : {};
            recipient = recipient[key1];
            if (split.length > 0) {
                key1 = getkey(split.shift());
                key2 = getkey(split[0]);
            }
        }
        // unflatten again for 'messy objects'
        recipient[key1] = unflatten(target1[key], opts);
    });
    return result1;
}

},{}],"6ZU5X":[function(require,module,exports) {
module.exports = (deps, opts = {})=>{
    const { omit =[]  } = opts;
    const lines = Object.entries(deps).flatMap((ent)=>ent[1].map((dep)=>[
                ent[0],
                dep
            ])).filter((ent)=>!ent.some((key)=>omit.includes(key))).map((ent)=>`    ${ent.join("-->")};`);
    return [
        "graph TD;",
        ...lines
    ].join("\n");
};

},{}],"4Lf6H":[function(require,module,exports) {
module.exports = {
    stats: true,
    configKeys: [
        "defaultConfig",
        "config",
        "configs"
    ],
    customiser: "setup",
    defaults: {},
    overrides: {}
};

},{}],"aOVNo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("./components/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("./core/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("./diagnostics/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("./elements/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
var _indexJs4 = require("./io/index.js");
var _indexJsDefault4 = parcelHelpers.interopDefault(_indexJs4);
var _indexJs5 = require("./services/index.js");
var _indexJsDefault5 = parcelHelpers.interopDefault(_indexJs5);
var _indexJs6 = require("./startup/index.js");
var _indexJsDefault6 = parcelHelpers.interopDefault(_indexJs6);
var _indexJs7 = require("./storage/index.js");
var _indexJsDefault7 = parcelHelpers.interopDefault(_indexJs7);
var _indexJs8 = require("./stores/index.js");
var _indexJsDefault8 = parcelHelpers.interopDefault(_indexJs8);
var _indexJs9 = require("./styles/index.js");
var _indexJsDefault9 = parcelHelpers.interopDefault(_indexJs9);
var _indexJs10 = require("./subscriptions/index.js");
var _indexJsDefault10 = parcelHelpers.interopDefault(_indexJs10);
var _indexJs11 = require("./ui/index.js");
var _indexJsDefault11 = parcelHelpers.interopDefault(_indexJs11);
var _indexJs12 = require("./util/index.js");
var _indexJsDefault12 = parcelHelpers.interopDefault(_indexJs12);
var _indexJs13 = require("./vendor-components/index.js");
var _indexJsDefault13 = parcelHelpers.interopDefault(_indexJs13);
var _indexJs14 = require("./vendor-services/index.js");
var _indexJsDefault14 = parcelHelpers.interopDefault(_indexJs14);
exports.default = {
    components: (0, _indexJsDefault.default),
    core: (0, _indexJsDefault1.default),
    diagnostics: (0, _indexJsDefault2.default),
    elements: (0, _indexJsDefault3.default),
    io: (0, _indexJsDefault4.default),
    services: (0, _indexJsDefault5.default),
    startup: (0, _indexJsDefault6.default),
    storage: (0, _indexJsDefault7.default),
    stores: (0, _indexJsDefault8.default),
    styles: (0, _indexJsDefault9.default),
    subscriptions: (0, _indexJsDefault10.default),
    ui: (0, _indexJsDefault11.default),
    util: (0, _indexJsDefault12.default),
    vendorComponents: (0, _indexJsDefault13.default),
    vendorServices: (0, _indexJsDefault14.default)
};

},{"./components/index.js":"5Vwqi","./core/index.js":"2t7rH","./diagnostics/index.js":"7v5OQ","./elements/index.js":"dUALu","./io/index.js":"gzusB","./services/index.js":"7hTpP","./startup/index.js":"biIre","./storage/index.js":"gwOCy","./stores/index.js":"hBLcV","./styles/index.js":"jhMVz","./subscriptions/index.js":"2WyoC","./ui/index.js":"8WMoJ","./util/index.js":"hjXAO","./vendor-components/index.js":"i3Vn4","./vendor-services/index.js":"lQHWO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5Vwqi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _appJs = require("./app.js");
var _appJsDefault = parcelHelpers.interopDefault(_appJs);
var _dropzoneJs = require("./dropzone.js");
var _dropzoneJsDefault = parcelHelpers.interopDefault(_dropzoneJs);
var _indexJs = require("./gravatar/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("./header/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("./image-upload-options/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _modalJs = require("./modal.js");
var _modalJsDefault = parcelHelpers.interopDefault(_modalJs);
var _indexJs3 = require("./modals/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
var _indexJs4 = require("./options-bar/index.js");
var _indexJsDefault4 = parcelHelpers.interopDefault(_indexJs4);
var _indexJs5 = require("./role-list/index.js");
var _indexJsDefault5 = parcelHelpers.interopDefault(_indexJs5);
var _indexJs6 = require("./tag-list/index.js");
var _indexJsDefault6 = parcelHelpers.interopDefault(_indexJs6);
var _indexJs7 = require("./tips/index.js");
var _indexJsDefault7 = parcelHelpers.interopDefault(_indexJs7);
exports.default = {
    app: (0, _appJsDefault.default),
    dropzone: (0, _dropzoneJsDefault.default),
    gravatar: (0, _indexJsDefault.default),
    header: (0, _indexJsDefault1.default),
    imageUploadOptions: (0, _indexJsDefault2.default),
    modal: (0, _modalJsDefault.default),
    modals: (0, _indexJsDefault3.default),
    optionsBar: (0, _indexJsDefault4.default),
    roleList: (0, _indexJsDefault5.default),
    tagList: (0, _indexJsDefault6.default),
    tips: (0, _indexJsDefault7.default)
};

},{"./app.js":"2BW6i","./dropzone.js":"fU2ss","./gravatar/index.js":"blyKY","./header/index.js":"9wvnN","./image-upload-options/index.js":"iDOJd","./modal.js":"7OcAx","./modals/index.js":"4wcxr","./options-bar/index.js":"bnyd9","./role-list/index.js":"gYEkx","./tag-list/index.js":"iQ4aE","./tips/index.js":"hAeVq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2BW6i":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ({ ui , components , vendorComponents , subscriptions  })=>()=>{
        const $$modals = Object.values(components.modals).map((modal)=>modal());
        const $container = ui.el("div", "app").append(vendorComponents.gtagScript(), ui.el("div", "modals").append(...$$modals), components.header.container(), components.dropzone().append(ui.el("div", "control-panel").append(components.imageUploadOptions.container(), components.roleList.container(), components.optionsBar.container()), components.tagList.container()));
        subscriptions.settings.onChange("app", "modal", (modal)=>{
            ui.toggleBoolClass($container, "modal", modal);
        });
        return $container;
    };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"fU2ss":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ({ elements , services  })=>()=>{
        return elements.dropzone().addEventListener("drop", (e)=>{
            services.tags.insertFileBatchAsync(e.dataTransfer.files);
        });
    };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"blyKY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("./actions/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("./content/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _titleJs = require("./title.js");
var _titleJsDefault = parcelHelpers.interopDefault(_titleJs);
exports.default = {
    actions: (0, _indexJsDefault.default),
    content: (0, _indexJsDefault1.default),
    title: (0, _titleJsDefault.default)
};

},{"./actions/index.js":"ahuqS","./content/index.js":"igAwD","./title.js":"hDQSC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ahuqS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _containerJs = require("./container.js");
var _containerJsDefault = parcelHelpers.interopDefault(_containerJs);
var _errorJs = require("./error.js");
var _errorJsDefault = parcelHelpers.interopDefault(_errorJs);
var _importButtonJs = require("./import-button.js");
var _importButtonJsDefault = parcelHelpers.interopDefault(_importButtonJs);
var _loadingJs = require("./loading.js");
var _loadingJsDefault = parcelHelpers.interopDefault(_loadingJs);
exports.default = {
    container: (0, _containerJsDefault.default),
    error: (0, _errorJsDefault.default),
    importButton: (0, _importButtonJsDefault.default),
    loading: (0, _loadingJsDefault.default)
};

},{"./container.js":"aIVM3","./error.js":"i8j2q","./import-button.js":"9oTbL","./loading.js":"WRmQc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aIVM3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ({ ui , actions  })=>()=>{
        return ui.el("div").append(actions.importButton(), actions.loading(), actions.error());
    };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i8j2q":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ({ ui , services , subscriptions  })=>()=>{
        const $errorMessage = ui.el("div", "error-message");
        const $dismiss = ui.el("a", "dismiss", {
            textContent: "Dismiss"
        }).addEventListener("click", services.gravatar.status.to.ready);
        const $error = ui.el("div", "error").append($errorMessage, $dismiss);
        subscriptions.settings.onChange("gravatar", "status", ()=>{
            ui.toggleBoolClass($error, "visible", services.gravatar.status.is.error());
        });
        subscriptions.settings.onChange("gravatar", "errorMessage", (errorMessage)=>{
            $errorMessage.textContent = errorMessage;
        });
        return $error;
    };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9oTbL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ({ ui , services , subscriptions  })=>()=>{
        const $import = ui.el("button", "import", {
            textContent: "Import"
        }).addEventListener("click", ()=>{
            const { emails , fallback  } = services.settings.getGravatar();
            services.tags.insertGravatarBatchAsync(emails, fallback);
        });
        subscriptions.settings.onChange("gravatar", "status", ()=>{
            ui.toggleBoolClass($import, "visible", services.gravatar.status.is.ready());
        });
        subscriptions.settings.onChange("gravatar", "freetext", (freetext)=>{
            $import.disabled = !freetext.trim();
        });
        return $import;
    };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"WRmQc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ({ ui , services , subscriptions  })=>()=>{
        const $loading = ui.el("div", "loading-indicator lds-dual-ring");
        subscriptions.settings.onChange("gravatar", "status", ()=>{
            ui.toggleBoolClass($loading, "visible", services.gravatar.status.is.working());
        });
        return $loading;
    };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"igAwD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _containerJs = require("./container.js");
var _containerJsDefault = parcelHelpers.interopDefault(_containerJs);
var _fallbackJs = require("./fallback.js");
var _fallbackJsDefault = parcelHelpers.interopDefault(_fallbackJs);
var _fallbacksJs = require("./fallbacks.js");
var _fallbacksJsDefault = parcelHelpers.interopDefault(_fallbacksJs);
var _freetextJs = require("./freetext.js");
var _freetextJsDefault = parcelHelpers.interopDefault(_freetextJs);
exports.default = {
    container: (0, _containerJsDefault.default),
    fallback: (0, _fallbackJsDefault.default),
    fallbacks: (0, _fallbacksJsDefault.default),
    freetext: (0, _freetextJsDefault.default)
};

},{"./container.js":"gbo1U","./fallback.js":"7VsHY","./fallbacks.js":"dCQuj","./freetext.js":"ckAeE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gbo1U":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ({ ui , content  })=>()=>{
        return ui.el("div", "gravatar").append(content.freetext(), content.fallbacks());
    };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7VsHY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ({ ui , services , subscriptions  })=>(fallback)=>{
        const $fallback = ui.el("img", "fallback", {
            title: fallback,
            src: `img/gravatar-fallbacks/${fallback}.png`
        }).addEventListener("click", ()=>{
            services.gravatar.changeFallback(fallback);
        });
        subscriptions.settings.onChange("gravatar", "fallback", (selectedFallback)=>{
            ui.toggleBoolClass($fallback, "selected", fallback === selectedFallback);
        });
        return $fallback;
    };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dCQuj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ({ ui , content , elements , config  })=>()=>{
        const $$fallbackOptions = config.gravatar.fallbacks.map(content.fallback);
        const $fallbacks = ui.el("div").append(...$$fallbackOptions);
        const labelText = "Select a generated image style to use in case profile image is not found.";
        return elements.label(labelText, $fallbacks);
    };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ckAeE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ({ ui , services , subscriptions , elements  })=>()=>{
        const $freetext = ui.el("textarea", "freetext").addEventListener("input", ()=>{
            services.gravatar.changeFreetext($freetext.value);
        });
        subscriptions.settings.onChange("gravatar", "freetext", (freetext)=>{
            $freetext.value = freetext;
        });
        subscriptions.settings.onChange("gravatar", "status", ()=>{
            $freetext.disabled = services.gravatar.status.is.working();
        });
        const labelText = "Email addresses:";
        return elements.label(labelText, $freetext);
    };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hDQSC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ({ ui  })=>()=>{
        const $gravatarTitle = ui.el("span", "gravatar-title", {
            textContent: "Import images from Gravatar"
        });
        const $aboutGravatar = ui.el("a", "about-gravatar", {
            text: "What is Gravatar?",
            href: "https://en.gravatar.com/support/what-is-gravatar/",
            target: "_blank"
        });
        return ui.el("div").append($gravatarTitle, $aboutGravatar);
    };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9wvnN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _containerJs = require("./container.js");
var _containerJsDefault = parcelHelpers.interopDefault(_containerJs);
var _titleBarJs = require("./title-bar.js");
var _titleBarJsDefault = parcelHelpers.interopDefault(_titleBarJs);
exports.default = {
    container: (0, _containerJsDefault.default),
    titleBar: (0, _titleBarJsDefault.default)
};

},{"./container.js":"7pBr0","./title-bar.js":"2fEjb","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7pBr0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ({ ui , header  })=>()=>{
        return ui.el("header").append(header.titleBar());
    };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2fEjb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ({ services , ui , config  })=>()=>{
        const $tips = ui.el("a", "tips", {
            textContent: "Tips & tricks"
        }).addEventListener("click", ()=>{
            services.settings.changeModal("tips");
        });
        const $issues = ui.el("a", {
            textContent: "Send feedback",
            target: "_blank",
            href: config.app.issues
        });
        const $source = ui.el("a", {
            textContent: "Source code",
            target: "_blank",
            href: config.app.source
        });
        const $devBar = ui.el("dev-bar").append($tips, $issues, $source);
        $devBar.setAttribute("app-name", config.app.name);
        return $devBar;
    };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iDOJd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _chooseImagesJs = require("./choose-images.js");
var _chooseImagesJsDefault = parcelHelpers.interopDefault(_chooseImagesJs);
var _containerJs = require("./container.js");
var _containerJsDefault = parcelHelpers.interopDefault(_containerJs);
var _gravatarJs = require("./gravatar.js");
var _gravatarJsDefault = parcelHelpers.interopDefault(_gravatarJs);
exports.default = {
    chooseImages: (0, _chooseImagesJsDefault.default),
    container: (0, _containerJsDefault.default),
    gravatar: (0, _gravatarJsDefault.default)
};

},{"./choose-images.js":"fXJrB","./container.js":"ahPAs","./gravatar.js":"dv5xf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fXJrB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ({ ui , services  })=>()=>{
        const $fileInput = ui.el("input", {
            type: "file",
            multiple: true,
            accept: "image/*"
        }).addEventListener("change", (e)=>{
            services.tags.insertFileBatchAsync(e.target.files);
        });
        const $chooseImages = ui.el("a", {
            textContent: "Choose images"
        }).addEventListener("click", (e)=>{
            e.preventDefault();
            $fileInput.click();
            e.fileInput = $fileInput;
        });
        return ui.el("span").append($chooseImages);
    }; /* FOOTNOTES

- Interestingly, file input can be triggered which detached from the ui.
- File input is assigned to click event to make it accessible to tests via event propagation.

*/ 

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ahPAs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ({ ui , imageUploadOptions  })=>()=>{
        return ui.el("div", "image-upload-options").append(ui.el("span", {
            textContent: "Drag & drop images"
        }), imageUploadOptions.chooseImages(), imageUploadOptions.gravatar());
    };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dv5xf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ({ ui , services , vendorServices  })=>()=>{
        return ui.el("a", {
            textContent: "Import images from Gravatar"
        }).addEventListener("click", ()=>{
            vendorServices.gtag("event", "gravatar-clicked");
            services.settings.changeModal("gravatar");
        });
    };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7OcAx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ({ elements , services , subscriptions  })=>({ name , title , content , actions  })=>{
        const onVisibilityChange = (callback)=>{
            subscriptions.settings.onChange("app", "modal", (modal)=>{
                const visible = modal === name;
                callback(visible);
            });
        };
        return elements.modal({
            title,
            content,
            actions,
            onVisibilityChange
        }).addEventListener("dismiss", services.settings.clearModal);
    };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4wcxr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _gravatarJs = require("./gravatar.js");
var _gravatarJsDefault = parcelHelpers.interopDefault(_gravatarJs);
var _tipsJs = require("./tips.js");
var _tipsJsDefault = parcelHelpers.interopDefault(_tipsJs);
var _welcomeJs = require("./welcome.js");
var _welcomeJsDefault = parcelHelpers.interopDefault(_welcomeJs);
exports.default = {
    gravatar: (0, _gravatarJsDefault.default),
    tips: (0, _tipsJsDefault.default),
    welcome: (0, _welcomeJsDefault.default)
};

},{"./gravatar.js":"dZKF3","./tips.js":"55Oq5","./welcome.js":"dun5l","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dZKF3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ({ components  })=>()=>{
        return components.modal({
            name: "gravatar",
            title: components.gravatar.title(),
            content: components.gravatar.content.container(),
            actions: components.gravatar.actions.container()
        });
    };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"55Oq5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ({ ui , components  })=>()=>{
        const { roleShortcut , naming , images , laminating , multiples , badges  } = components.tips;
        const sequence = [
            roleShortcut,
            naming,
            images,
            laminating,
            multiples,
            badges
        ];
        const $tips = ui.el("div", "tips");
        sequence.forEach((render)=>{
            const $tip = render();
            $tip.className = "tip";
            const $heading = ui.el("div", "heading", {
                textContent: $tip.title
            });
            $tip.prepend($heading);
            $tips.append($tip);
        });
        return components.modal({
            name: "tips",
            content: $tips,
            title: "Tips & tricks"
        });
    };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dun5l":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ({ ui , components , services , config  })=>()=>{
        const $heading = ui.el("h1", "welcome-title", {
            textContent: `Welcome to ${config.app.name}`
        });
        const $image = ui.el("img", {
            src: "img/welcome.png",
            width: 800
        });
        const $continue = ui.el("button", {
            textContent: "Continue"
        });
        $continue.addEventListener("click", services.settings.clearModal);
        const $content = ui.el("div", "welcome").append($heading, $image);
        return components.modal({
            name: "welcome",
            content: $content,
            actions: $continue
        });
    };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bnyd9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _containerJs = require("./container.js");
var _containerJsDefault = parcelHelpers.interopDefault(_containerJs);
var _numberOptionJs = require("./number-option.js");
var _numberOptionJsDefault = parcelHelpers.interopDefault(_numberOptionJs);
var _indexJs = require("./options/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _shapeOptionJs = require("./shape-option.js");
var _shapeOptionJsDefault = parcelHelpers.interopDefault(_shapeOptionJs);
exports.default = {
    container: (0, _containerJsDefault.default),
    numberOption: (0, _numberOptionJsDefault.default),
    options: (0, _indexJsDefault.default),
    shapeOption: (0, _shapeOptionJsDefault.default)
};

},{"./container.js":"bkUEY","./number-option.js":"1I2Sn","./options/index.js":"jNouT","./shape-option.js":"1FXQI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bkUEY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ({ components , elements , subscriptions , ui , config  })=>()=>{
        const $optionsBar = elements.layout({
            layout: config.options.layout,
            components: components.optionsBar.options
        });
        $optionsBar.className = "options-bar visible-false";
        subscriptions.tags.onFirstInsert(()=>{
            ui.toggleBoolClass($optionsBar, "visible", true);
        });
        return $optionsBar;
    };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1I2Sn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ({ elements , services , subscriptions , util , config  })=>(optionName)=>{
        const { min , max , step  } = config.options[optionName];
        const $number = elements.number({
            min,
            max,
            step
        }).addEventListener("change", (e)=>{
            services.settings.changeOption(optionName, parseInt(e.target.value));
        });
        subscriptions.settings.onChange("options", optionName, (val)=>{
            $number.value = val;
        });
        const labelText = util.upperFirst(optionName);
        return elements.label(labelText, $number);
    };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jNouT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _modesJs = require("./modes.js");
var _modesJsDefault = parcelHelpers.interopDefault(_modesJs);
var _outlineJs = require("./outline.js");
var _outlineJsDefault = parcelHelpers.interopDefault(_outlineJs);
var _shapesJs = require("./shapes.js");
var _shapesJsDefault = parcelHelpers.interopDefault(_shapesJs);
var _sizeJs = require("./size.js");
var _sizeJsDefault = parcelHelpers.interopDefault(_sizeJs);
var _sortJs = require("./sort.js");
var _sortJsDefault = parcelHelpers.interopDefault(_sortJs);
var _spacingJs = require("./spacing.js");
var _spacingJsDefault = parcelHelpers.interopDefault(_spacingJs);
exports.default = {
    modes: (0, _modesJsDefault.default),
    outline: (0, _outlineJsDefault.default),
    shapes: (0, _shapesJsDefault.default),
    size: (0, _sizeJsDefault.default),
    sort: (0, _sortJsDefault.default),
    spacing: (0, _spacingJsDefault.default)
};

},{"./modes.js":"F1qjp","./outline.js":"h2rVZ","./shapes.js":"jwVSN","./size.js":"abFvJ","./sort.js":"iUrfQ","./spacing.js":"gO3Rx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"F1qjp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ({ ui , components , config  })=>()=>{
        const $$modes = config.options.modes.map(components.optionsBar.numberOption);
        return ui.el("span").append(...$$modes);
    };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"h2rVZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ({ ui , elements , services , subscriptions  })=>()=>{
        const $showOutline = ui.el("input", {
            type: "checkbox"
        }).addEventListener("change", ()=>{
            services.settings.changeOption("outline", $showOutline.checked);
        });
        subscriptions.settings.onChange("options", "outline", (outline)=>{
            $showOutline.checked = outline;
        });
        return elements.label($showOutline, "Show outline");
    };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jwVSN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ({ ui , components , config  })=>()=>{
        const $$shapes = config.options.shapes.map(components.optionsBar.shapeOption);
        return ui.el("span").append(...$$shapes);
    };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"abFvJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ({ components  })=>()=>components.optionsBar.numberOption("size");

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iUrfQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ({ ui , elements , services , subscriptions , config  })=>()=>{
        const $$options = Object.entries(config.options.sort).map(([value, textContent])=>{
            return ui.el("option", {
                value,
                textContent
            });
        });
        const $keepSorted = ui.el("select").append(...$$options).addEventListener("change", ()=>{
            services.settings.changeOption("sort", $keepSorted.value);
        });
        subscriptions.settings.onChange("options", "sort", (sort)=>{
            $keepSorted.value = sort;
        });
        return elements.label("Keep sorted by", $keepSorted);
    };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gO3Rx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ({ components  })=>()=>components.optionsBar.numberOption("spacing");

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1FXQI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ({ ui , subscriptions , services , config  })=>(shapeName)=>{
        const $shape = ui.el("span", "shape-option", {
            title: `Change shape to ${shapeName}`,
            tabIndex: 0
        }).addEventListener("click", ()=>{
            services.settings.changeOption("shape", shapeName);
        }).addEventListener("keydown", (e)=>{
            if ([
                "Enter",
                "Space"
            ].includes(e.code)) {
                $shape.click();
                e.preventDefault();
            }
        });
        const borderRadius = config.options.shapeRadius[shapeName] || 0;
        $shape.style.borderRadius = `${borderRadius}%`;
        subscriptions.settings.onChange("options", "shape", (selectedShape)=>{
            ui.toggleBoolClass($shape, "selected", shapeName === selectedShape);
        });
        return $shape;
    };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gYEkx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _containerJs = require("./container.js");
var _containerJsDefault = parcelHelpers.interopDefault(_containerJs);
var _indexJs = require("./role-customiser/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
exports.default = {
    container: (0, _containerJsDefault.default),
    roleCustomiser: (0, _indexJsDefault.default)
};

},{"./container.js":"k5e2w","./role-customiser/index.js":"hIxGD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k5e2w":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ({ ui , roleList , subscriptions  })=>()=>{
        const $roleList = ui.el("div", "role-list visible-false");
        subscriptions.roles.onInsert((roleId)=>{
            const $role = roleList.roleCustomiser.container(roleId);
            $roleList.append($role);
        });
        subscriptions.roles.onFirstInsert(()=>{
            ui.toggleBoolClass($roleList, "visible", true);
        });
        return $roleList;
    };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hIxGD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _containerJs = require("./container.js");
var _containerJsDefault = parcelHelpers.interopDefault(_containerJs);
var _masterRoleNameJs = require("./master-role-name.js");
var _masterRoleNameJsDefault = parcelHelpers.interopDefault(_masterRoleNameJs);
var _roleColorPickerJs = require("./role-color-picker.js");
var _roleColorPickerJsDefault = parcelHelpers.interopDefault(_roleColorPickerJs);
exports.default = {
    container: (0, _containerJsDefault.default),
    masterRoleName: (0, _masterRoleNameJsDefault.default),
    roleColorPicker: (0, _roleColorPickerJsDefault.default)
};

},{"./container.js":"hnVPz","./master-role-name.js":"cbYbG","./role-color-picker.js":"pWZUZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hnVPz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ({ ui , roleCustomiser , services  })=>(roleId)=>{
        const $masterRoleName = roleCustomiser.masterRoleName(roleId);
        const $colorPicker = roleCustomiser.roleColorPicker(roleId);
        const isNilRole = services.roles.isNilRole(roleId);
        return ui.el("span", `role-customiser role${roleId}`, {
            hidden: isNilRole
        }).append($masterRoleName, $colorPicker);
    };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cbYbG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ({ elements , services , subscriptions  })=>(roleId)=>{
        const $roleName = elements.editableSpan(`role-name role${roleId}`).addEventListener("change", ()=>{
            services.roles.changeRoleName(roleId, $roleName.textContent);
        });
        subscriptions.roles.onChange(roleId, "roleName", (roleName)=>{
            $roleName.textContent = roleName;
        });
        return $roleName;
    };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"pWZUZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ({ ui , vendorComponents , services  })=>(roleId)=>{
        const role = services.roles.getRole(roleId);
        return vendorComponents.vanillaPicker({
            parent: ui.el("div", "color-picker"),
            color: role.color,
            onChange: (e)=>services.roles.changeRoleColor(roleId, e.hex)
        });
    };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iQ4aE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _containerJs = require("./container.js");
var _containerJsDefault = parcelHelpers.interopDefault(_containerJs);
var _indexJs = require("./tag/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
exports.default = {
    container: (0, _containerJsDefault.default),
    tag: (0, _indexJsDefault.default)
};

},{"./container.js":"3kpr7","./tag/index.js":"XQMTh","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3kpr7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ({ ui , tagList , services , subscriptions , util , config  })=>()=>{
        const $$tags = new Map();
        const $tags = ui.el("div", "tag-list");
        subscriptions.tagInstances.onInsert((tagInstanceId)=>{
            const $tag = tagList.tag.container(tagInstanceId);
            $$tags.set(tagInstanceId, $tag);
            $tags.append($tag);
            delayedSort();
        });
        subscriptions.tagInstances.onBeforeRemove((tagInstanceId)=>{
            $$tags.get(tagInstanceId).remove();
            $$tags.delete(tagInstanceId);
        });
        const sort = ()=>{
            ui.refocus(()=>{
                services.tags.sortTagInstances().forEach((tagInstance)=>{
                    $tags.append($$tags.get(tagInstance.id));
                });
            });
        };
        const delayedSort = util.debounce(sort, config.debounce.sortTagList);
        subscriptions.settings.onChange("options", "sort", sort);
        subscriptions.tagInstances.onChangeAny("tagName", delayedSort);
        subscriptions.tagInstances.onChangeAny("roleName", delayedSort);
        return $tags;
    };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"XQMTh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("./components/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _containerJs = require("./container.js");
var _containerJsDefault = parcelHelpers.interopDefault(_containerJs);
exports.default = {
    components: (0, _indexJsDefault.default),
    container: (0, _containerJsDefault.default)
};

},{"./components/index.js":"9dzVc","./container.js":"hmBXU","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9dzVc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _roleNameJs = require("./role-name.js");
var _roleNameJsDefault = parcelHelpers.interopDefault(_roleNameJs);
var _tagImageJs = require("./tag-image.js");
var _tagImageJsDefault = parcelHelpers.interopDefault(_tagImageJs);
var _tagNameJs = require("./tag-name.js");
var _tagNameJsDefault = parcelHelpers.interopDefault(_tagNameJs);
exports.default = {
    roleName: (0, _roleNameJsDefault.default),
    tagImage: (0, _tagImageJsDefault.default),
    tagName: (0, _tagNameJsDefault.default)
};

},{"./role-name.js":"jpHom","./tag-image.js":"lBc0u","./tag-name.js":"j6XRq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jpHom":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ({ elements , services , subscriptions  })=>(tagInstanceId)=>{
        const $roleName = elements.editableSpan("role-name").addEventListener("change", ()=>{
            services.tags.changeTagRole(tagInstanceId, $roleName.textContent);
        });
        subscriptions.tagInstances.onChange(tagInstanceId, "roleName", (roleName)=>{
            $roleName.textContent = roleName;
        });
        return $roleName;
    };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lBc0u":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ({ ui  })=>()=>{
        return ui.el("div", "tag-image");
    }; /* FOOTNOTES

Actual image is rendered using CSS background-image as a performance optimisation.

*/ 

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"j6XRq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ({ elements , services , subscriptions  })=>(tagInstanceId)=>{
        const $tagName = elements.editableSpan("tag-name").addEventListener("change", ()=>{
            services.tags.changeTagName(tagInstanceId, $tagName.textContent);
        });
        subscriptions.tagInstances.onChange(tagInstanceId, "tagName", (tagName)=>{
            $tagName.textContent = tagName;
        });
        return $tagName;
    };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hmBXU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ({ ui , tag , elements , services , subscriptions , config  })=>(tagInstanceId)=>{
        const $layout = elements.layout({
            layout: config.tags.layout,
            components: tag.components,
            componentArgs: [
                tagInstanceId
            ]
        });
        const $tag = ui.el("div").append($layout);
        subscriptions.tagInstances.onChange(tagInstanceId, "roleId", (roleId, { tagId , mode  })=>{
            const isNilRole = services.roles.isNilRole(roleId);
            $tag.className = `tag tag${tagId} role${roleId} nil-role-${isNilRole} ${mode}`;
        });
        return $tag;
    };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hAeVq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _badgesJs = require("./badges.js");
var _badgesJsDefault = parcelHelpers.interopDefault(_badgesJs);
var _imagesJs = require("./images.js");
var _imagesJsDefault = parcelHelpers.interopDefault(_imagesJs);
var _laminatingJs = require("./laminating.js");
var _laminatingJsDefault = parcelHelpers.interopDefault(_laminatingJs);
var _multiplesJs = require("./multiples.js");
var _multiplesJsDefault = parcelHelpers.interopDefault(_multiplesJs);
var _namingJs = require("./naming.js");
var _namingJsDefault = parcelHelpers.interopDefault(_namingJs);
var _roleShortcutJs = require("./role-shortcut.js");
var _roleShortcutJsDefault = parcelHelpers.interopDefault(_roleShortcutJs);
exports.default = {
    badges: (0, _badgesJsDefault.default),
    images: (0, _imagesJsDefault.default),
    laminating: (0, _laminatingJsDefault.default),
    multiples: (0, _multiplesJsDefault.default),
    naming: (0, _namingJsDefault.default),
    roleShortcut: (0, _roleShortcutJsDefault.default)
};

},{"./badges.js":"gajrm","./images.js":"4Qnm8","./laminating.js":"kAVRJ","./multiples.js":"d3d6E","./naming.js":"fFS1U","./role-shortcut.js":"bOQFR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gajrm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ({ ui  })=>()=>{
        return ui.el("div", {
            title: "Blocked and other badges",
            innerHTML: `
            <p>Create blocked and other badges in the same way as avatars.</p>
            <img src='img/tips/blocked-risk.png' />
        `
        });
    };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4Qnm8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ({ ui  })=>()=>{
        return ui.el("div", {
            title: "Images",
            innerHTML: `
            <p>
                Have you ever joined a new team and struggled to remember everyone's names?
                You're not alone! Profile <mark>photos are the most effective</mark> way to identify people.
                Cartoon characters may be cute, but unless your team never changes, they're unhelpful.
            </p>            
            <p>            
                For a better looking result, <mark>make sure your images are square</mark> in shape.
            </p>`
        });
    };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kAVRJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ({ ui  })=>()=>{
        return ui.el("div", {
            title: "Laminating",
            innerHTML: `
            <p>
                For a more durable result, <mark>cut out the tags before your laminate them</mark>.
                Keeping a small lip around the edges helps maintain adhesion.
            </p>`
        });
    };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d3d6E":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ({ ui  })=>()=>{
        return ui.el("div", "multiples", {
            title: "Multiples",
            innerHTML: `
            <p>
                Only needing a single avatar per team member may be a sign that user stories are well defined,
                and that team members can take stories to completion without context switching.
                It also makes it easier to gauge who is focused on what and can serve as a natural WIP limit for the
                team.
                See <a target="_blank" href="https://en.wikipedia.org/wiki/INVEST_(mnemonic)">INVEST</a> for
                characteristics of good quality user stories.
            </p>

            <p>
                If multiples are really needed, consider one <mark>active</mark>, and one or more <mark>passive</mark>
                avatars for each team member.
                The active avatar indicates what a team member is focused on, while
                the passive avatar may be used to indicate the team member is across an activity which has
                become blocked, dependent on another team, or otherwise only requires ad hoc attention.
            </p>
            
            <img src='img/tips/active-passive.png' />
        `
        });
    };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fFS1U":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ({ ui  })=>()=>{
        return ui.el("div", {
            title: "Naming",
            innerHTML: `
            <p>
                Prefer <mark>short names</mark> and <mark>abbreviated roles</mark>. 
                Less is more. Use just enough detail to identify people at a glance.
                Avoid full names and position titles if possible.
            </p>`
        });
    };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bOQFR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ({ ui  })=>()=>{
        return ui.el("div", {
            title: "Role shortcut",
            innerHTML: `
            <p>Roles can be set quickly by appending <mark>+role</mark> to a name. This applies to:</p>

            <ul>
                <li>File names, e.g. matt+dev.jpg</li>
                <li>Directly on the name field of each tag, e.g. matt+dev</li>
                <li>Gravatar emails, e.g. matt@fakemail.com+dev</li>
            </ul>
        `
        });
    };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2t7rH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("./gravatar/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("./roles/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("./tags/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
exports.default = {
    gravatar: (0, _indexJsDefault.default),
    roles: (0, _indexJsDefault1.default),
    tags: (0, _indexJsDefault2.default)
};

},{"./gravatar/index.js":"4I945","./roles/index.js":"8Ns0V","./tags/index.js":"cjreG","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4I945":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _buildImageUrlJs = require("./build-image-url.js");
var _buildImageUrlJsDefault = parcelHelpers.interopDefault(_buildImageUrlJs);
var _buildProfileUrlJs = require("./build-profile-url.js");
var _buildProfileUrlJsDefault = parcelHelpers.interopDefault(_buildProfileUrlJs);
var _getNameFromProfileJs = require("./get-name-from-profile.js");
var _getNameFromProfileJsDefault = parcelHelpers.interopDefault(_getNameFromProfileJs);
var _hashEmailJs = require("./hash-email.js");
var _hashEmailJsDefault = parcelHelpers.interopDefault(_hashEmailJs);
exports.default = {
    buildImageUrl: (0, _buildImageUrlJsDefault.default),
    buildProfileUrl: (0, _buildProfileUrlJsDefault.default),
    getNameFromProfile: (0, _getNameFromProfileJsDefault.default),
    hashEmail: (0, _hashEmailJsDefault.default)
};

},{"./build-image-url.js":"6vhdU","./build-profile-url.js":"bGawQ","./get-name-from-profile.js":"jHq6u","./hash-email.js":"bWFiv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6vhdU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ({ core , config  })=>(email, defaultImage)=>{
        const { domain , size  } = config.gravatar;
        const emailHash = core.gravatar.hashEmail(email);
        return `${domain}/avatar/${emailHash}?r=g&s=${size}&d=${defaultImage}`;
    }; /* FOOTNOTES

Gravatar image requests: 
https://en.gravatar.com/site/implement/images/

*/ 

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bGawQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ({ config , core  })=>(email)=>{
        const { domain  } = config.gravatar;
        const emailHash = core.gravatar.hashEmail(email);
        return `${domain}/${emailHash}.json`;
    }; /* FOOTNOTES

Gravatar profile requests: 
https://en.gravatar.com/site/implement/profiles/

*/ 

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jHq6u":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ()=>(profile, defaultName)=>{
        return profile.name?.givenName || profile.displayName || defaultName;
    };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bWFiv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _blueimpMd5 = require("blueimp-md5");
var _blueimpMd5Default = parcelHelpers.interopDefault(_blueimpMd5);
exports.default = ()=>(email)=>(0, _blueimpMd5Default.default)(email.trim().toLowerCase()); /* FOOTNOTES

Gravatar email hashing: 
https://en.gravatar.com/site/implement/hash/

*/ 

},{"blueimp-md5":"kolp4","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kolp4":[function(require,module,exports) {
(function($) {
    "use strict";
    /**
   * Add integers, wrapping at 2^32.
   * This uses 16-bit operations internally to work around bugs in interpreters.
   *
   * @param {number} x First integer
   * @param {number} y Second integer
   * @returns {number} Sum
   */ function safeAdd(x, y) {
        var lsw = (x & 0xffff) + (y & 0xffff);
        var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
        return msw << 16 | lsw & 0xffff;
    }
    /**
   * Bitwise rotate a 32-bit number to the left.
   *
   * @param {number} num 32-bit number
   * @param {number} cnt Rotation count
   * @returns {number} Rotated number
   */ function bitRotateLeft(num, cnt) {
        return num << cnt | num >>> 32 - cnt;
    }
    /**
   * Basic operation the algorithm uses.
   *
   * @param {number} q q
   * @param {number} a a
   * @param {number} b b
   * @param {number} x x
   * @param {number} s s
   * @param {number} t t
   * @returns {number} Result
   */ function md5cmn(q, a, b, x, s, t) {
        return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
    }
    /**
   * Basic operation the algorithm uses.
   *
   * @param {number} a a
   * @param {number} b b
   * @param {number} c c
   * @param {number} d d
   * @param {number} x x
   * @param {number} s s
   * @param {number} t t
   * @returns {number} Result
   */ function md5ff(a, b, c, d, x, s, t) {
        return md5cmn(b & c | ~b & d, a, b, x, s, t);
    }
    /**
   * Basic operation the algorithm uses.
   *
   * @param {number} a a
   * @param {number} b b
   * @param {number} c c
   * @param {number} d d
   * @param {number} x x
   * @param {number} s s
   * @param {number} t t
   * @returns {number} Result
   */ function md5gg(a, b, c, d, x, s, t) {
        return md5cmn(b & d | c & ~d, a, b, x, s, t);
    }
    /**
   * Basic operation the algorithm uses.
   *
   * @param {number} a a
   * @param {number} b b
   * @param {number} c c
   * @param {number} d d
   * @param {number} x x
   * @param {number} s s
   * @param {number} t t
   * @returns {number} Result
   */ function md5hh(a, b, c, d, x, s, t) {
        return md5cmn(b ^ c ^ d, a, b, x, s, t);
    }
    /**
   * Basic operation the algorithm uses.
   *
   * @param {number} a a
   * @param {number} b b
   * @param {number} c c
   * @param {number} d d
   * @param {number} x x
   * @param {number} s s
   * @param {number} t t
   * @returns {number} Result
   */ function md5ii(a, b, c, d, x, s, t) {
        return md5cmn(c ^ (b | ~d), a, b, x, s, t);
    }
    /**
   * Calculate the MD5 of an array of little-endian words, and a bit length.
   *
   * @param {Array} x Array of little-endian words
   * @param {number} len Bit length
   * @returns {Array<number>} MD5 Array
   */ function binlMD5(x, len) {
        /* append padding */ x[len >> 5] |= 0x80 << len % 32;
        x[(len + 64 >>> 9 << 4) + 14] = len;
        var i;
        var olda;
        var oldb;
        var oldc;
        var oldd;
        var a = 1732584193;
        var b = -271733879;
        var c = -1732584194;
        var d = 271733878;
        for(i = 0; i < x.length; i += 16){
            olda = a;
            oldb = b;
            oldc = c;
            oldd = d;
            a = md5ff(a, b, c, d, x[i], 7, -680876936);
            d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
            c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
            b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
            a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
            d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
            c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
            b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
            a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
            d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
            c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
            b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
            a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
            d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
            c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
            b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
            a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
            d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
            c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
            b = md5gg(b, c, d, a, x[i], 20, -373897302);
            a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
            d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
            c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
            b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
            a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
            d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
            c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
            b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
            a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
            d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
            c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
            b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
            a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
            d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
            c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
            b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
            a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
            d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
            c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
            b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
            a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
            d = md5hh(d, a, b, c, x[i], 11, -358537222);
            c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
            b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
            a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
            d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
            c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
            b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);
            a = md5ii(a, b, c, d, x[i], 6, -198630844);
            d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
            c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
            b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
            a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
            d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
            c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
            b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
            a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
            d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
            c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
            b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
            a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
            d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
            c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
            b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);
            a = safeAdd(a, olda);
            b = safeAdd(b, oldb);
            c = safeAdd(c, oldc);
            d = safeAdd(d, oldd);
        }
        return [
            a,
            b,
            c,
            d
        ];
    }
    /**
   * Convert an array of little-endian words to a string
   *
   * @param {Array<number>} input MD5 Array
   * @returns {string} MD5 string
   */ function binl2rstr(input) {
        var i;
        var output = "";
        var length32 = input.length * 32;
        for(i = 0; i < length32; i += 8)output += String.fromCharCode(input[i >> 5] >>> i % 32 & 0xff);
        return output;
    }
    /**
   * Convert a raw string to an array of little-endian words
   * Characters >255 have their high-byte silently ignored.
   *
   * @param {string} input Raw input string
   * @returns {Array<number>} Array of little-endian words
   */ function rstr2binl(input) {
        var i;
        var output = [];
        output[(input.length >> 2) - 1] = undefined;
        for(i = 0; i < output.length; i += 1)output[i] = 0;
        var length8 = input.length * 8;
        for(i = 0; i < length8; i += 8)output[i >> 5] |= (input.charCodeAt(i / 8) & 0xff) << i % 32;
        return output;
    }
    /**
   * Calculate the MD5 of a raw string
   *
   * @param {string} s Input string
   * @returns {string} Raw MD5 string
   */ function rstrMD5(s) {
        return binl2rstr(binlMD5(rstr2binl(s), s.length * 8));
    }
    /**
   * Calculates the HMAC-MD5 of a key and some data (raw strings)
   *
   * @param {string} key HMAC key
   * @param {string} data Raw input string
   * @returns {string} Raw MD5 string
   */ function rstrHMACMD5(key, data) {
        var i;
        var bkey = rstr2binl(key);
        var ipad = [];
        var opad = [];
        var hash;
        ipad[15] = opad[15] = undefined;
        if (bkey.length > 16) bkey = binlMD5(bkey, key.length * 8);
        for(i = 0; i < 16; i += 1){
            ipad[i] = bkey[i] ^ 0x36363636;
            opad[i] = bkey[i] ^ 0x5c5c5c5c;
        }
        hash = binlMD5(ipad.concat(rstr2binl(data)), 512 + data.length * 8);
        return binl2rstr(binlMD5(opad.concat(hash), 640));
    }
    /**
   * Convert a raw string to a hex string
   *
   * @param {string} input Raw input string
   * @returns {string} Hex encoded string
   */ function rstr2hex(input) {
        var hexTab = "0123456789abcdef";
        var output = "";
        var x;
        var i;
        for(i = 0; i < input.length; i += 1){
            x = input.charCodeAt(i);
            output += hexTab.charAt(x >>> 4 & 0x0f) + hexTab.charAt(x & 0x0f);
        }
        return output;
    }
    /**
   * Encode a string as UTF-8
   *
   * @param {string} input Input string
   * @returns {string} UTF8 string
   */ function str2rstrUTF8(input) {
        return unescape(encodeURIComponent(input));
    }
    /**
   * Encodes input string as raw MD5 string
   *
   * @param {string} s Input string
   * @returns {string} Raw MD5 string
   */ function rawMD5(s) {
        return rstrMD5(str2rstrUTF8(s));
    }
    /**
   * Encodes input string as Hex encoded string
   *
   * @param {string} s Input string
   * @returns {string} Hex encoded string
   */ function hexMD5(s) {
        return rstr2hex(rawMD5(s));
    }
    /**
   * Calculates the raw HMAC-MD5 for the given key and data
   *
   * @param {string} k HMAC key
   * @param {string} d Input string
   * @returns {string} Raw MD5 string
   */ function rawHMACMD5(k, d) {
        return rstrHMACMD5(str2rstrUTF8(k), str2rstrUTF8(d));
    }
    /**
   * Calculates the Hex encoded HMAC-MD5 for the given key and data
   *
   * @param {string} k HMAC key
   * @param {string} d Input string
   * @returns {string} Raw MD5 string
   */ function hexHMACMD5(k, d) {
        return rstr2hex(rawHMACMD5(k, d));
    }
    /**
   * Calculates MD5 value for a given string.
   * If a key is provided, calculates the HMAC-MD5 value.
   * Returns a Hex encoded string unless the raw argument is given.
   *
   * @param {string} string Input string
   * @param {string} [key] HMAC key
   * @param {boolean} [raw] Raw output switch
   * @returns {string} MD5 output
   */ function md5(string, key, raw) {
        if (!key) {
            if (!raw) return hexMD5(string);
            return rawMD5(string);
        }
        if (!raw) return hexHMACMD5(key, string);
        return rawHMACMD5(key, string);
    }
    if (typeof define === "function" && define.amd) define(function() {
        return md5;
    });
    else if (module.exports) module.exports = md5;
    else $.md5 = md5;
})(this);

},{}],"8Ns0V":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _assignColorJs = require("./assign-color.js");
var _assignColorJsDefault = parcelHelpers.interopDefault(_assignColorJs);
var _buildRoleJs = require("./build-role.js");
var _buildRoleJsDefault = parcelHelpers.interopDefault(_buildRoleJs);
var _randomColorJs = require("./random-color.js");
var _randomColorJsDefault = parcelHelpers.interopDefault(_randomColorJs);
exports.default = {
    assignColor: (0, _assignColorJsDefault.default),
    buildRole: (0, _buildRoleJsDefault.default),
    randomColor: (0, _randomColorJsDefault.default)
};

},{"./assign-color.js":"2gCvJ","./build-role.js":"5XIVK","./random-color.js":"id4tj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2gCvJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ({ core , config  })=>(randomNumber)=>(roleData)=>{
            const presetColor = config.roles.presetColors[roleData.roleName];
            const randomColor = core.roles.randomColor(randomNumber);
            const color = presetColor || roleData.color || randomColor;
            return {
                ...roleData,
                color
            };
        };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5XIVK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ({ core , util  })=>(roleData1, randomNumber)=>{
        const transformRoleName = (roleData)=>{
            const roleName = (roleData.roleName || "").trim().toUpperCase();
            return {
                ...roleData,
                roleName
            };
        };
        return util.pipe(transformRoleName, core.roles.assignColor(randomNumber))(roleData1);
    };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"id4tj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ()=>(randomNumber)=>{
        return "#" + ("00000" + (randomNumber * 16777216 | 0).toString(16)).slice(-6);
    }; /* FOOTNOTES

- Based on: http://disq.us/p/d0itcl
- Used to assign a color when a new role is added.

*/ 

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cjreG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _buildTagJs = require("./build-tag.js");
var _buildTagJsDefault = parcelHelpers.interopDefault(_buildTagJs);
var _parseEmailExpressionJs = require("./parse-email-expression.js");
var _parseEmailExpressionJsDefault = parcelHelpers.interopDefault(_parseEmailExpressionJs);
var _parseFileExpressionJs = require("./parse-file-expression.js");
var _parseFileExpressionJsDefault = parcelHelpers.interopDefault(_parseFileExpressionJs);
var _parseTagExpressionJs = require("./parse-tag-expression.js");
var _parseTagExpressionJsDefault = parcelHelpers.interopDefault(_parseTagExpressionJs);
var _planTagInstanceAdjustmentJs = require("./plan-tag-instance-adjustment.js");
var _planTagInstanceAdjustmentJsDefault = parcelHelpers.interopDefault(_planTagInstanceAdjustmentJs);
var _sortTagInstancesByTagThenModeJs = require("./sort-tag-instances-by-tag-then-mode.js");
var _sortTagInstancesByTagThenModeJsDefault = parcelHelpers.interopDefault(_sortTagInstancesByTagThenModeJs);
var _sortTagsByNameJs = require("./sort-tags-by-name.js");
var _sortTagsByNameJsDefault = parcelHelpers.interopDefault(_sortTagsByNameJs);
var _sortTagsByRoleThenNameJs = require("./sort-tags-by-role-then-name.js");
var _sortTagsByRoleThenNameJsDefault = parcelHelpers.interopDefault(_sortTagsByRoleThenNameJs);
exports.default = {
    buildTag: (0, _buildTagJsDefault.default),
    parseEmailExpression: (0, _parseEmailExpressionJsDefault.default),
    parseFileExpression: (0, _parseFileExpressionJsDefault.default),
    parseTagExpression: (0, _parseTagExpressionJsDefault.default),
    planTagInstanceAdjustment: (0, _planTagInstanceAdjustmentJsDefault.default),
    sortTagInstancesByTagThenMode: (0, _sortTagInstancesByTagThenModeJsDefault.default),
    sortTagsByName: (0, _sortTagsByNameJsDefault.default),
    sortTagsByRoleThenName: (0, _sortTagsByRoleThenNameJsDefault.default)
};

},{"./build-tag.js":"gppkm","./parse-email-expression.js":"4I9es","./parse-file-expression.js":"7ox9X","./parse-tag-expression.js":"edHOO","./plan-tag-instance-adjustment.js":"apl4t","./sort-tag-instances-by-tag-then-mode.js":"gZk6d","./sort-tags-by-name.js":"cwZx3","./sort-tags-by-role-then-name.js":"h07FN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gppkm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ({ util  })=>(tagData)=>{
        const tagName = util.upperFirst((tagData.tagName || "").trim());
        return {
            ...tagData,
            tagName,
            instances: [],
            active: [],
            passive: []
        };
    };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4I9es":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ({ util  })=>(expression)=>{
        const indexOfAt = expression.indexOf("@");
        const isEmail = indexOfAt > -1;
        const [username] = (isEmail ? expression.substr(0, indexOfAt) : expression).split("+");
        const lastIndexOfPlus = expression.lastIndexOf("+");
        const hasRole = lastIndexOfPlus > indexOfAt;
        const [emailOrUsername, roleName] = hasRole ? util.splitAt(expression, lastIndexOfPlus, 1) : [
            expression
        ];
        const email = isEmail ? emailOrUsername : "";
        return {
            email,
            username,
            emailOrUsername,
            roleName
        };
    }; /* FOOTNOTES

Example of complex expression: 'foo+bar@gmail.com+dev'
=> { email: 'foo+bar@gmail.com', username: 'foo', emailOrUsername: 'foo+bar@gmail.com', roleName: 'dev' }

*/ 

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7ox9X":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ()=>(expression)=>{
        const [tagName, roleName] = expression.split("/").pop().match(/^(\d+)?(.+)/)[2].split(".")[0].split("+").map((s)=>s.trim());
        return {
            tagName,
            roleName
        };
    }; /* FOOTNOTES

Example of complex expression: '1 foo bar+dev.jpg'
=> { tagName: 'foo bar', roleName: 'dev' }

Leading numbers are stripped to enable inserting tags in a preferred order.

*/ 

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"edHOO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ()=>(expression)=>{
        const [tagName, roleName] = expression.split("+").map((s)=>s.trim());
        return {
            tagName,
            roleName
        };
    }; /* FOOTNOTES

Example of complex expression: 'foo bar+dev'
=> { tagName: 'foo bar', roleName: 'dev' }

*/ 

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"apl4t":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ()=>(tags, modeCounts)=>{
        return tags.flatMap((tag)=>{
            return Object.entries(modeCounts).flatMap(([mode, count])=>{
                return plan({
                    tag,
                    mode,
                    count
                });
            });
        });
    };
const plan = ({ tag , mode , count  })=>{
    const diff = count - tag[mode].length;
    const planInsert = ()=>{
        return {
            insert: Array(diff).fill({
                tagId: tag.id,
                mode
            })
        };
    };
    const planRemove = ()=>{
        return {
            remove: tag[mode].slice(diff)
        };
    };
    return diff ? diff > 0 ? planInsert() : planRemove() : {};
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gZk6d":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ({ config  })=>(tags, getTagInstance)=>{
        return tags.flatMap((tag)=>{
            return config.options.modes.flatMap((mode)=>{
                return tag[mode].map((tagInstanceId)=>getTagInstance(tagInstanceId));
            });
        });
    };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cwZx3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ()=>(tags)=>{
        return tags.sort((a, b)=>a.tagName.localeCompare(b.tagName));
    };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"h07FN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ()=>(tags, getRole)=>{
        return tags.sort((a, b)=>{
            const { roleName: roleNameA  } = getRole(a.roleId);
            const { roleName: roleNameB  } = getRole(b.roleId);
            const roleComparison = roleNameA.localeCompare(roleNameB);
            const nameComparison = a.tagName.localeCompare(b.tagName);
            return roleComparison || nameComparison;
        });
    };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7v5OQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _dumpStateJs = require("./dump-state.js");
var _dumpStateJsDefault = parcelHelpers.interopDefault(_dumpStateJs);
exports.default = {
    dumpState: (0, _dumpStateJsDefault.default)
};

},{"./dump-state.js":"xX9z8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"xX9z8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ({ stores , util  })=>()=>{
        return util.mapValues(stores, (store)=>store.list());
    };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dUALu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _dropzoneJs = require("./dropzone.js");
var _dropzoneJsDefault = parcelHelpers.interopDefault(_dropzoneJs);
var _editableSpanJs = require("./editable-span.js");
var _editableSpanJsDefault = parcelHelpers.interopDefault(_editableSpanJs);
var _labelJs = require("./label.js");
var _labelJsDefault = parcelHelpers.interopDefault(_labelJs);
var _layoutJs = require("./layout.js");
var _layoutJsDefault = parcelHelpers.interopDefault(_layoutJs);
var _modalJs = require("./modal.js");
var _modalJsDefault = parcelHelpers.interopDefault(_modalJs);
var _numberJs = require("./number.js");
var _numberJsDefault = parcelHelpers.interopDefault(_numberJs);
exports.default = {
    dropzone: (0, _dropzoneJsDefault.default),
    editableSpan: (0, _editableSpanJsDefault.default),
    label: (0, _labelJsDefault.default),
    layout: (0, _layoutJsDefault.default),
    modal: (0, _modalJsDefault.default),
    number: (0, _numberJsDefault.default)
};

},{"./dropzone.js":"jGbYh","./editable-span.js":"4pfQb","./label.js":"47pNV","./layout.js":"iLhbQ","./modal.js":"istMV","./number.js":"7SNbh","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jGbYh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ({ ui  })=>()=>{
        const preventDefault = (e)=>e.preventDefault();
        return ui.el("div", "dropzone").addEventListener("dragenter", preventDefault).addEventListener("dragover", preventDefault).addEventListener("drop", preventDefault);
    };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4pfQb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ({ ui  })=>(className)=>{
        const dispatchChange = ()=>$span.dispatchEvent(ui.event("change"));
        const $span = ui.el("span", className).addEventListener("blur", ()=>{
            dispatchChange();
        }).addEventListener("keydown", (e)=>{
            if (e.code === "Enter") {
                e.preventDefault();
                dispatchChange();
            }
        });
        $span.setAttribute("contenteditable", true);
        return $span;
    }; /* FOOTNOTES

- Content editable span preferred over text field for the ability to expand/contract while editing.
- `e.preventDefault()` on enter key prevents cursor moving to next line.

*/ 

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"47pNV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ({ ui  })=>(...nodes)=>{
        const transformedNodes = nodes.map((node)=>{
            return typeof node === "string" ? ui.el("span", "label", {
                innerHTML: node
            }) : node;
        });
        return ui.el("label").append(...transformedNodes);
    }; /* FOOTNOTES

Nesting the labelled control within the label avoids the need for `id` and `for`.

*/ 

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iLhbQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ({ ui  })=>({ layout , components , componentArgs =[]  })=>{
        const groups = layout.split("|").map((str)=>str.trim().split(" "));
        const $$groups = groups.map((group)=>{
            const $$elements = group.map((name)=>components[name](...componentArgs));
            return ui.el("span", "group").append(...$$elements);
        });
        return ui.el("div", "layout").append(...$$groups);
    };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"istMV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ({ ui  })=>(args = {})=>{
        const defaults = {
            visible: false,
            onVisibilityChange: ()=>undefined
        };
        const { title , content , actions , visible: visible1 , onVisibilityChange  } = {
            ...defaults,
            ...args
        };
        const dismiss = ()=>{
            $overlay.dispatchEvent(ui.event("dismiss"));
        };
        const $dismiss = ui.el("span", "dismiss").addEventListener("click", dismiss);
        const $title = ui.el("div", "modal-title").append(title, $dismiss);
        ui.toggleBoolClass($title, "visible", Boolean(title));
        const $content = ui.el("div", "modal-content").append(content);
        const $actions = ui.el("div", "modal-actions").append(actions);
        ui.toggleBoolClass($actions, "visible", Boolean(actions));
        const $prompt = ui.el("div", "modal-prompt").append($title, $content, $actions).addEventListener("click", (e)=>e.stopPropagation());
        const $overlay = ui.el("div", "modal-overlay").append($prompt).addEventListener("click", dismiss);
        const toggleVisibility = (visible)=>{
            ui.toggleBoolClass($overlay, "visible", visible);
        };
        toggleVisibility(visible1);
        onVisibilityChange(toggleVisibility, $overlay);
        return $overlay;
    };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7SNbh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ({ ui , util  })=>({ min , max , step  })=>{
        const intValue = ()=>parseInt($number.value);
        const adjustValue = util.pipe((val)=>isNaN(val) ? min : val, (val)=>val < min ? min : val, (val)=>val > max ? max : val);
        const onInput = ()=>{
            const val = intValue();
            const adjustedVal = adjustValue(val);
            if (val === adjustedVal) $number.dispatchEvent(ui.event("change"));
        };
        const onBlur = ()=>{
            $number.value = adjustValue(intValue());
            onInput();
        };
        const $number = ui.el("input", {
            type: "number",
            min,
            max,
            step
        }).addEventListener("input", onInput).addEventListener("blur", onBlur);
        return $number;
    }; /* FOOTNOTES

About <input type="number">
- Value can be any floating-point number, or empty.
- Floating-point numbers avoided by setting `step` to an integer.
- Automatically rejects non-numeric values (except empty).
- Provides validation, but does not actually reject values outside min and max range.

*/ 

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gzusB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _setupJs = require("./setup.js");
var _setupJsDefault = parcelHelpers.interopDefault(_setupJs);
exports.default = {
    setup: (0, _setupJsDefault.default)
};

},{"./setup.js":"fFTOy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fFTOy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ({ window  })=>()=>{
        return {
            date: ()=>new window.Date(),
            fetch: (...args)=>window.fetch(...args),
            random: ()=>window.Math.random(),
            fileReader: ()=>new window.FileReader()
        };
    };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7hTpP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("./gravatar/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("./roles/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("./settings/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("./tags/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
exports.default = {
    gravatar: (0, _indexJsDefault.default),
    roles: (0, _indexJsDefault1.default),
    settings: (0, _indexJsDefault2.default),
    tags: (0, _indexJsDefault3.default)
};

},{"./gravatar/index.js":"7d9Mc","./roles/index.js":"eTGJY","./settings/index.js":"bLmMU","./tags/index.js":"lJL45","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7d9Mc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _changeFallbackJs = require("./change-fallback.js");
var _changeFallbackJsDefault = parcelHelpers.interopDefault(_changeFallbackJs);
var _changeFreetextJs = require("./change-freetext.js");
var _changeFreetextJsDefault = parcelHelpers.interopDefault(_changeFreetextJs);
var _fetchImageAsyncJs = require("./fetch-image-async.js");
var _fetchImageAsyncJsDefault = parcelHelpers.interopDefault(_fetchImageAsyncJs);
var _fetchProfileAsyncJs = require("./fetch-profile-async.js");
var _fetchProfileAsyncJsDefault = parcelHelpers.interopDefault(_fetchProfileAsyncJs);
var _statusJs = require("./status.js");
var _statusJsDefault = parcelHelpers.interopDefault(_statusJs);
exports.default = {
    changeFallback: (0, _changeFallbackJsDefault.default),
    changeFreetext: (0, _changeFreetextJsDefault.default),
    fetchImageAsync: (0, _fetchImageAsyncJsDefault.default),
    fetchProfileAsync: (0, _fetchProfileAsyncJsDefault.default),
    status: (0, _statusJsDefault.default)
};

},{"./change-fallback.js":"iVZKI","./change-freetext.js":"bRmG2","./fetch-image-async.js":"5TMxw","./fetch-profile-async.js":"8QBdt","./status.js":"9grL7","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iVZKI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ({ stores  })=>(fallback)=>{
        stores.settings.update("gravatar", {
            fallback
        });
    };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bRmG2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ({ stores  })=>(freetext)=>{
        stores.settings.update("gravatar", {
            freetext
        });
    };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5TMxw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ({ core , io  })=>async (emailOrUsername, defaultImage)=>{
        const imageUrl = core.gravatar.buildImageUrl(emailOrUsername, defaultImage);
        const response = await io.fetch(imageUrl);
        if (!response.ok) throw new Error(`Unexpected Gravatar response status ${response.status}.`);
        return response.blob();
    };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8QBdt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ({ core , io  })=>async (email)=>{
        if (!email) return {};
        const url = core.gravatar.buildProfileUrl(email);
        const response = await io.fetch(url);
        if (response.status === 404) return {};
        if (!response.ok) throw new Error(`Unexpected Gravatar response status ${response.status}.`);
        const data = await response.json();
        const [profile] = data.entry;
        return profile;
    };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9grL7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const STATUS = {
    ready: "ready",
    working: "working",
    error: "error"
};
exports.default = ({ stores  })=>{
    const is = Object.keys(STATUS).reduce((acc, status)=>{
        const func = ()=>stores.settings.find("gravatar").status === status;
        return Object.assign(acc, {
            [status]: func
        });
    }, {});
    const to = {
        ready: ()=>{
            const { freetext  } = stores.settings.find("gravatar");
            stores.settings.update("gravatar", {
                status: STATUS.ready,
                freetext: is.error() ? freetext : "",
                errorMessage: ""
            });
        },
        working: ()=>{
            stores.settings.update("gravatar", {
                status: STATUS.working
            });
        },
        error: (errorMessage)=>{
            stores.settings.update("gravatar", {
                status: STATUS.error,
                errorMessage
            });
        }
    };
    return {
        is,
        to
    };
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eTGJY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _changeRoleColorJs = require("./change-role-color.js");
var _changeRoleColorJsDefault = parcelHelpers.interopDefault(_changeRoleColorJs);
var _changeRoleNameJs = require("./change-role-name.js");
var _changeRoleNameJsDefault = parcelHelpers.interopDefault(_changeRoleNameJs);
var _findOrInsertRoleWithNameJs = require("./find-or-insert-role-with-name.js");
var _findOrInsertRoleWithNameJsDefault = parcelHelpers.interopDefault(_findOrInsertRoleWithNameJs);
var _getNilRoleIdJs = require("./get-nil-role-id.js");
var _getNilRoleIdJsDefault = parcelHelpers.interopDefault(_getNilRoleIdJs);
var _getRoleJs = require("./get-role.js");
var _getRoleJsDefault = parcelHelpers.interopDefault(_getRoleJs);
var _insertRoleJs = require("./insert-role.js");
var _insertRoleJsDefault = parcelHelpers.interopDefault(_insertRoleJs);
var _isNilRoleJs = require("./is-nil-role.js");
var _isNilRoleJsDefault = parcelHelpers.interopDefault(_isNilRoleJs);
var _setupRolePropagationJs = require("./setup-role-propagation.js");
var _setupRolePropagationJsDefault = parcelHelpers.interopDefault(_setupRolePropagationJs);
exports.default = {
    changeRoleColor: (0, _changeRoleColorJsDefault.default),
    changeRoleName: (0, _changeRoleNameJsDefault.default),
    findOrInsertRoleWithName: (0, _findOrInsertRoleWithNameJsDefault.default),
    getNilRoleId: (0, _getNilRoleIdJsDefault.default),
    getRole: (0, _getRoleJsDefault.default),
    insertRole: (0, _insertRoleJsDefault.default),
    isNilRole: (0, _isNilRoleJsDefault.default),
    setupRolePropagation: (0, _setupRolePropagationJsDefault.default)
};

},{"./change-role-color.js":"lIqer","./change-role-name.js":"lqjUd","./find-or-insert-role-with-name.js":"1R1cS","./get-nil-role-id.js":"b1POY","./get-role.js":"hR0HR","./insert-role.js":"lxibx","./is-nil-role.js":"91u1t","./setup-role-propagation.js":"hjLqA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lIqer":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ({ stores  })=>(roleId, color)=>{
        stores.roles.update(roleId, {
            color
        });
    };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lqjUd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ({ core , stores  })=>(roleId, roleName)=>{
        const oldState = stores.roles.find(roleId);
        const newState = core.roles.buildRole({
            ...oldState,
            roleName
        });
        stores.roles.update(roleId, newState);
    };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1R1cS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ({ services , stores  })=>(roleName = "")=>{
        const existingRole = stores.roles.list().find((role)=>roleName.toUpperCase() === role.roleName.toUpperCase());
        return existingRole ? existingRole.id : services.roles.insertRole({
            roleName
        });
    };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b1POY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ({ stores  })=>()=>{
        return stores.settings.find("app").nilRoleId;
    };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hR0HR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ({ stores  })=>(roleId)=>{
        return stores.roles.find(roleId);
    };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lxibx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ({ core , services , subscriptions , stores , io  })=>(roleData)=>{
        const role = core.roles.buildRole(roleData, io.random());
        return stores.roles.insert(role, (roleId)=>{
            subscriptions.roles.onChange(roleId, "roleName", services.roles.setupRolePropagation(roleId));
        });
    };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"91u1t":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ({ services  })=>(roleId)=>{
        return roleId === services.roles.getNilRoleId();
    };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hjLqA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ({ stores  })=>(roleId)=>()=>{
            const { roleName  } = stores.roles.find(roleId);
            const changes = {
                roleName
            };
            const matchRole = (tagInstance)=>tagInstance.roleId === roleId;
            const setRoleName = (tagInstance)=>stores.tagInstances.update(tagInstance.id, changes);
            stores.tagInstances.list().filter(matchRole).forEach(setRoleName);
        };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bLmMU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _changeModalJs = require("./change-modal.js");
var _changeModalJsDefault = parcelHelpers.interopDefault(_changeModalJs);
var _changeOptionJs = require("./change-option.js");
var _changeOptionJsDefault = parcelHelpers.interopDefault(_changeOptionJs);
var _clearModalJs = require("./clear-modal.js");
var _clearModalJsDefault = parcelHelpers.interopDefault(_clearModalJs);
var _getGravatarJs = require("./get-gravatar.js");
var _getGravatarJsDefault = parcelHelpers.interopDefault(_getGravatarJs);
exports.default = {
    changeModal: (0, _changeModalJsDefault.default),
    changeOption: (0, _changeOptionJsDefault.default),
    clearModal: (0, _clearModalJsDefault.default),
    getGravatar: (0, _getGravatarJsDefault.default)
};

},{"./change-modal.js":"hORy1","./change-option.js":"dqTAS","./clear-modal.js":"gDdo4","./get-gravatar.js":"1xcAf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hORy1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ({ stores  })=>(modal)=>{
        stores.settings.update("app", {
            modal
        });
    };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dqTAS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ({ stores  })=>(name, value)=>{
        stores.settings.update("options", {
            [name]: value
        });
    };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gDdo4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ({ stores  })=>()=>{
        stores.settings.update("app", {
            modal: null
        });
    };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1xcAf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ({ stores  })=>()=>{
        const gravatar = stores.settings.find("gravatar");
        const emails = gravatar.freetext.split(/[\r\n,;]+/g).map((s)=>s.trim()).filter((s)=>s);
        return {
            emails,
            ...gravatar
        };
    };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lJL45":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _adjustTagInstanceCountsJs = require("./adjust-tag-instance-counts.js");
var _adjustTagInstanceCountsJsDefault = parcelHelpers.interopDefault(_adjustTagInstanceCountsJs);
var _attachImageAsyncJs = require("./attach-image-async.js");
var _attachImageAsyncJsDefault = parcelHelpers.interopDefault(_attachImageAsyncJs);
var _buildTagInstanceJs = require("./build-tag-instance.js");
var _buildTagInstanceJsDefault = parcelHelpers.interopDefault(_buildTagInstanceJs);
var _changeTagNameJs = require("./change-tag-name.js");
var _changeTagNameJsDefault = parcelHelpers.interopDefault(_changeTagNameJs);
var _changeTagRoleJs = require("./change-tag-role.js");
var _changeTagRoleJsDefault = parcelHelpers.interopDefault(_changeTagRoleJs);
var _getTagInstanceJs = require("./get-tag-instance.js");
var _getTagInstanceJsDefault = parcelHelpers.interopDefault(_getTagInstanceJs);
var _insertFileAsyncJs = require("./insert-file-async.js");
var _insertFileAsyncJsDefault = parcelHelpers.interopDefault(_insertFileAsyncJs);
var _insertFileBatchAsyncJs = require("./insert-file-batch-async.js");
var _insertFileBatchAsyncJsDefault = parcelHelpers.interopDefault(_insertFileBatchAsyncJs);
var _insertGravatarAsyncJs = require("./insert-gravatar-async.js");
var _insertGravatarAsyncJsDefault = parcelHelpers.interopDefault(_insertGravatarAsyncJs);
var _insertGravatarBatchAsyncJs = require("./insert-gravatar-batch-async.js");
var _insertGravatarBatchAsyncJsDefault = parcelHelpers.interopDefault(_insertGravatarBatchAsyncJs);
var _insertTagJs = require("./insert-tag.js");
var _insertTagJsDefault = parcelHelpers.interopDefault(_insertTagJs);
var _insertTagInstanceJs = require("./insert-tag-instance.js");
var _insertTagInstanceJsDefault = parcelHelpers.interopDefault(_insertTagInstanceJs);
var _removeTagInstanceJs = require("./remove-tag-instance.js");
var _removeTagInstanceJsDefault = parcelHelpers.interopDefault(_removeTagInstanceJs);
var _setupRolePropagationJs = require("./setup-role-propagation.js");
var _setupRolePropagationJsDefault = parcelHelpers.interopDefault(_setupRolePropagationJs);
var _setupTagPropagationJs = require("./setup-tag-propagation.js");
var _setupTagPropagationJsDefault = parcelHelpers.interopDefault(_setupTagPropagationJs);
var _sortTagInstancesJs = require("./sort-tag-instances.js");
var _sortTagInstancesJsDefault = parcelHelpers.interopDefault(_sortTagInstancesJs);
exports.default = {
    adjustTagInstanceCounts: (0, _adjustTagInstanceCountsJsDefault.default),
    attachImageAsync: (0, _attachImageAsyncJsDefault.default),
    buildTagInstance: (0, _buildTagInstanceJsDefault.default),
    changeTagName: (0, _changeTagNameJsDefault.default),
    changeTagRole: (0, _changeTagRoleJsDefault.default),
    getTagInstance: (0, _getTagInstanceJsDefault.default),
    insertFileAsync: (0, _insertFileAsyncJsDefault.default),
    insertFileBatchAsync: (0, _insertFileBatchAsyncJsDefault.default),
    insertGravatarAsync: (0, _insertGravatarAsyncJsDefault.default),
    insertGravatarBatchAsync: (0, _insertGravatarBatchAsyncJsDefault.default),
    insertTag: (0, _insertTagJsDefault.default),
    insertTagInstance: (0, _insertTagInstanceJsDefault.default),
    removeTagInstance: (0, _removeTagInstanceJsDefault.default),
    setupRolePropagation: (0, _setupRolePropagationJsDefault.default),
    setupTagPropagation: (0, _setupTagPropagationJsDefault.default),
    sortTagInstances: (0, _sortTagInstancesJsDefault.default)
};

},{"./adjust-tag-instance-counts.js":"6BGmi","./attach-image-async.js":"cKOMq","./build-tag-instance.js":"7pwHi","./change-tag-name.js":"9iM7S","./change-tag-role.js":"96smO","./get-tag-instance.js":"bMUpF","./insert-file-async.js":"1IOX7","./insert-file-batch-async.js":"28TMm","./insert-gravatar-async.js":"VPBK7","./insert-gravatar-batch-async.js":"1reft","./insert-tag.js":"1FfoM","./insert-tag-instance.js":"15v88","./remove-tag-instance.js":"4PfPu","./setup-role-propagation.js":"jA6qw","./setup-tag-propagation.js":"5bERz","./sort-tag-instances.js":"kVSh6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6BGmi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ({ core , config , stores , services  })=>()=>{
        const tags = stores.tags.list();
        const options = stores.settings.find("options");
        const modeCounts = Object.fromEntries(config.options.modes.map((mode)=>[
                mode,
                options[mode]
            ]));
        const plans = core.tags.planTagInstanceAdjustment(tags, modeCounts);
        plans.forEach((plan)=>{
            plan = {
                insert: [],
                remove: [],
                ...plan
            };
            plan.insert.forEach(services.tags.insertTagInstance);
            plan.remove.forEach(services.tags.removeTagInstance);
        });
    };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cKOMq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ({ stores , io  })=>(imageBlob)=>(tagId)=>{
            return new Promise((resolve, reject)=>{
                const reader = io.fileReader();
                reader.readAsDataURL(imageBlob);
                reader.addEventListener("load", ()=>{
                    const image = reader.result;
                    stores.tags.update(tagId, {
                        image
                    });
                    resolve();
                });
                reader.addEventListener("error", ()=>{
                    reject(reader.error);
                });
            });
        };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7pwHi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ({ stores  })=>(tagInstanceData)=>{
        const { tagId , mode  } = tagInstanceData;
        const { tagName , roleId  } = stores.tags.find(tagId);
        const { roleName  } = stores.roles.find(roleId);
        return {
            tagId,
            tagName,
            roleId,
            roleName,
            mode
        };
    };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9iM7S":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ({ core , services , stores  })=>(tagInstanceId, expression)=>{
        const { tagId  } = services.tags.getTagInstance(tagInstanceId);
        const { tagName , roleName  } = core.tags.parseTagExpression(expression);
        stores.tags.update(tagId, {
            tagName
        });
        if (roleName) {
            const roleId = services.roles.findOrInsertRoleWithName(roleName);
            stores.tags.update(tagId, {
                roleId
            });
        }
    };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"96smO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ({ services , stores  })=>(tagInstanceId, roleName)=>{
        const roleId = services.roles.findOrInsertRoleWithName(roleName);
        const { tagId  } = stores.tagInstances.find(tagInstanceId);
        stores.tags.update(tagId, {
            roleId
        });
    };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bMUpF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ({ stores  })=>(tagInstanceId)=>{
        return stores.tagInstances.find(tagInstanceId);
    };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1IOX7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ({ core , services , util  })=>(file)=>{
        return util.pipe(core.tags.parseFileExpression, services.tags.insertTag, services.tags.attachImageAsync(file))(file.name);
    };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"28TMm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ({ services  })=>(files)=>{
        return Array.from(files).map(services.tags.insertFileAsync);
    };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"VPBK7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ({ core , services  })=>(expression, defaultImage)=>{
        const { email , username , emailOrUsername , roleName  } = core.tags.parseEmailExpression(expression);
        const profilePromise = services.gravatar.fetchProfileAsync(email).then((profile)=>{
            const tagName = core.gravatar.getNameFromProfile(profile, username);
            return services.tags.insertTag({
                tagName,
                roleName
            });
        });
        return services.gravatar.fetchImageAsync(emailOrUsername, defaultImage).then(async (imageBlob)=>{
            const tagId = await profilePromise;
            return services.tags.attachImageAsync(imageBlob)(tagId);
        });
    };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1reft":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ({ services , config  })=>async (emails, fallback)=>{
        try {
            services.gravatar.status.to.working();
            const insert = async (email)=>{
                try {
                    await services.tags.insertGravatarAsync(email, fallback);
                } catch (err) {
                // console.error(err);
                // todo: log
                }
            };
            await Promise.all(emails.map(insert));
            services.gravatar.status.to.ready();
            services.settings.clearModal();
        } catch (err) {
            services.gravatar.status.to.error(config.gravatar.errorMessage);
            throw err; // probably for logging
        }
    };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1FfoM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ({ core , services , stores , subscriptions , util  })=>(tagData1)=>{
        const assignRoleId = ({ roleName , ...tagData })=>{
            const roleId = tagData.roleId || services.roles.findOrInsertRoleWithName(roleName);
            return {
                roleId,
                ...tagData
            };
        };
        const insertTag = (tag)=>{
            return stores.tags.insert(tag, (tagId)=>{
                subscriptions.tags.onChange(tagId, "tagName", services.tags.setupTagPropagation(tagId));
                subscriptions.tags.onChange(tagId, "roleId", services.tags.setupRolePropagation(tagId));
            });
        };
        return util.pipe(assignRoleId, core.tags.buildTag, insertTag)(tagData1 || {});
    };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"15v88":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ({ services , stores  })=>(tagInstanceData)=>{
        const tagInstance = services.tags.buildTagInstance(tagInstanceData);
        return stores.tagInstances.insert(tagInstance, (tagInstanceId)=>{
            const { tagId , mode  } = tagInstance;
            const tag = stores.tags.find(tagId);
            stores.tags.update(tagId, {
                instances: tag.instances.concat(tagInstanceId),
                [mode]: tag[mode].concat(tagInstanceId)
            });
        });
    };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4PfPu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ({ stores  })=>(tagInstanceId)=>{
        const { tagId , mode  } = stores.tagInstances.find(tagInstanceId);
        const tag = stores.tags.find(tagId);
        const notThis = (id)=>id !== tagInstanceId;
        stores.tags.update(tagId, {
            instances: tag.instances.filter(notThis),
            [mode]: tag[mode].filter(notThis)
        });
        stores.tagInstances.remove(tagInstanceId);
    };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jA6qw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ({ stores  })=>(tagId)=>()=>{
            const { roleId , instances  } = stores.tags.find(tagId);
            const { roleName  } = stores.roles.find(roleId);
            instances.forEach((id)=>stores.tagInstances.update(id, {
                    roleId,
                    roleName
                }));
        };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5bERz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ({ stores  })=>(tagId)=>()=>{
            const { tagName , instances  } = stores.tags.find(tagId);
            instances.forEach((id)=>stores.tagInstances.update(id, {
                    tagName
                }));
        };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kVSh6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ({ core , stores  })=>()=>{
        const sorts = {
            orderAdded: stores.tags.list,
            roleThenName: ()=>core.tags.sortTagsByRoleThenName(stores.tags.list(), stores.roles.find),
            name: ()=>core.tags.sortTagsByName(stores.tags.list())
        };
        const { sort  } = stores.settings.find("options");
        const tags = sorts[sort]();
        return core.tags.sortTagInstancesByTagThenMode(tags, stores.tagInstances.find);
    };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"biIre":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _createHandlersJs = require("./create-handlers.js");
var _createHandlersJsDefault = parcelHelpers.interopDefault(_createHandlersJs);
var _createStyleManagerJs = require("./create-style-manager.js");
var _createStyleManagerJsDefault = parcelHelpers.interopDefault(_createStyleManagerJs);
var _insertNilRoleJs = require("./insert-nil-role.js");
var _insertNilRoleJsDefault = parcelHelpers.interopDefault(_insertNilRoleJs);
var _startJs = require("./start.js");
var _startJsDefault = parcelHelpers.interopDefault(_startJs);
exports.default = {
    createHandlers: (0, _createHandlersJsDefault.default),
    createStyleManager: (0, _createStyleManagerJsDefault.default),
    insertNilRole: (0, _insertNilRoleJsDefault.default),
    start: (0, _startJsDefault.default)
};

},{"./create-handlers.js":"hBtZM","./create-style-manager.js":"4zzZW","./insert-nil-role.js":"4klEA","./start.js":"gvA1a","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hBtZM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ({ services , subscriptions , util , config  })=>()=>{
        const adjustTagInstanceCounts = util.debounce(services.tags.adjustTagInstanceCounts, config.debounce.adjustTagInstanceCounts);
        config.options.modes.forEach((mode)=>{
            subscriptions.settings.onChange("options", mode, adjustTagInstanceCounts);
        });
        subscriptions.tags.onInsert(adjustTagInstanceCounts);
    };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4zzZW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ({ styles , subscriptions , ui , util  })=>()=>{
        const { tagImage , roleColor , ...otherStyles } = styles;
        const appendStyles = (...$$styles)=>ui.appendToHead(...$$styles);
        appendStyles(...Object.values(otherStyles).map((style)=>style()));
        subscriptions.tags.onInsert(util.pipe(tagImage, appendStyles));
        subscriptions.roles.onInsert(util.pipe(roleColor, appendStyles));
    };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4klEA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ({ config , stores  })=>()=>{
        const nilRoleId = stores.roles.insert(config.roles.nilRole);
        stores.settings.update("app", {
            nilRoleId
        });
    };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gvA1a":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ({ startup , components  })=>()=>{
        startup.insertNilRole();
        startup.createHandlers();
        startup.createStyleManager();
        return components.app();
    };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gwOCy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _stateStoreJs = require("./state-store.js");
var _stateStoreJsDefault = parcelHelpers.interopDefault(_stateStoreJs);
exports.default = {
    stateStore: (0, _stateStoreJsDefault.default)
};

},{"./state-store.js":"3WSIN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3WSIN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _events = require("events");
var _eventsDefault = parcelHelpers.interopDefault(_events);
exports.default = (defaults = {})=>{
    let nextId = 1;
    const state = new Map();
    const funcs = new Map();
    const collectionEmitter = new (0, _eventsDefault.default)();
    const manage = (id)=>funcs.get(id) || {
            get: ()=>null
        };
    const list = ()=>[
            ...state.values()
        ];
    const find = (id)=>manage(id).get();
    const update1 = (id, changes)=>manage(id).update(changes);
    const onChange1 = (id, field, listener)=>manage(id).subscriptions.onChange(field, listener);
    const onChangeAny = (field, listener)=>collectionEmitter.on(`change:${field}`, listener);
    const onInsert = (listener)=>collectionEmitter.on("insert", listener);
    const onFirstInsert = (listener)=>collectionEmitter.once("firstInsert", listener);
    const onBeforeRemove = (listener)=>collectionEmitter.on("beforeRemove", listener);
    const subscriptions1 = {
        onChange: onChange1,
        onChangeAny,
        onInsert,
        onFirstInsert,
        onBeforeRemove
    };
    const insert = (data, callback)=>{
        const id = data.id || nextId++;
        const item = {
            id,
            ...data
        };
        const itemEmitter = new (0, _eventsDefault.default)();
        const get = ()=>({
                ...item
            });
        const update = (changes)=>{
            Object.entries(changes).forEach(([field, val])=>{
                if (item[field] === val) return;
                item[field] = val;
                const emit = (emitter)=>emitter.emit(`change:${field}`, item[field], item);
                [
                    itemEmitter,
                    collectionEmitter
                ].forEach(emit);
            });
        };
        const onChange = (field, listener)=>{
            itemEmitter.on(`change:${field}`, listener);
            listener(item[field], item);
        };
        const subscriptions = {
            onChange
        };
        funcs.set(id, {
            get,
            update,
            subscriptions
        });
        state.set(id, item);
        if (callback) callback(id);
        collectionEmitter.emit("firstInsert", id);
        collectionEmitter.emit("insert", id);
        return id;
    };
    const remove = (id)=>{
        collectionEmitter.emit("beforeRemove", id);
        funcs.delete(id);
        state.delete(id);
    };
    Object.entries(defaults).map(([id, entry])=>({
            id,
            ...entry
        })).forEach((entry)=>insert(entry));
    return {
        insert,
        remove,
        list,
        find,
        update: update1,
        subscriptions: subscriptions1
    };
};

},{"events":"1VQLm","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1VQLm":[function(require,module,exports) {
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
"use strict";
var R = typeof Reflect === "object" ? Reflect : null;
var ReflectApply = R && typeof R.apply === "function" ? R.apply : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
};
var ReflectOwnKeys;
if (R && typeof R.ownKeys === "function") ReflectOwnKeys = R.ownKeys;
else if (Object.getOwnPropertySymbols) ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target));
};
else ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
};
function ProcessEmitWarning(warning) {
    if (console && console.warn) console.warn(warning);
}
var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
    return value !== value;
};
function EventEmitter() {
    EventEmitter.init.call(this);
}
module.exports = EventEmitter;
module.exports.once = once;
// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;
EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;
// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;
function checkListener(listener) {
    if (typeof listener !== "function") throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
}
Object.defineProperty(EventEmitter, "defaultMaxListeners", {
    enumerable: true,
    get: function() {
        return defaultMaxListeners;
    },
    set: function(arg) {
        if (typeof arg !== "number" || arg < 0 || NumberIsNaN(arg)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + ".");
        defaultMaxListeners = arg;
    }
});
EventEmitter.init = function() {
    if (this._events === undefined || this._events === Object.getPrototypeOf(this)._events) {
        this._events = Object.create(null);
        this._eventsCount = 0;
    }
    this._maxListeners = this._maxListeners || undefined;
};
// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
    if (typeof n !== "number" || n < 0 || NumberIsNaN(n)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + ".");
    this._maxListeners = n;
    return this;
};
function _getMaxListeners(that) {
    if (that._maxListeners === undefined) return EventEmitter.defaultMaxListeners;
    return that._maxListeners;
}
EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
    return _getMaxListeners(this);
};
EventEmitter.prototype.emit = function emit(type) {
    var args = [];
    for(var i = 1; i < arguments.length; i++)args.push(arguments[i]);
    var doError = type === "error";
    var events = this._events;
    if (events !== undefined) doError = doError && events.error === undefined;
    else if (!doError) return false;
    // If there is no 'error' event listener then throw.
    if (doError) {
        var er;
        if (args.length > 0) er = args[0];
        if (er instanceof Error) // Note: The comments on the `throw` lines are intentional, they show
        // up in Node's output if this results in an unhandled exception.
        throw er; // Unhandled 'error' event
        // At least give some kind of context to the user
        var err = new Error("Unhandled error." + (er ? " (" + er.message + ")" : ""));
        err.context = er;
        throw err; // Unhandled 'error' event
    }
    var handler = events[type];
    if (handler === undefined) return false;
    if (typeof handler === "function") ReflectApply(handler, this, args);
    else {
        var len = handler.length;
        var listeners = arrayClone(handler, len);
        for(var i = 0; i < len; ++i)ReflectApply(listeners[i], this, args);
    }
    return true;
};
function _addListener(target, type, listener, prepend) {
    var m;
    var events;
    var existing;
    checkListener(listener);
    events = target._events;
    if (events === undefined) {
        events = target._events = Object.create(null);
        target._eventsCount = 0;
    } else {
        // To avoid recursion in the case that type === "newListener"! Before
        // adding it to the listeners, first emit "newListener".
        if (events.newListener !== undefined) {
            target.emit("newListener", type, listener.listener ? listener.listener : listener);
            // Re-assign `events` because a newListener handler could have caused the
            // this._events to be assigned to a new object
            events = target._events;
        }
        existing = events[type];
    }
    if (existing === undefined) {
        // Optimize the case of one listener. Don't need the extra array object.
        existing = events[type] = listener;
        ++target._eventsCount;
    } else {
        if (typeof existing === "function") // Adding the second element, need to change to array.
        existing = events[type] = prepend ? [
            listener,
            existing
        ] : [
            existing,
            listener
        ];
        else if (prepend) existing.unshift(listener);
        else existing.push(listener);
        // Check for listener leak
        m = _getMaxListeners(target);
        if (m > 0 && existing.length > m && !existing.warned) {
            existing.warned = true;
            // No error code for this since it is a Warning
            // eslint-disable-next-line no-restricted-syntax
            var w = new Error("Possible EventEmitter memory leak detected. " + existing.length + " " + String(type) + " listeners " + "added. Use emitter.setMaxListeners() to " + "increase limit");
            w.name = "MaxListenersExceededWarning";
            w.emitter = target;
            w.type = type;
            w.count = existing.length;
            ProcessEmitWarning(w);
        }
    }
    return target;
}
EventEmitter.prototype.addListener = function addListener(type, listener) {
    return _addListener(this, type, listener, false);
};
EventEmitter.prototype.on = EventEmitter.prototype.addListener;
EventEmitter.prototype.prependListener = function prependListener(type, listener) {
    return _addListener(this, type, listener, true);
};
function onceWrapper() {
    if (!this.fired) {
        this.target.removeListener(this.type, this.wrapFn);
        this.fired = true;
        if (arguments.length === 0) return this.listener.call(this.target);
        return this.listener.apply(this.target, arguments);
    }
}
function _onceWrap(target, type, listener) {
    var state = {
        fired: false,
        wrapFn: undefined,
        target: target,
        type: type,
        listener: listener
    };
    var wrapped = onceWrapper.bind(state);
    wrapped.listener = listener;
    state.wrapFn = wrapped;
    return wrapped;
}
EventEmitter.prototype.once = function once(type, listener) {
    checkListener(listener);
    this.on(type, _onceWrap(this, type, listener));
    return this;
};
EventEmitter.prototype.prependOnceListener = function prependOnceListener(type, listener) {
    checkListener(listener);
    this.prependListener(type, _onceWrap(this, type, listener));
    return this;
};
// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener = function removeListener(type, listener) {
    var list, events, position, i, originalListener;
    checkListener(listener);
    events = this._events;
    if (events === undefined) return this;
    list = events[type];
    if (list === undefined) return this;
    if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0) this._events = Object.create(null);
        else {
            delete events[type];
            if (events.removeListener) this.emit("removeListener", type, list.listener || listener);
        }
    } else if (typeof list !== "function") {
        position = -1;
        for(i = list.length - 1; i >= 0; i--)if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
        }
        if (position < 0) return this;
        if (position === 0) list.shift();
        else spliceOne(list, position);
        if (list.length === 1) events[type] = list[0];
        if (events.removeListener !== undefined) this.emit("removeListener", type, originalListener || listener);
    }
    return this;
};
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.removeAllListeners = function removeAllListeners(type) {
    var listeners, events, i;
    events = this._events;
    if (events === undefined) return this;
    // not listening for removeListener, no need to emit
    if (events.removeListener === undefined) {
        if (arguments.length === 0) {
            this._events = Object.create(null);
            this._eventsCount = 0;
        } else if (events[type] !== undefined) {
            if (--this._eventsCount === 0) this._events = Object.create(null);
            else delete events[type];
        }
        return this;
    }
    // emit removeListener for all listeners on all events
    if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for(i = 0; i < keys.length; ++i){
            key = keys[i];
            if (key === "removeListener") continue;
            this.removeAllListeners(key);
        }
        this.removeAllListeners("removeListener");
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
    }
    listeners = events[type];
    if (typeof listeners === "function") this.removeListener(type, listeners);
    else if (listeners !== undefined) // LIFO order
    for(i = listeners.length - 1; i >= 0; i--)this.removeListener(type, listeners[i]);
    return this;
};
function _listeners(target, type, unwrap) {
    var events = target._events;
    if (events === undefined) return [];
    var evlistener = events[type];
    if (evlistener === undefined) return [];
    if (typeof evlistener === "function") return unwrap ? [
        evlistener.listener || evlistener
    ] : [
        evlistener
    ];
    return unwrap ? unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}
EventEmitter.prototype.listeners = function listeners(type) {
    return _listeners(this, type, true);
};
EventEmitter.prototype.rawListeners = function rawListeners(type) {
    return _listeners(this, type, false);
};
EventEmitter.listenerCount = function(emitter, type) {
    if (typeof emitter.listenerCount === "function") return emitter.listenerCount(type);
    else return listenerCount.call(emitter, type);
};
EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
    var events = this._events;
    if (events !== undefined) {
        var evlistener = events[type];
        if (typeof evlistener === "function") return 1;
        else if (evlistener !== undefined) return evlistener.length;
    }
    return 0;
}
EventEmitter.prototype.eventNames = function eventNames() {
    return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};
function arrayClone(arr, n) {
    var copy = new Array(n);
    for(var i = 0; i < n; ++i)copy[i] = arr[i];
    return copy;
}
function spliceOne(list, index) {
    for(; index + 1 < list.length; index++)list[index] = list[index + 1];
    list.pop();
}
function unwrapListeners(arr) {
    var ret = new Array(arr.length);
    for(var i = 0; i < ret.length; ++i)ret[i] = arr[i].listener || arr[i];
    return ret;
}
function once(emitter, name) {
    return new Promise(function(resolve, reject) {
        function errorListener(err) {
            emitter.removeListener(name, resolver);
            reject(err);
        }
        function resolver() {
            if (typeof emitter.removeListener === "function") emitter.removeListener("error", errorListener);
            resolve([].slice.call(arguments));
        }
        eventTargetAgnosticAddListener(emitter, name, resolver, {
            once: true
        });
        if (name !== "error") addErrorHandlerIfEventEmitter(emitter, errorListener, {
            once: true
        });
    });
}
function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
    if (typeof emitter.on === "function") eventTargetAgnosticAddListener(emitter, "error", handler, flags);
}
function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
    if (typeof emitter.on === "function") {
        if (flags.once) emitter.once(name, listener);
        else emitter.on(name, listener);
    } else if (typeof emitter.addEventListener === "function") // EventTarget does not have `error` event semantics like Node
    // EventEmitters, we do not listen for `error` events here.
    emitter.addEventListener(name, function wrapListener(arg) {
        // IE does not have builtin `{ once: true }` support so we
        // have to do it manually.
        if (flags.once) emitter.removeEventListener(name, wrapListener);
        listener(arg);
    });
    else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
}

},{}],"hBLcV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _setupJs = require("./setup.js");
var _setupJsDefault = parcelHelpers.interopDefault(_setupJs);
exports.default = {
    setup: (0, _setupJsDefault.default)
};

},{"./setup.js":"hBu4u","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hBu4u":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ({ storage , config  })=>()=>{
        return Object.fromEntries(config.storage.stores.map((name)=>{
            const defaults = config.storage.defaults[name];
            const store = storage.stateStore(defaults);
            return [
                name,
                store
            ];
        }));
    };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jhMVz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _roleColorJs = require("./role-color.js");
var _roleColorJsDefault = parcelHelpers.interopDefault(_roleColorJs);
var _tagImageJs = require("./tag-image.js");
var _tagImageJsDefault = parcelHelpers.interopDefault(_tagImageJs);
var _tagOutlineJs = require("./tag-outline.js");
var _tagOutlineJsDefault = parcelHelpers.interopDefault(_tagOutlineJs);
var _tagShapeJs = require("./tag-shape.js");
var _tagShapeJsDefault = parcelHelpers.interopDefault(_tagShapeJs);
var _tagSizeJs = require("./tag-size.js");
var _tagSizeJsDefault = parcelHelpers.interopDefault(_tagSizeJs);
var _tagSpacingJs = require("./tag-spacing.js");
var _tagSpacingJsDefault = parcelHelpers.interopDefault(_tagSpacingJs);
var _vanillaPickerJs = require("./vanilla-picker.js");
var _vanillaPickerJsDefault = parcelHelpers.interopDefault(_vanillaPickerJs);
exports.default = {
    roleColor: (0, _roleColorJsDefault.default),
    tagImage: (0, _tagImageJsDefault.default),
    tagOutline: (0, _tagOutlineJsDefault.default),
    tagShape: (0, _tagShapeJsDefault.default),
    tagSize: (0, _tagSizeJsDefault.default),
    tagSpacing: (0, _tagSpacingJsDefault.default),
    vanillaPicker: (0, _vanillaPickerJsDefault.default)
};

},{"./role-color.js":"hHHyf","./tag-image.js":"bSSGp","./tag-outline.js":"3WDCX","./tag-shape.js":"3rj9R","./tag-size.js":"hB7MJ","./tag-spacing.js":"5FvZQ","./vanilla-picker.js":"aOTXD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hHHyf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ({ ui , subscriptions  })=>(roleId)=>{
        const $style = ui.el("style");
        subscriptions.roles.onChange(roleId, "color", (color)=>{
            $style.textContent = `
                .role${roleId} .tag-image { border-color: ${color}; }            
                .role${roleId} .role-name { background-color: ${color}; }
            `;
        });
        return $style;
    };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bSSGp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ({ ui , subscriptions  })=>(tagId)=>{
        const $style = ui.el("style");
        subscriptions.tags.onChange(tagId, "image", (image)=>{
            $style.textContent = image ? `.tag${tagId} .tag-image { background-image: url(${image}); }` : "";
        });
        return $style;
    };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3WDCX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ({ ui , subscriptions  })=>()=>{
        const $style = ui.el("style");
        subscriptions.settings.onChange("options", "outline", (outline)=>{
            $style.textContent = outline ? "" : ".tag { border-color: transparent; }";
        });
        return $style;
    };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3rj9R":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ({ ui , subscriptions , config  })=>()=>{
        const $style = ui.el("style");
        subscriptions.settings.onChange("options", "shape", (shape)=>{
            const borderRadius = config.options.shapeRadius[shape];
            $style.textContent = `.tag-image { border-radius: ${borderRadius}%; }`;
        });
        return $style;
    };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hB7MJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ({ ui , subscriptions , config  })=>()=>{
        const $style = ui.el("style");
        subscriptions.settings.onChange("options", "size", (size)=>{
            const width = size - config.tags.imagePadding * 2;
            $style.textContent = `
            .tag-list { grid-template-columns: repeat(auto-fill, ${size}px); }
            .tag-image { width: ${width}px; height: ${width}px; }
        `;
        });
        return $style;
    }; /* FOOTNOTES

Absolute size needed for `.tag-image` because the image is loaded as a 
CSS `background-image` of a <div> instead of an <img> for performance reasons.

*/ 

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5FvZQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ({ ui , subscriptions  })=>()=>{
        const $style = ui.el("style");
        subscriptions.settings.onChange("options", "spacing", (spacing)=>{
            $style.textContent = `.tag-list { gap: ${spacing}px; }`;
        });
        return $style;
    };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aOTXD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _vanillaPicker = require("vanilla-picker");
var _vanillaPickerDefault = parcelHelpers.interopDefault(_vanillaPicker);
exports.default = ({ ui  })=>()=>{
        return ui.el("style", {
            textContent: (0, _vanillaPickerDefault.default).css
        });
    };

},{"vanilla-picker":"2CfBK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2CfBK":[function(require,module,exports) {
"use strict";
var classCallCheck = function(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
};
var createClass = function() {
    function defineProperties(target, props) {
        for(var i = 0; i < props.length; i++){
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();
var slicedToArray = function() {
    function sliceIterator(arr, i) {
        var _arr = [];
        var _n = true;
        var _d = false;
        var _e = undefined;
        try {
            for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){
                _arr.push(_s.value);
                if (i && _arr.length === i) break;
            }
        } catch (err) {
            _d = true;
            _e = err;
        } finally{
            try {
                if (!_n && _i["return"]) _i["return"]();
            } finally{
                if (_d) throw _e;
            }
        }
        return _arr;
    }
    return function(arr, i) {
        if (Array.isArray(arr)) return arr;
        else if (Symbol.iterator in Object(arr)) return sliceIterator(arr, i);
        else throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
}();
String.prototype.startsWith = String.prototype.startsWith || function(needle) {
    return this.indexOf(needle) === 0;
};
String.prototype.padStart = String.prototype.padStart || function(len, pad) {
    var str = this;
    while(str.length < len)str = pad + str;
    return str;
};
var colorNames = {
    cb: "0f8ff",
    tqw: "aebd7",
    q: "-ffff",
    qmrn: "7fffd4",
    zr: "0ffff",
    bg: "5f5dc",
    bsq: "e4c4",
    bck: "---",
    nch: "ebcd",
    b: "--ff",
    bvt: "8a2be2",
    brwn: "a52a2a",
    brw: "deb887",
    ctb: "5f9ea0",
    hrt: "7fff-",
    chcT: "d2691e",
    cr: "7f50",
    rnw: "6495ed",
    crns: "8dc",
    crms: "dc143c",
    cn: "-ffff",
    Db: "--8b",
    Dcn: "-8b8b",
    Dgnr: "b8860b",
    Dgr: "a9a9a9",
    Dgrn: "-64-",
    Dkhk: "bdb76b",
    Dmgn: "8b-8b",
    Dvgr: "556b2f",
    Drng: "8c-",
    Drch: "9932cc",
    Dr: "8b--",
    Dsmn: "e9967a",
    Dsgr: "8fbc8f",
    DsTb: "483d8b",
    DsTg: "2f4f4f",
    Dtrq: "-ced1",
    Dvt: "94-d3",
    ppnk: "1493",
    pskb: "-bfff",
    mgr: "696969",
    grb: "1e90ff",
    rbrc: "b22222",
    rwht: "af0",
    stg: "228b22",
    chs: "-ff",
    gnsb: "dcdcdc",
    st: "8f8ff",
    g: "d7-",
    gnr: "daa520",
    gr: "808080",
    grn: "-8-0",
    grnw: "adff2f",
    hnw: "0fff0",
    htpn: "69b4",
    nnr: "cd5c5c",
    ng: "4b-82",
    vr: "0",
    khk: "0e68c",
    vnr: "e6e6fa",
    nrb: "0f5",
    wngr: "7cfc-",
    mnch: "acd",
    Lb: "add8e6",
    Lcr: "08080",
    Lcn: "e0ffff",
    Lgnr: "afad2",
    Lgr: "d3d3d3",
    Lgrn: "90ee90",
    Lpnk: "b6c1",
    Lsmn: "a07a",
    Lsgr: "20b2aa",
    Lskb: "87cefa",
    LsTg: "778899",
    Lstb: "b0c4de",
    Lw: "e0",
    m: "-ff-",
    mgrn: "32cd32",
    nn: "af0e6",
    mgnt: "-ff",
    mrn: "8--0",
    mqm: "66cdaa",
    mmb: "--cd",
    mmrc: "ba55d3",
    mmpr: "9370db",
    msg: "3cb371",
    mmsT: "7b68ee",
    "": "-fa9a",
    mtr: "48d1cc",
    mmvt: "c71585",
    mnLb: "191970",
    ntc: "5fffa",
    mstr: "e4e1",
    mccs: "e4b5",
    vjw: "dead",
    nv: "--80",
    c: "df5e6",
    v: "808-0",
    vrb: "6b8e23",
    rng: "a5-",
    rngr: "45-",
    rch: "da70d6",
    pgnr: "eee8aa",
    pgrn: "98fb98",
    ptrq: "afeeee",
    pvtr: "db7093",
    ppwh: "efd5",
    pchp: "dab9",
    pr: "cd853f",
    pnk: "c0cb",
    pm: "dda0dd",
    pwrb: "b0e0e6",
    prp: "8-080",
    cc: "663399",
    r: "--",
    sbr: "bc8f8f",
    rb: "4169e1",
    sbrw: "8b4513",
    smn: "a8072",
    nbr: "4a460",
    sgrn: "2e8b57",
    ssh: "5ee",
    snn: "a0522d",
    svr: "c0c0c0",
    skb: "87ceeb",
    sTb: "6a5acd",
    sTgr: "708090",
    snw: "afa",
    n: "-ff7f",
    stb: "4682b4",
    tn: "d2b48c",
    t: "-8080",
    thst: "d8bfd8",
    tmT: "6347",
    trqs: "40e0d0",
    vt: "ee82ee",
    whT: "5deb3",
    wht: "",
    hts: "5f5f5",
    w: "-",
    wgrn: "9acd32"
};
function printNum(num) {
    var decs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    var str = decs > 0 ? num.toFixed(decs).replace(/0+$/, "").replace(/\.$/, "") : num.toString();
    return str || "0";
}
var Color = function() {
    function Color1(r, g, b, a) {
        classCallCheck(this, Color1);
        var that = this;
        function parseString(input) {
            if (input.startsWith("hsl")) {
                var _input$match$map = input.match(/([\-\d\.e]+)/g).map(Number), _input$match$map2 = slicedToArray(_input$match$map, 4), h = _input$match$map2[0], s = _input$match$map2[1], l = _input$match$map2[2], _a = _input$match$map2[3];
                if (_a === undefined) _a = 1;
                h /= 360;
                s /= 100;
                l /= 100;
                that.hsla = [
                    h,
                    s,
                    l,
                    _a
                ];
            } else if (input.startsWith("rgb")) {
                var _input$match$map3 = input.match(/([\-\d\.e]+)/g).map(Number), _input$match$map4 = slicedToArray(_input$match$map3, 4), _r = _input$match$map4[0], _g = _input$match$map4[1], _b = _input$match$map4[2], _a2 = _input$match$map4[3];
                if (_a2 === undefined) _a2 = 1;
                that.rgba = [
                    _r,
                    _g,
                    _b,
                    _a2
                ];
            } else if (input.startsWith("#")) that.rgba = Color1.hexToRgb(input);
            else that.rgba = Color1.nameToRgb(input) || Color1.hexToRgb(input);
        }
        if (r === undefined) ;
        else if (Array.isArray(r)) this.rgba = r;
        else if (b === undefined) {
            var color = r && "" + r;
            if (color) parseString(color.toLowerCase());
        } else this.rgba = [
            r,
            g,
            b,
            a === undefined ? 1 : a
        ];
    }
    createClass(Color1, [
        {
            key: "printRGB",
            value: function printRGB(alpha) {
                var rgb = alpha ? this.rgba : this.rgba.slice(0, 3), vals = rgb.map(function(x, i) {
                    return printNum(x, i === 3 ? 3 : 0);
                });
                return alpha ? "rgba(" + vals + ")" : "rgb(" + vals + ")";
            }
        },
        {
            key: "printHSL",
            value: function printHSL(alpha) {
                var mults = [
                    360,
                    100,
                    100,
                    1
                ], suff = [
                    "",
                    "%",
                    "%",
                    ""
                ];
                var hsl = alpha ? this.hsla : this.hsla.slice(0, 3), vals = hsl.map(function(x, i) {
                    return printNum(x * mults[i], i === 3 ? 3 : 1) + suff[i];
                });
                return alpha ? "hsla(" + vals + ")" : "hsl(" + vals + ")";
            }
        },
        {
            key: "printHex",
            value: function printHex(alpha) {
                var hex = this.hex;
                return alpha ? hex : hex.substring(0, 7);
            }
        },
        {
            key: "rgba",
            get: function get$$1() {
                if (this._rgba) return this._rgba;
                if (!this._hsla) throw new Error("No color is set");
                return this._rgba = Color1.hslToRgb(this._hsla);
            },
            set: function set$$1(rgb) {
                if (rgb.length === 3) rgb[3] = 1;
                this._rgba = rgb;
                this._hsla = null;
            }
        },
        {
            key: "rgbString",
            get: function get$$1() {
                return this.printRGB();
            }
        },
        {
            key: "rgbaString",
            get: function get$$1() {
                return this.printRGB(true);
            }
        },
        {
            key: "hsla",
            get: function get$$1() {
                if (this._hsla) return this._hsla;
                if (!this._rgba) throw new Error("No color is set");
                return this._hsla = Color1.rgbToHsl(this._rgba);
            },
            set: function set$$1(hsl) {
                if (hsl.length === 3) hsl[3] = 1;
                this._hsla = hsl;
                this._rgba = null;
            }
        },
        {
            key: "hslString",
            get: function get$$1() {
                return this.printHSL();
            }
        },
        {
            key: "hslaString",
            get: function get$$1() {
                return this.printHSL(true);
            }
        },
        {
            key: "hex",
            get: function get$$1() {
                var rgb = this.rgba, hex = rgb.map(function(x, i) {
                    return i < 3 ? x.toString(16) : Math.round(x * 255).toString(16);
                });
                return "#" + hex.map(function(x) {
                    return x.padStart(2, "0");
                }).join("");
            },
            set: function set$$1(hex) {
                this.rgba = Color1.hexToRgb(hex);
            }
        }
    ], [
        {
            key: "hexToRgb",
            value: function hexToRgb(input) {
                var hex = (input.startsWith("#") ? input.slice(1) : input).replace(/^(\w{3})$/, "$1F").replace(/^(\w)(\w)(\w)(\w)$/, "$1$1$2$2$3$3$4$4").replace(/^(\w{6})$/, "$1FF");
                if (!hex.match(/^([0-9a-fA-F]{8})$/)) throw new Error("Unknown hex color; " + input);
                var rgba = hex.match(/^(\w\w)(\w\w)(\w\w)(\w\w)$/).slice(1).map(function(x) {
                    return parseInt(x, 16);
                });
                rgba[3] = rgba[3] / 255;
                return rgba;
            }
        },
        {
            key: "nameToRgb",
            value: function nameToRgb(input) {
                var hash = input.toLowerCase().replace("at", "T").replace(/[aeiouyldf]/g, "").replace("ght", "L").replace("rk", "D").slice(-5, 4), hex = colorNames[hash];
                return hex === undefined ? hex : Color1.hexToRgb(hex.replace(/\-/g, "00").padStart(6, "f"));
            }
        },
        {
            key: "rgbToHsl",
            value: function rgbToHsl(_ref) {
                var _ref2 = slicedToArray(_ref, 4), r = _ref2[0], g = _ref2[1], b = _ref2[2], a = _ref2[3];
                r /= 255;
                g /= 255;
                b /= 255;
                var max = Math.max(r, g, b), min = Math.min(r, g, b);
                var h = void 0, s = void 0, l = (max + min) / 2;
                if (max === min) h = s = 0;
                else {
                    var d = max - min;
                    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
                    switch(max){
                        case r:
                            h = (g - b) / d + (g < b ? 6 : 0);
                            break;
                        case g:
                            h = (b - r) / d + 2;
                            break;
                        case b:
                            h = (r - g) / d + 4;
                            break;
                    }
                    h /= 6;
                }
                return [
                    h,
                    s,
                    l,
                    a
                ];
            }
        },
        {
            key: "hslToRgb",
            value: function hslToRgb(_ref3) {
                var _ref4 = slicedToArray(_ref3, 4), h = _ref4[0], s = _ref4[1], l = _ref4[2], a = _ref4[3];
                var r = void 0, g = void 0, b = void 0;
                if (s === 0) r = g = b = l;
                else {
                    var hue2rgb = function hue2rgb(p, q, t) {
                        if (t < 0) t += 1;
                        if (t > 1) t -= 1;
                        if (t < 1 / 6) return p + (q - p) * 6 * t;
                        if (t < 0.5) return q;
                        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
                        return p;
                    };
                    var q1 = l < 0.5 ? l * (1 + s) : l + s - l * s, p1 = 2 * l - q1;
                    r = hue2rgb(p1, q1, h + 1 / 3);
                    g = hue2rgb(p1, q1, h);
                    b = hue2rgb(p1, q1, h - 1 / 3);
                }
                var rgba = [
                    r * 255,
                    g * 255,
                    b * 255
                ].map(Math.round);
                rgba[3] = a;
                return rgba;
            }
        }
    ]);
    return Color1;
}();
var EventBucket = function() {
    function EventBucket1() {
        classCallCheck(this, EventBucket1);
        this._events = [];
    }
    createClass(EventBucket1, [
        {
            key: "add",
            value: function add(target, type, handler) {
                target.addEventListener(type, handler, false);
                this._events.push({
                    target: target,
                    type: type,
                    handler: handler
                });
            }
        },
        {
            key: "remove",
            value: function remove(target, type, handler) {
                this._events = this._events.filter(function(e) {
                    var isMatch = true;
                    if (target && target !== e.target) isMatch = false;
                    if (type && type !== e.type) isMatch = false;
                    if (handler && handler !== e.handler) isMatch = false;
                    if (isMatch) EventBucket1._doRemove(e.target, e.type, e.handler);
                    return !isMatch;
                });
            }
        },
        {
            key: "destroy",
            value: function destroy() {
                this._events.forEach(function(e) {
                    return EventBucket1._doRemove(e.target, e.type, e.handler);
                });
                this._events = [];
            }
        }
    ], [
        {
            key: "_doRemove",
            value: function _doRemove(target, type, handler) {
                target.removeEventListener(type, handler, false);
            }
        }
    ]);
    return EventBucket1;
}();
function parseHTML(document, htmlString) {
    var div = document.createElement("div");
    div.innerHTML = htmlString;
    return div.firstElementChild;
}
function dragTrack(window, eventBucket, area, callback) {
    var dragging = false;
    function clamp(val, min, max) {
        return Math.max(min, Math.min(val, max));
    }
    function onMove(e, info, starting) {
        if (starting) dragging = true;
        if (!dragging) return;
        e.preventDefault();
        var bounds = area.getBoundingClientRect(), w = bounds.width, h = bounds.height, x = info.clientX, y = info.clientY;
        var relX = clamp(x - bounds.left, 0, w), relY = clamp(y - bounds.top, 0, h);
        callback(relX / w, relY / h);
    }
    function onMouse(e, starting) {
        var button = e.buttons === undefined ? e.which : e.buttons;
        if (button === 1) onMove(e, e, starting);
        else dragging = false;
    }
    function onTouch(e, starting) {
        if (e.touches.length === 1) onMove(e, e.touches[0], starting);
        else dragging = false;
    }
    eventBucket.add(area, "mousedown", function(e) {
        onMouse(e, true);
    });
    eventBucket.add(area, "touchstart", function(e) {
        onTouch(e, true);
    });
    eventBucket.add(window, "mousemove", onMouse);
    eventBucket.add(area, "touchmove", onTouch);
    eventBucket.add(window, "mouseup", function(e) {
        dragging = false;
    });
    eventBucket.add(area, "touchend", function(e) {
        dragging = false;
    });
    eventBucket.add(area, "touchcancel", function(e) {
        dragging = false;
    });
}
var BG_TRANSP = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='2' height='2'%3E%3Cpath d='M1,0H0V1H2V2H1' fill='lightgrey'/%3E%3C/svg%3E\")";
var HUES = 360;
var EVENT_KEY = "keydown", EVENT_CLICK_OUTSIDE = "mousedown", EVENT_TAB_MOVE = "focusin";
function $(selector, context) {
    return context.querySelector(selector);
}
function stopEvent(e) {
    e.preventDefault();
    e.stopPropagation();
}
function onKey(bucket, target, keys, handler, stop) {
    bucket.add(target, EVENT_KEY, function(e) {
        if (keys.indexOf(e.key) >= 0) {
            if (stop) stopEvent(e);
            handler(e);
        }
    });
}
var Picker = function() {
    function Picker1(options) {
        classCallCheck(this, Picker1);
        this.settings = {
            popup: "right",
            layout: "default",
            alpha: true,
            editor: true,
            editorFormat: "hex",
            cancelButton: false,
            defaultColor: "#0cf"
        };
        this._events = new EventBucket();
        this.onChange = null;
        this.onDone = null;
        this.onOpen = null;
        this.onClose = null;
        this.setOptions(options);
    }
    createClass(Picker1, [
        {
            key: "setOptions",
            value: function setOptions(options) {
                var _this = this;
                if (!options) return;
                var settings = this.settings;
                function transfer(source, target, skipKeys) {
                    for(var key in source){
                        if (skipKeys && skipKeys.indexOf(key) >= 0) continue;
                        target[key] = source[key];
                    }
                }
                if (settings.parent && options.parent && settings.parent !== options.parent) {
                    this._events.remove(settings.parent);
                    this._popupInited = false;
                }
                transfer(options, settings);
                if (options.onChange) this.onChange = options.onChange;
                if (options.onDone) this.onDone = options.onDone;
                if (options.onOpen) this.onOpen = options.onOpen;
                if (options.onClose) this.onClose = options.onClose;
                var col = options.color || options.colour;
                if (col) this._setColor(col);
                var parent = settings.parent;
                if (parent && settings.popup && !this._popupInited) {
                    var openProxy = function openProxy(e) {
                        return _this.openHandler(e);
                    };
                    this._events.add(parent, "click", openProxy);
                    onKey(this._events, parent, [
                        " ",
                        "Spacebar",
                        "Enter"
                    ], openProxy);
                    this._popupInited = true;
                } else if (options.parent && !settings.popup) this.show();
            }
        },
        {
            key: "openHandler",
            value: function openHandler(e) {
                if (this.show()) {
                    e && e.preventDefault();
                    this.settings.parent.style.pointerEvents = "none";
                    var toFocus = e && e.type === EVENT_KEY ? this._domEdit : this.domElement;
                    setTimeout(function() {
                        return toFocus.focus();
                    }, 100);
                    if (this.onOpen) this.onOpen(this.colour);
                }
            }
        },
        {
            key: "closeHandler",
            value: function closeHandler(e) {
                var event = e && e.type;
                var doHide = false;
                if (!e) doHide = true;
                else if (event === EVENT_CLICK_OUTSIDE || event === EVENT_TAB_MOVE) {
                    var knownTime = (this.__containedEvent || 0) + 100;
                    if (e.timeStamp > knownTime) doHide = true;
                } else {
                    stopEvent(e);
                    doHide = true;
                }
                if (doHide && this.hide()) {
                    this.settings.parent.style.pointerEvents = "";
                    if (event !== EVENT_CLICK_OUTSIDE) this.settings.parent.focus();
                    if (this.onClose) this.onClose(this.colour);
                }
            }
        },
        {
            key: "movePopup",
            value: function movePopup(options, open) {
                this.closeHandler();
                this.setOptions(options);
                if (open) this.openHandler();
            }
        },
        {
            key: "setColor",
            value: function setColor(color, silent) {
                this._setColor(color, {
                    silent: silent
                });
            }
        },
        {
            key: "_setColor",
            value: function _setColor(color, flags) {
                if (typeof color === "string") color = color.trim();
                if (!color) return;
                flags = flags || {};
                var c = void 0;
                try {
                    c = new Color(color);
                } catch (ex) {
                    if (flags.failSilently) return;
                    throw ex;
                }
                if (!this.settings.alpha) {
                    var hsla = c.hsla;
                    hsla[3] = 1;
                    c.hsla = hsla;
                }
                this.colour = this.color = c;
                this._setHSLA(null, null, null, null, flags);
            }
        },
        {
            key: "setColour",
            value: function setColour(colour, silent) {
                this.setColor(colour, silent);
            }
        },
        {
            key: "show",
            value: function show() {
                var parent = this.settings.parent;
                if (!parent) return false;
                if (this.domElement) {
                    var toggled = this._toggleDOM(true);
                    this._setPosition();
                    return toggled;
                }
                var html = this.settings.template || '<div class="picker_wrapper" tabindex="-1"><div class="picker_arrow"></div><div class="picker_hue picker_slider"><div class="picker_selector"></div></div><div class="picker_sl"><div class="picker_selector"></div></div><div class="picker_alpha picker_slider"><div class="picker_selector"></div></div><div class="picker_editor"><input aria-label="Type a color name or hex value"/></div><div class="picker_sample"></div><div class="picker_done"><button>Ok</button></div><div class="picker_cancel"><button>Cancel</button></div></div>';
                var wrapper = parseHTML(this.settings.window.document, html);
                this.domElement = wrapper;
                this._domH = $(".picker_hue", wrapper);
                this._domSL = $(".picker_sl", wrapper);
                this._domA = $(".picker_alpha", wrapper);
                this._domEdit = $(".picker_editor input", wrapper);
                this._domSample = $(".picker_sample", wrapper);
                this._domOkay = $(".picker_done button", wrapper);
                this._domCancel = $(".picker_cancel button", wrapper);
                wrapper.classList.add("layout_" + this.settings.layout);
                if (!this.settings.alpha) wrapper.classList.add("no_alpha");
                if (!this.settings.editor) wrapper.classList.add("no_editor");
                if (!this.settings.cancelButton) wrapper.classList.add("no_cancel");
                this._ifPopup(function() {
                    return wrapper.classList.add("popup");
                });
                this._setPosition();
                if (this.colour) this._updateUI();
                else this._setColor(this.settings.defaultColor);
                this._bindEvents();
                return true;
            }
        },
        {
            key: "hide",
            value: function hide() {
                return this._toggleDOM(false);
            }
        },
        {
            key: "destroy",
            value: function destroy() {
                this._events.destroy();
                if (this.domElement) this.settings.parent.removeChild(this.domElement);
            }
        },
        {
            key: "_bindEvents",
            value: function _bindEvents() {
                var _this2 = this;
                var that = this, dom = this.domElement, events = this._events;
                function addEvent(target, type, handler) {
                    events.add(target, type, handler);
                }
                addEvent(dom, "click", function(e) {
                    return e.preventDefault();
                });
                dragTrack(this.settings.window, events, this._domH, function(x, y) {
                    return that._setHSLA(x);
                });
                dragTrack(this.settings.window, events, this._domSL, function(x, y) {
                    return that._setHSLA(null, x, 1 - y);
                });
                if (this.settings.alpha) dragTrack(this.settings.window, events, this._domA, function(x, y) {
                    return that._setHSLA(null, null, null, 1 - y);
                });
                var editInput = this._domEdit;
                addEvent(editInput, "input", function(e) {
                    that._setColor(this.value, {
                        fromEditor: true,
                        failSilently: true
                    });
                });
                addEvent(editInput, "focus", function(e) {
                    var input = this;
                    if (input.selectionStart === input.selectionEnd) input.select();
                });
                this._ifPopup(function() {
                    var popupCloseProxy = function popupCloseProxy(e) {
                        return _this2.closeHandler(e);
                    };
                    addEvent(_this2.settings.window, EVENT_CLICK_OUTSIDE, popupCloseProxy);
                    addEvent(_this2.settings.window, EVENT_TAB_MOVE, popupCloseProxy);
                    onKey(events, dom, [
                        "Esc",
                        "Escape"
                    ], popupCloseProxy);
                    var timeKeeper = function timeKeeper(e) {
                        _this2.__containedEvent = e.timeStamp;
                    };
                    addEvent(dom, EVENT_CLICK_OUTSIDE, timeKeeper);
                    addEvent(dom, EVENT_TAB_MOVE, timeKeeper);
                    addEvent(_this2._domCancel, "click", popupCloseProxy);
                });
                var onDoneProxy = function onDoneProxy(e) {
                    _this2._ifPopup(function() {
                        return _this2.closeHandler(e);
                    });
                    if (_this2.onDone) _this2.onDone(_this2.colour);
                };
                addEvent(this._domOkay, "click", onDoneProxy);
                onKey(events, dom, [
                    "Enter"
                ], onDoneProxy);
            }
        },
        {
            key: "_setPosition",
            value: function _setPosition() {
                var _this3 = this;
                var parent = this.settings.parent, elm = this.domElement;
                if (parent !== elm.parentNode) parent.appendChild(elm);
                this._ifPopup(function(popup) {
                    if (_this3.settings.window.getComputedStyle(parent).position === "static") parent.style.position = "relative";
                    var cssClass = popup === true ? "popup_right" : "popup_" + popup;
                    [
                        "popup_top",
                        "popup_bottom",
                        "popup_left",
                        "popup_right"
                    ].forEach(function(c) {
                        if (c === cssClass) elm.classList.add(c);
                        else elm.classList.remove(c);
                    });
                    elm.classList.add(cssClass);
                });
            }
        },
        {
            key: "_setHSLA",
            value: function _setHSLA(h, s, l, a, flags) {
                flags = flags || {};
                var col = this.colour, hsla = col.hsla;
                [
                    h,
                    s,
                    l,
                    a
                ].forEach(function(x, i) {
                    if (x || x === 0) hsla[i] = x;
                });
                col.hsla = hsla;
                this._updateUI(flags);
                if (this.onChange && !flags.silent) this.onChange(col);
            }
        },
        {
            key: "_updateUI",
            value: function _updateUI(flags) {
                if (!this.domElement) return;
                flags = flags || {};
                var col = this.colour, hsl = col.hsla, cssHue = "hsl(" + hsl[0] * HUES + ", 100%, 50%)", cssHSL = col.hslString, cssHSLA = col.hslaString;
                var uiH = this._domH, uiSL = this._domSL, uiA = this._domA, thumbH = $(".picker_selector", uiH), thumbSL = $(".picker_selector", uiSL), thumbA = $(".picker_selector", uiA);
                function posX(parent, child, relX) {
                    child.style.left = relX * 100 + "%";
                }
                function posY(parent, child, relY) {
                    child.style.top = relY * 100 + "%";
                }
                posX(uiH, thumbH, hsl[0]);
                this._domSL.style.backgroundColor = this._domH.style.color = cssHue;
                posX(uiSL, thumbSL, hsl[1]);
                posY(uiSL, thumbSL, 1 - hsl[2]);
                uiSL.style.color = cssHSL;
                posY(uiA, thumbA, 1 - hsl[3]);
                var opaque = cssHSL, transp = opaque.replace("hsl", "hsla").replace(")", ", 0)"), bg = "linear-gradient(" + [
                    opaque,
                    transp
                ] + ")";
                this._domA.style.backgroundImage = bg + ", " + BG_TRANSP;
                if (!flags.fromEditor) {
                    var format = this.settings.editorFormat, alpha = this.settings.alpha;
                    var value = void 0;
                    switch(format){
                        case "rgb":
                            value = col.printRGB(alpha);
                            break;
                        case "hsl":
                            value = col.printHSL(alpha);
                            break;
                        default:
                            value = col.printHex(alpha);
                    }
                    this._domEdit.value = value;
                }
                this._domSample.style.color = cssHSLA;
            }
        },
        {
            key: "_ifPopup",
            value: function _ifPopup(actionIf, actionElse) {
                if (this.settings.parent && this.settings.popup) actionIf && actionIf(this.settings.popup);
                else actionElse && actionElse();
            }
        },
        {
            key: "_toggleDOM",
            value: function _toggleDOM(toVisible) {
                var dom = this.domElement;
                if (!dom) return false;
                var displayStyle = toVisible ? "" : "none", toggle = dom.style.display !== displayStyle;
                if (toggle) dom.style.display = displayStyle;
                return toggle;
            }
        }
    ], [
        {
            key: "StyleElement",
            get: function get$$1() {
                return _style;
            }
        },
        {
            key: "css",
            get: function get$$1() {
                return ".picker_wrapper.no_alpha .picker_alpha{display:none}.picker_wrapper.no_editor .picker_editor{position:absolute;z-index:-1;opacity:0}.picker_wrapper.no_cancel .picker_cancel{display:none}.layout_default.picker_wrapper{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-flow:row wrap;-webkit-box-pack:justify;justify-content:space-between;-webkit-box-align:stretch;align-items:stretch;font-size:10px;width:25em;padding:.5em}.layout_default.picker_wrapper input,.layout_default.picker_wrapper button{font-size:1rem}.layout_default.picker_wrapper>*{margin:.5em}.layout_default.picker_wrapper::before{content:'';display:block;width:100%;height:0;-webkit-box-ordinal-group:2;order:1}.layout_default .picker_slider,.layout_default .picker_selector{padding:1em}.layout_default .picker_hue{width:100%}.layout_default .picker_sl{-webkit-box-flex:1;flex:1 1 auto}.layout_default .picker_sl::before{content:'';display:block;padding-bottom:100%}.layout_default .picker_editor{-webkit-box-ordinal-group:2;order:1;width:6.5rem}.layout_default .picker_editor input{width:100%;height:100%}.layout_default .picker_sample{-webkit-box-ordinal-group:2;order:1;-webkit-box-flex:1;flex:1 1 auto}.layout_default .picker_done,.layout_default .picker_cancel{-webkit-box-ordinal-group:2;order:1}.picker_wrapper{box-sizing:border-box;background:#f2f2f2;box-shadow:0 0 0 1px silver;cursor:default;font-family:sans-serif;color:#444;pointer-events:auto}.picker_wrapper:focus{outline:none}.picker_wrapper button,.picker_wrapper input{box-sizing:border-box;border:none;box-shadow:0 0 0 1px silver;outline:none}.picker_wrapper button:focus,.picker_wrapper button:active,.picker_wrapper input:focus,.picker_wrapper input:active{box-shadow:0 0 2px 1px dodgerblue}.picker_wrapper button{padding:.4em .6em;cursor:pointer;background-color:whitesmoke;background-image:-webkit-gradient(linear, left bottom, left top, from(gainsboro), to(transparent));background-image:linear-gradient(0deg, gainsboro, transparent)}.picker_wrapper button:active{background-image:-webkit-gradient(linear, left bottom, left top, from(transparent), to(gainsboro));background-image:linear-gradient(0deg, transparent, gainsboro)}.picker_wrapper button:hover{background-color:white}.picker_selector{position:absolute;z-index:1;display:block;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);border:2px solid white;border-radius:100%;box-shadow:0 0 3px 1px #67b9ff;background:currentColor;cursor:pointer}.picker_slider .picker_selector{border-radius:2px}.picker_hue{position:relative;background-image:-webkit-gradient(linear, left top, right top, from(red), color-stop(yellow), color-stop(lime), color-stop(cyan), color-stop(blue), color-stop(magenta), to(red));background-image:linear-gradient(90deg, red, yellow, lime, cyan, blue, magenta, red);box-shadow:0 0 0 1px silver}.picker_sl{position:relative;box-shadow:0 0 0 1px silver;background-image:-webkit-gradient(linear, left top, left bottom, from(white), color-stop(50%, rgba(255,255,255,0))),-webkit-gradient(linear, left bottom, left top, from(black), color-stop(50%, rgba(0,0,0,0))),-webkit-gradient(linear, left top, right top, from(gray), to(rgba(128,128,128,0)));background-image:linear-gradient(180deg, white, rgba(255,255,255,0) 50%),linear-gradient(0deg, black, rgba(0,0,0,0) 50%),linear-gradient(90deg, gray, rgba(128,128,128,0))}.picker_alpha,.picker_sample{position:relative;background:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='2' height='2'%3E%3Cpath d='M1,0H0V1H2V2H1' fill='lightgrey'/%3E%3C/svg%3E\") left top/contain white;box-shadow:0 0 0 1px silver}.picker_alpha .picker_selector,.picker_sample .picker_selector{background:none}.picker_editor input{font-family:monospace;padding:.2em .4em}.picker_sample::before{content:'';position:absolute;display:block;width:100%;height:100%;background:currentColor}.picker_arrow{position:absolute;z-index:-1}.picker_wrapper.popup{position:absolute;z-index:2;margin:1.5em}.picker_wrapper.popup,.picker_wrapper.popup .picker_arrow::before,.picker_wrapper.popup .picker_arrow::after{background:#f2f2f2;box-shadow:0 0 10px 1px rgba(0,0,0,0.4)}.picker_wrapper.popup .picker_arrow{width:3em;height:3em;margin:0}.picker_wrapper.popup .picker_arrow::before,.picker_wrapper.popup .picker_arrow::after{content:\"\";display:block;position:absolute;top:0;left:0;z-index:-99}.picker_wrapper.popup .picker_arrow::before{width:100%;height:100%;-webkit-transform:skew(45deg);transform:skew(45deg);-webkit-transform-origin:0 100%;transform-origin:0 100%}.picker_wrapper.popup .picker_arrow::after{width:150%;height:150%;box-shadow:none}.popup.popup_top{bottom:100%;left:0}.popup.popup_top .picker_arrow{bottom:0;left:0;-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}.popup.popup_bottom{top:100%;left:0}.popup.popup_bottom .picker_arrow{top:0;left:0;-webkit-transform:rotate(90deg) scale(1, -1);transform:rotate(90deg) scale(1, -1)}.popup.popup_left{top:0;right:100%}.popup.popup_left .picker_arrow{top:0;right:0;-webkit-transform:scale(-1, 1);transform:scale(-1, 1)}.popup.popup_right{top:0;left:100%}.popup.popup_right .picker_arrow{top:0;left:0}";
            }
        }
    ]);
    return Picker1;
}();
module.exports = Picker;

},{}],"2WyoC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _setupJs = require("./setup.js");
var _setupJsDefault = parcelHelpers.interopDefault(_setupJs);
exports.default = {
    setup: (0, _setupJsDefault.default)
};

},{"./setup.js":"N69ZF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"N69ZF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ({ stores , util  })=>()=>{
        return util.mapValues(stores, (store)=>store.subscriptions);
    };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8WMoJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _appendToHeadJs = require("./append-to-head.js");
var _appendToHeadJsDefault = parcelHelpers.interopDefault(_appendToHeadJs);
var _elJs = require("./el.js");
var _elJsDefault = parcelHelpers.interopDefault(_elJs);
var _eventJs = require("./event.js");
var _eventJsDefault = parcelHelpers.interopDefault(_eventJs);
var _refocusJs = require("./refocus.js");
var _refocusJsDefault = parcelHelpers.interopDefault(_refocusJs);
var _toggleBoolClassJs = require("./toggle-bool-class.js");
var _toggleBoolClassJsDefault = parcelHelpers.interopDefault(_toggleBoolClassJs);
exports.default = {
    appendToHead: (0, _appendToHeadJsDefault.default),
    el: (0, _elJsDefault.default),
    event: (0, _eventJsDefault.default),
    refocus: (0, _refocusJsDefault.default),
    toggleBoolClass: (0, _toggleBoolClassJsDefault.default)
};

},{"./append-to-head.js":"dS2P2","./el.js":"5J01n","./event.js":"hM1Sp","./refocus.js":"lx3gv","./toggle-bool-class.js":"cKdpq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dS2P2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ({ window  })=>(...el)=>window.document.head.append(...el);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5J01n":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ({ window  })=>(tagName, ...opts)=>{
        const el = window.document.createElement(tagName);
        const props = opts.map((opt)=>typeof opt === "string" ? {
                className: opt
            } : opt);
        const funcs = [
            "append",
            "addEventListener"
        ].map((name)=>{
            const orig = el[name].bind(el);
            const func = (...args)=>{
                orig(...args);
                return el;
            };
            return {
                [name]: func
            };
        });
        return Object.assign(el, ...props, ...funcs);
    };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hM1Sp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ({ window  })=>(...args)=>new window.Event(...args);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lx3gv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ({ window  })=>(cb)=>{
        const el = window.document.activeElement;
        cb();
        el.focus();
    };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cKdpq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ()=>(el, className, bool)=>{
        el.classList.remove(`${className}-${Boolean(!bool)}`);
        el.classList.add(`${className}-${Boolean(bool)}`);
    };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hjXAO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _debounceJs = require("./debounce.js");
var _debounceJsDefault = parcelHelpers.interopDefault(_debounceJs);
var _mapValuesJs = require("./map-values.js");
var _mapValuesJsDefault = parcelHelpers.interopDefault(_mapValuesJs);
var _pipeJs = require("./pipe.js");
var _pipeJsDefault = parcelHelpers.interopDefault(_pipeJs);
var _splitAtJs = require("./split-at.js");
var _splitAtJsDefault = parcelHelpers.interopDefault(_splitAtJs);
var _upperFirstJs = require("./upper-first.js");
var _upperFirstJsDefault = parcelHelpers.interopDefault(_upperFirstJs);
exports.default = {
    debounce: (0, _debounceJsDefault.default),
    mapValues: (0, _mapValuesJsDefault.default),
    pipe: (0, _pipeJsDefault.default),
    splitAt: (0, _splitAtJsDefault.default),
    upperFirst: (0, _upperFirstJsDefault.default)
};

},{"./debounce.js":"fhXVO","./map-values.js":"cWWSJ","./pipe.js":"6cUaz","./split-at.js":"jHvhc","./upper-first.js":"isngD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fhXVO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = (func, wait)=>{
    if (!wait) return func;
    let timeout = null;
    return (...args)=>{
        const next = ()=>func(...args);
        clearTimeout(timeout);
        timeout = setTimeout(next, wait);
    };
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cWWSJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = (obj, mapper)=>{
    return Object.entries(obj).reduce((acc, [key, val])=>{
        return Object.assign(acc, {
            [key]: mapper(val)
        });
    }, {});
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6cUaz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = (...funcs)=>(initial)=>funcs.reduce((v, f)=>f(v), initial);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jHvhc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = (str, index, offset)=>{
    return [
        str.slice(0, index),
        str.slice(index + offset)
    ];
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"isngD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = (str)=>str ? str[0].toUpperCase() + str.slice(1) : "";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i3Vn4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _gtagScriptJs = require("./gtag-script.js");
var _gtagScriptJsDefault = parcelHelpers.interopDefault(_gtagScriptJs);
var _vanillaPickerJs = require("./vanilla-picker.js");
var _vanillaPickerJsDefault = parcelHelpers.interopDefault(_vanillaPickerJs);
exports.default = {
    gtagScript: (0, _gtagScriptJsDefault.default),
    vanillaPicker: (0, _vanillaPickerJsDefault.default)
};

},{"./gtag-script.js":"8p0b8","./vanilla-picker.js":"3d8vC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8p0b8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ({ ui , config  })=>()=>{
        const { trackingId  } = config.gtag;
        return ui.el("script", {
            src: `https://www.googletagmanager.com/gtag/js?id=${trackingId}`
        });
    };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3d8vC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _vanillaPicker = require("vanilla-picker");
var _vanillaPickerDefault = parcelHelpers.interopDefault(_vanillaPicker);
exports.default = ({ window  })=>({ parent , color , onChange  })=>{
        new (0, _vanillaPickerDefault.default)({
            window,
            parent,
            color,
            onChange
        });
        return parent;
    };

},{"vanilla-picker":"2CfBK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lQHWO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _gtagJs = require("./gtag.js");
var _gtagJsDefault = parcelHelpers.interopDefault(_gtagJs);
var _sentryJs = require("./sentry.js");
var _sentryJsDefault = parcelHelpers.interopDefault(_sentryJs);
exports.default = {
    gtag: (0, _gtagJsDefault.default),
    sentry: (0, _sentryJsDefault.default)
};

},{"./gtag.js":"e57mG","./sentry.js":"85XBr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e57mG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/* eslint-disable */ exports.default = ({ config , io , window  })=>{
    const { trackingId , enabled  } = config.gtag;
    const initalise = ()=>{
        window.dataLayer = [];
        window[`ga-disable-${trackingId}`] = !enabled;
        gtag("js", io.date());
        gtag("config", trackingId);
    };
    function gtag() {
        if (!window.dataLayer) initalise();
        window.dataLayer.push(arguments);
    }
    return gtag;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"85XBr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _browser = require("@sentry/browser");
exports.default = ({ config  })=>{
    if (_browser.init) _browser.init(config.sentry);
    return _browser;
};

},{"@sentry/browser":"lFFil","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lFFil":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FunctionToString", ()=>(0, _core.FunctionToString));
parcelHelpers.export(exports, "Hub", ()=>(0, _core.Hub));
parcelHelpers.export(exports, "InboundFilters", ()=>(0, _core.InboundFilters));
parcelHelpers.export(exports, "SDK_VERSION", ()=>(0, _core.SDK_VERSION));
parcelHelpers.export(exports, "Scope", ()=>(0, _core.Scope));
parcelHelpers.export(exports, "addBreadcrumb", ()=>(0, _core.addBreadcrumb));
parcelHelpers.export(exports, "addGlobalEventProcessor", ()=>(0, _core.addGlobalEventProcessor));
parcelHelpers.export(exports, "captureEvent", ()=>(0, _core.captureEvent));
parcelHelpers.export(exports, "captureException", ()=>(0, _core.captureException));
parcelHelpers.export(exports, "captureMessage", ()=>(0, _core.captureMessage));
parcelHelpers.export(exports, "configureScope", ()=>(0, _core.configureScope));
parcelHelpers.export(exports, "createTransport", ()=>(0, _core.createTransport));
parcelHelpers.export(exports, "getCurrentHub", ()=>(0, _core.getCurrentHub));
parcelHelpers.export(exports, "getHubFromCarrier", ()=>(0, _core.getHubFromCarrier));
parcelHelpers.export(exports, "makeMain", ()=>(0, _core.makeMain));
parcelHelpers.export(exports, "setContext", ()=>(0, _core.setContext));
parcelHelpers.export(exports, "setExtra", ()=>(0, _core.setExtra));
parcelHelpers.export(exports, "setExtras", ()=>(0, _core.setExtras));
parcelHelpers.export(exports, "setTag", ()=>(0, _core.setTag));
parcelHelpers.export(exports, "setTags", ()=>(0, _core.setTags));
parcelHelpers.export(exports, "setUser", ()=>(0, _core.setUser));
parcelHelpers.export(exports, "startTransaction", ()=>(0, _core.startTransaction));
parcelHelpers.export(exports, "withScope", ()=>(0, _core.withScope));
parcelHelpers.export(exports, "BrowserClient", ()=>(0, _clientJs.BrowserClient));
parcelHelpers.export(exports, "makeFetchTransport", ()=>(0, _fetchJs.makeFetchTransport));
parcelHelpers.export(exports, "makeXHRTransport", ()=>(0, _xhrJs.makeXHRTransport));
parcelHelpers.export(exports, "chromeStackLineParser", ()=>(0, _stackParsersJs.chromeStackLineParser));
parcelHelpers.export(exports, "defaultStackLineParsers", ()=>(0, _stackParsersJs.defaultStackLineParsers));
parcelHelpers.export(exports, "defaultStackParser", ()=>(0, _stackParsersJs.defaultStackParser));
parcelHelpers.export(exports, "geckoStackLineParser", ()=>(0, _stackParsersJs.geckoStackLineParser));
parcelHelpers.export(exports, "opera10StackLineParser", ()=>(0, _stackParsersJs.opera10StackLineParser));
parcelHelpers.export(exports, "opera11StackLineParser", ()=>(0, _stackParsersJs.opera11StackLineParser));
parcelHelpers.export(exports, "winjsStackLineParser", ()=>(0, _stackParsersJs.winjsStackLineParser));
parcelHelpers.export(exports, "close", ()=>(0, _sdkJs.close));
parcelHelpers.export(exports, "defaultIntegrations", ()=>(0, _sdkJs.defaultIntegrations));
parcelHelpers.export(exports, "flush", ()=>(0, _sdkJs.flush));
parcelHelpers.export(exports, "forceLoad", ()=>(0, _sdkJs.forceLoad));
parcelHelpers.export(exports, "init", ()=>(0, _sdkJs.init));
parcelHelpers.export(exports, "lastEventId", ()=>(0, _sdkJs.lastEventId));
parcelHelpers.export(exports, "onLoad", ()=>(0, _sdkJs.onLoad));
parcelHelpers.export(exports, "showReportDialog", ()=>(0, _sdkJs.showReportDialog));
parcelHelpers.export(exports, "wrap", ()=>(0, _sdkJs.wrap));
parcelHelpers.export(exports, "GlobalHandlers", ()=>(0, _globalhandlersJs.GlobalHandlers));
parcelHelpers.export(exports, "TryCatch", ()=>(0, _trycatchJs.TryCatch));
parcelHelpers.export(exports, "Breadcrumbs", ()=>(0, _breadcrumbsJs.Breadcrumbs));
parcelHelpers.export(exports, "LinkedErrors", ()=>(0, _linkederrorsJs.LinkedErrors));
parcelHelpers.export(exports, "HttpContext", ()=>(0, _httpcontextJs.HttpContext));
parcelHelpers.export(exports, "Dedupe", ()=>(0, _dedupeJs.Dedupe));
parcelHelpers.export(exports, "Integrations", ()=>INTEGRATIONS);
var _exportsJs = require("./exports.js");
var _core = require("@sentry/core");
var _utils = require("@sentry/utils");
var _indexJs = require("./integrations/index.js");
var _clientJs = require("./client.js");
var _fetchJs = require("./transports/fetch.js");
var _xhrJs = require("./transports/xhr.js");
var _stackParsersJs = require("./stack-parsers.js");
var _sdkJs = require("./sdk.js");
var _globalhandlersJs = require("./integrations/globalhandlers.js");
var _trycatchJs = require("./integrations/trycatch.js");
var _breadcrumbsJs = require("./integrations/breadcrumbs.js");
var _linkederrorsJs = require("./integrations/linkederrors.js");
var _httpcontextJs = require("./integrations/httpcontext.js");
var _dedupeJs = require("./integrations/dedupe.js");
let windowIntegrations = {};
// This block is needed to add compatibility with the integrations packages when used with a CDN
var _window = (0, _utils.getGlobalObject)();
if (_window.Sentry && _window.Sentry.Integrations) windowIntegrations = _window.Sentry.Integrations;
var INTEGRATIONS = {
    ...windowIntegrations,
    ...(0, _core.Integrations),
    ..._indexJs
};

},{"./exports.js":"85sHY","@sentry/core":"bWm3H","@sentry/utils":"5auop","./integrations/index.js":"hvGYe","./client.js":"4xM5l","./transports/fetch.js":"4jMAn","./transports/xhr.js":"9GDaB","./stack-parsers.js":"g58DI","./sdk.js":"2StSn","./integrations/globalhandlers.js":"9vNC8","./integrations/trycatch.js":"iBoZn","./integrations/breadcrumbs.js":"bPO5J","./integrations/linkederrors.js":"4LOto","./integrations/httpcontext.js":"wP6GD","./integrations/dedupe.js":"gb2cH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"85sHY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FunctionToString", ()=>(0, _core.FunctionToString));
parcelHelpers.export(exports, "Hub", ()=>(0, _core.Hub));
parcelHelpers.export(exports, "InboundFilters", ()=>(0, _core.InboundFilters));
parcelHelpers.export(exports, "SDK_VERSION", ()=>(0, _core.SDK_VERSION));
parcelHelpers.export(exports, "Scope", ()=>(0, _core.Scope));
parcelHelpers.export(exports, "addBreadcrumb", ()=>(0, _core.addBreadcrumb));
parcelHelpers.export(exports, "addGlobalEventProcessor", ()=>(0, _core.addGlobalEventProcessor));
parcelHelpers.export(exports, "captureEvent", ()=>(0, _core.captureEvent));
parcelHelpers.export(exports, "captureException", ()=>(0, _core.captureException));
parcelHelpers.export(exports, "captureMessage", ()=>(0, _core.captureMessage));
parcelHelpers.export(exports, "configureScope", ()=>(0, _core.configureScope));
parcelHelpers.export(exports, "createTransport", ()=>(0, _core.createTransport));
parcelHelpers.export(exports, "getCurrentHub", ()=>(0, _core.getCurrentHub));
parcelHelpers.export(exports, "getHubFromCarrier", ()=>(0, _core.getHubFromCarrier));
parcelHelpers.export(exports, "makeMain", ()=>(0, _core.makeMain));
parcelHelpers.export(exports, "setContext", ()=>(0, _core.setContext));
parcelHelpers.export(exports, "setExtra", ()=>(0, _core.setExtra));
parcelHelpers.export(exports, "setExtras", ()=>(0, _core.setExtras));
parcelHelpers.export(exports, "setTag", ()=>(0, _core.setTag));
parcelHelpers.export(exports, "setTags", ()=>(0, _core.setTags));
parcelHelpers.export(exports, "setUser", ()=>(0, _core.setUser));
parcelHelpers.export(exports, "startTransaction", ()=>(0, _core.startTransaction));
parcelHelpers.export(exports, "withScope", ()=>(0, _core.withScope));
parcelHelpers.export(exports, "BrowserClient", ()=>(0, _clientJs.BrowserClient));
parcelHelpers.export(exports, "chromeStackLineParser", ()=>(0, _stackParsersJs.chromeStackLineParser));
parcelHelpers.export(exports, "defaultStackLineParsers", ()=>(0, _stackParsersJs.defaultStackLineParsers));
parcelHelpers.export(exports, "defaultStackParser", ()=>(0, _stackParsersJs.defaultStackParser));
parcelHelpers.export(exports, "geckoStackLineParser", ()=>(0, _stackParsersJs.geckoStackLineParser));
parcelHelpers.export(exports, "opera10StackLineParser", ()=>(0, _stackParsersJs.opera10StackLineParser));
parcelHelpers.export(exports, "opera11StackLineParser", ()=>(0, _stackParsersJs.opera11StackLineParser));
parcelHelpers.export(exports, "winjsStackLineParser", ()=>(0, _stackParsersJs.winjsStackLineParser));
parcelHelpers.export(exports, "close", ()=>(0, _sdkJs.close));
parcelHelpers.export(exports, "defaultIntegrations", ()=>(0, _sdkJs.defaultIntegrations));
parcelHelpers.export(exports, "flush", ()=>(0, _sdkJs.flush));
parcelHelpers.export(exports, "forceLoad", ()=>(0, _sdkJs.forceLoad));
parcelHelpers.export(exports, "init", ()=>(0, _sdkJs.init));
parcelHelpers.export(exports, "lastEventId", ()=>(0, _sdkJs.lastEventId));
parcelHelpers.export(exports, "onLoad", ()=>(0, _sdkJs.onLoad));
parcelHelpers.export(exports, "showReportDialog", ()=>(0, _sdkJs.showReportDialog));
parcelHelpers.export(exports, "wrap", ()=>(0, _sdkJs.wrap));
var _indexJs = require("./transports/index.js");
var _indexJs1 = require("./integrations/index.js");
var _core = require("@sentry/core");
var _clientJs = require("./client.js");
var _stackParsersJs = require("./stack-parsers.js");
var _sdkJs = require("./sdk.js");

},{"./transports/index.js":"kqSAw","./integrations/index.js":"hvGYe","@sentry/core":"bWm3H","./client.js":"4xM5l","./stack-parsers.js":"g58DI","./sdk.js":"2StSn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kqSAw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "makeFetchTransport", ()=>(0, _fetchJs.makeFetchTransport));
parcelHelpers.export(exports, "makeXHRTransport", ()=>(0, _xhrJs.makeXHRTransport));
var _fetchJs = require("./fetch.js");
var _xhrJs = require("./xhr.js");

},{"./fetch.js":"4jMAn","./xhr.js":"9GDaB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4jMAn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "makeFetchTransport", ()=>makeFetchTransport);
var _core = require("@sentry/core");
var _utilsJs = require("./utils.js");
/**
 * Creates a Transport that uses the Fetch API to send events to Sentry.
 */ function makeFetchTransport(options, nativeFetch = (0, _utilsJs.getNativeFetchImplementation)()) {
    function makeRequest(request) {
        var requestOptions = {
            body: request.body,
            method: "POST",
            referrerPolicy: "origin",
            headers: options.headers,
            ...options.fetchOptions
        };
        return nativeFetch(options.url, requestOptions).then((response)=>({
                statusCode: response.status,
                headers: {
                    "x-sentry-rate-limits": response.headers.get("X-Sentry-Rate-Limits"),
                    "retry-after": response.headers.get("Retry-After")
                }
            }));
    }
    return (0, _core.createTransport)(options, makeRequest);
}

},{"@sentry/core":"bWm3H","./utils.js":"27QKk","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bWm3H":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Hub", ()=>(0, _hub.Hub));
parcelHelpers.export(exports, "Scope", ()=>(0, _hub.Scope));
parcelHelpers.export(exports, "addBreadcrumb", ()=>(0, _hub.addBreadcrumb));
parcelHelpers.export(exports, "addGlobalEventProcessor", ()=>(0, _hub.addGlobalEventProcessor));
parcelHelpers.export(exports, "captureEvent", ()=>(0, _hub.captureEvent));
parcelHelpers.export(exports, "captureException", ()=>(0, _hub.captureException));
parcelHelpers.export(exports, "captureMessage", ()=>(0, _hub.captureMessage));
parcelHelpers.export(exports, "configureScope", ()=>(0, _hub.configureScope));
parcelHelpers.export(exports, "getCurrentHub", ()=>(0, _hub.getCurrentHub));
parcelHelpers.export(exports, "getHubFromCarrier", ()=>(0, _hub.getHubFromCarrier));
parcelHelpers.export(exports, "makeMain", ()=>(0, _hub.makeMain));
parcelHelpers.export(exports, "setContext", ()=>(0, _hub.setContext));
parcelHelpers.export(exports, "setExtra", ()=>(0, _hub.setExtra));
parcelHelpers.export(exports, "setExtras", ()=>(0, _hub.setExtras));
parcelHelpers.export(exports, "setTag", ()=>(0, _hub.setTag));
parcelHelpers.export(exports, "setTags", ()=>(0, _hub.setTags));
parcelHelpers.export(exports, "setUser", ()=>(0, _hub.setUser));
parcelHelpers.export(exports, "startTransaction", ()=>(0, _hub.startTransaction));
parcelHelpers.export(exports, "withScope", ()=>(0, _hub.withScope));
parcelHelpers.export(exports, "getEnvelopeEndpointWithUrlEncodedAuth", ()=>(0, _apiJs.getEnvelopeEndpointWithUrlEncodedAuth));
parcelHelpers.export(exports, "getReportDialogEndpoint", ()=>(0, _apiJs.getReportDialogEndpoint));
parcelHelpers.export(exports, "BaseClient", ()=>(0, _baseclientJs.BaseClient));
parcelHelpers.export(exports, "initAndBind", ()=>(0, _sdkJs.initAndBind));
parcelHelpers.export(exports, "createTransport", ()=>(0, _baseJs.createTransport));
parcelHelpers.export(exports, "SDK_VERSION", ()=>(0, _versionJs.SDK_VERSION));
parcelHelpers.export(exports, "getIntegrationsToSetup", ()=>(0, _integrationJs.getIntegrationsToSetup));
parcelHelpers.export(exports, "Integrations", ()=>_indexJs);
parcelHelpers.export(exports, "FunctionToString", ()=>(0, _functiontostringJs.FunctionToString));
parcelHelpers.export(exports, "InboundFilters", ()=>(0, _inboundfiltersJs.InboundFilters));
var _indexJs = require("./integrations/index.js");
var _hub = require("@sentry/hub");
var _apiJs = require("./api.js");
var _baseclientJs = require("./baseclient.js");
var _sdkJs = require("./sdk.js");
var _baseJs = require("./transports/base.js");
var _versionJs = require("./version.js");
var _integrationJs = require("./integration.js");
var _functiontostringJs = require("./integrations/functiontostring.js");
var _inboundfiltersJs = require("./integrations/inboundfilters.js");

},{"./integrations/index.js":"kSCSG","@sentry/hub":"cqx4p","./api.js":"lBZIO","./baseclient.js":"blPmr","./sdk.js":"c4En9","./transports/base.js":"gOVxC","./version.js":"1zT0P","./integration.js":"5FQsm","./integrations/functiontostring.js":"bk1rH","./integrations/inboundfilters.js":"8Oqww","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kSCSG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FunctionToString", ()=>(0, _functiontostringJs.FunctionToString));
parcelHelpers.export(exports, "InboundFilters", ()=>(0, _inboundfiltersJs.InboundFilters));
var _functiontostringJs = require("./functiontostring.js");
var _inboundfiltersJs = require("./inboundfilters.js");

},{"./functiontostring.js":"bk1rH","./inboundfilters.js":"8Oqww","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bk1rH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FunctionToString", ()=>FunctionToString);
var _utils = require("@sentry/utils");
let originalFunctionToString;
/** Patch toString calls to return proper name for wrapped functions */ class FunctionToString {
    constructor(){
        FunctionToString.prototype.__init.call(this);
    }
    /**
   * @inheritDoc
   */ static __initStatic() {
        this.id = "FunctionToString";
    }
    /**
   * @inheritDoc
   */ __init() {
        this.name = FunctionToString.id;
    }
    /**
   * @inheritDoc
   */ setupOnce() {
        originalFunctionToString = Function.prototype.toString;
        Function.prototype.toString = function(...args) {
            var context = (0, _utils.getOriginalFunction)(this) || this;
            return originalFunctionToString.apply(context, args);
        };
    }
}
FunctionToString.__initStatic();

},{"@sentry/utils":"5auop","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5auop":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getLocationHref", ()=>(0, _browserJs.getLocationHref));
parcelHelpers.export(exports, "htmlTreeAsString", ()=>(0, _browserJs.htmlTreeAsString));
parcelHelpers.export(exports, "dsnToString", ()=>(0, _dsnJs.dsnToString));
parcelHelpers.export(exports, "extensionRelayDSN", ()=>(0, _dsnJs.extensionRelayDSN));
parcelHelpers.export(exports, "makeDsn", ()=>(0, _dsnJs.makeDsn));
parcelHelpers.export(exports, "SentryError", ()=>(0, _errorJs.SentryError));
parcelHelpers.export(exports, "getGlobalObject", ()=>(0, _globalJs.getGlobalObject));
parcelHelpers.export(exports, "getGlobalSingleton", ()=>(0, _globalJs.getGlobalSingleton));
parcelHelpers.export(exports, "addInstrumentationHandler", ()=>(0, _instrumentJs.addInstrumentationHandler));
parcelHelpers.export(exports, "isDOMError", ()=>(0, _isJs.isDOMError));
parcelHelpers.export(exports, "isDOMException", ()=>(0, _isJs.isDOMException));
parcelHelpers.export(exports, "isElement", ()=>(0, _isJs.isElement));
parcelHelpers.export(exports, "isError", ()=>(0, _isJs.isError));
parcelHelpers.export(exports, "isErrorEvent", ()=>(0, _isJs.isErrorEvent));
parcelHelpers.export(exports, "isEvent", ()=>(0, _isJs.isEvent));
parcelHelpers.export(exports, "isInstanceOf", ()=>(0, _isJs.isInstanceOf));
parcelHelpers.export(exports, "isNaN", ()=>(0, _isJs.isNaN));
parcelHelpers.export(exports, "isPlainObject", ()=>(0, _isJs.isPlainObject));
parcelHelpers.export(exports, "isPrimitive", ()=>(0, _isJs.isPrimitive));
parcelHelpers.export(exports, "isRegExp", ()=>(0, _isJs.isRegExp));
parcelHelpers.export(exports, "isString", ()=>(0, _isJs.isString));
parcelHelpers.export(exports, "isSyntheticEvent", ()=>(0, _isJs.isSyntheticEvent));
parcelHelpers.export(exports, "isThenable", ()=>(0, _isJs.isThenable));
parcelHelpers.export(exports, "CONSOLE_LEVELS", ()=>(0, _loggerJs.CONSOLE_LEVELS));
parcelHelpers.export(exports, "consoleSandbox", ()=>(0, _loggerJs.consoleSandbox));
parcelHelpers.export(exports, "logger", ()=>(0, _loggerJs.logger));
parcelHelpers.export(exports, "memoBuilder", ()=>(0, _memoJs.memoBuilder));
parcelHelpers.export(exports, "addContextToFrame", ()=>(0, _miscJs.addContextToFrame));
parcelHelpers.export(exports, "addExceptionMechanism", ()=>(0, _miscJs.addExceptionMechanism));
parcelHelpers.export(exports, "addExceptionTypeValue", ()=>(0, _miscJs.addExceptionTypeValue));
parcelHelpers.export(exports, "checkOrSetAlreadyCaught", ()=>(0, _miscJs.checkOrSetAlreadyCaught));
parcelHelpers.export(exports, "getEventDescription", ()=>(0, _miscJs.getEventDescription));
parcelHelpers.export(exports, "parseSemver", ()=>(0, _miscJs.parseSemver));
parcelHelpers.export(exports, "parseUrl", ()=>(0, _miscJs.parseUrl));
parcelHelpers.export(exports, "stripUrlQueryAndFragment", ()=>(0, _miscJs.stripUrlQueryAndFragment));
parcelHelpers.export(exports, "uuid4", ()=>(0, _miscJs.uuid4));
parcelHelpers.export(exports, "dynamicRequire", ()=>(0, _nodeJs.dynamicRequire));
parcelHelpers.export(exports, "isNodeEnv", ()=>(0, _nodeJs.isNodeEnv));
parcelHelpers.export(exports, "loadModule", ()=>(0, _nodeJs.loadModule));
parcelHelpers.export(exports, "normalize", ()=>(0, _normalizeJs.normalize));
parcelHelpers.export(exports, "normalizeToSize", ()=>(0, _normalizeJs.normalizeToSize));
parcelHelpers.export(exports, "walk", ()=>(0, _normalizeJs.walk));
parcelHelpers.export(exports, "addNonEnumerableProperty", ()=>(0, _objectJs.addNonEnumerableProperty));
parcelHelpers.export(exports, "convertToPlainObject", ()=>(0, _objectJs.convertToPlainObject));
parcelHelpers.export(exports, "dropUndefinedKeys", ()=>(0, _objectJs.dropUndefinedKeys));
parcelHelpers.export(exports, "extractExceptionKeysForMessage", ()=>(0, _objectJs.extractExceptionKeysForMessage));
parcelHelpers.export(exports, "fill", ()=>(0, _objectJs.fill));
parcelHelpers.export(exports, "getOriginalFunction", ()=>(0, _objectJs.getOriginalFunction));
parcelHelpers.export(exports, "markFunctionWrapped", ()=>(0, _objectJs.markFunctionWrapped));
parcelHelpers.export(exports, "objectify", ()=>(0, _objectJs.objectify));
parcelHelpers.export(exports, "urlEncode", ()=>(0, _objectJs.urlEncode));
parcelHelpers.export(exports, "basename", ()=>(0, _pathJs.basename));
parcelHelpers.export(exports, "dirname", ()=>(0, _pathJs.dirname));
parcelHelpers.export(exports, "isAbsolute", ()=>(0, _pathJs.isAbsolute));
parcelHelpers.export(exports, "join", ()=>(0, _pathJs.join));
parcelHelpers.export(exports, "normalizePath", ()=>(0, _pathJs.normalizePath));
parcelHelpers.export(exports, "relative", ()=>(0, _pathJs.relative));
parcelHelpers.export(exports, "resolve", ()=>(0, _pathJs.resolve));
parcelHelpers.export(exports, "makePromiseBuffer", ()=>(0, _promisebufferJs.makePromiseBuffer));
parcelHelpers.export(exports, "addRequestDataToEvent", ()=>(0, _requestdataJs.addRequestDataToEvent));
parcelHelpers.export(exports, "addRequestDataToTransaction", ()=>(0, _requestdataJs.addRequestDataToTransaction));
parcelHelpers.export(exports, "extractPathForTransaction", ()=>(0, _requestdataJs.extractPathForTransaction));
parcelHelpers.export(exports, "extractRequestData", ()=>(0, _requestdataJs.extractRequestData));
parcelHelpers.export(exports, "severityFromString", ()=>(0, _severityJs.severityFromString));
parcelHelpers.export(exports, "severityLevelFromString", ()=>(0, _severityJs.severityLevelFromString));
parcelHelpers.export(exports, "validSeverityLevels", ()=>(0, _severityJs.validSeverityLevels));
parcelHelpers.export(exports, "createStackParser", ()=>(0, _stacktraceJs.createStackParser));
parcelHelpers.export(exports, "getFunctionName", ()=>(0, _stacktraceJs.getFunctionName));
parcelHelpers.export(exports, "nodeStackLineParser", ()=>(0, _stacktraceJs.nodeStackLineParser));
parcelHelpers.export(exports, "stackParserFromStackParserOptions", ()=>(0, _stacktraceJs.stackParserFromStackParserOptions));
parcelHelpers.export(exports, "stripSentryFramesAndReverse", ()=>(0, _stacktraceJs.stripSentryFramesAndReverse));
parcelHelpers.export(exports, "escapeStringForRegex", ()=>(0, _stringJs.escapeStringForRegex));
parcelHelpers.export(exports, "isMatchingPattern", ()=>(0, _stringJs.isMatchingPattern));
parcelHelpers.export(exports, "safeJoin", ()=>(0, _stringJs.safeJoin));
parcelHelpers.export(exports, "snipLine", ()=>(0, _stringJs.snipLine));
parcelHelpers.export(exports, "truncate", ()=>(0, _stringJs.truncate));
parcelHelpers.export(exports, "isNativeFetch", ()=>(0, _supportsJs.isNativeFetch));
parcelHelpers.export(exports, "supportsDOMError", ()=>(0, _supportsJs.supportsDOMError));
parcelHelpers.export(exports, "supportsDOMException", ()=>(0, _supportsJs.supportsDOMException));
parcelHelpers.export(exports, "supportsErrorEvent", ()=>(0, _supportsJs.supportsErrorEvent));
parcelHelpers.export(exports, "supportsFetch", ()=>(0, _supportsJs.supportsFetch));
parcelHelpers.export(exports, "supportsHistory", ()=>(0, _supportsJs.supportsHistory));
parcelHelpers.export(exports, "supportsNativeFetch", ()=>(0, _supportsJs.supportsNativeFetch));
parcelHelpers.export(exports, "supportsReferrerPolicy", ()=>(0, _supportsJs.supportsReferrerPolicy));
parcelHelpers.export(exports, "supportsReportingObserver", ()=>(0, _supportsJs.supportsReportingObserver));
parcelHelpers.export(exports, "SyncPromise", ()=>(0, _syncpromiseJs.SyncPromise));
parcelHelpers.export(exports, "rejectedSyncPromise", ()=>(0, _syncpromiseJs.rejectedSyncPromise));
parcelHelpers.export(exports, "resolvedSyncPromise", ()=>(0, _syncpromiseJs.resolvedSyncPromise));
parcelHelpers.export(exports, "_browserPerformanceTimeOriginMode", ()=>(0, _timeJs._browserPerformanceTimeOriginMode));
parcelHelpers.export(exports, "browserPerformanceTimeOrigin", ()=>(0, _timeJs.browserPerformanceTimeOrigin));
parcelHelpers.export(exports, "dateTimestampInSeconds", ()=>(0, _timeJs.dateTimestampInSeconds));
parcelHelpers.export(exports, "timestampInSeconds", ()=>(0, _timeJs.timestampInSeconds));
parcelHelpers.export(exports, "timestampWithMs", ()=>(0, _timeJs.timestampWithMs));
parcelHelpers.export(exports, "usingPerformanceAPI", ()=>(0, _timeJs.usingPerformanceAPI));
parcelHelpers.export(exports, "TRACEPARENT_REGEXP", ()=>(0, _tracingJs.TRACEPARENT_REGEXP));
parcelHelpers.export(exports, "extractTraceparentData", ()=>(0, _tracingJs.extractTraceparentData));
parcelHelpers.export(exports, "isBrowserBundle", ()=>(0, _envJs.isBrowserBundle));
parcelHelpers.export(exports, "addItemToEnvelope", ()=>(0, _envelopeJs.addItemToEnvelope));
parcelHelpers.export(exports, "createAttachmentEnvelopeItem", ()=>(0, _envelopeJs.createAttachmentEnvelopeItem));
parcelHelpers.export(exports, "createEnvelope", ()=>(0, _envelopeJs.createEnvelope));
parcelHelpers.export(exports, "envelopeItemTypeToDataCategory", ()=>(0, _envelopeJs.envelopeItemTypeToDataCategory));
parcelHelpers.export(exports, "forEachEnvelopeItem", ()=>(0, _envelopeJs.forEachEnvelopeItem));
parcelHelpers.export(exports, "serializeEnvelope", ()=>(0, _envelopeJs.serializeEnvelope));
parcelHelpers.export(exports, "createClientReportEnvelope", ()=>(0, _clientreportJs.createClientReportEnvelope));
parcelHelpers.export(exports, "DEFAULT_RETRY_AFTER", ()=>(0, _ratelimitJs.DEFAULT_RETRY_AFTER));
parcelHelpers.export(exports, "disabledUntil", ()=>(0, _ratelimitJs.disabledUntil));
parcelHelpers.export(exports, "isRateLimited", ()=>(0, _ratelimitJs.isRateLimited));
parcelHelpers.export(exports, "parseRetryAfterHeader", ()=>(0, _ratelimitJs.parseRetryAfterHeader));
parcelHelpers.export(exports, "updateRateLimits", ()=>(0, _ratelimitJs.updateRateLimits));
parcelHelpers.export(exports, "BAGGAGE_HEADER_NAME", ()=>(0, _baggageJs.BAGGAGE_HEADER_NAME));
parcelHelpers.export(exports, "MAX_BAGGAGE_STRING_LENGTH", ()=>(0, _baggageJs.MAX_BAGGAGE_STRING_LENGTH));
parcelHelpers.export(exports, "SENTRY_BAGGAGE_KEY_PREFIX", ()=>(0, _baggageJs.SENTRY_BAGGAGE_KEY_PREFIX));
parcelHelpers.export(exports, "SENTRY_BAGGAGE_KEY_PREFIX_REGEX", ()=>(0, _baggageJs.SENTRY_BAGGAGE_KEY_PREFIX_REGEX));
parcelHelpers.export(exports, "createBaggage", ()=>(0, _baggageJs.createBaggage));
parcelHelpers.export(exports, "getBaggageValue", ()=>(0, _baggageJs.getBaggageValue));
parcelHelpers.export(exports, "getSentryBaggageItems", ()=>(0, _baggageJs.getSentryBaggageItems));
parcelHelpers.export(exports, "getThirdPartyBaggage", ()=>(0, _baggageJs.getThirdPartyBaggage));
parcelHelpers.export(exports, "isBaggageMutable", ()=>(0, _baggageJs.isBaggageMutable));
parcelHelpers.export(exports, "isSentryBaggageEmpty", ()=>(0, _baggageJs.isSentryBaggageEmpty));
parcelHelpers.export(exports, "mergeAndSerializeBaggage", ()=>(0, _baggageJs.mergeAndSerializeBaggage));
parcelHelpers.export(exports, "parseBaggageHeader", ()=>(0, _baggageJs.parseBaggageHeader));
parcelHelpers.export(exports, "parseBaggageSetMutability", ()=>(0, _baggageJs.parseBaggageSetMutability));
parcelHelpers.export(exports, "serializeBaggage", ()=>(0, _baggageJs.serializeBaggage));
parcelHelpers.export(exports, "setBaggageImmutable", ()=>(0, _baggageJs.setBaggageImmutable));
parcelHelpers.export(exports, "setBaggageValue", ()=>(0, _baggageJs.setBaggageValue));
var _browserJs = require("./browser.js");
var _dsnJs = require("./dsn.js");
var _errorJs = require("./error.js");
var _globalJs = require("./global.js");
var _instrumentJs = require("./instrument.js");
var _isJs = require("./is.js");
var _loggerJs = require("./logger.js");
var _memoJs = require("./memo.js");
var _miscJs = require("./misc.js");
var _nodeJs = require("./node.js");
var _normalizeJs = require("./normalize.js");
var _objectJs = require("./object.js");
var _pathJs = require("./path.js");
var _promisebufferJs = require("./promisebuffer.js");
var _requestdataJs = require("./requestdata.js");
var _severityJs = require("./severity.js");
var _stacktraceJs = require("./stacktrace.js");
var _stringJs = require("./string.js");
var _supportsJs = require("./supports.js");
var _syncpromiseJs = require("./syncpromise.js");
var _timeJs = require("./time.js");
var _tracingJs = require("./tracing.js");
var _envJs = require("./env.js");
var _envelopeJs = require("./envelope.js");
var _clientreportJs = require("./clientreport.js");
var _ratelimitJs = require("./ratelimit.js");
var _baggageJs = require("./baggage.js");

},{"./browser.js":"4zy0v","./dsn.js":"jwVZL","./error.js":"1RnP9","./global.js":"8DShR","./instrument.js":"gOTR7","./is.js":"451Wr","./logger.js":"3LvdY","./memo.js":"fYv2G","./misc.js":"bgT10","./node.js":"2Azyo","./normalize.js":"cuPkr","./object.js":"56C4m","./path.js":false,"./promisebuffer.js":"lufcL","./requestdata.js":false,"./severity.js":"fOAJW","./stacktrace.js":"2Z3L5","./string.js":"6VoCN","./supports.js":"6y74r","./syncpromise.js":"cSJ3y","./time.js":"bLEdM","./tracing.js":false,"./env.js":"8n70v","./envelope.js":"4EBuq","./clientreport.js":"f7LYw","./ratelimit.js":"8cwq7","./baggage.js":"9xioe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4zy0v":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getLocationHref", ()=>getLocationHref);
parcelHelpers.export(exports, "htmlTreeAsString", ()=>htmlTreeAsString);
var _globalJs = require("./global.js");
var _isJs = require("./is.js");
/**
 * Given a child DOM element, returns a query-selector statement describing that
 * and its ancestors
 * e.g. [HTMLElement] => body > div > input#foo.btn[name=baz]
 * @returns generated DOM path
 */ function htmlTreeAsString(elem, keyAttrs) {
    // try/catch both:
    // - accessing event.target (see getsentry/raven-js#838, #768)
    // - `htmlTreeAsString` because it's complex, and just accessing the DOM incorrectly
    // - can throw an exception in some circumstances.
    try {
        let currentElem = elem;
        var MAX_TRAVERSE_HEIGHT = 5;
        var MAX_OUTPUT_LEN = 80;
        var out = [];
        let height = 0;
        let len = 0;
        var separator = " > ";
        var sepLength = separator.length;
        let nextStr;
        while(currentElem && (height++) < MAX_TRAVERSE_HEIGHT){
            nextStr = _htmlElementAsString(currentElem, keyAttrs);
            // bail out if
            // - nextStr is the 'html' element
            // - the length of the string that would be created exceeds MAX_OUTPUT_LEN
            //   (ignore this limit if we are on the first iteration)
            if (nextStr === "html" || height > 1 && len + out.length * sepLength + nextStr.length >= MAX_OUTPUT_LEN) break;
            out.push(nextStr);
            len += nextStr.length;
            currentElem = currentElem.parentNode;
        }
        return out.reverse().join(separator);
    } catch (_oO) {
        return "<unknown>";
    }
}
/**
 * Returns a simple, query-selector representation of a DOM element
 * e.g. [HTMLElement] => input#foo.btn[name=baz]
 * @returns generated DOM path
 */ function _htmlElementAsString(el, keyAttrs) {
    var elem = el;
    var out = [];
    let className;
    let classes;
    let key;
    let attr;
    let i;
    if (!elem || !elem.tagName) return "";
    out.push(elem.tagName.toLowerCase());
    // Pairs of attribute keys defined in `serializeAttribute` and their values on element.
    var keyAttrPairs = keyAttrs && keyAttrs.length ? keyAttrs.filter((keyAttr)=>elem.getAttribute(keyAttr)).map((keyAttr)=>[
            keyAttr,
            elem.getAttribute(keyAttr)
        ]) : null;
    if (keyAttrPairs && keyAttrPairs.length) keyAttrPairs.forEach((keyAttrPair)=>{
        out.push(`[${keyAttrPair[0]}="${keyAttrPair[1]}"]`);
    });
    else {
        if (elem.id) out.push(`#${elem.id}`);
        className = elem.className;
        if (className && (0, _isJs.isString)(className)) {
            classes = className.split(/\s+/);
            for(i = 0; i < classes.length; i++)out.push(`.${classes[i]}`);
        }
    }
    var allowedAttrs = [
        "type",
        "name",
        "title",
        "alt"
    ];
    for(i = 0; i < allowedAttrs.length; i++){
        key = allowedAttrs[i];
        attr = elem.getAttribute(key);
        if (attr) out.push(`[${key}="${attr}"]`);
    }
    return out.join("");
}
/**
 * A safe form of location.href
 */ function getLocationHref() {
    var global = (0, _globalJs.getGlobalObject)();
    try {
        return global.document.location.href;
    } catch (oO) {
        return "";
    }
}

},{"./global.js":"8DShR","./is.js":"451Wr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8DShR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getGlobalObject", ()=>getGlobalObject);
parcelHelpers.export(exports, "getGlobalSingleton", ()=>getGlobalSingleton);
var _nodeJs = require("./node.js");
var global = arguments[3];
/** Internal */ var fallbackGlobalObject = {};
/**
 * Safely get global scope object
 *
 * @returns Global scope object
 */ function getGlobalObject() {
    return (0, _nodeJs.isNodeEnv)() ? global : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : fallbackGlobalObject;
}
/**
 * Returns a global singleton contained in the global `__SENTRY__` object.
 *
 * If the singleton doesn't already exist in `__SENTRY__`, it will be created using the given factory
 * function and added to the `__SENTRY__` object.
 *
 * @param name name of the global singleton on __SENTRY__
 * @param creator creator Factory function to create the singleton if it doesn't already exist on `__SENTRY__`
 * @param obj (Optional) The global object on which to look for `__SENTRY__`, if not `getGlobalObject`'s return value
 * @returns the singleton
 */ function getGlobalSingleton(name, creator, obj) {
    var global1 = obj || getGlobalObject();
    var __SENTRY__ = global1.__SENTRY__ = global1.__SENTRY__ || {};
    var singleton = __SENTRY__[name] || (__SENTRY__[name] = creator());
    return singleton;
}

},{"./node.js":"2Azyo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2Azyo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "dynamicRequire", ()=>dynamicRequire);
parcelHelpers.export(exports, "isNodeEnv", ()=>isNodeEnv);
parcelHelpers.export(exports, "loadModule", ()=>loadModule);
var _envJs = require("./env.js");
var process = require("process");
/**
 * NOTE: In order to avoid circular dependencies, if you add a function to this module and it needs to print something,
 * you must either a) use `console.log` rather than the logger, or b) put your function elsewhere.
 */ /**
 * Checks whether we're in the Node.js or Browser environment
 *
 * @returns Answer to given question
 */ function isNodeEnv() {
    // explicitly check for browser bundles as those can be optimized statically
    // by terser/rollup.
    return !(0, _envJs.isBrowserBundle)() && Object.prototype.toString.call(typeof process !== "undefined" ? process : 0) === "[object process]";
}
/**
 * Requires a module which is protected against bundler minification.
 *
 * @param request The module path to resolve
 */ function dynamicRequire(mod, request) {
    return mod.require(request);
}
/**
 * Helper for dynamically loading module that should work with linked dependencies.
 * The problem is that we _should_ be using `require(require.resolve(moduleName, { paths: [cwd()] }))`
 * However it's _not possible_ to do that with Webpack, as it has to know all the dependencies during
 * build time. `require.resolve` is also not available in any other way, so we cannot create,
 * a fake helper like we do with `dynamicRequire`.
 *
 * We always prefer to use local package, thus the value is not returned early from each `try/catch` block.
 * That is to mimic the behavior of `require.resolve` exactly.
 *
 * @param moduleName module name to require
 * @returns possibly required module
 */ function loadModule(moduleName) {
    let mod;
    try {
        mod = dynamicRequire(module, moduleName);
    } catch (e) {
    // no-empty
    }
    try {
        const { cwd  } = dynamicRequire(module, "process");
        mod = dynamicRequire(module, `${cwd()}/node_modules/${moduleName}`);
    } catch (e1) {
    // no-empty
    }
    return mod;
}

},{"./env.js":"8n70v","process":"d5jf4","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8n70v":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isBrowserBundle", ()=>isBrowserBundle);
/*
 * This module exists for optimizations in the build process through rollup and terser.  We define some global
 * constants, which can be overridden during build. By guarding certain pieces of code with functions that return these
 * constants, we can control whether or not they appear in the final bundle. (Any code guarded by a false condition will
 * never run, and will hence be dropped during treeshaking.) The two primary uses for this are stripping out calls to
 * `logger` and preventing node-related code from appearing in browser bundles.
 *
 * Attention:
 * This file should not be used to define constants/flags that are intended to be used for tree-shaking conducted by
 * users. These fags should live in their respective packages, as we identified user tooling (specifically webpack)
 * having issues tree-shaking these constants across package boundaries.
 * An example for this is the __SENTRY_DEBUG__ constant. It is declared in each package individually because we want
 * users to be able to shake away expressions that it guards.
 */ /**
 * Figures out if we're building a browser bundle.
 *
 * @returns true if this is a browser bundle build.
 */ function isBrowserBundle() {
    return typeof __SENTRY_BROWSER_BUNDLE__ !== "undefined" && !!__SENTRY_BROWSER_BUNDLE__;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d5jf4":[function(require,module,exports) {
// shim for using process in browser
var process = module.exports = {};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var cachedSetTimeout;
var cachedClearTimeout;
function defaultSetTimout() {
    throw new Error("setTimeout has not been defined");
}
function defaultClearTimeout() {
    throw new Error("clearTimeout has not been defined");
}
(function() {
    try {
        if (typeof setTimeout === "function") cachedSetTimeout = setTimeout;
        else cachedSetTimeout = defaultSetTimout;
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === "function") cachedClearTimeout = clearTimeout;
        else cachedClearTimeout = defaultClearTimeout;
    } catch (e1) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) //normal enviroments in sane situations
    return setTimeout(fun, 0);
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) //normal enviroments in sane situations
    return clearTimeout(marker);
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
    if (!draining || !currentQueue) return;
    draining = false;
    if (currentQueue.length) queue = currentQueue.concat(queue);
    else queueIndex = -1;
    if (queue.length) drainQueue();
}
function drainQueue() {
    if (draining) return;
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while(len){
        currentQueue = queue;
        queue = [];
        while(++queueIndex < len)if (currentQueue) currentQueue[queueIndex].run();
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) runTimeout(drainQueue);
};
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function() {
    this.fun.apply(null, this.array);
};
process.title = "browser";
process.browser = true;
process.env = {};
process.argv = [];
process.version = ""; // empty string to avoid regexp issues
process.versions = {};
function noop() {}
process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;
process.listeners = function(name) {
    return [];
};
process.binding = function(name) {
    throw new Error("process.binding is not supported");
};
process.cwd = function() {
    return "/";
};
process.chdir = function(dir) {
    throw new Error("process.chdir is not supported");
};
process.umask = function() {
    return 0;
};

},{}],"451Wr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isDOMError", ()=>isDOMError);
parcelHelpers.export(exports, "isDOMException", ()=>isDOMException);
parcelHelpers.export(exports, "isElement", ()=>isElement);
parcelHelpers.export(exports, "isError", ()=>isError);
parcelHelpers.export(exports, "isErrorEvent", ()=>isErrorEvent);
parcelHelpers.export(exports, "isEvent", ()=>isEvent);
parcelHelpers.export(exports, "isInstanceOf", ()=>isInstanceOf);
parcelHelpers.export(exports, "isNaN", ()=>isNaN);
parcelHelpers.export(exports, "isPlainObject", ()=>isPlainObject);
parcelHelpers.export(exports, "isPrimitive", ()=>isPrimitive);
parcelHelpers.export(exports, "isRegExp", ()=>isRegExp);
parcelHelpers.export(exports, "isString", ()=>isString);
parcelHelpers.export(exports, "isSyntheticEvent", ()=>isSyntheticEvent);
parcelHelpers.export(exports, "isThenable", ()=>isThenable);
var objectToString = Object.prototype.toString;
/**
 * Checks whether given value's type is one of a few Error or Error-like
 * {@link isError}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */ function isError(wat) {
    switch(objectToString.call(wat)){
        case "[object Error]":
        case "[object Exception]":
        case "[object DOMException]":
            return true;
        default:
            return isInstanceOf(wat, Error);
    }
}
function isBuiltin(wat, ty) {
    return objectToString.call(wat) === `[object ${ty}]`;
}
/**
 * Checks whether given value's type is ErrorEvent
 * {@link isErrorEvent}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */ function isErrorEvent(wat) {
    return isBuiltin(wat, "ErrorEvent");
}
/**
 * Checks whether given value's type is DOMError
 * {@link isDOMError}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */ function isDOMError(wat) {
    return isBuiltin(wat, "DOMError");
}
/**
 * Checks whether given value's type is DOMException
 * {@link isDOMException}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */ function isDOMException(wat) {
    return isBuiltin(wat, "DOMException");
}
/**
 * Checks whether given value's type is a string
 * {@link isString}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */ function isString(wat) {
    return isBuiltin(wat, "String");
}
/**
 * Checks whether given value is a primitive (undefined, null, number, boolean, string, bigint, symbol)
 * {@link isPrimitive}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */ function isPrimitive(wat) {
    return wat === null || typeof wat !== "object" && typeof wat !== "function";
}
/**
 * Checks whether given value's type is an object literal
 * {@link isPlainObject}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */ function isPlainObject(wat) {
    return isBuiltin(wat, "Object");
}
/**
 * Checks whether given value's type is an Event instance
 * {@link isEvent}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */ function isEvent(wat) {
    return typeof Event !== "undefined" && isInstanceOf(wat, Event);
}
/**
 * Checks whether given value's type is an Element instance
 * {@link isElement}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */ function isElement(wat) {
    return typeof Element !== "undefined" && isInstanceOf(wat, Element);
}
/**
 * Checks whether given value's type is an regexp
 * {@link isRegExp}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */ function isRegExp(wat) {
    return isBuiltin(wat, "RegExp");
}
/**
 * Checks whether given value has a then function.
 * @param wat A value to be checked.
 */ function isThenable(wat) {
    return Boolean(wat && wat.then && typeof wat.then === "function");
}
/**
 * Checks whether given value's type is a SyntheticEvent
 * {@link isSyntheticEvent}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */ function isSyntheticEvent(wat) {
    return isPlainObject(wat) && "nativeEvent" in wat && "preventDefault" in wat && "stopPropagation" in wat;
}
/**
 * Checks whether given value is NaN
 * {@link isNaN}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */ function isNaN(wat) {
    return typeof wat === "number" && wat !== wat;
}
/**
 * Checks whether given value's type is an instance of provided constructor.
 * {@link isInstanceOf}.
 *
 * @param wat A value to be checked.
 * @param base A constructor to be used in a check.
 * @returns A boolean representing the result.
 */ function isInstanceOf(wat, base) {
    try {
        return wat instanceof base;
    } catch (_e) {
        return false;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jwVZL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "dsnToString", ()=>dsnToString);
parcelHelpers.export(exports, "extensionRelayDSN", ()=>extensionRelayDSN);
parcelHelpers.export(exports, "makeDsn", ()=>makeDsn);
var _errorJs = require("./error.js");
/** Regular expression used to parse a Dsn. */ var DSN_REGEX = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w.-]+)(?::(\d+))?\/(.+)/;
function isValidProtocol(protocol) {
    return protocol === "http" || protocol === "https";
}
/**
 * Renders the string representation of this Dsn.
 *
 * By default, this will render the public representation without the password
 * component. To get the deprecated private representation, set `withPassword`
 * to true.
 *
 * @param withPassword When set to true, the password will be included.
 */ function dsnToString(dsn, withPassword = false) {
    const { host , path , pass , port , projectId , protocol , publicKey  } = dsn;
    return `${protocol}://${publicKey}${withPassword && pass ? `:${pass}` : ""}` + `@${host}${port ? `:${port}` : ""}/${path ? `${path}/` : path}${projectId}`;
}
/**
 * Parses a Dsn from a given string.
 *
 * @param str A Dsn as string
 * @returns Dsn as DsnComponents
 */ function dsnFromString(str) {
    var match = DSN_REGEX.exec(str);
    if (!match) throw new (0, _errorJs.SentryError)(`Invalid Sentry Dsn: ${str}`);
    const [protocol, publicKey, pass = "", host, port = "", lastPath] = match.slice(1);
    let path = "";
    let projectId = lastPath;
    var split = projectId.split("/");
    if (split.length > 1) {
        path = split.slice(0, -1).join("/");
        projectId = split.pop();
    }
    if (projectId) {
        var projectMatch = projectId.match(/^\d+/);
        if (projectMatch) projectId = projectMatch[0];
    }
    return dsnFromComponents({
        host,
        pass,
        path,
        projectId,
        port,
        protocol: protocol,
        publicKey
    });
}
function dsnFromComponents(components) {
    return {
        protocol: components.protocol,
        publicKey: components.publicKey || "",
        pass: components.pass || "",
        host: components.host,
        port: components.port || "",
        path: components.path || "",
        projectId: components.projectId
    };
}
function validateDsn(dsn) {
    if (!(typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__)) return;
    const { port , projectId , protocol  } = dsn;
    var requiredComponents = [
        "protocol",
        "publicKey",
        "host",
        "projectId"
    ];
    requiredComponents.forEach((component)=>{
        if (!dsn[component]) throw new (0, _errorJs.SentryError)(`Invalid Sentry Dsn: ${component} missing`);
    });
    if (!projectId.match(/^\d+$/)) throw new (0, _errorJs.SentryError)(`Invalid Sentry Dsn: Invalid projectId ${projectId}`);
    if (!isValidProtocol(protocol)) throw new (0, _errorJs.SentryError)(`Invalid Sentry Dsn: Invalid protocol ${protocol}`);
    if (port && isNaN(parseInt(port, 10))) throw new (0, _errorJs.SentryError)(`Invalid Sentry Dsn: Invalid port ${port}`);
    return true;
}
/** The Sentry Dsn, identifying a Sentry instance and project. */ function makeDsn(from) {
    var components = typeof from === "string" ? dsnFromString(from) : dsnFromComponents(from);
    validateDsn(components);
    return components;
}
/**
 * Changes a Dsn to point to the `relay` server running in the Lambda Extension.
 *
 * This is only used by the serverless integration for AWS Lambda.
 *
 * @param originalDsn The original Dsn of the customer.
 * @returns Dsn pointing to Lambda extension.
 */ function extensionRelayDSN(originalDsn) {
    if (originalDsn === undefined) return undefined;
    var dsn = dsnFromString(originalDsn);
    dsn.host = "localhost";
    dsn.port = "3000";
    dsn.protocol = "http";
    return dsnToString(dsn);
}

},{"./error.js":"1RnP9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1RnP9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SentryError", ()=>SentryError);
/** An error emitted by Sentry SDKs and related utilities. */ class SentryError extends Error {
    /** Display name of this error instance. */ constructor(message){
        super(message);
        this.message = message;
        this.name = new.target.prototype.constructor.name;
        Object.setPrototypeOf(this, new.target.prototype);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gOTR7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addInstrumentationHandler", ()=>addInstrumentationHandler);
var _globalJs = require("./global.js");
var _isJs = require("./is.js");
var _loggerJs = require("./logger.js");
var _objectJs = require("./object.js");
var _stacktraceJs = require("./stacktrace.js");
var _supportsJs = require("./supports.js");
var global = (0, _globalJs.getGlobalObject)();
/**
 * Instrument native APIs to call handlers that can be used to create breadcrumbs, APM spans etc.
 *  - Console API
 *  - Fetch API
 *  - XHR API
 *  - History API
 *  - DOM API (click/typing)
 *  - Error API
 *  - UnhandledRejection API
 */ var handlers = {};
var instrumented = {};
/** Instruments given API */ function instrument(type) {
    if (instrumented[type]) return;
    instrumented[type] = true;
    switch(type){
        case "console":
            instrumentConsole();
            break;
        case "dom":
            instrumentDOM();
            break;
        case "xhr":
            instrumentXHR();
            break;
        case "fetch":
            instrumentFetch();
            break;
        case "history":
            instrumentHistory();
            break;
        case "error":
            instrumentError();
            break;
        case "unhandledrejection":
            instrumentUnhandledRejection();
            break;
        default:
            (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _loggerJs.logger).warn("unknown instrumentation type:", type);
            return;
    }
}
/**
 * Add handler that will be called when given type of instrumentation triggers.
 * Use at your own risk, this might break without changelog notice, only used internally.
 * @hidden
 */ function addInstrumentationHandler(type, callback) {
    handlers[type] = handlers[type] || [];
    handlers[type].push(callback);
    instrument(type);
}
/** JSDoc */ function triggerHandlers(type, data) {
    if (!type || !handlers[type]) return;
    for (var handler of handlers[type] || [])try {
        handler(data);
    } catch (e) {
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _loggerJs.logger).error(`Error while triggering instrumentation handler.\nType: ${type}\nName: ${(0, _stacktraceJs.getFunctionName)(handler)}\nError:`, e);
    }
}
/** JSDoc */ function instrumentConsole() {
    if (!("console" in global)) return;
    (0, _loggerJs.CONSOLE_LEVELS).forEach(function(level) {
        if (!(level in global.console)) return;
        (0, _objectJs.fill)(global.console, level, function(originalConsoleMethod) {
            return function(...args) {
                triggerHandlers("console", {
                    args,
                    level
                });
                // this fails for some browsers. :(
                if (originalConsoleMethod) originalConsoleMethod.apply(global.console, args);
            };
        });
    });
}
/** JSDoc */ function instrumentFetch() {
    if (!(0, _supportsJs.supportsNativeFetch)()) return;
    (0, _objectJs.fill)(global, "fetch", function(originalFetch) {
        return function(...args) {
            var handlerData = {
                args,
                fetchData: {
                    method: getFetchMethod(args),
                    url: getFetchUrl(args)
                },
                startTimestamp: Date.now()
            };
            triggerHandlers("fetch", {
                ...handlerData
            });
            return originalFetch.apply(global, args).then((response)=>{
                triggerHandlers("fetch", {
                    ...handlerData,
                    endTimestamp: Date.now(),
                    response
                });
                return response;
            }, (error)=>{
                triggerHandlers("fetch", {
                    ...handlerData,
                    endTimestamp: Date.now(),
                    error
                });
                // NOTE: If you are a Sentry user, and you are seeing this stack frame,
                //       it means the sentry.javascript SDK caught an error invoking your application code.
                //       This is expected behavior and NOT indicative of a bug with sentry.javascript.
                throw error;
            });
        };
    });
}
/** Extract `method` from fetch call arguments */ function getFetchMethod(fetchArgs = []) {
    if ("Request" in global && (0, _isJs.isInstanceOf)(fetchArgs[0], Request) && fetchArgs[0].method) return String(fetchArgs[0].method).toUpperCase();
    if (fetchArgs[1] && fetchArgs[1].method) return String(fetchArgs[1].method).toUpperCase();
    return "GET";
}
/** Extract `url` from fetch call arguments */ function getFetchUrl(fetchArgs = []) {
    if (typeof fetchArgs[0] === "string") return fetchArgs[0];
    if ("Request" in global && (0, _isJs.isInstanceOf)(fetchArgs[0], Request)) return fetchArgs[0].url;
    return String(fetchArgs[0]);
}
/** JSDoc */ function instrumentXHR() {
    if (!("XMLHttpRequest" in global)) return;
    var xhrproto = XMLHttpRequest.prototype;
    (0, _objectJs.fill)(xhrproto, "open", function(originalOpen) {
        return function(...args) {
            var xhr = this;
            var url = args[1];
            var xhrInfo = xhr.__sentry_xhr__ = {
                method: (0, _isJs.isString)(args[0]) ? args[0].toUpperCase() : args[0],
                url: args[1]
            };
            // if Sentry key appears in URL, don't capture it as a request
            if ((0, _isJs.isString)(url) && xhrInfo.method === "POST" && url.match(/sentry_key/)) xhr.__sentry_own_request__ = true;
            var onreadystatechangeHandler = function() {
                if (xhr.readyState === 4) {
                    try {
                        // touching statusCode in some platforms throws
                        // an exception
                        xhrInfo.status_code = xhr.status;
                    } catch (e) {
                    /* do nothing */ }
                    triggerHandlers("xhr", {
                        args,
                        endTimestamp: Date.now(),
                        startTimestamp: Date.now(),
                        xhr
                    });
                }
            };
            if ("onreadystatechange" in xhr && typeof xhr.onreadystatechange === "function") (0, _objectJs.fill)(xhr, "onreadystatechange", function(original) {
                return function(...readyStateArgs) {
                    onreadystatechangeHandler();
                    return original.apply(xhr, readyStateArgs);
                };
            });
            else xhr.addEventListener("readystatechange", onreadystatechangeHandler);
            return originalOpen.apply(xhr, args);
        };
    });
    (0, _objectJs.fill)(xhrproto, "send", function(originalSend) {
        return function(...args) {
            if (this.__sentry_xhr__ && args[0] !== undefined) this.__sentry_xhr__.body = args[0];
            triggerHandlers("xhr", {
                args,
                startTimestamp: Date.now(),
                xhr: this
            });
            return originalSend.apply(this, args);
        };
    });
}
let lastHref;
/** JSDoc */ function instrumentHistory() {
    if (!(0, _supportsJs.supportsHistory)()) return;
    var oldOnPopState = global.onpopstate;
    global.onpopstate = function(...args) {
        var to = global.location.href;
        // keep track of the current URL state, as we always receive only the updated state
        var from = lastHref;
        lastHref = to;
        triggerHandlers("history", {
            from,
            to
        });
        if (oldOnPopState) // Apparently this can throw in Firefox when incorrectly implemented plugin is installed.
        // https://github.com/getsentry/sentry-javascript/issues/3344
        // https://github.com/bugsnag/bugsnag-js/issues/469
        try {
            return oldOnPopState.apply(this, args);
        } catch (_oO) {
        // no-empty
        }
    };
    /** @hidden */ function historyReplacementFunction(originalHistoryFunction) {
        return function(...args) {
            var url = args.length > 2 ? args[2] : undefined;
            if (url) {
                // coerce to string (this is what pushState does)
                var from = lastHref;
                var to = String(url);
                // keep track of the current URL state, as we always receive only the updated state
                lastHref = to;
                triggerHandlers("history", {
                    from,
                    to
                });
            }
            return originalHistoryFunction.apply(this, args);
        };
    }
    (0, _objectJs.fill)(global.history, "pushState", historyReplacementFunction);
    (0, _objectJs.fill)(global.history, "replaceState", historyReplacementFunction);
}
var debounceDuration = 1000;
let debounceTimerID;
let lastCapturedEvent;
/**
 * Decide whether the current event should finish the debounce of previously captured one.
 * @param previous previously captured event
 * @param current event to be captured
 */ function shouldShortcircuitPreviousDebounce(previous, current) {
    // If there was no previous event, it should always be swapped for the new one.
    if (!previous) return true;
    // If both events have different type, then user definitely performed two separate actions. e.g. click + keypress.
    if (previous.type !== current.type) return true;
    try {
        // If both events have the same type, it's still possible that actions were performed on different targets.
        // e.g. 2 clicks on different buttons.
        if (previous.target !== current.target) return true;
    } catch (e) {
    // just accessing `target` property can throw an exception in some rare circumstances
    // see: https://github.com/getsentry/sentry-javascript/issues/838
    }
    // If both events have the same type _and_ same `target` (an element which triggered an event, _not necessarily_
    // to which an event listener was attached), we treat them as the same action, as we want to capture
    // only one breadcrumb. e.g. multiple clicks on the same button, or typing inside a user input box.
    return false;
}
/**
 * Decide whether an event should be captured.
 * @param event event to be captured
 */ function shouldSkipDOMEvent(event) {
    // We are only interested in filtering `keypress` events for now.
    if (event.type !== "keypress") return false;
    try {
        var target = event.target;
        if (!target || !target.tagName) return true;
        // Only consider keypress events on actual input elements. This will disregard keypresses targeting body
        // e.g.tabbing through elements, hotkeys, etc.
        if (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable) return false;
    } catch (e) {
    // just accessing `target` property can throw an exception in some rare circumstances
    // see: https://github.com/getsentry/sentry-javascript/issues/838
    }
    return true;
}
/**
 * Wraps addEventListener to capture UI breadcrumbs
 * @param handler function that will be triggered
 * @param globalListener indicates whether event was captured by the global event listener
 * @returns wrapped breadcrumb events handler
 * @hidden
 */ function makeDOMEventHandler(handler, globalListener = false) {
    return (event)=>{
        // It's possible this handler might trigger multiple times for the same
        // event (e.g. event propagation through node ancestors).
        // Ignore if we've already captured that event.
        if (!event || lastCapturedEvent === event) return;
        // We always want to skip _some_ events.
        if (shouldSkipDOMEvent(event)) return;
        var name = event.type === "keypress" ? "input" : event.type;
        // If there is no debounce timer, it means that we can safely capture the new event and store it for future comparisons.
        if (debounceTimerID === undefined) {
            handler({
                event: event,
                name,
                global: globalListener
            });
            lastCapturedEvent = event;
        } else if (shouldShortcircuitPreviousDebounce(lastCapturedEvent, event)) {
            handler({
                event: event,
                name,
                global: globalListener
            });
            lastCapturedEvent = event;
        }
        // Start a new debounce timer that will prevent us from capturing multiple events that should be grouped together.
        clearTimeout(debounceTimerID);
        debounceTimerID = global.setTimeout(()=>{
            debounceTimerID = undefined;
        }, debounceDuration);
    };
}
/** JSDoc */ function instrumentDOM() {
    if (!("document" in global)) return;
    // Make it so that any click or keypress that is unhandled / bubbled up all the way to the document triggers our dom
    // handlers. (Normally we have only one, which captures a breadcrumb for each click or keypress.) Do this before
    // we instrument `addEventListener` so that we don't end up attaching this handler twice.
    var triggerDOMHandler = triggerHandlers.bind(null, "dom");
    var globalDOMEventHandler = makeDOMEventHandler(triggerDOMHandler, true);
    global.document.addEventListener("click", globalDOMEventHandler, false);
    global.document.addEventListener("keypress", globalDOMEventHandler, false);
    // After hooking into click and keypress events bubbled up to `document`, we also hook into user-handled
    // clicks & keypresses, by adding an event listener of our own to any element to which they add a listener. That
    // way, whenever one of their handlers is triggered, ours will be, too. (This is needed because their handler
    // could potentially prevent the event from bubbling up to our global listeners. This way, our handler are still
    // guaranteed to fire at least once.)
    [
        "EventTarget",
        "Node"
    ].forEach((target)=>{
        var proto = global[target] && global[target].prototype;
        if (!proto || !proto.hasOwnProperty || !proto.hasOwnProperty("addEventListener")) return;
        (0, _objectJs.fill)(proto, "addEventListener", function(originalAddEventListener) {
            return function(type, listener, options) {
                if (type === "click" || type == "keypress") try {
                    var el = this;
                    var handlers1 = el.__sentry_instrumentation_handlers__ = el.__sentry_instrumentation_handlers__ || {};
                    var handlerForType = handlers1[type] = handlers1[type] || {
                        refCount: 0
                    };
                    if (!handlerForType.handler) {
                        var handler = makeDOMEventHandler(triggerDOMHandler);
                        handlerForType.handler = handler;
                        originalAddEventListener.call(this, type, handler, options);
                    }
                    handlerForType.refCount += 1;
                } catch (e) {
                // Accessing dom properties is always fragile.
                // Also allows us to skip `addEventListenrs` calls with no proper `this` context.
                }
                return originalAddEventListener.call(this, type, listener, options);
            };
        });
        (0, _objectJs.fill)(proto, "removeEventListener", function(originalRemoveEventListener) {
            return function(type, listener, options) {
                if (type === "click" || type == "keypress") try {
                    var el = this;
                    var handlers2 = el.__sentry_instrumentation_handlers__ || {};
                    var handlerForType = handlers2[type];
                    if (handlerForType) {
                        handlerForType.refCount -= 1;
                        // If there are no longer any custom handlers of the current type on this element, we can remove ours, too.
                        if (handlerForType.refCount <= 0) {
                            originalRemoveEventListener.call(this, type, handlerForType.handler, options);
                            handlerForType.handler = undefined;
                            delete handlers2[type];
                        }
                        // If there are no longer any custom handlers of any type on this element, cleanup everything.
                        if (Object.keys(handlers2).length === 0) delete el.__sentry_instrumentation_handlers__;
                    }
                } catch (e) {
                // Accessing dom properties is always fragile.
                // Also allows us to skip `addEventListenrs` calls with no proper `this` context.
                }
                return originalRemoveEventListener.call(this, type, listener, options);
            };
        });
    });
}
let _oldOnErrorHandler = null;
/** JSDoc */ function instrumentError() {
    _oldOnErrorHandler = global.onerror;
    global.onerror = function(msg, url, line, column, error) {
        triggerHandlers("error", {
            column,
            error,
            line,
            msg,
            url
        });
        if (_oldOnErrorHandler) return _oldOnErrorHandler.apply(this, arguments);
        return false;
    };
}
let _oldOnUnhandledRejectionHandler = null;
/** JSDoc */ function instrumentUnhandledRejection() {
    _oldOnUnhandledRejectionHandler = global.onunhandledrejection;
    global.onunhandledrejection = function(e) {
        triggerHandlers("unhandledrejection", e);
        if (_oldOnUnhandledRejectionHandler) return _oldOnUnhandledRejectionHandler.apply(this, arguments);
        return true;
    };
}

},{"./global.js":"8DShR","./is.js":"451Wr","./logger.js":"3LvdY","./object.js":"56C4m","./stacktrace.js":"2Z3L5","./supports.js":"6y74r","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3LvdY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CONSOLE_LEVELS", ()=>CONSOLE_LEVELS);
parcelHelpers.export(exports, "consoleSandbox", ()=>consoleSandbox);
parcelHelpers.export(exports, "logger", ()=>logger);
var _globalJs = require("./global.js");
// TODO: Implement different loggers for different environments
var global = (0, _globalJs.getGlobalObject)();
/** Prefix for logging strings */ var PREFIX = "Sentry Logger ";
var CONSOLE_LEVELS = [
    "debug",
    "info",
    "warn",
    "error",
    "log",
    "assert",
    "trace"
];
/**
 * Temporarily disable sentry console instrumentations.
 *
 * @param callback The function to run against the original `console` messages
 * @returns The results of the callback
 */ function consoleSandbox(callback) {
    var global1 = (0, _globalJs.getGlobalObject)();
    if (!("console" in global1)) return callback();
    var originalConsole = global1.console;
    var wrappedLevels = {};
    // Restore all wrapped console methods
    CONSOLE_LEVELS.forEach((level)=>{
        // TODO(v7): Remove this check as it's only needed for Node 6
        var originalWrappedFunc = originalConsole[level] && originalConsole[level].__sentry_original__;
        if (level in global1.console && originalWrappedFunc) {
            wrappedLevels[level] = originalConsole[level];
            originalConsole[level] = originalWrappedFunc;
        }
    });
    try {
        return callback();
    } finally{
        // Revert restoration to wrapped state
        Object.keys(wrappedLevels).forEach((level)=>{
            originalConsole[level] = wrappedLevels[level];
        });
    }
}
function makeLogger() {
    let enabled = false;
    var logger1 = {
        enable: ()=>{
            enabled = true;
        },
        disable: ()=>{
            enabled = false;
        }
    };
    if (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) CONSOLE_LEVELS.forEach((name)=>{
        logger1[name] = (...args)=>{
            if (enabled) consoleSandbox(()=>{
                global.console[name](`${PREFIX}[${name}]:`, ...args);
            });
        };
    });
    else CONSOLE_LEVELS.forEach((name)=>{
        logger1[name] = ()=>undefined;
    });
    return logger1;
}
// Ensure we only have a single logger instance, even if multiple versions of @sentry/utils are being used
let logger;
if (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) logger = (0, _globalJs.getGlobalSingleton)("logger", makeLogger);
else logger = makeLogger();

},{"./global.js":"8DShR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"56C4m":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addNonEnumerableProperty", ()=>addNonEnumerableProperty);
parcelHelpers.export(exports, "convertToPlainObject", ()=>convertToPlainObject);
parcelHelpers.export(exports, "dropUndefinedKeys", ()=>dropUndefinedKeys);
parcelHelpers.export(exports, "extractExceptionKeysForMessage", ()=>extractExceptionKeysForMessage);
parcelHelpers.export(exports, "fill", ()=>fill);
parcelHelpers.export(exports, "getOriginalFunction", ()=>getOriginalFunction);
parcelHelpers.export(exports, "markFunctionWrapped", ()=>markFunctionWrapped);
parcelHelpers.export(exports, "objectify", ()=>objectify);
parcelHelpers.export(exports, "urlEncode", ()=>urlEncode);
var _browserJs = require("./browser.js");
var _isJs = require("./is.js");
var _stringJs = require("./string.js");
/**
 * Replace a method in an object with a wrapped version of itself.
 *
 * @param source An object that contains a method to be wrapped.
 * @param name The name of the method to be wrapped.
 * @param replacementFactory A higher-order function that takes the original version of the given method and returns a
 * wrapped version. Note: The function returned by `replacementFactory` needs to be a non-arrow function, in order to
 * preserve the correct value of `this`, and the original method must be called using `origMethod.call(this, <other
 * args>)` or `origMethod.apply(this, [<other args>])` (rather than being called directly), again to preserve `this`.
 * @returns void
 */ function fill(source, name, replacementFactory) {
    if (!(name in source)) return;
    var original = source[name];
    var wrapped = replacementFactory(original);
    // Make sure it's a function first, as we need to attach an empty prototype for `defineProperties` to work
    // otherwise it'll throw "TypeError: Object.defineProperties called on non-object"
    if (typeof wrapped === "function") try {
        markFunctionWrapped(wrapped, original);
    } catch (_Oo) {
    // This can throw if multiple fill happens on a global object like XMLHttpRequest
    // Fixes https://github.com/getsentry/sentry-javascript/issues/2043
    }
    source[name] = wrapped;
}
/**
 * Defines a non-enumerable property on the given object.
 *
 * @param obj The object on which to set the property
 * @param name The name of the property to be set
 * @param value The value to which to set the property
 */ function addNonEnumerableProperty(obj, name, value) {
    Object.defineProperty(obj, name, {
        // enumerable: false, // the default, so we can save on bundle size by not explicitly setting it
        value: value,
        writable: true,
        configurable: true
    });
}
/**
 * Remembers the original function on the wrapped function and
 * patches up the prototype.
 *
 * @param wrapped the wrapper function
 * @param original the original function that gets wrapped
 */ function markFunctionWrapped(wrapped, original) {
    var proto = original.prototype || {};
    wrapped.prototype = original.prototype = proto;
    addNonEnumerableProperty(wrapped, "__sentry_original__", original);
}
/**
 * This extracts the original function if available.  See
 * `markFunctionWrapped` for more information.
 *
 * @param func the function to unwrap
 * @returns the unwrapped version of the function if available.
 */ function getOriginalFunction(func) {
    return func.__sentry_original__;
}
/**
 * Encodes given object into url-friendly format
 *
 * @param object An object that contains serializable values
 * @returns string Encoded
 */ function urlEncode(object) {
    return Object.keys(object).map((key)=>`${encodeURIComponent(key)}=${encodeURIComponent(object[key])}`).join("&");
}
/**
 * Transforms any `Error` or `Event` into a plain object with all of their enumerable properties, and some of their
 * non-enumerable properties attached.
 *
 * @param value Initial source that we have to transform in order for it to be usable by the serializer
 * @returns An Event or Error turned into an object - or the value argurment itself, when value is neither an Event nor
 *  an Error.
 */ function convertToPlainObject(value) {
    if ((0, _isJs.isError)(value)) return {
        message: value.message,
        name: value.name,
        stack: value.stack,
        ...getOwnProperties(value)
    };
    else if ((0, _isJs.isEvent)(value)) {
        var newObj = {
            type: value.type,
            target: serializeEventTarget(value.target),
            currentTarget: serializeEventTarget(value.currentTarget),
            ...getOwnProperties(value)
        };
        if (typeof CustomEvent !== "undefined" && (0, _isJs.isInstanceOf)(value, CustomEvent)) newObj.detail = value.detail;
        return newObj;
    } else return value;
}
/** Creates a string representation of the target of an `Event` object */ function serializeEventTarget(target) {
    try {
        return (0, _isJs.isElement)(target) ? (0, _browserJs.htmlTreeAsString)(target) : Object.prototype.toString.call(target);
    } catch (_oO) {
        return "<unknown>";
    }
}
/** Filters out all but an object's own properties */ function getOwnProperties(obj) {
    if (typeof obj === "object" && obj !== null) {
        var extractedProps = {};
        for(var property in obj)if (Object.prototype.hasOwnProperty.call(obj, property)) extractedProps[property] = obj[property];
        return extractedProps;
    } else return {};
}
/**
 * Given any captured exception, extract its keys and create a sorted
 * and truncated list that will be used inside the event message.
 * eg. `Non-error exception captured with keys: foo, bar, baz`
 */ function extractExceptionKeysForMessage(exception, maxLength = 40) {
    var keys = Object.keys(convertToPlainObject(exception));
    keys.sort();
    if (!keys.length) return "[object has no keys]";
    if (keys[0].length >= maxLength) return (0, _stringJs.truncate)(keys[0], maxLength);
    for(let includedKeys = keys.length; includedKeys > 0; includedKeys--){
        var serialized = keys.slice(0, includedKeys).join(", ");
        if (serialized.length > maxLength) continue;
        if (includedKeys === keys.length) return serialized;
        return (0, _stringJs.truncate)(serialized, maxLength);
    }
    return "";
}
/**
 * Given any object, return a new object having removed all fields whose value was `undefined`.
 * Works recursively on objects and arrays.
 *
 * Attention: This function keeps circular references in the returned object.
 */ function dropUndefinedKeys(inputValue) {
    // This map keeps track of what already visited nodes map to.
    // Our Set - based memoBuilder doesn't work here because we want to the output object to have the same circular
    // references as the input object.
    var memoizationMap = new Map();
    // This function just proxies `_dropUndefinedKeys` to keep the `memoBuilder` out of this function's API
    return _dropUndefinedKeys(inputValue, memoizationMap);
}
function _dropUndefinedKeys(inputValue, memoizationMap) {
    if ((0, _isJs.isPlainObject)(inputValue)) {
        // If this node has already been visited due to a circular reference, return the object it was mapped to in the new object
        var memoVal = memoizationMap.get(inputValue);
        if (memoVal !== undefined) return memoVal;
        var returnValue = {};
        // Store the mapping of this value in case we visit it again, in case of circular data
        memoizationMap.set(inputValue, returnValue);
        for (var key of Object.keys(inputValue))if (typeof inputValue[key] !== "undefined") returnValue[key] = _dropUndefinedKeys(inputValue[key], memoizationMap);
        return returnValue;
    }
    if (Array.isArray(inputValue)) {
        // If this node has already been visited due to a circular reference, return the array it was mapped to in the new object
        var memoVal = memoizationMap.get(inputValue);
        if (memoVal !== undefined) return memoVal;
        var returnValue = [];
        // Store the mapping of this value in case we visit it again, in case of circular data
        memoizationMap.set(inputValue, returnValue);
        inputValue.forEach((item)=>{
            returnValue.push(_dropUndefinedKeys(item, memoizationMap));
        });
        return returnValue;
    }
    return inputValue;
}
/**
 * Ensure that something is an object.
 *
 * Turns `undefined` and `null` into `String`s and all other primitives into instances of their respective wrapper
 * classes (String, Boolean, Number, etc.). Acts as the identity function on non-primitives.
 *
 * @param wat The subject of the objectification
 * @returns A version of `wat` which can safely be used with `Object` class methods
 */ function objectify(wat) {
    let objectified;
    switch(true){
        case wat === undefined || wat === null:
            objectified = new String(wat);
            break;
        // Though symbols and bigints do have wrapper classes (`Symbol` and `BigInt`, respectively), for whatever reason
        // those classes don't have constructors which can be used with the `new` keyword. We therefore need to cast each as
        // an object in order to wrap it.
        case typeof wat === "symbol" || typeof wat === "bigint":
            objectified = Object(wat);
            break;
        // this will catch the remaining primitives: `String`, `Number`, and `Boolean`
        case (0, _isJs.isPrimitive)(wat):
            objectified = new wat.constructor(wat);
            break;
        // by process of elimination, at this point we know that `wat` must already be an object
        default:
            objectified = wat;
            break;
    }
    return objectified;
}

},{"./browser.js":"4zy0v","./is.js":"451Wr","./string.js":"6VoCN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6VoCN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "escapeStringForRegex", ()=>escapeStringForRegex);
parcelHelpers.export(exports, "isMatchingPattern", ()=>isMatchingPattern);
parcelHelpers.export(exports, "safeJoin", ()=>safeJoin);
parcelHelpers.export(exports, "snipLine", ()=>snipLine);
parcelHelpers.export(exports, "truncate", ()=>truncate);
var _isJs = require("./is.js");
/**
 * Truncates given string to the maximum characters count
 *
 * @param str An object that contains serializable values
 * @param max Maximum number of characters in truncated string (0 = unlimited)
 * @returns string Encoded
 */ function truncate(str, max = 0) {
    if (typeof str !== "string" || max === 0) return str;
    return str.length <= max ? str : `${str.substr(0, max)}...`;
}
/**
 * This is basically just `trim_line` from
 * https://github.com/getsentry/sentry/blob/master/src/sentry/lang/javascript/processor.py#L67
 *
 * @param str An object that contains serializable values
 * @param max Maximum number of characters in truncated string
 * @returns string Encoded
 */ function snipLine(line, colno) {
    let newLine = line;
    var lineLength = newLine.length;
    if (lineLength <= 150) return newLine;
    if (colno > lineLength) colno = lineLength;
    let start = Math.max(colno - 60, 0);
    if (start < 5) start = 0;
    let end = Math.min(start + 140, lineLength);
    if (end > lineLength - 5) end = lineLength;
    if (end === lineLength) start = Math.max(end - 140, 0);
    newLine = newLine.slice(start, end);
    if (start > 0) newLine = `'{snip} ${newLine}`;
    if (end < lineLength) newLine += " {snip}";
    return newLine;
}
/**
 * Join values in array
 * @param input array of values to be joined together
 * @param delimiter string to be placed in-between values
 * @returns Joined values
 */ function safeJoin(input, delimiter) {
    if (!Array.isArray(input)) return "";
    var output = [];
    for(let i = 0; i < input.length; i++){
        var value = input[i];
        try {
            output.push(String(value));
        } catch (e) {
            output.push("[value cannot be serialized]");
        }
    }
    return output.join(delimiter);
}
/**
 * Checks if the value matches a regex or includes the string
 * @param value The string value to be checked against
 * @param pattern Either a regex or a string that must be contained in value
 */ function isMatchingPattern(value, pattern) {
    if (!(0, _isJs.isString)(value)) return false;
    if ((0, _isJs.isRegExp)(pattern)) return pattern.test(value);
    if (typeof pattern === "string") return value.indexOf(pattern) !== -1;
    return false;
}
/**
 * Given a string, escape characters which have meaning in the regex grammar, such that the result is safe to feed to
 * `new RegExp()`.
 *
 * Based on https://github.com/sindresorhus/escape-string-regexp. Vendored to a) reduce the size by skipping the runtime
 * type-checking, and b) ensure it gets down-compiled for old versions of Node (the published package only supports Node
 * 12+).
 *
 * @param regexString The string to escape
 * @returns An version of the string with all special regex characters escaped
 */ function escapeStringForRegex(regexString) {
    // escape the hyphen separately so we can also replace it with a unicode literal hyphen, to avoid the problems
    // discussed in https://github.com/sindresorhus/escape-string-regexp/issues/20.
    return regexString.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}

},{"./is.js":"451Wr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2Z3L5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createStackParser", ()=>createStackParser);
parcelHelpers.export(exports, "getFunctionName", ()=>getFunctionName);
parcelHelpers.export(exports, "nodeStackLineParser", ()=>nodeStackLineParser);
parcelHelpers.export(exports, "stackParserFromStackParserOptions", ()=>stackParserFromStackParserOptions);
parcelHelpers.export(exports, "stripSentryFramesAndReverse", ()=>stripSentryFramesAndReverse);
var _buildPolyfills = require("./buildPolyfills");
var STACKTRACE_LIMIT = 50;
/**
 * Creates a stack parser with the supplied line parsers
 *
 * StackFrames are returned in the correct order for Sentry Exception
 * frames and with Sentry SDK internal frames removed from the top and bottom
 *
 */ function createStackParser(...parsers) {
    var sortedParsers = parsers.sort((a, b)=>a[0] - b[0]).map((p)=>p[1]);
    return (stack, skipFirst = 0)=>{
        var frames = [];
        for (var line of stack.split("\n").slice(skipFirst))for (var parser of sortedParsers){
            var frame = parser(line);
            if (frame) {
                frames.push(frame);
                break;
            }
        }
        return stripSentryFramesAndReverse(frames);
    };
}
/**
 * Gets a stack parser implementation from Options.stackParser
 * @see Options
 *
 * If options contains an array of line parsers, it is converted into a parser
 */ function stackParserFromStackParserOptions(stackParser) {
    if (Array.isArray(stackParser)) return createStackParser(...stackParser);
    return stackParser;
}
/**
 * @hidden
 */ function stripSentryFramesAndReverse(stack) {
    if (!stack.length) return [];
    let localStack = stack;
    var firstFrameFunction = localStack[0].function || "";
    var lastFrameFunction = localStack[localStack.length - 1].function || "";
    // If stack starts with one of our API calls, remove it (starts, meaning it's the top of the stack - aka last call)
    if (firstFrameFunction.indexOf("captureMessage") !== -1 || firstFrameFunction.indexOf("captureException") !== -1) localStack = localStack.slice(1);
    // If stack ends with one of our internal API calls, remove it (ends, meaning it's the bottom of the stack - aka top-most call)
    if (lastFrameFunction.indexOf("sentryWrapped") !== -1) localStack = localStack.slice(0, -1);
    // The frame where the crash happened, should be the last entry in the array
    return localStack.slice(0, STACKTRACE_LIMIT).map((frame)=>({
            ...frame,
            filename: frame.filename || localStack[0].filename,
            function: frame.function || "?"
        })).reverse();
}
var defaultFunctionName = "<anonymous>";
/**
 * Safely extract function name from itself
 */ function getFunctionName(fn) {
    try {
        if (!fn || typeof fn !== "function") return defaultFunctionName;
        return fn.name || defaultFunctionName;
    } catch (e) {
        // Just accessing custom props in some Selenium environments
        // can cause a "Permission denied" exception (see raven-js#495).
        return defaultFunctionName;
    }
}
function node(getModule) {
    var FILENAME_MATCH = /^\s*[-]{4,}$/;
    var FULL_MATCH = /at (?:async )?(?:(.+?)\s+\()?(?:(.+?):(\d+)(?::(\d+))?|([^)]+))\)?/;
    return (line)=>{
        if (line.match(FILENAME_MATCH)) return {
            filename: line
        };
        var lineMatch = line.match(FULL_MATCH);
        if (!lineMatch) return undefined;
        let object;
        let method;
        let functionName;
        let typeName;
        let methodName;
        if (lineMatch[1]) {
            functionName = lineMatch[1];
            let methodStart = functionName.lastIndexOf(".");
            if (functionName[methodStart - 1] === ".") methodStart--;
            if (methodStart > 0) {
                object = functionName.substr(0, methodStart);
                method = functionName.substr(methodStart + 1);
                var objectEnd = object.indexOf(".Module");
                if (objectEnd > 0) {
                    functionName = functionName.substr(objectEnd + 1);
                    object = object.substr(0, objectEnd);
                }
            }
            typeName = undefined;
        }
        if (method) {
            typeName = object;
            methodName = method;
        }
        if (method === "<anonymous>") {
            methodName = undefined;
            functionName = undefined;
        }
        if (functionName === undefined) {
            methodName = methodName || "<anonymous>";
            functionName = typeName ? `${typeName}.${methodName}` : methodName;
        }
        var filename = (0, _buildPolyfills._optionalChain)([
            lineMatch,
            "access",
            (_)=>_[2],
            "optionalAccess",
            (_2)=>_2.startsWith,
            "call",
            (_3)=>_3("file://")
        ]) ? lineMatch[2].substr(7) : lineMatch[2];
        var isNative = lineMatch[5] === "native";
        var isInternal = isNative || filename && !filename.startsWith("/") && !filename.startsWith(".") && filename.indexOf(":\\") !== 1;
        // in_app is all that's not an internal Node function or a module within node_modules
        // note that isNative appears to return true even for node core libraries
        // see https://github.com/getsentry/raven-node/issues/176
        var in_app = !isInternal && filename !== undefined && !filename.includes("node_modules/");
        return {
            filename,
            module: (0, _buildPolyfills._optionalChain)([
                getModule,
                "optionalCall",
                (_4)=>_4(filename)
            ]),
            function: functionName,
            lineno: parseInt(lineMatch[3], 10) || undefined,
            colno: parseInt(lineMatch[4], 10) || undefined,
            in_app
        };
    };
}
/**
 * Node.js stack line parser
 *
 * This is in @sentry/utils so it can be used from the Electron SDK in the browser for when `nodeIntegration == true`.
 * This allows it to be used without referencing or importing any node specific code which causes bundlers to complain
 */ function nodeStackLineParser(getModule) {
    return [
        90,
        node(getModule)
    ];
}

},{"./buildPolyfills":"3FO44","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3FO44":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "_asyncNullishCoalesce", ()=>(0, _asyncNullishCoalesceJs._asyncNullishCoalesce));
parcelHelpers.export(exports, "_asyncOptionalChain", ()=>(0, _asyncOptionalChainJs._asyncOptionalChain));
parcelHelpers.export(exports, "_asyncOptionalChainDelete", ()=>(0, _asyncOptionalChainDeleteJs._asyncOptionalChainDelete));
parcelHelpers.export(exports, "_createNamedExportFrom", ()=>(0, _createNamedExportFromJs._createNamedExportFrom));
parcelHelpers.export(exports, "_createStarExport", ()=>(0, _createStarExportJs._createStarExport));
parcelHelpers.export(exports, "_interopDefault", ()=>(0, _interopDefaultJs._interopDefault));
parcelHelpers.export(exports, "_interopNamespace", ()=>(0, _interopNamespaceJs._interopNamespace));
parcelHelpers.export(exports, "_interopNamespaceDefaultOnly", ()=>(0, _interopNamespaceDefaultOnlyJs._interopNamespaceDefaultOnly));
parcelHelpers.export(exports, "_interopRequireDefault", ()=>(0, _interopRequireDefaultJs._interopRequireDefault));
parcelHelpers.export(exports, "_interopRequireWildcard", ()=>(0, _interopRequireWildcardJs._interopRequireWildcard));
parcelHelpers.export(exports, "_nullishCoalesce", ()=>(0, _nullishCoalesceJs._nullishCoalesce));
parcelHelpers.export(exports, "_optionalChain", ()=>(0, _optionalChainJs._optionalChain));
parcelHelpers.export(exports, "_optionalChainDelete", ()=>(0, _optionalChainDeleteJs._optionalChainDelete));
var _asyncNullishCoalesceJs = require("./_asyncNullishCoalesce.js");
var _asyncOptionalChainJs = require("./_asyncOptionalChain.js");
var _asyncOptionalChainDeleteJs = require("./_asyncOptionalChainDelete.js");
var _createNamedExportFromJs = require("./_createNamedExportFrom.js");
var _createStarExportJs = require("./_createStarExport.js");
var _interopDefaultJs = require("./_interopDefault.js");
var _interopNamespaceJs = require("./_interopNamespace.js");
var _interopNamespaceDefaultOnlyJs = require("./_interopNamespaceDefaultOnly.js");
var _interopRequireDefaultJs = require("./_interopRequireDefault.js");
var _interopRequireWildcardJs = require("./_interopRequireWildcard.js");
var _nullishCoalesceJs = require("./_nullishCoalesce.js");
var _optionalChainJs = require("./_optionalChain.js");
var _optionalChainDeleteJs = require("./_optionalChainDelete.js");

},{"./_asyncNullishCoalesce.js":false,"./_asyncOptionalChain.js":false,"./_asyncOptionalChainDelete.js":false,"./_createNamedExportFrom.js":false,"./_createStarExport.js":false,"./_interopDefault.js":false,"./_interopNamespace.js":false,"./_interopNamespaceDefaultOnly.js":false,"./_interopRequireDefault.js":false,"./_interopRequireWildcard.js":false,"./_nullishCoalesce.js":false,"./_optionalChain.js":"50eHJ","./_optionalChainDelete.js":false,"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"50eHJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// Sucrase version
// function _optionalChain(ops) {
//   let lastAccessLHS = undefined;
//   let value = ops[0];
//   let i = 1;
//   while (i < ops.length) {
//     var op = ops[i];
//     var fn = ops[i + 1];
//     i += 2;
//     if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) {
//       return undefined;
//     }
//     if (op === 'access' || op === 'optionalAccess') {
//       lastAccessLHS = value;
//       value = fn(value);
//     } else if (op === 'call' || op === 'optionalCall') {
//       value = fn((...args) => value.call(lastAccessLHS, ...args));
//       lastAccessLHS = undefined;
//     }
//   }
//   return value;
// }
parcelHelpers.export(exports, "_optionalChain", ()=>_optionalChain);
/**
 * Polyfill for the optional chain operator, `?.`, given previous conversion of the expression into an array of values,
 * descriptors, and functions.
 *
 * Adapted from Sucrase (https://github.com/alangpierce/sucrase)
 * See https://github.com/alangpierce/sucrase/blob/265887868966917f3b924ce38dfad01fbab1329f/src/transformers/OptionalChainingNullishTransformer.ts#L15
 *
 * @param ops Array result of expression conversion
 * @returns The value of the expression
 */ function _optionalChain(ops) {
    let lastAccessLHS = undefined;
    let value = ops[0];
    let i = 1;
    while(i < ops.length){
        var op = ops[i];
        var fn = ops[i + 1];
        i += 2;
        // by checking for loose equality to `null`, we catch both `null` and `undefined`
        if ((op === "optionalAccess" || op === "optionalCall") && value == null) // really we're meaning to return `undefined` as an actual value here, but it saves bytes not to write it
        return;
        if (op === "access" || op === "optionalAccess") {
            lastAccessLHS = value;
            value = fn(value);
        } else if (op === "call" || op === "optionalCall") {
            value = fn((...args)=>value.call(lastAccessLHS, ...args));
            lastAccessLHS = undefined;
        }
    }
    return value;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6y74r":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isNativeFetch", ()=>isNativeFetch);
parcelHelpers.export(exports, "supportsDOMError", ()=>supportsDOMError);
parcelHelpers.export(exports, "supportsDOMException", ()=>supportsDOMException);
parcelHelpers.export(exports, "supportsErrorEvent", ()=>supportsErrorEvent);
parcelHelpers.export(exports, "supportsFetch", ()=>supportsFetch);
parcelHelpers.export(exports, "supportsHistory", ()=>supportsHistory);
parcelHelpers.export(exports, "supportsNativeFetch", ()=>supportsNativeFetch);
parcelHelpers.export(exports, "supportsReferrerPolicy", ()=>supportsReferrerPolicy);
parcelHelpers.export(exports, "supportsReportingObserver", ()=>supportsReportingObserver);
var _globalJs = require("./global.js");
var _loggerJs = require("./logger.js");
/**
 * Tells whether current environment supports ErrorEvent objects
 * {@link supportsErrorEvent}.
 *
 * @returns Answer to the given question.
 */ function supportsErrorEvent() {
    try {
        new ErrorEvent("");
        return true;
    } catch (e) {
        return false;
    }
}
/**
 * Tells whether current environment supports DOMError objects
 * {@link supportsDOMError}.
 *
 * @returns Answer to the given question.
 */ function supportsDOMError() {
    try {
        // Chrome: VM89:1 Uncaught TypeError: Failed to construct 'DOMError':
        // 1 argument required, but only 0 present.
        // @ts-ignore It really needs 1 argument, not 0.
        new DOMError("");
        return true;
    } catch (e) {
        return false;
    }
}
/**
 * Tells whether current environment supports DOMException objects
 * {@link supportsDOMException}.
 *
 * @returns Answer to the given question.
 */ function supportsDOMException() {
    try {
        new DOMException("");
        return true;
    } catch (e) {
        return false;
    }
}
/**
 * Tells whether current environment supports Fetch API
 * {@link supportsFetch}.
 *
 * @returns Answer to the given question.
 */ function supportsFetch() {
    if (!("fetch" in (0, _globalJs.getGlobalObject)())) return false;
    try {
        new Headers();
        new Request("");
        new Response();
        return true;
    } catch (e) {
        return false;
    }
}
/**
 * isNativeFetch checks if the given function is a native implementation of fetch()
 */ function isNativeFetch(func) {
    return func && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(func.toString());
}
/**
 * Tells whether current environment supports Fetch API natively
 * {@link supportsNativeFetch}.
 *
 * @returns true if `window.fetch` is natively implemented, false otherwise
 */ function supportsNativeFetch() {
    if (!supportsFetch()) return false;
    var global = (0, _globalJs.getGlobalObject)();
    // Fast path to avoid DOM I/O
    if (isNativeFetch(global.fetch)) return true;
    // window.fetch is implemented, but is polyfilled or already wrapped (e.g: by a chrome extension)
    // so create a "pure" iframe to see if that has native fetch
    let result = false;
    var doc = global.document;
    if (doc && typeof doc.createElement === "function") try {
        var sandbox = doc.createElement("iframe");
        sandbox.hidden = true;
        doc.head.appendChild(sandbox);
        if (sandbox.contentWindow && sandbox.contentWindow.fetch) result = isNativeFetch(sandbox.contentWindow.fetch);
        doc.head.removeChild(sandbox);
    } catch (err) {
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _loggerJs.logger).warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", err);
    }
    return result;
}
/**
 * Tells whether current environment supports ReportingObserver API
 * {@link supportsReportingObserver}.
 *
 * @returns Answer to the given question.
 */ function supportsReportingObserver() {
    return "ReportingObserver" in (0, _globalJs.getGlobalObject)();
}
/**
 * Tells whether current environment supports Referrer Policy API
 * {@link supportsReferrerPolicy}.
 *
 * @returns Answer to the given question.
 */ function supportsReferrerPolicy() {
    // Despite all stars in the sky saying that Edge supports old draft syntax, aka 'never', 'always', 'origin' and 'default'
    // (see https://caniuse.com/#feat=referrer-policy),
    // it doesn't. And it throws an exception instead of ignoring this parameter...
    // REF: https://github.com/getsentry/raven-js/issues/1233
    if (!supportsFetch()) return false;
    try {
        new Request("_", {
            referrerPolicy: "origin"
        });
        return true;
    } catch (e) {
        return false;
    }
}
/**
 * Tells whether current environment supports History API
 * {@link supportsHistory}.
 *
 * @returns Answer to the given question.
 */ function supportsHistory() {
    // NOTE: in Chrome App environment, touching history.pushState, *even inside
    //       a try/catch block*, will cause Chrome to output an error to console.error
    // borrowed from: https://github.com/angular/angular.js/pull/13945/files
    var global = (0, _globalJs.getGlobalObject)();
    var chrome = global.chrome;
    var isChromePackagedApp = chrome && chrome.app && chrome.app.runtime;
    var hasHistoryApi = "history" in global && !!global.history.pushState && !!global.history.replaceState;
    return !isChromePackagedApp && hasHistoryApi;
}

},{"./global.js":"8DShR","./logger.js":"3LvdY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fYv2G":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "memoBuilder", ()=>memoBuilder);
/**
 * Helper to decycle json objects
 */ function memoBuilder() {
    var hasWeakSet = typeof WeakSet === "function";
    var inner = hasWeakSet ? new WeakSet() : [];
    function memoize(obj) {
        if (hasWeakSet) {
            if (inner.has(obj)) return true;
            inner.add(obj);
            return false;
        }
        for(let i = 0; i < inner.length; i++){
            var value = inner[i];
            if (value === obj) return true;
        }
        inner.push(obj);
        return false;
    }
    function unmemoize(obj) {
        if (hasWeakSet) inner.delete(obj);
        else {
            for(let i = 0; i < inner.length; i++)if (inner[i] === obj) {
                inner.splice(i, 1);
                break;
            }
        }
    }
    return [
        memoize,
        unmemoize
    ];
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bgT10":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addContextToFrame", ()=>addContextToFrame);
parcelHelpers.export(exports, "addExceptionMechanism", ()=>addExceptionMechanism);
parcelHelpers.export(exports, "addExceptionTypeValue", ()=>addExceptionTypeValue);
parcelHelpers.export(exports, "checkOrSetAlreadyCaught", ()=>checkOrSetAlreadyCaught);
parcelHelpers.export(exports, "getEventDescription", ()=>getEventDescription);
parcelHelpers.export(exports, "parseSemver", ()=>parseSemver);
parcelHelpers.export(exports, "parseUrl", ()=>parseUrl);
parcelHelpers.export(exports, "stripUrlQueryAndFragment", ()=>stripUrlQueryAndFragment);
parcelHelpers.export(exports, "uuid4", ()=>uuid4);
var _globalJs = require("./global.js");
var _objectJs = require("./object.js");
var _stringJs = require("./string.js");
/**
 * Extended Window interface that allows for Crypto API usage in IE browsers
 */ /**
 * UUID4 generator
 *
 * @returns string Generated UUID4.
 */ function uuid4() {
    var global = (0, _globalJs.getGlobalObject)();
    var crypto = global.crypto || global.msCrypto;
    if (!(crypto === void 0) && crypto.getRandomValues) {
        // Use window.crypto API if available
        var arr = new Uint16Array(8);
        crypto.getRandomValues(arr);
        // set 4 in byte 7
        arr[3] = arr[3] & 0xfff | 0x4000;
        // set 2 most significant bits of byte 9 to '10'
        arr[4] = arr[4] & 0x3fff | 0x8000;
        var pad = (num)=>{
            let v = num.toString(16);
            while(v.length < 4)v = `0${v}`;
            return v;
        };
        return pad(arr[0]) + pad(arr[1]) + pad(arr[2]) + pad(arr[3]) + pad(arr[4]) + pad(arr[5]) + pad(arr[6]) + pad(arr[7]);
    }
    // http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript/2117523#2117523
    return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, (c)=>{
        var r = Math.random() * 16 | 0;
        var v = c === "x" ? r : r & 0x3 | 0x8;
        return v.toString(16);
    });
}
/**
 * Parses string form of URL into an object
 * // borrowed from https://tools.ietf.org/html/rfc3986#appendix-B
 * // intentionally using regex and not <a/> href parsing trick because React Native and other
 * // environments where DOM might not be available
 * @returns parsed URL object
 */ function parseUrl(url) {
    if (!url) return {};
    var match = url.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
    if (!match) return {};
    // coerce to undefined values to empty string so we don't get 'undefined'
    var query = match[6] || "";
    var fragment = match[8] || "";
    return {
        host: match[4],
        path: match[5],
        protocol: match[2],
        relative: match[5] + query + fragment
    };
}
function getFirstException(event) {
    return event.exception && event.exception.values ? event.exception.values[0] : undefined;
}
/**
 * Extracts either message or type+value from an event that can be used for user-facing logs
 * @returns event's description
 */ function getEventDescription(event) {
    const { message , event_id: eventId  } = event;
    if (message) return message;
    var firstException = getFirstException(event);
    if (firstException) {
        if (firstException.type && firstException.value) return `${firstException.type}: ${firstException.value}`;
        return firstException.type || firstException.value || eventId || "<unknown>";
    }
    return eventId || "<unknown>";
}
/**
 * Adds exception values, type and value to an synthetic Exception.
 * @param event The event to modify.
 * @param value Value of the exception.
 * @param type Type of the exception.
 * @hidden
 */ function addExceptionTypeValue(event, value, type) {
    var exception = event.exception = event.exception || {};
    var values = exception.values = exception.values || [];
    var firstException = values[0] = values[0] || {};
    if (!firstException.value) firstException.value = value || "";
    if (!firstException.type) firstException.type = type || "Error";
}
/**
 * Adds exception mechanism data to a given event. Uses defaults if the second parameter is not passed.
 *
 * @param event The event to modify.
 * @param newMechanism Mechanism data to add to the event.
 * @hidden
 */ function addExceptionMechanism(event, newMechanism) {
    var firstException = getFirstException(event);
    if (!firstException) return;
    var defaultMechanism = {
        type: "generic",
        handled: true
    };
    var currentMechanism = firstException.mechanism;
    firstException.mechanism = {
        ...defaultMechanism,
        ...currentMechanism,
        ...newMechanism
    };
    if (newMechanism && "data" in newMechanism) {
        var mergedData = {
            ...currentMechanism && currentMechanism.data,
            ...newMechanism.data
        };
        firstException.mechanism.data = mergedData;
    }
}
// https://semver.org/#is-there-a-suggested-regular-expression-regex-to-check-a-semver-string
var SEMVER_REGEXP = /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/;
/**
 * Represents Semantic Versioning object
 */ /**
 * Parses input into a SemVer interface
 * @param input string representation of a semver version
 */ function parseSemver(input) {
    var match = input.match(SEMVER_REGEXP) || [];
    var major = parseInt(match[1], 10);
    var minor = parseInt(match[2], 10);
    var patch = parseInt(match[3], 10);
    return {
        buildmetadata: match[5],
        major: isNaN(major) ? undefined : major,
        minor: isNaN(minor) ? undefined : minor,
        patch: isNaN(patch) ? undefined : patch,
        prerelease: match[4]
    };
}
/**
 * This function adds context (pre/post/line) lines to the provided frame
 *
 * @param lines string[] containing all lines
 * @param frame StackFrame that will be mutated
 * @param linesOfContext number of context lines we want to add pre/post
 */ function addContextToFrame(lines, frame, linesOfContext = 5) {
    var lineno = frame.lineno || 0;
    var maxLines = lines.length;
    var sourceLine = Math.max(Math.min(maxLines, lineno - 1), 0);
    frame.pre_context = lines.slice(Math.max(0, sourceLine - linesOfContext), sourceLine).map((line)=>(0, _stringJs.snipLine)(line, 0));
    frame.context_line = (0, _stringJs.snipLine)(lines[Math.min(maxLines - 1, sourceLine)], frame.colno || 0);
    frame.post_context = lines.slice(Math.min(sourceLine + 1, maxLines), sourceLine + 1 + linesOfContext).map((line)=>(0, _stringJs.snipLine)(line, 0));
}
/**
 * Strip the query string and fragment off of a given URL or path (if present)
 *
 * @param urlPath Full URL or path, including possible query string and/or fragment
 * @returns URL or path without query string or fragment
 */ function stripUrlQueryAndFragment(urlPath) {
    return urlPath.split(/[\?#]/, 1)[0];
}
/**
 * Checks whether or not we've already captured the given exception (note: not an identical exception - the very object
 * in question), and marks it captured if not.
 *
 * This is useful because it's possible for an error to get captured by more than one mechanism. After we intercept and
 * record an error, we rethrow it (assuming we've intercepted it before it's reached the top-level global handlers), so
 * that we don't interfere with whatever effects the error might have had were the SDK not there. At that point, because
 * the error has been rethrown, it's possible for it to bubble up to some other code we've instrumented. If it's not
 * caught after that, it will bubble all the way up to the global handlers (which of course we also instrument). This
 * function helps us ensure that even if we encounter the same error more than once, we only record it the first time we
 * see it.
 *
 * Note: It will ignore primitives (always return `false` and not mark them as seen), as properties can't be set on
 * them. {@link: Object.objectify} can be used on exceptions to convert any that are primitives into their equivalent
 * object wrapper forms so that this check will always work. However, because we need to flag the exact object which
 * will get rethrown, and because that rethrowing happens outside of the event processing pipeline, the objectification
 * must be done before the exception captured.
 *
 * @param A thrown exception to check or flag as having been seen
 * @returns `true` if the exception has already been captured, `false` if not (with the side effect of marking it seen)
 */ function checkOrSetAlreadyCaught(exception) {
    if (exception && exception.__sentry_captured__) return true;
    try {
        // set it this way rather than by assignment so that it's not ennumerable and therefore isn't recorded by the
        // `ExtraErrorData` integration
        (0, _objectJs.addNonEnumerableProperty)(exception, "__sentry_captured__", true);
    } catch (err) {
    // `exception` is a primitive, so we can't mark it seen
    }
    return false;
}

},{"./global.js":"8DShR","./object.js":"56C4m","./string.js":"6VoCN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cuPkr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "normalize", ()=>normalize);
parcelHelpers.export(exports, "normalizeToSize", ()=>normalizeToSize);
parcelHelpers.export(exports, "walk", ()=>visit);
var _isJs = require("./is.js");
var _memoJs = require("./memo.js");
var _objectJs = require("./object.js");
var _stacktraceJs = require("./stacktrace.js");
var global = arguments[3];
/**
 * Recursively normalizes the given object.
 *
 * - Creates a copy to prevent original input mutation
 * - Skips non-enumerable properties
 * - When stringifying, calls `toJSON` if implemented
 * - Removes circular references
 * - Translates non-serializable values (`undefined`/`NaN`/functions) to serializable format
 * - Translates known global objects/classes to a string representations
 * - Takes care of `Error` object serialization
 * - Optionally limits depth of final output
 * - Optionally limits number of properties/elements included in any single object/array
 *
 * @param input The object to be normalized.
 * @param depth The max depth to which to normalize the object. (Anything deeper stringified whole.)
 * @param maxProperties The max number of elements or properties to be included in any single array or
 * object in the normallized output..
 * @returns A normalized version of the object, or `"**non-serializable**"` if any errors are thrown during normalization.
 */ function normalize(input, depth = Infinity, maxProperties = Infinity) {
    try {
        // since we're at the outermost level, we don't provide a key
        return visit("", input, depth, maxProperties);
    } catch (err) {
        return {
            ERROR: `**non-serializable** (${err})`
        };
    }
}
/** JSDoc */ function normalizeToSize(object, // Default Node.js REPL depth
depth = 3, // 100kB, as 200kB is max payload size, so half sounds reasonable
maxSize = 102400) {
    var normalized = normalize(object, depth);
    if (jsonSize(normalized) > maxSize) return normalizeToSize(object, depth - 1, maxSize);
    return normalized;
}
/**
 * Visits a node to perform normalization on it
 *
 * @param key The key corresponding to the given node
 * @param value The node to be visited
 * @param depth Optional number indicating the maximum recursion depth
 * @param maxProperties Optional maximum number of properties/elements included in any single object/array
 * @param memo Optional Memo class handling decycling
 */ function visit(key, value, depth = Infinity, maxProperties = Infinity, memo = (0, _memoJs.memoBuilder)()) {
    const [memoize, unmemoize] = memo;
    // Get the simple cases out of the way first
    if (value === null || [
        "number",
        "boolean",
        "string"
    ].includes(typeof value) && !(0, _isJs.isNaN)(value)) return value;
    var stringified = stringifyValue(key, value);
    // Anything we could potentially dig into more (objects or arrays) will have come back as `"[object XXXX]"`.
    // Everything else will have already been serialized, so if we don't see that pattern, we're done.
    if (!stringified.startsWith("[object ")) return stringified;
    // From here on, we can assert that `value` is either an object or an array.
    // Do not normalize objects that we know have already been normalized. As a general rule, the
    // "__sentry_skip_normalization__" property should only be used sparingly and only should only be set on objects that
    // have already been normalized.
    if (value["__sentry_skip_normalization__"]) return value;
    // We're also done if we've reached the max depth
    if (depth === 0) // At this point we know `serialized` is a string of the form `"[object XXXX]"`. Clean it up so it's just `"[XXXX]"`.
    return stringified.replace("object ", "");
    // If we've already visited this branch, bail out, as it's circular reference. If not, note that we're seeing it now.
    if (memoize(value)) return "[Circular ~]";
    // If the value has a `toJSON` method, we call it to extract more information
    var valueWithToJSON = value;
    if (valueWithToJSON && typeof valueWithToJSON.toJSON === "function") try {
        var jsonValue = valueWithToJSON.toJSON();
        // We need to normalize the return value of `.toJSON()` in case it has circular references
        return visit("", jsonValue, depth - 1, maxProperties, memo);
    } catch (err) {
    // pass (The built-in `toJSON` failed, but we can still try to do it ourselves)
    }
    // At this point we know we either have an object or an array, we haven't seen it before, and we're going to recurse
    // because we haven't yet reached the max depth. Create an accumulator to hold the results of visiting each
    // property/entry, and keep track of the number of items we add to it.
    var normalized = Array.isArray(value) ? [] : {};
    let numAdded = 0;
    // Before we begin, convert`Error` and`Event` instances into plain objects, since some of each of their relevant
    // properties are non-enumerable and otherwise would get missed.
    var visitable = (0, _objectJs.convertToPlainObject)(value);
    for(var visitKey in visitable){
        // Avoid iterating over fields in the prototype if they've somehow been exposed to enumeration.
        if (!Object.prototype.hasOwnProperty.call(visitable, visitKey)) continue;
        if (numAdded >= maxProperties) {
            normalized[visitKey] = "[MaxProperties ~]";
            break;
        }
        // Recursively visit all the child nodes
        var visitValue = visitable[visitKey];
        normalized[visitKey] = visit(visitKey, visitValue, depth - 1, maxProperties, memo);
        numAdded += 1;
    }
    // Once we've visited all the branches, remove the parent from memo storage
    unmemoize(value);
    // Return accumulated values
    return normalized;
}
/**
 * Stringify the given value. Handles various known special values and types.
 *
 * Not meant to be used on simple primitives which already have a string representation, as it will, for example, turn
 * the number 1231 into "[Object Number]", nor on `null`, as it will throw.
 *
 * @param value The value to stringify
 * @returns A stringified representation of the given value
 */ function stringifyValue(key, // this type is a tiny bit of a cheat, since this function does handle NaN (which is technically a number), but for
// our internal use, it'll do
value) {
    try {
        if (key === "domain" && value && typeof value === "object" && value._events) return "[Domain]";
        if (key === "domainEmitter") return "[DomainEmitter]";
        // It's safe to use `global`, `window`, and `document` here in this manner, as we are asserting using `typeof` first
        // which won't throw if they are not present.
        if (typeof global !== "undefined" && value === global) return "[Global]";
        if (typeof window !== "undefined" && value === window) return "[Window]";
        if (typeof document !== "undefined" && value === document) return "[Document]";
        // React's SyntheticEvent thingy
        if ((0, _isJs.isSyntheticEvent)(value)) return "[SyntheticEvent]";
        if (typeof value === "number" && value !== value) return "[NaN]";
        // this catches `undefined` (but not `null`, which is a primitive and can be serialized on its own)
        if (value === void 0) return "[undefined]";
        if (typeof value === "function") return `[Function: ${(0, _stacktraceJs.getFunctionName)(value)}]`;
        if (typeof value === "symbol") return `[${String(value)}]`;
        // stringified BigInts are indistinguishable from regular numbers, so we need to label them to avoid confusion
        if (typeof value === "bigint") return `[BigInt: ${String(value)}]`;
        // Now that we've knocked out all the special cases and the primitives, all we have left are objects. Simply casting
        // them to strings means that instances of classes which haven't defined their `toStringTag` will just come out as
        // `"[object Object]"`. If we instead look at the constructor's name (which is the same as the name of the class),
        // we can make sure that only plain objects come out that way.
        return `[object ${Object.getPrototypeOf(value).constructor.name}]`;
    } catch (err) {
        return `**non-serializable** (${err})`;
    }
}
/** Calculates bytes size of input string */ function utf8Length(value) {
    return ~-encodeURI(value).split(/%..|./).length;
}
/** Calculates bytes size of input object */ function jsonSize(value) {
    return utf8Length(JSON.stringify(value));
}

},{"./is.js":"451Wr","./memo.js":"fYv2G","./object.js":"56C4m","./stacktrace.js":"2Z3L5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lufcL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "makePromiseBuffer", ()=>makePromiseBuffer);
var _errorJs = require("./error.js");
var _syncpromiseJs = require("./syncpromise.js");
/**
 * Creates an new PromiseBuffer object with the specified limit
 * @param limit max number of promises that can be stored in the buffer
 */ function makePromiseBuffer(limit) {
    var buffer = [];
    function isReady() {
        return limit === undefined || buffer.length < limit;
    }
    /**
   * Remove a promise from the queue.
   *
   * @param task Can be any PromiseLike<T>
   * @returns Removed promise.
   */ function remove(task) {
        return buffer.splice(buffer.indexOf(task), 1)[0];
    }
    /**
   * Add a promise (representing an in-flight action) to the queue, and set it to remove itself on fulfillment.
   *
   * @param taskProducer A function producing any PromiseLike<T>; In previous versions this used to be `task:
   *        PromiseLike<T>`, but under that model, Promises were instantly created on the call-site and their executor
   *        functions therefore ran immediately. Thus, even if the buffer was full, the action still happened. By
   *        requiring the promise to be wrapped in a function, we can defer promise creation until after the buffer
   *        limit check.
   * @returns The original promise.
   */ function add(taskProducer) {
        if (!isReady()) return (0, _syncpromiseJs.rejectedSyncPromise)(new (0, _errorJs.SentryError)("Not adding Promise due to buffer limit reached."));
        // start the task and add its promise to the queue
        var task = taskProducer();
        if (buffer.indexOf(task) === -1) buffer.push(task);
        task.then(()=>remove(task))// Use `then(null, rejectionHandler)` rather than `catch(rejectionHandler)` so that we can use `PromiseLike`
        // rather than `Promise`. `PromiseLike` doesn't have a `.catch` method, making its polyfill smaller. (ES5 didn't
        // have promises, so TS has to polyfill when down-compiling.)
        .then(null, ()=>remove(task).then(null, ()=>{
            // We have to add another catch here because `remove()` starts a new promise chain.
            }));
        return task;
    }
    /**
   * Wait for all promises in the queue to resolve or for timeout to expire, whichever comes first.
   *
   * @param timeout The time, in ms, after which to resolve to `false` if the queue is still non-empty. Passing `0` (or
   * not passing anything) will make the promise wait as long as it takes for the queue to drain before resolving to
   * `true`.
   * @returns A promise which will resolve to `true` if the queue is already empty or drains before the timeout, and
   * `false` otherwise
   */ function drain(timeout) {
        return new (0, _syncpromiseJs.SyncPromise)((resolve, reject)=>{
            let counter = buffer.length;
            if (!counter) return resolve(true);
            // wait for `timeout` ms and then resolve to `false` (if not cancelled first)
            var capturedSetTimeout = setTimeout(()=>{
                if (timeout && timeout > 0) resolve(false);
            }, timeout);
            // if all promises resolve in time, cancel the timer and resolve to `true`
            buffer.forEach((item)=>{
                (0, _syncpromiseJs.resolvedSyncPromise)(item).then(()=>{
                    if (!--counter) {
                        clearTimeout(capturedSetTimeout);
                        resolve(true);
                    }
                }, reject);
            });
        });
    }
    return {
        $: buffer,
        add,
        drain
    };
}

},{"./error.js":"1RnP9","./syncpromise.js":"cSJ3y","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cSJ3y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SyncPromise", ()=>SyncPromise);
parcelHelpers.export(exports, "rejectedSyncPromise", ()=>rejectedSyncPromise);
parcelHelpers.export(exports, "resolvedSyncPromise", ()=>resolvedSyncPromise);
var _isJs = require("./is.js");
/** SyncPromise internal states */ var States;
(function(States1) {
    /** Pending */ var PENDING = 0;
    States1[States1["PENDING"] = PENDING] = "PENDING";
    /** Resolved / OK */ var RESOLVED = 1;
    States1[States1["RESOLVED"] = RESOLVED] = "RESOLVED";
    /** Rejected / Error */ var REJECTED = 2;
    States1[States1["REJECTED"] = REJECTED] = "REJECTED";
})(States || (States = {}));
// Overloads so we can call resolvedSyncPromise without arguments and generic argument
/**
 * Creates a resolved sync promise.
 *
 * @param value the value to resolve the promise with
 * @returns the resolved sync promise
 */ function resolvedSyncPromise(value) {
    return new SyncPromise((resolve)=>{
        resolve(value);
    });
}
/**
 * Creates a rejected sync promise.
 *
 * @param value the value to reject the promise with
 * @returns the rejected sync promise
 */ function rejectedSyncPromise(reason) {
    return new SyncPromise((_, reject)=>{
        reject(reason);
    });
}
/**
 * Thenable class that behaves like a Promise and follows it's interface
 * but is not async internally
 */ class SyncPromise {
    __init() {
        this._state = States.PENDING;
    }
    __init2() {
        this._handlers = [];
    }
    constructor(executor){
        SyncPromise.prototype.__init.call(this);
        SyncPromise.prototype.__init2.call(this);
        SyncPromise.prototype.__init3.call(this);
        SyncPromise.prototype.__init4.call(this);
        SyncPromise.prototype.__init5.call(this);
        SyncPromise.prototype.__init6.call(this);
        try {
            executor(this._resolve, this._reject);
        } catch (e) {
            this._reject(e);
        }
    }
    /** JSDoc */ then(onfulfilled, onrejected) {
        return new SyncPromise((resolve, reject)=>{
            this._handlers.push([
                false,
                (result)=>{
                    if (!onfulfilled) // TODO: ¯\_(ツ)_/¯
                    // TODO: FIXME
                    resolve(result);
                    else try {
                        resolve(onfulfilled(result));
                    } catch (e) {
                        reject(e);
                    }
                },
                (reason)=>{
                    if (!onrejected) reject(reason);
                    else try {
                        resolve(onrejected(reason));
                    } catch (e) {
                        reject(e);
                    }
                }, 
            ]);
            this._executeHandlers();
        });
    }
    /** JSDoc */ catch(onrejected) {
        return this.then((val)=>val, onrejected);
    }
    /** JSDoc */ finally(onfinally) {
        return new SyncPromise((resolve, reject)=>{
            let val;
            let isRejected;
            return this.then((value)=>{
                isRejected = false;
                val = value;
                if (onfinally) onfinally();
            }, (reason)=>{
                isRejected = true;
                val = reason;
                if (onfinally) onfinally();
            }).then(()=>{
                if (isRejected) {
                    reject(val);
                    return;
                }
                resolve(val);
            });
        });
    }
    /** JSDoc */ __init3() {
        this._resolve = (value)=>{
            this._setResult(States.RESOLVED, value);
        };
    }
    /** JSDoc */ __init4() {
        this._reject = (reason)=>{
            this._setResult(States.REJECTED, reason);
        };
    }
    /** JSDoc */ __init5() {
        this._setResult = (state, value)=>{
            if (this._state !== States.PENDING) return;
            if ((0, _isJs.isThenable)(value)) {
                value.then(this._resolve, this._reject);
                return;
            }
            this._state = state;
            this._value = value;
            this._executeHandlers();
        };
    }
    /** JSDoc */ __init6() {
        this._executeHandlers = ()=>{
            if (this._state === States.PENDING) return;
            var cachedHandlers = this._handlers.slice();
            this._handlers = [];
            cachedHandlers.forEach((handler)=>{
                if (handler[0]) return;
                if (this._state === States.RESOLVED) handler[1](this._value);
                if (this._state === States.REJECTED) handler[2](this._value);
                handler[0] = true;
            });
        };
    }
}

},{"./is.js":"451Wr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fOAJW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "severityFromString", ()=>severityFromString);
parcelHelpers.export(exports, "severityLevelFromString", ()=>severityLevelFromString);
parcelHelpers.export(exports, "validSeverityLevels", ()=>validSeverityLevels);
// Note: Ideally the `SeverityLevel` type would be derived from `validSeverityLevels`, but that would mean either
//
// a) moving `validSeverityLevels` to `@sentry/types`,
// b) moving the`SeverityLevel` type here, or
// c) importing `validSeverityLevels` from here into `@sentry/types`.
//
// Option A would make `@sentry/types` a runtime dependency of `@sentry/utils` (not good), and options B and C would
// create a circular dependency between `@sentry/types` and `@sentry/utils` (also not good). So a TODO accompanying the
// type, reminding anyone who changes it to change this list also, will have to do.
var validSeverityLevels = [
    "fatal",
    "error",
    "warning",
    "log",
    "info",
    "debug"
];
/**
 * Converts a string-based level into a member of the deprecated {@link Severity} enum.
 *
 * @deprecated `severityFromString` is deprecated. Please use `severityLevelFromString` instead.
 *
 * @param level String representation of Severity
 * @returns Severity
 */ function severityFromString(level) {
    return severityLevelFromString(level);
}
/**
 * Converts a string-based level into a `SeverityLevel`, normalizing it along the way.
 *
 * @param level String representation of desired `SeverityLevel`.
 * @returns The `SeverityLevel` corresponding to the given string, or 'log' if the string isn't a valid level.
 */ function severityLevelFromString(level) {
    return level === "warn" ? "warning" : validSeverityLevels.includes(level) ? level : "log";
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bLEdM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "_browserPerformanceTimeOriginMode", ()=>_browserPerformanceTimeOriginMode);
parcelHelpers.export(exports, "browserPerformanceTimeOrigin", ()=>browserPerformanceTimeOrigin);
parcelHelpers.export(exports, "dateTimestampInSeconds", ()=>dateTimestampInSeconds);
parcelHelpers.export(exports, "timestampInSeconds", ()=>timestampInSeconds);
parcelHelpers.export(exports, "timestampWithMs", ()=>timestampWithMs);
parcelHelpers.export(exports, "usingPerformanceAPI", ()=>usingPerformanceAPI);
var _globalJs = require("./global.js");
var _nodeJs = require("./node.js");
/**
 * An object that can return the current timestamp in seconds since the UNIX epoch.
 */ /**
 * A TimestampSource implementation for environments that do not support the Performance Web API natively.
 *
 * Note that this TimestampSource does not use a monotonic clock. A call to `nowSeconds` may return a timestamp earlier
 * than a previously returned value. We do not try to emulate a monotonic behavior in order to facilitate debugging. It
 * is more obvious to explain "why does my span have negative duration" than "why my spans have zero duration".
 */ var dateTimestampSource = {
    nowSeconds: ()=>Date.now() / 1000
};
/**
 * A partial definition of the [Performance Web API]{@link https://developer.mozilla.org/en-US/docs/Web/API/Performance}
 * for accessing a high-resolution monotonic clock.
 */ /**
 * Returns a wrapper around the native Performance API browser implementation, or undefined for browsers that do not
 * support the API.
 *
 * Wrapping the native API works around differences in behavior from different browsers.
 */ function getBrowserPerformance() {
    const { performance  } = (0, _globalJs.getGlobalObject)();
    if (!performance || !performance.now) return undefined;
    // Replace performance.timeOrigin with our own timeOrigin based on Date.now().
    //
    // This is a partial workaround for browsers reporting performance.timeOrigin such that performance.timeOrigin +
    // performance.now() gives a date arbitrarily in the past.
    //
    // Additionally, computing timeOrigin in this way fills the gap for browsers where performance.timeOrigin is
    // undefined.
    //
    // The assumption that performance.timeOrigin + performance.now() ~= Date.now() is flawed, but we depend on it to
    // interact with data coming out of performance entries.
    //
    // Note that despite recommendations against it in the spec, browsers implement the Performance API with a clock that
    // might stop when the computer is asleep (and perhaps under other circumstances). Such behavior causes
    // performance.timeOrigin + performance.now() to have an arbitrary skew over Date.now(). In laptop computers, we have
    // observed skews that can be as long as days, weeks or months.
    //
    // See https://github.com/getsentry/sentry-javascript/issues/2590.
    //
    // BUG: despite our best intentions, this workaround has its limitations. It mostly addresses timings of pageload
    // transactions, but ignores the skew built up over time that can aversely affect timestamps of navigation
    // transactions of long-lived web pages.
    var timeOrigin = Date.now() - performance.now();
    return {
        now: ()=>performance.now(),
        timeOrigin
    };
}
/**
 * Returns the native Performance API implementation from Node.js. Returns undefined in old Node.js versions that don't
 * implement the API.
 */ function getNodePerformance() {
    try {
        var perfHooks = (0, _nodeJs.dynamicRequire)(module, "perf_hooks");
        return perfHooks.performance;
    } catch (_) {
        return undefined;
    }
}
/**
 * The Performance API implementation for the current platform, if available.
 */ var platformPerformance = (0, _nodeJs.isNodeEnv)() ? getNodePerformance() : getBrowserPerformance();
var timestampSource = platformPerformance === undefined ? dateTimestampSource : {
    nowSeconds: ()=>(platformPerformance.timeOrigin + platformPerformance.now()) / 1000
};
/**
 * Returns a timestamp in seconds since the UNIX epoch using the Date API.
 */ var dateTimestampInSeconds = dateTimestampSource.nowSeconds.bind(dateTimestampSource);
/**
 * Returns a timestamp in seconds since the UNIX epoch using either the Performance or Date APIs, depending on the
 * availability of the Performance API.
 *
 * See `usingPerformanceAPI` to test whether the Performance API is used.
 *
 * BUG: Note that because of how browsers implement the Performance API, the clock might stop when the computer is
 * asleep. This creates a skew between `dateTimestampInSeconds` and `timestampInSeconds`. The
 * skew can grow to arbitrary amounts like days, weeks or months.
 * See https://github.com/getsentry/sentry-javascript/issues/2590.
 */ var timestampInSeconds = timestampSource.nowSeconds.bind(timestampSource);
// Re-exported with an old name for backwards-compatibility.
var timestampWithMs = timestampInSeconds;
/**
 * A boolean that is true when timestampInSeconds uses the Performance API to produce monotonic timestamps.
 */ var usingPerformanceAPI = platformPerformance !== undefined;
/**
 * Internal helper to store what is the source of browserPerformanceTimeOrigin below. For debugging only.
 */ let _browserPerformanceTimeOriginMode;
/**
 * The number of milliseconds since the UNIX epoch. This value is only usable in a browser, and only when the
 * performance API is available.
 */ var browserPerformanceTimeOrigin = (()=>{
    // Unfortunately browsers may report an inaccurate time origin data, through either performance.timeOrigin or
    // performance.timing.navigationStart, which results in poor results in performance data. We only treat time origin
    // data as reliable if they are within a reasonable threshold of the current time.
    const { performance  } = (0, _globalJs.getGlobalObject)();
    if (!performance || !performance.now) {
        _browserPerformanceTimeOriginMode = "none";
        return undefined;
    }
    var threshold = 3600000;
    var performanceNow = performance.now();
    var dateNow = Date.now();
    // if timeOrigin isn't available set delta to threshold so it isn't used
    var timeOriginDelta = performance.timeOrigin ? Math.abs(performance.timeOrigin + performanceNow - dateNow) : threshold;
    var timeOriginIsReliable = timeOriginDelta < threshold;
    // While performance.timing.navigationStart is deprecated in favor of performance.timeOrigin, performance.timeOrigin
    // is not as widely supported. Namely, performance.timeOrigin is undefined in Safari as of writing.
    // Also as of writing, performance.timing is not available in Web Workers in mainstream browsers, so it is not always
    // a valid fallback. In the absence of an initial time provided by the browser, fallback to the current time from the
    // Date API.
    var navigationStart = performance.timing && performance.timing.navigationStart;
    var hasNavigationStart = typeof navigationStart === "number";
    // if navigationStart isn't available set delta to threshold so it isn't used
    var navigationStartDelta = hasNavigationStart ? Math.abs(navigationStart + performanceNow - dateNow) : threshold;
    var navigationStartIsReliable = navigationStartDelta < threshold;
    if (timeOriginIsReliable || navigationStartIsReliable) {
        // Use the more reliable time origin
        if (timeOriginDelta <= navigationStartDelta) {
            _browserPerformanceTimeOriginMode = "timeOrigin";
            return performance.timeOrigin;
        } else {
            _browserPerformanceTimeOriginMode = "navigationStart";
            return navigationStart;
        }
    }
    // Either both timeOrigin and navigationStart are skewed or neither is available, fallback to Date.
    _browserPerformanceTimeOriginMode = "dateNow";
    return dateNow;
})();

},{"./global.js":"8DShR","./node.js":"2Azyo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4EBuq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addItemToEnvelope", ()=>addItemToEnvelope);
parcelHelpers.export(exports, "createAttachmentEnvelopeItem", ()=>createAttachmentEnvelopeItem);
parcelHelpers.export(exports, "createEnvelope", ()=>createEnvelope);
parcelHelpers.export(exports, "envelopeItemTypeToDataCategory", ()=>envelopeItemTypeToDataCategory);
parcelHelpers.export(exports, "forEachEnvelopeItem", ()=>forEachEnvelopeItem);
parcelHelpers.export(exports, "serializeEnvelope", ()=>serializeEnvelope);
var _objectJs = require("./object.js");
/**
 * Creates an envelope.
 * Make sure to always explicitly provide the generic to this function
 * so that the envelope types resolve correctly.
 */ function createEnvelope(headers, items = []) {
    return [
        headers,
        items
    ];
}
/**
 * Add an item to an envelope.
 * Make sure to always explicitly provide the generic to this function
 * so that the envelope types resolve correctly.
 */ function addItemToEnvelope(envelope, newItem) {
    const [headers, items] = envelope;
    return [
        headers,
        [
            ...items,
            newItem
        ]
    ];
}
/**
 * Convenience function to loop through the items and item types of an envelope.
 * (This function was mostly created because working with envelope types is painful at the moment)
 */ function forEachEnvelopeItem(envelope, callback) {
    var envelopeItems = envelope[1];
    envelopeItems.forEach((envelopeItem)=>{
        var envelopeItemType = envelopeItem[0].type;
        callback(envelopeItem, envelopeItemType);
    });
}
function encodeUTF8(input, textEncoder) {
    var utf8 = textEncoder || new TextEncoder();
    return utf8.encode(input);
}
/**
 * Serializes an envelope.
 */ function serializeEnvelope(envelope, textEncoder) {
    const [envHeaders, items] = envelope;
    // Initially we construct our envelope as a string and only convert to binary chunks if we encounter binary data
    let parts = JSON.stringify(envHeaders);
    function append(next) {
        if (typeof parts === "string") parts = typeof next === "string" ? parts + next : [
            encodeUTF8(parts, textEncoder),
            next
        ];
        else parts.push(typeof next === "string" ? encodeUTF8(next, textEncoder) : next);
    }
    for (var item of items){
        const [itemHeaders, payload] = item;
        append(`\n${JSON.stringify(itemHeaders)}\n`);
        append(typeof payload === "string" || payload instanceof Uint8Array ? payload : JSON.stringify(payload));
    }
    return typeof parts === "string" ? parts : concatBuffers(parts);
}
function concatBuffers(buffers) {
    var totalLength = buffers.reduce((acc, buf)=>acc + buf.length, 0);
    var merged = new Uint8Array(totalLength);
    let offset = 0;
    for (var buffer of buffers){
        merged.set(buffer, offset);
        offset += buffer.length;
    }
    return merged;
}
/**
 * Creates attachment envelope items
 */ function createAttachmentEnvelopeItem(attachment, textEncoder) {
    var buffer = typeof attachment.data === "string" ? encodeUTF8(attachment.data, textEncoder) : attachment.data;
    return [
        (0, _objectJs.dropUndefinedKeys)({
            type: "attachment",
            length: buffer.length,
            filename: attachment.filename,
            content_type: attachment.contentType,
            attachment_type: attachment.attachmentType
        }),
        buffer, 
    ];
}
var ITEM_TYPE_TO_DATA_CATEGORY_MAP = {
    session: "session",
    sessions: "session",
    attachment: "attachment",
    transaction: "transaction",
    event: "error",
    client_report: "internal",
    user_report: "default"
};
/**
 * Maps the type of an envelope item to a data category.
 */ function envelopeItemTypeToDataCategory(type) {
    return ITEM_TYPE_TO_DATA_CATEGORY_MAP[type];
}

},{"./object.js":"56C4m","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f7LYw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createClientReportEnvelope", ()=>createClientReportEnvelope);
var _envelopeJs = require("./envelope.js");
var _timeJs = require("./time.js");
/**
 * Creates client report envelope
 * @param discarded_events An array of discard events
 * @param dsn A DSN that can be set on the header. Optional.
 */ function createClientReportEnvelope(discarded_events, dsn, timestamp) {
    var clientReportItem = [
        {
            type: "client_report"
        },
        {
            timestamp: timestamp || (0, _timeJs.dateTimestampInSeconds)(),
            discarded_events
        }, 
    ];
    return (0, _envelopeJs.createEnvelope)(dsn ? {
        dsn
    } : {}, [
        clientReportItem
    ]);
}

},{"./envelope.js":"4EBuq","./time.js":"bLEdM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8cwq7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DEFAULT_RETRY_AFTER", ()=>DEFAULT_RETRY_AFTER);
parcelHelpers.export(exports, "disabledUntil", ()=>disabledUntil);
parcelHelpers.export(exports, "isRateLimited", ()=>isRateLimited);
parcelHelpers.export(exports, "parseRetryAfterHeader", ()=>parseRetryAfterHeader);
parcelHelpers.export(exports, "updateRateLimits", ()=>updateRateLimits);
// Intentionally keeping the key broad, as we don't know for sure what rate limit headers get returned from backend
var DEFAULT_RETRY_AFTER = 60000; // 60 seconds
/**
 * Extracts Retry-After value from the request header or returns default value
 * @param header string representation of 'Retry-After' header
 * @param now current unix timestamp
 *
 */ function parseRetryAfterHeader(header, now = Date.now()) {
    var headerDelay = parseInt(`${header}`, 10);
    if (!isNaN(headerDelay)) return headerDelay * 1000;
    var headerDate = Date.parse(`${header}`);
    if (!isNaN(headerDate)) return headerDate - now;
    return DEFAULT_RETRY_AFTER;
}
/**
 * Gets the time that given category is disabled until for rate limiting
 */ function disabledUntil(limits, category) {
    return limits[category] || limits.all || 0;
}
/**
 * Checks if a category is rate limited
 */ function isRateLimited(limits, category, now = Date.now()) {
    return disabledUntil(limits, category) > now;
}
/**
 * Update ratelimits from incoming headers.
 * Returns true if headers contains a non-empty rate limiting header.
 */ function updateRateLimits(limits, { statusCode , headers  }, now = Date.now()) {
    var updatedRateLimits = {
        ...limits
    };
    // "The name is case-insensitive."
    // https://developer.mozilla.org/en-US/docs/Web/API/Headers/get
    var rateLimitHeader = headers && headers["x-sentry-rate-limits"];
    var retryAfterHeader = headers && headers["retry-after"];
    if (rateLimitHeader) /**
     * rate limit headers are of the form
     *     <header>,<header>,..
     * where each <header> is of the form
     *     <retry_after>: <categories>: <scope>: <reason_code>
     * where
     *     <retry_after> is a delay in seconds
     *     <categories> is the event type(s) (error, transaction, etc) being rate limited and is of the form
     *         <category>;<category>;...
     *     <scope> is what's being limited (org, project, or key) - ignored by SDK
     *     <reason_code> is an arbitrary string like "org_quota" - ignored by SDK
     */ for (var limit of rateLimitHeader.trim().split(",")){
        const [retryAfter, categories] = limit.split(":", 2);
        var headerDelay = parseInt(retryAfter, 10);
        var delay = (!isNaN(headerDelay) ? headerDelay : 60) * 1000; // 60sec default
        if (!categories) updatedRateLimits.all = now + delay;
        else for (var category of categories.split(";"))updatedRateLimits[category] = now + delay;
    }
    else if (retryAfterHeader) updatedRateLimits.all = now + parseRetryAfterHeader(retryAfterHeader, now);
    else if (statusCode === 429) updatedRateLimits.all = now + 60000;
    return updatedRateLimits;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9xioe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BAGGAGE_HEADER_NAME", ()=>BAGGAGE_HEADER_NAME);
parcelHelpers.export(exports, "MAX_BAGGAGE_STRING_LENGTH", ()=>MAX_BAGGAGE_STRING_LENGTH);
parcelHelpers.export(exports, "SENTRY_BAGGAGE_KEY_PREFIX", ()=>SENTRY_BAGGAGE_KEY_PREFIX);
parcelHelpers.export(exports, "SENTRY_BAGGAGE_KEY_PREFIX_REGEX", ()=>SENTRY_BAGGAGE_KEY_PREFIX_REGEX);
parcelHelpers.export(exports, "createBaggage", ()=>createBaggage);
parcelHelpers.export(exports, "getBaggageValue", ()=>getBaggageValue);
parcelHelpers.export(exports, "getSentryBaggageItems", ()=>getSentryBaggageItems);
parcelHelpers.export(exports, "getThirdPartyBaggage", ()=>getThirdPartyBaggage);
parcelHelpers.export(exports, "isBaggageMutable", ()=>isBaggageMutable);
parcelHelpers.export(exports, "isSentryBaggageEmpty", ()=>isSentryBaggageEmpty);
parcelHelpers.export(exports, "mergeAndSerializeBaggage", ()=>mergeAndSerializeBaggage);
parcelHelpers.export(exports, "parseBaggageHeader", ()=>parseBaggageHeader);
parcelHelpers.export(exports, "parseBaggageSetMutability", ()=>parseBaggageSetMutability);
parcelHelpers.export(exports, "serializeBaggage", ()=>serializeBaggage);
parcelHelpers.export(exports, "setBaggageImmutable", ()=>setBaggageImmutable);
parcelHelpers.export(exports, "setBaggageValue", ()=>setBaggageValue);
var _isJs = require("./is.js");
var _loggerJs = require("./logger.js");
var BAGGAGE_HEADER_NAME = "baggage";
var SENTRY_BAGGAGE_KEY_PREFIX = "sentry-";
var SENTRY_BAGGAGE_KEY_PREFIX_REGEX = /^sentry-/;
/**
 * Max length of a serialized baggage string
 *
 * https://www.w3.org/TR/baggage/#limits
 */ var MAX_BAGGAGE_STRING_LENGTH = 8192;
/** Create an instance of Baggage */ function createBaggage(initItems, baggageString = "", mutable = true) {
    return [
        {
            ...initItems
        },
        baggageString,
        mutable
    ];
}
/** Get a value from baggage */ function getBaggageValue(baggage, key) {
    return baggage[0][key];
}
/** Add a value to baggage */ function setBaggageValue(baggage, key, value) {
    if (isBaggageMutable(baggage)) baggage[0][key] = value;
}
/** Check if the Sentry part of the passed baggage (i.e. the first element in the tuple) is empty */ function isSentryBaggageEmpty(baggage) {
    return Object.keys(baggage[0]).length === 0;
}
/** Returns Sentry specific baggage values */ function getSentryBaggageItems(baggage) {
    return baggage[0];
}
/**
 * Returns 3rd party baggage string of @param baggage
 * @param baggage
 */ function getThirdPartyBaggage(baggage) {
    return baggage[1];
}
/**
 * Checks if baggage is mutable
 * @param baggage
 * @returns true if baggage is mutable, else false
 */ function isBaggageMutable(baggage) {
    return baggage[2];
}
/**
 * Sets the passed baggage immutable
 * @param baggage
 */ function setBaggageImmutable(baggage) {
    baggage[2] = false;
}
/** Serialize a baggage object */ function serializeBaggage(baggage) {
    return Object.keys(baggage[0]).reduce((prev, key)=>{
        var val = baggage[0][key];
        var baggageEntry = `${SENTRY_BAGGAGE_KEY_PREFIX}${encodeURIComponent(key)}=${encodeURIComponent(val)}`;
        var newVal = prev === "" ? baggageEntry : `${prev},${baggageEntry}`;
        if (newVal.length > MAX_BAGGAGE_STRING_LENGTH) {
            (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _loggerJs.logger).warn(`Not adding key: ${key} with val: ${val} to baggage due to exceeding baggage size limits.`);
            return prev;
        } else return newVal;
    }, baggage[1]);
}
/**
 * Parse a baggage header from a string or a string array and return a Baggage object
 *
 * If @param includeThirdPartyEntries is set to true, third party baggage entries are added to the Baggage object
 * (This is necessary for merging potentially pre-existing baggage headers in outgoing requests with
 * our `sentry-` values)
 */ function parseBaggageHeader(inputBaggageValue, includeThirdPartyEntries = false) {
    // Adding this check here because we got reports of this function failing due to the input value
    // not being a string. This debug log might help us determine what's going on here.
    if (!Array.isArray(inputBaggageValue) && !(0, _isJs.isString)(inputBaggageValue) || typeof inputBaggageValue === "number") {
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _loggerJs.logger).warn("[parseBaggageHeader] Received input value of incompatible type: ", typeof inputBaggageValue, inputBaggageValue);
        // Gonna early-return an empty baggage object so that we don't fail later on
        return createBaggage({}, "");
    }
    var baggageEntries = ((0, _isJs.isString)(inputBaggageValue) ? inputBaggageValue : inputBaggageValue.join(",")).split(",").map((entry)=>entry.trim()).filter((entry)=>entry !== "" && (includeThirdPartyEntries || SENTRY_BAGGAGE_KEY_PREFIX_REGEX.test(entry)));
    return baggageEntries.reduce(([baggageObj, baggageString], curr)=>{
        const [key, val] = curr.split("=");
        if (SENTRY_BAGGAGE_KEY_PREFIX_REGEX.test(key)) {
            var baggageKey = decodeURIComponent(key.split("-")[1]);
            return [
                {
                    ...baggageObj,
                    [baggageKey]: decodeURIComponent(val)
                },
                baggageString,
                true, 
            ];
        } else return [
            baggageObj,
            baggageString === "" ? curr : `${baggageString},${curr}`,
            true
        ];
    }, [
        {},
        "",
        true
    ]);
}
/**
 * Merges the baggage header we saved from the incoming request (or meta tag) with
 * a possibly created or modified baggage header by a third party that's been added
 * to the outgoing request header.
 *
 * In case @param headerBaggageString exists, we can safely add the the 3rd party part of @param headerBaggage
 * with our @param incomingBaggage. This is possible because if we modified anything beforehand,
 * it would only affect parts of the sentry baggage (@see Baggage interface).
 *
 * @param incomingBaggage the baggage header of the incoming request that might contain sentry entries
 * @param thirdPartyBaggageHeader possibly existing baggage header string or string[] added from a third
 *        party to the request headers
 *
 * @return a merged and serialized baggage string to be propagated with the outgoing request
 */ function mergeAndSerializeBaggage(incomingBaggage, thirdPartyBaggageHeader) {
    if (!incomingBaggage && !thirdPartyBaggageHeader) return "";
    var headerBaggage = thirdPartyBaggageHeader && parseBaggageHeader(thirdPartyBaggageHeader, true) || undefined;
    var thirdPartyHeaderBaggage = headerBaggage && getThirdPartyBaggage(headerBaggage);
    var finalBaggage = createBaggage(incomingBaggage && incomingBaggage[0] || {}, thirdPartyHeaderBaggage || "");
    return serializeBaggage(finalBaggage);
}
/**
 * Helper function that takes a raw baggage string (if available) and the processed sentry-trace header
 * data (if available), parses the baggage string and creates a Baggage object
 * If there is no baggage string, it will create an empty Baggage object.
 * In a second step, this functions determines if the created Baggage object should be set immutable
 * to prevent mutation of the Sentry data.
 *
 * Extracted this logic to a function because it's duplicated in a lot of places.
 *
 * @param rawBaggageValue
 * @param sentryTraceHeader
 */ function parseBaggageSetMutability(rawBaggageValue, sentryTraceHeader) {
    var baggage = parseBaggageHeader(rawBaggageValue || "");
    // Because we are always creating a Baggage object by calling `parseBaggageHeader` above
    // (either a filled one or an empty one, even if we didn't get a `baggage` header),
    // we only need to check if we have a sentry-trace header or not. As soon as we have it,
    // we set baggage immutable. In case we don't get a sentry-trace header, we can assume that
    // this SDK is the head of the trace and thus we still permit mutation at this time.
    // There is one exception though, which is that we get a baggage-header with `sentry-`
    // items but NO sentry-trace header. In this case we also set the baggage immutable for now
    // but if smoething like this would ever happen, we should revisit this and determine
    // what this would actually mean for the trace (i.e. is this SDK the head?, what happened
    // before that we don't have a sentry-trace header?, etc)
    (sentryTraceHeader || !isSentryBaggageEmpty(baggage)) && setBaggageImmutable(baggage);
    return baggage;
}

},{"./is.js":"451Wr","./logger.js":"3LvdY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8Oqww":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "InboundFilters", ()=>InboundFilters);
parcelHelpers.export(exports, "_mergeOptions", ()=>_mergeOptions);
parcelHelpers.export(exports, "_shouldDropEvent", ()=>_shouldDropEvent);
var _utils = require("@sentry/utils");
// "Script error." is hard coded into browsers for errors that it can't read.
// this is the result of a script being pulled in from an external domain and CORS.
var DEFAULT_IGNORE_ERRORS = [
    /^Script error\.?$/,
    /^Javascript error: Script error\.? on line 0$/
];
/** Options for the InboundFilters integration */ /** Inbound filters configurable by the user */ class InboundFilters {
    /**
   * @inheritDoc
   */ static __initStatic() {
        this.id = "InboundFilters";
    }
    /**
   * @inheritDoc
   */ __init() {
        this.name = InboundFilters.id;
    }
    constructor(_options = {}){
        this._options = _options;
        InboundFilters.prototype.__init.call(this);
    }
    /**
   * @inheritDoc
   */ setupOnce(addGlobalEventProcessor, getCurrentHub) {
        var eventProcess = (event)=>{
            var hub = getCurrentHub();
            if (hub) {
                var self = hub.getIntegration(InboundFilters);
                if (self) {
                    var client = hub.getClient();
                    var clientOptions = client ? client.getOptions() : {};
                    var options = _mergeOptions(self._options, clientOptions);
                    return _shouldDropEvent(event, options) ? null : event;
                }
            }
            return event;
        };
        eventProcess.id = this.name;
        addGlobalEventProcessor(eventProcess);
    }
}
InboundFilters.__initStatic();
/** JSDoc */ function _mergeOptions(internalOptions = {}, clientOptions = {}) {
    return {
        allowUrls: [
            ...internalOptions.allowUrls || [],
            ...clientOptions.allowUrls || []
        ],
        denyUrls: [
            ...internalOptions.denyUrls || [],
            ...clientOptions.denyUrls || []
        ],
        ignoreErrors: [
            ...internalOptions.ignoreErrors || [],
            ...clientOptions.ignoreErrors || [],
            ...DEFAULT_IGNORE_ERRORS, 
        ],
        ignoreInternal: internalOptions.ignoreInternal !== undefined ? internalOptions.ignoreInternal : true
    };
}
/** JSDoc */ function _shouldDropEvent(event, options) {
    if (options.ignoreInternal && _isSentryError(event)) {
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _utils.logger).warn(`Event dropped due to being internal Sentry Error.\nEvent: ${(0, _utils.getEventDescription)(event)}`);
        return true;
    }
    if (_isIgnoredError(event, options.ignoreErrors)) {
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _utils.logger).warn(`Event dropped due to being matched by \`ignoreErrors\` option.\nEvent: ${(0, _utils.getEventDescription)(event)}`);
        return true;
    }
    if (_isDeniedUrl(event, options.denyUrls)) {
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _utils.logger).warn(`Event dropped due to being matched by \`denyUrls\` option.\nEvent: ${(0, _utils.getEventDescription)(event)}.\nUrl: ${_getEventFilterUrl(event)}`);
        return true;
    }
    if (!_isAllowedUrl(event, options.allowUrls)) {
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _utils.logger).warn(`Event dropped due to not being matched by \`allowUrls\` option.\nEvent: ${(0, _utils.getEventDescription)(event)}.\nUrl: ${_getEventFilterUrl(event)}`);
        return true;
    }
    return false;
}
function _isIgnoredError(event, ignoreErrors) {
    if (!ignoreErrors || !ignoreErrors.length) return false;
    return _getPossibleEventMessages(event).some((message)=>ignoreErrors.some((pattern)=>(0, _utils.isMatchingPattern)(message, pattern)));
}
function _isDeniedUrl(event, denyUrls) {
    // TODO: Use Glob instead?
    if (!denyUrls || !denyUrls.length) return false;
    var url = _getEventFilterUrl(event);
    return !url ? false : denyUrls.some((pattern)=>(0, _utils.isMatchingPattern)(url, pattern));
}
function _isAllowedUrl(event, allowUrls) {
    // TODO: Use Glob instead?
    if (!allowUrls || !allowUrls.length) return true;
    var url = _getEventFilterUrl(event);
    return !url ? true : allowUrls.some((pattern)=>(0, _utils.isMatchingPattern)(url, pattern));
}
function _getPossibleEventMessages(event) {
    if (event.message) return [
        event.message
    ];
    if (event.exception) try {
        const { type ="" , value =""  } = event.exception.values && event.exception.values[0] || {};
        return [
            `${value}`,
            `${type}: ${value}`
        ];
    } catch (oO) {
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _utils.logger).error(`Cannot extract message for event ${(0, _utils.getEventDescription)(event)}`);
        return [];
    }
    return [];
}
function _isSentryError(event) {
    try {
        // @ts-ignore can't be a sentry error if undefined
        return event.exception.values[0].type === "SentryError";
    } catch (e) {
    // ignore
    }
    return false;
}
function _getLastValidUrl(frames = []) {
    for(let i = frames.length - 1; i >= 0; i--){
        var frame = frames[i];
        if (frame && frame.filename !== "<anonymous>" && frame.filename !== "[native code]") return frame.filename || null;
    }
    return null;
}
function _getEventFilterUrl(event) {
    try {
        let frames;
        try {
            // @ts-ignore we only care about frames if the whole thing here is defined
            frames = event.exception.values[0].stacktrace.frames;
        } catch (e) {
        // ignore
        }
        return frames ? _getLastValidUrl(frames) : null;
    } catch (oO) {
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _utils.logger).error(`Cannot extract url for event ${(0, _utils.getEventDescription)(event)}`);
        return null;
    }
}

},{"@sentry/utils":"5auop","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cqx4p":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Scope", ()=>(0, _scopeJs.Scope));
parcelHelpers.export(exports, "addGlobalEventProcessor", ()=>(0, _scopeJs.addGlobalEventProcessor));
parcelHelpers.export(exports, "closeSession", ()=>(0, _sessionJs.closeSession));
parcelHelpers.export(exports, "makeSession", ()=>(0, _sessionJs.makeSession));
parcelHelpers.export(exports, "updateSession", ()=>(0, _sessionJs.updateSession));
parcelHelpers.export(exports, "SessionFlusher", ()=>(0, _sessionflusherJs.SessionFlusher));
parcelHelpers.export(exports, "Hub", ()=>(0, _hubJs.Hub));
parcelHelpers.export(exports, "getCurrentHub", ()=>(0, _hubJs.getCurrentHub));
parcelHelpers.export(exports, "getHubFromCarrier", ()=>(0, _hubJs.getHubFromCarrier));
parcelHelpers.export(exports, "getMainCarrier", ()=>(0, _hubJs.getMainCarrier));
parcelHelpers.export(exports, "makeMain", ()=>(0, _hubJs.makeMain));
parcelHelpers.export(exports, "setHubOnCarrier", ()=>(0, _hubJs.setHubOnCarrier));
parcelHelpers.export(exports, "addBreadcrumb", ()=>(0, _exportsJs.addBreadcrumb));
parcelHelpers.export(exports, "captureEvent", ()=>(0, _exportsJs.captureEvent));
parcelHelpers.export(exports, "captureException", ()=>(0, _exportsJs.captureException));
parcelHelpers.export(exports, "captureMessage", ()=>(0, _exportsJs.captureMessage));
parcelHelpers.export(exports, "configureScope", ()=>(0, _exportsJs.configureScope));
parcelHelpers.export(exports, "setContext", ()=>(0, _exportsJs.setContext));
parcelHelpers.export(exports, "setExtra", ()=>(0, _exportsJs.setExtra));
parcelHelpers.export(exports, "setExtras", ()=>(0, _exportsJs.setExtras));
parcelHelpers.export(exports, "setTag", ()=>(0, _exportsJs.setTag));
parcelHelpers.export(exports, "setTags", ()=>(0, _exportsJs.setTags));
parcelHelpers.export(exports, "setUser", ()=>(0, _exportsJs.setUser));
parcelHelpers.export(exports, "startTransaction", ()=>(0, _exportsJs.startTransaction));
parcelHelpers.export(exports, "withScope", ()=>(0, _exportsJs.withScope));
var _scopeJs = require("./scope.js");
var _sessionJs = require("./session.js");
var _sessionflusherJs = require("./sessionflusher.js");
var _hubJs = require("./hub.js");
var _exportsJs = require("./exports.js");

},{"./scope.js":"dlu4O","./session.js":"5hcrL","./sessionflusher.js":false,"./hub.js":"80DzD","./exports.js":"gmDUg","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dlu4O":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Scope", ()=>Scope);
parcelHelpers.export(exports, "addGlobalEventProcessor", ()=>addGlobalEventProcessor);
var _utils = require("@sentry/utils");
var _sessionJs = require("./session.js");
/**
 * Absolute maximum number of breadcrumbs added to an event.
 * The `maxBreadcrumbs` option cannot be higher than this value.
 */ var MAX_BREADCRUMBS = 100;
/**
 * Holds additional event information. {@link Scope.applyToEvent} will be
 * called by the client before an event will be sent.
 */ class Scope {
    /** Flag if notifying is happening. */ /** Callback for client to receive scope changes. */ /** Callback list that will be called after {@link applyToEvent}. */ /** Array of breadcrumbs. */ /** User */ /** Tags */ /** Extra */ /** Contexts */ /** Attachments */ /**
   * A place to stash data which is needed at some point in the SDK's event processing pipeline but which shouldn't get
   * sent to Sentry
   */ /** Fingerprint */ /** Severity */ /** Transaction Name */ /** Span */ /** Session */ /** Request Mode Session Status */ constructor(){
        this._notifyingListeners = false;
        this._scopeListeners = [];
        this._eventProcessors = [];
        this._breadcrumbs = [];
        this._attachments = [];
        this._user = {};
        this._tags = {};
        this._extra = {};
        this._contexts = {};
        this._sdkProcessingMetadata = {};
    }
    /**
   * Inherit values from the parent scope.
   * @param scope to clone.
   */ static clone(scope) {
        var newScope = new Scope();
        if (scope) {
            newScope._breadcrumbs = [
                ...scope._breadcrumbs
            ];
            newScope._tags = {
                ...scope._tags
            };
            newScope._extra = {
                ...scope._extra
            };
            newScope._contexts = {
                ...scope._contexts
            };
            newScope._user = scope._user;
            newScope._level = scope._level;
            newScope._span = scope._span;
            newScope._session = scope._session;
            newScope._transactionName = scope._transactionName;
            newScope._fingerprint = scope._fingerprint;
            newScope._eventProcessors = [
                ...scope._eventProcessors
            ];
            newScope._requestSession = scope._requestSession;
            newScope._attachments = [
                ...scope._attachments
            ];
        }
        return newScope;
    }
    /**
   * Add internal on change listener. Used for sub SDKs that need to store the scope.
   * @hidden
   */ addScopeListener(callback) {
        this._scopeListeners.push(callback);
    }
    /**
   * @inheritDoc
   */ addEventProcessor(callback) {
        this._eventProcessors.push(callback);
        return this;
    }
    /**
   * @inheritDoc
   */ setUser(user) {
        this._user = user || {};
        if (this._session) (0, _sessionJs.updateSession)(this._session, {
            user
        });
        this._notifyScopeListeners();
        return this;
    }
    /**
   * @inheritDoc
   */ getUser() {
        return this._user;
    }
    /**
   * @inheritDoc
   */ getRequestSession() {
        return this._requestSession;
    }
    /**
   * @inheritDoc
   */ setRequestSession(requestSession) {
        this._requestSession = requestSession;
        return this;
    }
    /**
   * @inheritDoc
   */ setTags(tags) {
        this._tags = {
            ...this._tags,
            ...tags
        };
        this._notifyScopeListeners();
        return this;
    }
    /**
   * @inheritDoc
   */ setTag(key, value) {
        this._tags = {
            ...this._tags,
            [key]: value
        };
        this._notifyScopeListeners();
        return this;
    }
    /**
   * @inheritDoc
   */ setExtras(extras) {
        this._extra = {
            ...this._extra,
            ...extras
        };
        this._notifyScopeListeners();
        return this;
    }
    /**
   * @inheritDoc
   */ setExtra(key, extra) {
        this._extra = {
            ...this._extra,
            [key]: extra
        };
        this._notifyScopeListeners();
        return this;
    }
    /**
   * @inheritDoc
   */ setFingerprint(fingerprint) {
        this._fingerprint = fingerprint;
        this._notifyScopeListeners();
        return this;
    }
    /**
   * @inheritDoc
   */ setLevel(level) {
        this._level = level;
        this._notifyScopeListeners();
        return this;
    }
    /**
   * @inheritDoc
   */ setTransactionName(name) {
        this._transactionName = name;
        this._notifyScopeListeners();
        return this;
    }
    /**
   * @inheritDoc
   */ setContext(key, context) {
        if (context === null) delete this._contexts[key];
        else this._contexts = {
            ...this._contexts,
            [key]: context
        };
        this._notifyScopeListeners();
        return this;
    }
    /**
   * @inheritDoc
   */ setSpan(span) {
        this._span = span;
        this._notifyScopeListeners();
        return this;
    }
    /**
   * @inheritDoc
   */ getSpan() {
        return this._span;
    }
    /**
   * @inheritDoc
   */ getTransaction() {
        // Often, this span (if it exists at all) will be a transaction, but it's not guaranteed to be. Regardless, it will
        // have a pointer to the currently-active transaction.
        var span = this.getSpan();
        return span && span.transaction;
    }
    /**
   * @inheritDoc
   */ setSession(session) {
        if (!session) delete this._session;
        else this._session = session;
        this._notifyScopeListeners();
        return this;
    }
    /**
   * @inheritDoc
   */ getSession() {
        return this._session;
    }
    /**
   * @inheritDoc
   */ update(captureContext) {
        if (!captureContext) return this;
        if (typeof captureContext === "function") {
            var updatedScope = captureContext(this);
            return updatedScope instanceof Scope ? updatedScope : this;
        }
        if (captureContext instanceof Scope) {
            this._tags = {
                ...this._tags,
                ...captureContext._tags
            };
            this._extra = {
                ...this._extra,
                ...captureContext._extra
            };
            this._contexts = {
                ...this._contexts,
                ...captureContext._contexts
            };
            if (captureContext._user && Object.keys(captureContext._user).length) this._user = captureContext._user;
            if (captureContext._level) this._level = captureContext._level;
            if (captureContext._fingerprint) this._fingerprint = captureContext._fingerprint;
            if (captureContext._requestSession) this._requestSession = captureContext._requestSession;
        } else if ((0, _utils.isPlainObject)(captureContext)) {
            captureContext;
            this._tags = {
                ...this._tags,
                ...captureContext.tags
            };
            this._extra = {
                ...this._extra,
                ...captureContext.extra
            };
            this._contexts = {
                ...this._contexts,
                ...captureContext.contexts
            };
            if (captureContext.user) this._user = captureContext.user;
            if (captureContext.level) this._level = captureContext.level;
            if (captureContext.fingerprint) this._fingerprint = captureContext.fingerprint;
            if (captureContext.requestSession) this._requestSession = captureContext.requestSession;
        }
        return this;
    }
    /**
   * @inheritDoc
   */ clear() {
        this._breadcrumbs = [];
        this._tags = {};
        this._extra = {};
        this._user = {};
        this._contexts = {};
        this._level = undefined;
        this._transactionName = undefined;
        this._fingerprint = undefined;
        this._requestSession = undefined;
        this._span = undefined;
        this._session = undefined;
        this._notifyScopeListeners();
        this._attachments = [];
        return this;
    }
    /**
   * @inheritDoc
   */ addBreadcrumb(breadcrumb, maxBreadcrumbs) {
        var maxCrumbs = typeof maxBreadcrumbs === "number" ? Math.min(maxBreadcrumbs, MAX_BREADCRUMBS) : MAX_BREADCRUMBS;
        // No data has been changed, so don't notify scope listeners
        if (maxCrumbs <= 0) return this;
        var mergedBreadcrumb = {
            timestamp: (0, _utils.dateTimestampInSeconds)(),
            ...breadcrumb
        };
        this._breadcrumbs = [
            ...this._breadcrumbs,
            mergedBreadcrumb
        ].slice(-maxCrumbs);
        this._notifyScopeListeners();
        return this;
    }
    /**
   * @inheritDoc
   */ clearBreadcrumbs() {
        this._breadcrumbs = [];
        this._notifyScopeListeners();
        return this;
    }
    /**
   * @inheritDoc
   */ addAttachment(attachment) {
        this._attachments.push(attachment);
        return this;
    }
    /**
   * @inheritDoc
   */ getAttachments() {
        return this._attachments;
    }
    /**
   * @inheritDoc
   */ clearAttachments() {
        this._attachments = [];
        return this;
    }
    /**
   * Applies the current context and fingerprint to the event.
   * Note that breadcrumbs will be added by the client.
   * Also if the event has already breadcrumbs on it, we do not merge them.
   * @param event Event
   * @param hint May contain additional information about the original exception.
   * @hidden
   */ applyToEvent(event, hint = {}) {
        if (this._extra && Object.keys(this._extra).length) event.extra = {
            ...this._extra,
            ...event.extra
        };
        if (this._tags && Object.keys(this._tags).length) event.tags = {
            ...this._tags,
            ...event.tags
        };
        if (this._user && Object.keys(this._user).length) event.user = {
            ...this._user,
            ...event.user
        };
        if (this._contexts && Object.keys(this._contexts).length) event.contexts = {
            ...this._contexts,
            ...event.contexts
        };
        if (this._level) event.level = this._level;
        if (this._transactionName) event.transaction = this._transactionName;
        // We want to set the trace context for normal events only if there isn't already
        // a trace context on the event. There is a product feature in place where we link
        // errors with transaction and it relies on that.
        if (this._span) {
            event.contexts = {
                trace: this._span.getTraceContext(),
                ...event.contexts
            };
            var transactionName = this._span.transaction && this._span.transaction.name;
            if (transactionName) event.tags = {
                transaction: transactionName,
                ...event.tags
            };
        }
        this._applyFingerprint(event);
        event.breadcrumbs = [
            ...event.breadcrumbs || [],
            ...this._breadcrumbs
        ];
        event.breadcrumbs = event.breadcrumbs.length > 0 ? event.breadcrumbs : undefined;
        event.sdkProcessingMetadata = {
            ...event.sdkProcessingMetadata,
            ...this._sdkProcessingMetadata
        };
        return this._notifyEventProcessors([
            ...getGlobalEventProcessors(),
            ...this._eventProcessors
        ], event, hint);
    }
    /**
   * Add data which will be accessible during event processing but won't get sent to Sentry
   */ setSDKProcessingMetadata(newData) {
        this._sdkProcessingMetadata = {
            ...this._sdkProcessingMetadata,
            ...newData
        };
        return this;
    }
    /**
   * This will be called after {@link applyToEvent} is finished.
   */ _notifyEventProcessors(processors, event, hint, index = 0) {
        return new (0, _utils.SyncPromise)((resolve, reject)=>{
            var processor = processors[index];
            if (event === null || typeof processor !== "function") resolve(event);
            else {
                var result = processor({
                    ...event
                }, hint);
                (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && processor.id && result === null && (0, _utils.logger).log(`Event processor "${processor.id}" dropped event`);
                if ((0, _utils.isThenable)(result)) result.then((final)=>this._notifyEventProcessors(processors, final, hint, index + 1).then(resolve)).then(null, reject);
                else this._notifyEventProcessors(processors, result, hint, index + 1).then(resolve).then(null, reject);
            }
        });
    }
    /**
   * This will be called on every set call.
   */ _notifyScopeListeners() {
        // We need this check for this._notifyingListeners to be able to work on scope during updates
        // If this check is not here we'll produce endless recursion when something is done with the scope
        // during the callback.
        if (!this._notifyingListeners) {
            this._notifyingListeners = true;
            this._scopeListeners.forEach((callback)=>{
                callback(this);
            });
            this._notifyingListeners = false;
        }
    }
    /**
   * Applies fingerprint from the scope to the event if there's one,
   * uses message if there's one instead or get rid of empty fingerprint
   */ _applyFingerprint(event) {
        // Make sure it's an array first and we actually have something in place
        event.fingerprint = event.fingerprint ? Array.isArray(event.fingerprint) ? event.fingerprint : [
            event.fingerprint
        ] : [];
        // If we have something on the scope, then merge it with event
        if (this._fingerprint) event.fingerprint = event.fingerprint.concat(this._fingerprint);
        // If we have no data at all, remove empty array default
        if (event.fingerprint && !event.fingerprint.length) delete event.fingerprint;
    }
}
/**
 * Returns the global event processors.
 */ function getGlobalEventProcessors() {
    return (0, _utils.getGlobalSingleton)("globalEventProcessors", ()=>[]);
}
/**
 * Add a EventProcessor to be kept globally.
 * @param callback EventProcessor to add
 */ function addGlobalEventProcessor(callback) {
    getGlobalEventProcessors().push(callback);
}

},{"@sentry/utils":"5auop","./session.js":"5hcrL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5hcrL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "closeSession", ()=>closeSession);
parcelHelpers.export(exports, "makeSession", ()=>makeSession);
parcelHelpers.export(exports, "updateSession", ()=>updateSession);
var _utils = require("@sentry/utils");
/**
 * Creates a new `Session` object by setting certain default parameters. If optional @param context
 * is passed, the passed properties are applied to the session object.
 *
 * @param context (optional) additional properties to be applied to the returned session object
 *
 * @returns a new `Session` object
 */ function makeSession(context) {
    // Both timestamp and started are in seconds since the UNIX epoch.
    var startingTime = (0, _utils.timestampInSeconds)();
    var session = {
        sid: (0, _utils.uuid4)(),
        init: true,
        timestamp: startingTime,
        started: startingTime,
        duration: 0,
        status: "ok",
        errors: 0,
        ignoreDuration: false,
        toJSON: ()=>sessionToJSON(session)
    };
    if (context) updateSession(session, context);
    return session;
}
/**
 * Updates a session object with the properties passed in the context.
 *
 * Note that this function mutates the passed object and returns void.
 * (Had to do this instead of returning a new and updated session because closing and sending a session
 * makes an update to the session after it was passed to the sending logic.
 * @see BaseClient.captureSession )
 *
 * @param session the `Session` to update
 * @param context the `SessionContext` holding the properties that should be updated in @param session
 */ function updateSession(session, context = {}) {
    if (context.user) {
        if (!session.ipAddress && context.user.ip_address) session.ipAddress = context.user.ip_address;
        if (!session.did && !context.did) session.did = context.user.id || context.user.email || context.user.username;
    }
    session.timestamp = context.timestamp || (0, _utils.timestampInSeconds)();
    if (context.ignoreDuration) session.ignoreDuration = context.ignoreDuration;
    if (context.sid) // Good enough uuid validation. — Kamil
    session.sid = context.sid.length === 32 ? context.sid : (0, _utils.uuid4)();
    if (context.init !== undefined) session.init = context.init;
    if (!session.did && context.did) session.did = `${context.did}`;
    if (typeof context.started === "number") session.started = context.started;
    if (session.ignoreDuration) session.duration = undefined;
    else if (typeof context.duration === "number") session.duration = context.duration;
    else {
        var duration = session.timestamp - session.started;
        session.duration = duration >= 0 ? duration : 0;
    }
    if (context.release) session.release = context.release;
    if (context.environment) session.environment = context.environment;
    if (!session.ipAddress && context.ipAddress) session.ipAddress = context.ipAddress;
    if (!session.userAgent && context.userAgent) session.userAgent = context.userAgent;
    if (typeof context.errors === "number") session.errors = context.errors;
    if (context.status) session.status = context.status;
}
/**
 * Closes a session by setting its status and updating the session object with it.
 * Internally calls `updateSession` to update the passed session object.
 *
 * Note that this function mutates the passed session (@see updateSession for explanation).
 *
 * @param session the `Session` object to be closed
 * @param status the `SessionStatus` with which the session was closed. If you don't pass a status,
 *               this function will keep the previously set status, unless it was `'ok'` in which case
 *               it is changed to `'exited'`.
 */ function closeSession(session, status) {
    let context = {};
    if (status) context = {
        status
    };
    else if (session.status === "ok") context = {
        status: "exited"
    };
    updateSession(session, context);
}
/**
 * Serializes a passed session object to a JSON object with a slightly different structure.
 * This is necessary because the Sentry backend requires a slightly different schema of a session
 * than the one the JS SDKs use internally.
 *
 * @param session the session to be converted
 *
 * @returns a JSON object of the passed session
 */ function sessionToJSON(session) {
    return (0, _utils.dropUndefinedKeys)({
        sid: `${session.sid}`,
        init: session.init,
        // Make sure that sec is converted to ms for date constructor
        started: new Date(session.started * 1000).toISOString(),
        timestamp: new Date(session.timestamp * 1000).toISOString(),
        status: session.status,
        errors: session.errors,
        did: typeof session.did === "number" || typeof session.did === "string" ? `${session.did}` : undefined,
        duration: session.duration,
        attrs: {
            release: session.release,
            environment: session.environment,
            ip_address: session.ipAddress,
            user_agent: session.userAgent
        }
    });
}

},{"@sentry/utils":"5auop","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"80DzD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "API_VERSION", ()=>API_VERSION);
parcelHelpers.export(exports, "Hub", ()=>Hub);
parcelHelpers.export(exports, "getCurrentHub", ()=>getCurrentHub);
parcelHelpers.export(exports, "getHubFromCarrier", ()=>getHubFromCarrier);
parcelHelpers.export(exports, "getMainCarrier", ()=>getMainCarrier);
parcelHelpers.export(exports, "makeMain", ()=>makeMain);
parcelHelpers.export(exports, "setHubOnCarrier", ()=>setHubOnCarrier);
var _utils = require("@sentry/utils");
var _scopeJs = require("./scope.js");
var _sessionJs = require("./session.js");
/**
 * API compatibility version of this hub.
 *
 * WARNING: This number should only be increased when the global interface
 * changes and new methods are introduced.
 *
 * @hidden
 */ var API_VERSION = 4;
/**
 * Default maximum number of breadcrumbs added to an event. Can be overwritten
 * with {@link Options.maxBreadcrumbs}.
 */ var DEFAULT_BREADCRUMBS = 100;
/**
 * A layer in the process stack.
 * @hidden
 */ /**
 * @inheritDoc
 */ class Hub {
    /** Is a {@link Layer}[] containing the client and scope */ __init() {
        this._stack = [
            {}
        ];
    }
    /** Contains the last event id of a captured event.  */ /**
   * Creates a new instance of the hub, will push one {@link Layer} into the
   * internal stack on creation.
   *
   * @param client bound to the hub.
   * @param scope bound to the hub.
   * @param version number, higher number means higher priority.
   */ constructor(client, scope = new (0, _scopeJs.Scope)(), _version = API_VERSION){
        this._version = _version;
        Hub.prototype.__init.call(this);
        this.getStackTop().scope = scope;
        if (client) this.bindClient(client);
    }
    /**
   * @inheritDoc
   */ isOlderThan(version) {
        return this._version < version;
    }
    /**
   * @inheritDoc
   */ bindClient(client) {
        var top = this.getStackTop();
        top.client = client;
        if (client && client.setupIntegrations) client.setupIntegrations();
    }
    /**
   * @inheritDoc
   */ pushScope() {
        // We want to clone the content of prev scope
        var scope = (0, _scopeJs.Scope).clone(this.getScope());
        this.getStack().push({
            client: this.getClient(),
            scope
        });
        return scope;
    }
    /**
   * @inheritDoc
   */ popScope() {
        if (this.getStack().length <= 1) return false;
        return !!this.getStack().pop();
    }
    /**
   * @inheritDoc
   */ withScope(callback) {
        var scope = this.pushScope();
        try {
            callback(scope);
        } finally{
            this.popScope();
        }
    }
    /**
   * @inheritDoc
   */ getClient() {
        return this.getStackTop().client;
    }
    /** Returns the scope of the top stack. */ getScope() {
        return this.getStackTop().scope;
    }
    /** Returns the scope stack for domains or the process. */ getStack() {
        return this._stack;
    }
    /** Returns the topmost scope layer in the order domain > local > process. */ getStackTop() {
        return this._stack[this._stack.length - 1];
    }
    /**
   * @inheritDoc
   */ captureException(exception, hint) {
        var eventId = this._lastEventId = hint && hint.event_id ? hint.event_id : (0, _utils.uuid4)();
        var syntheticException = new Error("Sentry syntheticException");
        this._withClient((client, scope)=>{
            client.captureException(exception, {
                originalException: exception,
                syntheticException,
                ...hint,
                event_id: eventId
            }, scope);
        });
        return eventId;
    }
    /**
   * @inheritDoc
   */ captureMessage(message, level, hint) {
        var eventId = this._lastEventId = hint && hint.event_id ? hint.event_id : (0, _utils.uuid4)();
        var syntheticException = new Error(message);
        this._withClient((client, scope)=>{
            client.captureMessage(message, level, {
                originalException: message,
                syntheticException,
                ...hint,
                event_id: eventId
            }, scope);
        });
        return eventId;
    }
    /**
   * @inheritDoc
   */ captureEvent(event, hint) {
        var eventId = hint && hint.event_id ? hint.event_id : (0, _utils.uuid4)();
        if (event.type !== "transaction") this._lastEventId = eventId;
        this._withClient((client, scope)=>{
            client.captureEvent(event, {
                ...hint,
                event_id: eventId
            }, scope);
        });
        return eventId;
    }
    /**
   * @inheritDoc
   */ lastEventId() {
        return this._lastEventId;
    }
    /**
   * @inheritDoc
   */ addBreadcrumb(breadcrumb, hint) {
        const { scope , client  } = this.getStackTop();
        if (!scope || !client) return;
        const { beforeBreadcrumb =null , maxBreadcrumbs =DEFAULT_BREADCRUMBS  } = client.getOptions && client.getOptions() || {};
        if (maxBreadcrumbs <= 0) return;
        var timestamp = (0, _utils.dateTimestampInSeconds)();
        var mergedBreadcrumb = {
            timestamp,
            ...breadcrumb
        };
        var finalBreadcrumb = beforeBreadcrumb ? (0, _utils.consoleSandbox)(()=>beforeBreadcrumb(mergedBreadcrumb, hint)) : mergedBreadcrumb;
        if (finalBreadcrumb === null) return;
        scope.addBreadcrumb(finalBreadcrumb, maxBreadcrumbs);
    }
    /**
   * @inheritDoc
   */ setUser(user) {
        var scope = this.getScope();
        if (scope) scope.setUser(user);
    }
    /**
   * @inheritDoc
   */ setTags(tags) {
        var scope = this.getScope();
        if (scope) scope.setTags(tags);
    }
    /**
   * @inheritDoc
   */ setExtras(extras) {
        var scope = this.getScope();
        if (scope) scope.setExtras(extras);
    }
    /**
   * @inheritDoc
   */ setTag(key, value) {
        var scope = this.getScope();
        if (scope) scope.setTag(key, value);
    }
    /**
   * @inheritDoc
   */ setExtra(key, extra) {
        var scope = this.getScope();
        if (scope) scope.setExtra(key, extra);
    }
    /**
   * @inheritDoc
   */ setContext(name, context) {
        var scope = this.getScope();
        if (scope) scope.setContext(name, context);
    }
    /**
   * @inheritDoc
   */ configureScope(callback) {
        const { scope , client  } = this.getStackTop();
        if (scope && client) callback(scope);
    }
    /**
   * @inheritDoc
   */ run(callback) {
        var oldHub = makeMain(this);
        try {
            callback(this);
        } finally{
            makeMain(oldHub);
        }
    }
    /**
   * @inheritDoc
   */ getIntegration(integration) {
        var client = this.getClient();
        if (!client) return null;
        try {
            return client.getIntegration(integration);
        } catch (_oO) {
            (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _utils.logger).warn(`Cannot retrieve integration ${integration.id} from the current Hub`);
            return null;
        }
    }
    /**
   * @inheritDoc
   */ startTransaction(context, customSamplingContext) {
        return this._callExtensionMethod("startTransaction", context, customSamplingContext);
    }
    /**
   * @inheritDoc
   */ traceHeaders() {
        return this._callExtensionMethod("traceHeaders");
    }
    /**
   * @inheritDoc
   */ captureSession(endSession = false) {
        // both send the update and pull the session from the scope
        if (endSession) return this.endSession();
        // only send the update
        this._sendSessionUpdate();
    }
    /**
   * @inheritDoc
   */ endSession() {
        var layer = this.getStackTop();
        var scope = layer && layer.scope;
        var session = scope && scope.getSession();
        if (session) (0, _sessionJs.closeSession)(session);
        this._sendSessionUpdate();
        // the session is over; take it off of the scope
        if (scope) scope.setSession();
    }
    /**
   * @inheritDoc
   */ startSession(context) {
        const { scope , client  } = this.getStackTop();
        const { release , environment  } = client && client.getOptions() || {};
        // Will fetch userAgent if called from browser sdk
        var global = (0, _utils.getGlobalObject)();
        const { userAgent  } = global.navigator || {};
        var session = (0, _sessionJs.makeSession)({
            release,
            environment,
            ...scope && {
                user: scope.getUser()
            },
            ...userAgent && {
                userAgent
            },
            ...context
        });
        if (scope) {
            // End existing session if there's one
            var currentSession = scope.getSession && scope.getSession();
            if (currentSession && currentSession.status === "ok") (0, _sessionJs.updateSession)(currentSession, {
                status: "exited"
            });
            this.endSession();
            // Afterwards we set the new session on the scope
            scope.setSession(session);
        }
        return session;
    }
    /**
   * Returns if default PII should be sent to Sentry and propagated in ourgoing requests
   * when Tracing is used.
   */ shouldSendDefaultPii() {
        var client = this.getClient();
        var options = client && client.getOptions();
        return Boolean(options && options.sendDefaultPii);
    }
    /**
   * Sends the current Session on the scope
   */ _sendSessionUpdate() {
        const { scope , client  } = this.getStackTop();
        if (!scope) return;
        var session = scope.getSession();
        if (session) {
            if (client && client.captureSession) client.captureSession(session);
        }
    }
    /**
   * Internal helper function to call a method on the top client if it exists.
   *
   * @param method The method to call on the client.
   * @param args Arguments to pass to the client function.
   */ _withClient(callback) {
        const { scope , client  } = this.getStackTop();
        if (client) callback(client, scope);
    }
    /**
   * Calls global extension method and binding current instance to the function call
   */ // @ts-ignore Function lacks ending return statement and return type does not include 'undefined'. ts(2366)
    _callExtensionMethod(method, ...args) {
        var carrier = getMainCarrier();
        var sentry = carrier.__SENTRY__;
        if (sentry && sentry.extensions && typeof sentry.extensions[method] === "function") return sentry.extensions[method].apply(this, args);
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _utils.logger).warn(`Extension method ${method} couldn't be found, doing nothing.`);
    }
}
/**
 * Returns the global shim registry.
 *
 * FIXME: This function is problematic, because despite always returning a valid Carrier,
 * it has an optional `__SENTRY__` property, which then in turn requires us to always perform an unnecessary check
 * at the call-site. We always access the carrier through this function, so we can guarantee that `__SENTRY__` is there.
 **/ function getMainCarrier() {
    var carrier = (0, _utils.getGlobalObject)();
    carrier.__SENTRY__ = carrier.__SENTRY__ || {
        extensions: {},
        hub: undefined
    };
    return carrier;
}
/**
 * Replaces the current main hub with the passed one on the global object
 *
 * @returns The old replaced hub
 */ function makeMain(hub) {
    var registry = getMainCarrier();
    var oldHub = getHubFromCarrier(registry);
    setHubOnCarrier(registry, hub);
    return oldHub;
}
/**
 * Returns the default hub instance.
 *
 * If a hub is already registered in the global carrier but this module
 * contains a more recent version, it replaces the registered version.
 * Otherwise, the currently registered hub will be returned.
 */ function getCurrentHub() {
    // Get main carrier (global for every environment)
    var registry = getMainCarrier();
    // If there's no hub, or its an old API, assign a new one
    if (!hasHubOnCarrier(registry) || getHubFromCarrier(registry).isOlderThan(API_VERSION)) setHubOnCarrier(registry, new Hub());
    // Prefer domains over global if they are there (applicable only to Node environment)
    if ((0, _utils.isNodeEnv)()) return getHubFromActiveDomain(registry);
    // Return hub that lives on a global object
    return getHubFromCarrier(registry);
}
/**
 * Try to read the hub from an active domain, and fallback to the registry if one doesn't exist
 * @returns discovered hub
 */ function getHubFromActiveDomain(registry) {
    try {
        var sentry = getMainCarrier().__SENTRY__;
        var activeDomain = sentry && sentry.extensions && sentry.extensions.domain && sentry.extensions.domain.active;
        // If there's no active domain, just return global hub
        if (!activeDomain) return getHubFromCarrier(registry);
        // If there's no hub on current domain, or it's an old API, assign a new one
        if (!hasHubOnCarrier(activeDomain) || getHubFromCarrier(activeDomain).isOlderThan(API_VERSION)) {
            var registryHubTopStack = getHubFromCarrier(registry).getStackTop();
            setHubOnCarrier(activeDomain, new Hub(registryHubTopStack.client, (0, _scopeJs.Scope).clone(registryHubTopStack.scope)));
        }
        // Return hub that lives on a domain
        return getHubFromCarrier(activeDomain);
    } catch (_Oo) {
        // Return hub that lives on a global object
        return getHubFromCarrier(registry);
    }
}
/**
 * This will tell whether a carrier has a hub on it or not
 * @param carrier object
 */ function hasHubOnCarrier(carrier) {
    return !!(carrier && carrier.__SENTRY__ && carrier.__SENTRY__.hub);
}
/**
 * This will create a new {@link Hub} and add to the passed object on
 * __SENTRY__.hub.
 * @param carrier object
 * @hidden
 */ function getHubFromCarrier(carrier) {
    return (0, _utils.getGlobalSingleton)("hub", ()=>new Hub(), carrier);
}
/**
 * This will set passed {@link Hub} on the passed object's __SENTRY__.hub attribute
 * @param carrier object
 * @param hub Hub
 * @returns A boolean indicating success or failure
 */ function setHubOnCarrier(carrier, hub) {
    if (!carrier) return false;
    var __SENTRY__ = carrier.__SENTRY__ = carrier.__SENTRY__ || {};
    __SENTRY__.hub = hub;
    return true;
}

},{"@sentry/utils":"5auop","./scope.js":"dlu4O","./session.js":"5hcrL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gmDUg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addBreadcrumb", ()=>addBreadcrumb);
parcelHelpers.export(exports, "captureEvent", ()=>captureEvent);
parcelHelpers.export(exports, "captureException", ()=>captureException);
parcelHelpers.export(exports, "captureMessage", ()=>captureMessage);
parcelHelpers.export(exports, "configureScope", ()=>configureScope);
parcelHelpers.export(exports, "setContext", ()=>setContext);
parcelHelpers.export(exports, "setExtra", ()=>setExtra);
parcelHelpers.export(exports, "setExtras", ()=>setExtras);
parcelHelpers.export(exports, "setTag", ()=>setTag);
parcelHelpers.export(exports, "setTags", ()=>setTags);
parcelHelpers.export(exports, "setUser", ()=>setUser);
parcelHelpers.export(exports, "startTransaction", ()=>startTransaction);
parcelHelpers.export(exports, "withScope", ()=>withScope);
var _hubJs = require("./hub.js");
// Note: All functions in this file are typed with a return value of `ReturnType<Hub[HUB_FUNCTION]>`,
// where HUB_FUNCTION is some method on the Hub class.
//
// This is done to make sure the top level SDK methods stay in sync with the hub methods.
// Although every method here has an explicit return type, some of them (that map to void returns) do not
// contain `return` keywords. This is done to save on bundle size, as `return` is not minifiable.
/**
 * Captures an exception event and sends it to Sentry.
 *
 * @param exception An exception-like object.
 * @param captureContext Additional scope data to apply to exception event.
 * @returns The generated eventId.
 */ function captureException(exception, captureContext) {
    return (0, _hubJs.getCurrentHub)().captureException(exception, {
        captureContext
    });
}
/**
 * Captures a message event and sends it to Sentry.
 *
 * @param message The message to send to Sentry.
 * @param Severity Define the level of the message.
 * @returns The generated eventId.
 */ function captureMessage(message, captureContext) {
    // This is necessary to provide explicit scopes upgrade, without changing the original
    // arity of the `captureMessage(message, level)` method.
    var level = typeof captureContext === "string" ? captureContext : undefined;
    var context = typeof captureContext !== "string" ? {
        captureContext
    } : undefined;
    return (0, _hubJs.getCurrentHub)().captureMessage(message, level, context);
}
/**
 * Captures a manually created event and sends it to Sentry.
 *
 * @param event The event to send to Sentry.
 * @returns The generated eventId.
 */ function captureEvent(event, hint) {
    return (0, _hubJs.getCurrentHub)().captureEvent(event, hint);
}
/**
 * Callback to set context information onto the scope.
 * @param callback Callback function that receives Scope.
 */ function configureScope(callback) {
    (0, _hubJs.getCurrentHub)().configureScope(callback);
}
/**
 * Records a new breadcrumb which will be attached to future events.
 *
 * Breadcrumbs will be added to subsequent events to provide more context on
 * user's actions prior to an error or crash.
 *
 * @param breadcrumb The breadcrumb to record.
 */ function addBreadcrumb(breadcrumb) {
    (0, _hubJs.getCurrentHub)().addBreadcrumb(breadcrumb);
}
/**
 * Sets context data with the given name.
 * @param name of the context
 * @param context Any kind of data. This data will be normalized.
 */ function setContext(name, context) {
    (0, _hubJs.getCurrentHub)().setContext(name, context);
}
/**
 * Set an object that will be merged sent as extra data with the event.
 * @param extras Extras object to merge into current context.
 */ function setExtras(extras) {
    (0, _hubJs.getCurrentHub)().setExtras(extras);
}
/**
 * Set key:value that will be sent as extra data with the event.
 * @param key String of extra
 * @param extra Any kind of data. This data will be normalized.
 */ function setExtra(key, extra) {
    (0, _hubJs.getCurrentHub)().setExtra(key, extra);
}
/**
 * Set an object that will be merged sent as tags data with the event.
 * @param tags Tags context object to merge into current context.
 */ function setTags(tags) {
    (0, _hubJs.getCurrentHub)().setTags(tags);
}
/**
 * Set key:value that will be sent as tags data with the event.
 *
 * Can also be used to unset a tag, by passing `undefined`.
 *
 * @param key String key of tag
 * @param value Value of tag
 */ function setTag(key, value) {
    (0, _hubJs.getCurrentHub)().setTag(key, value);
}
/**
 * Updates user context information for future events.
 *
 * @param user User context object to be set in the current context. Pass `null` to unset the user.
 */ function setUser(user) {
    (0, _hubJs.getCurrentHub)().setUser(user);
}
/**
 * Creates a new scope with and executes the given operation within.
 * The scope is automatically removed once the operation
 * finishes or throws.
 *
 * This is essentially a convenience function for:
 *
 *     pushScope();
 *     callback();
 *     popScope();
 *
 * @param callback that will be enclosed into push/popScope.
 */ function withScope(callback) {
    (0, _hubJs.getCurrentHub)().withScope(callback);
}
/**
 * Starts a new `Transaction` and returns it. This is the entry point to manual tracing instrumentation.
 *
 * A tree structure can be built by adding child spans to the transaction, and child spans to other spans. To start a
 * new child span within the transaction or any span, call the respective `.startChild()` method.
 *
 * Every child span must be finished before the transaction is finished, otherwise the unfinished spans are discarded.
 *
 * The transaction must be finished with a call to its `.finish()` method, at which point the transaction with all its
 * finished child spans will be sent to Sentry.
 *
 * @param context Properties of the new `Transaction`.
 * @param customSamplingContext Information given to the transaction sampling function (along with context-dependent
 * default values). See {@link Options.tracesSampler}.
 *
 * @returns The transaction which was just started
 */ function startTransaction(context, customSamplingContext) {
    return (0, _hubJs.getCurrentHub)().startTransaction({
        ...context
    }, customSamplingContext);
}

},{"./hub.js":"80DzD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lBZIO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getEnvelopeEndpointWithUrlEncodedAuth", ()=>getEnvelopeEndpointWithUrlEncodedAuth);
parcelHelpers.export(exports, "getReportDialogEndpoint", ()=>getReportDialogEndpoint);
var _utils = require("@sentry/utils");
var SENTRY_API_VERSION = "7";
/** Returns the prefix to construct Sentry ingestion API endpoints. */ function getBaseApiEndpoint(dsn) {
    var protocol = dsn.protocol ? `${dsn.protocol}:` : "";
    var port = dsn.port ? `:${dsn.port}` : "";
    return `${protocol}//${dsn.host}${port}${dsn.path ? `/${dsn.path}` : ""}/api/`;
}
/** Returns the ingest API endpoint for target. */ function _getIngestEndpoint(dsn) {
    return `${getBaseApiEndpoint(dsn)}${dsn.projectId}/envelope/`;
}
/** Returns a URL-encoded string with auth config suitable for a query string. */ function _encodedAuth(dsn) {
    return (0, _utils.urlEncode)({
        // We send only the minimum set of required information. See
        // https://github.com/getsentry/sentry-javascript/issues/2572.
        sentry_key: dsn.publicKey,
        sentry_version: SENTRY_API_VERSION
    });
}
/**
 * Returns the envelope endpoint URL with auth in the query string.
 *
 * Sending auth as part of the query string and not as custom HTTP headers avoids CORS preflight requests.
 */ function getEnvelopeEndpointWithUrlEncodedAuth(dsn, tunnel) {
    return tunnel ? tunnel : `${_getIngestEndpoint(dsn)}?${_encodedAuth(dsn)}`;
}
/** Returns the url to the report dialog endpoint. */ function getReportDialogEndpoint(dsnLike, dialogOptions) {
    var dsn = (0, _utils.makeDsn)(dsnLike);
    var endpoint = `${getBaseApiEndpoint(dsn)}embed/error-page/`;
    let encodedOptions = `dsn=${(0, _utils.dsnToString)(dsn)}`;
    for(var key in dialogOptions){
        if (key === "dsn") continue;
        if (key === "user") {
            var user = dialogOptions.user;
            if (!user) continue;
            if (user.name) encodedOptions += `&name=${encodeURIComponent(user.name)}`;
            if (user.email) encodedOptions += `&email=${encodeURIComponent(user.email)}`;
        } else encodedOptions += `&${encodeURIComponent(key)}=${encodeURIComponent(dialogOptions[key])}`;
    }
    return `${endpoint}?${encodedOptions}`;
}

},{"@sentry/utils":"5auop","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"blPmr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BaseClient", ()=>BaseClient);
var _hub = require("@sentry/hub");
var _utils = require("@sentry/utils");
var _apiJs = require("./api.js");
var _envelopeJs = require("./envelope.js");
var _integrationJs = require("./integration.js");
var ALREADY_SEEN_ERROR = "Not capturing exception because it's already been captured.";
/**
 * Base implementation for all JavaScript SDK clients.
 *
 * Call the constructor with the corresponding options
 * specific to the client subclass. To access these options later, use
 * {@link Client.getOptions}.
 *
 * If a Dsn is specified in the options, it will be parsed and stored. Use
 * {@link Client.getDsn} to retrieve the Dsn at any moment. In case the Dsn is
 * invalid, the constructor will throw a {@link SentryException}. Note that
 * without a valid Dsn, the SDK will not send any events to Sentry.
 *
 * Before sending an event, it is passed through
 * {@link BaseClient._prepareEvent} to add SDK information and scope data
 * (breadcrumbs and context). To add more custom information, override this
 * method and extend the resulting prepared event.
 *
 * To issue automatically created events (e.g. via instrumentation), use
 * {@link Client.captureEvent}. It will prepare the event and pass it through
 * the callback lifecycle. To issue auto-breadcrumbs, use
 * {@link Client.addBreadcrumb}.
 *
 * @example
 * class NodeClient extends BaseClient<NodeOptions> {
 *   public constructor(options: NodeOptions) {
 *     super(options);
 *   }
 *
 *   // ...
 * }
 */ class BaseClient {
    /** Options passed to the SDK. */ /** The client Dsn, if specified in options. Without this Dsn, the SDK will be disabled. */ /** Array of set up integrations. */ __init() {
        this._integrations = {};
    }
    /** Indicates whether this client's integrations have been set up. */ __init2() {
        this._integrationsInitialized = false;
    }
    /** Number of calls being processed */ __init3() {
        this._numProcessing = 0;
    }
    /** Holds flushable  */ __init4() {
        this._outcomes = {};
    }
    /**
   * Initializes this client instance.
   *
   * @param options Options for the client.
   */ constructor(options){
        BaseClient.prototype.__init.call(this);
        BaseClient.prototype.__init2.call(this);
        BaseClient.prototype.__init3.call(this);
        BaseClient.prototype.__init4.call(this);
        this._options = options;
        if (options.dsn) {
            this._dsn = (0, _utils.makeDsn)(options.dsn);
            var url = (0, _apiJs.getEnvelopeEndpointWithUrlEncodedAuth)(this._dsn, options.tunnel);
            this._transport = options.transport({
                recordDroppedEvent: this.recordDroppedEvent.bind(this),
                ...options.transportOptions,
                url
            });
        } else (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _utils.logger).warn("No DSN provided, client will not do anything.");
    }
    /**
   * @inheritDoc
   */ captureException(exception, hint, scope) {
        // ensure we haven't captured this very object before
        if ((0, _utils.checkOrSetAlreadyCaught)(exception)) {
            (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _utils.logger).log(ALREADY_SEEN_ERROR);
            return;
        }
        let eventId = hint && hint.event_id;
        this._process(this.eventFromException(exception, hint).then((event)=>this._captureEvent(event, hint, scope)).then((result)=>{
            eventId = result;
        }));
        return eventId;
    }
    /**
   * @inheritDoc
   */ captureMessage(message, level, hint, scope) {
        let eventId = hint && hint.event_id;
        var promisedEvent = (0, _utils.isPrimitive)(message) ? this.eventFromMessage(String(message), level, hint) : this.eventFromException(message, hint);
        this._process(promisedEvent.then((event)=>this._captureEvent(event, hint, scope)).then((result)=>{
            eventId = result;
        }));
        return eventId;
    }
    /**
   * @inheritDoc
   */ captureEvent(event, hint, scope) {
        // ensure we haven't captured this very object before
        if (hint && hint.originalException && (0, _utils.checkOrSetAlreadyCaught)(hint.originalException)) {
            (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _utils.logger).log(ALREADY_SEEN_ERROR);
            return;
        }
        let eventId = hint && hint.event_id;
        this._process(this._captureEvent(event, hint, scope).then((result)=>{
            eventId = result;
        }));
        return eventId;
    }
    /**
   * @inheritDoc
   */ captureSession(session) {
        if (!this._isEnabled()) {
            (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _utils.logger).warn("SDK not enabled, will not capture session.");
            return;
        }
        if (!(typeof session.release === "string")) (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _utils.logger).warn("Discarded session because of missing or non-string release");
        else {
            this.sendSession(session);
            // After sending, we set init false to indicate it's not the first occurrence
            (0, _hub.updateSession)(session, {
                init: false
            });
        }
    }
    /**
   * @inheritDoc
   */ getDsn() {
        return this._dsn;
    }
    /**
   * @inheritDoc
   */ getOptions() {
        return this._options;
    }
    /**
   * @inheritDoc
   */ getTransport() {
        return this._transport;
    }
    /**
   * @inheritDoc
   */ flush(timeout) {
        var transport = this._transport;
        if (transport) return this._isClientDoneProcessing(timeout).then((clientFinished)=>{
            return transport.flush(timeout).then((transportFlushed)=>clientFinished && transportFlushed);
        });
        else return (0, _utils.resolvedSyncPromise)(true);
    }
    /**
   * @inheritDoc
   */ close(timeout) {
        return this.flush(timeout).then((result)=>{
            this.getOptions().enabled = false;
            return result;
        });
    }
    /**
   * Sets up the integrations
   */ setupIntegrations() {
        if (this._isEnabled() && !this._integrationsInitialized) {
            this._integrations = (0, _integrationJs.setupIntegrations)(this._options.integrations);
            this._integrationsInitialized = true;
        }
    }
    /**
   * Gets an installed integration by its `id`.
   *
   * @returns The installed integration or `undefined` if no integration with that `id` was installed.
   */ getIntegrationById(integrationId) {
        return this._integrations[integrationId];
    }
    /**
   * @inheritDoc
   */ getIntegration(integration) {
        try {
            return this._integrations[integration.id] || null;
        } catch (_oO) {
            (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _utils.logger).warn(`Cannot retrieve integration ${integration.id} from the current Client`);
            return null;
        }
    }
    /**
   * @inheritDoc
   */ sendEvent(event, hint = {}) {
        if (this._dsn) {
            let env = (0, _envelopeJs.createEventEnvelope)(event, this._dsn, this._options._metadata, this._options.tunnel);
            for (var attachment of hint.attachments || [])env = (0, _utils.addItemToEnvelope)(env, (0, _utils.createAttachmentEnvelopeItem)(attachment, this._options.transportOptions && this._options.transportOptions.textEncoder));
            this._sendEnvelope(env);
        }
    }
    /**
   * @inheritDoc
   */ sendSession(session) {
        if (this._dsn) {
            var env = (0, _envelopeJs.createSessionEnvelope)(session, this._dsn, this._options._metadata, this._options.tunnel);
            this._sendEnvelope(env);
        }
    }
    /**
   * @inheritDoc
   */ recordDroppedEvent(reason, category) {
        if (this._options.sendClientReports) {
            // We want to track each category (error, transaction, session) separately
            // but still keep the distinction between different type of outcomes.
            // We could use nested maps, but it's much easier to read and type this way.
            // A correct type for map-based implementation if we want to go that route
            // would be `Partial<Record<SentryRequestType, Partial<Record<Outcome, number>>>>`
            // With typescript 4.1 we could even use template literal types
            var key = `${reason}:${category}`;
            (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _utils.logger).log(`Adding outcome: "${key}"`);
            // The following works because undefined + 1 === NaN and NaN is falsy
            this._outcomes[key] = this._outcomes[key] + 1 || 1;
        }
    }
    /** Updates existing session based on the provided event */ _updateSessionFromEvent(session, event) {
        let crashed = false;
        let errored = false;
        var exceptions = event.exception && event.exception.values;
        if (exceptions) {
            errored = true;
            for (var ex of exceptions){
                var mechanism = ex.mechanism;
                if (mechanism && mechanism.handled === false) {
                    crashed = true;
                    break;
                }
            }
        }
        // A session is updated and that session update is sent in only one of the two following scenarios:
        // 1. Session with non terminal status and 0 errors + an error occurred -> Will set error count to 1 and send update
        // 2. Session with non terminal status and 1 error + a crash occurred -> Will set status crashed and send update
        var sessionNonTerminal = session.status === "ok";
        var shouldUpdateAndSend = sessionNonTerminal && session.errors === 0 || sessionNonTerminal && crashed;
        if (shouldUpdateAndSend) {
            (0, _hub.updateSession)(session, {
                ...crashed && {
                    status: "crashed"
                },
                errors: session.errors || Number(errored || crashed)
            });
            this.captureSession(session);
        }
    }
    /**
   * Determine if the client is finished processing. Returns a promise because it will wait `timeout` ms before saying
   * "no" (resolving to `false`) in order to give the client a chance to potentially finish first.
   *
   * @param timeout The time, in ms, after which to resolve to `false` if the client is still busy. Passing `0` (or not
   * passing anything) will make the promise wait as long as it takes for processing to finish before resolving to
   * `true`.
   * @returns A promise which will resolve to `true` if processing is already done or finishes before the timeout, and
   * `false` otherwise
   */ _isClientDoneProcessing(timeout) {
        return new (0, _utils.SyncPromise)((resolve)=>{
            let ticked = 0;
            var tick = 1;
            var interval = setInterval(()=>{
                if (this._numProcessing == 0) {
                    clearInterval(interval);
                    resolve(true);
                } else {
                    ticked += tick;
                    if (timeout && ticked >= timeout) {
                        clearInterval(interval);
                        resolve(false);
                    }
                }
            }, tick);
        });
    }
    /** Determines whether this SDK is enabled and a valid Dsn is present. */ _isEnabled() {
        return this.getOptions().enabled !== false && this._dsn !== undefined;
    }
    /**
   * Adds common information to events.
   *
   * The information includes release and environment from `options`,
   * breadcrumbs and context (extra, tags and user) from the scope.
   *
   * Information that is already present in the event is never overwritten. For
   * nested objects, such as the context, keys are merged.
   *
   * @param event The original event.
   * @param hint May contain additional information about the original exception.
   * @param scope A scope containing event metadata.
   * @returns A new event with more information.
   */ _prepareEvent(event, hint, scope) {
        const { normalizeDepth =3 , normalizeMaxBreadth =1000  } = this.getOptions();
        var prepared = {
            ...event,
            event_id: event.event_id || hint.event_id || (0, _utils.uuid4)(),
            timestamp: event.timestamp || (0, _utils.dateTimestampInSeconds)()
        };
        this._applyClientOptions(prepared);
        this._applyIntegrationsMetadata(prepared);
        // If we have scope given to us, use it as the base for further modifications.
        // This allows us to prevent unnecessary copying of data if `captureContext` is not provided.
        let finalScope = scope;
        if (hint.captureContext) finalScope = (0, _hub.Scope).clone(finalScope).update(hint.captureContext);
        // We prepare the result here with a resolved Event.
        let result = (0, _utils.resolvedSyncPromise)(prepared);
        // This should be the last thing called, since we want that
        // {@link Hub.addEventProcessor} gets the finished prepared event.
        if (finalScope) {
            // Collect attachments from the hint and scope
            var attachments = [
                ...hint.attachments || [],
                ...finalScope.getAttachments()
            ];
            if (attachments.length) hint.attachments = attachments;
            // In case we have a hub we reassign it.
            result = finalScope.applyToEvent(prepared, hint);
        }
        return result.then((evt)=>{
            if (typeof normalizeDepth === "number" && normalizeDepth > 0) return this._normalizeEvent(evt, normalizeDepth, normalizeMaxBreadth);
            return evt;
        });
    }
    /**
   * Applies `normalize` function on necessary `Event` attributes to make them safe for serialization.
   * Normalized keys:
   * - `breadcrumbs.data`
   * - `user`
   * - `contexts`
   * - `extra`
   * @param event Event
   * @returns Normalized event
   */ _normalizeEvent(event, depth, maxBreadth) {
        if (!event) return null;
        var normalized = {
            ...event,
            ...event.breadcrumbs && {
                breadcrumbs: event.breadcrumbs.map((b)=>({
                        ...b,
                        ...b.data && {
                            data: (0, _utils.normalize)(b.data, depth, maxBreadth)
                        }
                    }))
            },
            ...event.user && {
                user: (0, _utils.normalize)(event.user, depth, maxBreadth)
            },
            ...event.contexts && {
                contexts: (0, _utils.normalize)(event.contexts, depth, maxBreadth)
            },
            ...event.extra && {
                extra: (0, _utils.normalize)(event.extra, depth, maxBreadth)
            }
        };
        // event.contexts.trace stores information about a Transaction. Similarly,
        // event.spans[] stores information about child Spans. Given that a
        // Transaction is conceptually a Span, normalization should apply to both
        // Transactions and Spans consistently.
        // For now the decision is to skip normalization of Transactions and Spans,
        // so this block overwrites the normalized event to add back the original
        // Transaction information prior to normalization.
        if (event.contexts && event.contexts.trace && normalized.contexts) {
            normalized.contexts.trace = event.contexts.trace;
            // event.contexts.trace.data may contain circular/dangerous data so we need to normalize it
            if (event.contexts.trace.data) normalized.contexts.trace.data = (0, _utils.normalize)(event.contexts.trace.data, depth, maxBreadth);
        }
        // event.spans[].data may contain circular/dangerous data so we need to normalize it
        if (event.spans) normalized.spans = event.spans.map((span)=>{
            // We cannot use the spread operator here because `toJSON` on `span` is non-enumerable
            if (span.data) span.data = (0, _utils.normalize)(span.data, depth, maxBreadth);
            return span;
        });
        return normalized;
    }
    /**
   *  Enhances event using the client configuration.
   *  It takes care of all "static" values like environment, release and `dist`,
   *  as well as truncating overly long values.
   * @param event event instance to be enhanced
   */ _applyClientOptions(event) {
        var options = this.getOptions();
        const { environment , release , dist , maxValueLength =250  } = options;
        if (!("environment" in event)) event.environment = "environment" in options ? environment : "production";
        if (event.release === undefined && release !== undefined) event.release = release;
        if (event.dist === undefined && dist !== undefined) event.dist = dist;
        if (event.message) event.message = (0, _utils.truncate)(event.message, maxValueLength);
        var exception = event.exception && event.exception.values && event.exception.values[0];
        if (exception && exception.value) exception.value = (0, _utils.truncate)(exception.value, maxValueLength);
        var request = event.request;
        if (request && request.url) request.url = (0, _utils.truncate)(request.url, maxValueLength);
    }
    /**
   * This function adds all used integrations to the SDK info in the event.
   * @param event The event that will be filled with all integrations.
   */ _applyIntegrationsMetadata(event) {
        var integrationsArray = Object.keys(this._integrations);
        if (integrationsArray.length > 0) {
            event.sdk = event.sdk || {};
            event.sdk.integrations = [
                ...event.sdk.integrations || [],
                ...integrationsArray
            ];
        }
    }
    /**
   * Processes the event and logs an error in case of rejection
   * @param event
   * @param hint
   * @param scope
   */ _captureEvent(event, hint = {}, scope) {
        return this._processEvent(event, hint, scope).then((finalEvent)=>{
            return finalEvent.event_id;
        }, (reason)=>{
            (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _utils.logger).warn(reason);
            return undefined;
        });
    }
    /**
   * Processes an event (either error or message) and sends it to Sentry.
   *
   * This also adds breadcrumbs and context information to the event. However,
   * platform specific meta data (such as the User's IP address) must be added
   * by the SDK implementor.
   *
   *
   * @param event The event to send to Sentry.
   * @param hint May contain additional information about the original exception.
   * @param scope A scope containing event metadata.
   * @returns A SyncPromise that resolves with the event or rejects in case event was/will not be send.
   */ _processEvent(event, hint, scope) {
        const { beforeSend , sampleRate  } = this.getOptions();
        if (!this._isEnabled()) return (0, _utils.rejectedSyncPromise)(new (0, _utils.SentryError)("SDK not enabled, will not capture event."));
        var isTransaction = event.type === "transaction";
        // 1.0 === 100% events are sent
        // 0.0 === 0% events are sent
        // Sampling for transaction happens somewhere else
        if (!isTransaction && typeof sampleRate === "number" && Math.random() > sampleRate) {
            this.recordDroppedEvent("sample_rate", "error");
            return (0, _utils.rejectedSyncPromise)(new (0, _utils.SentryError)(`Discarding event because it's not included in the random sample (sampling rate = ${sampleRate})`));
        }
        return this._prepareEvent(event, hint, scope).then((prepared)=>{
            if (prepared === null) {
                this.recordDroppedEvent("event_processor", event.type || "error");
                throw new (0, _utils.SentryError)("An event processor returned null, will not send event.");
            }
            var isInternalException = hint.data && hint.data.__sentry__ === true;
            if (isInternalException || isTransaction || !beforeSend) return prepared;
            var beforeSendResult = beforeSend(prepared, hint);
            return _ensureBeforeSendRv(beforeSendResult);
        }).then((processedEvent)=>{
            if (processedEvent === null) {
                this.recordDroppedEvent("before_send", event.type || "error");
                throw new (0, _utils.SentryError)("`beforeSend` returned `null`, will not send event.");
            }
            var session = scope && scope.getSession();
            if (!isTransaction && session) this._updateSessionFromEvent(session, processedEvent);
            this.sendEvent(processedEvent, hint);
            return processedEvent;
        }).then(null, (reason)=>{
            if (reason instanceof (0, _utils.SentryError)) throw reason;
            this.captureException(reason, {
                data: {
                    __sentry__: true
                },
                originalException: reason
            });
            throw new (0, _utils.SentryError)(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: ${reason}`);
        });
    }
    /**
   * Occupies the client with processing and event
   */ _process(promise) {
        this._numProcessing += 1;
        promise.then((value)=>{
            this._numProcessing -= 1;
            return value;
        }, (reason)=>{
            this._numProcessing -= 1;
            return reason;
        });
    }
    /**
   * @inheritdoc
   */ _sendEnvelope(envelope) {
        if (this._transport && this._dsn) this._transport.send(envelope).then(null, (reason)=>{
            (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _utils.logger).error("Error while sending event:", reason);
        });
        else (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _utils.logger).error("Transport disabled");
    }
    /**
   * Clears outcomes on this client and returns them.
   */ _clearOutcomes() {
        var outcomes = this._outcomes;
        this._outcomes = {};
        return Object.keys(outcomes).map((key)=>{
            const [reason, category] = key.split(":");
            return {
                reason,
                category,
                quantity: outcomes[key]
            };
        });
    }
}
/**
 * Verifies that return value of configured `beforeSend` is of expected type.
 */ function _ensureBeforeSendRv(rv) {
    var nullErr = "`beforeSend` method has to return `null` or a valid event.";
    if ((0, _utils.isThenable)(rv)) return rv.then((event)=>{
        if (!((0, _utils.isPlainObject)(event) || event === null)) throw new (0, _utils.SentryError)(nullErr);
        return event;
    }, (e)=>{
        throw new (0, _utils.SentryError)(`beforeSend rejected with ${e}`);
    });
    else if (!((0, _utils.isPlainObject)(rv) || rv === null)) throw new (0, _utils.SentryError)(nullErr);
    return rv;
}

},{"@sentry/hub":"cqx4p","@sentry/utils":"5auop","./api.js":"lBZIO","./envelope.js":"5HVfn","./integration.js":"5FQsm","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5HVfn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createEventEnvelope", ()=>createEventEnvelope);
parcelHelpers.export(exports, "createSessionEnvelope", ()=>createSessionEnvelope);
var _utils = require("@sentry/utils");
/** Extract sdk info from from the API metadata */ function getSdkMetadataForEnvelopeHeader(metadata) {
    if (!metadata || !metadata.sdk) return;
    const { name , version  } = metadata.sdk;
    return {
        name,
        version
    };
}
/**
 * Apply SdkInfo (name, version, packages, integrations) to the corresponding event key.
 * Merge with existing data if any.
 **/ function enhanceEventWithSdkInfo(event, sdkInfo) {
    if (!sdkInfo) return event;
    event.sdk = event.sdk || {};
    event.sdk.name = event.sdk.name || sdkInfo.name;
    event.sdk.version = event.sdk.version || sdkInfo.version;
    event.sdk.integrations = [
        ...event.sdk.integrations || [],
        ...sdkInfo.integrations || []
    ];
    event.sdk.packages = [
        ...event.sdk.packages || [],
        ...sdkInfo.packages || []
    ];
    return event;
}
/** Creates an envelope from a Session */ function createSessionEnvelope(session, dsn, metadata, tunnel) {
    var sdkInfo = getSdkMetadataForEnvelopeHeader(metadata);
    var envelopeHeaders = {
        sent_at: new Date().toISOString(),
        ...sdkInfo && {
            sdk: sdkInfo
        },
        ...!!tunnel && {
            dsn: (0, _utils.dsnToString)(dsn)
        }
    };
    var envelopeItem = "aggregates" in session ? [
        {
            type: "sessions"
        },
        session
    ] : [
        {
            type: "session"
        },
        session
    ];
    return (0, _utils.createEnvelope)(envelopeHeaders, [
        envelopeItem
    ]);
}
/**
 * Create an Envelope from an event.
 */ function createEventEnvelope(event, dsn, metadata, tunnel) {
    var sdkInfo = getSdkMetadataForEnvelopeHeader(metadata);
    var eventType = event.type || "event";
    const { transactionSampling  } = event.sdkProcessingMetadata || {};
    const { method: samplingMethod , rate: sampleRate  } = transactionSampling || {};
    enhanceEventWithSdkInfo(event, metadata && metadata.sdk);
    var envelopeHeaders = createEventEnvelopeHeaders(event, sdkInfo, tunnel, dsn);
    // Prevent this data (which, if it exists, was used in earlier steps in the processing pipeline) from being sent to
    // sentry. (Note: Our use of this property comes and goes with whatever we might be debugging, whatever hacks we may
    // have temporarily added, etc. Even if we don't happen to be using it at some point in the future, let's not get rid
    // of this `delete`, lest we miss putting it back in the next time the property is in use.)
    delete event.sdkProcessingMetadata;
    var eventItem = [
        {
            type: eventType,
            sample_rates: [
                {
                    id: samplingMethod,
                    rate: sampleRate
                }
            ]
        },
        event, 
    ];
    return (0, _utils.createEnvelope)(envelopeHeaders, [
        eventItem
    ]);
}
function createEventEnvelopeHeaders(event, sdkInfo, tunnel, dsn) {
    var baggage = event.sdkProcessingMetadata && event.sdkProcessingMetadata.baggage;
    var dynamicSamplingContext = baggage && (0, _utils.getSentryBaggageItems)(baggage);
    return {
        event_id: event.event_id,
        sent_at: new Date().toISOString(),
        ...sdkInfo && {
            sdk: sdkInfo
        },
        ...!!tunnel && {
            dsn: (0, _utils.dsnToString)(dsn)
        },
        ...event.type === "transaction" && dynamicSamplingContext && {
            trace: (0, _utils.dropUndefinedKeys)({
                ...dynamicSamplingContext
            })
        }
    };
}

},{"@sentry/utils":"5auop","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5FQsm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getIntegrationsToSetup", ()=>getIntegrationsToSetup);
parcelHelpers.export(exports, "installedIntegrations", ()=>installedIntegrations);
parcelHelpers.export(exports, "setupIntegrations", ()=>setupIntegrations);
var _hub = require("@sentry/hub");
var _utils = require("@sentry/utils");
var installedIntegrations = [];
/** Map of integrations assigned to a client */ /**
 * @private
 */ function filterDuplicates(integrations1) {
    return integrations1.reduce((acc, integrations)=>{
        if (acc.every((accIntegration)=>integrations.name !== accIntegration.name)) acc.push(integrations);
        return acc;
    }, []);
}
/** Gets integration to install */ function getIntegrationsToSetup(options) {
    var defaultIntegrations = options.defaultIntegrations && [
        ...options.defaultIntegrations
    ] || [];
    var userIntegrations = options.integrations;
    let integrations2 = [
        ...filterDuplicates(defaultIntegrations)
    ];
    if (Array.isArray(userIntegrations)) // Filter out integrations that are also included in user options
    integrations2 = [
        ...integrations2.filter((integrations)=>userIntegrations.every((userIntegration)=>userIntegration.name !== integrations.name)),
        // And filter out duplicated user options integrations
        ...filterDuplicates(userIntegrations), 
    ];
    else if (typeof userIntegrations === "function") {
        integrations2 = userIntegrations(integrations2);
        integrations2 = Array.isArray(integrations2) ? integrations2 : [
            integrations2
        ];
    }
    // Make sure that if present, `Debug` integration will always run last
    var integrationsNames = integrations2.map((i)=>i.name);
    var alwaysLastToRun = "Debug";
    if (integrationsNames.indexOf(alwaysLastToRun) !== -1) integrations2.push(...integrations2.splice(integrationsNames.indexOf(alwaysLastToRun), 1));
    return integrations2;
}
/**
 * Given a list of integration instances this installs them all. When `withDefaults` is set to `true` then all default
 * integrations are added unless they were already provided before.
 * @param integrations array of integration instances
 * @param withDefault should enable default integrations
 */ function setupIntegrations(integrations) {
    var integrationIndex = {};
    integrations.forEach((integration)=>{
        integrationIndex[integration.name] = integration;
        if (installedIntegrations.indexOf(integration.name) === -1) {
            integration.setupOnce((0, _hub.addGlobalEventProcessor), (0, _hub.getCurrentHub));
            installedIntegrations.push(integration.name);
            (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _utils.logger).log(`Integration installed: ${integration.name}`);
        }
    });
    return integrationIndex;
}

},{"@sentry/hub":"cqx4p","@sentry/utils":"5auop","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c4En9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initAndBind", ()=>initAndBind);
var _hub = require("@sentry/hub");
var _utils = require("@sentry/utils");
/** A class object that can instantiate Client objects. */ /**
 * Internal function to create a new SDK client instance. The client is
 * installed and then bound to the current scope.
 *
 * @param clientClass The client class to instantiate.
 * @param options Options to pass to the client.
 */ function initAndBind(clientClass, options) {
    if (options.debug === true) {
        if (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) (0, _utils.logger).enable();
        else // use `console.warn` rather than `logger.warn` since by non-debug bundles have all `logger.x` statements stripped
        console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.");
    }
    var hub = (0, _hub.getCurrentHub)();
    var scope = hub.getScope();
    if (scope) scope.update(options.initialScope);
    var client = new clientClass(options);
    hub.bindClient(client);
}

},{"@sentry/hub":"cqx4p","@sentry/utils":"5auop","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gOVxC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DEFAULT_TRANSPORT_BUFFER_SIZE", ()=>DEFAULT_TRANSPORT_BUFFER_SIZE);
parcelHelpers.export(exports, "createTransport", ()=>createTransport);
var _utils = require("@sentry/utils");
var DEFAULT_TRANSPORT_BUFFER_SIZE = 30;
/**
 * Creates an instance of a Sentry `Transport`
 *
 * @param options
 * @param makeRequest
 */ function createTransport(options, makeRequest, buffer = (0, _utils.makePromiseBuffer)(options.bufferSize || DEFAULT_TRANSPORT_BUFFER_SIZE)) {
    let rateLimits = {};
    var flush = (timeout)=>buffer.drain(timeout);
    function send(envelope) {
        var filteredEnvelopeItems = [];
        // Drop rate limited items from envelope
        (0, _utils.forEachEnvelopeItem)(envelope, (item, type)=>{
            var envelopeItemDataCategory = (0, _utils.envelopeItemTypeToDataCategory)(type);
            if ((0, _utils.isRateLimited)(rateLimits, envelopeItemDataCategory)) options.recordDroppedEvent("ratelimit_backoff", envelopeItemDataCategory);
            else filteredEnvelopeItems.push(item);
        });
        // Skip sending if envelope is empty after filtering out rate limited events
        if (filteredEnvelopeItems.length === 0) return (0, _utils.resolvedSyncPromise)();
        var filteredEnvelope = (0, _utils.createEnvelope)(envelope[0], filteredEnvelopeItems);
        // Creates client report for each item in an envelope
        var recordEnvelopeLoss = (reason)=>{
            (0, _utils.forEachEnvelopeItem)(filteredEnvelope, (_, type)=>{
                options.recordDroppedEvent(reason, (0, _utils.envelopeItemTypeToDataCategory)(type));
            });
        };
        var requestTask = ()=>makeRequest({
                body: (0, _utils.serializeEnvelope)(filteredEnvelope, options.textEncoder)
            }).then((response)=>{
                // We don't want to throw on NOK responses, but we want to at least log them
                if (response.statusCode !== undefined && (response.statusCode < 200 || response.statusCode >= 300)) (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _utils.logger).warn(`Sentry responded with status code ${response.statusCode} to sent event.`);
                rateLimits = (0, _utils.updateRateLimits)(rateLimits, response);
            }, (error)=>{
                (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _utils.logger).error("Failed while sending event:", error);
                recordEnvelopeLoss("network_error");
            });
        return buffer.add(requestTask).then((result)=>result, (error)=>{
            if (error instanceof (0, _utils.SentryError)) {
                (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _utils.logger).error("Skipped sending event due to full buffer");
                recordEnvelopeLoss("queue_overflow");
                return (0, _utils.resolvedSyncPromise)();
            } else throw error;
        });
    }
    return {
        send,
        flush
    };
}

},{"@sentry/utils":"5auop","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1zT0P":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SDK_VERSION", ()=>SDK_VERSION);
var SDK_VERSION = "7.5.1";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"27QKk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getNativeFetchImplementation", ()=>getNativeFetchImplementation);
parcelHelpers.export(exports, "sendReport", ()=>sendReport);
var _utils = require("@sentry/utils");
var global = (0, _utils.getGlobalObject)();
let cachedFetchImpl;
/**
 * A special usecase for incorrectly wrapped Fetch APIs in conjunction with ad-blockers.
 * Whenever someone wraps the Fetch API and returns the wrong promise chain,
 * this chain becomes orphaned and there is no possible way to capture it's rejections
 * other than allowing it bubble up to this very handler. eg.
 *
 * var f = window.fetch;
 * window.fetch = function () {
 *   var p = f.apply(this, arguments);
 *
 *   p.then(function() {
 *     console.log('hi.');
 *   });
 *
 *   return p;
 * }
 *
 * `p.then(function () { ... })` is producing a completely separate promise chain,
 * however, what's returned is `p` - the result of original `fetch` call.
 *
 * This mean, that whenever we use the Fetch API to send our own requests, _and_
 * some ad-blocker blocks it, this orphaned chain will _always_ reject,
 * effectively causing another event to be captured.
 * This makes a whole process become an infinite loop, which we need to somehow
 * deal with, and break it in one way or another.
 *
 * To deal with this issue, we are making sure that we _always_ use the real
 * browser Fetch API, instead of relying on what `window.fetch` exposes.
 * The only downside to this would be missing our own requests as breadcrumbs,
 * but because we are already not doing this, it should be just fine.
 *
 * Possible failed fetch error messages per-browser:
 *
 * Chrome:  Failed to fetch
 * Edge:    Failed to Fetch
 * Firefox: NetworkError when attempting to fetch resource
 * Safari:  resource blocked by content blocker
 */ function getNativeFetchImplementation() {
    if (cachedFetchImpl) return cachedFetchImpl;
    // Fast path to avoid DOM I/O
    if ((0, _utils.isNativeFetch)(global.fetch)) return cachedFetchImpl = global.fetch.bind(global);
    var document = global.document;
    let fetchImpl = global.fetch;
    if (document && typeof document.createElement === "function") try {
        var sandbox = document.createElement("iframe");
        sandbox.hidden = true;
        document.head.appendChild(sandbox);
        var contentWindow = sandbox.contentWindow;
        if (contentWindow && contentWindow.fetch) fetchImpl = contentWindow.fetch;
        document.head.removeChild(sandbox);
    } catch (e) {
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _utils.logger).warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", e);
    }
    return cachedFetchImpl = fetchImpl.bind(global);
}
/**
 * Sends sdk client report using sendBeacon or fetch as a fallback if available
 *
 * @param url report endpoint
 * @param body report payload
 */ function sendReport(url, body) {
    var isRealNavigator = Object.prototype.toString.call(global && global.navigator) === "[object Navigator]";
    var hasSendBeacon = isRealNavigator && typeof global.navigator.sendBeacon === "function";
    if (hasSendBeacon) {
        // Prevent illegal invocations - https://xgwang.me/posts/you-may-not-know-beacon/#it-may-throw-error%2C-be-sure-to-catch
        var sendBeacon = global.navigator.sendBeacon.bind(global.navigator);
        sendBeacon(url, body);
    } else if ((0, _utils.supportsFetch)()) {
        var fetch = getNativeFetchImplementation();
        fetch(url, {
            body,
            method: "POST",
            credentials: "omit",
            keepalive: true
        }).then(null, (error)=>{
            (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _utils.logger).error(error);
        });
    }
}

},{"@sentry/utils":"5auop","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9GDaB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "makeXHRTransport", ()=>makeXHRTransport);
var _core = require("@sentry/core");
var _utils = require("@sentry/utils");
/**
 * The DONE ready state for XmlHttpRequest
 *
 * Defining it here as a constant b/c XMLHttpRequest.DONE is not always defined
 * (e.g. during testing, it is `undefined`)
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState}
 */ var XHR_READYSTATE_DONE = 4;
/**
 * Creates a Transport that uses the XMLHttpRequest API to send events to Sentry.
 */ function makeXHRTransport(options) {
    function makeRequest(request) {
        return new (0, _utils.SyncPromise)((resolve, reject)=>{
            var xhr = new XMLHttpRequest();
            xhr.onerror = reject;
            xhr.onreadystatechange = ()=>{
                if (xhr.readyState === XHR_READYSTATE_DONE) resolve({
                    statusCode: xhr.status,
                    headers: {
                        "x-sentry-rate-limits": xhr.getResponseHeader("X-Sentry-Rate-Limits"),
                        "retry-after": xhr.getResponseHeader("Retry-After")
                    }
                });
            };
            xhr.open("POST", options.url);
            for(var header in options.headers)if (Object.prototype.hasOwnProperty.call(options.headers, header)) xhr.setRequestHeader(header, options.headers[header]);
            xhr.send(request.body);
        });
    }
    return (0, _core.createTransport)(options, makeRequest);
}

},{"@sentry/core":"bWm3H","@sentry/utils":"5auop","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hvGYe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "GlobalHandlers", ()=>(0, _globalhandlersJs.GlobalHandlers));
parcelHelpers.export(exports, "TryCatch", ()=>(0, _trycatchJs.TryCatch));
parcelHelpers.export(exports, "Breadcrumbs", ()=>(0, _breadcrumbsJs.Breadcrumbs));
parcelHelpers.export(exports, "LinkedErrors", ()=>(0, _linkederrorsJs.LinkedErrors));
parcelHelpers.export(exports, "HttpContext", ()=>(0, _httpcontextJs.HttpContext));
parcelHelpers.export(exports, "Dedupe", ()=>(0, _dedupeJs.Dedupe));
var _globalhandlersJs = require("./globalhandlers.js");
var _trycatchJs = require("./trycatch.js");
var _breadcrumbsJs = require("./breadcrumbs.js");
var _linkederrorsJs = require("./linkederrors.js");
var _httpcontextJs = require("./httpcontext.js");
var _dedupeJs = require("./dedupe.js");

},{"./globalhandlers.js":"9vNC8","./trycatch.js":"iBoZn","./breadcrumbs.js":"bPO5J","./linkederrors.js":"4LOto","./httpcontext.js":"wP6GD","./dedupe.js":"gb2cH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9vNC8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "GlobalHandlers", ()=>GlobalHandlers);
var _core = require("@sentry/core");
var _utils = require("@sentry/utils");
var _eventbuilderJs = require("../eventbuilder.js");
var _helpersJs = require("../helpers.js");
/** Global handlers */ class GlobalHandlers {
    /**
   * @inheritDoc
   */ static __initStatic() {
        this.id = "GlobalHandlers";
    }
    /**
   * @inheritDoc
   */ __init() {
        this.name = GlobalHandlers.id;
    }
    /** JSDoc */ /**
   * Stores references functions to installing handlers. Will set to undefined
   * after they have been run so that they are not used twice.
   */ __init2() {
        this._installFunc = {
            onerror: _installGlobalOnErrorHandler,
            onunhandledrejection: _installGlobalOnUnhandledRejectionHandler
        };
    }
    /** JSDoc */ constructor(options){
        GlobalHandlers.prototype.__init.call(this);
        GlobalHandlers.prototype.__init2.call(this);
        this._options = {
            onerror: true,
            onunhandledrejection: true,
            ...options
        };
    }
    /**
   * @inheritDoc
   */ setupOnce() {
        Error.stackTraceLimit = 50;
        var options = this._options;
        // We can disable guard-for-in as we construct the options object above + do checks against
        // `this._installFunc` for the property.
        for(var key in options){
            var installFunc = this._installFunc[key];
            if (installFunc && options[key]) {
                globalHandlerLog(key);
                installFunc();
                this._installFunc[key] = undefined;
            }
        }
    }
}
GlobalHandlers.__initStatic();
/** JSDoc */ function _installGlobalOnErrorHandler() {
    (0, _utils.addInstrumentationHandler)("error", (data)=>{
        const [hub, stackParser, attachStacktrace] = getHubAndOptions();
        if (!hub.getIntegration(GlobalHandlers)) return;
        const { msg , url , line , column , error  } = data;
        if ((0, _helpersJs.shouldIgnoreOnError)() || error && error.__sentry_own_request__) return;
        var event = error === undefined && (0, _utils.isString)(msg) ? _eventFromIncompleteOnError(msg, url, line, column) : _enhanceEventWithInitialFrame((0, _eventbuilderJs.eventFromUnknownInput)(stackParser, error || msg, undefined, attachStacktrace, false), url, line, column);
        event.level = "error";
        addMechanismAndCapture(hub, error, event, "onerror");
    });
}
/** JSDoc */ function _installGlobalOnUnhandledRejectionHandler() {
    (0, _utils.addInstrumentationHandler)("unhandledrejection", (e)=>{
        const [hub, stackParser, attachStacktrace] = getHubAndOptions();
        if (!hub.getIntegration(GlobalHandlers)) return;
        let error = e;
        // dig the object of the rejection out of known event types
        try {
            // PromiseRejectionEvents store the object of the rejection under 'reason'
            // see https://developer.mozilla.org/en-US/docs/Web/API/PromiseRejectionEvent
            if ("reason" in e) error = e.reason;
            else if ("detail" in e && "reason" in e.detail) error = e.detail.reason;
        } catch (_oO) {
        // no-empty
        }
        if ((0, _helpersJs.shouldIgnoreOnError)() || error && error.__sentry_own_request__) return true;
        var event = (0, _utils.isPrimitive)(error) ? _eventFromRejectionWithPrimitive(error) : (0, _eventbuilderJs.eventFromUnknownInput)(stackParser, error, undefined, attachStacktrace, true);
        event.level = "error";
        addMechanismAndCapture(hub, error, event, "onunhandledrejection");
        return;
    });
}
/**
 * Create an event from a promise rejection where the `reason` is a primitive.
 *
 * @param reason: The `reason` property of the promise rejection
 * @returns An Event object with an appropriate `exception` value
 */ function _eventFromRejectionWithPrimitive(reason) {
    return {
        exception: {
            values: [
                {
                    type: "UnhandledRejection",
                    // String() is needed because the Primitive type includes symbols (which can't be automatically stringified)
                    value: `Non-Error promise rejection captured with value: ${String(reason)}`
                }, 
            ]
        }
    };
}
/**
 * This function creates a stack from an old, error-less onerror handler.
 */ function _eventFromIncompleteOnError(msg, url, line, column) {
    var ERROR_TYPES_RE = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i;
    // If 'message' is ErrorEvent, get real message from inside
    let message = (0, _utils.isErrorEvent)(msg) ? msg.message : msg;
    let name = "Error";
    var groups = message.match(ERROR_TYPES_RE);
    if (groups) {
        name = groups[1];
        message = groups[2];
    }
    var event = {
        exception: {
            values: [
                {
                    type: name,
                    value: message
                }, 
            ]
        }
    };
    return _enhanceEventWithInitialFrame(event, url, line, column);
}
/** JSDoc */ function _enhanceEventWithInitialFrame(event, url, line, column) {
    // event.exception
    var e = event.exception = event.exception || {};
    // event.exception.values
    var ev = e.values = e.values || [];
    // event.exception.values[0]
    var ev0 = ev[0] = ev[0] || {};
    // event.exception.values[0].stacktrace
    var ev0s = ev0.stacktrace = ev0.stacktrace || {};
    // event.exception.values[0].stacktrace.frames
    var ev0sf = ev0s.frames = ev0s.frames || [];
    var colno = isNaN(parseInt(column, 10)) ? undefined : column;
    var lineno = isNaN(parseInt(line, 10)) ? undefined : line;
    var filename = (0, _utils.isString)(url) && url.length > 0 ? url : (0, _utils.getLocationHref)();
    // event.exception.values[0].stacktrace.frames
    if (ev0sf.length === 0) ev0sf.push({
        colno,
        filename,
        function: "?",
        in_app: true,
        lineno
    });
    return event;
}
function globalHandlerLog(type) {
    (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _utils.logger).log(`Global Handler attached: ${type}`);
}
function addMechanismAndCapture(hub, error, event, type) {
    (0, _utils.addExceptionMechanism)(event, {
        handled: false,
        type
    });
    hub.captureEvent(event, {
        originalException: error
    });
}
function getHubAndOptions() {
    var hub = (0, _core.getCurrentHub)();
    var client = hub.getClient();
    var options = client && client.getOptions() || {
        stackParser: ()=>[],
        attachStacktrace: false
    };
    return [
        hub,
        options.stackParser,
        options.attachStacktrace
    ];
}

},{"@sentry/core":"bWm3H","@sentry/utils":"5auop","../eventbuilder.js":"25Jer","../helpers.js":"6P1BD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"25Jer":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "eventFromError", ()=>eventFromError);
parcelHelpers.export(exports, "eventFromException", ()=>eventFromException);
parcelHelpers.export(exports, "eventFromMessage", ()=>eventFromMessage);
parcelHelpers.export(exports, "eventFromPlainObject", ()=>eventFromPlainObject);
parcelHelpers.export(exports, "eventFromString", ()=>eventFromString);
parcelHelpers.export(exports, "eventFromUnknownInput", ()=>eventFromUnknownInput);
parcelHelpers.export(exports, "exceptionFromError", ()=>exceptionFromError);
parcelHelpers.export(exports, "parseStackFrames", ()=>parseStackFrames);
var _utils = require("@sentry/utils");
/**
 * This function creates an exception from a JavaScript Error
 */ function exceptionFromError(stackParser, ex) {
    // Get the frames first since Opera can lose the stack if we touch anything else first
    var frames = parseStackFrames(stackParser, ex);
    var exception = {
        type: ex && ex.name,
        value: extractMessage(ex)
    };
    if (frames.length) exception.stacktrace = {
        frames
    };
    if (exception.type === undefined && exception.value === "") exception.value = "Unrecoverable error caught";
    return exception;
}
/**
 * @hidden
 */ function eventFromPlainObject(stackParser, exception, syntheticException, isUnhandledRejection) {
    var event = {
        exception: {
            values: [
                {
                    type: (0, _utils.isEvent)(exception) ? exception.constructor.name : isUnhandledRejection ? "UnhandledRejection" : "Error",
                    value: `Non-Error ${isUnhandledRejection ? "promise rejection" : "exception"} captured with keys: ${(0, _utils.extractExceptionKeysForMessage)(exception)}`
                }, 
            ]
        },
        extra: {
            __serialized__: (0, _utils.normalizeToSize)(exception)
        }
    };
    if (syntheticException) {
        var frames = parseStackFrames(stackParser, syntheticException);
        if (frames.length) // event.exception.values[0] has been set above
        event.exception.values[0].stacktrace = {
            frames
        };
    }
    return event;
}
/**
 * @hidden
 */ function eventFromError(stackParser, ex) {
    return {
        exception: {
            values: [
                exceptionFromError(stackParser, ex)
            ]
        }
    };
}
/** Parses stack frames from an error */ function parseStackFrames(stackParser, ex) {
    // Access and store the stacktrace property before doing ANYTHING
    // else to it because Opera is not very good at providing it
    // reliably in other circumstances.
    var stacktrace = ex.stacktrace || ex.stack || "";
    var popSize = getPopSize(ex);
    try {
        return stackParser(stacktrace, popSize);
    } catch (e) {
    // no-empty
    }
    return [];
}
// Based on our own mapping pattern - https://github.com/getsentry/sentry/blob/9f08305e09866c8bd6d0c24f5b0aabdd7dd6c59c/src/sentry/lang/javascript/errormapping.py#L83-L108
var reactMinifiedRegexp = /Minified React error #\d+;/i;
function getPopSize(ex) {
    if (ex) {
        if (typeof ex.framesToPop === "number") return ex.framesToPop;
        if (reactMinifiedRegexp.test(ex.message)) return 1;
    }
    return 0;
}
/**
 * There are cases where stacktrace.message is an Event object
 * https://github.com/getsentry/sentry-javascript/issues/1949
 * In this specific case we try to extract stacktrace.message.error.message
 */ function extractMessage(ex) {
    var message = ex && ex.message;
    if (!message) return "No error message";
    if (message.error && typeof message.error.message === "string") return message.error.message;
    return message;
}
/**
 * Creates an {@link Event} from all inputs to `captureException` and non-primitive inputs to `captureMessage`.
 * @hidden
 */ function eventFromException(stackParser, exception, hint, attachStacktrace) {
    var syntheticException = hint && hint.syntheticException || undefined;
    var event = eventFromUnknownInput(stackParser, exception, syntheticException, attachStacktrace);
    (0, _utils.addExceptionMechanism)(event); // defaults to { type: 'generic', handled: true }
    event.level = "error";
    if (hint && hint.event_id) event.event_id = hint.event_id;
    return (0, _utils.resolvedSyncPromise)(event);
}
/**
 * Builds and Event from a Message
 * @hidden
 */ function eventFromMessage(stackParser, message, level = "info", hint, attachStacktrace) {
    var syntheticException = hint && hint.syntheticException || undefined;
    var event = eventFromString(stackParser, message, syntheticException, attachStacktrace);
    event.level = level;
    if (hint && hint.event_id) event.event_id = hint.event_id;
    return (0, _utils.resolvedSyncPromise)(event);
}
/**
 * @hidden
 */ function eventFromUnknownInput(stackParser, exception, syntheticException, attachStacktrace, isUnhandledRejection) {
    let event;
    if ((0, _utils.isErrorEvent)(exception) && exception.error) {
        // If it is an ErrorEvent with `error` property, extract it to get actual Error
        var errorEvent = exception;
        return eventFromError(stackParser, errorEvent.error);
    }
    // If it is a `DOMError` (which is a legacy API, but still supported in some browsers) then we just extract the name
    // and message, as it doesn't provide anything else. According to the spec, all `DOMExceptions` should also be
    // `Error`s, but that's not the case in IE11, so in that case we treat it the same as we do a `DOMError`.
    //
    // https://developer.mozilla.org/en-US/docs/Web/API/DOMError
    // https://developer.mozilla.org/en-US/docs/Web/API/DOMException
    // https://webidl.spec.whatwg.org/#es-DOMException-specialness
    if ((0, _utils.isDOMError)(exception) || (0, _utils.isDOMException)(exception)) {
        var domException = exception;
        if ("stack" in exception) event = eventFromError(stackParser, exception);
        else {
            var name = domException.name || ((0, _utils.isDOMError)(domException) ? "DOMError" : "DOMException");
            var message = domException.message ? `${name}: ${domException.message}` : name;
            event = eventFromString(stackParser, message, syntheticException, attachStacktrace);
            (0, _utils.addExceptionTypeValue)(event, message);
        }
        if ("code" in domException) event.tags = {
            ...event.tags,
            "DOMException.code": `${domException.code}`
        };
        return event;
    }
    if ((0, _utils.isError)(exception)) // we have a real Error object, do nothing
    return eventFromError(stackParser, exception);
    if ((0, _utils.isPlainObject)(exception) || (0, _utils.isEvent)(exception)) {
        // If it's a plain object or an instance of `Event` (the built-in JS kind, not this SDK's `Event` type), serialize
        // it manually. This will allow us to group events based on top-level keys which is much better than creating a new
        // group on any key/value change.
        var objectException = exception;
        event = eventFromPlainObject(stackParser, objectException, syntheticException, isUnhandledRejection);
        (0, _utils.addExceptionMechanism)(event, {
            synthetic: true
        });
        return event;
    }
    // If none of previous checks were valid, then it means that it's not:
    // - an instance of DOMError
    // - an instance of DOMException
    // - an instance of Event
    // - an instance of Error
    // - a valid ErrorEvent (one with an error property)
    // - a plain Object
    //
    // So bail out and capture it as a simple message:
    event = eventFromString(stackParser, exception, syntheticException, attachStacktrace);
    (0, _utils.addExceptionTypeValue)(event, `${exception}`, undefined);
    (0, _utils.addExceptionMechanism)(event, {
        synthetic: true
    });
    return event;
}
/**
 * @hidden
 */ function eventFromString(stackParser, input, syntheticException, attachStacktrace) {
    var event = {
        message: input
    };
    if (attachStacktrace && syntheticException) {
        var frames = parseStackFrames(stackParser, syntheticException);
        if (frames.length) event.exception = {
            values: [
                {
                    value: input,
                    stacktrace: {
                        frames
                    }
                }
            ]
        };
    }
    return event;
}

},{"@sentry/utils":"5auop","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6P1BD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * All properties the report dialog supports
 */ parcelHelpers.export(exports, "ignoreNextOnError", ()=>ignoreNextOnError);
parcelHelpers.export(exports, "shouldIgnoreOnError", ()=>shouldIgnoreOnError);
parcelHelpers.export(exports, "wrap", ()=>wrap);
var _core = require("@sentry/core");
var _utils = require("@sentry/utils");
let ignoreOnError = 0;
/**
 * @hidden
 */ function shouldIgnoreOnError() {
    return ignoreOnError > 0;
}
/**
 * @hidden
 */ function ignoreNextOnError() {
    // onerror should trigger before setTimeout
    ignoreOnError += 1;
    setTimeout(()=>{
        ignoreOnError -= 1;
    });
}
/**
 * Instruments the given function and sends an event to Sentry every time the
 * function throws an exception.
 *
 * @param fn A function to wrap. It is generally safe to pass an unbound function, because the returned wrapper always
 * has a correct `this` context.
 * @returns The wrapped function.
 * @hidden
 */ function wrap(fn, options = {}, before) {
    // for future readers what this does is wrap a function and then create
    // a bi-directional wrapping between them.
    //
    // example: wrapped = wrap(original);
    //  original.__sentry_wrapped__ -> wrapped
    //  wrapped.__sentry_original__ -> original
    if (typeof fn !== "function") return fn;
    try {
        // if we're dealing with a function that was previously wrapped, return
        // the original wrapper.
        var wrapper = fn.__sentry_wrapped__;
        if (wrapper) return wrapper;
        // We don't wanna wrap it twice
        if ((0, _utils.getOriginalFunction)(fn)) return fn;
    } catch (e) {
        // Just accessing custom props in some Selenium environments
        // can cause a "Permission denied" exception (see raven-js#495).
        // Bail on wrapping and return the function as-is (defers to window.onerror).
        return fn;
    }
    // It is important that `sentryWrapped` is not an arrow function to preserve the context of `this`
    var sentryWrapped = function() {
        var args = Array.prototype.slice.call(arguments);
        try {
            if (before && typeof before === "function") before.apply(this, arguments);
            var wrappedArguments = args.map((arg)=>wrap(arg, options));
            // Attempt to invoke user-land function
            // NOTE: If you are a Sentry user, and you are seeing this stack frame, it
            //       means the sentry.javascript SDK caught an error invoking your application code. This
            //       is expected behavior and NOT indicative of a bug with sentry.javascript.
            return fn.apply(this, wrappedArguments);
        } catch (ex) {
            ignoreNextOnError();
            (0, _core.withScope)((scope)=>{
                scope.addEventProcessor((event)=>{
                    if (options.mechanism) {
                        (0, _utils.addExceptionTypeValue)(event, undefined, undefined);
                        (0, _utils.addExceptionMechanism)(event, options.mechanism);
                    }
                    event.extra = {
                        ...event.extra,
                        arguments: args
                    };
                    return event;
                });
                (0, _core.captureException)(ex);
            });
            throw ex;
        }
    };
    // Accessing some objects may throw
    // ref: https://github.com/getsentry/sentry-javascript/issues/1168
    try {
        for(var property in fn)if (Object.prototype.hasOwnProperty.call(fn, property)) sentryWrapped[property] = fn[property];
    } catch (_oO) {}
    // Signal that this function has been wrapped/filled already
    // for both debugging and to prevent it to being wrapped/filled twice
    (0, _utils.markFunctionWrapped)(sentryWrapped, fn);
    (0, _utils.addNonEnumerableProperty)(fn, "__sentry_wrapped__", sentryWrapped);
    // Restore original function name (not all browsers allow that)
    try {
        var descriptor = Object.getOwnPropertyDescriptor(sentryWrapped, "name");
        if (descriptor.configurable) Object.defineProperty(sentryWrapped, "name", {
            get () {
                return fn.name;
            }
        });
    } catch (_oO1) {}
    return sentryWrapped;
}

},{"@sentry/core":"bWm3H","@sentry/utils":"5auop","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iBoZn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TryCatch", ()=>TryCatch);
var _utils = require("@sentry/utils");
var _helpersJs = require("../helpers.js");
var DEFAULT_EVENT_TARGET = [
    "EventTarget",
    "Window",
    "Node",
    "ApplicationCache",
    "AudioTrackList",
    "ChannelMergerNode",
    "CryptoOperation",
    "EventSource",
    "FileReader",
    "HTMLUnknownElement",
    "IDBDatabase",
    "IDBRequest",
    "IDBTransaction",
    "KeyOperation",
    "MediaController",
    "MessagePort",
    "ModalWindow",
    "Notification",
    "SVGElementInstance",
    "Screen",
    "TextTrack",
    "TextTrackCue",
    "TextTrackList",
    "WebSocket",
    "WebSocketWorker",
    "Worker",
    "XMLHttpRequest",
    "XMLHttpRequestEventTarget",
    "XMLHttpRequestUpload", 
];
/** Wrap timer functions and event targets to catch errors and provide better meta data */ class TryCatch {
    /**
   * @inheritDoc
   */ static __initStatic() {
        this.id = "TryCatch";
    }
    /**
   * @inheritDoc
   */ __init() {
        this.name = TryCatch.id;
    }
    /** JSDoc */ /**
   * @inheritDoc
   */ constructor(options){
        TryCatch.prototype.__init.call(this);
        this._options = {
            XMLHttpRequest: true,
            eventTarget: true,
            requestAnimationFrame: true,
            setInterval: true,
            setTimeout: true,
            ...options
        };
    }
    /**
   * Wrap timer functions and event targets to catch errors
   * and provide better metadata.
   */ setupOnce() {
        var global = (0, _utils.getGlobalObject)();
        if (this._options.setTimeout) (0, _utils.fill)(global, "setTimeout", _wrapTimeFunction);
        if (this._options.setInterval) (0, _utils.fill)(global, "setInterval", _wrapTimeFunction);
        if (this._options.requestAnimationFrame) (0, _utils.fill)(global, "requestAnimationFrame", _wrapRAF);
        if (this._options.XMLHttpRequest && "XMLHttpRequest" in global) (0, _utils.fill)(XMLHttpRequest.prototype, "send", _wrapXHR);
        var eventTargetOption = this._options.eventTarget;
        if (eventTargetOption) {
            var eventTarget = Array.isArray(eventTargetOption) ? eventTargetOption : DEFAULT_EVENT_TARGET;
            eventTarget.forEach(_wrapEventTarget);
        }
    }
}
TryCatch.__initStatic();
/** JSDoc */ function _wrapTimeFunction(original) {
    return function(...args) {
        var originalCallback = args[0];
        args[0] = (0, _helpersJs.wrap)(originalCallback, {
            mechanism: {
                data: {
                    function: (0, _utils.getFunctionName)(original)
                },
                handled: true,
                type: "instrument"
            }
        });
        return original.apply(this, args);
    };
}
/** JSDoc */ function _wrapRAF(original) {
    return function(callback) {
        return original.apply(this, [
            (0, _helpersJs.wrap)(callback, {
                mechanism: {
                    data: {
                        function: "requestAnimationFrame",
                        handler: (0, _utils.getFunctionName)(original)
                    },
                    handled: true,
                    type: "instrument"
                }
            }), 
        ]);
    };
}
/** JSDoc */ function _wrapXHR(originalSend) {
    return function(...args) {
        var xhr = this;
        var xmlHttpRequestProps = [
            "onload",
            "onerror",
            "onprogress",
            "onreadystatechange"
        ];
        xmlHttpRequestProps.forEach((prop)=>{
            if (prop in xhr && typeof xhr[prop] === "function") (0, _utils.fill)(xhr, prop, function(original) {
                var wrapOptions = {
                    mechanism: {
                        data: {
                            function: prop,
                            handler: (0, _utils.getFunctionName)(original)
                        },
                        handled: true,
                        type: "instrument"
                    }
                };
                // If Instrument integration has been called before TryCatch, get the name of original function
                var originalFunction = (0, _utils.getOriginalFunction)(original);
                if (originalFunction) wrapOptions.mechanism.data.handler = (0, _utils.getFunctionName)(originalFunction);
                // Otherwise wrap directly
                return (0, _helpersJs.wrap)(original, wrapOptions);
            });
        });
        return originalSend.apply(this, args);
    };
}
/** JSDoc */ function _wrapEventTarget(target) {
    var global = (0, _utils.getGlobalObject)();
    var proto = global[target] && global[target].prototype;
    if (!proto || !proto.hasOwnProperty || !proto.hasOwnProperty("addEventListener")) return;
    (0, _utils.fill)(proto, "addEventListener", function(original) {
        return function(eventName, fn, options) {
            try {
                if (typeof fn.handleEvent === "function") // ESlint disable explanation:
                //  First, it is generally safe to call `wrap` with an unbound function. Furthermore, using `.bind()` would
                //  introduce a bug here, because bind returns a new function that doesn't have our
                //  flags(like __sentry_original__) attached. `wrap` checks for those flags to avoid unnecessary wrapping.
                //  Without those flags, every call to addEventListener wraps the function again, causing a memory leak.
                fn.handleEvent = (0, _helpersJs.wrap)(fn.handleEvent, {
                    mechanism: {
                        data: {
                            function: "handleEvent",
                            handler: (0, _utils.getFunctionName)(fn),
                            target
                        },
                        handled: true,
                        type: "instrument"
                    }
                });
            } catch (err) {
            // can sometimes get 'Permission denied to access property "handle Event'
            }
            return original.apply(this, [
                eventName,
                (0, _helpersJs.wrap)(fn, {
                    mechanism: {
                        data: {
                            function: "addEventListener",
                            handler: (0, _utils.getFunctionName)(fn),
                            target
                        },
                        handled: true,
                        type: "instrument"
                    }
                }),
                options, 
            ]);
        };
    });
    (0, _utils.fill)(proto, "removeEventListener", function(originalRemoveEventListener) {
        return function(eventName, fn, options) {
            /**
         * There are 2 possible scenarios here:
         *
         * 1. Someone passes a callback, which was attached prior to Sentry initialization, or by using unmodified
         * method, eg. `document.addEventListener.call(el, name, handler). In this case, we treat this function
         * as a pass-through, and call original `removeEventListener` with it.
         *
         * 2. Someone passes a callback, which was attached after Sentry was initialized, which means that it was using
         * our wrapped version of `addEventListener`, which internally calls `wrap` helper.
         * This helper "wraps" whole callback inside a try/catch statement, and attached appropriate metadata to it,
         * in order for us to make a distinction between wrapped/non-wrapped functions possible.
         * If a function was wrapped, it has additional property of `__sentry_wrapped__`, holding the handler.
         *
         * When someone adds a handler prior to initialization, and then do it again, but after,
         * then we have to detach both of them. Otherwise, if we'd detach only wrapped one, it'd be impossible
         * to get rid of the initial handler and it'd stick there forever.
         */ var wrappedEventHandler = fn;
            try {
                var originalEventHandler = wrappedEventHandler && wrappedEventHandler.__sentry_wrapped__;
                if (originalEventHandler) originalRemoveEventListener.call(this, eventName, originalEventHandler, options);
            } catch (e) {
            // ignore, accessing __sentry_wrapped__ will throw in some Selenium environments
            }
            return originalRemoveEventListener.call(this, eventName, wrappedEventHandler, options);
        };
    });
}

},{"@sentry/utils":"5auop","../helpers.js":"6P1BD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bPO5J":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BREADCRUMB_INTEGRATION_ID", ()=>BREADCRUMB_INTEGRATION_ID);
parcelHelpers.export(exports, "Breadcrumbs", ()=>Breadcrumbs);
var _core = require("@sentry/core");
var _utils = require("@sentry/utils");
/** JSDoc */ var BREADCRUMB_INTEGRATION_ID = "Breadcrumbs";
/**
 * Default Breadcrumbs instrumentations
 * TODO: Deprecated - with v6, this will be renamed to `Instrument`
 */ class Breadcrumbs {
    /**
   * @inheritDoc
   */ static __initStatic() {
        this.id = BREADCRUMB_INTEGRATION_ID;
    }
    /**
   * @inheritDoc
   */ __init() {
        this.name = Breadcrumbs.id;
    }
    /**
   * Options of the breadcrumbs integration.
   */ // This field is public, because we use it in the browser client to check if the `sentry` option is enabled.
    /**
   * @inheritDoc
   */ constructor(options){
        Breadcrumbs.prototype.__init.call(this);
        this.options = {
            console: true,
            dom: true,
            fetch: true,
            history: true,
            sentry: true,
            xhr: true,
            ...options
        };
    }
    /**
   * Instrument browser built-ins w/ breadcrumb capturing
   *  - Console API
   *  - DOM API (click/typing)
   *  - XMLHttpRequest API
   *  - Fetch API
   *  - History API
   */ setupOnce() {
        if (this.options.console) (0, _utils.addInstrumentationHandler)("console", _consoleBreadcrumb);
        if (this.options.dom) (0, _utils.addInstrumentationHandler)("dom", _domBreadcrumb(this.options.dom));
        if (this.options.xhr) (0, _utils.addInstrumentationHandler)("xhr", _xhrBreadcrumb);
        if (this.options.fetch) (0, _utils.addInstrumentationHandler)("fetch", _fetchBreadcrumb);
        if (this.options.history) (0, _utils.addInstrumentationHandler)("history", _historyBreadcrumb);
    }
}
Breadcrumbs.__initStatic();
/**
 * A HOC that creaes a function that creates breadcrumbs from DOM API calls.
 * This is a HOC so that we get access to dom options in the closure.
 */ function _domBreadcrumb(dom) {
    function _innerDomBreadcrumb(handlerData) {
        let target;
        let keyAttrs = typeof dom === "object" ? dom.serializeAttribute : undefined;
        if (typeof keyAttrs === "string") keyAttrs = [
            keyAttrs
        ];
        // Accessing event.target can throw (see getsentry/raven-js#838, #768)
        try {
            target = handlerData.event.target ? (0, _utils.htmlTreeAsString)(handlerData.event.target, keyAttrs) : (0, _utils.htmlTreeAsString)(handlerData.event, keyAttrs);
        } catch (e) {
            target = "<unknown>";
        }
        if (target.length === 0) return;
        (0, _core.getCurrentHub)().addBreadcrumb({
            category: `ui.${handlerData.name}`,
            message: target
        }, {
            event: handlerData.event,
            name: handlerData.name,
            global: handlerData.global
        });
    }
    return _innerDomBreadcrumb;
}
/**
 * Creates breadcrumbs from console API calls
 */ function _consoleBreadcrumb(handlerData) {
    var breadcrumb = {
        category: "console",
        data: {
            arguments: handlerData.args,
            logger: "console"
        },
        level: (0, _utils.severityLevelFromString)(handlerData.level),
        message: (0, _utils.safeJoin)(handlerData.args, " ")
    };
    if (handlerData.level === "assert") {
        if (handlerData.args[0] === false) {
            breadcrumb.message = `Assertion failed: ${(0, _utils.safeJoin)(handlerData.args.slice(1), " ") || "console.assert"}`;
            breadcrumb.data.arguments = handlerData.args.slice(1);
        } else // Don't capture a breadcrumb for passed assertions
        return;
    }
    (0, _core.getCurrentHub)().addBreadcrumb(breadcrumb, {
        input: handlerData.args,
        level: handlerData.level
    });
}
/**
 * Creates breadcrumbs from XHR API calls
 */ function _xhrBreadcrumb(handlerData) {
    if (handlerData.endTimestamp) {
        // We only capture complete, non-sentry requests
        if (handlerData.xhr.__sentry_own_request__) return;
        const { method , url , status_code , body  } = handlerData.xhr.__sentry_xhr__ || {};
        (0, _core.getCurrentHub)().addBreadcrumb({
            category: "xhr",
            data: {
                method,
                url,
                status_code
            },
            type: "http"
        }, {
            xhr: handlerData.xhr,
            input: body
        });
        return;
    }
}
/**
 * Creates breadcrumbs from fetch API calls
 */ function _fetchBreadcrumb(handlerData) {
    // We only capture complete fetch requests
    if (!handlerData.endTimestamp) return;
    if (handlerData.fetchData.url.match(/sentry_key/) && handlerData.fetchData.method === "POST") // We will not create breadcrumbs for fetch requests that contain `sentry_key` (internal sentry requests)
    return;
    if (handlerData.error) (0, _core.getCurrentHub)().addBreadcrumb({
        category: "fetch",
        data: handlerData.fetchData,
        level: "error",
        type: "http"
    }, {
        data: handlerData.error,
        input: handlerData.args
    });
    else (0, _core.getCurrentHub)().addBreadcrumb({
        category: "fetch",
        data: {
            ...handlerData.fetchData,
            status_code: handlerData.response.status
        },
        type: "http"
    }, {
        input: handlerData.args,
        response: handlerData.response
    });
}
/**
 * Creates breadcrumbs from history API calls
 */ function _historyBreadcrumb(handlerData) {
    var global = (0, _utils.getGlobalObject)();
    let from = handlerData.from;
    let to = handlerData.to;
    var parsedLoc = (0, _utils.parseUrl)(global.location.href);
    let parsedFrom = (0, _utils.parseUrl)(from);
    var parsedTo = (0, _utils.parseUrl)(to);
    // Initial pushState doesn't provide `from` information
    if (!parsedFrom.path) parsedFrom = parsedLoc;
    // Use only the path component of the URL if the URL matches the current
    // document (almost all the time when using pushState)
    if (parsedLoc.protocol === parsedTo.protocol && parsedLoc.host === parsedTo.host) to = parsedTo.relative;
    if (parsedLoc.protocol === parsedFrom.protocol && parsedLoc.host === parsedFrom.host) from = parsedFrom.relative;
    (0, _core.getCurrentHub)().addBreadcrumb({
        category: "navigation",
        data: {
            from,
            to
        }
    });
}

},{"@sentry/core":"bWm3H","@sentry/utils":"5auop","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4LOto":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "LinkedErrors", ()=>LinkedErrors);
parcelHelpers.export(exports, "_handler", ()=>_handler);
parcelHelpers.export(exports, "_walkErrorTree", ()=>_walkErrorTree);
var _core = require("@sentry/core");
var _utils = require("@sentry/utils");
var _eventbuilderJs = require("../eventbuilder.js");
var DEFAULT_KEY = "cause";
var DEFAULT_LIMIT = 5;
/** Adds SDK info to an event. */ class LinkedErrors {
    /**
   * @inheritDoc
   */ static __initStatic() {
        this.id = "LinkedErrors";
    }
    /**
   * @inheritDoc
   */ __init() {
        this.name = LinkedErrors.id;
    }
    /**
   * @inheritDoc
   */ /**
   * @inheritDoc
   */ /**
   * @inheritDoc
   */ constructor(options = {}){
        LinkedErrors.prototype.__init.call(this);
        this._key = options.key || DEFAULT_KEY;
        this._limit = options.limit || DEFAULT_LIMIT;
    }
    /**
   * @inheritDoc
   */ setupOnce() {
        var client = (0, _core.getCurrentHub)().getClient();
        if (!client) return;
        (0, _core.addGlobalEventProcessor)((event, hint)=>{
            var self = (0, _core.getCurrentHub)().getIntegration(LinkedErrors);
            return self ? _handler(client.getOptions().stackParser, self._key, self._limit, event, hint) : event;
        });
    }
}
LinkedErrors.__initStatic();
/**
 * @inheritDoc
 */ function _handler(parser, key, limit, event, hint) {
    if (!event.exception || !event.exception.values || !hint || !(0, _utils.isInstanceOf)(hint.originalException, Error)) return event;
    var linkedErrors = _walkErrorTree(parser, limit, hint.originalException, key);
    event.exception.values = [
        ...linkedErrors,
        ...event.exception.values
    ];
    return event;
}
/**
 * JSDOC
 */ function _walkErrorTree(parser, limit, error, key, stack = []) {
    if (!(0, _utils.isInstanceOf)(error[key], Error) || stack.length + 1 >= limit) return stack;
    var exception = (0, _eventbuilderJs.exceptionFromError)(parser, error[key]);
    return _walkErrorTree(parser, limit, error[key], key, [
        exception,
        ...stack
    ]);
}

},{"@sentry/core":"bWm3H","@sentry/utils":"5auop","../eventbuilder.js":"25Jer","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"wP6GD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "HttpContext", ()=>HttpContext);
var _core = require("@sentry/core");
var _utils = require("@sentry/utils");
var global = (0, _utils.getGlobalObject)();
/** HttpContext integration collects information about HTTP request headers */ class HttpContext {
    constructor(){
        HttpContext.prototype.__init.call(this);
    }
    /**
   * @inheritDoc
   */ static __initStatic() {
        this.id = "HttpContext";
    }
    /**
   * @inheritDoc
   */ __init() {
        this.name = HttpContext.id;
    }
    /**
   * @inheritDoc
   */ setupOnce() {
        (0, _core.addGlobalEventProcessor)((event)=>{
            if ((0, _core.getCurrentHub)().getIntegration(HttpContext)) {
                // if none of the information we want exists, don't bother
                if (!global.navigator && !global.location && !global.document) return event;
                // grab as much info as exists and add it to the event
                var url = event.request && event.request.url || global.location && global.location.href;
                const { referrer  } = global.document || {};
                const { userAgent  } = global.navigator || {};
                var headers = {
                    ...event.request && event.request.headers,
                    ...referrer && {
                        Referer: referrer
                    },
                    ...userAgent && {
                        "User-Agent": userAgent
                    }
                };
                var request = {
                    ...url && {
                        url
                    },
                    headers
                };
                return {
                    ...event,
                    request
                };
            }
            return event;
        });
    }
}
HttpContext.__initStatic();

},{"@sentry/core":"bWm3H","@sentry/utils":"5auop","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gb2cH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Dedupe", ()=>Dedupe);
var _utils = require("@sentry/utils");
/** Deduplication filter */ class Dedupe {
    constructor(){
        Dedupe.prototype.__init.call(this);
    }
    /**
   * @inheritDoc
   */ static __initStatic() {
        this.id = "Dedupe";
    }
    /**
   * @inheritDoc
   */ __init() {
        this.name = Dedupe.id;
    }
    /**
   * @inheritDoc
   */ /**
   * @inheritDoc
   */ setupOnce(addGlobalEventProcessor, getCurrentHub) {
        var eventProcessor = (currentEvent)=>{
            var self = getCurrentHub().getIntegration(Dedupe);
            if (self) {
                // Juuust in case something goes wrong
                try {
                    if (_shouldDropEvent(currentEvent, self._previousEvent)) {
                        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _utils.logger).warn("Event dropped due to being a duplicate of previously captured event.");
                        return null;
                    }
                } catch (_oO) {
                    return self._previousEvent = currentEvent;
                }
                return self._previousEvent = currentEvent;
            }
            return currentEvent;
        };
        eventProcessor.id = this.name;
        addGlobalEventProcessor(eventProcessor);
    }
}
Dedupe.__initStatic();
/** JSDoc */ function _shouldDropEvent(currentEvent, previousEvent) {
    if (!previousEvent) return false;
    if (_isSameMessageEvent(currentEvent, previousEvent)) return true;
    if (_isSameExceptionEvent(currentEvent, previousEvent)) return true;
    return false;
}
/** JSDoc */ function _isSameMessageEvent(currentEvent, previousEvent) {
    var currentMessage = currentEvent.message;
    var previousMessage = previousEvent.message;
    // If neither event has a message property, they were both exceptions, so bail out
    if (!currentMessage && !previousMessage) return false;
    // If only one event has a stacktrace, but not the other one, they are not the same
    if (currentMessage && !previousMessage || !currentMessage && previousMessage) return false;
    if (currentMessage !== previousMessage) return false;
    if (!_isSameFingerprint(currentEvent, previousEvent)) return false;
    if (!_isSameStacktrace(currentEvent, previousEvent)) return false;
    return true;
}
/** JSDoc */ function _isSameExceptionEvent(currentEvent, previousEvent) {
    var previousException = _getExceptionFromEvent(previousEvent);
    var currentException = _getExceptionFromEvent(currentEvent);
    if (!previousException || !currentException) return false;
    if (previousException.type !== currentException.type || previousException.value !== currentException.value) return false;
    if (!_isSameFingerprint(currentEvent, previousEvent)) return false;
    if (!_isSameStacktrace(currentEvent, previousEvent)) return false;
    return true;
}
/** JSDoc */ function _isSameStacktrace(currentEvent, previousEvent) {
    let currentFrames = _getFramesFromEvent(currentEvent);
    let previousFrames = _getFramesFromEvent(previousEvent);
    // If neither event has a stacktrace, they are assumed to be the same
    if (!currentFrames && !previousFrames) return true;
    // If only one event has a stacktrace, but not the other one, they are not the same
    if (currentFrames && !previousFrames || !currentFrames && previousFrames) return false;
    currentFrames;
    previousFrames;
    // If number of frames differ, they are not the same
    if (previousFrames.length !== currentFrames.length) return false;
    // Otherwise, compare the two
    for(let i = 0; i < previousFrames.length; i++){
        var frameA = previousFrames[i];
        var frameB = currentFrames[i];
        if (frameA.filename !== frameB.filename || frameA.lineno !== frameB.lineno || frameA.colno !== frameB.colno || frameA.function !== frameB.function) return false;
    }
    return true;
}
/** JSDoc */ function _isSameFingerprint(currentEvent, previousEvent) {
    let currentFingerprint = currentEvent.fingerprint;
    let previousFingerprint = previousEvent.fingerprint;
    // If neither event has a fingerprint, they are assumed to be the same
    if (!currentFingerprint && !previousFingerprint) return true;
    // If only one event has a fingerprint, but not the other one, they are not the same
    if (currentFingerprint && !previousFingerprint || !currentFingerprint && previousFingerprint) return false;
    currentFingerprint;
    previousFingerprint;
    // Otherwise, compare the two
    try {
        return !!(currentFingerprint.join("") === previousFingerprint.join(""));
    } catch (_oO) {
        return false;
    }
}
/** JSDoc */ function _getExceptionFromEvent(event) {
    return event.exception && event.exception.values && event.exception.values[0];
}
/** JSDoc */ function _getFramesFromEvent(event) {
    var exception = event.exception;
    if (exception) try {
        // @ts-ignore Object could be undefined
        return exception.values[0].stacktrace.frames;
    } catch (_oO) {
        return undefined;
    }
    return undefined;
}

},{"@sentry/utils":"5auop","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4xM5l":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BrowserClient", ()=>BrowserClient);
var _core = require("@sentry/core");
var _utils = require("@sentry/utils");
var _eventbuilderJs = require("./eventbuilder.js");
var _breadcrumbsJs = require("./integrations/breadcrumbs.js");
var _utilsJs = require("./transports/utils.js");
var globalObject = (0, _utils.getGlobalObject)();
/**
 * The Sentry Browser SDK Client.
 *
 * @see BrowserOptions for documentation on configuration options.
 * @see SentryClient for usage documentation.
 */ class BrowserClient extends (0, _core.BaseClient) {
    /**
   * Creates a new Browser SDK instance.
   *
   * @param options Configuration options for this SDK.
   */ constructor(options){
        options._metadata = options._metadata || {};
        options._metadata.sdk = options._metadata.sdk || {
            name: "sentry.javascript.browser",
            packages: [
                {
                    name: "npm:@sentry/browser",
                    version: (0, _core.SDK_VERSION)
                }, 
            ],
            version: (0, _core.SDK_VERSION)
        };
        super(options);
        if (options.sendClientReports && globalObject.document) globalObject.document.addEventListener("visibilitychange", ()=>{
            if (globalObject.document.visibilityState === "hidden") this._flushOutcomes();
        });
    }
    /**
   * @inheritDoc
   */ eventFromException(exception, hint) {
        return (0, _eventbuilderJs.eventFromException)(this._options.stackParser, exception, hint, this._options.attachStacktrace);
    }
    /**
   * @inheritDoc
   */ eventFromMessage(message, level = "info", hint) {
        return (0, _eventbuilderJs.eventFromMessage)(this._options.stackParser, message, level, hint, this._options.attachStacktrace);
    }
    /**
   * @inheritDoc
   */ sendEvent(event, hint) {
        // We only want to add the sentry event breadcrumb when the user has the breadcrumb integration installed and
        // activated its `sentry` option.
        // We also do not want to use the `Breadcrumbs` class here directly, because we do not want it to be included in
        // bundles, if it is not used by the SDK.
        // This all sadly is a bit ugly, but we currently don't have a "pre-send" hook on the integrations so we do it this
        // way for now.
        var breadcrumbIntegration = this.getIntegrationById((0, _breadcrumbsJs.BREADCRUMB_INTEGRATION_ID));
        if (breadcrumbIntegration && // We check for definedness of `options`, even though it is not strictly necessary, because that access to
        // `.sentry` below does not throw, in case users provided their own integration with id "Breadcrumbs" that does
        // not have an`options` field
        breadcrumbIntegration.options && breadcrumbIntegration.options.sentry) (0, _core.getCurrentHub)().addBreadcrumb({
            category: `sentry.${event.type === "transaction" ? "transaction" : "event"}`,
            event_id: event.event_id,
            level: event.level,
            message: (0, _utils.getEventDescription)(event)
        }, {
            event
        });
        super.sendEvent(event, hint);
    }
    /**
   * @inheritDoc
   */ _prepareEvent(event, hint, scope) {
        event.platform = event.platform || "javascript";
        return super._prepareEvent(event, hint, scope);
    }
    /**
   * Sends client reports as an envelope.
   */ _flushOutcomes() {
        var outcomes = this._clearOutcomes();
        if (outcomes.length === 0) {
            (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _utils.logger).log("No outcomes to send");
            return;
        }
        if (!this._dsn) {
            (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _utils.logger).log("No dsn provided, will not send outcomes");
            return;
        }
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _utils.logger).log("Sending outcomes:", outcomes);
        var url = (0, _core.getEnvelopeEndpointWithUrlEncodedAuth)(this._dsn, this._options.tunnel);
        var envelope = (0, _utils.createClientReportEnvelope)(outcomes, this._options.tunnel && (0, _utils.dsnToString)(this._dsn));
        try {
            (0, _utilsJs.sendReport)(url, (0, _utils.serializeEnvelope)(envelope));
        } catch (e) {
            (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _utils.logger).error(e);
        }
    }
}

},{"@sentry/core":"bWm3H","@sentry/utils":"5auop","./eventbuilder.js":"25Jer","./integrations/breadcrumbs.js":"bPO5J","./transports/utils.js":"27QKk","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g58DI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "chromeStackLineParser", ()=>chromeStackLineParser);
parcelHelpers.export(exports, "defaultStackLineParsers", ()=>defaultStackLineParsers);
parcelHelpers.export(exports, "defaultStackParser", ()=>defaultStackParser);
parcelHelpers.export(exports, "geckoStackLineParser", ()=>geckoStackLineParser);
parcelHelpers.export(exports, "opera10StackLineParser", ()=>opera10StackLineParser);
parcelHelpers.export(exports, "opera11StackLineParser", ()=>opera11StackLineParser);
parcelHelpers.export(exports, "winjsStackLineParser", ()=>winjsStackLineParser);
var _utils = require("@sentry/utils");
// global reference to slice
var UNKNOWN_FUNCTION = "?";
var OPERA10_PRIORITY = 10;
var OPERA11_PRIORITY = 20;
var CHROME_PRIORITY = 30;
var WINJS_PRIORITY = 40;
var GECKO_PRIORITY = 50;
function createFrame(filename, func, lineno, colno) {
    var frame = {
        filename,
        function: func,
        // All browser frames are considered in_app
        in_app: true
    };
    if (lineno !== undefined) frame.lineno = lineno;
    if (colno !== undefined) frame.colno = colno;
    return frame;
}
// Chromium based browsers: Chrome, Brave, new Opera, new Edge
var chromeRegex = /^\s*at (?:(.*?) ?\((?:address at )?)?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i;
var chromeEvalRegex = /\((\S*)(?::(\d+))(?::(\d+))\)/;
var chrome = (line)=>{
    var parts = chromeRegex.exec(line);
    if (parts) {
        var isEval = parts[2] && parts[2].indexOf("eval") === 0; // start of line
        if (isEval) {
            var subMatch = chromeEvalRegex.exec(parts[2]);
            if (subMatch) {
                // throw out eval line/column and use top-most line/column number
                parts[2] = subMatch[1]; // url
                parts[3] = subMatch[2]; // line
                parts[4] = subMatch[3]; // column
            }
        }
        // Kamil: One more hack won't hurt us right? Understanding and adding more rules on top of these regexps right now
        // would be way too time consuming. (TODO: Rewrite whole RegExp to be more readable)
        const [func, filename] = extractSafariExtensionDetails(parts[1] || UNKNOWN_FUNCTION, parts[2]);
        return createFrame(filename, func, parts[3] ? +parts[3] : undefined, parts[4] ? +parts[4] : undefined);
    }
    return;
};
var chromeStackLineParser = [
    CHROME_PRIORITY,
    chrome
];
// gecko regex: `(?:bundle|\d+\.js)`: `bundle` is for react native, `\d+\.js` also but specifically for ram bundles because it
// generates filenames without a prefix like `file://` the filenames in the stacktrace are just 42.js
// We need this specific case for now because we want no other regex to match.
var geckoREgex = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|capacitor).*?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i;
var geckoEvalRegex = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
var gecko = (line)=>{
    var parts = geckoREgex.exec(line);
    if (parts) {
        var isEval = parts[3] && parts[3].indexOf(" > eval") > -1;
        if (isEval) {
            var subMatch = geckoEvalRegex.exec(parts[3]);
            if (subMatch) {
                // throw out eval line/column and use top-most line number
                parts[1] = parts[1] || "eval";
                parts[3] = subMatch[1];
                parts[4] = subMatch[2];
                parts[5] = ""; // no column when eval
            }
        }
        let filename = parts[3];
        let func = parts[1] || UNKNOWN_FUNCTION;
        [func, filename] = extractSafariExtensionDetails(func, filename);
        return createFrame(filename, func, parts[4] ? +parts[4] : undefined, parts[5] ? +parts[5] : undefined);
    }
    return;
};
var geckoStackLineParser = [
    GECKO_PRIORITY,
    gecko
];
var winjsRegex = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;
var winjs = (line)=>{
    var parts = winjsRegex.exec(line);
    return parts ? createFrame(parts[2], parts[1] || UNKNOWN_FUNCTION, +parts[3], parts[4] ? +parts[4] : undefined) : undefined;
};
var winjsStackLineParser = [
    WINJS_PRIORITY,
    winjs
];
var opera10Regex = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i;
var opera10 = (line)=>{
    var parts = opera10Regex.exec(line);
    return parts ? createFrame(parts[2], parts[3] || UNKNOWN_FUNCTION, +parts[1]) : undefined;
};
var opera10StackLineParser = [
    OPERA10_PRIORITY,
    opera10
];
var opera11Regex = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\(.*\))? in (.*):\s*$/i;
var opera11 = (line)=>{
    var parts = opera11Regex.exec(line);
    return parts ? createFrame(parts[5], parts[3] || parts[4] || UNKNOWN_FUNCTION, +parts[1], +parts[2]) : undefined;
};
var opera11StackLineParser = [
    OPERA11_PRIORITY,
    opera11
];
var defaultStackLineParsers = [
    chromeStackLineParser,
    geckoStackLineParser,
    winjsStackLineParser
];
var defaultStackParser = (0, _utils.createStackParser)(...defaultStackLineParsers);
/**
 * Safari web extensions, starting version unknown, can produce "frames-only" stacktraces.
 * What it means, is that instead of format like:
 *
 * Error: wat
 *   at function@url:row:col
 *   at function@url:row:col
 *   at function@url:row:col
 *
 * it produces something like:
 *
 *   function@url:row:col
 *   function@url:row:col
 *   function@url:row:col
 *
 * Because of that, it won't be captured by `chrome` RegExp and will fall into `Gecko` branch.
 * This function is extracted so that we can use it in both places without duplicating the logic.
 * Unfortunately "just" changing RegExp is too complicated now and making it pass all tests
 * and fix this case seems like an impossible, or at least way too time-consuming task.
 */ var extractSafariExtensionDetails = (func, filename)=>{
    var isSafariExtension = func.indexOf("safari-extension") !== -1;
    var isSafariWebExtension = func.indexOf("safari-web-extension") !== -1;
    return isSafariExtension || isSafariWebExtension ? [
        func.indexOf("@") !== -1 ? func.split("@")[0] : UNKNOWN_FUNCTION,
        isSafariExtension ? `safari-extension:${filename}` : `safari-web-extension:${filename}`, 
    ] : [
        func,
        filename
    ];
};

},{"@sentry/utils":"5auop","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2StSn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "close", ()=>close);
parcelHelpers.export(exports, "defaultIntegrations", ()=>defaultIntegrations);
parcelHelpers.export(exports, "flush", ()=>flush);
parcelHelpers.export(exports, "forceLoad", ()=>forceLoad);
parcelHelpers.export(exports, "init", ()=>init);
parcelHelpers.export(exports, "lastEventId", ()=>lastEventId);
parcelHelpers.export(exports, "onLoad", ()=>onLoad);
parcelHelpers.export(exports, "showReportDialog", ()=>showReportDialog);
parcelHelpers.export(exports, "wrap", ()=>wrap);
var _core = require("@sentry/core");
var _utils = require("@sentry/utils");
var _clientJs = require("./client.js");
var _helpersJs = require("./helpers.js");
var _indexJs = require("./integrations/index.js");
var _stackParsersJs = require("./stack-parsers.js");
var _indexJs1 = require("./transports/index.js");
var _trycatchJs = require("./integrations/trycatch.js");
var _breadcrumbsJs = require("./integrations/breadcrumbs.js");
var _globalhandlersJs = require("./integrations/globalhandlers.js");
var _linkederrorsJs = require("./integrations/linkederrors.js");
var _dedupeJs = require("./integrations/dedupe.js");
var _httpcontextJs = require("./integrations/httpcontext.js");
var _fetchJs = require("./transports/fetch.js");
var _xhrJs = require("./transports/xhr.js");
var defaultIntegrations = [
    new (0, _core.Integrations).InboundFilters(),
    new (0, _core.Integrations).FunctionToString(),
    new (0, _trycatchJs.TryCatch)(),
    new (0, _breadcrumbsJs.Breadcrumbs)(),
    new (0, _globalhandlersJs.GlobalHandlers)(),
    new (0, _linkederrorsJs.LinkedErrors)(),
    new (0, _dedupeJs.Dedupe)(),
    new (0, _httpcontextJs.HttpContext)(), 
];
/**
 * The Sentry Browser SDK Client.
 *
 * To use this SDK, call the {@link init} function as early as possible when
 * loading the web page. To set context information or send manual events, use
 * the provided methods.
 *
 * @example
 *
 * ```
 *
 * import { init } from '@sentry/browser';
 *
 * init({
 *   dsn: '__DSN__',
 *   // ...
 * });
 * ```
 *
 * @example
 * ```
 *
 * import { configureScope } from '@sentry/browser';
 * configureScope((scope: Scope) => {
 *   scope.setExtra({ battery: 0.7 });
 *   scope.setTag({ user_mode: 'admin' });
 *   scope.setUser({ id: '4711' });
 * });
 * ```
 *
 * @example
 * ```
 *
 * import { addBreadcrumb } from '@sentry/browser';
 * addBreadcrumb({
 *   message: 'My Breadcrumb',
 *   // ...
 * });
 * ```
 *
 * @example
 *
 * ```
 *
 * import * as Sentry from '@sentry/browser';
 * Sentry.captureMessage('Hello, world!');
 * Sentry.captureException(new Error('Good bye'));
 * Sentry.captureEvent({
 *   message: 'Manual',
 *   stacktrace: [
 *     // ...
 *   ],
 * });
 * ```
 *
 * @see {@link BrowserOptions} for documentation on configuration options.
 */ function init(options = {}) {
    if (options.defaultIntegrations === undefined) options.defaultIntegrations = defaultIntegrations;
    if (options.release === undefined) {
        var window = (0, _utils.getGlobalObject)();
        // This supports the variable that sentry-webpack-plugin injects
        if (window.SENTRY_RELEASE && window.SENTRY_RELEASE.id) options.release = window.SENTRY_RELEASE.id;
    }
    if (options.autoSessionTracking === undefined) options.autoSessionTracking = true;
    if (options.sendClientReports === undefined) options.sendClientReports = true;
    var clientOptions = {
        ...options,
        stackParser: (0, _utils.stackParserFromStackParserOptions)(options.stackParser || (0, _stackParsersJs.defaultStackParser)),
        integrations: (0, _core.getIntegrationsToSetup)(options),
        transport: options.transport || ((0, _utils.supportsFetch)() ? (0, _fetchJs.makeFetchTransport) : (0, _xhrJs.makeXHRTransport))
    };
    (0, _core.initAndBind)((0, _clientJs.BrowserClient), clientOptions);
    if (options.autoSessionTracking) startSessionTracking();
}
/**
 * Present the user with a report dialog.
 *
 * @param options Everything is optional, we try to fetch all info need from the global scope.
 */ function showReportDialog(options = {}, hub = (0, _core.getCurrentHub)()) {
    // doesn't work without a document (React Native)
    var global = (0, _utils.getGlobalObject)();
    if (!global.document) {
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _utils.logger).error("Global document not defined in showReportDialog call");
        return;
    }
    const { client , scope  } = hub.getStackTop();
    var dsn = options.dsn || client && client.getDsn();
    if (!dsn) {
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _utils.logger).error("DSN not configured for showReportDialog call");
        return;
    }
    if (scope) options.user = {
        ...scope.getUser(),
        ...options.user
    };
    if (!options.eventId) options.eventId = hub.lastEventId();
    var script = global.document.createElement("script");
    script.async = true;
    script.src = (0, _core.getReportDialogEndpoint)(dsn, options);
    if (options.onLoad) script.onload = options.onLoad;
    var injectionPoint = global.document.head || global.document.body;
    if (injectionPoint) injectionPoint.appendChild(script);
    else (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _utils.logger).error("Not injecting report dialog. No injection point found in HTML");
}
/**
 * This is the getter for lastEventId.
 *
 * @returns The last event id of a captured event.
 */ function lastEventId() {
    return (0, _core.getCurrentHub)().lastEventId();
}
/**
 * This function is here to be API compatible with the loader.
 * @hidden
 */ function forceLoad() {
// Noop
}
/**
 * This function is here to be API compatible with the loader.
 * @hidden
 */ function onLoad(callback) {
    callback();
}
/**
 * Call `flush()` on the current client, if there is one. See {@link Client.flush}.
 *
 * @param timeout Maximum time in ms the client should wait to flush its event queue. Omitting this parameter will cause
 * the client to wait until all events are sent before resolving the promise.
 * @returns A promise which resolves to `true` if the queue successfully drains before the timeout, or `false` if it
 * doesn't (or if there's no client defined).
 */ function flush(timeout) {
    var client = (0, _core.getCurrentHub)().getClient();
    if (client) return client.flush(timeout);
    (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _utils.logger).warn("Cannot flush events. No client defined.");
    return (0, _utils.resolvedSyncPromise)(false);
}
/**
 * Call `close()` on the current client, if there is one. See {@link Client.close}.
 *
 * @param timeout Maximum time in ms the client should wait to flush its event queue before shutting down. Omitting this
 * parameter will cause the client to wait until all events are sent before disabling itself.
 * @returns A promise which resolves to `true` if the queue successfully drains before the timeout, or `false` if it
 * doesn't (or if there's no client defined).
 */ function close(timeout) {
    var client = (0, _core.getCurrentHub)().getClient();
    if (client) return client.close(timeout);
    (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _utils.logger).warn("Cannot flush events and disable SDK. No client defined.");
    return (0, _utils.resolvedSyncPromise)(false);
}
/**
 * Wrap code within a try/catch block so the SDK is able to capture errors.
 *
 * @param fn A function to wrap.
 *
 * @returns The result of wrapped function call.
 */ function wrap(fn) {
    return (0, _helpersJs.wrap)(fn)();
}
function startSessionOnHub(hub) {
    hub.startSession({
        ignoreDuration: true
    });
    hub.captureSession();
}
/**
 * Enable automatic Session Tracking for the initial page load.
 */ function startSessionTracking() {
    var window = (0, _utils.getGlobalObject)();
    var document = window.document;
    if (typeof document === "undefined") {
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _utils.logger).warn("Session tracking in non-browser environment with @sentry/browser is not supported.");
        return;
    }
    var hub = (0, _core.getCurrentHub)();
    // The only way for this to be false is for there to be a version mismatch between @sentry/browser (>= 6.0.0) and
    // @sentry/hub (< 5.27.0). In the simple case, there won't ever be such a mismatch, because the two packages are
    // pinned at the same version in package.json, but there are edge cases where it's possible. See
    // https://github.com/getsentry/sentry-javascript/issues/3207 and
    // https://github.com/getsentry/sentry-javascript/issues/3234 and
    // https://github.com/getsentry/sentry-javascript/issues/3278.
    if (!hub.captureSession) return;
    // The session duration for browser sessions does not track a meaningful
    // concept that can be used as a metric.
    // Automatically captured sessions are akin to page views, and thus we
    // discard their duration.
    startSessionOnHub(hub);
    // We want to create a session for every navigation as well
    (0, _utils.addInstrumentationHandler)("history", ({ from , to  })=>{
        // Don't create an additional session for the initial route or if the location did not change
        if (!(from === undefined || from === to)) startSessionOnHub((0, _core.getCurrentHub)());
    });
}

},{"@sentry/core":"bWm3H","@sentry/utils":"5auop","./client.js":"4xM5l","./helpers.js":"6P1BD","./integrations/index.js":"hvGYe","./stack-parsers.js":"g58DI","./transports/index.js":"kqSAw","./integrations/trycatch.js":"iBoZn","./integrations/breadcrumbs.js":"bPO5J","./integrations/globalhandlers.js":"9vNC8","./integrations/linkederrors.js":"4LOto","./integrations/dedupe.js":"gb2cH","./integrations/httpcontext.js":"wP6GD","./transports/fetch.js":"4jMAn","./transports/xhr.js":"9GDaB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"48ejv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    gtag: {
        trackingId: "UA-34497639-2",
        enabled: false
    },
    sentry: {
        dsn: "https://63594154fcf34c34966aec13b15e2821@o418187.ingest.sentry.io/5320412",
        enabled: false
    },
    app: {
        name: "Agile Avatars",
        issues: "https://github.com/mattriley/agileavatars/issues",
        source: "https://github.com/mattriley/agileavatars"
    },
    author: {
        name: "Matt Riley",
        profile: "https://www.linkedin.com/in/mattrileyau/"
    },
    gravatar: {
        domain: "https://secure.gravatar.com",
        size: 600,
        fallbacks: [
            "robohash",
            "monsterid",
            "wavatar",
            "retro",
            "identicon",
            "mp"
        ],
        errorMessage: "An error occurred. Please check your connection and try again."
    },
    options: {
        layout: "modes | shapes | size | spacing | sort | outline",
        modes: [
            "active",
            "passive"
        ],
        shapes: [
            "circle",
            "square"
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
            orderAdded: "Order added",
            roleThenName: "Role, then name",
            name: "Name"
        }
    },
    tags: {
        layout: "tagImage | tagName roleName",
        imagePadding: 17
    },
    roles: {
        nilRole: {
            roleName: "",
            color: "#ffffff"
        },
        presetColors: {
            BA: "#6688c3",
            DEV: "#48a56a",
            PO: "#ce4a4a",
            QA: "#eaaf41",
            TL: "#000000",
            XD: "#b25da6"
        }
    },
    debounce: {
        adjustTagInstanceCounts: 100,
        sortTagList: 50
    },
    storage: {
        stores: [
            "settings",
            "roles",
            "tags",
            "tagInstances"
        ],
        defaults: {
            settings: {
                app: {
                    modal: "welcome",
                    nilRoleId: null
                },
                options: {
                    sort: "orderAdded",
                    shape: "circle",
                    active: 1,
                    passive: 0,
                    size: 170,
                    spacing: 4,
                    outline: true
                },
                gravatar: {
                    fallback: "robohash",
                    freetext: "",
                    status: "ready",
                    errorMessage: ""
                }
            }
        }
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["7Aums","bNKaB"], "bNKaB", "parcelRequire63d7")

//# sourceMappingURL=index.0641b553.js.map
