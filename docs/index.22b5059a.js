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
})({"1ntG6":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "52fbc6e522b5059a";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
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
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
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
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
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
        console.log("[parcel] ✨ Error resolved");
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
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
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
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
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
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
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
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
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
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"bNKaB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _css = require("./css/*.css"); // eslint-disable-line import/no-unresolved
var _compose = require("./compose");
var _composeDefault = parcelHelpers.interopDefault(_compose);
const composition = (0, _composeDefault.default)({
    window
});
const { modules  } = composition;
const app = modules.startup.start();
document.getElementById("app").append(app);

},{"./css/*.css":"28Exf","./compose":"h7Hg4","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"28Exf":[function(require,module,exports) {
const _temp0 = require("9886776584d2b568");
const _temp1 = require("b8a1ff803c27f02b");
const _temp2 = require("15b9ae9e51f82ae0");
const _temp3 = require("bb212e071bf79bd2");
const _temp4 = require("dca884320984e549");
const _temp5 = require("aacc222b5e575a62");
const _temp6 = require("75bf9b1b4f205e43");
const _temp7 = require("cddd1c25e5d3a6f4");
const _temp8 = require("94df93025c2afca5");
const _temp9 = require("f796da5045c83172");
const _temp10 = require("1eb962051e83daaa");
const _temp11 = require("b95927092c41a30d");
const _temp12 = require("77feb1b8a3f84bf9");
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

},{"9886776584d2b568":"kAqBG","b8a1ff803c27f02b":"lbJQ1","15b9ae9e51f82ae0":"lzZ2Y","bb212e071bf79bd2":"fmsRK","dca884320984e549":"fEdOe","aacc222b5e575a62":"lpAaO","75bf9b1b4f205e43":"kYEzY","cddd1c25e5d3a6f4":"bzUOW","94df93025c2afca5":"aECCS","f796da5045c83172":"ksyl8","1eb962051e83daaa":"hT9aR","b95927092c41a30d":"28Y7d","77feb1b8a3f84bf9":"3SozC"}],"kAqBG":[function() {},{}],"lbJQ1":[function() {},{}],"lzZ2Y":[function() {},{}],"fmsRK":[function() {},{}],"fEdOe":[function() {},{}],"lpAaO":[function() {},{}],"kYEzY":[function() {},{}],"bzUOW":[function() {},{}],"aECCS":[function() {},{}],"ksyl8":[function() {},{}],"hT9aR":[function() {},{}],"28Y7d":[function() {},{}],"3SozC":[function() {},{}],"h7Hg4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _moduleComposer = require("module-composer");
var _moduleComposerDefault = parcelHelpers.interopDefault(_moduleComposer);
var _indexJs = require("./modules/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _defaultConfigJs = require("./default-config.js");
var _defaultConfigJsDefault = parcelHelpers.interopDefault(_defaultConfigJs);
const { storage , util  } = (0, _indexJsDefault.default);
exports.default = ({ window , config , ...options })=>{
    const { configure  } = (0, _moduleComposerDefault.default)({
        window,
        ...(0, _indexJsDefault.default)
    }, options);
    const { compose  } = configure((0, _defaultConfigJsDefault.default), config);
    // Data
    const { stores  } = compose("stores", {
        storage
    });
    const { subscriptions  } = compose("subscriptions", {
        stores,
        util
    });
    // Domain
    const { core  } = compose.deep("core", {
        util
    });
    const { io  } = compose("io", {
        window
    });
    const { services  } = compose.deep("services", {
        subscriptions,
        stores,
        core,
        io,
        util
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
        window
    });
    const { components  } = compose.deep("components", {
        io,
        ui,
        elements,
        vendorComponents,
        services,
        subscriptions,
        util
    });
    const { styles  } = compose("styles", {
        ui,
        subscriptions
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
        window
    });
    return compose.end();
};

},{"module-composer":"iXGKL","./modules/index.js":"aOVNo","./default-config.js":"48ejv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iXGKL":[function(require,module,exports) {
const Configure = require("3d8a3252da7d11ca");
const Session = require("24fdf1b33722741b");
const util = require("101b068c9d3f36dc");
module.exports = (target, userOptions = {})=>{
    const createComposer = (config = {})=>{
        const constants = util.deepFreeze(config);
        const session = Session(target, constants, userOptions);
        const deep = (path, deps = {}, args = {}, opts = {})=>{
            const optsMod = util.merge({
                depth: Infinity
            }, opts);
            return compose(path, deps, args, optsMod);
        };
        const end = ()=>{
            if (session.state.ended) throw new Error("Composition has already ended");
            session.state.ended = true;
            return session.external;
        };
        const compose = (path, deps = {}, args = {}, opts = {})=>{
            if (session.state.ended) throw new Error("Composition has ended");
            return session.compose(path, deps, args, opts);
        };
        Object.assign(compose, session.external, {
            deep,
            end
        });
        return {
            compose,
            constants
        };
    };
    const composer = createComposer(userOptions.config);
    const configure = Configure(createComposer);
    return {
        ...composer,
        configure
    };
};

},{"3d8a3252da7d11ca":"e0Ddu","24fdf1b33722741b":"lOYjM","101b068c9d3f36dc":"6vriZ"}],"e0Ddu":[function(require,module,exports) {
const util = require("c183edb77265cd1d");
module.exports = (createComposer)=>(...configs)=>{
        const flatConfigs = configs.filter((c)=>!!c).flatMap((c)=>Array.isArray(c) ? c : [
                c
            ]);
        const config = flatConfigs.reduce((acc, c)=>{
            const config = typeof c === "function" ? c(acc) : c;
            return util.merge(acc, config);
        }, {});
        return createComposer(config);
    };

},{"c183edb77265cd1d":"6vriZ"}],"6vriZ":[function(require,module,exports) {
/* eslint-disable no-prototype-builtins */ const cloneDeep = require("20aeb122af89a0a5");
const flattenDeep = require("11f417ab2bbea59c");
const get = require("6afd5745b1a5a93");
const has = require("a6d9594e8ef67652");
const invoke = require("272baa364f971cae");
const isFunction = require("18917ab616a2ad65");
const isPlainObject = require("fddefea51c53b54a");
const mapValues = require("ea15c3ceb71c79e2");
const merge = require("ae0c982dabe1d0b2");
const pick = require("a7c9a06f346e28a7");
const pickBy = require("46f51ca063b0ecdb");
const set = require("b2bbbaffbc20914d");
const upperFirst = require("f9d2105150aeeb6f");
const unset = require("3c3d07ca5ee9e14f");
const flow = require("e758f186cf6c8df2");
const isPlainFunction = (val)=>isFunction(val) && !val.hasOwnProperty("prototype");
const isPromise = (val)=>val && typeof val.then == "function";
const mergeValues = (target, obj, keys)=>merge(target, ...flattenDeep(pickValues(obj, keys)));
const pickValues = (obj, keys)=>Object.values(pick(obj, keys));
const matchPaths = (obj, cb, depth, currentDepth = 0, currentPath = [])=>{
    if (currentDepth === depth) return [];
    return Object.entries(obj).flatMap(([key, val])=>{
        const path = [
            ...currentPath,
            key
        ];
        const res1 = !isPlainObject(val) && cb(key) ? [
            path
        ] : [];
        const res2 = isPlainObject(val) ? matchPaths(val, cb, depth, currentDepth + 1, path) : [];
        return [
            ...res1,
            ...res2
        ];
    });
};
const replacePaths = (obj, fromArray, toArray)=>{
    const target = cloneDeep(obj);
    fromArray.forEach((from, i)=>{
        const orig = get(obj, from);
        unset(target, from);
        set(target, toArray[i], orig);
    });
    const pickKeys = toArray.map((arr)=>arr.join("."));
    return pick(target, ...pickKeys);
};
const removePaths = (obj, paths)=>{
    const target = cloneDeep(obj);
    paths.forEach((path)=>unset(target, path));
    return target;
};
const deepFreeze = (obj)=>{
    const propNames = Reflect.ownKeys(obj);
    for (const name of propNames){
        const value = obj[name];
        if (value && typeof value === "object" || typeof value === "function") deepFreeze(value);
    }
    return Object.freeze(obj);
};
module.exports = {
    cloneDeep,
    deepFreeze,
    get,
    has,
    invoke,
    isPlainFunction,
    isPlainObject,
    isPromise,
    mapValues,
    matchPaths,
    merge,
    mergeValues,
    pick,
    pickBy,
    removePaths,
    replacePaths,
    set,
    upperFirst,
    flow
};

},{"20aeb122af89a0a5":"NMIiZ","11f417ab2bbea59c":"hGdgE","6afd5745b1a5a93":"8UELX","a6d9594e8ef67652":"jni8c","272baa364f971cae":"7nahN","18917ab616a2ad65":"cfti6","fddefea51c53b54a":"cvSNF","ea15c3ceb71c79e2":"aMVMF","ae0c982dabe1d0b2":"2WcC0","a7c9a06f346e28a7":"bY5l6","46f51ca063b0ecdb":"fOndG","b2bbbaffbc20914d":"uwDF1","f9d2105150aeeb6f":"lX6jB","3c3d07ca5ee9e14f":"64pIY","e758f186cf6c8df2":"ivbSK"}],"NMIiZ":[function(require,module,exports) {
var baseClone = require("9b38cc9a3ba32230");
/** Used to compose bitmasks for cloning. */ var CLONE_DEEP_FLAG = 1, CLONE_SYMBOLS_FLAG = 4;
/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */ function cloneDeep(value) {
    return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
}
module.exports = cloneDeep;

},{"9b38cc9a3ba32230":"2GC2p"}],"2GC2p":[function(require,module,exports) {
var Stack = require("c3256a0a192955f9"), arrayEach = require("3a79976eb46af94a"), assignValue = require("bc83a05a4f99d69b"), baseAssign = require("e6b4c3e6c85df6bb"), baseAssignIn = require("f340cc553ba5643c"), cloneBuffer = require("e72e99883a50402d"), copyArray = require("dc840ead07f1054"), copySymbols = require("309288e8ee190af0"), copySymbolsIn = require("687fa30fede0b048"), getAllKeys = require("bb0ba724f98b094d"), getAllKeysIn = require("12bae1dca0e83064"), getTag = require("4c3204eaea28d680"), initCloneArray = require("fd7741200b462cdf"), initCloneByTag = require("f93a1d24ac08e076"), initCloneObject = require("630039e80f692f17"), isArray = require("f37949484ab52dae"), isBuffer = require("ac876cc65d29c86e"), isMap = require("1056c031d98783c0"), isObject = require("1800fb3122907fc2"), isSet = require("31f022f648037bd3"), keys = require("5f3267fbd9848a7d"), keysIn = require("7d3f3bdc4f2e7bb8");
/** Used to compose bitmasks for cloning. */ var CLONE_DEEP_FLAG = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG = 4;
/** `Object#toString` result references. */ var argsTag = "[object Arguments]", arrayTag = "[object Array]", boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag = "[object Map]", numberTag = "[object Number]", objectTag = "[object Object]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]", weakMapTag = "[object WeakMap]";
var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
/** Used to identify `toStringTag` values supported by `_.clone`. */ var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */ function baseClone(value, bitmask, customizer, key, object, stack) {
    var result, isDeep = bitmask & CLONE_DEEP_FLAG, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG;
    if (customizer) result = object ? customizer(value, key, object, stack) : customizer(value);
    if (result !== undefined) return result;
    if (!isObject(value)) return value;
    var isArr = isArray(value);
    if (isArr) {
        result = initCloneArray(value);
        if (!isDeep) return copyArray(value, result);
    } else {
        var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
        if (isBuffer(value)) return cloneBuffer(value, isDeep);
        if (tag == objectTag || tag == argsTag || isFunc && !object) {
            result = isFlat || isFunc ? {} : initCloneObject(value);
            if (!isDeep) return isFlat ? copySymbolsIn(value, baseAssignIn(result, value)) : copySymbols(value, baseAssign(result, value));
        } else {
            if (!cloneableTags[tag]) return object ? value : {};
            result = initCloneByTag(value, tag, isDeep);
        }
    }
    // Check for circular references and return its corresponding clone.
    stack || (stack = new Stack);
    var stacked = stack.get(value);
    if (stacked) return stacked;
    stack.set(value, result);
    if (isSet(value)) value.forEach(function(subValue) {
        result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });
    else if (isMap(value)) value.forEach(function(subValue, key) {
        result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });
    var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;
    var props = isArr ? undefined : keysFunc(value);
    arrayEach(props || value, function(subValue, key) {
        if (props) {
            key = subValue;
            subValue = value[key];
        }
        // Recursively populate clone (susceptible to call stack limits).
        assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });
    return result;
}
module.exports = baseClone;

},{"c3256a0a192955f9":"atP87","3a79976eb46af94a":"kMhnH","bc83a05a4f99d69b":"5M3eX","e6b4c3e6c85df6bb":"fNRtQ","f340cc553ba5643c":"6Gpuu","e72e99883a50402d":"6zXd4","dc840ead07f1054":"jJ8fu","309288e8ee190af0":"78Za0","687fa30fede0b048":"lhZg2","bb0ba724f98b094d":"d2kML","12bae1dca0e83064":"6BBOq","4c3204eaea28d680":"cRPhM","fd7741200b462cdf":"1RKeS","f93a1d24ac08e076":"26ysD","630039e80f692f17":"dG1H0","f37949484ab52dae":"dZaTH","ac876cc65d29c86e":"cn85h","1056c031d98783c0":"3qbv8","1800fb3122907fc2":"cGhqJ","31f022f648037bd3":"bZrVh","5f3267fbd9848a7d":"6fHVw","7d3f3bdc4f2e7bb8":"c9sMs"}],"atP87":[function(require,module,exports) {
var ListCache = require("cfb30a39eead9e7e"), stackClear = require("ceda2a63c77c915"), stackDelete = require("91ee1b348d9d7172"), stackGet = require("3fe28318f65b9332"), stackHas = require("724ca4def8b84e06"), stackSet = require("e9ceacb40d9582bd");
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

},{"cfb30a39eead9e7e":"3UZeo","ceda2a63c77c915":"6CpyN","91ee1b348d9d7172":"dGFb0","3fe28318f65b9332":"6zFUp","724ca4def8b84e06":"3VJUX","e9ceacb40d9582bd":"ZfrYM"}],"3UZeo":[function(require,module,exports) {
var listCacheClear = require("4b1a0d54aed80a7b"), listCacheDelete = require("b700cb849df2c166"), listCacheGet = require("d76dd90eead6cced"), listCacheHas = require("3d210628ba60ec8"), listCacheSet = require("76026bf2d4cfff93");
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

},{"4b1a0d54aed80a7b":"7AKQv","b700cb849df2c166":"j2Z5O","d76dd90eead6cced":"6Zrrs","3d210628ba60ec8":"i1CBK","76026bf2d4cfff93":"2Rcur"}],"7AKQv":[function(require,module,exports) {
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
var assocIndexOf = require("173cad7d48c35f4f");
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

},{"173cad7d48c35f4f":"cRVsl"}],"cRVsl":[function(require,module,exports) {
var eq = require("b38bfe408564f7a5");
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

},{"b38bfe408564f7a5":"aVz5f"}],"aVz5f":[function(require,module,exports) {
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
var assocIndexOf = require("c0bae780ed176e2c");
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

},{"c0bae780ed176e2c":"cRVsl"}],"i1CBK":[function(require,module,exports) {
var assocIndexOf = require("7ed3d4e3adbd64a4");
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

},{"7ed3d4e3adbd64a4":"cRVsl"}],"2Rcur":[function(require,module,exports) {
var assocIndexOf = require("5be4035c2d7ca432");
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

},{"5be4035c2d7ca432":"cRVsl"}],"6CpyN":[function(require,module,exports) {
var ListCache = require("8a0350213da984ae");
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

},{"8a0350213da984ae":"3UZeo"}],"dGFb0":[function(require,module,exports) {
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
var ListCache = require("4737651e99b917d2"), Map = require("1494efbafafa9552"), MapCache = require("6049e8027fe9407f");
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

},{"4737651e99b917d2":"3UZeo","1494efbafafa9552":"8YjF4","6049e8027fe9407f":"664I1"}],"8YjF4":[function(require,module,exports) {
var getNative = require("ed0752fe9f482107"), root = require("29224713b8d411e6");
/* Built-in method references that are verified to be native. */ var Map = getNative(root, "Map");
module.exports = Map;

},{"ed0752fe9f482107":"9PCIl","29224713b8d411e6":"dSYUs"}],"9PCIl":[function(require,module,exports) {
var baseIsNative = require("63e3f1300cdc459f"), getValue = require("16db51a0e009bd8c");
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

},{"63e3f1300cdc459f":"2U9Pn","16db51a0e009bd8c":"kKx5I"}],"2U9Pn":[function(require,module,exports) {
var isFunction = require("2f9b4543c84c6692"), isMasked = require("cabbc2adfaeb27d9"), isObject = require("cbb5703fe1562e7f"), toSource = require("388b819f47a43aa5");
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

},{"2f9b4543c84c6692":"cfti6","cabbc2adfaeb27d9":"cMDzi","cbb5703fe1562e7f":"cGhqJ","388b819f47a43aa5":"bYHc7"}],"cfti6":[function(require,module,exports) {
var baseGetTag = require("5419308bd9194e11"), isObject = require("3cba3c966459d528");
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

},{"5419308bd9194e11":"lOnbo","3cba3c966459d528":"cGhqJ"}],"lOnbo":[function(require,module,exports) {
var Symbol = require("68a84eb98c5d3fa2"), getRawTag = require("9b2aaf31b7bdd837"), objectToString = require("46d5beb3375f8a28");
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

},{"68a84eb98c5d3fa2":"7lsL9","9b2aaf31b7bdd837":"995sO","46d5beb3375f8a28":"bmE3g"}],"7lsL9":[function(require,module,exports) {
var root = require("9ff1abd51ad45ac0");
/** Built-in value references. */ var Symbol = root.Symbol;
module.exports = Symbol;

},{"9ff1abd51ad45ac0":"dSYUs"}],"dSYUs":[function(require,module,exports) {
var freeGlobal = require("cd92e8811deaabf5");
/** Detect free variable `self`. */ var freeSelf = typeof self == "object" && self && self.Object === Object && self;
/** Used as a reference to the global object. */ var root = freeGlobal || freeSelf || Function("return this")();
module.exports = root;

},{"cd92e8811deaabf5":"kAk32"}],"kAk32":[function(require,module,exports) {
/** Detect free variable `global` from Node.js. */ var global = arguments[3];
var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
module.exports = freeGlobal;

},{}],"995sO":[function(require,module,exports) {
var Symbol = require("e9b4533b2a68f814");
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

},{"e9b4533b2a68f814":"7lsL9"}],"bmE3g":[function(require,module,exports) {
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

},{}],"cGhqJ":[function(require,module,exports) {
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
var coreJsData = require("2fa6c734b0792bcf");
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

},{"2fa6c734b0792bcf":"6gJwQ"}],"6gJwQ":[function(require,module,exports) {
var root = require("2f0959b2c20d7fb0");
/** Used to detect overreaching core-js shims. */ var coreJsData = root["__core-js_shared__"];
module.exports = coreJsData;

},{"2f0959b2c20d7fb0":"dSYUs"}],"bYHc7":[function(require,module,exports) {
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
        } catch (e) {}
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

},{}],"664I1":[function(require,module,exports) {
var mapCacheClear = require("a5ffecfb6a8bdac1"), mapCacheDelete = require("d2967b0e32ccfa56"), mapCacheGet = require("ca21409ea89624c0"), mapCacheHas = require("f88fd07f8dd1f67d"), mapCacheSet = require("dbf3eae765642a3b");
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

},{"a5ffecfb6a8bdac1":"7kHs4","d2967b0e32ccfa56":"4ny9y","ca21409ea89624c0":"gVeFY","f88fd07f8dd1f67d":"idSOY","dbf3eae765642a3b":"lXUJT"}],"7kHs4":[function(require,module,exports) {
var Hash = require("4ae82d88051cc92b"), ListCache = require("a07dcf3fd3097a0c"), Map = require("92c01c953ef00ded");
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

},{"4ae82d88051cc92b":"jFMT5","a07dcf3fd3097a0c":"3UZeo","92c01c953ef00ded":"8YjF4"}],"jFMT5":[function(require,module,exports) {
var hashClear = require("f47a1723b6e2d79b"), hashDelete = require("bc25d439ccd1fb47"), hashGet = require("f096b37295a92ab0"), hashHas = require("d88173cbc6a133c8"), hashSet = require("afb9b3bae0461cbf");
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

},{"f47a1723b6e2d79b":"f2NRo","bc25d439ccd1fb47":"cCdgz","f096b37295a92ab0":"eKqTO","d88173cbc6a133c8":"ghnqP","afb9b3bae0461cbf":"6i99R"}],"f2NRo":[function(require,module,exports) {
var nativeCreate = require("dc294230a47ca365");
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

},{"dc294230a47ca365":"6i8Uf"}],"6i8Uf":[function(require,module,exports) {
var getNative = require("12f496acdffb7cf7");
/* Built-in method references that are verified to be native. */ var nativeCreate = getNative(Object, "create");
module.exports = nativeCreate;

},{"12f496acdffb7cf7":"9PCIl"}],"cCdgz":[function(require,module,exports) {
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
var nativeCreate = require("627211fa3e1596e1");
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

},{"627211fa3e1596e1":"6i8Uf"}],"ghnqP":[function(require,module,exports) {
var nativeCreate = require("52b3f0bfeddceb45");
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

},{"52b3f0bfeddceb45":"6i8Uf"}],"6i99R":[function(require,module,exports) {
var nativeCreate = require("67b7d10f53ccd515");
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

},{"67b7d10f53ccd515":"6i8Uf"}],"4ny9y":[function(require,module,exports) {
var getMapData = require("656d8c5510e0af84");
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

},{"656d8c5510e0af84":"aptgk"}],"aptgk":[function(require,module,exports) {
var isKeyable = require("adfdd2b4101370ed");
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

},{"adfdd2b4101370ed":"icylN"}],"icylN":[function(require,module,exports) {
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
var getMapData = require("d345cdfee2b4007d");
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

},{"d345cdfee2b4007d":"aptgk"}],"idSOY":[function(require,module,exports) {
var getMapData = require("29ebabd55e2d6074");
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

},{"29ebabd55e2d6074":"aptgk"}],"lXUJT":[function(require,module,exports) {
var getMapData = require("21c5ffca56eeb737");
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

},{"21c5ffca56eeb737":"aptgk"}],"kMhnH":[function(require,module,exports) {
/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */ function arrayEach(array, iteratee) {
    var index = -1, length = array == null ? 0 : array.length;
    while(++index < length){
        if (iteratee(array[index], index, array) === false) break;
    }
    return array;
}
module.exports = arrayEach;

},{}],"5M3eX":[function(require,module,exports) {
var baseAssignValue = require("be513dd57a36b3f4"), eq = require("b62ef95b3cf1cde1");
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

},{"be513dd57a36b3f4":"fprBU","b62ef95b3cf1cde1":"aVz5f"}],"fprBU":[function(require,module,exports) {
var defineProperty = require("57c6267f904aee0a");
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

},{"57c6267f904aee0a":"cZOnw"}],"cZOnw":[function(require,module,exports) {
var getNative = require("7565accd8c33cb8b");
var defineProperty = function() {
    try {
        var func = getNative(Object, "defineProperty");
        func({}, "", {});
        return func;
    } catch (e) {}
}();
module.exports = defineProperty;

},{"7565accd8c33cb8b":"9PCIl"}],"fNRtQ":[function(require,module,exports) {
var copyObject = require("c7567f70ddd05963"), keys = require("fcf23a0242ef0da9");
/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */ function baseAssign(object, source) {
    return object && copyObject(source, keys(source), object);
}
module.exports = baseAssign;

},{"c7567f70ddd05963":"gfA7W","fcf23a0242ef0da9":"6fHVw"}],"gfA7W":[function(require,module,exports) {
var assignValue = require("51e2769785cbfa78"), baseAssignValue = require("9cddf6ac1a092765");
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

},{"51e2769785cbfa78":"5M3eX","9cddf6ac1a092765":"fprBU"}],"6fHVw":[function(require,module,exports) {
var arrayLikeKeys = require("4c73ca42c789e5ab"), baseKeys = require("e8453365fdacc8da"), isArrayLike = require("7760b47b02971dfa");
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

},{"4c73ca42c789e5ab":"dquIQ","e8453365fdacc8da":"c0eiI","7760b47b02971dfa":"gMCbp"}],"dquIQ":[function(require,module,exports) {
var baseTimes = require("7ed875a0e67be76f"), isArguments = require("9cdb51ffa56f149b"), isArray = require("38cd49f1e493b3d7"), isBuffer = require("b379831fe1873fed"), isIndex = require("f362a34cd8321bb7"), isTypedArray = require("c019db5297494469");
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
    (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
    isIndex(key, length)))) result.push(key);
    return result;
}
module.exports = arrayLikeKeys;

},{"7ed875a0e67be76f":"odqYd","9cdb51ffa56f149b":"8ReNj","38cd49f1e493b3d7":"dZaTH","b379831fe1873fed":"cn85h","f362a34cd8321bb7":"aJpx0","c019db5297494469":"6SVKk"}],"odqYd":[function(require,module,exports) {
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

},{}],"8ReNj":[function(require,module,exports) {
var baseIsArguments = require("b56e5b7d86069686"), isObjectLike = require("bead821d6af018b5");
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

},{"b56e5b7d86069686":"gx70P","bead821d6af018b5":"3BLi4"}],"gx70P":[function(require,module,exports) {
var baseGetTag = require("7e8612a4a451f2cc"), isObjectLike = require("b6cdbe52dcf709f8");
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

},{"7e8612a4a451f2cc":"lOnbo","b6cdbe52dcf709f8":"3BLi4"}],"3BLi4":[function(require,module,exports) {
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

},{}],"cn85h":[function(require,module,exports) {
var root = require("cef5ec6f0da1ab00"), stubFalse = require("a1e87b138cf75d1d");
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

},{"cef5ec6f0da1ab00":"dSYUs","a1e87b138cf75d1d":"dx4uy"}],"dx4uy":[function(require,module,exports) {
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

},{}],"aJpx0":[function(require,module,exports) {
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

},{}],"6SVKk":[function(require,module,exports) {
var baseIsTypedArray = require("75a26f037e65be61"), baseUnary = require("903f50eb1c16d257"), nodeUtil = require("fa49853a82034c30");
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

},{"75a26f037e65be61":"lGSsl","903f50eb1c16d257":"eJXq4","fa49853a82034c30":"5edNe"}],"lGSsl":[function(require,module,exports) {
var baseGetTag = require("67544c3df364a802"), isLength = require("f661b3a120d7a4cb"), isObjectLike = require("cdd86c83797c0618");
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

},{"67544c3df364a802":"lOnbo","f661b3a120d7a4cb":"hrTBx","cdd86c83797c0618":"3BLi4"}],"hrTBx":[function(require,module,exports) {
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

},{}],"eJXq4":[function(require,module,exports) {
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
var freeGlobal = require("94e753dfbe54816e");
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

},{"94e753dfbe54816e":"kAk32"}],"c0eiI":[function(require,module,exports) {
var isPrototype = require("7da6298814f9bd95"), nativeKeys = require("3ec652610d8dd5d3");
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

},{"7da6298814f9bd95":"iG4eR","3ec652610d8dd5d3":"k97u2"}],"iG4eR":[function(require,module,exports) {
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
var overArg = require("aa3357c7a3889df");
/* Built-in method references for those with the same name as other `lodash` methods. */ var nativeKeys = overArg(Object.keys, Object);
module.exports = nativeKeys;

},{"aa3357c7a3889df":"dpUvl"}],"dpUvl":[function(require,module,exports) {
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

},{}],"gMCbp":[function(require,module,exports) {
var isFunction = require("bb060d4356645330"), isLength = require("f3db08d4d1110aaf");
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

},{"bb060d4356645330":"cfti6","f3db08d4d1110aaf":"hrTBx"}],"6Gpuu":[function(require,module,exports) {
var copyObject = require("6f2a44bcb454186d"), keysIn = require("7697a1565646c93");
/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */ function baseAssignIn(object, source) {
    return object && copyObject(source, keysIn(source), object);
}
module.exports = baseAssignIn;

},{"6f2a44bcb454186d":"gfA7W","7697a1565646c93":"c9sMs"}],"c9sMs":[function(require,module,exports) {
var arrayLikeKeys = require("635aebb56f3a408f"), baseKeysIn = require("194eb1a802636842"), isArrayLike = require("ac15afdc3ddd76cd");
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

},{"635aebb56f3a408f":"dquIQ","194eb1a802636842":"23s7e","ac15afdc3ddd76cd":"gMCbp"}],"23s7e":[function(require,module,exports) {
var isObject = require("bd1636f5883f1002"), isPrototype = require("f7d53cd92b2b977b"), nativeKeysIn = require("c039208a16eb68bd");
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

},{"bd1636f5883f1002":"cGhqJ","f7d53cd92b2b977b":"iG4eR","c039208a16eb68bd":"5CFL0"}],"5CFL0":[function(require,module,exports) {
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

},{}],"6zXd4":[function(require,module,exports) {
var root = require("5d68e87b918bbcc5");
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

},{"5d68e87b918bbcc5":"dSYUs"}],"jJ8fu":[function(require,module,exports) {
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

},{}],"78Za0":[function(require,module,exports) {
var copyObject = require("4cc37626612884ad"), getSymbols = require("39cbde2205d9399c");
/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */ function copySymbols(source, object) {
    return copyObject(source, getSymbols(source), object);
}
module.exports = copySymbols;

},{"4cc37626612884ad":"gfA7W","39cbde2205d9399c":"5p5Yd"}],"5p5Yd":[function(require,module,exports) {
var arrayFilter = require("7fe025254f0b7e4a"), stubArray = require("6b1c62cea92cdb9");
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

},{"7fe025254f0b7e4a":"hmIQ7","6b1c62cea92cdb9":"6TgRy"}],"hmIQ7":[function(require,module,exports) {
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

},{}],"lhZg2":[function(require,module,exports) {
var copyObject = require("73fd77060a6bfcff"), getSymbolsIn = require("9b660e6b0c20d303");
/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */ function copySymbolsIn(source, object) {
    return copyObject(source, getSymbolsIn(source), object);
}
module.exports = copySymbolsIn;

},{"73fd77060a6bfcff":"gfA7W","9b660e6b0c20d303":"dVaAc"}],"dVaAc":[function(require,module,exports) {
var arrayPush = require("2f7c7daf8773557"), getPrototype = require("6ccae2aa7cfa3c66"), getSymbols = require("bdb501682ee9305d"), stubArray = require("7641fe4ae6d2cc96");
/* Built-in method references for those with the same name as other `lodash` methods. */ var nativeGetSymbols = Object.getOwnPropertySymbols;
/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */ var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
    var result = [];
    while(object){
        arrayPush(result, getSymbols(object));
        object = getPrototype(object);
    }
    return result;
};
module.exports = getSymbolsIn;

},{"2f7c7daf8773557":"ivo5r","6ccae2aa7cfa3c66":"8ASKT","bdb501682ee9305d":"5p5Yd","7641fe4ae6d2cc96":"6TgRy"}],"ivo5r":[function(require,module,exports) {
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

},{}],"8ASKT":[function(require,module,exports) {
var overArg = require("11c2fcc01fbb2119");
/** Built-in value references. */ var getPrototype = overArg(Object.getPrototypeOf, Object);
module.exports = getPrototype;

},{"11c2fcc01fbb2119":"dpUvl"}],"d2kML":[function(require,module,exports) {
var baseGetAllKeys = require("c3dbe402f6996a21"), getSymbols = require("aa79b69a13f924db"), keys = require("e3ad83e53433bc8a");
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

},{"c3dbe402f6996a21":"aeckf","aa79b69a13f924db":"5p5Yd","e3ad83e53433bc8a":"6fHVw"}],"aeckf":[function(require,module,exports) {
var arrayPush = require("abfc70b400ed76c2"), isArray = require("148b85918856c33a");
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

},{"abfc70b400ed76c2":"ivo5r","148b85918856c33a":"dZaTH"}],"6BBOq":[function(require,module,exports) {
var baseGetAllKeys = require("f6d6a583609f5bf6"), getSymbolsIn = require("feede5d0a2d06427"), keysIn = require("287f70f798405911");
/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */ function getAllKeysIn(object) {
    return baseGetAllKeys(object, keysIn, getSymbolsIn);
}
module.exports = getAllKeysIn;

},{"f6d6a583609f5bf6":"aeckf","feede5d0a2d06427":"dVaAc","287f70f798405911":"c9sMs"}],"cRPhM":[function(require,module,exports) {
var DataView = require("7f038695b2fdb86e"), Map = require("28e3344aae951f13"), Promise = require("b286298be5b1d9a4"), Set = require("3ae50c158f89813"), WeakMap = require("9f458755f627d456"), baseGetTag = require("8e9160b373d7fe66"), toSource = require("b210627dd951641f");
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

},{"7f038695b2fdb86e":"ejRu5","28e3344aae951f13":"8YjF4","b286298be5b1d9a4":"jbvCt","3ae50c158f89813":"4xGLf","9f458755f627d456":"av50V","8e9160b373d7fe66":"lOnbo","b210627dd951641f":"bYHc7"}],"ejRu5":[function(require,module,exports) {
var getNative = require("a6517d0448dad786"), root = require("f83c375075418382");
/* Built-in method references that are verified to be native. */ var DataView = getNative(root, "DataView");
module.exports = DataView;

},{"a6517d0448dad786":"9PCIl","f83c375075418382":"dSYUs"}],"jbvCt":[function(require,module,exports) {
var getNative = require("6940648d854355b5"), root = require("a5c6637bac681a0");
/* Built-in method references that are verified to be native. */ var Promise = getNative(root, "Promise");
module.exports = Promise;

},{"6940648d854355b5":"9PCIl","a5c6637bac681a0":"dSYUs"}],"4xGLf":[function(require,module,exports) {
var getNative = require("56b792d64741a4ff"), root = require("ca486d41cdf819d4");
/* Built-in method references that are verified to be native. */ var Set = getNative(root, "Set");
module.exports = Set;

},{"56b792d64741a4ff":"9PCIl","ca486d41cdf819d4":"dSYUs"}],"av50V":[function(require,module,exports) {
var getNative = require("4507415bd8810d3c"), root = require("7a9a6581834a8452");
/* Built-in method references that are verified to be native. */ var WeakMap = getNative(root, "WeakMap");
module.exports = WeakMap;

},{"4507415bd8810d3c":"9PCIl","7a9a6581834a8452":"dSYUs"}],"1RKeS":[function(require,module,exports) {
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */ function initCloneArray(array) {
    var length = array.length, result = new array.constructor(length);
    // Add properties assigned by `RegExp#exec`.
    if (length && typeof array[0] == "string" && hasOwnProperty.call(array, "index")) {
        result.index = array.index;
        result.input = array.input;
    }
    return result;
}
module.exports = initCloneArray;

},{}],"26ysD":[function(require,module,exports) {
var cloneArrayBuffer = require("d24f0b9a34d2e38a"), cloneDataView = require("dbf04edaab2ae376"), cloneRegExp = require("763300f2dd9bdaf3"), cloneSymbol = require("c30e64d90e4b92d1"), cloneTypedArray = require("d1edd8349e9ad54d");
/** `Object#toString` result references. */ var boolTag = "[object Boolean]", dateTag = "[object Date]", mapTag = "[object Map]", numberTag = "[object Number]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]";
var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */ function initCloneByTag(object, tag, isDeep) {
    var Ctor = object.constructor;
    switch(tag){
        case arrayBufferTag:
            return cloneArrayBuffer(object);
        case boolTag:
        case dateTag:
            return new Ctor(+object);
        case dataViewTag:
            return cloneDataView(object, isDeep);
        case float32Tag:
        case float64Tag:
        case int8Tag:
        case int16Tag:
        case int32Tag:
        case uint8Tag:
        case uint8ClampedTag:
        case uint16Tag:
        case uint32Tag:
            return cloneTypedArray(object, isDeep);
        case mapTag:
            return new Ctor;
        case numberTag:
        case stringTag:
            return new Ctor(object);
        case regexpTag:
            return cloneRegExp(object);
        case setTag:
            return new Ctor;
        case symbolTag:
            return cloneSymbol(object);
    }
}
module.exports = initCloneByTag;

},{"d24f0b9a34d2e38a":"7fi2W","dbf04edaab2ae376":"hEqzP","763300f2dd9bdaf3":"aeJOQ","c30e64d90e4b92d1":"5ScBc","d1edd8349e9ad54d":"7eG7Y"}],"7fi2W":[function(require,module,exports) {
var Uint8Array = require("c50984a96481fd62");
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

},{"c50984a96481fd62":"6xFrA"}],"6xFrA":[function(require,module,exports) {
var root = require("f755339301d6568f");
/** Built-in value references. */ var Uint8Array = root.Uint8Array;
module.exports = Uint8Array;

},{"f755339301d6568f":"dSYUs"}],"hEqzP":[function(require,module,exports) {
var cloneArrayBuffer = require("55b473c4a5622b5a");
/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */ function cloneDataView(dataView, isDeep) {
    var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
    return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}
module.exports = cloneDataView;

},{"55b473c4a5622b5a":"7fi2W"}],"aeJOQ":[function(require,module,exports) {
/** Used to match `RegExp` flags from their coerced string values. */ var reFlags = /\w*$/;
/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */ function cloneRegExp(regexp) {
    var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
    result.lastIndex = regexp.lastIndex;
    return result;
}
module.exports = cloneRegExp;

},{}],"5ScBc":[function(require,module,exports) {
var Symbol = require("b88cf659c1f1d984");
/** Used to convert symbols to primitives and strings. */ var symbolProto = Symbol ? Symbol.prototype : undefined, symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;
/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */ function cloneSymbol(symbol) {
    return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}
module.exports = cloneSymbol;

},{"b88cf659c1f1d984":"7lsL9"}],"7eG7Y":[function(require,module,exports) {
var cloneArrayBuffer = require("b3183de060e04548");
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

},{"b3183de060e04548":"7fi2W"}],"dG1H0":[function(require,module,exports) {
var baseCreate = require("4a25a11eb90445e8"), getPrototype = require("8c92276927b7c3e0"), isPrototype = require("e939f15d7a0f64a5");
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

},{"4a25a11eb90445e8":"ef1VZ","8c92276927b7c3e0":"8ASKT","e939f15d7a0f64a5":"iG4eR"}],"ef1VZ":[function(require,module,exports) {
var isObject = require("2c87f13f7934e7bd");
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

},{"2c87f13f7934e7bd":"cGhqJ"}],"3qbv8":[function(require,module,exports) {
var baseIsMap = require("bcb4b5290583d129"), baseUnary = require("6a7e6b1a2d9fb1d5"), nodeUtil = require("7d4f449dd306450f");
/* Node.js helper references. */ var nodeIsMap = nodeUtil && nodeUtil.isMap;
/**
 * Checks if `value` is classified as a `Map` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 * @example
 *
 * _.isMap(new Map);
 * // => true
 *
 * _.isMap(new WeakMap);
 * // => false
 */ var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
module.exports = isMap;

},{"bcb4b5290583d129":"9v3CD","6a7e6b1a2d9fb1d5":"eJXq4","7d4f449dd306450f":"5edNe"}],"9v3CD":[function(require,module,exports) {
var getTag = require("f59b9932854175ea"), isObjectLike = require("88260e33e0003386");
/** `Object#toString` result references. */ var mapTag = "[object Map]";
/**
 * The base implementation of `_.isMap` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 */ function baseIsMap(value) {
    return isObjectLike(value) && getTag(value) == mapTag;
}
module.exports = baseIsMap;

},{"f59b9932854175ea":"cRPhM","88260e33e0003386":"3BLi4"}],"bZrVh":[function(require,module,exports) {
var baseIsSet = require("efa5963001bed2f4"), baseUnary = require("3cb35dba719c68b1"), nodeUtil = require("7a3e899a332ff7be");
/* Node.js helper references. */ var nodeIsSet = nodeUtil && nodeUtil.isSet;
/**
 * Checks if `value` is classified as a `Set` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 * @example
 *
 * _.isSet(new Set);
 * // => true
 *
 * _.isSet(new WeakSet);
 * // => false
 */ var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
module.exports = isSet;

},{"efa5963001bed2f4":"7lzzg","3cb35dba719c68b1":"eJXq4","7a3e899a332ff7be":"5edNe"}],"7lzzg":[function(require,module,exports) {
var getTag = require("3451ecb010f954cc"), isObjectLike = require("b6fc875bc5f351c9");
/** `Object#toString` result references. */ var setTag = "[object Set]";
/**
 * The base implementation of `_.isSet` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 */ function baseIsSet(value) {
    return isObjectLike(value) && getTag(value) == setTag;
}
module.exports = baseIsSet;

},{"3451ecb010f954cc":"cRPhM","b6fc875bc5f351c9":"3BLi4"}],"hGdgE":[function(require,module,exports) {
var baseFlatten = require("57782bd3a8a372a0");
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

},{"57782bd3a8a372a0":"60rt9"}],"60rt9":[function(require,module,exports) {
var arrayPush = require("d752582e5b174691"), isFlattenable = require("ec5f080ebf5764e8");
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

},{"d752582e5b174691":"ivo5r","ec5f080ebf5764e8":"O762m"}],"O762m":[function(require,module,exports) {
var Symbol = require("dde07f6ab8ba5eb5"), isArguments = require("ee6f325d7f5309b1"), isArray = require("ff8d93236e335297");
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

},{"dde07f6ab8ba5eb5":"7lsL9","ee6f325d7f5309b1":"8ReNj","ff8d93236e335297":"dZaTH"}],"8UELX":[function(require,module,exports) {
var baseGet = require("446ba3c1be7939a3");
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

},{"446ba3c1be7939a3":"kMRe3"}],"kMRe3":[function(require,module,exports) {
var castPath = require("434ba191fc1dcf09"), toKey = require("c3296f04fad32769");
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

},{"434ba191fc1dcf09":"apxk5","c3296f04fad32769":"bEgue"}],"apxk5":[function(require,module,exports) {
var isArray = require("26a856890198f45b"), isKey = require("e823e604d75f975b"), stringToPath = require("f5fff1c342107fbd"), toString = require("b04e8cc634273c23");
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

},{"26a856890198f45b":"dZaTH","e823e604d75f975b":"4wPWG","f5fff1c342107fbd":"1m1j5","b04e8cc634273c23":"joIdQ"}],"4wPWG":[function(require,module,exports) {
var isArray = require("1efcc081e9a448a8"), isSymbol = require("4cdff6c9e9ff5d38");
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

},{"1efcc081e9a448a8":"dZaTH","4cdff6c9e9ff5d38":"i3BHC"}],"i3BHC":[function(require,module,exports) {
var baseGetTag = require("6118c0d5630f51ce"), isObjectLike = require("74644060ad1a1d3c");
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

},{"6118c0d5630f51ce":"lOnbo","74644060ad1a1d3c":"3BLi4"}],"1m1j5":[function(require,module,exports) {
var memoizeCapped = require("55f565a895f455e5");
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

},{"55f565a895f455e5":"j3xlQ"}],"j3xlQ":[function(require,module,exports) {
var memoize = require("cb456550b1f5dd0a");
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

},{"cb456550b1f5dd0a":"azHKC"}],"azHKC":[function(require,module,exports) {
var MapCache = require("b34b26bf235f1cdd");
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

},{"b34b26bf235f1cdd":"664I1"}],"joIdQ":[function(require,module,exports) {
var baseToString = require("81fca33832a744d9");
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

},{"81fca33832a744d9":"goDP8"}],"goDP8":[function(require,module,exports) {
var Symbol = require("16af83505444e42a"), arrayMap = require("8439a3a1551d0706"), isArray = require("4b12c9f502d3288a"), isSymbol = require("a0ebd327d618908a");
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

},{"16af83505444e42a":"7lsL9","8439a3a1551d0706":"imI5Z","4b12c9f502d3288a":"dZaTH","a0ebd327d618908a":"i3BHC"}],"imI5Z":[function(require,module,exports) {
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
var isSymbol = require("2aed9f6fd4b7386");
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

},{"2aed9f6fd4b7386":"i3BHC"}],"jni8c":[function(require,module,exports) {
var baseHas = require("adf86b651ea78123"), hasPath = require("d1ab8f0895b2d3d5");
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

},{"adf86b651ea78123":"2SDbO","d1ab8f0895b2d3d5":"4QNMG"}],"2SDbO":[function(require,module,exports) {
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
var castPath = require("bdbd2cfd212d36f7"), isArguments = require("47ffafdab3ba0d6f"), isArray = require("93ebd263ff0131c1"), isIndex = require("252ef74480e01958"), isLength = require("23c2f64e75e90a2"), toKey = require("af5ade297cb685ee");
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

},{"bdbd2cfd212d36f7":"apxk5","47ffafdab3ba0d6f":"8ReNj","93ebd263ff0131c1":"dZaTH","252ef74480e01958":"aJpx0","23c2f64e75e90a2":"hrTBx","af5ade297cb685ee":"bEgue"}],"7nahN":[function(require,module,exports) {
var baseInvoke = require("8f46d242e58356be"), baseRest = require("824397b51f3950a3");
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

},{"8f46d242e58356be":"gUHNE","824397b51f3950a3":"kd260"}],"gUHNE":[function(require,module,exports) {
var apply = require("ac762a0bb6e8149f"), castPath = require("9f4267f66f5c1d0a"), last = require("bbc1c17b8c368d7c"), parent = require("f2cbf82cd927014d"), toKey = require("249cf52180a0c208");
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

},{"ac762a0bb6e8149f":"gUweg","9f4267f66f5c1d0a":"apxk5","bbc1c17b8c368d7c":"fv3GK","f2cbf82cd927014d":"1hPE8","249cf52180a0c208":"bEgue"}],"gUweg":[function(require,module,exports) {
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
var baseGet = require("cbcb75b7339c1ad"), baseSlice = require("3443758a32fd0de1");
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

},{"cbcb75b7339c1ad":"kMRe3","3443758a32fd0de1":"cqqI2"}],"cqqI2":[function(require,module,exports) {
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
var identity = require("3b2979bd51a0f85f"), overRest = require("ff7d23ff2a2ea6f8"), setToString = require("a11d545e809d14f7");
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

},{"3b2979bd51a0f85f":"dgTUN","ff7d23ff2a2ea6f8":"16F1z","a11d545e809d14f7":"b5kjI"}],"dgTUN":[function(require,module,exports) {
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
var apply = require("6f683b05f63ed25a");
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

},{"6f683b05f63ed25a":"gUweg"}],"b5kjI":[function(require,module,exports) {
var baseSetToString = require("eebd487fbab521b6"), shortOut = require("9114f59293388d49");
/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */ var setToString = shortOut(baseSetToString);
module.exports = setToString;

},{"eebd487fbab521b6":"lgihM","9114f59293388d49":"7ulLs"}],"lgihM":[function(require,module,exports) {
var constant = require("706929c7b4749485"), defineProperty = require("eff1240bc0447727"), identity = require("b00d1e57326793e1");
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

},{"706929c7b4749485":"1HI6K","eff1240bc0447727":"cZOnw","b00d1e57326793e1":"dgTUN"}],"1HI6K":[function(require,module,exports) {
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

},{}],"7ulLs":[function(require,module,exports) {
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
var baseGetTag = require("c03dd41ed9922dd2"), getPrototype = require("2ca5b85a120835de"), isObjectLike = require("963b65e043435612");
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

},{"c03dd41ed9922dd2":"lOnbo","2ca5b85a120835de":"8ASKT","963b65e043435612":"3BLi4"}],"aMVMF":[function(require,module,exports) {
var baseAssignValue = require("a3dd03284854d1b5"), baseForOwn = require("3fe946fb5f45d4e9"), baseIteratee = require("8671a2b480ab95e2");
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
 */ function mapValues(object, iteratee) {
    var result = {};
    iteratee = baseIteratee(iteratee, 3);
    baseForOwn(object, function(value, key, object) {
        baseAssignValue(result, key, iteratee(value, key, object));
    });
    return result;
}
module.exports = mapValues;

},{"a3dd03284854d1b5":"fprBU","3fe946fb5f45d4e9":"6MqUM","8671a2b480ab95e2":"2fsgg"}],"6MqUM":[function(require,module,exports) {
var baseFor = require("c7da20818a5fe3d6"), keys = require("1fb77c53defe5720");
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

},{"c7da20818a5fe3d6":"k0bbR","1fb77c53defe5720":"6fHVw"}],"k0bbR":[function(require,module,exports) {
var createBaseFor = require("178c767a7be60d59");
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

},{"178c767a7be60d59":"hCIGA"}],"hCIGA":[function(require,module,exports) {
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

},{}],"2fsgg":[function(require,module,exports) {
var baseMatches = require("30aeab910fab669"), baseMatchesProperty = require("4f010869f7b63154"), identity = require("28f06147d1eb9502"), isArray = require("3c56f88c4debf449"), property = require("aee920e0ef5bf111");
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

},{"30aeab910fab669":"2mdwX","4f010869f7b63154":"48kxC","28f06147d1eb9502":"dgTUN","3c56f88c4debf449":"dZaTH","aee920e0ef5bf111":"8aSQI"}],"2mdwX":[function(require,module,exports) {
var baseIsMatch = require("e45515c903dc8f87"), getMatchData = require("89e9034a8071e297"), matchesStrictComparable = require("782598b150762386");
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

},{"e45515c903dc8f87":"joJZV","89e9034a8071e297":"48Qyi","782598b150762386":"a9Bav"}],"joJZV":[function(require,module,exports) {
var Stack = require("ae43062900bf7e4d"), baseIsEqual = require("9003c0cc8ac007b6");
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

},{"ae43062900bf7e4d":"atP87","9003c0cc8ac007b6":"7i3qr"}],"7i3qr":[function(require,module,exports) {
var baseIsEqualDeep = require("bd1d38ebd4028e5a"), isObjectLike = require("809bbb0c20650dbc");
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

},{"bd1d38ebd4028e5a":"6GoQ9","809bbb0c20650dbc":"3BLi4"}],"6GoQ9":[function(require,module,exports) {
var Stack = require("60c73bca87468e58"), equalArrays = require("96bc8a1825db53a5"), equalByTag = require("8bdece495e87fb69"), equalObjects = require("bb94920432a68eca"), getTag = require("45495edff98e5837"), isArray = require("18256411ae9e2858"), isBuffer = require("e5ba7abf54247fc5"), isTypedArray = require("50d786bb5c7366af");
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

},{"60c73bca87468e58":"atP87","96bc8a1825db53a5":"dQBwf","8bdece495e87fb69":"iqa6H","bb94920432a68eca":"klCEf","45495edff98e5837":"cRPhM","18256411ae9e2858":"dZaTH","e5ba7abf54247fc5":"cn85h","50d786bb5c7366af":"6SVKk"}],"dQBwf":[function(require,module,exports) {
var SetCache = require("9b110ce138e67ce5"), arraySome = require("1ee20de911db0cb0"), cacheHas = require("defff3d81be91b23");
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
        var arrValue = array[index], othValue = other[index];
        if (customizer) var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
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
        } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
            result = false;
            break;
        }
    }
    stack["delete"](array);
    stack["delete"](other);
    return result;
}
module.exports = equalArrays;

},{"9b110ce138e67ce5":"1SXrY","1ee20de911db0cb0":"aLDHW","defff3d81be91b23":"70cVb"}],"1SXrY":[function(require,module,exports) {
var MapCache = require("10fe37252553d0bd"), setCacheAdd = require("9a831e81e9a1f98c"), setCacheHas = require("1a2b6c8a7399c39f");
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

},{"10fe37252553d0bd":"664I1","9a831e81e9a1f98c":"cZViu","1a2b6c8a7399c39f":"4zNID"}],"cZViu":[function(require,module,exports) {
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
var Symbol = require("474c1df4fc722b40"), Uint8Array = require("dbf6aa5033a0f48"), eq = require("539966708f906e61"), equalArrays = require("8142d4017f0a425f"), mapToArray = require("48cddf732eff33ba"), setToArray = require("9dc78b26c5daba20");
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

},{"474c1df4fc722b40":"7lsL9","dbf6aa5033a0f48":"6xFrA","539966708f906e61":"aVz5f","8142d4017f0a425f":"dQBwf","48cddf732eff33ba":"kAwkU","9dc78b26c5daba20":"2qJif"}],"kAwkU":[function(require,module,exports) {
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
var getAllKeys = require("b911593d305cf4a2");
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

},{"b911593d305cf4a2":"d2kML"}],"48Qyi":[function(require,module,exports) {
var isStrictComparable = require("8ba18052e16e94fb"), keys = require("94ffded3a85af2f6");
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

},{"8ba18052e16e94fb":"lpdGS","94ffded3a85af2f6":"6fHVw"}],"lpdGS":[function(require,module,exports) {
var isObject = require("be1941f960bbf057");
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

},{"be1941f960bbf057":"cGhqJ"}],"a9Bav":[function(require,module,exports) {
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
var baseIsEqual = require("cebe22f5ca0827a7"), get = require("d5ca180f7d6f956a"), hasIn = require("3462bb3f546fa1f7"), isKey = require("f5fef07966a1c4ee"), isStrictComparable = require("2a1cd212d48516"), matchesStrictComparable = require("885e72ee7fc6d296"), toKey = require("cd65eaf4a3af29f6");
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

},{"cebe22f5ca0827a7":"7i3qr","d5ca180f7d6f956a":"8UELX","3462bb3f546fa1f7":"57qii","f5fef07966a1c4ee":"4wPWG","2a1cd212d48516":"lpdGS","885e72ee7fc6d296":"a9Bav","cd65eaf4a3af29f6":"bEgue"}],"57qii":[function(require,module,exports) {
var baseHasIn = require("9fbd4bb192f3f572"), hasPath = require("b0aefd36de99e579");
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

},{"9fbd4bb192f3f572":"in8KZ","b0aefd36de99e579":"4QNMG"}],"in8KZ":[function(require,module,exports) {
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
var baseProperty = require("c7f2d79ee4b1c16a"), basePropertyDeep = require("abf31da39349df22"), isKey = require("a387ef4a4373de2c"), toKey = require("9315973458389ae7");
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

},{"c7f2d79ee4b1c16a":"4HOmE","abf31da39349df22":"c9dhz","a387ef4a4373de2c":"4wPWG","9315973458389ae7":"bEgue"}],"4HOmE":[function(require,module,exports) {
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
var baseGet = require("f0f9f03bc3030d02");
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

},{"f0f9f03bc3030d02":"kMRe3"}],"2WcC0":[function(require,module,exports) {
var baseMerge = require("7b601c4be119b25d"), createAssigner = require("e87a09d93c0fc32d");
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

},{"7b601c4be119b25d":"lMODl","e87a09d93c0fc32d":"7RrvA"}],"lMODl":[function(require,module,exports) {
var Stack = require("49ff021be75c93ea"), assignMergeValue = require("76e9fd6386317324"), baseFor = require("e7dca58bcfe9c669"), baseMergeDeep = require("4ea46d88599071ec"), isObject = require("c52c932be04280cc"), keysIn = require("27adf66142f57b4b"), safeGet = require("564385b2292facea");
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

},{"49ff021be75c93ea":"atP87","76e9fd6386317324":"c7MYR","e7dca58bcfe9c669":"k0bbR","4ea46d88599071ec":"9JvYT","c52c932be04280cc":"cGhqJ","27adf66142f57b4b":"c9sMs","564385b2292facea":"bXTnf"}],"c7MYR":[function(require,module,exports) {
var baseAssignValue = require("30a6c72f04f5134"), eq = require("7d9c95e1ffdd4f16");
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

},{"30a6c72f04f5134":"fprBU","7d9c95e1ffdd4f16":"aVz5f"}],"9JvYT":[function(require,module,exports) {
var assignMergeValue = require("4af3e5b0ee4c14f6"), cloneBuffer = require("ec8e1b90277c5e12"), cloneTypedArray = require("4b1a2b5090faf247"), copyArray = require("d7675bdf0a02bffc"), initCloneObject = require("1067a6f3f6bd5986"), isArguments = require("2238139506f6727b"), isArray = require("290c774b41e416bb"), isArrayLikeObject = require("f481819c40e5b527"), isBuffer = require("6532fda6a198015f"), isFunction = require("7f306c94b573f977"), isObject = require("32c89e763261c579"), isPlainObject = require("ff359d315efefc4f"), isTypedArray = require("61ce92c01fd411fe"), safeGet = require("abfa8f7e72201edb"), toPlainObject = require("c54d414b219fa287");
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

},{"4af3e5b0ee4c14f6":"c7MYR","ec8e1b90277c5e12":"6zXd4","4b1a2b5090faf247":"7eG7Y","d7675bdf0a02bffc":"jJ8fu","1067a6f3f6bd5986":"dG1H0","2238139506f6727b":"8ReNj","290c774b41e416bb":"dZaTH","f481819c40e5b527":"RyRVf","6532fda6a198015f":"cn85h","7f306c94b573f977":"cfti6","32c89e763261c579":"cGhqJ","ff359d315efefc4f":"cvSNF","61ce92c01fd411fe":"6SVKk","abfa8f7e72201edb":"bXTnf","c54d414b219fa287":"9QCta"}],"RyRVf":[function(require,module,exports) {
var isArrayLike = require("9ce7efb3ed8cb283"), isObjectLike = require("639a4883b097af28");
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

},{"9ce7efb3ed8cb283":"gMCbp","639a4883b097af28":"3BLi4"}],"bXTnf":[function(require,module,exports) {
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
var copyObject = require("6377e94c7c46b197"), keysIn = require("437a3e3814017158");
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

},{"6377e94c7c46b197":"gfA7W","437a3e3814017158":"c9sMs"}],"7RrvA":[function(require,module,exports) {
var baseRest = require("b91f3c8e236f389b"), isIterateeCall = require("4f5832110eba92d3");
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

},{"b91f3c8e236f389b":"kd260","4f5832110eba92d3":"7JSn7"}],"7JSn7":[function(require,module,exports) {
var eq = require("a8ec2a011d2eca69"), isArrayLike = require("616bc732534dffe0"), isIndex = require("e781332a36d1bd7"), isObject = require("c8548bf6929b8a5d");
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

},{"a8ec2a011d2eca69":"aVz5f","616bc732534dffe0":"gMCbp","e781332a36d1bd7":"aJpx0","c8548bf6929b8a5d":"cGhqJ"}],"bY5l6":[function(require,module,exports) {
var basePick = require("e13834df88faab8"), flatRest = require("7f4b4cdb31764f87");
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

},{"e13834df88faab8":"3dMQF","7f4b4cdb31764f87":"bmlRd"}],"3dMQF":[function(require,module,exports) {
var basePickBy = require("4620eb0b3c4f1463"), hasIn = require("c697490fd5f67a25");
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

},{"4620eb0b3c4f1463":"kGNmD","c697490fd5f67a25":"57qii"}],"kGNmD":[function(require,module,exports) {
var baseGet = require("d8aa974fba65e61e"), baseSet = require("b07dbab95dca4167"), castPath = require("64b51364f27b9088");
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

},{"d8aa974fba65e61e":"kMRe3","b07dbab95dca4167":"5Mi1g","64b51364f27b9088":"apxk5"}],"5Mi1g":[function(require,module,exports) {
var assignValue = require("a01f3b7ce097c710"), castPath = require("56e0b8a492d56399"), isIndex = require("d1eb8acc5a65dc38"), isObject = require("dfb182b16ef275c0"), toKey = require("6a51dc787ca5b6e3");
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

},{"a01f3b7ce097c710":"5M3eX","56e0b8a492d56399":"apxk5","d1eb8acc5a65dc38":"aJpx0","dfb182b16ef275c0":"cGhqJ","6a51dc787ca5b6e3":"bEgue"}],"bmlRd":[function(require,module,exports) {
var flatten = require("199f7cbd69032298"), overRest = require("aa5c38699e42775a"), setToString = require("6a66c8b3fbd122d5");
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

},{"199f7cbd69032298":"71l7m","aa5c38699e42775a":"16F1z","6a66c8b3fbd122d5":"b5kjI"}],"71l7m":[function(require,module,exports) {
var baseFlatten = require("a35d6abfacb4b52b");
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

},{"a35d6abfacb4b52b":"60rt9"}],"fOndG":[function(require,module,exports) {
var arrayMap = require("6fd113b3f5002de4"), baseIteratee = require("1e32e0d8feab18e"), basePickBy = require("85ba60b03da46517"), getAllKeysIn = require("86922ee5dcf85621");
/**
 * Creates an object composed of the `object` properties `predicate` returns
 * truthy for. The predicate is invoked with two arguments: (value, key).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The source object.
 * @param {Function} [predicate=_.identity] The function invoked per property.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.pickBy(object, _.isNumber);
 * // => { 'a': 1, 'c': 3 }
 */ function pickBy(object, predicate) {
    if (object == null) return {};
    var props = arrayMap(getAllKeysIn(object), function(prop) {
        return [
            prop
        ];
    });
    predicate = baseIteratee(predicate);
    return basePickBy(object, props, function(value, path) {
        return predicate(value, path[0]);
    });
}
module.exports = pickBy;

},{"6fd113b3f5002de4":"imI5Z","1e32e0d8feab18e":"2fsgg","85ba60b03da46517":"kGNmD","86922ee5dcf85621":"6BBOq"}],"uwDF1":[function(require,module,exports) {
var baseSet = require("a003324b62105673");
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

},{"a003324b62105673":"5Mi1g"}],"lX6jB":[function(require,module,exports) {
var createCaseFirst = require("9f71ec962d19127");
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

},{"9f71ec962d19127":"arkB7"}],"arkB7":[function(require,module,exports) {
var castSlice = require("6cc0e53be1623a5f"), hasUnicode = require("e28707473345265"), stringToArray = require("32980b84821a53a0"), toString = require("e00796f8e204e98");
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

},{"6cc0e53be1623a5f":"eHx77","e28707473345265":"b3sZ0","32980b84821a53a0":"dl1Gh","e00796f8e204e98":"joIdQ"}],"eHx77":[function(require,module,exports) {
var baseSlice = require("19fbc2ab8fa927cd");
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

},{"19fbc2ab8fa927cd":"cqqI2"}],"b3sZ0":[function(require,module,exports) {
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
var asciiToArray = require("55ec07d60faf873c"), hasUnicode = require("d3e31b390208b2ca"), unicodeToArray = require("2a468ebcd49732b9");
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

},{"55ec07d60faf873c":"1GB6M","d3e31b390208b2ca":"b3sZ0","2a468ebcd49732b9":"5Z8Ku"}],"1GB6M":[function(require,module,exports) {
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

},{}],"64pIY":[function(require,module,exports) {
var baseUnset = require("f260d72e9d2e6dce");
/**
 * Removes the property at `path` of `object`.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to unset.
 * @returns {boolean} Returns `true` if the property is deleted, else `false`.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 7 } }] };
 * _.unset(object, 'a[0].b.c');
 * // => true
 *
 * console.log(object);
 * // => { 'a': [{ 'b': {} }] };
 *
 * _.unset(object, ['a', '0', 'b', 'c']);
 * // => true
 *
 * console.log(object);
 * // => { 'a': [{ 'b': {} }] };
 */ function unset(object, path) {
    return object == null ? true : baseUnset(object, path);
}
module.exports = unset;

},{"f260d72e9d2e6dce":"lhSCB"}],"lhSCB":[function(require,module,exports) {
var castPath = require("f9ed36b4ad99fc49"), last = require("bbfbe3a50d8efe39"), parent = require("b7b0084465c39aec"), toKey = require("7b9792fcc4179101");
/**
 * The base implementation of `_.unset`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The property path to unset.
 * @returns {boolean} Returns `true` if the property is deleted, else `false`.
 */ function baseUnset(object, path) {
    path = castPath(path, object);
    object = parent(object, path);
    return object == null || delete object[toKey(last(path))];
}
module.exports = baseUnset;

},{"f9ed36b4ad99fc49":"apxk5","bbfbe3a50d8efe39":"fv3GK","b7b0084465c39aec":"1hPE8","7b9792fcc4179101":"bEgue"}],"ivbSK":[function(require,module,exports) {
var createFlow = require("6513737ed544c399");
/**
 * Creates a function that returns the result of invoking the given functions
 * with the `this` binding of the created function, where each successive
 * invocation is supplied the return value of the previous.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Util
 * @param {...(Function|Function[])} [funcs] The functions to invoke.
 * @returns {Function} Returns the new composite function.
 * @see _.flowRight
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * var addSquare = _.flow([_.add, square]);
 * addSquare(1, 2);
 * // => 9
 */ var flow = createFlow();
module.exports = flow;

},{"6513737ed544c399":"9MMzP"}],"9MMzP":[function(require,module,exports) {
var LodashWrapper = require("896a1c8bec2b249e"), flatRest = require("4a2194ae9cc8745e"), getData = require("ce4d495b9cb7f28"), getFuncName = require("2b121606aab8b2b9"), isArray = require("c65a4bf20589b1c2"), isLaziable = require("3377c8e35cb57f18");
/** Error message constants. */ var FUNC_ERROR_TEXT = "Expected a function";
/** Used to compose bitmasks for function metadata. */ var WRAP_CURRY_FLAG = 8, WRAP_PARTIAL_FLAG = 32, WRAP_ARY_FLAG = 128, WRAP_REARG_FLAG = 256;
/**
 * Creates a `_.flow` or `_.flowRight` function.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new flow function.
 */ function createFlow(fromRight) {
    return flatRest(function(funcs) {
        var length = funcs.length, index = length, prereq = LodashWrapper.prototype.thru;
        if (fromRight) funcs.reverse();
        while(index--){
            var func = funcs[index];
            if (typeof func != "function") throw new TypeError(FUNC_ERROR_TEXT);
            if (prereq && !wrapper && getFuncName(func) == "wrapper") var wrapper = new LodashWrapper([], true);
        }
        index = wrapper ? index : length;
        while(++index < length){
            func = funcs[index];
            var funcName = getFuncName(func), data = funcName == "wrapper" ? getData(func) : undefined;
            if (data && isLaziable(data[0]) && data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) && !data[4].length && data[9] == 1) wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
            else wrapper = func.length == 1 && isLaziable(func) ? wrapper[funcName]() : wrapper.thru(func);
        }
        return function() {
            var args = arguments, value = args[0];
            if (wrapper && args.length == 1 && isArray(value)) return wrapper.plant(value).value();
            var index = 0, result = length ? funcs[index].apply(this, args) : value;
            while(++index < length)result = funcs[index].call(this, result);
            return result;
        };
    });
}
module.exports = createFlow;

},{"896a1c8bec2b249e":"32oxQ","4a2194ae9cc8745e":"bmlRd","ce4d495b9cb7f28":"2DAAe","2b121606aab8b2b9":"8QrGg","c65a4bf20589b1c2":"dZaTH","3377c8e35cb57f18":"g1x7m"}],"32oxQ":[function(require,module,exports) {
var baseCreate = require("1f2f5be1a3c6d678"), baseLodash = require("2c2205c836afd08b");
/**
 * The base constructor for creating `lodash` wrapper objects.
 *
 * @private
 * @param {*} value The value to wrap.
 * @param {boolean} [chainAll] Enable explicit method chain sequences.
 */ function LodashWrapper(value, chainAll) {
    this.__wrapped__ = value;
    this.__actions__ = [];
    this.__chain__ = !!chainAll;
    this.__index__ = 0;
    this.__values__ = undefined;
}
LodashWrapper.prototype = baseCreate(baseLodash.prototype);
LodashWrapper.prototype.constructor = LodashWrapper;
module.exports = LodashWrapper;

},{"1f2f5be1a3c6d678":"ef1VZ","2c2205c836afd08b":"dVpqq"}],"dVpqq":[function(require,module,exports) {
/**
 * The function whose prototype chain sequence wrappers inherit from.
 *
 * @private
 */ function baseLodash() {
// No operation performed.
}
module.exports = baseLodash;

},{}],"2DAAe":[function(require,module,exports) {
var metaMap = require("64c6b8282a70671c"), noop = require("19698e8556ad5081");
/**
 * Gets metadata for `func`.
 *
 * @private
 * @param {Function} func The function to query.
 * @returns {*} Returns the metadata for `func`.
 */ var getData = !metaMap ? noop : function(func) {
    return metaMap.get(func);
};
module.exports = getData;

},{"64c6b8282a70671c":"aUcED","19698e8556ad5081":"dSFAq"}],"aUcED":[function(require,module,exports) {
var WeakMap = require("e4c0cdd8d94afe67");
/** Used to store function metadata. */ var metaMap = WeakMap && new WeakMap;
module.exports = metaMap;

},{"e4c0cdd8d94afe67":"av50V"}],"dSFAq":[function(require,module,exports) {
/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */ function noop() {
// No operation performed.
}
module.exports = noop;

},{}],"8QrGg":[function(require,module,exports) {
var realNames = require("14ca6afa60113322");
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Gets the name of `func`.
 *
 * @private
 * @param {Function} func The function to query.
 * @returns {string} Returns the function name.
 */ function getFuncName(func) {
    var result = func.name + "", array = realNames[result], length = hasOwnProperty.call(realNames, result) ? array.length : 0;
    while(length--){
        var data = array[length], otherFunc = data.func;
        if (otherFunc == null || otherFunc == func) return data.name;
    }
    return result;
}
module.exports = getFuncName;

},{"14ca6afa60113322":"3Mfyk"}],"3Mfyk":[function(require,module,exports) {
/** Used to lookup unminified function names. */ var realNames = {};
module.exports = realNames;

},{}],"g1x7m":[function(require,module,exports) {
var LazyWrapper = require("56693ece680765d7"), getData = require("60c1c90169f6a5fe"), getFuncName = require("c8348f842539c358"), lodash = require("81fdf3ae1e47ec3e");
/**
 * Checks if `func` has a lazy counterpart.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` has a lazy counterpart,
 *  else `false`.
 */ function isLaziable(func) {
    var funcName = getFuncName(func), other = lodash[funcName];
    if (typeof other != "function" || !(funcName in LazyWrapper.prototype)) return false;
    if (func === other) return true;
    var data = getData(other);
    return !!data && func === data[0];
}
module.exports = isLaziable;

},{"56693ece680765d7":"jPVpf","60c1c90169f6a5fe":"2DAAe","c8348f842539c358":"8QrGg","81fdf3ae1e47ec3e":"9NCzx"}],"jPVpf":[function(require,module,exports) {
var baseCreate = require("e4056cbc3b9903bd"), baseLodash = require("3dfa16f8f7f9ba49");
/** Used as references for the maximum length and index of an array. */ var MAX_ARRAY_LENGTH = 4294967295;
/**
 * Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
 *
 * @private
 * @constructor
 * @param {*} value The value to wrap.
 */ function LazyWrapper(value) {
    this.__wrapped__ = value;
    this.__actions__ = [];
    this.__dir__ = 1;
    this.__filtered__ = false;
    this.__iteratees__ = [];
    this.__takeCount__ = MAX_ARRAY_LENGTH;
    this.__views__ = [];
}
// Ensure `LazyWrapper` is an instance of `baseLodash`.
LazyWrapper.prototype = baseCreate(baseLodash.prototype);
LazyWrapper.prototype.constructor = LazyWrapper;
module.exports = LazyWrapper;

},{"e4056cbc3b9903bd":"ef1VZ","3dfa16f8f7f9ba49":"dVpqq"}],"9NCzx":[function(require,module,exports) {
var LazyWrapper = require("e957c6a134f81ad3"), LodashWrapper = require("dc12267c6e1ac251"), baseLodash = require("2e62ee2285f7942e"), isArray = require("7d71cf75ddd5142"), isObjectLike = require("31691bc364b8b2af"), wrapperClone = require("d2329b4b44e63943");
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Creates a `lodash` object which wraps `value` to enable implicit method
 * chain sequences. Methods that operate on and return arrays, collections,
 * and functions can be chained together. Methods that retrieve a single value
 * or may return a primitive value will automatically end the chain sequence
 * and return the unwrapped value. Otherwise, the value must be unwrapped
 * with `_#value`.
 *
 * Explicit chain sequences, which must be unwrapped with `_#value`, may be
 * enabled using `_.chain`.
 *
 * The execution of chained methods is lazy, that is, it's deferred until
 * `_#value` is implicitly or explicitly called.
 *
 * Lazy evaluation allows several methods to support shortcut fusion.
 * Shortcut fusion is an optimization to merge iteratee calls; this avoids
 * the creation of intermediate arrays and can greatly reduce the number of
 * iteratee executions. Sections of a chain sequence qualify for shortcut
 * fusion if the section is applied to an array and iteratees accept only
 * one argument. The heuristic for whether a section qualifies for shortcut
 * fusion is subject to change.
 *
 * Chaining is supported in custom builds as long as the `_#value` method is
 * directly or indirectly included in the build.
 *
 * In addition to lodash methods, wrappers have `Array` and `String` methods.
 *
 * The wrapper `Array` methods are:
 * `concat`, `join`, `pop`, `push`, `shift`, `sort`, `splice`, and `unshift`
 *
 * The wrapper `String` methods are:
 * `replace` and `split`
 *
 * The wrapper methods that support shortcut fusion are:
 * `at`, `compact`, `drop`, `dropRight`, `dropWhile`, `filter`, `find`,
 * `findLast`, `head`, `initial`, `last`, `map`, `reject`, `reverse`, `slice`,
 * `tail`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, and `toArray`
 *
 * The chainable wrapper methods are:
 * `after`, `ary`, `assign`, `assignIn`, `assignInWith`, `assignWith`, `at`,
 * `before`, `bind`, `bindAll`, `bindKey`, `castArray`, `chain`, `chunk`,
 * `commit`, `compact`, `concat`, `conforms`, `constant`, `countBy`, `create`,
 * `curry`, `debounce`, `defaults`, `defaultsDeep`, `defer`, `delay`,
 * `difference`, `differenceBy`, `differenceWith`, `drop`, `dropRight`,
 * `dropRightWhile`, `dropWhile`, `extend`, `extendWith`, `fill`, `filter`,
 * `flatMap`, `flatMapDeep`, `flatMapDepth`, `flatten`, `flattenDeep`,
 * `flattenDepth`, `flip`, `flow`, `flowRight`, `fromPairs`, `functions`,
 * `functionsIn`, `groupBy`, `initial`, `intersection`, `intersectionBy`,
 * `intersectionWith`, `invert`, `invertBy`, `invokeMap`, `iteratee`, `keyBy`,
 * `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`, `matchesProperty`,
 * `memoize`, `merge`, `mergeWith`, `method`, `methodOf`, `mixin`, `negate`,
 * `nthArg`, `omit`, `omitBy`, `once`, `orderBy`, `over`, `overArgs`,
 * `overEvery`, `overSome`, `partial`, `partialRight`, `partition`, `pick`,
 * `pickBy`, `plant`, `property`, `propertyOf`, `pull`, `pullAll`, `pullAllBy`,
 * `pullAllWith`, `pullAt`, `push`, `range`, `rangeRight`, `rearg`, `reject`,
 * `remove`, `rest`, `reverse`, `sampleSize`, `set`, `setWith`, `shuffle`,
 * `slice`, `sort`, `sortBy`, `splice`, `spread`, `tail`, `take`, `takeRight`,
 * `takeRightWhile`, `takeWhile`, `tap`, `throttle`, `thru`, `toArray`,
 * `toPairs`, `toPairsIn`, `toPath`, `toPlainObject`, `transform`, `unary`,
 * `union`, `unionBy`, `unionWith`, `uniq`, `uniqBy`, `uniqWith`, `unset`,
 * `unshift`, `unzip`, `unzipWith`, `update`, `updateWith`, `values`,
 * `valuesIn`, `without`, `wrap`, `xor`, `xorBy`, `xorWith`, `zip`,
 * `zipObject`, `zipObjectDeep`, and `zipWith`
 *
 * The wrapper methods that are **not** chainable by default are:
 * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clamp`, `clone`,
 * `cloneDeep`, `cloneDeepWith`, `cloneWith`, `conformsTo`, `deburr`,
 * `defaultTo`, `divide`, `each`, `eachRight`, `endsWith`, `eq`, `escape`,
 * `escapeRegExp`, `every`, `find`, `findIndex`, `findKey`, `findLast`,
 * `findLastIndex`, `findLastKey`, `first`, `floor`, `forEach`, `forEachRight`,
 * `forIn`, `forInRight`, `forOwn`, `forOwnRight`, `get`, `gt`, `gte`, `has`,
 * `hasIn`, `head`, `identity`, `includes`, `indexOf`, `inRange`, `invoke`,
 * `isArguments`, `isArray`, `isArrayBuffer`, `isArrayLike`, `isArrayLikeObject`,
 * `isBoolean`, `isBuffer`, `isDate`, `isElement`, `isEmpty`, `isEqual`,
 * `isEqualWith`, `isError`, `isFinite`, `isFunction`, `isInteger`, `isLength`,
 * `isMap`, `isMatch`, `isMatchWith`, `isNaN`, `isNative`, `isNil`, `isNull`,
 * `isNumber`, `isObject`, `isObjectLike`, `isPlainObject`, `isRegExp`,
 * `isSafeInteger`, `isSet`, `isString`, `isUndefined`, `isTypedArray`,
 * `isWeakMap`, `isWeakSet`, `join`, `kebabCase`, `last`, `lastIndexOf`,
 * `lowerCase`, `lowerFirst`, `lt`, `lte`, `max`, `maxBy`, `mean`, `meanBy`,
 * `min`, `minBy`, `multiply`, `noConflict`, `noop`, `now`, `nth`, `pad`,
 * `padEnd`, `padStart`, `parseInt`, `pop`, `random`, `reduce`, `reduceRight`,
 * `repeat`, `result`, `round`, `runInContext`, `sample`, `shift`, `size`,
 * `snakeCase`, `some`, `sortedIndex`, `sortedIndexBy`, `sortedLastIndex`,
 * `sortedLastIndexBy`, `startCase`, `startsWith`, `stubArray`, `stubFalse`,
 * `stubObject`, `stubString`, `stubTrue`, `subtract`, `sum`, `sumBy`,
 * `template`, `times`, `toFinite`, `toInteger`, `toJSON`, `toLength`,
 * `toLower`, `toNumber`, `toSafeInteger`, `toString`, `toUpper`, `trim`,
 * `trimEnd`, `trimStart`, `truncate`, `unescape`, `uniqueId`, `upperCase`,
 * `upperFirst`, `value`, and `words`
 *
 * @name _
 * @constructor
 * @category Seq
 * @param {*} value The value to wrap in a `lodash` instance.
 * @returns {Object} Returns the new `lodash` wrapper instance.
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * var wrapped = _([1, 2, 3]);
 *
 * // Returns an unwrapped value.
 * wrapped.reduce(_.add);
 * // => 6
 *
 * // Returns a wrapped value.
 * var squares = wrapped.map(square);
 *
 * _.isArray(squares);
 * // => false
 *
 * _.isArray(squares.value());
 * // => true
 */ function lodash(value) {
    if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
        if (value instanceof LodashWrapper) return value;
        if (hasOwnProperty.call(value, "__wrapped__")) return wrapperClone(value);
    }
    return new LodashWrapper(value);
}
// Ensure wrappers are instances of `baseLodash`.
lodash.prototype = baseLodash.prototype;
lodash.prototype.constructor = lodash;
module.exports = lodash;

},{"e957c6a134f81ad3":"jPVpf","dc12267c6e1ac251":"32oxQ","2e62ee2285f7942e":"dVpqq","7d71cf75ddd5142":"dZaTH","31691bc364b8b2af":"3BLi4","d2329b4b44e63943":"357TO"}],"357TO":[function(require,module,exports) {
var LazyWrapper = require("c911f6aa155b3acf"), LodashWrapper = require("8e63eae4d3286327"), copyArray = require("633c60334a2eb5ec");
/**
 * Creates a clone of `wrapper`.
 *
 * @private
 * @param {Object} wrapper The wrapper to clone.
 * @returns {Object} Returns the cloned wrapper.
 */ function wrapperClone(wrapper) {
    if (wrapper instanceof LazyWrapper) return wrapper.clone();
    var result = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
    result.__actions__ = copyArray(wrapper.__actions__);
    result.__index__ = wrapper.__index__;
    result.__values__ = wrapper.__values__;
    return result;
}
module.exports = wrapperClone;

},{"c911f6aa155b3acf":"jPVpf","8e63eae4d3286327":"32oxQ","633c60334a2eb5ec":"jJ8fu"}],"lOYjM":[function(require,module,exports) {
const Compose = require("2ea92accbcaacc01");
const Options = require("a838d4e7af7c6d2");
const extensions = require("754aebaf71e42061");
const util = require("cebcd99dc9590105");
module.exports = (target, constants = {}, userOptions = {})=>{
    if (!util.isPlainObject(target)) throw new Error("target must be a plain object");
    const targetModules = util.pickBy(target, util.isPlainObject);
    const defaultOptions = Options();
    const options = {
        ...defaultOptions,
        ...userOptions
    };
    const state = {
        ended: false,
        dependencies: util.mapValues(targetModules, ()=>[]),
        composedDependencies: {},
        modules: {
            ...targetModules
        },
        extensions: {}
    };
    const external = {
        defaultOptions,
        userOptions,
        options,
        target,
        targetModules,
        constants
    };
    const session = {
        external: {
            ...state,
            ...external
        },
        state,
        ...external
    };
    const { compose , precomposers , postcomposers , ...functions } = extensions.setup(session, Compose(session));
    const registerModule = (path, module1, deps)=>{
        util.set(state.modules, path, module1);
        const depKeys = Object.keys(deps).filter((k)=>k !== path);
        state.dependencies[path] = state.composedDependencies[path] = depKeys;
        return state.modules;
    };
    Object.assign(session.external, functions);
    return Object.assign(session, {
        compose,
        registerModule,
        precomposers,
        postcomposers
    });
};

},{"2ea92accbcaacc01":"d2JBp","a838d4e7af7c6d2":"3KDf7","754aebaf71e42061":"kPKF9","cebcd99dc9590105":"6vriZ"}],"d2JBp":[function(require,module,exports) {
const util = require("c6bf795e616d4e40");
module.exports = (session)=>(path, deps, args, opts)=>{
        const options = util.merge({}, session.options, opts);
        const { depth , customiser , overrides  } = options;
        const recurse = (target, parentPath, deps, currentDepth = 0)=>{
            if (currentDepth === depth) return target;
            if (!util.isPlainObject(target)) return target;
            const self = {};
            const { constants  } = session;
            const depsMod = util.set({
                self,
                constants,
                ...deps
            }, parentPath, self);
            const evaluate = (val, key)=>util.isPlainFunction(val) ? val(depsMod, args) : recurse(val, [
                    parentPath,
                    key
                ].join("."), depsMod, currentDepth + 1);
            return Object.assign(self, util.mapValues(target, evaluate));
        };
        if (!path) throw new Error("key is required");
        if (!util.has(session.target, path)) throw new Error(`${path} not found`);
        const target = util.get(session.target, path);
        if (!util.isPlainObject(target)) throw new Error(`${path} must be a plain object`);
        if (session.state.composedDependencies[path]) throw new Error(`${path} is already composed`);
        const maybePromise = util.flow([
            ...session.precomposers.map((func)=>(target)=>func(path, target, options)),
            (target)=>recurse(target, path, deps),
            (target)=>util.has(target, customiser) ? util.invoke(target, customiser, args) : target
        ])(target);
        const next = (target)=>{
            if (customiser && !util.isPlainObject(target)) throw new Error(`${path}.${customiser} must return a plain object`);
            return util.flow([
                (target)=>util.merge(target, util.get(overrides, path)),
                ...session.postcomposers.map((func)=>(target)=>func(path, target, options)),
                (target)=>session.registerModule(path, target, deps)
            ])(target);
        };
        return util.isPromise(maybePromise) ? maybePromise.then(next) : next(maybePromise);
    };

},{"c6bf795e616d4e40":"6vriZ"}],"3KDf7":[function(require,module,exports) {
module.exports = ()=>{
    return {
        depth: 1,
        customiser: "setup",
        publicPrefix: "$",
        privatePrefix: "_",
        overrides: {},
        extensions: true
    };
};

},{}],"kPKF9":[function(require,module,exports) {
const util = require("8b50e2ba17832f60");
const polystruct = require("7cc2ee15f3ccb4f7");
const stateContainer = globalThis;
if (!stateContainer.moduleComposer) stateContainer.moduleComposer = {
    extensions: {}
};
const register = (name, extension)=>Object.assign(stateContainer.moduleComposer.extensions, {
        [name]: extension
    });
const setup = (session, compose)=>{
    const extensionNames = Object.keys(stateContainer.moduleComposer.extensions);
    const extensions = polystruct(session.options.extensions, extensionNames);
    return Object.entries(extensions).reduce((acc, [name, config])=>{
        if (!config.enabled) return acc;
        const ext = stateContainer.moduleComposer.extensions[name];
        const getState = ()=>session.state.extensions[name];
        const setState = (state)=>util.set(session.state.extensions, name, {
                ...getState(),
                ...state
            });
        const arg = {
            ...session,
            getState,
            setState
        };
        const { compose , precompose , postcompose , ...functions } = util.mapValues(ext, (func)=>func(arg, config));
        if (compose) acc.compose = compose(acc.compose);
        if (precompose) acc.precomposers.push(precompose);
        if (postcompose) acc.postcomposers.push(postcompose);
        return {
            ...acc,
            ...functions
        };
    }, {
        compose,
        precomposers: [],
        postcomposers: []
    });
};
module.exports = {
    register,
    setup
};

},{"8b50e2ba17832f60":"6vriZ","7cc2ee15f3ccb4f7":"8NZvG"}],"8NZvG":[function(require,module,exports) {
const defaultOptions = {
    key: null,
    enabled: "enabled"
};
module.exports = (val, ref, options = {})=>{
    const opt = {
        ...defaultOptions,
        ...options
    };
    const refobj = Array.isArray(ref) ? Object.fromEntries(ref.map((el)=>[
            el,
            {}
        ])) : ref;
    const polystruct = {
        any: (val)=>{
            if (!val) return polystruct.any([], ref);
            if (Array.isArray(val)) return polystruct.arr(val);
            if (val.constructor === Object) return polystruct.obj(val);
            return polystruct.any(Object.keys(refobj));
        },
        arr: (arr)=>{
            return polystruct.any(Object.fromEntries(arr.map((el)=>{
                if (el.constructor === String) return [
                    el,
                    true
                ];
                if (Array.isArray(el)) {
                    const [key, val] = el;
                    if (!val) return [
                        key,
                        false
                    ];
                    if (val.constructor === Object) return [
                        key,
                        val
                    ];
                    return [
                        key,
                        true
                    ];
                }
            })));
        },
        obj: (obj)=>{
            const maybeKey = (key)=>opt.key ? {
                    [opt.key]: key
                } : {};
            return Object.fromEntries(Object.entries(refobj).map(([key, refobj])=>{
                const res = (enabled)=>[
                        key,
                        {
                            ...refobj,
                            ...val,
                            [opt.enabled]: enabled,
                            ...maybeKey(key)
                        }
                    ];
                const val = obj[key];
                if (!val) return res(false);
                if (val.constructor === Object) return res(opt.enabled in val ? !!val[opt.enabled] : true);
                return res(true);
            }));
        }
    };
    return polystruct.any(val);
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
    vendorComponents: (0, _indexJsDefault13.default)
};

},{"./components/index.js":"5Vwqi","./core/index.js":"2t7rH","./diagnostics/index.js":"7v5OQ","./elements/index.js":"dUALu","./io/index.js":"gzusB","./services/index.js":"7hTpP","./startup/index.js":"biIre","./storage/index.js":"gwOCy","./stores/index.js":"hBLcV","./styles/index.js":"jhMVz","./subscriptions/index.js":"2WyoC","./ui/index.js":"8WMoJ","./util/index.js":"hjXAO","./vendor-components/index.js":"i3Vn4","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5Vwqi":[function(require,module,exports) {
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
exports.default = ({ io , ui , components , subscriptions  })=>()=>{
        io.mixpanel.track("pageview");
        const $$modals = Object.values(components.modals).map((modal)=>modal());
        const $container = ui.el("div", "app").append(ui.el("div", "modals").append(...$$modals), components.header.container(), components.dropzone().append(ui.el("div", "control-panel").append(components.imageUploadOptions.container(), components.roleList.container(), components.optionsBar.container()), components.tagList.container()));
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
exports.default = ({ ui , components  })=>()=>{
        return ui.el("div").append(components.gravatar.actions.importButton(), components.gravatar.actions.loading(), components.gravatar.actions.error());
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
exports.default = ({ ui , components  })=>()=>{
        return ui.el("div", "gravatar").append(components.gravatar.content.freetext(), components.gravatar.content.fallbacks());
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
exports.default = ({ ui , components , elements , constants  })=>()=>{
        const $$fallbackOptions = constants.gravatar.fallbacks.map(components.gravatar.content.fallback);
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
exports.default = ({ ui , components  })=>()=>{
        return ui.el("header").append(components.header.titleBar());
    };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2fEjb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ({ services , ui , constants  })=>()=>{
        const $tips = ui.el("a", "tips", {
            textContent: "Tips & tricks"
        }).addEventListener("click", ()=>{
            services.settings.changeModal("tips");
        });
        const $issues = ui.el("a", {
            textContent: "Send feedback",
            target: "_blank",
            href: constants.app.issues
        });
        const $source = ui.el("a", {
            textContent: "Source code",
            target: "_blank",
            href: constants.app.source
        });
        const $devBar = ui.el("dev-bar").append($tips, $issues, $source);
        $devBar.setAttribute("app-name", constants.app.name);
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
exports.default = ({ ui , components  })=>()=>{
        return ui.el("div", "image-upload-options").append(ui.el("span", {
            textContent: "Drag & drop images"
        }), components.imageUploadOptions.chooseImages(), components.imageUploadOptions.gravatar());
    };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dv5xf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ({ ui , services , io  })=>()=>{
        return ui.el("a", {
            textContent: "Import images from Gravatar"
        }).addEventListener("click", ()=>{
            io.mixpanel.track("gravatar-import");
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
exports.default = ({ ui , components , services , constants  })=>()=>{
        const $heading = ui.el("h1", "welcome-title", {
            textContent: `Welcome to ${constants.app.name}`
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
exports.default = ({ components , elements , subscriptions , ui , constants  })=>()=>{
        const $optionsBar = elements.layout({
            layout: constants.options.layout,
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
exports.default = ({ elements , services , subscriptions , util , constants  })=>(optionName)=>{
        const { min , max , step  } = constants.options[optionName];
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
exports.default = ({ ui , components , constants  })=>()=>{
        const $$modes = constants.options.modes.map(components.optionsBar.numberOption);
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
exports.default = ({ ui , components , constants  })=>()=>{
        const $$shapes = constants.options.shapes.map(components.optionsBar.shapeOption);
        return ui.el("span").append(...$$shapes);
    };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"abFvJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ({ components  })=>()=>components.optionsBar.numberOption("size");

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iUrfQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ({ ui , elements , services , subscriptions , constants  })=>()=>{
        const $$options = Object.entries(constants.options.sort).map(([value, textContent])=>{
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
exports.default = ({ ui , subscriptions , services , constants  })=>(shapeName)=>{
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
        const borderRadius = constants.options.shapeRadius[shapeName] || 0;
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
exports.default = ({ ui , components , subscriptions  })=>()=>{
        const $roleList = ui.el("div", "role-list visible-false");
        subscriptions.roles.onInsert((roleId)=>{
            const $role = components.roleList.roleCustomiser.container(roleId);
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
exports.default = ({ ui , components , services  })=>(roleId)=>{
        const $masterRoleName = components.roleList.roleCustomiser.masterRoleName(roleId);
        const $colorPicker = components.roleList.roleCustomiser.roleColorPicker(roleId);
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
exports.default = ({ ui , components , services , subscriptions , util , constants  })=>()=>{
        const $$tags = new Map();
        const $tags = ui.el("div", "tag-list");
        subscriptions.tagInstances.onInsert((tagInstanceId)=>{
            const $tag = components.tagList.tag.container(tagInstanceId);
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
        const delayedSort = util.debounce(sort, constants.debounce.sortTagList);
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
exports.default = ({ ui , components , elements , services , subscriptions , constants  })=>(tagInstanceId)=>{
        const $layout = elements.layout({
            layout: constants.tags.layout,
            components: components.tagList.tag.components,
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
exports.default = ({ core , constants  })=>(email, defaultImage)=>{
        const { domain , size  } = constants.gravatar;
        const emailHash = core.gravatar.hashEmail(email);
        return `${domain}/avatar/${emailHash}?r=g&s=${size}&d=${defaultImage}`;
    }; /* FOOTNOTES

Gravatar image requests: 
https://en.gravatar.com/site/implement/images/

*/ 

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bGawQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ({ constants , core  })=>(email)=>{
        const { domain  } = constants.gravatar;
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
/*
 * JavaScript MD5
 * https://github.com/blueimp/JavaScript-MD5
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 *
 * Based on
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */ /* global define */ (function($) {
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
    else if (0, module.exports) module.exports = md5;
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
exports.default = ({ core , constants  })=>(randomNumber)=>(roleData)=>{
            const presetColor = constants.roles.presetColors[roleData.roleName];
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
exports.default = ({ core , util  })=>(roleData, randomNumber)=>{
        const transformRoleName = (roleData)=>{
            const roleName = (roleData.roleName || "").trim().toUpperCase();
            return {
                ...roleData,
                roleName
            };
        };
        return util.pipe(transformRoleName, core.roles.assignColor(randomNumber))(roleData);
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
exports.default = ({ constants  })=>(tags, getTagInstance)=>{
        return tags.flatMap((tag)=>{
            return constants.options.modes.flatMap((mode)=>{
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
        const { title , content , actions , visible , onVisibilityChange  } = {
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
        toggleVisibility(visible);
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
var _mixpanelBrowser = require("mixpanel-browser");
var _mixpanelBrowserDefault = parcelHelpers.interopDefault(_mixpanelBrowser);
exports.default = ({ window , constants  })=>()=>{
        constants.mixpanelToken && (0, _mixpanelBrowserDefault.default).init(constants.mixpanelToken, {
            debug: constants.isTest
        });
        return {
            mixpanel: (0, _mixpanelBrowserDefault.default),
            date: ()=>new window.Date(),
            fetch: (...args)=>window.fetch(...args),
            random: ()=>window.Math.random(),
            fileReader: ()=>new window.FileReader()
        };
    };

},{"mixpanel-browser":"8dai4","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8dai4":[function(require,module,exports) {
"use strict";
var Config = {
    DEBUG: false,
    LIB_VERSION: "2.47.0"
};
// since es6 imports are static and we run unit tests from the console, window won't be defined when importing this file
var window$1;
if (typeof window === "undefined") {
    var loc = {
        hostname: ""
    };
    window$1 = {
        navigator: {
            userAgent: ""
        },
        document: {
            location: loc,
            referrer: ""
        },
        screen: {
            width: 0,
            height: 0
        },
        location: loc
    };
} else window$1 = window;
/*
 * Saved references to long variable names, so that closure compiler can
 * minimize file size.
 */ var ArrayProto = Array.prototype;
var FuncProto = Function.prototype;
var ObjProto = Object.prototype;
var slice = ArrayProto.slice;
var toString = ObjProto.toString;
var hasOwnProperty = ObjProto.hasOwnProperty;
var windowConsole = window$1.console;
var navigator = window$1.navigator;
var document$1 = window$1.document;
var windowOpera = window$1.opera;
var screen = window$1.screen;
var userAgent = navigator.userAgent;
var nativeBind = FuncProto.bind;
var nativeForEach = ArrayProto.forEach;
var nativeIndexOf = ArrayProto.indexOf;
var nativeMap = ArrayProto.map;
var nativeIsArray = Array.isArray;
var breaker = {};
var _ = {
    trim: function(str) {
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim#Polyfill
        return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
    }
};
// Console override
var console = {
    /** @type {function(...*)} */ log: function() {
        if (Config.DEBUG && !_.isUndefined(windowConsole) && windowConsole) try {
            windowConsole.log.apply(windowConsole, arguments);
        } catch (err) {
            _.each(arguments, function(arg) {
                windowConsole.log(arg);
            });
        }
    },
    /** @type {function(...*)} */ warn: function() {
        if (Config.DEBUG && !_.isUndefined(windowConsole) && windowConsole) {
            var args = [
                "Mixpanel warning:"
            ].concat(_.toArray(arguments));
            try {
                windowConsole.warn.apply(windowConsole, args);
            } catch (err) {
                _.each(args, function(arg) {
                    windowConsole.warn(arg);
                });
            }
        }
    },
    /** @type {function(...*)} */ error: function() {
        if (Config.DEBUG && !_.isUndefined(windowConsole) && windowConsole) {
            var args = [
                "Mixpanel error:"
            ].concat(_.toArray(arguments));
            try {
                windowConsole.error.apply(windowConsole, args);
            } catch (err) {
                _.each(args, function(arg) {
                    windowConsole.error(arg);
                });
            }
        }
    },
    /** @type {function(...*)} */ critical: function() {
        if (!_.isUndefined(windowConsole) && windowConsole) {
            var args = [
                "Mixpanel error:"
            ].concat(_.toArray(arguments));
            try {
                windowConsole.error.apply(windowConsole, args);
            } catch (err) {
                _.each(args, function(arg) {
                    windowConsole.error(arg);
                });
            }
        }
    }
};
var log_func_with_prefix = function(func, prefix) {
    return function() {
        arguments[0] = "[" + prefix + "] " + arguments[0];
        return func.apply(console, arguments);
    };
};
var console_with_prefix = function(prefix) {
    return {
        log: log_func_with_prefix(console.log, prefix),
        error: log_func_with_prefix(console.error, prefix),
        critical: log_func_with_prefix(console.critical, prefix)
    };
};
// UNDERSCORE
// Embed part of the Underscore Library
_.bind = function(func, context) {
    var args, bound;
    if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
    if (!_.isFunction(func)) throw new TypeError();
    args = slice.call(arguments, 2);
    bound = function() {
        if (!(this instanceof bound)) return func.apply(context, args.concat(slice.call(arguments)));
        var ctor = {};
        ctor.prototype = func.prototype;
        var self = new ctor();
        ctor.prototype = null;
        var result = func.apply(self, args.concat(slice.call(arguments)));
        if (Object(result) === result) return result;
        return self;
    };
    return bound;
};
/**
 * @param {*=} obj
 * @param {function(...*)=} iterator
 * @param {Object=} context
 */ _.each = function(obj, iterator, context) {
    if (obj === null || obj === undefined) return;
    if (nativeForEach && obj.forEach === nativeForEach) obj.forEach(iterator, context);
    else if (obj.length === +obj.length) for(var i = 0, l = obj.length; i < l; i++){
        if (i in obj && iterator.call(context, obj[i], i, obj) === breaker) return;
    }
    else {
        for(var key in obj)if (hasOwnProperty.call(obj, key)) {
            if (iterator.call(context, obj[key], key, obj) === breaker) return;
        }
    }
};
_.extend = function(obj) {
    _.each(slice.call(arguments, 1), function(source) {
        for(var prop in source)if (source[prop] !== void 0) obj[prop] = source[prop];
    });
    return obj;
};
_.isArray = nativeIsArray || function(obj) {
    return toString.call(obj) === "[object Array]";
};
// from a comment on http://dbj.org/dbj/?p=286
// fails on only one very rare and deliberate custom object:
// var bomb = { toString : undefined, valueOf: function(o) { return "function BOMBA!"; }};
_.isFunction = function(f) {
    try {
        return /^\s*\bfunction\b/.test(f);
    } catch (x) {
        return false;
    }
};
_.isArguments = function(obj) {
    return !!(obj && hasOwnProperty.call(obj, "callee"));
};
_.toArray = function(iterable) {
    if (!iterable) return [];
    if (iterable.toArray) return iterable.toArray();
    if (_.isArray(iterable)) return slice.call(iterable);
    if (_.isArguments(iterable)) return slice.call(iterable);
    return _.values(iterable);
};
_.map = function(arr, callback, context) {
    if (nativeMap && arr.map === nativeMap) return arr.map(callback, context);
    else {
        var results = [];
        _.each(arr, function(item) {
            results.push(callback.call(context, item));
        });
        return results;
    }
};
_.keys = function(obj) {
    var results = [];
    if (obj === null) return results;
    _.each(obj, function(value, key) {
        results[results.length] = key;
    });
    return results;
};
_.values = function(obj) {
    var results = [];
    if (obj === null) return results;
    _.each(obj, function(value) {
        results[results.length] = value;
    });
    return results;
};
_.include = function(obj, target) {
    var found = false;
    if (obj === null) return found;
    if (nativeIndexOf && obj.indexOf === nativeIndexOf) return obj.indexOf(target) != -1;
    _.each(obj, function(value) {
        if (found || (found = value === target)) return breaker;
    });
    return found;
};
_.includes = function(str, needle) {
    return str.indexOf(needle) !== -1;
};
// Underscore Addons
_.inherit = function(subclass, superclass) {
    subclass.prototype = new superclass();
    subclass.prototype.constructor = subclass;
    subclass.superclass = superclass.prototype;
    return subclass;
};
_.isObject = function(obj) {
    return obj === Object(obj) && !_.isArray(obj);
};
_.isEmptyObject = function(obj) {
    if (_.isObject(obj)) {
        for(var key in obj){
            if (hasOwnProperty.call(obj, key)) return false;
        }
        return true;
    }
    return false;
};
_.isUndefined = function(obj) {
    return obj === void 0;
};
_.isString = function(obj) {
    return toString.call(obj) == "[object String]";
};
_.isDate = function(obj) {
    return toString.call(obj) == "[object Date]";
};
_.isNumber = function(obj) {
    return toString.call(obj) == "[object Number]";
};
_.isElement = function(obj) {
    return !!(obj && obj.nodeType === 1);
};
_.encodeDates = function(obj) {
    _.each(obj, function(v, k) {
        if (_.isDate(v)) obj[k] = _.formatDate(v);
        else if (_.isObject(v)) obj[k] = _.encodeDates(v); // recurse
    });
    return obj;
};
_.timestamp = function() {
    Date.now = Date.now || function() {
        return +new Date;
    };
    return Date.now();
};
_.formatDate = function(d) {
    // YYYY-MM-DDTHH:MM:SS in UTC
    function pad(n) {
        return n < 10 ? "0" + n : n;
    }
    return d.getUTCFullYear() + "-" + pad(d.getUTCMonth() + 1) + "-" + pad(d.getUTCDate()) + "T" + pad(d.getUTCHours()) + ":" + pad(d.getUTCMinutes()) + ":" + pad(d.getUTCSeconds());
};
_.strip_empty_properties = function(p) {
    var ret = {};
    _.each(p, function(v, k) {
        if (_.isString(v) && v.length > 0) ret[k] = v;
    });
    return ret;
};
/*
 * this function returns a copy of object after truncating it.  If
 * passed an Array or Object it will iterate through obj and
 * truncate all the values recursively.
 */ _.truncate = function(obj, length) {
    var ret;
    if (typeof obj === "string") ret = obj.slice(0, length);
    else if (_.isArray(obj)) {
        ret = [];
        _.each(obj, function(val) {
            ret.push(_.truncate(val, length));
        });
    } else if (_.isObject(obj)) {
        ret = {};
        _.each(obj, function(val, key) {
            ret[key] = _.truncate(val, length);
        });
    } else ret = obj;
    return ret;
};
_.JSONEncode = function() {
    return function(mixed_val) {
        var value = mixed_val;
        var quote = function(string) {
            var escapable = /[\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g; // eslint-disable-line no-control-regex
            var meta = {
                "\b": "\\b",
                "	": "\\t",
                "\n": "\\n",
                "\f": "\\f",
                "\r": "\\r",
                '"': '\\"',
                "\\": "\\\\"
            };
            escapable.lastIndex = 0;
            return escapable.test(string) ? '"' + string.replace(escapable, function(a) {
                var c = meta[a];
                return typeof c === "string" ? c : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4);
            }) + '"' : '"' + string + '"';
        };
        var str = function(key, holder) {
            var gap = "";
            var indent = "    ";
            var i = 0; // The loop counter.
            var k = ""; // The member key.
            var v = ""; // The member value.
            var length = 0;
            var mind = gap;
            var partial = [];
            var value = holder[key];
            // If the value has a toJSON method, call it to obtain a replacement value.
            if (value && typeof value === "object" && typeof value.toJSON === "function") value = value.toJSON(key);
            // What happens next depends on the value's type.
            switch(typeof value){
                case "string":
                    return quote(value);
                case "number":
                    // JSON numbers must be finite. Encode non-finite numbers as null.
                    return isFinite(value) ? String(value) : "null";
                case "boolean":
                case "null":
                    // If the value is a boolean or null, convert it to a string. Note:
                    // typeof null does not produce 'null'. The case is included here in
                    // the remote chance that this gets fixed someday.
                    return String(value);
                case "object":
                    // If the type is 'object', we might be dealing with an object or an array or
                    // null.
                    // Due to a specification blunder in ECMAScript, typeof null is 'object',
                    // so watch out for that case.
                    if (!value) return "null";
                    // Make an array to hold the partial results of stringifying this object value.
                    gap += indent;
                    partial = [];
                    // Is the value an array?
                    if (toString.apply(value) === "[object Array]") {
                        // The value is an array. Stringify every element. Use null as a placeholder
                        // for non-JSON values.
                        length = value.length;
                        for(i = 0; i < length; i += 1)partial[i] = str(i, value) || "null";
                        // Join all of the elements together, separated with commas, and wrap them in
                        // brackets.
                        v = partial.length === 0 ? "[]" : gap ? "[\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "]" : "[" + partial.join(",") + "]";
                        gap = mind;
                        return v;
                    }
                    // Iterate through all of the keys in the object.
                    for(k in value)if (hasOwnProperty.call(value, k)) {
                        v = str(k, value);
                        if (v) partial.push(quote(k) + (gap ? ": " : ":") + v);
                    }
                    // Join all of the member texts together, separated with commas,
                    // and wrap them in braces.
                    v = partial.length === 0 ? "{}" : gap ? "{" + partial.join(",") + "" + mind + "}" : "{" + partial.join(",") + "}";
                    gap = mind;
                    return v;
            }
        };
        // Make a fake root object containing our value under the key of ''.
        // Return the result of stringifying the value.
        return str("", {
            "": value
        });
    };
}();
/**
 * From https://github.com/douglascrockford/JSON-js/blob/master/json_parse.js
 * Slightly modified to throw a real Error rather than a POJO
 */ _.JSONDecode = function() {
    var at, ch, escapee = {
        '"': '"',
        "\\": "\\",
        "/": "/",
        "b": "\b",
        "f": "\f",
        "n": "\n",
        "r": "\r",
        "t": "	"
    }, text, error = function(m) {
        var e = new SyntaxError(m);
        e.at = at;
        e.text = text;
        throw e;
    }, next = function(c) {
        // If a c parameter is provided, verify that it matches the current character.
        if (c && c !== ch) error("Expected '" + c + "' instead of '" + ch + "'");
        // Get the next character. When there are no more characters,
        // return the empty string.
        ch = text.charAt(at);
        at += 1;
        return ch;
    }, number = function() {
        // Parse a number value.
        var number, string = "";
        if (ch === "-") {
            string = "-";
            next("-");
        }
        while(ch >= "0" && ch <= "9"){
            string += ch;
            next();
        }
        if (ch === ".") {
            string += ".";
            while(next() && ch >= "0" && ch <= "9")string += ch;
        }
        if (ch === "e" || ch === "E") {
            string += ch;
            next();
            if (ch === "-" || ch === "+") {
                string += ch;
                next();
            }
            while(ch >= "0" && ch <= "9"){
                string += ch;
                next();
            }
        }
        number = +string;
        if (!isFinite(number)) error("Bad number");
        else return number;
    }, string = function() {
        // Parse a string value.
        var hex, i, string = "", uffff;
        // When parsing for string values, we must look for " and \ characters.
        if (ch === '"') while(next()){
            if (ch === '"') {
                next();
                return string;
            }
            if (ch === "\\") {
                next();
                if (ch === "u") {
                    uffff = 0;
                    for(i = 0; i < 4; i += 1){
                        hex = parseInt(next(), 16);
                        if (!isFinite(hex)) break;
                        uffff = uffff * 16 + hex;
                    }
                    string += String.fromCharCode(uffff);
                } else if (typeof escapee[ch] === "string") string += escapee[ch];
                else break;
            } else string += ch;
        }
        error("Bad string");
    }, white = function() {
        // Skip whitespace.
        while(ch && ch <= " ")next();
    }, word = function() {
        // true, false, or null.
        switch(ch){
            case "t":
                next("t");
                next("r");
                next("u");
                next("e");
                return true;
            case "f":
                next("f");
                next("a");
                next("l");
                next("s");
                next("e");
                return false;
            case "n":
                next("n");
                next("u");
                next("l");
                next("l");
                return null;
        }
        error('Unexpected "' + ch + '"');
    }, value, array = function() {
        // Parse an array value.
        var array = [];
        if (ch === "[") {
            next("[");
            white();
            if (ch === "]") {
                next("]");
                return array; // empty array
            }
            while(ch){
                array.push(value());
                white();
                if (ch === "]") {
                    next("]");
                    return array;
                }
                next(",");
                white();
            }
        }
        error("Bad array");
    }, object = function() {
        // Parse an object value.
        var key, object = {};
        if (ch === "{") {
            next("{");
            white();
            if (ch === "}") {
                next("}");
                return object; // empty object
            }
            while(ch){
                key = string();
                white();
                next(":");
                if (Object.hasOwnProperty.call(object, key)) error('Duplicate key "' + key + '"');
                object[key] = value();
                white();
                if (ch === "}") {
                    next("}");
                    return object;
                }
                next(",");
                white();
            }
        }
        error("Bad object");
    };
    value = function() {
        // Parse a JSON value. It could be an object, an array, a string,
        // a number, or a word.
        white();
        switch(ch){
            case "{":
                return object();
            case "[":
                return array();
            case '"':
                return string();
            case "-":
                return number();
            default:
                return ch >= "0" && ch <= "9" ? number() : word();
        }
    };
    // Return the json_parse function. It will have access to all of the
    // above functions and variables.
    return function(source) {
        var result;
        text = source;
        at = 0;
        ch = " ";
        result = value();
        white();
        if (ch) error("Syntax error");
        return result;
    };
}();
_.base64Encode = function(data) {
    var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    var o1, o2, o3, h1, h2, h3, h4, bits, i = 0, ac = 0, enc = "", tmp_arr = [];
    if (!data) return data;
    data = _.utf8Encode(data);
    do {
        o1 = data.charCodeAt(i++);
        o2 = data.charCodeAt(i++);
        o3 = data.charCodeAt(i++);
        bits = o1 << 16 | o2 << 8 | o3;
        h1 = bits >> 18 & 0x3f;
        h2 = bits >> 12 & 0x3f;
        h3 = bits >> 6 & 0x3f;
        h4 = bits & 0x3f;
        // use hexets to index into b64, and append result to encoded string
        tmp_arr[ac++] = b64.charAt(h1) + b64.charAt(h2) + b64.charAt(h3) + b64.charAt(h4);
    }while (i < data.length);
    enc = tmp_arr.join("");
    switch(data.length % 3){
        case 1:
            enc = enc.slice(0, -2) + "==";
            break;
        case 2:
            enc = enc.slice(0, -1) + "=";
            break;
    }
    return enc;
};
_.utf8Encode = function(string) {
    string = (string + "").replace(/\r\n/g, "\n").replace(/\r/g, "\n");
    var utftext = "", start, end;
    var stringl = 0, n;
    start = end = 0;
    stringl = string.length;
    for(n = 0; n < stringl; n++){
        var c1 = string.charCodeAt(n);
        var enc = null;
        if (c1 < 128) end++;
        else if (c1 > 127 && c1 < 2048) enc = String.fromCharCode(c1 >> 6 | 192, c1 & 63 | 128);
        else enc = String.fromCharCode(c1 >> 12 | 224, c1 >> 6 & 63 | 128, c1 & 63 | 128);
        if (enc !== null) {
            if (end > start) utftext += string.substring(start, end);
            utftext += enc;
            start = end = n + 1;
        }
    }
    if (end > start) utftext += string.substring(start, string.length);
    return utftext;
};
_.UUID = function() {
    // Time-based entropy
    var T = function() {
        var time = 1 * new Date(); // cross-browser version of Date.now()
        var ticks;
        if (window$1.performance && window$1.performance.now) ticks = window$1.performance.now();
        else {
            // fall back to busy loop
            ticks = 0;
            // this while loop figures how many browser ticks go by
            // before 1*new Date() returns a new number, ie the amount
            // of ticks that go by per millisecond
            while(time == 1 * new Date())ticks++;
        }
        return time.toString(16) + Math.floor(ticks).toString(16);
    };
    // Math.Random entropy
    var R = function() {
        return Math.random().toString(16).replace(".", "");
    };
    // User agent entropy
    // This function takes the user agent string, and then xors
    // together each sequence of 8 bytes.  This produces a final
    // sequence of 8 bytes which it returns as hex.
    var UA = function() {
        var ua = userAgent, i, ch, buffer = [], ret = 0;
        function xor(result, byte_array) {
            var j, tmp = 0;
            for(j = 0; j < byte_array.length; j++)tmp |= buffer[j] << j * 8;
            return result ^ tmp;
        }
        for(i = 0; i < ua.length; i++){
            ch = ua.charCodeAt(i);
            buffer.unshift(ch & 0xFF);
            if (buffer.length >= 4) {
                ret = xor(ret, buffer);
                buffer = [];
            }
        }
        if (buffer.length > 0) ret = xor(ret, buffer);
        return ret.toString(16);
    };
    return function() {
        var se = (screen.height * screen.width).toString(16);
        return T() + "-" + R() + "-" + UA() + "-" + se + "-" + T();
    };
}();
// _.isBlockedUA()
// This is to block various web spiders from executing our JS and
// sending false tracking data
var BLOCKED_UA_STRS = [
    "ahrefsbot",
    "baiduspider",
    "bingbot",
    "bingpreview",
    "facebookexternal",
    "petalbot",
    "pinterest",
    "screaming frog",
    "yahoo! slurp",
    "yandexbot",
    // a whole bunch of goog-specific crawlers
    // https://developers.google.com/search/docs/advanced/crawling/overview-google-crawlers
    "adsbot-google",
    "apis-google",
    "duplexweb-google",
    "feedfetcher-google",
    "google favicon",
    "google web preview",
    "google-read-aloud",
    "googlebot",
    "googleweblight",
    "mediapartners-google",
    "storebot-google"
];
_.isBlockedUA = function(ua) {
    var i;
    ua = ua.toLowerCase();
    for(i = 0; i < BLOCKED_UA_STRS.length; i++){
        if (ua.indexOf(BLOCKED_UA_STRS[i]) !== -1) return true;
    }
    return false;
};
/**
 * @param {Object=} formdata
 * @param {string=} arg_separator
 */ _.HTTPBuildQuery = function(formdata, arg_separator) {
    var use_val, use_key, tmp_arr = [];
    if (_.isUndefined(arg_separator)) arg_separator = "&";
    _.each(formdata, function(val, key) {
        use_val = encodeURIComponent(val.toString());
        use_key = encodeURIComponent(key);
        tmp_arr[tmp_arr.length] = use_key + "=" + use_val;
    });
    return tmp_arr.join(arg_separator);
};
_.getQueryParam = function(url, param) {
    // Expects a raw URL
    param = param.replace(/[[]/, "\\[").replace(/[\]]/, "\\]");
    var regexS = "[\\?&]" + param + "=([^&#]*)", regex = new RegExp(regexS), results = regex.exec(url);
    if (results === null || results && typeof results[1] !== "string" && results[1].length) return "";
    else {
        var result = results[1];
        try {
            result = decodeURIComponent(result);
        } catch (err) {
            console.error("Skipping decoding for malformed query param: " + result);
        }
        return result.replace(/\+/g, " ");
    }
};
// _.cookie
// Methods partially borrowed from quirksmode.org/js/cookies.html
_.cookie = {
    get: function(name) {
        var nameEQ = name + "=";
        var ca = document$1.cookie.split(";");
        for(var i = 0; i < ca.length; i++){
            var c = ca[i];
            while(c.charAt(0) == " ")c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return decodeURIComponent(c.substring(nameEQ.length, c.length));
        }
        return null;
    },
    parse: function(name) {
        var cookie;
        try {
            cookie = _.JSONDecode(_.cookie.get(name)) || {};
        } catch (err) {
        // noop
        }
        return cookie;
    },
    set_seconds: function(name, value, seconds, is_cross_subdomain, is_secure, is_cross_site, domain_override) {
        var cdomain = "", expires = "", secure = "";
        if (domain_override) cdomain = "; domain=" + domain_override;
        else if (is_cross_subdomain) {
            var domain = extract_domain(document$1.location.hostname);
            cdomain = domain ? "; domain=." + domain : "";
        }
        if (seconds) {
            var date = new Date();
            date.setTime(date.getTime() + seconds * 1000);
            expires = "; expires=" + date.toGMTString();
        }
        if (is_cross_site) {
            is_secure = true;
            secure = "; SameSite=None";
        }
        if (is_secure) secure += "; secure";
        document$1.cookie = name + "=" + encodeURIComponent(value) + expires + "; path=/" + cdomain + secure;
    },
    set: function(name, value, days, is_cross_subdomain, is_secure, is_cross_site, domain_override) {
        var cdomain = "", expires = "", secure = "";
        if (domain_override) cdomain = "; domain=" + domain_override;
        else if (is_cross_subdomain) {
            var domain = extract_domain(document$1.location.hostname);
            cdomain = domain ? "; domain=." + domain : "";
        }
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + days * 86400000);
            expires = "; expires=" + date.toGMTString();
        }
        if (is_cross_site) {
            is_secure = true;
            secure = "; SameSite=None";
        }
        if (is_secure) secure += "; secure";
        var new_cookie_val = name + "=" + encodeURIComponent(value) + expires + "; path=/" + cdomain + secure;
        document$1.cookie = new_cookie_val;
        return new_cookie_val;
    },
    remove: function(name, is_cross_subdomain, domain_override) {
        _.cookie.set(name, "", -1, is_cross_subdomain, false, false, domain_override);
    }
};
var _localStorageSupported = null;
var localStorageSupported = function(storage, forceCheck) {
    if (_localStorageSupported !== null && !forceCheck) return _localStorageSupported;
    var supported = true;
    try {
        storage = storage || window.localStorage;
        var key = "__mplss_" + cheap_guid(8), val = "xyz";
        storage.setItem(key, val);
        if (storage.getItem(key) !== val) supported = false;
        storage.removeItem(key);
    } catch (err) {
        supported = false;
    }
    _localStorageSupported = supported;
    return supported;
};
// _.localStorage
_.localStorage = {
    is_supported: function(force_check) {
        var supported = localStorageSupported(null, force_check);
        if (!supported) console.error("localStorage unsupported; falling back to cookie store");
        return supported;
    },
    error: function(msg) {
        console.error("localStorage error: " + msg);
    },
    get: function(name) {
        try {
            return window.localStorage.getItem(name);
        } catch (err) {
            _.localStorage.error(err);
        }
        return null;
    },
    parse: function(name) {
        try {
            return _.JSONDecode(_.localStorage.get(name)) || {};
        } catch (err) {
        // noop
        }
        return null;
    },
    set: function(name, value) {
        try {
            window.localStorage.setItem(name, value);
        } catch (err) {
            _.localStorage.error(err);
        }
    },
    remove: function(name) {
        try {
            window.localStorage.removeItem(name);
        } catch (err) {
            _.localStorage.error(err);
        }
    }
};
_.register_event = function() {
    // written by Dean Edwards, 2005
    // with input from Tino Zijdel - crisp@xs4all.nl
    // with input from Carl Sverre - mail@carlsverre.com
    // with input from Mixpanel
    // http://dean.edwards.name/weblog/2005/10/add-event/
    // https://gist.github.com/1930440
    /**
     * @param {Object} element
     * @param {string} type
     * @param {function(...*)} handler
     * @param {boolean=} oldSchool
     * @param {boolean=} useCapture
     */ var register_event = function(element, type, handler, oldSchool, useCapture) {
        if (!element) {
            console.error("No valid element provided to register_event");
            return;
        }
        if (element.addEventListener && !oldSchool) element.addEventListener(type, handler, !!useCapture);
        else {
            var ontype = "on" + type;
            var old_handler = element[ontype]; // can be undefined
            element[ontype] = makeHandler(element, handler, old_handler);
        }
    };
    function makeHandler(element, new_handler, old_handlers) {
        var handler = function(event) {
            event = event || fixEvent(window.event);
            // this basically happens in firefox whenever another script
            // overwrites the onload callback and doesn't pass the event
            // object to previously defined callbacks.  All the browsers
            // that don't define window.event implement addEventListener
            // so the dom_loaded handler will still be fired as usual.
            if (!event) return undefined;
            var ret = true;
            var old_result, new_result;
            if (_.isFunction(old_handlers)) old_result = old_handlers(event);
            new_result = new_handler.call(element, event);
            if (false === old_result || false === new_result) ret = false;
            return ret;
        };
        return handler;
    }
    function fixEvent(event) {
        if (event) {
            event.preventDefault = fixEvent.preventDefault;
            event.stopPropagation = fixEvent.stopPropagation;
        }
        return event;
    }
    fixEvent.preventDefault = function() {
        this.returnValue = false;
    };
    fixEvent.stopPropagation = function() {
        this.cancelBubble = true;
    };
    return register_event;
}();
var TOKEN_MATCH_REGEX = new RegExp('^(\\w*)\\[(\\w+)([=~\\|\\^\\$\\*]?)=?"?([^\\]"]*)"?\\]$');
_.dom_query = function() {
    /* document.getElementsBySelector(selector)
    - returns an array of element objects from the current document
    matching the CSS selector. Selectors can contain element names,
    class names and ids and can be nested. For example:

    elements = document.getElementsBySelector('div#main p a.external')

    Will return an array of all 'a' elements with 'external' in their
    class attribute that are contained inside 'p' elements that are
    contained inside the 'div' element which has id="main"

    New in version 0.4: Support for CSS2 and CSS3 attribute selectors:
    See http://www.w3.org/TR/css3-selectors/#attribute-selectors

    Version 0.4 - Simon Willison, March 25th 2003
    -- Works in Phoenix 0.5, Mozilla 1.3, Opera 7, Internet Explorer 6, Internet Explorer 5 on Windows
    -- Opera 7 fails

    Version 0.5 - Carl Sverre, Jan 7th 2013
    -- Now uses jQuery-esque `hasClass` for testing class name
    equality.  This fixes a bug related to '-' characters being
    considered not part of a 'word' in regex.
    */ function getAllChildren(e) {
        // Returns all children of element. Workaround required for IE5/Windows. Ugh.
        return e.all ? e.all : e.getElementsByTagName("*");
    }
    var bad_whitespace = /[\t\r\n]/g;
    function hasClass(elem, selector) {
        var className = " " + selector + " ";
        return (" " + elem.className + " ").replace(bad_whitespace, " ").indexOf(className) >= 0;
    }
    function getElementsBySelector(selector) {
        // Attempt to fail gracefully in lesser browsers
        if (!document$1.getElementsByTagName) return [];
        // Split selector in to tokens
        var tokens = selector.split(" ");
        var token, bits, tagName, found, foundCount, i, j, k, elements, currentContextIndex;
        var currentContext = [
            document$1
        ];
        for(i = 0; i < tokens.length; i++){
            token = tokens[i].replace(/^\s+/, "").replace(/\s+$/, "");
            if (token.indexOf("#") > -1) {
                // Token is an ID selector
                bits = token.split("#");
                tagName = bits[0];
                var id = bits[1];
                var element = document$1.getElementById(id);
                if (!element || tagName && element.nodeName.toLowerCase() != tagName) // element not found or tag with that ID not found, return false
                return [];
                // Set currentContext to contain just this element
                currentContext = [
                    element
                ];
                continue; // Skip to next token
            }
            if (token.indexOf(".") > -1) {
                // Token contains a class selector
                bits = token.split(".");
                tagName = bits[0];
                var className = bits[1];
                if (!tagName) tagName = "*";
                // Get elements matching tag, filter them for class selector
                found = [];
                foundCount = 0;
                for(j = 0; j < currentContext.length; j++){
                    if (tagName == "*") elements = getAllChildren(currentContext[j]);
                    else elements = currentContext[j].getElementsByTagName(tagName);
                    for(k = 0; k < elements.length; k++)found[foundCount++] = elements[k];
                }
                currentContext = [];
                currentContextIndex = 0;
                for(j = 0; j < found.length; j++)if (found[j].className && _.isString(found[j].className) && // some SVG elements have classNames which are not strings
                hasClass(found[j], className)) currentContext[currentContextIndex++] = found[j];
                continue; // Skip to next token
            }
            // Code to deal with attribute selectors
            var token_match = token.match(TOKEN_MATCH_REGEX);
            if (token_match) {
                tagName = token_match[1];
                var attrName = token_match[2];
                var attrOperator = token_match[3];
                var attrValue = token_match[4];
                if (!tagName) tagName = "*";
                // Grab all of the tagName elements within current context
                found = [];
                foundCount = 0;
                for(j = 0; j < currentContext.length; j++){
                    if (tagName == "*") elements = getAllChildren(currentContext[j]);
                    else elements = currentContext[j].getElementsByTagName(tagName);
                    for(k = 0; k < elements.length; k++)found[foundCount++] = elements[k];
                }
                currentContext = [];
                currentContextIndex = 0;
                var checkFunction; // This function will be used to filter the elements
                switch(attrOperator){
                    case "=":
                        checkFunction = function(e) {
                            return e.getAttribute(attrName) == attrValue;
                        };
                        break;
                    case "~":
                        checkFunction = function(e) {
                            return e.getAttribute(attrName).match(new RegExp("\\b" + attrValue + "\\b"));
                        };
                        break;
                    case "|":
                        checkFunction = function(e) {
                            return e.getAttribute(attrName).match(new RegExp("^" + attrValue + "-?"));
                        };
                        break;
                    case "^":
                        checkFunction = function(e) {
                            return e.getAttribute(attrName).indexOf(attrValue) === 0;
                        };
                        break;
                    case "$":
                        checkFunction = function(e) {
                            return e.getAttribute(attrName).lastIndexOf(attrValue) == e.getAttribute(attrName).length - attrValue.length;
                        };
                        break;
                    case "*":
                        checkFunction = function(e) {
                            return e.getAttribute(attrName).indexOf(attrValue) > -1;
                        };
                        break;
                    default:
                        // Just test for existence of attribute
                        checkFunction = function(e) {
                            return e.getAttribute(attrName);
                        };
                }
                currentContext = [];
                currentContextIndex = 0;
                for(j = 0; j < found.length; j++)if (checkFunction(found[j])) currentContext[currentContextIndex++] = found[j];
                continue; // Skip to next token
            }
            // If we get here, token is JUST an element (not a class or ID selector)
            tagName = token;
            found = [];
            foundCount = 0;
            for(j = 0; j < currentContext.length; j++){
                elements = currentContext[j].getElementsByTagName(tagName);
                for(k = 0; k < elements.length; k++)found[foundCount++] = elements[k];
            }
            currentContext = found;
        }
        return currentContext;
    }
    return function(query) {
        if (_.isElement(query)) return [
            query
        ];
        else if (_.isObject(query) && !_.isUndefined(query.length)) return query;
        else return getElementsBySelector.call(this, query);
    };
}();
var CAMPAIGN_KEYWORDS = [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_content",
    "utm_term"
];
var CLICK_IDS = [
    "dclid",
    "fbclid",
    "gclid",
    "ko_click_id",
    "li_fat_id",
    "msclkid",
    "ttclid",
    "twclid",
    "wbraid"
];
_.info = {
    campaignParams: function(default_value) {
        var kw = "", params = {};
        _.each(CAMPAIGN_KEYWORDS, function(kwkey) {
            kw = _.getQueryParam(document$1.URL, kwkey);
            if (kw.length) params[kwkey] = kw;
            else if (default_value !== undefined) params[kwkey] = default_value;
        });
        return params;
    },
    clickParams: function() {
        var id = "", params = {};
        _.each(CLICK_IDS, function(idkey) {
            id = _.getQueryParam(document$1.URL, idkey);
            if (id.length) params[idkey] = id;
        });
        return params;
    },
    marketingParams: function() {
        return _.extend(_.info.campaignParams(), _.info.clickParams());
    },
    searchEngine: function(referrer) {
        if (referrer.search("https?://(.*)google.([^/?]*)") === 0) return "google";
        else if (referrer.search("https?://(.*)bing.com") === 0) return "bing";
        else if (referrer.search("https?://(.*)yahoo.com") === 0) return "yahoo";
        else if (referrer.search("https?://(.*)duckduckgo.com") === 0) return "duckduckgo";
        else return null;
    },
    searchInfo: function(referrer) {
        var search = _.info.searchEngine(referrer), param = search != "yahoo" ? "q" : "p", ret = {};
        if (search !== null) {
            ret["$search_engine"] = search;
            var keyword = _.getQueryParam(referrer, param);
            if (keyword.length) ret["mp_keyword"] = keyword;
        }
        return ret;
    },
    /**
     * This function detects which browser is running this script.
     * The order of the checks are important since many user agents
     * include key words used in later checks.
     */ browser: function(user_agent, vendor, opera) {
        vendor = vendor || ""; // vendor is undefined for at least IE9
        if (opera || _.includes(user_agent, " OPR/")) {
            if (_.includes(user_agent, "Mini")) return "Opera Mini";
            return "Opera";
        } else if (/(BlackBerry|PlayBook|BB10)/i.test(user_agent)) return "BlackBerry";
        else if (_.includes(user_agent, "IEMobile") || _.includes(user_agent, "WPDesktop")) return "Internet Explorer Mobile";
        else if (_.includes(user_agent, "SamsungBrowser/")) // https://developer.samsung.com/internet/user-agent-string-format
        return "Samsung Internet";
        else if (_.includes(user_agent, "Edge") || _.includes(user_agent, "Edg/")) return "Microsoft Edge";
        else if (_.includes(user_agent, "FBIOS")) return "Facebook Mobile";
        else if (_.includes(user_agent, "Chrome")) return "Chrome";
        else if (_.includes(user_agent, "CriOS")) return "Chrome iOS";
        else if (_.includes(user_agent, "UCWEB") || _.includes(user_agent, "UCBrowser")) return "UC Browser";
        else if (_.includes(user_agent, "FxiOS")) return "Firefox iOS";
        else if (_.includes(vendor, "Apple")) {
            if (_.includes(user_agent, "Mobile")) return "Mobile Safari";
            return "Safari";
        } else if (_.includes(user_agent, "Android")) return "Android Mobile";
        else if (_.includes(user_agent, "Konqueror")) return "Konqueror";
        else if (_.includes(user_agent, "Firefox")) return "Firefox";
        else if (_.includes(user_agent, "MSIE") || _.includes(user_agent, "Trident/")) return "Internet Explorer";
        else if (_.includes(user_agent, "Gecko")) return "Mozilla";
        else return "";
    },
    /**
     * This function detects which browser version is running this script,
     * parsing major and minor version (e.g., 42.1). User agent strings from:
     * http://www.useragentstring.com/pages/useragentstring.php
     */ browserVersion: function(userAgent, vendor, opera) {
        var browser = _.info.browser(userAgent, vendor, opera);
        var versionRegexs = {
            "Internet Explorer Mobile": /rv:(\d+(\.\d+)?)/,
            "Microsoft Edge": /Edge?\/(\d+(\.\d+)?)/,
            "Chrome": /Chrome\/(\d+(\.\d+)?)/,
            "Chrome iOS": /CriOS\/(\d+(\.\d+)?)/,
            "UC Browser": /(UCBrowser|UCWEB)\/(\d+(\.\d+)?)/,
            "Safari": /Version\/(\d+(\.\d+)?)/,
            "Mobile Safari": /Version\/(\d+(\.\d+)?)/,
            "Opera": /(Opera|OPR)\/(\d+(\.\d+)?)/,
            "Firefox": /Firefox\/(\d+(\.\d+)?)/,
            "Firefox iOS": /FxiOS\/(\d+(\.\d+)?)/,
            "Konqueror": /Konqueror:(\d+(\.\d+)?)/,
            "BlackBerry": /BlackBerry (\d+(\.\d+)?)/,
            "Android Mobile": /android\s(\d+(\.\d+)?)/,
            "Samsung Internet": /SamsungBrowser\/(\d+(\.\d+)?)/,
            "Internet Explorer": /(rv:|MSIE )(\d+(\.\d+)?)/,
            "Mozilla": /rv:(\d+(\.\d+)?)/
        };
        var regex = versionRegexs[browser];
        if (regex === undefined) return null;
        var matches = userAgent.match(regex);
        if (!matches) return null;
        return parseFloat(matches[matches.length - 2]);
    },
    os: function() {
        var a = userAgent;
        if (/Windows/i.test(a)) {
            if (/Phone/.test(a) || /WPDesktop/.test(a)) return "Windows Phone";
            return "Windows";
        } else if (/(iPhone|iPad|iPod)/.test(a)) return "iOS";
        else if (/Android/.test(a)) return "Android";
        else if (/(BlackBerry|PlayBook|BB10)/i.test(a)) return "BlackBerry";
        else if (/Mac/i.test(a)) return "Mac OS X";
        else if (/Linux/.test(a)) return "Linux";
        else if (/CrOS/.test(a)) return "Chrome OS";
        else return "";
    },
    device: function(user_agent) {
        if (/Windows Phone/i.test(user_agent) || /WPDesktop/.test(user_agent)) return "Windows Phone";
        else if (/iPad/.test(user_agent)) return "iPad";
        else if (/iPod/.test(user_agent)) return "iPod Touch";
        else if (/iPhone/.test(user_agent)) return "iPhone";
        else if (/(BlackBerry|PlayBook|BB10)/i.test(user_agent)) return "BlackBerry";
        else if (/Android/.test(user_agent)) return "Android";
        else return "";
    },
    referringDomain: function(referrer) {
        var split = referrer.split("/");
        if (split.length >= 3) return split[2];
        return "";
    },
    properties: function() {
        return _.extend(_.strip_empty_properties({
            "$os": _.info.os(),
            "$browser": _.info.browser(userAgent, navigator.vendor, windowOpera),
            "$referrer": document$1.referrer,
            "$referring_domain": _.info.referringDomain(document$1.referrer),
            "$device": _.info.device(userAgent)
        }), {
            "$current_url": window$1.location.href,
            "$browser_version": _.info.browserVersion(userAgent, navigator.vendor, windowOpera),
            "$screen_height": screen.height,
            "$screen_width": screen.width,
            "mp_lib": "web",
            "$lib_version": Config.LIB_VERSION,
            "$insert_id": cheap_guid(),
            "time": _.timestamp() / 1000 // epoch time in seconds
        });
    },
    people_properties: function() {
        return _.extend(_.strip_empty_properties({
            "$os": _.info.os(),
            "$browser": _.info.browser(userAgent, navigator.vendor, windowOpera)
        }), {
            "$browser_version": _.info.browserVersion(userAgent, navigator.vendor, windowOpera)
        });
    },
    mpPageViewProperties: function() {
        return _.strip_empty_properties({
            "current_page_title": document$1.title,
            "current_domain": window$1.location.hostname,
            "current_url_path": window$1.location.pathname,
            "current_url_protocol": window$1.location.protocol,
            "current_url_search": window$1.location.search
        });
    }
};
var cheap_guid = function(maxlen) {
    var guid = Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10);
    return maxlen ? guid.substring(0, maxlen) : guid;
};
// naive way to extract domain name (example.com) from full hostname (my.sub.example.com)
var SIMPLE_DOMAIN_MATCH_REGEX = /[a-z0-9][a-z0-9-]*\.[a-z]+$/i;
// this next one attempts to account for some ccSLDs, e.g. extracting oxford.ac.uk from www.oxford.ac.uk
var DOMAIN_MATCH_REGEX = /[a-z0-9][a-z0-9-]+\.[a-z.]{2,6}$/i;
/**
 * Attempts to extract main domain name from full hostname, using a few blunt heuristics. For
 * common TLDs like .com/.org that always have a simple SLD.TLD structure (example.com), we
 * simply extract the last two .-separated parts of the hostname (SIMPLE_DOMAIN_MATCH_REGEX).
 * For others, we attempt to account for short ccSLD+TLD combos (.ac.uk) with the legacy
 * DOMAIN_MATCH_REGEX (kept to maintain backwards compatibility with existing Mixpanel
 * integrations). The only _reliable_ way to extract domain from hostname is with an up-to-date
 * list like at https://publicsuffix.org/ so for cases that this helper fails at, the SDK
 * offers the 'cookie_domain' config option to set it explicitly.
 * @example
 * extract_domain('my.sub.example.com')
 * // 'example.com'
 */ var extract_domain = function(hostname) {
    var domain_regex = DOMAIN_MATCH_REGEX;
    var parts = hostname.split(".");
    var tld = parts[parts.length - 1];
    if (tld.length > 4 || tld === "com" || tld === "org") domain_regex = SIMPLE_DOMAIN_MATCH_REGEX;
    var matches = hostname.match(domain_regex);
    return matches ? matches[0] : "";
};
var JSONStringify = null;
var JSONParse = null;
if (typeof JSON !== "undefined") {
    JSONStringify = JSON.stringify;
    JSONParse = JSON.parse;
}
JSONStringify = JSONStringify || _.JSONEncode;
JSONParse = JSONParse || _.JSONDecode;
// EXPORTS (for closure compiler)
_["toArray"] = _.toArray;
_["isObject"] = _.isObject;
_["JSONEncode"] = _.JSONEncode;
_["JSONDecode"] = _.JSONDecode;
_["isBlockedUA"] = _.isBlockedUA;
_["isEmptyObject"] = _.isEmptyObject;
_["info"] = _.info;
_["info"]["device"] = _.info.device;
_["info"]["browser"] = _.info.browser;
_["info"]["browserVersion"] = _.info.browserVersion;
_["info"]["properties"] = _.info.properties;
/**
 * DomTracker Object
 * @constructor
 */ var DomTracker = function() {};
// interface
DomTracker.prototype.create_properties = function() {};
DomTracker.prototype.event_handler = function() {};
DomTracker.prototype.after_track_handler = function() {};
DomTracker.prototype.init = function(mixpanel_instance) {
    this.mp = mixpanel_instance;
    return this;
};
/**
 * @param {Object|string} query
 * @param {string} event_name
 * @param {Object=} properties
 * @param {function=} user_callback
 */ DomTracker.prototype.track = function(query, event_name, properties, user_callback) {
    var that = this;
    var elements = _.dom_query(query);
    if (elements.length === 0) {
        console.error("The DOM query (" + query + ") returned 0 elements");
        return;
    }
    _.each(elements, function(element) {
        _.register_event(element, this.override_event, function(e) {
            var options = {};
            var props = that.create_properties(properties, this);
            var timeout = that.mp.get_config("track_links_timeout");
            that.event_handler(e, this, options);
            // in case the mixpanel servers don't get back to us in time
            window.setTimeout(that.track_callback(user_callback, props, options, true), timeout);
            // fire the tracking event
            that.mp.track(event_name, props, that.track_callback(user_callback, props, options));
        });
    }, this);
    return true;
};
/**
 * @param {function} user_callback
 * @param {Object} props
 * @param {boolean=} timeout_occured
 */ DomTracker.prototype.track_callback = function(user_callback, props, options, timeout_occured) {
    timeout_occured = timeout_occured || false;
    var that = this;
    return function() {
        // options is referenced from both callbacks, so we can have
        // a 'lock' of sorts to ensure only one fires
        if (options.callback_fired) return;
        options.callback_fired = true;
        if (user_callback && user_callback(timeout_occured, props) === false) // user can prevent the default functionality by
        // returning false from their callback
        return;
        that.after_track_handler(props, options, timeout_occured);
    };
};
DomTracker.prototype.create_properties = function(properties, element) {
    var props;
    if (typeof properties === "function") props = properties(element);
    else props = _.extend({}, properties);
    return props;
};
/**
 * LinkTracker Object
 * @constructor
 * @extends DomTracker
 */ var LinkTracker = function() {
    this.override_event = "click";
};
_.inherit(LinkTracker, DomTracker);
LinkTracker.prototype.create_properties = function(properties, element) {
    var props = LinkTracker.superclass.create_properties.apply(this, arguments);
    if (element.href) props["url"] = element.href;
    return props;
};
LinkTracker.prototype.event_handler = function(evt, element, options) {
    options.new_tab = evt.which === 2 || evt.metaKey || evt.ctrlKey || element.target === "_blank";
    options.href = element.href;
    if (!options.new_tab) evt.preventDefault();
};
LinkTracker.prototype.after_track_handler = function(props, options) {
    if (options.new_tab) return;
    setTimeout(function() {
        window.location = options.href;
    }, 0);
};
/**
 * FormTracker Object
 * @constructor
 * @extends DomTracker
 */ var FormTracker = function() {
    this.override_event = "submit";
};
_.inherit(FormTracker, DomTracker);
FormTracker.prototype.event_handler = function(evt, element, options) {
    options.element = element;
    evt.preventDefault();
};
FormTracker.prototype.after_track_handler = function(props, options) {
    setTimeout(function() {
        options.element.submit();
    }, 0);
};
// eslint-disable-line camelcase
var logger$2 = console_with_prefix("lock");
/**
 * SharedLock: a mutex built on HTML5 localStorage, to ensure that only one browser
 * window/tab at a time will be able to access shared resources.
 *
 * Based on the Alur and Taubenfeld fast lock
 * (http://www.cs.rochester.edu/research/synchronization/pseudocode/fastlock.html)
 * with an added timeout to ensure there will be eventual progress in the event
 * that a window is closed in the middle of the callback.
 *
 * Implementation based on the original version by David Wolever (https://github.com/wolever)
 * at https://gist.github.com/wolever/5fd7573d1ef6166e8f8c4af286a69432.
 *
 * @example
 * const myLock = new SharedLock('some-key');
 * myLock.withLock(function() {
 *   console.log('I hold the mutex!');
 * });
 *
 * @constructor
 */ var SharedLock = function(key, options) {
    options = options || {};
    this.storageKey = key;
    this.storage = options.storage || window.localStorage;
    this.pollIntervalMS = options.pollIntervalMS || 100;
    this.timeoutMS = options.timeoutMS || 2000;
};
// pass in a specific pid to test contention scenarios; otherwise
// it is chosen randomly for each acquisition attempt
SharedLock.prototype.withLock = function(lockedCB, errorCB, pid) {
    if (!pid && typeof errorCB !== "function") {
        pid = errorCB;
        errorCB = null;
    }
    var i = pid || new Date().getTime() + "|" + Math.random();
    var startTime = new Date().getTime();
    var key = this.storageKey;
    var pollIntervalMS = this.pollIntervalMS;
    var timeoutMS = this.timeoutMS;
    var storage = this.storage;
    var keyX = key + ":X";
    var keyY = key + ":Y";
    var keyZ = key + ":Z";
    var reportError = function(err) {
        errorCB && errorCB(err);
    };
    var delay = function(cb) {
        if (new Date().getTime() - startTime > timeoutMS) {
            logger$2.error("Timeout waiting for mutex on " + key + "; clearing lock. [" + i + "]");
            storage.removeItem(keyZ);
            storage.removeItem(keyY);
            loop();
            return;
        }
        setTimeout(function() {
            try {
                cb();
            } catch (err) {
                reportError(err);
            }
        }, pollIntervalMS * (Math.random() + 0.1));
    };
    var waitFor = function(predicate, cb) {
        if (predicate()) cb();
        else delay(function() {
            waitFor(predicate, cb);
        });
    };
    var getSetY = function() {
        var valY = storage.getItem(keyY);
        if (valY && valY !== i) return false;
        else {
            storage.setItem(keyY, i);
            if (storage.getItem(keyY) === i) return true;
            else {
                if (!localStorageSupported(storage, true)) throw new Error("localStorage support dropped while acquiring lock");
                return false;
            }
        }
    };
    var loop = function() {
        storage.setItem(keyX, i);
        waitFor(getSetY, function() {
            if (storage.getItem(keyX) === i) {
                criticalSection();
                return;
            }
            delay(function() {
                if (storage.getItem(keyY) !== i) {
                    loop();
                    return;
                }
                waitFor(function() {
                    return !storage.getItem(keyZ);
                }, criticalSection);
            });
        });
    };
    var criticalSection = function() {
        storage.setItem(keyZ, "1");
        try {
            lockedCB();
        } finally{
            storage.removeItem(keyZ);
            if (storage.getItem(keyY) === i) storage.removeItem(keyY);
            if (storage.getItem(keyX) === i) storage.removeItem(keyX);
        }
    };
    try {
        if (localStorageSupported(storage, true)) loop();
        else throw new Error("localStorage support check failed");
    } catch (err) {
        reportError(err);
    }
};
// eslint-disable-line camelcase
var logger$1 = console_with_prefix("batch");
/**
 * RequestQueue: queue for batching API requests with localStorage backup for retries.
 * Maintains an in-memory queue which represents the source of truth for the current
 * page, but also writes all items out to a copy in the browser's localStorage, which
 * can be read on subsequent pageloads and retried. For batchability, all the request
 * items in the queue should be of the same type (events, people updates, group updates)
 * so they can be sent in a single request to the same API endpoint.
 *
 * LocalStorage keying and locking: In order for reloads and subsequent pageloads of
 * the same site to access the same persisted data, they must share the same localStorage
 * key (for instance based on project token and queue type). Therefore access to the
 * localStorage entry is guarded by an asynchronous mutex (SharedLock) to prevent
 * simultaneously open windows/tabs from overwriting each other's data (which would lead
 * to data loss in some situations).
 * @constructor
 */ var RequestQueue = function(storageKey, options) {
    options = options || {};
    this.storageKey = storageKey;
    this.storage = options.storage || window.localStorage;
    this.reportError = options.errorReporter || _.bind(logger$1.error, logger$1);
    this.lock = new SharedLock(storageKey, {
        storage: this.storage
    });
    this.pid = options.pid || null; // pass pid to test out storage lock contention scenarios
    this.memQueue = [];
};
/**
 * Add one item to queues (memory and localStorage). The queued entry includes
 * the given item along with an auto-generated ID and a "flush-after" timestamp.
 * It is expected that the item will be sent over the network and dequeued
 * before the flush-after time; if this doesn't happen it is considered orphaned
 * (e.g., the original tab where it was enqueued got closed before it could be
 * sent) and the item can be sent by any tab that finds it in localStorage.
 *
 * The final callback param is called with a param indicating success or
 * failure of the enqueue operation; it is asynchronous because the localStorage
 * lock is asynchronous.
 */ RequestQueue.prototype.enqueue = function(item, flushInterval, cb) {
    var queueEntry = {
        "id": cheap_guid(),
        "flushAfter": new Date().getTime() + flushInterval * 2,
        "payload": item
    };
    this.lock.withLock(_.bind(function lockAcquired() {
        var succeeded;
        try {
            var storedQueue = this.readFromStorage();
            storedQueue.push(queueEntry);
            succeeded = this.saveToStorage(storedQueue);
            if (succeeded) // only add to in-memory queue when storage succeeds
            this.memQueue.push(queueEntry);
        } catch (err) {
            this.reportError("Error enqueueing item", item);
            succeeded = false;
        }
        if (cb) cb(succeeded);
    }, this), _.bind(function lockFailure(err) {
        this.reportError("Error acquiring storage lock", err);
        if (cb) cb(false);
    }, this), this.pid);
};
/**
 * Read out the given number of queue entries. If this.memQueue
 * has fewer than batchSize items, then look for "orphaned" items
 * in the persisted queue (items where the 'flushAfter' time has
 * already passed).
 */ RequestQueue.prototype.fillBatch = function(batchSize) {
    var batch = this.memQueue.slice(0, batchSize);
    if (batch.length < batchSize) {
        // don't need lock just to read events; localStorage is thread-safe
        // and the worst that could happen is a duplicate send of some
        // orphaned events, which will be deduplicated on the server side
        var storedQueue = this.readFromStorage();
        if (storedQueue.length) {
            // item IDs already in batch; don't duplicate out of storage
            var idsInBatch = {}; // poor man's Set
            _.each(batch, function(item) {
                idsInBatch[item["id"]] = true;
            });
            for(var i = 0; i < storedQueue.length; i++){
                var item = storedQueue[i];
                if (new Date().getTime() > item["flushAfter"] && !idsInBatch[item["id"]]) {
                    item.orphaned = true;
                    batch.push(item);
                    if (batch.length >= batchSize) break;
                }
            }
        }
    }
    return batch;
};
/**
 * Remove items with matching 'id' from array (immutably)
 * also remove any item without a valid id (e.g., malformed
 * storage entries).
 */ var filterOutIDsAndInvalid = function(items, idSet) {
    var filteredItems = [];
    _.each(items, function(item) {
        if (item["id"] && !idSet[item["id"]]) filteredItems.push(item);
    });
    return filteredItems;
};
/**
 * Remove items with matching IDs from both in-memory queue
 * and persisted queue
 */ RequestQueue.prototype.removeItemsByID = function(ids, cb) {
    var idSet = {}; // poor man's Set
    _.each(ids, function(id) {
        idSet[id] = true;
    });
    this.memQueue = filterOutIDsAndInvalid(this.memQueue, idSet);
    var removeFromStorage = _.bind(function() {
        var succeeded;
        try {
            var storedQueue = this.readFromStorage();
            storedQueue = filterOutIDsAndInvalid(storedQueue, idSet);
            succeeded = this.saveToStorage(storedQueue);
            // an extra check: did storage report success but somehow
            // the items are still there?
            if (succeeded) {
                storedQueue = this.readFromStorage();
                for(var i = 0; i < storedQueue.length; i++){
                    var item = storedQueue[i];
                    if (item["id"] && !!idSet[item["id"]]) {
                        this.reportError("Item not removed from storage");
                        return false;
                    }
                }
            }
        } catch (err) {
            this.reportError("Error removing items", ids);
            succeeded = false;
        }
        return succeeded;
    }, this);
    this.lock.withLock(function lockAcquired() {
        var succeeded = removeFromStorage();
        if (cb) cb(succeeded);
    }, _.bind(function lockFailure(err) {
        var succeeded = false;
        this.reportError("Error acquiring storage lock", err);
        if (!localStorageSupported(this.storage, true)) {
            // Looks like localStorage writes have stopped working sometime after
            // initialization (probably full), and so nobody can acquire locks
            // anymore. Consider it temporarily safe to remove items without the
            // lock, since nobody's writing successfully anyway.
            succeeded = removeFromStorage();
            if (!succeeded) // OK, we couldn't even write out the smaller queue. Try clearing it
            // entirely.
            try {
                this.storage.removeItem(this.storageKey);
            } catch (err) {
                this.reportError("Error clearing queue", err);
            }
        }
        if (cb) cb(succeeded);
    }, this), this.pid);
};
// internal helper for RequestQueue.updatePayloads
var updatePayloads = function(existingItems, itemsToUpdate) {
    var newItems = [];
    _.each(existingItems, function(item) {
        var id = item["id"];
        if (id in itemsToUpdate) {
            var newPayload = itemsToUpdate[id];
            if (newPayload !== null) {
                item["payload"] = newPayload;
                newItems.push(item);
            }
        } else // no update
        newItems.push(item);
    });
    return newItems;
};
/**
 * Update payloads of given items in both in-memory queue and
 * persisted queue. Items set to null are removed from queues.
 */ RequestQueue.prototype.updatePayloads = function(itemsToUpdate, cb) {
    this.memQueue = updatePayloads(this.memQueue, itemsToUpdate);
    this.lock.withLock(_.bind(function lockAcquired() {
        var succeeded;
        try {
            var storedQueue = this.readFromStorage();
            storedQueue = updatePayloads(storedQueue, itemsToUpdate);
            succeeded = this.saveToStorage(storedQueue);
        } catch (err) {
            this.reportError("Error updating items", itemsToUpdate);
            succeeded = false;
        }
        if (cb) cb(succeeded);
    }, this), _.bind(function lockFailure(err) {
        this.reportError("Error acquiring storage lock", err);
        if (cb) cb(false);
    }, this), this.pid);
};
/**
 * Read and parse items array from localStorage entry, handling
 * malformed/missing data if necessary.
 */ RequestQueue.prototype.readFromStorage = function() {
    var storageEntry;
    try {
        storageEntry = this.storage.getItem(this.storageKey);
        if (storageEntry) {
            storageEntry = JSONParse(storageEntry);
            if (!_.isArray(storageEntry)) {
                this.reportError("Invalid storage entry:", storageEntry);
                storageEntry = null;
            }
        }
    } catch (err) {
        this.reportError("Error retrieving queue", err);
        storageEntry = null;
    }
    return storageEntry || [];
};
/**
 * Serialize the given items array to localStorage.
 */ RequestQueue.prototype.saveToStorage = function(queue) {
    try {
        this.storage.setItem(this.storageKey, JSONStringify(queue));
        return true;
    } catch (err) {
        this.reportError("Error saving queue", err);
        return false;
    }
};
/**
 * Clear out queues (memory and localStorage).
 */ RequestQueue.prototype.clear = function() {
    this.memQueue = [];
    this.storage.removeItem(this.storageKey);
};
// eslint-disable-line camelcase
// maximum interval between request retries after exponential backoff
var MAX_RETRY_INTERVAL_MS = 600000; // 10 minutes
var logger = console_with_prefix("batch");
/**
 * RequestBatcher: manages the queueing, flushing, retry etc of requests of one
 * type (events, people, groups).
 * Uses RequestQueue to manage the backing store.
 * @constructor
 */ var RequestBatcher = function(storageKey, options) {
    this.errorReporter = options.errorReporter;
    this.queue = new RequestQueue(storageKey, {
        errorReporter: _.bind(this.reportError, this),
        storage: options.storage
    });
    this.libConfig = options.libConfig;
    this.sendRequest = options.sendRequestFunc;
    this.beforeSendHook = options.beforeSendHook;
    this.stopAllBatching = options.stopAllBatchingFunc;
    // seed variable batch size + flush interval with configured values
    this.batchSize = this.libConfig["batch_size"];
    this.flushInterval = this.libConfig["batch_flush_interval_ms"];
    this.stopped = !this.libConfig["batch_autostart"];
    this.consecutiveRemovalFailures = 0;
    // extra client-side dedupe
    this.itemIdsSentSuccessfully = {};
};
/**
 * Add one item to queue.
 */ RequestBatcher.prototype.enqueue = function(item, cb) {
    this.queue.enqueue(item, this.flushInterval, cb);
};
/**
 * Start flushing batches at the configured time interval. Must call
 * this method upon SDK init in order to send anything over the network.
 */ RequestBatcher.prototype.start = function() {
    this.stopped = false;
    this.consecutiveRemovalFailures = 0;
    this.flush();
};
/**
 * Stop flushing batches. Can be restarted by calling start().
 */ RequestBatcher.prototype.stop = function() {
    this.stopped = true;
    if (this.timeoutID) {
        clearTimeout(this.timeoutID);
        this.timeoutID = null;
    }
};
/**
 * Clear out queue.
 */ RequestBatcher.prototype.clear = function() {
    this.queue.clear();
};
/**
 * Restore batch size configuration to whatever is set in the main SDK.
 */ RequestBatcher.prototype.resetBatchSize = function() {
    this.batchSize = this.libConfig["batch_size"];
};
/**
 * Restore flush interval time configuration to whatever is set in the main SDK.
 */ RequestBatcher.prototype.resetFlush = function() {
    this.scheduleFlush(this.libConfig["batch_flush_interval_ms"]);
};
/**
 * Schedule the next flush in the given number of milliseconds.
 */ RequestBatcher.prototype.scheduleFlush = function(flushMS) {
    this.flushInterval = flushMS;
    if (!this.stopped) this.timeoutID = setTimeout(_.bind(this.flush, this), this.flushInterval);
};
/**
 * Flush one batch to network. Depending on success/failure modes, it will either
 * remove the batch from the queue or leave it in for retry, and schedule the next
 * flush. In cases of most network or API failures, it will back off exponentially
 * when retrying.
 * @param {Object} [options]
 * @param {boolean} [options.sendBeacon] - whether to send batch with
 * navigator.sendBeacon (only useful for sending batches before page unloads, as
 * sendBeacon offers no callbacks or status indications)
 */ RequestBatcher.prototype.flush = function(options) {
    try {
        if (this.requestInProgress) {
            logger.log("Flush: Request already in progress");
            return;
        }
        options = options || {};
        var timeoutMS = this.libConfig["batch_request_timeout_ms"];
        var startTime = new Date().getTime();
        var currentBatchSize = this.batchSize;
        var batch = this.queue.fillBatch(currentBatchSize);
        var dataForRequest = [];
        var transformedItems = {};
        _.each(batch, function(item) {
            var payload = item["payload"];
            if (this.beforeSendHook && !item.orphaned) payload = this.beforeSendHook(payload);
            if (payload) {
                // mp_sent_by_lib_version prop captures which lib version actually
                // sends each event (regardless of which version originally queued
                // it for sending)
                if (payload["event"] && payload["properties"]) payload["properties"] = _.extend({}, payload["properties"], {
                    "mp_sent_by_lib_version": Config.LIB_VERSION
                });
                var addPayload = true;
                var itemId = item["id"];
                if (itemId) {
                    if ((this.itemIdsSentSuccessfully[itemId] || 0) > 5) {
                        this.reportError("[dupe] item ID sent too many times, not sending", {
                            item: item,
                            batchSize: batch.length,
                            timesSent: this.itemIdsSentSuccessfully[itemId]
                        });
                        addPayload = false;
                    }
                } else this.reportError("[dupe] found item with no ID", {
                    item: item
                });
                if (addPayload) dataForRequest.push(payload);
            }
            transformedItems[item["id"]] = payload;
        }, this);
        if (dataForRequest.length < 1) {
            this.resetFlush();
            return; // nothing to do
        }
        this.requestInProgress = true;
        var batchSendCallback = _.bind(function(res) {
            this.requestInProgress = false;
            try {
                // handle API response in a try-catch to make sure we can reset the
                // flush operation if something goes wrong
                var removeItemsFromQueue = false;
                if (options.unloading) // update persisted data to include hook transformations
                this.queue.updatePayloads(transformedItems);
                else if (_.isObject(res) && res.error === "timeout" && new Date().getTime() - startTime >= timeoutMS) {
                    this.reportError("Network timeout; retrying");
                    this.flush();
                } else if (_.isObject(res) && res.xhr_req && (res.xhr_req["status"] >= 500 || res.xhr_req["status"] === 429 || res.error === "timeout")) {
                    // network or API error, or 429 Too Many Requests, retry
                    var retryMS = this.flushInterval * 2;
                    var headers = res.xhr_req["responseHeaders"];
                    if (headers) {
                        var retryAfter = headers["Retry-After"];
                        if (retryAfter) retryMS = parseInt(retryAfter, 10) * 1000 || retryMS;
                    }
                    retryMS = Math.min(MAX_RETRY_INTERVAL_MS, retryMS);
                    this.reportError("Error; retry in " + retryMS + " ms");
                    this.scheduleFlush(retryMS);
                } else if (_.isObject(res) && res.xhr_req && res.xhr_req["status"] === 413) {
                    // 413 Payload Too Large
                    if (batch.length > 1) {
                        var halvedBatchSize = Math.max(1, Math.floor(currentBatchSize / 2));
                        this.batchSize = Math.min(this.batchSize, halvedBatchSize, batch.length - 1);
                        this.reportError("413 response; reducing batch size to " + this.batchSize);
                        this.resetFlush();
                    } else {
                        this.reportError("Single-event request too large; dropping", batch);
                        this.resetBatchSize();
                        removeItemsFromQueue = true;
                    }
                } else // successful network request+response; remove each item in batch from queue
                // (even if it was e.g. a 400, in which case retrying won't help)
                removeItemsFromQueue = true;
                if (removeItemsFromQueue) {
                    this.queue.removeItemsByID(_.map(batch, function(item) {
                        return item["id"];
                    }), _.bind(function(succeeded) {
                        if (succeeded) {
                            this.consecutiveRemovalFailures = 0;
                            this.flush(); // handle next batch if the queue isn't empty
                        } else {
                            this.reportError("Failed to remove items from queue");
                            if (++this.consecutiveRemovalFailures > 5) {
                                this.reportError("Too many queue failures; disabling batching system.");
                                this.stopAllBatching();
                            } else this.resetFlush();
                        }
                    }, this));
                    // client-side dedupe
                    _.each(batch, _.bind(function(item) {
                        var itemId = item["id"];
                        if (itemId) {
                            this.itemIdsSentSuccessfully[itemId] = this.itemIdsSentSuccessfully[itemId] || 0;
                            this.itemIdsSentSuccessfully[itemId]++;
                            if (this.itemIdsSentSuccessfully[itemId] > 5) this.reportError("[dupe] item ID sent too many times", {
                                item: item,
                                batchSize: batch.length,
                                timesSent: this.itemIdsSentSuccessfully[itemId]
                            });
                        } else this.reportError("[dupe] found item with no ID while removing", {
                            item: item
                        });
                    }, this));
                }
            } catch (err) {
                this.reportError("Error handling API response", err);
                this.resetFlush();
            }
        }, this);
        var requestOptions = {
            method: "POST",
            verbose: true,
            ignore_json_errors: true,
            timeout_ms: timeoutMS // eslint-disable-line camelcase
        };
        if (options.unloading) requestOptions.transport = "sendBeacon";
        logger.log("MIXPANEL REQUEST:", dataForRequest);
        this.sendRequest(dataForRequest, requestOptions, batchSendCallback);
    } catch (err) {
        this.reportError("Error flushing request queue", err);
        this.resetFlush();
    }
};
/**
 * Log error to global logger and optional user-defined logger.
 */ RequestBatcher.prototype.reportError = function(msg, err) {
    logger.error.apply(logger.error, arguments);
    if (this.errorReporter) try {
        if (!(err instanceof Error)) err = new Error(msg);
        this.errorReporter(msg, err);
    } catch (err) {
        logger.error(err);
    }
};
/**
 * A function used to track a Mixpanel event (e.g. MixpanelLib.track)
 * @callback trackFunction
 * @param {String} event_name The name of the event. This can be anything the user does - 'Button Click', 'Sign Up', 'Item Purchased', etc.
 * @param {Object} [properties] A set of properties to include with the event you're sending. These describe the user who did the event or details about the event itself.
 * @param {Function} [callback] If provided, the callback function will be called after tracking the event.
 */ /** Public **/ var GDPR_DEFAULT_PERSISTENCE_PREFIX = "__mp_opt_in_out_";
/**
 * Opt the user in to data tracking and cookies/localstorage for the given token
 * @param {string} token - Mixpanel project tracking token
 * @param {Object} [options]
 * @param {trackFunction} [options.track] - function used for tracking a Mixpanel event to record the opt-in action
 * @param {string} [options.trackEventName] - event name to be used for tracking the opt-in action
 * @param {Object} [options.trackProperties] - set of properties to be tracked along with the opt-in action
 * @param {string} [options.persistenceType] Persistence mechanism used - cookie or localStorage
 * @param {string} [options.persistencePrefix=__mp_opt_in_out] - custom prefix to be used in the cookie/localstorage name
 * @param {Number} [options.cookieExpiration] - number of days until the opt-in cookie expires
 * @param {string} [options.cookieDomain] - custom cookie domain
 * @param {boolean} [options.crossSiteCookie] - whether the opt-in cookie is set as cross-site-enabled
 * @param {boolean} [options.crossSubdomainCookie] - whether the opt-in cookie is set as cross-subdomain or not
 * @param {boolean} [options.secureCookie] - whether the opt-in cookie is set as secure or not
 */ function optIn(token, options) {
    _optInOut(true, token, options);
}
/**
 * Opt the user out of data tracking and cookies/localstorage for the given token
 * @param {string} token - Mixpanel project tracking token
 * @param {Object} [options]
 * @param {string} [options.persistenceType] Persistence mechanism used - cookie or localStorage
 * @param {string} [options.persistencePrefix=__mp_opt_in_out] - custom prefix to be used in the cookie/localstorage name
 * @param {Number} [options.cookieExpiration] - number of days until the opt-out cookie expires
 * @param {string} [options.cookieDomain] - custom cookie domain
 * @param {boolean} [options.crossSiteCookie] - whether the opt-in cookie is set as cross-site-enabled
 * @param {boolean} [options.crossSubdomainCookie] - whether the opt-out cookie is set as cross-subdomain or not
 * @param {boolean} [options.secureCookie] - whether the opt-out cookie is set as secure or not
 */ function optOut(token, options) {
    _optInOut(false, token, options);
}
/**
 * Check whether the user has opted in to data tracking and cookies/localstorage for the given token
 * @param {string} token - Mixpanel project tracking token
 * @param {Object} [options]
 * @param {string} [options.persistenceType] Persistence mechanism used - cookie or localStorage
 * @param {string} [options.persistencePrefix=__mp_opt_in_out] - custom prefix to be used in the cookie/localstorage name
 * @returns {boolean} whether the user has opted in to the given opt type
 */ function hasOptedIn(token, options) {
    return _getStorageValue(token, options) === "1";
}
/**
 * Check whether the user has opted out of data tracking and cookies/localstorage for the given token
 * @param {string} token - Mixpanel project tracking token
 * @param {Object} [options]
 * @param {string} [options.persistenceType] Persistence mechanism used - cookie or localStorage
 * @param {string} [options.persistencePrefix=__mp_opt_in_out] - custom prefix to be used in the cookie/localstorage name
 * @param {boolean} [options.ignoreDnt] - flag to ignore browser DNT settings and always return false
 * @returns {boolean} whether the user has opted out of the given opt type
 */ function hasOptedOut(token, options) {
    if (_hasDoNotTrackFlagOn(options)) {
        console.warn('This browser has "Do Not Track" enabled. This will prevent the Mixpanel SDK from sending any data. To ignore the "Do Not Track" browser setting, initialize the Mixpanel instance with the config "ignore_dnt: true"');
        return true;
    }
    var optedOut = _getStorageValue(token, options) === "0";
    if (optedOut) console.warn("You are opted out of Mixpanel tracking. This will prevent the Mixpanel SDK from sending any data.");
    return optedOut;
}
/**
 * Wrap a MixpanelLib method with a check for whether the user is opted out of data tracking and cookies/localstorage for the given token
 * If the user has opted out, return early instead of executing the method.
 * If a callback argument was provided, execute it passing the 0 error code.
 * @param {function} method - wrapped method to be executed if the user has not opted out
 * @returns {*} the result of executing method OR undefined if the user has opted out
 */ function addOptOutCheckMixpanelLib(method) {
    return _addOptOutCheck(method, function(name) {
        return this.get_config(name);
    });
}
/**
 * Wrap a MixpanelPeople method with a check for whether the user is opted out of data tracking and cookies/localstorage for the given token
 * If the user has opted out, return early instead of executing the method.
 * If a callback argument was provided, execute it passing the 0 error code.
 * @param {function} method - wrapped method to be executed if the user has not opted out
 * @returns {*} the result of executing method OR undefined if the user has opted out
 */ function addOptOutCheckMixpanelPeople(method) {
    return _addOptOutCheck(method, function(name) {
        return this._get_config(name);
    });
}
/**
 * Wrap a MixpanelGroup method with a check for whether the user is opted out of data tracking and cookies/localstorage for the given token
 * If the user has opted out, return early instead of executing the method.
 * If a callback argument was provided, execute it passing the 0 error code.
 * @param {function} method - wrapped method to be executed if the user has not opted out
 * @returns {*} the result of executing method OR undefined if the user has opted out
 */ function addOptOutCheckMixpanelGroup(method) {
    return _addOptOutCheck(method, function(name) {
        return this._get_config(name);
    });
}
/**
 * Clear the user's opt in/out status of data tracking and cookies/localstorage for the given token
 * @param {string} token - Mixpanel project tracking token
 * @param {Object} [options]
 * @param {string} [options.persistenceType] Persistence mechanism used - cookie or localStorage
 * @param {string} [options.persistencePrefix=__mp_opt_in_out] - custom prefix to be used in the cookie/localstorage name
 * @param {Number} [options.cookieExpiration] - number of days until the opt-in cookie expires
 * @param {string} [options.cookieDomain] - custom cookie domain
 * @param {boolean} [options.crossSiteCookie] - whether the opt-in cookie is set as cross-site-enabled
 * @param {boolean} [options.crossSubdomainCookie] - whether the opt-in cookie is set as cross-subdomain or not
 * @param {boolean} [options.secureCookie] - whether the opt-in cookie is set as secure or not
 */ function clearOptInOut(token, options) {
    options = options || {};
    _getStorage(options).remove(_getStorageKey(token, options), !!options.crossSubdomainCookie, options.cookieDomain);
}
/** Private **/ /**
 * Get storage util
 * @param {Object} [options]
 * @param {string} [options.persistenceType]
 * @returns {object} either _.cookie or _.localstorage
 */ function _getStorage(options) {
    options = options || {};
    return options.persistenceType === "localStorage" ? _.localStorage : _.cookie;
}
/**
 * Get the name of the cookie that is used for the given opt type (tracking, cookie, etc.)
 * @param {string} token - Mixpanel project tracking token
 * @param {Object} [options]
 * @param {string} [options.persistencePrefix=__mp_opt_in_out] - custom prefix to be used in the cookie/localstorage name
 * @returns {string} the name of the cookie for the given opt type
 */ function _getStorageKey(token, options) {
    options = options || {};
    return (options.persistencePrefix || GDPR_DEFAULT_PERSISTENCE_PREFIX) + token;
}
/**
 * Get the value of the cookie that is used for the given opt type (tracking, cookie, etc.)
 * @param {string} token - Mixpanel project tracking token
 * @param {Object} [options]
 * @param {string} [options.persistencePrefix=__mp_opt_in_out] - custom prefix to be used in the cookie/localstorage name
 * @returns {string} the value of the cookie for the given opt type
 */ function _getStorageValue(token, options) {
    return _getStorage(options).get(_getStorageKey(token, options));
}
/**
 * Check whether the user has set the DNT/doNotTrack setting to true in their browser
 * @param {Object} [options]
 * @param {string} [options.window] - alternate window object to check; used to force various DNT settings in browser tests
 * @param {boolean} [options.ignoreDnt] - flag to ignore browser DNT settings and always return false
 * @returns {boolean} whether the DNT setting is true
 */ function _hasDoNotTrackFlagOn(options) {
    if (options && options.ignoreDnt) return false;
    var win = options && options.window || window$1;
    var nav = win["navigator"] || {};
    var hasDntOn = false;
    _.each([
        nav["doNotTrack"],
        nav["msDoNotTrack"],
        win["doNotTrack"]
    ], function(dntValue) {
        if (_.includes([
            true,
            1,
            "1",
            "yes"
        ], dntValue)) hasDntOn = true;
    });
    return hasDntOn;
}
/**
 * Set cookie/localstorage for the user indicating that they are opted in or out for the given opt type
 * @param {boolean} optValue - whether to opt the user in or out for the given opt type
 * @param {string} token - Mixpanel project tracking token
 * @param {Object} [options]
 * @param {trackFunction} [options.track] - function used for tracking a Mixpanel event to record the opt-in action
 * @param {string} [options.trackEventName] - event name to be used for tracking the opt-in action
 * @param {Object} [options.trackProperties] - set of properties to be tracked along with the opt-in action
 * @param {string} [options.persistencePrefix=__mp_opt_in_out] - custom prefix to be used in the cookie/localstorage name
 * @param {Number} [options.cookieExpiration] - number of days until the opt-in cookie expires
 * @param {string} [options.cookieDomain] - custom cookie domain
 * @param {boolean} [options.crossSiteCookie] - whether the opt-in cookie is set as cross-site-enabled
 * @param {boolean} [options.crossSubdomainCookie] - whether the opt-in cookie is set as cross-subdomain or not
 * @param {boolean} [options.secureCookie] - whether the opt-in cookie is set as secure or not
 */ function _optInOut(optValue, token, options) {
    if (!_.isString(token) || !token.length) {
        console.error("gdpr." + (optValue ? "optIn" : "optOut") + " called with an invalid token");
        return;
    }
    options = options || {};
    _getStorage(options).set(_getStorageKey(token, options), optValue ? 1 : 0, _.isNumber(options.cookieExpiration) ? options.cookieExpiration : null, !!options.crossSubdomainCookie, !!options.secureCookie, !!options.crossSiteCookie, options.cookieDomain);
    if (options.track && optValue) options.track(options.trackEventName || "$opt_in", options.trackProperties, {
        "send_immediately": true
    });
}
/**
 * Wrap a method with a check for whether the user is opted out of data tracking and cookies/localstorage for the given token
 * If the user has opted out, return early instead of executing the method.
 * If a callback argument was provided, execute it passing the 0 error code.
 * @param {function} method - wrapped method to be executed if the user has not opted out
 * @param {function} getConfigValue - getter function for the Mixpanel API token and other options to be used with opt-out check
 * @returns {*} the result of executing method OR undefined if the user has opted out
 */ function _addOptOutCheck(method, getConfigValue) {
    return function() {
        var optedOut = false;
        try {
            var token = getConfigValue.call(this, "token");
            var ignoreDnt = getConfigValue.call(this, "ignore_dnt");
            var persistenceType = getConfigValue.call(this, "opt_out_tracking_persistence_type");
            var persistencePrefix = getConfigValue.call(this, "opt_out_tracking_cookie_prefix");
            var win = getConfigValue.call(this, "window"); // used to override window during browser tests
            if (token) optedOut = hasOptedOut(token, {
                ignoreDnt: ignoreDnt,
                persistenceType: persistenceType,
                persistencePrefix: persistencePrefix,
                window: win
            });
        } catch (err) {
            console.error("Unexpected error when checking tracking opt-out status: " + err);
        }
        if (!optedOut) return method.apply(this, arguments);
        var callback = arguments[arguments.length - 1];
        if (typeof callback === "function") callback(0);
        return;
    };
}
/** @const */ var SET_ACTION = "$set";
/** @const */ var SET_ONCE_ACTION = "$set_once";
/** @const */ var UNSET_ACTION = "$unset";
/** @const */ var ADD_ACTION = "$add";
/** @const */ var APPEND_ACTION = "$append";
/** @const */ var UNION_ACTION = "$union";
/** @const */ var REMOVE_ACTION = "$remove";
/** @const */ var DELETE_ACTION = "$delete";
// Common internal methods for mixpanel.people and mixpanel.group APIs.
// These methods shouldn't involve network I/O.
var apiActions = {
    set_action: function(prop, to) {
        var data = {};
        var $set = {};
        if (_.isObject(prop)) _.each(prop, function(v, k) {
            if (!this._is_reserved_property(k)) $set[k] = v;
        }, this);
        else $set[prop] = to;
        data[SET_ACTION] = $set;
        return data;
    },
    unset_action: function(prop) {
        var data = {};
        var $unset = [];
        if (!_.isArray(prop)) prop = [
            prop
        ];
        _.each(prop, function(k) {
            if (!this._is_reserved_property(k)) $unset.push(k);
        }, this);
        data[UNSET_ACTION] = $unset;
        return data;
    },
    set_once_action: function(prop, to) {
        var data = {};
        var $set_once = {};
        if (_.isObject(prop)) _.each(prop, function(v, k) {
            if (!this._is_reserved_property(k)) $set_once[k] = v;
        }, this);
        else $set_once[prop] = to;
        data[SET_ONCE_ACTION] = $set_once;
        return data;
    },
    union_action: function(list_name, values) {
        var data = {};
        var $union = {};
        if (_.isObject(list_name)) _.each(list_name, function(v, k) {
            if (!this._is_reserved_property(k)) $union[k] = _.isArray(v) ? v : [
                v
            ];
        }, this);
        else $union[list_name] = _.isArray(values) ? values : [
            values
        ];
        data[UNION_ACTION] = $union;
        return data;
    },
    append_action: function(list_name, value) {
        var data = {};
        var $append = {};
        if (_.isObject(list_name)) _.each(list_name, function(v, k) {
            if (!this._is_reserved_property(k)) $append[k] = v;
        }, this);
        else $append[list_name] = value;
        data[APPEND_ACTION] = $append;
        return data;
    },
    remove_action: function(list_name, value) {
        var data = {};
        var $remove = {};
        if (_.isObject(list_name)) _.each(list_name, function(v, k) {
            if (!this._is_reserved_property(k)) $remove[k] = v;
        }, this);
        else $remove[list_name] = value;
        data[REMOVE_ACTION] = $remove;
        return data;
    },
    delete_action: function() {
        var data = {};
        data[DELETE_ACTION] = "";
        return data;
    }
};
/**
 * Mixpanel Group Object
 * @constructor
 */ var MixpanelGroup = function() {};
_.extend(MixpanelGroup.prototype, apiActions);
MixpanelGroup.prototype._init = function(mixpanel_instance, group_key, group_id) {
    this._mixpanel = mixpanel_instance;
    this._group_key = group_key;
    this._group_id = group_id;
};
/**
 * Set properties on a group.
 *
 * ### Usage:
 *
 *     mixpanel.get_group('company', 'mixpanel').set('Location', '405 Howard');
 *
 *     // or set multiple properties at once
 *     mixpanel.get_group('company', 'mixpanel').set({
 *          'Location': '405 Howard',
 *          'Founded' : 2009,
 *     });
 *     // properties can be strings, integers, dates, or lists
 *
 * @param {Object|String} prop If a string, this is the name of the property. If an object, this is an associative array of names and values.
 * @param {*} [to] A value to set on the given property name
 * @param {Function} [callback] If provided, the callback will be called after the tracking event
 */ MixpanelGroup.prototype.set = addOptOutCheckMixpanelGroup(function(prop, to, callback) {
    var data = this.set_action(prop, to);
    if (_.isObject(prop)) callback = to;
    return this._send_request(data, callback);
});
/**
 * Set properties on a group, only if they do not yet exist.
 * This will not overwrite previous group property values, unlike
 * group.set().
 *
 * ### Usage:
 *
 *     mixpanel.get_group('company', 'mixpanel').set_once('Location', '405 Howard');
 *
 *     // or set multiple properties at once
 *     mixpanel.get_group('company', 'mixpanel').set_once({
 *          'Location': '405 Howard',
 *          'Founded' : 2009,
 *     });
 *     // properties can be strings, integers, lists or dates
 *
 * @param {Object|String} prop If a string, this is the name of the property. If an object, this is an associative array of names and values.
 * @param {*} [to] A value to set on the given property name
 * @param {Function} [callback] If provided, the callback will be called after the tracking event
 */ MixpanelGroup.prototype.set_once = addOptOutCheckMixpanelGroup(function(prop, to, callback) {
    var data = this.set_once_action(prop, to);
    if (_.isObject(prop)) callback = to;
    return this._send_request(data, callback);
});
/**
 * Unset properties on a group permanently.
 *
 * ### Usage:
 *
 *     mixpanel.get_group('company', 'mixpanel').unset('Founded');
 *
 * @param {String} prop The name of the property.
 * @param {Function} [callback] If provided, the callback will be called after the tracking event
 */ MixpanelGroup.prototype.unset = addOptOutCheckMixpanelGroup(function(prop, callback) {
    var data = this.unset_action(prop);
    return this._send_request(data, callback);
});
/**
 * Merge a given list with a list-valued group property, excluding duplicate values.
 *
 * ### Usage:
 *
 *     // merge a value to a list, creating it if needed
 *     mixpanel.get_group('company', 'mixpanel').union('Location', ['San Francisco', 'London']);
 *
 * @param {String} list_name Name of the property.
 * @param {Array} values Values to merge with the given property
 * @param {Function} [callback] If provided, the callback will be called after the tracking event
 */ MixpanelGroup.prototype.union = addOptOutCheckMixpanelGroup(function(list_name, values, callback) {
    if (_.isObject(list_name)) callback = values;
    var data = this.union_action(list_name, values);
    return this._send_request(data, callback);
});
/**
 * Permanently delete a group.
 *
 * ### Usage:
 *
 *     mixpanel.get_group('company', 'mixpanel').delete();
 *
 * @param {Function} [callback] If provided, the callback will be called after the tracking event
 */ MixpanelGroup.prototype["delete"] = addOptOutCheckMixpanelGroup(function(callback) {
    // bracket notation above prevents a minification error related to reserved words
    var data = this.delete_action();
    return this._send_request(data, callback);
});
/**
 * Remove a property from a group. The value will be ignored if doesn't exist.
 *
 * ### Usage:
 *
 *     mixpanel.get_group('company', 'mixpanel').remove('Location', 'London');
 *
 * @param {String} list_name Name of the property.
 * @param {Object} value Value to remove from the given group property
 * @param {Function} [callback] If provided, the callback will be called after the tracking event
 */ MixpanelGroup.prototype.remove = addOptOutCheckMixpanelGroup(function(list_name, value, callback) {
    var data = this.remove_action(list_name, value);
    return this._send_request(data, callback);
});
MixpanelGroup.prototype._send_request = function(data, callback) {
    data["$group_key"] = this._group_key;
    data["$group_id"] = this._group_id;
    data["$token"] = this._get_config("token");
    var date_encoded_data = _.encodeDates(data);
    return this._mixpanel._track_or_batch({
        type: "groups",
        data: date_encoded_data,
        endpoint: this._get_config("api_host") + "/groups/",
        batcher: this._mixpanel.request_batchers.groups
    }, callback);
};
MixpanelGroup.prototype._is_reserved_property = function(prop) {
    return prop === "$group_key" || prop === "$group_id";
};
MixpanelGroup.prototype._get_config = function(conf) {
    return this._mixpanel.get_config(conf);
};
MixpanelGroup.prototype.toString = function() {
    return this._mixpanel.toString() + ".group." + this._group_key + "." + this._group_id;
};
// MixpanelGroup Exports
MixpanelGroup.prototype["remove"] = MixpanelGroup.prototype.remove;
MixpanelGroup.prototype["set"] = MixpanelGroup.prototype.set;
MixpanelGroup.prototype["set_once"] = MixpanelGroup.prototype.set_once;
MixpanelGroup.prototype["union"] = MixpanelGroup.prototype.union;
MixpanelGroup.prototype["unset"] = MixpanelGroup.prototype.unset;
MixpanelGroup.prototype["toString"] = MixpanelGroup.prototype.toString;
/**
 * Mixpanel People Object
 * @constructor
 */ var MixpanelPeople = function() {};
_.extend(MixpanelPeople.prototype, apiActions);
MixpanelPeople.prototype._init = function(mixpanel_instance) {
    this._mixpanel = mixpanel_instance;
};
/*
* Set properties on a user record.
*
* ### Usage:
*
*     mixpanel.people.set('gender', 'm');
*
*     // or set multiple properties at once
*     mixpanel.people.set({
*         'Company': 'Acme',
*         'Plan': 'Premium',
*         'Upgrade date': new Date()
*     });
*     // properties can be strings, integers, dates, or lists
*
* @param {Object|String} prop If a string, this is the name of the property. If an object, this is an associative array of names and values.
* @param {*} [to] A value to set on the given property name
* @param {Function} [callback] If provided, the callback will be called after tracking the event.
*/ MixpanelPeople.prototype.set = addOptOutCheckMixpanelPeople(function(prop, to, callback) {
    var data = this.set_action(prop, to);
    if (_.isObject(prop)) callback = to;
    // make sure that the referrer info has been updated and saved
    if (this._get_config("save_referrer")) this._mixpanel["persistence"].update_referrer_info(document.referrer);
    // update $set object with default people properties
    data[SET_ACTION] = _.extend({}, _.info.people_properties(), this._mixpanel["persistence"].get_referrer_info(), data[SET_ACTION]);
    return this._send_request(data, callback);
});
/*
* Set properties on a user record, only if they do not yet exist.
* This will not overwrite previous people property values, unlike
* people.set().
*
* ### Usage:
*
*     mixpanel.people.set_once('First Login Date', new Date());
*
*     // or set multiple properties at once
*     mixpanel.people.set_once({
*         'First Login Date': new Date(),
*         'Starting Plan': 'Premium'
*     });
*
*     // properties can be strings, integers or dates
*
* @param {Object|String} prop If a string, this is the name of the property. If an object, this is an associative array of names and values.
* @param {*} [to] A value to set on the given property name
* @param {Function} [callback] If provided, the callback will be called after tracking the event.
*/ MixpanelPeople.prototype.set_once = addOptOutCheckMixpanelPeople(function(prop, to, callback) {
    var data = this.set_once_action(prop, to);
    if (_.isObject(prop)) callback = to;
    return this._send_request(data, callback);
});
/*
* Unset properties on a user record (permanently removes the properties and their values from a profile).
*
* ### Usage:
*
*     mixpanel.people.unset('gender');
*
*     // or unset multiple properties at once
*     mixpanel.people.unset(['gender', 'Company']);
*
* @param {Array|String} prop If a string, this is the name of the property. If an array, this is a list of property names.
* @param {Function} [callback] If provided, the callback will be called after tracking the event.
*/ MixpanelPeople.prototype.unset = addOptOutCheckMixpanelPeople(function(prop, callback) {
    var data = this.unset_action(prop);
    return this._send_request(data, callback);
});
/*
* Increment/decrement numeric people analytics properties.
*
* ### Usage:
*
*     mixpanel.people.increment('page_views', 1);
*
*     // or, for convenience, if you're just incrementing a counter by
*     // 1, you can simply do
*     mixpanel.people.increment('page_views');
*
*     // to decrement a counter, pass a negative number
*     mixpanel.people.increment('credits_left', -1);
*
*     // like mixpanel.people.set(), you can increment multiple
*     // properties at once:
*     mixpanel.people.increment({
*         counter1: 1,
*         counter2: 6
*     });
*
* @param {Object|String} prop If a string, this is the name of the property. If an object, this is an associative array of names and numeric values.
* @param {Number} [by] An amount to increment the given property
* @param {Function} [callback] If provided, the callback will be called after tracking the event.
*/ MixpanelPeople.prototype.increment = addOptOutCheckMixpanelPeople(function(prop, by, callback) {
    var data = {};
    var $add = {};
    if (_.isObject(prop)) {
        _.each(prop, function(v, k) {
            if (!this._is_reserved_property(k)) {
                if (isNaN(parseFloat(v))) {
                    console.error("Invalid increment value passed to mixpanel.people.increment - must be a number");
                    return;
                } else $add[k] = v;
            }
        }, this);
        callback = by;
    } else {
        // convenience: mixpanel.people.increment('property'); will
        // increment 'property' by 1
        if (_.isUndefined(by)) by = 1;
        $add[prop] = by;
    }
    data[ADD_ACTION] = $add;
    return this._send_request(data, callback);
});
/*
* Append a value to a list-valued people analytics property.
*
* ### Usage:
*
*     // append a value to a list, creating it if needed
*     mixpanel.people.append('pages_visited', 'homepage');
*
*     // like mixpanel.people.set(), you can append multiple
*     // properties at once:
*     mixpanel.people.append({
*         list1: 'bob',
*         list2: 123
*     });
*
* @param {Object|String} list_name If a string, this is the name of the property. If an object, this is an associative array of names and values.
* @param {*} [value] value An item to append to the list
* @param {Function} [callback] If provided, the callback will be called after tracking the event.
*/ MixpanelPeople.prototype.append = addOptOutCheckMixpanelPeople(function(list_name, value, callback) {
    if (_.isObject(list_name)) callback = value;
    var data = this.append_action(list_name, value);
    return this._send_request(data, callback);
});
/*
* Remove a value from a list-valued people analytics property.
*
* ### Usage:
*
*     mixpanel.people.remove('School', 'UCB');
*
* @param {Object|String} list_name If a string, this is the name of the property. If an object, this is an associative array of names and values.
* @param {*} [value] value Item to remove from the list
* @param {Function} [callback] If provided, the callback will be called after tracking the event.
*/ MixpanelPeople.prototype.remove = addOptOutCheckMixpanelPeople(function(list_name, value, callback) {
    if (_.isObject(list_name)) callback = value;
    var data = this.remove_action(list_name, value);
    return this._send_request(data, callback);
});
/*
* Merge a given list with a list-valued people analytics property,
* excluding duplicate values.
*
* ### Usage:
*
*     // merge a value to a list, creating it if needed
*     mixpanel.people.union('pages_visited', 'homepage');
*
*     // like mixpanel.people.set(), you can append multiple
*     // properties at once:
*     mixpanel.people.union({
*         list1: 'bob',
*         list2: 123
*     });
*
*     // like mixpanel.people.append(), you can append multiple
*     // values to the same list:
*     mixpanel.people.union({
*         list1: ['bob', 'billy']
*     });
*
* @param {Object|String} list_name If a string, this is the name of the property. If an object, this is an associative array of names and values.
* @param {*} [value] Value / values to merge with the given property
* @param {Function} [callback] If provided, the callback will be called after tracking the event.
*/ MixpanelPeople.prototype.union = addOptOutCheckMixpanelPeople(function(list_name, values, callback) {
    if (_.isObject(list_name)) callback = values;
    var data = this.union_action(list_name, values);
    return this._send_request(data, callback);
});
/*
 * Record that you have charged the current user a certain amount
 * of money. Charges recorded with track_charge() will appear in the
 * Mixpanel revenue report.
 *
 * ### Usage:
 *
 *     // charge a user $50
 *     mixpanel.people.track_charge(50);
 *
 *     // charge a user $30.50 on the 2nd of january
 *     mixpanel.people.track_charge(30.50, {
 *         '$time': new Date('jan 1 2012')
 *     });
 *
 * @param {Number} amount The amount of money charged to the current user
 * @param {Object} [properties] An associative array of properties associated with the charge
 * @param {Function} [callback] If provided, the callback will be called when the server responds
 * @deprecated
 */ MixpanelPeople.prototype.track_charge = addOptOutCheckMixpanelPeople(function(amount, properties, callback) {
    if (!_.isNumber(amount)) {
        amount = parseFloat(amount);
        if (isNaN(amount)) {
            console.error("Invalid value passed to mixpanel.people.track_charge - must be a number");
            return;
        }
    }
    return this.append("$transactions", _.extend({
        "$amount": amount
    }, properties), callback);
});
/*
 * Permanently clear all revenue report transactions from the
 * current user's people analytics profile.
 *
 * ### Usage:
 *
 *     mixpanel.people.clear_charges();
 *
 * @param {Function} [callback] If provided, the callback will be called after tracking the event.
 * @deprecated
 */ MixpanelPeople.prototype.clear_charges = function(callback) {
    return this.set("$transactions", [], callback);
};
/*
* Permanently deletes the current people analytics profile from
* Mixpanel (using the current distinct_id).
*
* ### Usage:
*
*     // remove the all data you have stored about the current user
*     mixpanel.people.delete_user();
*
*/ MixpanelPeople.prototype.delete_user = function() {
    if (!this._identify_called()) {
        console.error("mixpanel.people.delete_user() requires you to call identify() first");
        return;
    }
    var data = {
        "$delete": this._mixpanel.get_distinct_id()
    };
    return this._send_request(data);
};
MixpanelPeople.prototype.toString = function() {
    return this._mixpanel.toString() + ".people";
};
MixpanelPeople.prototype._send_request = function(data, callback) {
    data["$token"] = this._get_config("token");
    data["$distinct_id"] = this._mixpanel.get_distinct_id();
    var device_id = this._mixpanel.get_property("$device_id");
    var user_id = this._mixpanel.get_property("$user_id");
    var had_persisted_distinct_id = this._mixpanel.get_property("$had_persisted_distinct_id");
    if (device_id) data["$device_id"] = device_id;
    if (user_id) data["$user_id"] = user_id;
    if (had_persisted_distinct_id) data["$had_persisted_distinct_id"] = had_persisted_distinct_id;
    var date_encoded_data = _.encodeDates(data);
    if (!this._identify_called()) {
        this._enqueue(data);
        if (!_.isUndefined(callback)) {
            if (this._get_config("verbose")) callback({
                status: -1,
                error: null
            });
            else callback(-1);
        }
        return _.truncate(date_encoded_data, 255);
    }
    return this._mixpanel._track_or_batch({
        type: "people",
        data: date_encoded_data,
        endpoint: this._get_config("api_host") + "/engage/",
        batcher: this._mixpanel.request_batchers.people
    }, callback);
};
MixpanelPeople.prototype._get_config = function(conf_var) {
    return this._mixpanel.get_config(conf_var);
};
MixpanelPeople.prototype._identify_called = function() {
    return this._mixpanel._flags.identify_called === true;
};
// Queue up engage operations if identify hasn't been called yet.
MixpanelPeople.prototype._enqueue = function(data) {
    if (SET_ACTION in data) this._mixpanel["persistence"]._add_to_people_queue(SET_ACTION, data);
    else if (SET_ONCE_ACTION in data) this._mixpanel["persistence"]._add_to_people_queue(SET_ONCE_ACTION, data);
    else if (UNSET_ACTION in data) this._mixpanel["persistence"]._add_to_people_queue(UNSET_ACTION, data);
    else if (ADD_ACTION in data) this._mixpanel["persistence"]._add_to_people_queue(ADD_ACTION, data);
    else if (APPEND_ACTION in data) this._mixpanel["persistence"]._add_to_people_queue(APPEND_ACTION, data);
    else if (REMOVE_ACTION in data) this._mixpanel["persistence"]._add_to_people_queue(REMOVE_ACTION, data);
    else if (UNION_ACTION in data) this._mixpanel["persistence"]._add_to_people_queue(UNION_ACTION, data);
    else console.error("Invalid call to _enqueue():", data);
};
MixpanelPeople.prototype._flush_one_queue = function(action, action_method, callback, queue_to_params_fn) {
    var _this = this;
    var queued_data = _.extend({}, this._mixpanel["persistence"]._get_queue(action));
    var action_params = queued_data;
    if (!_.isUndefined(queued_data) && _.isObject(queued_data) && !_.isEmptyObject(queued_data)) {
        _this._mixpanel["persistence"]._pop_from_people_queue(action, queued_data);
        if (queue_to_params_fn) action_params = queue_to_params_fn(queued_data);
        action_method.call(_this, action_params, function(response, data) {
            // on bad response, we want to add it back to the queue
            if (response === 0) _this._mixpanel["persistence"]._add_to_people_queue(action, queued_data);
            if (!_.isUndefined(callback)) callback(response, data);
        });
    }
};
// Flush queued engage operations - order does not matter,
// and there are network level race conditions anyway
MixpanelPeople.prototype._flush = function(_set_callback, _add_callback, _append_callback, _set_once_callback, _union_callback, _unset_callback, _remove_callback) {
    var _this = this;
    var $append_queue = this._mixpanel["persistence"]._get_queue(APPEND_ACTION);
    var $remove_queue = this._mixpanel["persistence"]._get_queue(REMOVE_ACTION);
    this._flush_one_queue(SET_ACTION, this.set, _set_callback);
    this._flush_one_queue(SET_ONCE_ACTION, this.set_once, _set_once_callback);
    this._flush_one_queue(UNSET_ACTION, this.unset, _unset_callback, function(queue) {
        return _.keys(queue);
    });
    this._flush_one_queue(ADD_ACTION, this.increment, _add_callback);
    this._flush_one_queue(UNION_ACTION, this.union, _union_callback);
    // we have to fire off each $append individually since there is
    // no concat method server side
    if (!_.isUndefined($append_queue) && _.isArray($append_queue) && $append_queue.length) {
        var $append_item;
        var append_callback = function(response, data) {
            if (response === 0) _this._mixpanel["persistence"]._add_to_people_queue(APPEND_ACTION, $append_item);
            if (!_.isUndefined(_append_callback)) _append_callback(response, data);
        };
        for(var i = $append_queue.length - 1; i >= 0; i--){
            $append_item = $append_queue.pop();
            if (!_.isEmptyObject($append_item)) _this.append($append_item, append_callback);
        }
        // Save the shortened append queue
        _this._mixpanel["persistence"].save();
    }
    // same for $remove
    if (!_.isUndefined($remove_queue) && _.isArray($remove_queue) && $remove_queue.length) {
        var $remove_item;
        var remove_callback = function(response, data) {
            if (response === 0) _this._mixpanel["persistence"]._add_to_people_queue(REMOVE_ACTION, $remove_item);
            if (!_.isUndefined(_remove_callback)) _remove_callback(response, data);
        };
        for(var j = $remove_queue.length - 1; j >= 0; j--){
            $remove_item = $remove_queue.pop();
            if (!_.isEmptyObject($remove_item)) _this.remove($remove_item, remove_callback);
        }
        _this._mixpanel["persistence"].save();
    }
};
MixpanelPeople.prototype._is_reserved_property = function(prop) {
    return prop === "$distinct_id" || prop === "$token" || prop === "$device_id" || prop === "$user_id" || prop === "$had_persisted_distinct_id";
};
// MixpanelPeople Exports
MixpanelPeople.prototype["set"] = MixpanelPeople.prototype.set;
MixpanelPeople.prototype["set_once"] = MixpanelPeople.prototype.set_once;
MixpanelPeople.prototype["unset"] = MixpanelPeople.prototype.unset;
MixpanelPeople.prototype["increment"] = MixpanelPeople.prototype.increment;
MixpanelPeople.prototype["append"] = MixpanelPeople.prototype.append;
MixpanelPeople.prototype["remove"] = MixpanelPeople.prototype.remove;
MixpanelPeople.prototype["union"] = MixpanelPeople.prototype.union;
MixpanelPeople.prototype["track_charge"] = MixpanelPeople.prototype.track_charge;
MixpanelPeople.prototype["clear_charges"] = MixpanelPeople.prototype.clear_charges;
MixpanelPeople.prototype["delete_user"] = MixpanelPeople.prototype.delete_user;
MixpanelPeople.prototype["toString"] = MixpanelPeople.prototype.toString;
/*
 * Constants
 */ /** @const */ var SET_QUEUE_KEY = "__mps";
/** @const */ var SET_ONCE_QUEUE_KEY = "__mpso";
/** @const */ var UNSET_QUEUE_KEY = "__mpus";
/** @const */ var ADD_QUEUE_KEY = "__mpa";
/** @const */ var APPEND_QUEUE_KEY = "__mpap";
/** @const */ var REMOVE_QUEUE_KEY = "__mpr";
/** @const */ var UNION_QUEUE_KEY = "__mpu";
// This key is deprecated, but we want to check for it to see whether aliasing is allowed.
/** @const */ var PEOPLE_DISTINCT_ID_KEY = "$people_distinct_id";
/** @const */ var ALIAS_ID_KEY = "__alias";
/** @const */ var EVENT_TIMERS_KEY = "__timers";
/** @const */ var RESERVED_PROPERTIES = [
    SET_QUEUE_KEY,
    SET_ONCE_QUEUE_KEY,
    UNSET_QUEUE_KEY,
    ADD_QUEUE_KEY,
    APPEND_QUEUE_KEY,
    REMOVE_QUEUE_KEY,
    UNION_QUEUE_KEY,
    PEOPLE_DISTINCT_ID_KEY,
    ALIAS_ID_KEY,
    EVENT_TIMERS_KEY
];
/**
 * Mixpanel Persistence Object
 * @constructor
 */ var MixpanelPersistence = function(config) {
    this["props"] = {};
    this.campaign_params_saved = false;
    if (config["persistence_name"]) this.name = "mp_" + config["persistence_name"];
    else this.name = "mp_" + config["token"] + "_mixpanel";
    var storage_type = config["persistence"];
    if (storage_type !== "cookie" && storage_type !== "localStorage") {
        console.critical("Unknown persistence type " + storage_type + "; falling back to cookie");
        storage_type = config["persistence"] = "cookie";
    }
    if (storage_type === "localStorage" && _.localStorage.is_supported()) this.storage = _.localStorage;
    else this.storage = _.cookie;
    this.load();
    this.update_config(config);
    this.upgrade(config);
    this.save();
};
MixpanelPersistence.prototype.properties = function() {
    var p = {};
    // Filter out reserved properties
    _.each(this["props"], function(v, k) {
        if (!_.include(RESERVED_PROPERTIES, k)) p[k] = v;
    });
    return p;
};
MixpanelPersistence.prototype.load = function() {
    if (this.disabled) return;
    var entry = this.storage.parse(this.name);
    if (entry) this["props"] = _.extend({}, entry);
};
MixpanelPersistence.prototype.upgrade = function(config) {
    var upgrade_from_old_lib = config["upgrade"], old_cookie_name, old_cookie;
    if (upgrade_from_old_lib) {
        old_cookie_name = "mp_super_properties";
        // Case where they had a custom cookie name before.
        if (typeof upgrade_from_old_lib === "string") old_cookie_name = upgrade_from_old_lib;
        old_cookie = this.storage.parse(old_cookie_name);
        // remove the cookie
        this.storage.remove(old_cookie_name);
        this.storage.remove(old_cookie_name, true);
        if (old_cookie) this["props"] = _.extend(this["props"], old_cookie["all"], old_cookie["events"]);
    }
    if (!config["cookie_name"] && config["name"] !== "mixpanel") {
        // special case to handle people with cookies of the form
        // mp_TOKEN_INSTANCENAME from the first release of this library
        old_cookie_name = "mp_" + config["token"] + "_" + config["name"];
        old_cookie = this.storage.parse(old_cookie_name);
        if (old_cookie) {
            this.storage.remove(old_cookie_name);
            this.storage.remove(old_cookie_name, true);
            // Save the prop values that were in the cookie from before -
            // this should only happen once as we delete the old one.
            this.register_once(old_cookie);
        }
    }
    if (this.storage === _.localStorage) {
        old_cookie = _.cookie.parse(this.name);
        _.cookie.remove(this.name);
        _.cookie.remove(this.name, true);
        if (old_cookie) this.register_once(old_cookie);
    }
};
MixpanelPersistence.prototype.save = function() {
    if (this.disabled) return;
    this.storage.set(this.name, _.JSONEncode(this["props"]), this.expire_days, this.cross_subdomain, this.secure, this.cross_site, this.cookie_domain);
};
MixpanelPersistence.prototype.remove = function() {
    // remove both domain and subdomain cookies
    this.storage.remove(this.name, false, this.cookie_domain);
    this.storage.remove(this.name, true, this.cookie_domain);
};
// removes the storage entry and deletes all loaded data
// forced name for tests
MixpanelPersistence.prototype.clear = function() {
    this.remove();
    this["props"] = {};
};
/**
* @param {Object} props
* @param {*=} default_value
* @param {number=} days
*/ MixpanelPersistence.prototype.register_once = function(props, default_value, days) {
    if (_.isObject(props)) {
        if (typeof default_value === "undefined") default_value = "None";
        this.expire_days = typeof days === "undefined" ? this.default_expiry : days;
        _.each(props, function(val, prop) {
            if (!this["props"].hasOwnProperty(prop) || this["props"][prop] === default_value) this["props"][prop] = val;
        }, this);
        this.save();
        return true;
    }
    return false;
};
/**
* @param {Object} props
* @param {number=} days
*/ MixpanelPersistence.prototype.register = function(props, days) {
    if (_.isObject(props)) {
        this.expire_days = typeof days === "undefined" ? this.default_expiry : days;
        _.extend(this["props"], props);
        this.save();
        return true;
    }
    return false;
};
MixpanelPersistence.prototype.unregister = function(prop) {
    if (prop in this["props"]) {
        delete this["props"][prop];
        this.save();
    }
};
MixpanelPersistence.prototype.update_search_keyword = function(referrer) {
    this.register(_.info.searchInfo(referrer));
};
// EXPORTED METHOD, we test this directly.
MixpanelPersistence.prototype.update_referrer_info = function(referrer) {
    // If referrer doesn't exist, we want to note the fact that it was type-in traffic.
    this.register_once({
        "$initial_referrer": referrer || "$direct",
        "$initial_referring_domain": _.info.referringDomain(referrer) || "$direct"
    }, "");
};
MixpanelPersistence.prototype.get_referrer_info = function() {
    return _.strip_empty_properties({
        "$initial_referrer": this["props"]["$initial_referrer"],
        "$initial_referring_domain": this["props"]["$initial_referring_domain"]
    });
};
// safely fills the passed in object with stored properties,
// does not override any properties defined in both
// returns the passed in object
MixpanelPersistence.prototype.safe_merge = function(props) {
    _.each(this["props"], function(val, prop) {
        if (!(prop in props)) props[prop] = val;
    });
    return props;
};
MixpanelPersistence.prototype.update_config = function(config) {
    this.default_expiry = this.expire_days = config["cookie_expiration"];
    this.set_disabled(config["disable_persistence"]);
    this.set_cookie_domain(config["cookie_domain"]);
    this.set_cross_site(config["cross_site_cookie"]);
    this.set_cross_subdomain(config["cross_subdomain_cookie"]);
    this.set_secure(config["secure_cookie"]);
};
MixpanelPersistence.prototype.set_disabled = function(disabled) {
    this.disabled = disabled;
    if (this.disabled) this.remove();
    else this.save();
};
MixpanelPersistence.prototype.set_cookie_domain = function(cookie_domain) {
    if (cookie_domain !== this.cookie_domain) {
        this.remove();
        this.cookie_domain = cookie_domain;
        this.save();
    }
};
MixpanelPersistence.prototype.set_cross_site = function(cross_site) {
    if (cross_site !== this.cross_site) {
        this.cross_site = cross_site;
        this.remove();
        this.save();
    }
};
MixpanelPersistence.prototype.set_cross_subdomain = function(cross_subdomain) {
    if (cross_subdomain !== this.cross_subdomain) {
        this.cross_subdomain = cross_subdomain;
        this.remove();
        this.save();
    }
};
MixpanelPersistence.prototype.get_cross_subdomain = function() {
    return this.cross_subdomain;
};
MixpanelPersistence.prototype.set_secure = function(secure) {
    if (secure !== this.secure) {
        this.secure = secure ? true : false;
        this.remove();
        this.save();
    }
};
MixpanelPersistence.prototype._add_to_people_queue = function(queue, data) {
    var q_key = this._get_queue_key(queue), q_data = data[queue], set_q = this._get_or_create_queue(SET_ACTION), set_once_q = this._get_or_create_queue(SET_ONCE_ACTION), unset_q = this._get_or_create_queue(UNSET_ACTION), add_q = this._get_or_create_queue(ADD_ACTION), union_q = this._get_or_create_queue(UNION_ACTION), remove_q = this._get_or_create_queue(REMOVE_ACTION, []), append_q = this._get_or_create_queue(APPEND_ACTION, []);
    if (q_key === SET_QUEUE_KEY) {
        // Update the set queue - we can override any existing values
        _.extend(set_q, q_data);
        // if there was a pending increment, override it
        // with the set.
        this._pop_from_people_queue(ADD_ACTION, q_data);
        // if there was a pending union, override it
        // with the set.
        this._pop_from_people_queue(UNION_ACTION, q_data);
        this._pop_from_people_queue(UNSET_ACTION, q_data);
    } else if (q_key === SET_ONCE_QUEUE_KEY) {
        // only queue the data if there is not already a set_once call for it.
        _.each(q_data, function(v, k) {
            if (!(k in set_once_q)) set_once_q[k] = v;
        });
        this._pop_from_people_queue(UNSET_ACTION, q_data);
    } else if (q_key === UNSET_QUEUE_KEY) _.each(q_data, function(prop) {
        // undo previously-queued actions on this key
        _.each([
            set_q,
            set_once_q,
            add_q,
            union_q
        ], function(enqueued_obj) {
            if (prop in enqueued_obj) delete enqueued_obj[prop];
        });
        _.each(append_q, function(append_obj) {
            if (prop in append_obj) delete append_obj[prop];
        });
        unset_q[prop] = true;
    });
    else if (q_key === ADD_QUEUE_KEY) {
        _.each(q_data, function(v, k) {
            // If it exists in the set queue, increment
            // the value
            if (k in set_q) set_q[k] += v;
            else {
                // If it doesn't exist, update the add
                // queue
                if (!(k in add_q)) add_q[k] = 0;
                add_q[k] += v;
            }
        }, this);
        this._pop_from_people_queue(UNSET_ACTION, q_data);
    } else if (q_key === UNION_QUEUE_KEY) {
        _.each(q_data, function(v, k) {
            if (_.isArray(v)) {
                if (!(k in union_q)) union_q[k] = [];
                // We may send duplicates, the server will dedup them.
                union_q[k] = union_q[k].concat(v);
            }
        });
        this._pop_from_people_queue(UNSET_ACTION, q_data);
    } else if (q_key === REMOVE_QUEUE_KEY) {
        remove_q.push(q_data);
        this._pop_from_people_queue(APPEND_ACTION, q_data);
    } else if (q_key === APPEND_QUEUE_KEY) {
        append_q.push(q_data);
        this._pop_from_people_queue(UNSET_ACTION, q_data);
    }
    console.log("MIXPANEL PEOPLE REQUEST (QUEUED, PENDING IDENTIFY):");
    console.log(data);
    this.save();
};
MixpanelPersistence.prototype._pop_from_people_queue = function(queue, data) {
    var q = this._get_queue(queue);
    if (!_.isUndefined(q)) {
        _.each(data, function(v, k) {
            if (queue === APPEND_ACTION || queue === REMOVE_ACTION) // list actions: only remove if both k+v match
            // e.g. remove should not override append in a case like
            // append({foo: 'bar'}); remove({foo: 'qux'})
            _.each(q, function(queued_action) {
                if (queued_action[k] === v) delete queued_action[k];
            });
            else delete q[k];
        }, this);
        this.save();
    }
};
MixpanelPersistence.prototype._get_queue_key = function(queue) {
    if (queue === SET_ACTION) return SET_QUEUE_KEY;
    else if (queue === SET_ONCE_ACTION) return SET_ONCE_QUEUE_KEY;
    else if (queue === UNSET_ACTION) return UNSET_QUEUE_KEY;
    else if (queue === ADD_ACTION) return ADD_QUEUE_KEY;
    else if (queue === APPEND_ACTION) return APPEND_QUEUE_KEY;
    else if (queue === REMOVE_ACTION) return REMOVE_QUEUE_KEY;
    else if (queue === UNION_ACTION) return UNION_QUEUE_KEY;
    else console.error("Invalid queue:", queue);
};
MixpanelPersistence.prototype._get_queue = function(queue) {
    return this["props"][this._get_queue_key(queue)];
};
MixpanelPersistence.prototype._get_or_create_queue = function(queue, default_val) {
    var key = this._get_queue_key(queue);
    default_val = _.isUndefined(default_val) ? {} : default_val;
    return this["props"][key] || (this["props"][key] = default_val);
};
MixpanelPersistence.prototype.set_event_timer = function(event_name, timestamp) {
    var timers = this["props"][EVENT_TIMERS_KEY] || {};
    timers[event_name] = timestamp;
    this["props"][EVENT_TIMERS_KEY] = timers;
    this.save();
};
MixpanelPersistence.prototype.remove_event_timer = function(event_name) {
    var timers = this["props"][EVENT_TIMERS_KEY] || {};
    var timestamp = timers[event_name];
    if (!_.isUndefined(timestamp)) {
        delete this["props"][EVENT_TIMERS_KEY][event_name];
        this.save();
    }
    return timestamp;
};
/*
 * Mixpanel JS Library
 *
 * Copyright 2012, Mixpanel, Inc. All Rights Reserved
 * http://mixpanel.com/
 *
 * Includes portions of Underscore.js
 * http://documentcloud.github.com/underscore/
 * (c) 2011 Jeremy Ashkenas, DocumentCloud Inc.
 * Released under the MIT License.
 */ // ==ClosureCompiler==
// @compilation_level ADVANCED_OPTIMIZATIONS
// @output_file_name mixpanel-2.8.min.js
// ==/ClosureCompiler==
/*
SIMPLE STYLE GUIDE:

this.x === public function
this._x === internal - only use within this file
this.__x === private - only use within the class

Globals should be all caps
*/ var init_type; // MODULE or SNIPPET loader
var mixpanel_master; // main mixpanel instance / object
var INIT_MODULE = 0;
var INIT_SNIPPET = 1;
var IDENTITY_FUNC = function(x) {
    return x;
};
var NOOP_FUNC = function() {};
/** @const */ var PRIMARY_INSTANCE_NAME = "mixpanel";
/** @const */ var PAYLOAD_TYPE_BASE64 = "base64";
/** @const */ var PAYLOAD_TYPE_JSON = "json";
/** @const */ var DEVICE_ID_PREFIX = "$device:";
/*
 * Dynamic... constants? Is that an oxymoron?
 */ // http://hacks.mozilla.org/2009/07/cross-site-xmlhttprequest-with-cors/
// https://developer.mozilla.org/en-US/docs/DOM/XMLHttpRequest#withCredentials
var USE_XHR = window$1.XMLHttpRequest && "withCredentials" in new XMLHttpRequest();
// IE<10 does not support cross-origin XHR's but script tags
// with defer won't block window.onload; ENQUEUE_REQUESTS
// should only be true for Opera<12
var ENQUEUE_REQUESTS = !USE_XHR && userAgent.indexOf("MSIE") === -1 && userAgent.indexOf("Mozilla") === -1;
// save reference to navigator.sendBeacon so it can be minified
var sendBeacon = null;
if (navigator["sendBeacon"]) sendBeacon = function() {
    // late reference to navigator.sendBeacon to allow patching/spying
    return navigator["sendBeacon"].apply(navigator, arguments);
};
/*
 * Module-level globals
 */ var DEFAULT_CONFIG = {
    "api_host": "https://api-js.mixpanel.com",
    "api_method": "POST",
    "api_transport": "XHR",
    "api_payload_format": PAYLOAD_TYPE_BASE64,
    "app_host": "https://mixpanel.com",
    "cdn": "https://cdn.mxpnl.com",
    "cross_site_cookie": false,
    "cross_subdomain_cookie": true,
    "error_reporter": NOOP_FUNC,
    "persistence": "cookie",
    "persistence_name": "",
    "cookie_domain": "",
    "cookie_name": "",
    "loaded": NOOP_FUNC,
    "track_marketing": true,
    "track_pageview": false,
    "skip_first_touch_marketing": false,
    "store_google": true,
    "save_referrer": true,
    "test": false,
    "verbose": false,
    "img": false,
    "debug": false,
    "track_links_timeout": 300,
    "cookie_expiration": 365,
    "upgrade": false,
    "disable_persistence": false,
    "disable_cookie": false,
    "secure_cookie": false,
    "ip": true,
    "opt_out_tracking_by_default": false,
    "opt_out_persistence_by_default": false,
    "opt_out_tracking_persistence_type": "localStorage",
    "opt_out_tracking_cookie_prefix": null,
    "property_blacklist": [],
    "xhr_headers": {},
    "ignore_dnt": false,
    "batch_requests": true,
    "batch_size": 50,
    "batch_flush_interval_ms": 5000,
    "batch_request_timeout_ms": 90000,
    "batch_autostart": true,
    "hooks": {}
};
var DOM_LOADED = false;
/**
 * Mixpanel Library Object
 * @constructor
 */ var MixpanelLib = function() {};
/**
 * create_mplib(token:string, config:object, name:string)
 *
 * This function is used by the init method of MixpanelLib objects
 * as well as the main initializer at the end of the JSLib (that
 * initializes document.mixpanel as well as any additional instances
 * declared before this file has loaded).
 */ var create_mplib = function(token, config, name) {
    var instance, target = name === PRIMARY_INSTANCE_NAME ? mixpanel_master : mixpanel_master[name];
    if (target && init_type === INIT_MODULE) instance = target;
    else {
        if (target && !_.isArray(target)) {
            console.error("You have already initialized " + name);
            return;
        }
        instance = new MixpanelLib();
    }
    instance._cached_groups = {}; // cache groups in a pool
    instance._init(token, config, name);
    instance["people"] = new MixpanelPeople();
    instance["people"]._init(instance);
    if (!instance.get_config("skip_first_touch_marketing")) {
        // We need null UTM params in the object because
        // UTM parameters act as a tuple. If any UTM param
        // is present, then we set all UTM params including
        // empty ones together
        var utm_params = _.info.campaignParams(null);
        var initial_utm_params = {};
        var has_utm = false;
        _.each(utm_params, function(utm_value, utm_key) {
            initial_utm_params["initial_" + utm_key] = utm_value;
            if (utm_value) has_utm = true;
        });
        if (has_utm) instance["people"].set_once(initial_utm_params);
    }
    // if any instance on the page has debug = true, we set the
    // global debug to be true
    Config.DEBUG = Config.DEBUG || instance.get_config("debug");
    // if target is not defined, we called init after the lib already
    // loaded, so there won't be an array of things to execute
    if (!_.isUndefined(target) && _.isArray(target)) {
        // Crunch through the people queue first - we queue this data up &
        // flush on identify, so it's better to do all these operations first
        instance._execute_array.call(instance["people"], target["people"]);
        instance._execute_array(target);
    }
    return instance;
};
// Initialization methods
/**
 * This function initializes a new instance of the Mixpanel tracking object.
 * All new instances are added to the main mixpanel object as sub properties (such as
 * mixpanel.library_name) and also returned by this function. To define a
 * second instance on the page, you would call:
 *
 *     mixpanel.init('new token', { your: 'config' }, 'library_name');
 *
 * and use it like so:
 *
 *     mixpanel.library_name.track(...);
 *
 * @param {String} token   Your Mixpanel API token
 * @param {Object} [config]  A dictionary of config options to override. <a href="https://github.com/mixpanel/mixpanel-js/blob/v2.46.0/src/mixpanel-core.js#L88-L127">See a list of default config options</a>.
 * @param {String} [name]    The name for the new mixpanel instance that you want created
 */ MixpanelLib.prototype.init = function(token, config, name) {
    if (_.isUndefined(name)) {
        this.report_error("You must name your new library: init(token, config, name)");
        return;
    }
    if (name === PRIMARY_INSTANCE_NAME) {
        this.report_error("You must initialize the main mixpanel object right after you include the Mixpanel js snippet");
        return;
    }
    var instance = create_mplib(token, config, name);
    mixpanel_master[name] = instance;
    instance._loaded();
    return instance;
};
// mixpanel._init(token:string, config:object, name:string)
//
// This function sets up the current instance of the mixpanel
// library.  The difference between this method and the init(...)
// method is this one initializes the actual instance, whereas the
// init(...) method sets up a new library and calls _init on it.
//
MixpanelLib.prototype._init = function(token, config, name) {
    config = config || {};
    this["__loaded"] = true;
    this["config"] = {};
    var variable_features = {};
    // default to JSON payload for standard mixpanel.com API hosts
    if (!("api_payload_format" in config)) {
        var api_host = config["api_host"] || DEFAULT_CONFIG["api_host"];
        if (api_host.match(/\.mixpanel\.com/)) variable_features["api_payload_format"] = PAYLOAD_TYPE_JSON;
    }
    this.set_config(_.extend({}, DEFAULT_CONFIG, variable_features, config, {
        "name": name,
        "token": token,
        "callback_fn": (name === PRIMARY_INSTANCE_NAME ? name : PRIMARY_INSTANCE_NAME + "." + name) + "._jsc"
    }));
    this["_jsc"] = NOOP_FUNC;
    this.__dom_loaded_queue = [];
    this.__request_queue = [];
    this.__disabled_events = [];
    this._flags = {
        "disable_all_events": false,
        "identify_called": false
    };
    // set up request queueing/batching
    this.request_batchers = {};
    this._batch_requests = this.get_config("batch_requests");
    if (this._batch_requests) {
        if (!_.localStorage.is_supported(true) || !USE_XHR) {
            this._batch_requests = false;
            console.log("Turning off Mixpanel request-queueing; needs XHR and localStorage support");
        } else {
            this.init_batchers();
            if (sendBeacon && window$1.addEventListener) {
                // Before page closes or hides (user tabs away etc), attempt to flush any events
                // queued up via navigator.sendBeacon. Since sendBeacon doesn't report success/failure,
                // events will not be removed from the persistent store; if the site is loaded again,
                // the events will be flushed again on startup and deduplicated on the Mixpanel server
                // side.
                // There is no reliable way to capture only page close events, so we lean on the
                // visibilitychange and pagehide events as recommended at
                // https://developer.mozilla.org/en-US/docs/Web/API/Window/unload_event#usage_notes.
                // These events fire when the user clicks away from the current page/tab, so will occur
                // more frequently than page unload, but are the only mechanism currently for capturing
                // this scenario somewhat reliably.
                var flush_on_unload = _.bind(function() {
                    if (!this.request_batchers.events.stopped) this.request_batchers.events.flush({
                        unloading: true
                    });
                }, this);
                window$1.addEventListener("pagehide", function(ev) {
                    if (ev["persisted"]) flush_on_unload();
                });
                window$1.addEventListener("visibilitychange", function() {
                    if (document$1["visibilityState"] === "hidden") flush_on_unload();
                });
            }
        }
    }
    this["persistence"] = this["cookie"] = new MixpanelPersistence(this["config"]);
    this.unpersisted_superprops = {};
    this._gdpr_init();
    var uuid = _.UUID();
    if (!this.get_distinct_id()) // There is no need to set the distinct id
    // or the device id if something was already stored
    // in the persitence
    this.register_once({
        "distinct_id": DEVICE_ID_PREFIX + uuid,
        "$device_id": uuid
    }, "");
    if (this.get_config("track_pageview")) this.track_pageview();
};
// Private methods
MixpanelLib.prototype._loaded = function() {
    this.get_config("loaded")(this);
    this._set_default_superprops();
};
// update persistence with info on referrer, UTM params, etc
MixpanelLib.prototype._set_default_superprops = function() {
    this["persistence"].update_search_keyword(document$1.referrer);
    if (this.get_config("store_google")) this.register(_.info.campaignParams(), {
        persistent: false
    });
    if (this.get_config("save_referrer")) this["persistence"].update_referrer_info(document$1.referrer);
};
MixpanelLib.prototype._dom_loaded = function() {
    _.each(this.__dom_loaded_queue, function(item) {
        this._track_dom.apply(this, item);
    }, this);
    if (!this.has_opted_out_tracking()) _.each(this.__request_queue, function(item) {
        this._send_request.apply(this, item);
    }, this);
    delete this.__dom_loaded_queue;
    delete this.__request_queue;
};
MixpanelLib.prototype._track_dom = function(DomClass, args) {
    if (this.get_config("img")) {
        this.report_error("You can't use DOM tracking functions with img = true.");
        return false;
    }
    if (!DOM_LOADED) {
        this.__dom_loaded_queue.push([
            DomClass,
            args
        ]);
        return false;
    }
    var dt = new DomClass().init(this);
    return dt.track.apply(dt, args);
};
/**
 * _prepare_callback() should be called by callers of _send_request for use
 * as the callback argument.
 *
 * If there is no callback, this returns null.
 * If we are going to make XHR/XDR requests, this returns a function.
 * If we are going to use script tags, this returns a string to use as the
 * callback GET param.
 */ MixpanelLib.prototype._prepare_callback = function(callback, data) {
    if (_.isUndefined(callback)) return null;
    if (USE_XHR) {
        var callback_function = function(response) {
            callback(response, data);
        };
        return callback_function;
    } else {
        // if the user gives us a callback, we store as a random
        // property on this instances jsc function and update our
        // callback string to reflect that.
        var jsc = this["_jsc"];
        var randomized_cb = "" + Math.floor(Math.random() * 100000000);
        var callback_string = this.get_config("callback_fn") + "[" + randomized_cb + "]";
        jsc[randomized_cb] = function(response) {
            delete jsc[randomized_cb];
            callback(response, data);
        };
        return callback_string;
    }
};
MixpanelLib.prototype._send_request = function(url, data, options, callback) {
    var succeeded = true;
    if (ENQUEUE_REQUESTS) {
        this.__request_queue.push(arguments);
        return succeeded;
    }
    var DEFAULT_OPTIONS = {
        method: this.get_config("api_method"),
        transport: this.get_config("api_transport"),
        verbose: this.get_config("verbose")
    };
    var body_data = null;
    if (!callback && (_.isFunction(options) || typeof options === "string")) {
        callback = options;
        options = null;
    }
    options = _.extend(DEFAULT_OPTIONS, options || {});
    if (!USE_XHR) options.method = "GET";
    var use_post = options.method === "POST";
    var use_sendBeacon = sendBeacon && use_post && options.transport.toLowerCase() === "sendbeacon";
    // needed to correctly format responses
    var verbose_mode = options.verbose;
    if (data["verbose"]) verbose_mode = true;
    if (this.get_config("test")) data["test"] = 1;
    if (verbose_mode) data["verbose"] = 1;
    if (this.get_config("img")) data["img"] = 1;
    if (!USE_XHR) {
        if (callback) data["callback"] = callback;
        else if (verbose_mode || this.get_config("test")) // Verbose output (from verbose mode, or an error in test mode) is a json blob,
        // which by itself is not valid javascript. Without a callback, this verbose output will
        // cause an error when returned via jsonp, so we force a no-op callback param.
        // See the ECMA script spec: http://www.ecma-international.org/ecma-262/5.1/#sec-12.4
        data["callback"] = "(function(){})";
    }
    data["ip"] = this.get_config("ip") ? 1 : 0;
    data["_"] = new Date().getTime().toString();
    if (use_post) {
        body_data = "data=" + encodeURIComponent(data["data"]);
        delete data["data"];
    }
    url += "?" + _.HTTPBuildQuery(data);
    var lib = this;
    if ("img" in data) {
        var img = document$1.createElement("img");
        img.src = url;
        document$1.body.appendChild(img);
    } else if (use_sendBeacon) {
        try {
            succeeded = sendBeacon(url, body_data);
        } catch (e) {
            lib.report_error(e);
            succeeded = false;
        }
        try {
            if (callback) callback(succeeded ? 1 : 0);
        } catch (e) {
            lib.report_error(e);
        }
    } else if (USE_XHR) try {
        var req = new XMLHttpRequest();
        req.open(options.method, url, true);
        var headers = this.get_config("xhr_headers");
        if (use_post) headers["Content-Type"] = "application/x-www-form-urlencoded";
        _.each(headers, function(headerValue, headerName) {
            req.setRequestHeader(headerName, headerValue);
        });
        if (options.timeout_ms && typeof req.timeout !== "undefined") {
            req.timeout = options.timeout_ms;
            var start_time = new Date().getTime();
        }
        // send the mp_optout cookie
        // withCredentials cannot be modified until after calling .open on Android and Mobile Safari
        req.withCredentials = true;
        req.onreadystatechange = function() {
            if (req.readyState === 4) {
                if (req.status === 200) {
                    if (callback) {
                        if (verbose_mode) {
                            var response;
                            try {
                                response = _.JSONDecode(req.responseText);
                            } catch (e) {
                                lib.report_error(e);
                                if (options.ignore_json_errors) response = req.responseText;
                                else return;
                            }
                            callback(response);
                        } else callback(Number(req.responseText));
                    }
                } else {
                    var error;
                    if (req.timeout && !req.status && new Date().getTime() - start_time >= req.timeout) error = "timeout";
                    else error = "Bad HTTP status: " + req.status + " " + req.statusText;
                    lib.report_error(error);
                    if (callback) {
                        if (verbose_mode) callback({
                            status: 0,
                            error: error,
                            xhr_req: req
                        });
                        else callback(0);
                    }
                }
            }
        };
        req.send(body_data);
    } catch (e) {
        lib.report_error(e);
        succeeded = false;
    }
    else {
        var script = document$1.createElement("script");
        script.type = "text/javascript";
        script.async = true;
        script.defer = true;
        script.src = url;
        var s = document$1.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(script, s);
    }
    return succeeded;
};
/**
 * _execute_array() deals with processing any mixpanel function
 * calls that were called before the Mixpanel library were loaded
 * (and are thus stored in an array so they can be called later)
 *
 * Note: we fire off all the mixpanel function calls && user defined
 * functions BEFORE we fire off mixpanel tracking calls. This is so
 * identify/register/set_config calls can properly modify early
 * tracking calls.
 *
 * @param {Array} array
 */ MixpanelLib.prototype._execute_array = function(array) {
    var fn_name, alias_calls = [], other_calls = [], tracking_calls = [];
    _.each(array, function(item) {
        if (item) {
            fn_name = item[0];
            if (_.isArray(fn_name)) tracking_calls.push(item); // chained call e.g. mixpanel.get_group().set()
            else if (typeof item === "function") item.call(this);
            else if (_.isArray(item) && fn_name === "alias") alias_calls.push(item);
            else if (_.isArray(item) && fn_name.indexOf("track") !== -1 && typeof this[fn_name] === "function") tracking_calls.push(item);
            else other_calls.push(item);
        }
    }, this);
    var execute = function(calls, context) {
        _.each(calls, function(item) {
            if (_.isArray(item[0])) {
                // chained call
                var caller = context;
                _.each(item, function(call) {
                    caller = caller[call[0]].apply(caller, call.slice(1));
                });
            } else this[item[0]].apply(this, item.slice(1));
        }, context);
    };
    execute(alias_calls, this);
    execute(other_calls, this);
    execute(tracking_calls, this);
};
// request queueing utils
MixpanelLib.prototype.are_batchers_initialized = function() {
    return !!this.request_batchers.events;
};
MixpanelLib.prototype.init_batchers = function() {
    var token = this.get_config("token");
    if (!this.are_batchers_initialized()) {
        var batcher_for = _.bind(function(attrs) {
            return new RequestBatcher("__mpq_" + token + attrs.queue_suffix, {
                libConfig: this["config"],
                sendRequestFunc: _.bind(function(data, options, cb) {
                    this._send_request(this.get_config("api_host") + attrs.endpoint, this._encode_data_for_request(data), options, this._prepare_callback(cb, data));
                }, this),
                beforeSendHook: _.bind(function(item) {
                    return this._run_hook("before_send_" + attrs.type, item);
                }, this),
                errorReporter: this.get_config("error_reporter"),
                stopAllBatchingFunc: _.bind(this.stop_batch_senders, this)
            });
        }, this);
        this.request_batchers = {
            events: batcher_for({
                type: "events",
                endpoint: "/track/",
                queue_suffix: "_ev"
            }),
            people: batcher_for({
                type: "people",
                endpoint: "/engage/",
                queue_suffix: "_pp"
            }),
            groups: batcher_for({
                type: "groups",
                endpoint: "/groups/",
                queue_suffix: "_gr"
            })
        };
    }
    if (this.get_config("batch_autostart")) this.start_batch_senders();
};
MixpanelLib.prototype.start_batch_senders = function() {
    if (this.are_batchers_initialized()) {
        this._batch_requests = true;
        _.each(this.request_batchers, function(batcher) {
            batcher.start();
        });
    }
};
MixpanelLib.prototype.stop_batch_senders = function() {
    this._batch_requests = false;
    _.each(this.request_batchers, function(batcher) {
        batcher.stop();
        batcher.clear();
    });
};
/**
 * push() keeps the standard async-array-push
 * behavior around after the lib is loaded.
 * This is only useful for external integrations that
 * do not wish to rely on our convenience methods
 * (created in the snippet).
 *
 * ### Usage:
 *     mixpanel.push(['register', { a: 'b' }]);
 *
 * @param {Array} item A [function_name, args...] array to be executed
 */ MixpanelLib.prototype.push = function(item) {
    this._execute_array([
        item
    ]);
};
/**
 * Disable events on the Mixpanel object. If passed no arguments,
 * this function disables tracking of any event. If passed an
 * array of event names, those events will be disabled, but other
 * events will continue to be tracked.
 *
 * Note: this function does not stop other mixpanel functions from
 * firing, such as register() or people.set().
 *
 * @param {Array} [events] An array of event names to disable
 */ MixpanelLib.prototype.disable = function(events) {
    if (typeof events === "undefined") this._flags.disable_all_events = true;
    else this.__disabled_events = this.__disabled_events.concat(events);
};
MixpanelLib.prototype._encode_data_for_request = function(data) {
    var encoded_data = _.JSONEncode(data);
    if (this.get_config("api_payload_format") === PAYLOAD_TYPE_BASE64) encoded_data = _.base64Encode(encoded_data);
    return {
        "data": encoded_data
    };
};
// internal method for handling track vs batch-enqueue logic
MixpanelLib.prototype._track_or_batch = function(options, callback) {
    var truncated_data = _.truncate(options.data, 255);
    var endpoint = options.endpoint;
    var batcher = options.batcher;
    var should_send_immediately = options.should_send_immediately;
    var send_request_options = options.send_request_options || {};
    callback = callback || NOOP_FUNC;
    var request_enqueued_or_initiated = true;
    var send_request_immediately = _.bind(function() {
        if (!send_request_options.skip_hooks) truncated_data = this._run_hook("before_send_" + options.type, truncated_data);
        if (truncated_data) {
            console.log("MIXPANEL REQUEST:");
            console.log(truncated_data);
            return this._send_request(endpoint, this._encode_data_for_request(truncated_data), send_request_options, this._prepare_callback(callback, truncated_data));
        } else return null;
    }, this);
    if (this._batch_requests && !should_send_immediately) batcher.enqueue(truncated_data, function(succeeded) {
        if (succeeded) callback(1, truncated_data);
        else send_request_immediately();
    });
    else request_enqueued_or_initiated = send_request_immediately();
    return request_enqueued_or_initiated && truncated_data;
};
/**
 * Track an event. This is the most important and
 * frequently used Mixpanel function.
 *
 * ### Usage:
 *
 *     // track an event named 'Registered'
 *     mixpanel.track('Registered', {'Gender': 'Male', 'Age': 21});
 *
 *     // track an event using navigator.sendBeacon
 *     mixpanel.track('Left page', {'duration_seconds': 35}, {transport: 'sendBeacon'});
 *
 * To track link clicks or form submissions, see track_links() or track_forms().
 *
 * @param {String} event_name The name of the event. This can be anything the user does - 'Button Click', 'Sign Up', 'Item Purchased', etc.
 * @param {Object} [properties] A set of properties to include with the event you're sending. These describe the user who did the event or details about the event itself.
 * @param {Object} [options] Optional configuration for this track request.
 * @param {String} [options.transport] Transport method for network request ('xhr' or 'sendBeacon').
 * @param {Boolean} [options.send_immediately] Whether to bypass batching/queueing and send track request immediately.
 * @param {Function} [callback] If provided, the callback function will be called after tracking the event.
 * @returns {Boolean|Object} If the tracking request was successfully initiated/queued, an object
 * with the tracking payload sent to the API server is returned; otherwise false.
 */ MixpanelLib.prototype.track = addOptOutCheckMixpanelLib(function(event_name, properties, options, callback) {
    if (!callback && typeof options === "function") {
        callback = options;
        options = null;
    }
    options = options || {};
    var transport = options["transport"]; // external API, don't minify 'transport' prop
    if (transport) options.transport = transport; // 'transport' prop name can be minified internally
    var should_send_immediately = options["send_immediately"];
    if (typeof callback !== "function") callback = NOOP_FUNC;
    if (_.isUndefined(event_name)) {
        this.report_error("No event name provided to mixpanel.track");
        return;
    }
    if (this._event_is_disabled(event_name)) {
        callback(0);
        return;
    }
    // set defaults
    properties = properties || {};
    properties["token"] = this.get_config("token");
    // set $duration if time_event was previously called for this event
    var start_timestamp = this["persistence"].remove_event_timer(event_name);
    if (!_.isUndefined(start_timestamp)) {
        var duration_in_ms = new Date().getTime() - start_timestamp;
        properties["$duration"] = parseFloat((duration_in_ms / 1000).toFixed(3));
    }
    this._set_default_superprops();
    var marketing_properties = this.get_config("track_marketing") ? _.info.marketingParams() : {};
    // note: extend writes to the first object, so lets make sure we
    // don't write to the persistence properties object and info
    // properties object by passing in a new object
    // update properties with pageview info and super-properties
    properties = _.extend({}, _.info.properties(), marketing_properties, this["persistence"].properties(), this.unpersisted_superprops, properties);
    var property_blacklist = this.get_config("property_blacklist");
    if (_.isArray(property_blacklist)) _.each(property_blacklist, function(blacklisted_prop) {
        delete properties[blacklisted_prop];
    });
    else this.report_error("Invalid value for property_blacklist config: " + property_blacklist);
    var data = {
        "event": event_name,
        "properties": properties
    };
    var ret = this._track_or_batch({
        type: "events",
        data: data,
        endpoint: this.get_config("api_host") + "/track/",
        batcher: this.request_batchers.events,
        should_send_immediately: should_send_immediately,
        send_request_options: options
    }, callback);
    return ret;
});
/**
 * Register the current user into one/many groups.
 *
 * ### Usage:
 *
 *      mixpanel.set_group('company', ['mixpanel', 'google']) // an array of IDs
 *      mixpanel.set_group('company', 'mixpanel')
 *      mixpanel.set_group('company', 128746312)
 *
 * @param {String} group_key Group key
 * @param {Array|String|Number} group_ids An array of group IDs, or a singular group ID
 * @param {Function} [callback] If provided, the callback will be called after tracking the event.
 *
 */ MixpanelLib.prototype.set_group = addOptOutCheckMixpanelLib(function(group_key, group_ids, callback) {
    if (!_.isArray(group_ids)) group_ids = [
        group_ids
    ];
    var prop = {};
    prop[group_key] = group_ids;
    this.register(prop);
    return this["people"].set(group_key, group_ids, callback);
});
/**
 * Add a new group for this user.
 *
 * ### Usage:
 *
 *      mixpanel.add_group('company', 'mixpanel')
 *
 * @param {String} group_key Group key
 * @param {*} group_id A valid Mixpanel property type
 * @param {Function} [callback] If provided, the callback will be called after tracking the event.
 */ MixpanelLib.prototype.add_group = addOptOutCheckMixpanelLib(function(group_key, group_id, callback) {
    var old_values = this.get_property(group_key);
    if (old_values === undefined) {
        var prop = {};
        prop[group_key] = [
            group_id
        ];
        this.register(prop);
    } else if (old_values.indexOf(group_id) === -1) {
        old_values.push(group_id);
        this.register(prop);
    }
    return this["people"].union(group_key, group_id, callback);
});
/**
 * Remove a group from this user.
 *
 * ### Usage:
 *
 *      mixpanel.remove_group('company', 'mixpanel')
 *
 * @param {String} group_key Group key
 * @param {*} group_id A valid Mixpanel property type
 * @param {Function} [callback] If provided, the callback will be called after tracking the event.
 */ MixpanelLib.prototype.remove_group = addOptOutCheckMixpanelLib(function(group_key, group_id, callback) {
    var old_value = this.get_property(group_key);
    // if the value doesn't exist, the persistent store is unchanged
    if (old_value !== undefined) {
        var idx = old_value.indexOf(group_id);
        if (idx > -1) {
            old_value.splice(idx, 1);
            this.register({
                group_key: old_value
            });
        }
        if (old_value.length === 0) this.unregister(group_key);
    }
    return this["people"].remove(group_key, group_id, callback);
});
/**
 * Track an event with specific groups.
 *
 * ### Usage:
 *
 *      mixpanel.track_with_groups('purchase', {'product': 'iphone'}, {'University': ['UCB', 'UCLA']})
 *
 * @param {String} event_name The name of the event (see `mixpanel.track()`)
 * @param {Object=} properties A set of properties to include with the event you're sending (see `mixpanel.track()`)
 * @param {Object=} groups An object mapping group name keys to one or more values
 * @param {Function} [callback] If provided, the callback will be called after tracking the event.
 */ MixpanelLib.prototype.track_with_groups = addOptOutCheckMixpanelLib(function(event_name, properties, groups, callback) {
    var tracking_props = _.extend({}, properties || {});
    _.each(groups, function(v, k) {
        if (v !== null && v !== undefined) tracking_props[k] = v;
    });
    return this.track(event_name, tracking_props, callback);
});
MixpanelLib.prototype._create_map_key = function(group_key, group_id) {
    return group_key + "_" + JSON.stringify(group_id);
};
MixpanelLib.prototype._remove_group_from_cache = function(group_key, group_id) {
    delete this._cached_groups[this._create_map_key(group_key, group_id)];
};
/**
 * Look up reference to a Mixpanel group
 *
 * ### Usage:
 *
 *       mixpanel.get_group(group_key, group_id)
 *
 * @param {String} group_key Group key
 * @param {Object} group_id A valid Mixpanel property type
 * @returns {Object} A MixpanelGroup identifier
 */ MixpanelLib.prototype.get_group = function(group_key, group_id) {
    var map_key = this._create_map_key(group_key, group_id);
    var group = this._cached_groups[map_key];
    if (group === undefined || group._group_key !== group_key || group._group_id !== group_id) {
        group = new MixpanelGroup();
        group._init(this, group_key, group_id);
        this._cached_groups[map_key] = group;
    }
    return group;
};
/**
 * Track a default Mixpanel page view event, which includes extra default event properties to
 * improve page view data. The `config.track_pageview` option for <a href="#mixpanelinit">mixpanel.init()</a>
 * may be turned on for tracking page loads automatically.
 *
 * ### Usage
 *
 *     // track a default $mp_web_page_view event
 *     mixpanel.track_pageview();
 *
 *     // track a page view event with additional event properties
 *     mixpanel.track_pageview({'ab_test_variant': 'card-layout-b'});
 *
 *     // example approach to track page views on different page types as event properties
 *     mixpanel.track_pageview({'page': 'pricing'});
 *     mixpanel.track_pageview({'page': 'homepage'});
 *
 *     // UNCOMMON: Tracking a page view event with a custom event_name option. NOT expected to be used for
 *     // individual pages on the same site or product. Use cases for custom event_name may be page
 *     // views on different products or internal applications that are considered completely separate
 *     mixpanel.track_pageview({'page': 'customer-search'}, {'event_name': '[internal] Admin Page View'});
 *
 * @param {Object} [properties] An optional set of additional properties to send with the page view event
 * @param {Object} [options] Page view tracking options
 * @param {String} [options.event_name] - Alternate name for the tracking event
 * @returns {Boolean|Object} If the tracking request was successfully initiated/queued, an object
 * with the tracking payload sent to the API server is returned; otherwise false.
 */ MixpanelLib.prototype.track_pageview = addOptOutCheckMixpanelLib(function(properties, options) {
    if (typeof properties !== "object") properties = {};
    options = options || {};
    var event_name = options["event_name"] || "$mp_web_page_view";
    var default_page_properties = _.extend(_.info.mpPageViewProperties(), _.info.campaignParams(), _.info.clickParams());
    var event_properties = _.extend({}, default_page_properties, properties);
    return this.track(event_name, event_properties);
});
/**
 * Track clicks on a set of document elements. Selector must be a
 * valid query. Elements must exist on the page at the time track_links is called.
 *
 * ### Usage:
 *
 *     // track click for link id #nav
 *     mixpanel.track_links('#nav', 'Clicked Nav Link');
 *
 * ### Notes:
 *
 * This function will wait up to 300 ms for the Mixpanel
 * servers to respond. If they have not responded by that time
 * it will head to the link without ensuring that your event
 * has been tracked.  To configure this timeout please see the
 * set_config() documentation below.
 *
 * If you pass a function in as the properties argument, the
 * function will receive the DOMElement that triggered the
 * event as an argument.  You are expected to return an object
 * from the function; any properties defined on this object
 * will be sent to mixpanel as event properties.
 *
 * @type {Function}
 * @param {Object|String} query A valid DOM query, element or jQuery-esque list
 * @param {String} event_name The name of the event to track
 * @param {Object|Function} [properties] A properties object or function that returns a dictionary of properties when passed a DOMElement
 */ MixpanelLib.prototype.track_links = function() {
    return this._track_dom.call(this, LinkTracker, arguments);
};
/**
 * Track form submissions. Selector must be a valid query.
 *
 * ### Usage:
 *
 *     // track submission for form id 'register'
 *     mixpanel.track_forms('#register', 'Created Account');
 *
 * ### Notes:
 *
 * This function will wait up to 300 ms for the mixpanel
 * servers to respond, if they have not responded by that time
 * it will head to the link without ensuring that your event
 * has been tracked.  To configure this timeout please see the
 * set_config() documentation below.
 *
 * If you pass a function in as the properties argument, the
 * function will receive the DOMElement that triggered the
 * event as an argument.  You are expected to return an object
 * from the function; any properties defined on this object
 * will be sent to mixpanel as event properties.
 *
 * @type {Function}
 * @param {Object|String} query A valid DOM query, element or jQuery-esque list
 * @param {String} event_name The name of the event to track
 * @param {Object|Function} [properties] This can be a set of properties, or a function that returns a set of properties after being passed a DOMElement
 */ MixpanelLib.prototype.track_forms = function() {
    return this._track_dom.call(this, FormTracker, arguments);
};
/**
 * Time an event by including the time between this call and a
 * later 'track' call for the same event in the properties sent
 * with the event.
 *
 * ### Usage:
 *
 *     // time an event named 'Registered'
 *     mixpanel.time_event('Registered');
 *     mixpanel.track('Registered', {'Gender': 'Male', 'Age': 21});
 *
 * When called for a particular event name, the next track call for that event
 * name will include the elapsed time between the 'time_event' and 'track'
 * calls. This value is stored as seconds in the '$duration' property.
 *
 * @param {String} event_name The name of the event.
 */ MixpanelLib.prototype.time_event = function(event_name) {
    if (_.isUndefined(event_name)) {
        this.report_error("No event name provided to mixpanel.time_event");
        return;
    }
    if (this._event_is_disabled(event_name)) return;
    this["persistence"].set_event_timer(event_name, new Date().getTime());
};
var REGISTER_DEFAULTS = {
    "persistent": true
};
/**
 * Helper to parse options param for register methods, maintaining
 * legacy support for plain "days" param instead of options object
 * @param {Number|Object} [days_or_options] 'days' option (Number), or Options object for register methods
 * @returns {Object} options object
 */ var options_for_register = function(days_or_options) {
    var options;
    if (_.isObject(days_or_options)) options = days_or_options;
    else if (!_.isUndefined(days_or_options)) options = {
        "days": days_or_options
    };
    else options = {};
    return _.extend({}, REGISTER_DEFAULTS, options);
};
/**
 * Register a set of super properties, which are included with all
 * events. This will overwrite previous super property values.
 *
 * ### Usage:
 *
 *     // register 'Gender' as a super property
 *     mixpanel.register({'Gender': 'Female'});
 *
 *     // register several super properties when a user signs up
 *     mixpanel.register({
 *         'Email': 'jdoe@example.com',
 *         'Account Type': 'Free'
 *     });
 *
 *     // register only for the current pageload
 *     mixpanel.register({'Name': 'Pat'}, {persistent: false});
 *
 * @param {Object} properties An associative array of properties to store about the user
 * @param {Number|Object} [days_or_options] Options object or number of days since the user's last visit to store the super properties (only valid for persisted props)
 * @param {boolean} [days_or_options.days] - number of days since the user's last visit to store the super properties (only valid for persisted props)
 * @param {boolean} [days_or_options.persistent=true] - whether to put in persistent storage (cookie/localStorage)
 */ MixpanelLib.prototype.register = function(props, days_or_options) {
    var options = options_for_register(days_or_options);
    if (options["persistent"]) this["persistence"].register(props, options["days"]);
    else _.extend(this.unpersisted_superprops, props);
};
/**
 * Register a set of super properties only once. This will not
 * overwrite previous super property values, unlike register().
 *
 * ### Usage:
 *
 *     // register a super property for the first time only
 *     mixpanel.register_once({
 *         'First Login Date': new Date().toISOString()
 *     });
 *
 *     // register once, only for the current pageload
 *     mixpanel.register_once({
 *         'First interaction time': new Date().toISOString()
 *     }, 'None', {persistent: false});
 *
 * ### Notes:
 *
 * If default_value is specified, current super properties
 * with that value will be overwritten.
 *
 * @param {Object} properties An associative array of properties to store about the user
 * @param {*} [default_value] Value to override if already set in super properties (ex: 'False') Default: 'None'
 * @param {Number|Object} [days_or_options] Options object or number of days since the user's last visit to store the super properties (only valid for persisted props)
 * @param {boolean} [days_or_options.days] - number of days since the user's last visit to store the super properties (only valid for persisted props)
 * @param {boolean} [days_or_options.persistent=true] - whether to put in persistent storage (cookie/localStorage)
 */ MixpanelLib.prototype.register_once = function(props, default_value, days_or_options) {
    var options = options_for_register(days_or_options);
    if (options["persistent"]) this["persistence"].register_once(props, default_value, options["days"]);
    else {
        if (typeof default_value === "undefined") default_value = "None";
        _.each(props, function(val, prop) {
            if (!this.unpersisted_superprops.hasOwnProperty(prop) || this.unpersisted_superprops[prop] === default_value) this.unpersisted_superprops[prop] = val;
        }, this);
    }
};
/**
 * Delete a super property stored with the current user.
 *
 * @param {String} property The name of the super property to remove
 * @param {Object} [options]
 * @param {boolean} [options.persistent=true] - whether to look in persistent storage (cookie/localStorage)
 */ MixpanelLib.prototype.unregister = function(property, options) {
    options = options_for_register(options);
    if (options["persistent"]) this["persistence"].unregister(property);
    else delete this.unpersisted_superprops[property];
};
MixpanelLib.prototype._register_single = function(prop, value) {
    var props = {};
    props[prop] = value;
    this.register(props);
};
/**
 * Identify a user with a unique ID to track user activity across
 * devices, tie a user to their events, and create a user profile.
 * If you never call this method, unique visitors are tracked using
 * a UUID generated the first time they visit the site.
 *
 * Call identify when you know the identity of the current user,
 * typically after login or signup. We recommend against using
 * identify for anonymous visitors to your site.
 *
 * ### Notes:
 * If your project has
 * <a href="https://help.mixpanel.com/hc/en-us/articles/360039133851">ID Merge</a>
 * enabled, the identify method will connect pre- and
 * post-authentication events when appropriate.
 *
 * If your project does not have ID Merge enabled, identify will
 * change the user's local distinct_id to the unique ID you pass.
 * Events tracked prior to authentication will not be connected
 * to the same user identity. If ID Merge is disabled, alias can
 * be used to connect pre- and post-registration events.
 *
 * @param {String} [unique_id] A string that uniquely identifies a user. If not provided, the distinct_id currently in the persistent store (cookie or localStorage) will be used.
 */ MixpanelLib.prototype.identify = function(new_distinct_id, _set_callback, _add_callback, _append_callback, _set_once_callback, _union_callback, _unset_callback, _remove_callback) {
    // Optional Parameters
    //  _set_callback:function  A callback to be run if and when the People set queue is flushed
    //  _add_callback:function  A callback to be run if and when the People add queue is flushed
    //  _append_callback:function  A callback to be run if and when the People append queue is flushed
    //  _set_once_callback:function  A callback to be run if and when the People set_once queue is flushed
    //  _union_callback:function  A callback to be run if and when the People union queue is flushed
    //  _unset_callback:function  A callback to be run if and when the People unset queue is flushed
    var previous_distinct_id = this.get_distinct_id();
    if (new_distinct_id && previous_distinct_id !== new_distinct_id) {
        // we allow the following condition if previous distinct_id is same as new_distinct_id
        // so that you can force flush people updates for anonymous profiles.
        if (typeof new_distinct_id === "string" && new_distinct_id.indexOf(DEVICE_ID_PREFIX) === 0) {
            this.report_error("distinct_id cannot have $device: prefix");
            return -1;
        }
        this.register({
            "$user_id": new_distinct_id
        });
    }
    if (!this.get_property("$device_id")) {
        // The persisted distinct id might not actually be a device id at all
        // it might be a distinct id of the user from before
        var device_id = previous_distinct_id;
        this.register_once({
            "$had_persisted_distinct_id": true,
            "$device_id": device_id
        }, "");
    }
    // identify only changes the distinct id if it doesn't match either the existing or the alias;
    // if it's new, blow away the alias as well.
    if (new_distinct_id !== previous_distinct_id && new_distinct_id !== this.get_property(ALIAS_ID_KEY)) {
        this.unregister(ALIAS_ID_KEY);
        this.register({
            "distinct_id": new_distinct_id
        });
    }
    this._flags.identify_called = true;
    // Flush any queued up people requests
    this["people"]._flush(_set_callback, _add_callback, _append_callback, _set_once_callback, _union_callback, _unset_callback, _remove_callback);
    // send an $identify event any time the distinct_id is changing - logic on the server
    // will determine whether or not to do anything with it.
    if (new_distinct_id !== previous_distinct_id) this.track("$identify", {
        "distinct_id": new_distinct_id,
        "$anon_distinct_id": previous_distinct_id
    }, {
        skip_hooks: true
    });
};
/**
 * Clears super properties and generates a new random distinct_id for this instance.
 * Useful for clearing data when a user logs out.
 */ MixpanelLib.prototype.reset = function() {
    this["persistence"].clear();
    this._flags.identify_called = false;
    var uuid = _.UUID();
    this.register_once({
        "distinct_id": DEVICE_ID_PREFIX + uuid,
        "$device_id": uuid
    }, "");
};
/**
 * Returns the current distinct id of the user. This is either the id automatically
 * generated by the library or the id that has been passed by a call to identify().
 *
 * ### Notes:
 *
 * get_distinct_id() can only be called after the Mixpanel library has finished loading.
 * init() has a loaded function available to handle this automatically. For example:
 *
 *     // set distinct_id after the mixpanel library has loaded
 *     mixpanel.init('YOUR PROJECT TOKEN', {
 *         loaded: function(mixpanel) {
 *             distinct_id = mixpanel.get_distinct_id();
 *         }
 *     });
 */ MixpanelLib.prototype.get_distinct_id = function() {
    return this.get_property("distinct_id");
};
/**
 * The alias method creates an alias which Mixpanel will use to
 * remap one id to another. Multiple aliases can point to the
 * same identifier.
 *
 * The following is a valid use of alias:
 *
 *     mixpanel.alias('new_id', 'existing_id');
 *     // You can add multiple id aliases to the existing ID
 *     mixpanel.alias('newer_id', 'existing_id');
 *
 * Aliases can also be chained - the following is a valid example:
 *
 *     mixpanel.alias('new_id', 'existing_id');
 *     // chain newer_id - new_id - existing_id
 *     mixpanel.alias('newer_id', 'new_id');
 *
 * Aliases cannot point to multiple identifiers - the following
 * example will not work:
 *
 *     mixpanel.alias('new_id', 'existing_id');
 *     // this is invalid as 'new_id' already points to 'existing_id'
 *     mixpanel.alias('new_id', 'newer_id');
 *
 * ### Notes:
 *
 * If your project does not have
 * <a href="https://help.mixpanel.com/hc/en-us/articles/360039133851">ID Merge</a>
 * enabled, the best practice is to call alias once when a unique
 * ID is first created for a user (e.g., when a user first registers
 * for an account). Do not use alias multiple times for a single
 * user without ID Merge enabled.
 *
 * @param {String} alias A unique identifier that you want to use for this user in the future.
 * @param {String} [original] The current identifier being used for this user.
 */ MixpanelLib.prototype.alias = function(alias, original) {
    // If the $people_distinct_id key exists in persistence, there has been a previous
    // mixpanel.people.identify() call made for this user. It is VERY BAD to make an alias with
    // this ID, as it will duplicate users.
    if (alias === this.get_property(PEOPLE_DISTINCT_ID_KEY)) {
        this.report_error("Attempting to create alias for existing People user - aborting.");
        return -2;
    }
    var _this = this;
    if (_.isUndefined(original)) original = this.get_distinct_id();
    if (alias !== original) {
        this._register_single(ALIAS_ID_KEY, alias);
        return this.track("$create_alias", {
            "alias": alias,
            "distinct_id": original
        }, {
            skip_hooks: true
        }, function() {
            // Flush the people queue
            _this.identify(alias);
        });
    } else {
        this.report_error("alias matches current distinct_id - skipping api call.");
        this.identify(alias);
        return -1;
    }
};
/**
 * Provide a string to recognize the user by. The string passed to
 * this method will appear in the Mixpanel Streams product rather
 * than an automatically generated name. Name tags do not have to
 * be unique.
 *
 * This value will only be included in Streams data.
 *
 * @param {String} name_tag A human readable name for the user
 * @deprecated
 */ MixpanelLib.prototype.name_tag = function(name_tag) {
    this._register_single("mp_name_tag", name_tag);
};
/**
 * Update the configuration of a mixpanel library instance.
 *
 * The default config is:
 *
 *     {
 *       // HTTP method for tracking requests
 *       api_method: 'POST'
 *
 *       // transport for sending requests ('XHR' or 'sendBeacon')
 *       // NB: sendBeacon should only be used for scenarios such as
 *       // page unload where a "best-effort" attempt to send is
 *       // acceptable; the sendBeacon API does not support callbacks
 *       // or any way to know the result of the request. Mixpanel
 *       // tracking via sendBeacon will not support any event-
 *       // batching or retry mechanisms.
 *       api_transport: 'XHR'
 *
 *       // request-batching/queueing/retry
 *       batch_requests: true,
 *
 *       // maximum number of events/updates to send in a single
 *       // network request
 *       batch_size: 50,
 *
 *       // milliseconds to wait between sending batch requests
 *       batch_flush_interval_ms: 5000,
 *
 *       // milliseconds to wait for network responses to batch requests
 *       // before they are considered timed-out and retried
 *       batch_request_timeout_ms: 90000,
 *
 *       // override value for cookie domain, only useful for ensuring
 *       // correct cross-subdomain cookies on unusual domains like
 *       // subdomain.mainsite.avocat.fr; NB this cannot be used to
 *       // set cookies on a different domain than the current origin
 *       cookie_domain: ''
 *
 *       // super properties cookie expiration (in days)
 *       cookie_expiration: 365
 *
 *       // if true, cookie will be set with SameSite=None; Secure
 *       // this is only useful in special situations, like embedded
 *       // 3rd-party iframes that set up a Mixpanel instance
 *       cross_site_cookie: false
 *
 *       // super properties span subdomains
 *       cross_subdomain_cookie: true
 *
 *       // debug mode
 *       debug: false
 *
 *       // if this is true, the mixpanel cookie or localStorage entry
 *       // will be deleted, and no user persistence will take place
 *       disable_persistence: false
 *
 *       // if this is true, Mixpanel will automatically determine
 *       // City, Region and Country data using the IP address of
 *       //the client
 *       ip: true
 *
 *       // opt users out of tracking by this Mixpanel instance by default
 *       opt_out_tracking_by_default: false
 *
 *       // opt users out of browser data storage by this Mixpanel instance by default
 *       opt_out_persistence_by_default: false
 *
 *       // persistence mechanism used by opt-in/opt-out methods - cookie
 *       // or localStorage - falls back to cookie if localStorage is unavailable
 *       opt_out_tracking_persistence_type: 'localStorage'
 *
 *       // customize the name of cookie/localStorage set by opt-in/opt-out methods
 *       opt_out_tracking_cookie_prefix: null
 *
 *       // type of persistent store for super properties (cookie/
 *       // localStorage) if set to 'localStorage', any existing
 *       // mixpanel cookie value with the same persistence_name
 *       // will be transferred to localStorage and deleted
 *       persistence: 'cookie'
 *
 *       // name for super properties persistent store
 *       persistence_name: ''
 *
 *       // names of properties/superproperties which should never
 *       // be sent with track() calls
 *       property_blacklist: []
 *
 *       // if this is true, mixpanel cookies will be marked as
 *       // secure, meaning they will only be transmitted over https
 *       secure_cookie: false
 *
 *       // disables enriching user profiles with first touch marketing data
 *       skip_first_touch_marketing: false
 *
 *       // the amount of time track_links will
 *       // wait for Mixpanel's servers to respond
 *       track_links_timeout: 300
 *
 *       // adds any UTM parameters and click IDs present on the page to any events fired
 *       track_marketing: true
 *
 *       // enables automatic page view tracking using default page view events through
 *       // the track_pageview() method
 *       track_pageview: false
 *
 *       // if you set upgrade to be true, the library will check for
 *       // a cookie from our old js library and import super
 *       // properties from it, then the old cookie is deleted
 *       // The upgrade config option only works in the initialization,
 *       // so make sure you set it when you create the library.
 *       upgrade: false
 *
 *       // extra HTTP request headers to set for each API request, in
 *       // the format {'Header-Name': value}
 *       xhr_headers: {}
 *
 *       // whether to ignore or respect the web browser's Do Not Track setting
 *       ignore_dnt: false
 *     }
 *
 *
 * @param {Object} config A dictionary of new configuration values to update
 */ MixpanelLib.prototype.set_config = function(config) {
    if (_.isObject(config)) {
        _.extend(this["config"], config);
        var new_batch_size = config["batch_size"];
        if (new_batch_size) _.each(this.request_batchers, function(batcher) {
            batcher.resetBatchSize();
        });
        if (!this.get_config("persistence_name")) this["config"]["persistence_name"] = this["config"]["cookie_name"];
        if (!this.get_config("disable_persistence")) this["config"]["disable_persistence"] = this["config"]["disable_cookie"];
        if (this["persistence"]) this["persistence"].update_config(this["config"]);
        Config.DEBUG = Config.DEBUG || this.get_config("debug");
    }
};
/**
 * returns the current config object for the library.
 */ MixpanelLib.prototype.get_config = function(prop_name) {
    return this["config"][prop_name];
};
/**
 * Fetch a hook function from config, with safe default, and run it
 * against the given arguments
 * @param {string} hook_name which hook to retrieve
 * @returns {any|null} return value of user-provided hook, or null if nothing was returned
 */ MixpanelLib.prototype._run_hook = function(hook_name) {
    var ret = (this["config"]["hooks"][hook_name] || IDENTITY_FUNC).apply(this, slice.call(arguments, 1));
    if (typeof ret === "undefined") {
        this.report_error(hook_name + " hook did not return a value");
        ret = null;
    }
    return ret;
};
/**
 * Returns the value of the super property named property_name. If no such
 * property is set, get_property() will return the undefined value.
 *
 * ### Notes:
 *
 * get_property() can only be called after the Mixpanel library has finished loading.
 * init() has a loaded function available to handle this automatically. For example:
 *
 *     // grab value for 'user_id' after the mixpanel library has loaded
 *     mixpanel.init('YOUR PROJECT TOKEN', {
 *         loaded: function(mixpanel) {
 *             user_id = mixpanel.get_property('user_id');
 *         }
 *     });
 *
 * @param {String} property_name The name of the super property you want to retrieve
 */ MixpanelLib.prototype.get_property = function(property_name) {
    return this["persistence"]["props"][property_name];
};
MixpanelLib.prototype.toString = function() {
    var name = this.get_config("name");
    if (name !== PRIMARY_INSTANCE_NAME) name = PRIMARY_INSTANCE_NAME + "." + name;
    return name;
};
MixpanelLib.prototype._event_is_disabled = function(event_name) {
    return _.isBlockedUA(userAgent) || this._flags.disable_all_events || _.include(this.__disabled_events, event_name);
};
// perform some housekeeping around GDPR opt-in/out state
MixpanelLib.prototype._gdpr_init = function() {
    var is_localStorage_requested = this.get_config("opt_out_tracking_persistence_type") === "localStorage";
    // try to convert opt-in/out cookies to localStorage if possible
    if (is_localStorage_requested && _.localStorage.is_supported()) {
        if (!this.has_opted_in_tracking() && this.has_opted_in_tracking({
            "persistence_type": "cookie"
        })) this.opt_in_tracking({
            "enable_persistence": false
        });
        if (!this.has_opted_out_tracking() && this.has_opted_out_tracking({
            "persistence_type": "cookie"
        })) this.opt_out_tracking({
            "clear_persistence": false
        });
        this.clear_opt_in_out_tracking({
            "persistence_type": "cookie",
            "enable_persistence": false
        });
    }
    // check whether the user has already opted out - if so, clear & disable persistence
    if (this.has_opted_out_tracking()) this._gdpr_update_persistence({
        "clear_persistence": true
    });
    else if (!this.has_opted_in_tracking() && (this.get_config("opt_out_tracking_by_default") || _.cookie.get("mp_optout"))) {
        _.cookie.remove("mp_optout");
        this.opt_out_tracking({
            "clear_persistence": this.get_config("opt_out_persistence_by_default")
        });
    }
};
/**
 * Enable or disable persistence based on options
 * only enable/disable if persistence is not already in this state
 * @param {boolean} [options.clear_persistence] If true, will delete all data stored by the sdk in persistence and disable it
 * @param {boolean} [options.enable_persistence] If true, will re-enable sdk persistence
 */ MixpanelLib.prototype._gdpr_update_persistence = function(options) {
    var disabled;
    if (options && options["clear_persistence"]) disabled = true;
    else if (options && options["enable_persistence"]) disabled = false;
    else return;
    if (!this.get_config("disable_persistence") && this["persistence"].disabled !== disabled) this["persistence"].set_disabled(disabled);
    if (disabled) _.each(this.request_batchers, function(batcher) {
        batcher.clear();
    });
};
// call a base gdpr function after constructing the appropriate token and options args
MixpanelLib.prototype._gdpr_call_func = function(func, options) {
    options = _.extend({
        "track": _.bind(this.track, this),
        "persistence_type": this.get_config("opt_out_tracking_persistence_type"),
        "cookie_prefix": this.get_config("opt_out_tracking_cookie_prefix"),
        "cookie_expiration": this.get_config("cookie_expiration"),
        "cross_site_cookie": this.get_config("cross_site_cookie"),
        "cross_subdomain_cookie": this.get_config("cross_subdomain_cookie"),
        "cookie_domain": this.get_config("cookie_domain"),
        "secure_cookie": this.get_config("secure_cookie"),
        "ignore_dnt": this.get_config("ignore_dnt")
    }, options);
    // check if localStorage can be used for recording opt out status, fall back to cookie if not
    if (!_.localStorage.is_supported()) options["persistence_type"] = "cookie";
    return func(this.get_config("token"), {
        track: options["track"],
        trackEventName: options["track_event_name"],
        trackProperties: options["track_properties"],
        persistenceType: options["persistence_type"],
        persistencePrefix: options["cookie_prefix"],
        cookieDomain: options["cookie_domain"],
        cookieExpiration: options["cookie_expiration"],
        crossSiteCookie: options["cross_site_cookie"],
        crossSubdomainCookie: options["cross_subdomain_cookie"],
        secureCookie: options["secure_cookie"],
        ignoreDnt: options["ignore_dnt"]
    });
};
/**
 * Opt the user in to data tracking and cookies/localstorage for this Mixpanel instance
 *
 * ### Usage
 *
 *     // opt user in
 *     mixpanel.opt_in_tracking();
 *
 *     // opt user in with specific event name, properties, cookie configuration
 *     mixpanel.opt_in_tracking({
 *         track_event_name: 'User opted in',
 *         track_event_properties: {
 *             'Email': 'jdoe@example.com'
 *         },
 *         cookie_expiration: 30,
 *         secure_cookie: true
 *     });
 *
 * @param {Object} [options] A dictionary of config options to override
 * @param {function} [options.track] Function used for tracking a Mixpanel event to record the opt-in action (default is this Mixpanel instance's track method)
 * @param {string} [options.track_event_name=$opt_in] Event name to be used for tracking the opt-in action
 * @param {Object} [options.track_properties] Set of properties to be tracked along with the opt-in action
 * @param {boolean} [options.enable_persistence=true] If true, will re-enable sdk persistence
 * @param {string} [options.persistence_type=localStorage] Persistence mechanism used - cookie or localStorage - falls back to cookie if localStorage is unavailable
 * @param {string} [options.cookie_prefix=__mp_opt_in_out] Custom prefix to be used in the cookie/localstorage name
 * @param {Number} [options.cookie_expiration] Number of days until the opt-in cookie expires (overrides value specified in this Mixpanel instance's config)
 * @param {string} [options.cookie_domain] Custom cookie domain (overrides value specified in this Mixpanel instance's config)
 * @param {boolean} [options.cross_site_cookie] Whether the opt-in cookie is set as cross-site-enabled (overrides value specified in this Mixpanel instance's config)
 * @param {boolean} [options.cross_subdomain_cookie] Whether the opt-in cookie is set as cross-subdomain or not (overrides value specified in this Mixpanel instance's config)
 * @param {boolean} [options.secure_cookie] Whether the opt-in cookie is set as secure or not (overrides value specified in this Mixpanel instance's config)
 */ MixpanelLib.prototype.opt_in_tracking = function(options) {
    options = _.extend({
        "enable_persistence": true
    }, options);
    this._gdpr_call_func(optIn, options);
    this._gdpr_update_persistence(options);
};
/**
 * Opt the user out of data tracking and cookies/localstorage for this Mixpanel instance
 *
 * ### Usage
 *
 *     // opt user out
 *     mixpanel.opt_out_tracking();
 *
 *     // opt user out with different cookie configuration from Mixpanel instance
 *     mixpanel.opt_out_tracking({
 *         cookie_expiration: 30,
 *         secure_cookie: true
 *     });
 *
 * @param {Object} [options] A dictionary of config options to override
 * @param {boolean} [options.delete_user=true] If true, will delete the currently identified user's profile and clear all charges after opting the user out
 * @param {boolean} [options.clear_persistence=true] If true, will delete all data stored by the sdk in persistence
 * @param {string} [options.persistence_type=localStorage] Persistence mechanism used - cookie or localStorage - falls back to cookie if localStorage is unavailable
 * @param {string} [options.cookie_prefix=__mp_opt_in_out] Custom prefix to be used in the cookie/localstorage name
 * @param {Number} [options.cookie_expiration] Number of days until the opt-in cookie expires (overrides value specified in this Mixpanel instance's config)
 * @param {string} [options.cookie_domain] Custom cookie domain (overrides value specified in this Mixpanel instance's config)
 * @param {boolean} [options.cross_site_cookie] Whether the opt-in cookie is set as cross-site-enabled (overrides value specified in this Mixpanel instance's config)
 * @param {boolean} [options.cross_subdomain_cookie] Whether the opt-in cookie is set as cross-subdomain or not (overrides value specified in this Mixpanel instance's config)
 * @param {boolean} [options.secure_cookie] Whether the opt-in cookie is set as secure or not (overrides value specified in this Mixpanel instance's config)
 */ MixpanelLib.prototype.opt_out_tracking = function(options) {
    options = _.extend({
        "clear_persistence": true,
        "delete_user": true
    }, options);
    // delete user and clear charges since these methods may be disabled by opt-out
    if (options["delete_user"] && this["people"] && this["people"]._identify_called()) {
        this["people"].delete_user();
        this["people"].clear_charges();
    }
    this._gdpr_call_func(optOut, options);
    this._gdpr_update_persistence(options);
};
/**
 * Check whether the user has opted in to data tracking and cookies/localstorage for this Mixpanel instance
 *
 * ### Usage
 *
 *     var has_opted_in = mixpanel.has_opted_in_tracking();
 *     // use has_opted_in value
 *
 * @param {Object} [options] A dictionary of config options to override
 * @param {string} [options.persistence_type=localStorage] Persistence mechanism used - cookie or localStorage - falls back to cookie if localStorage is unavailable
 * @param {string} [options.cookie_prefix=__mp_opt_in_out] Custom prefix to be used in the cookie/localstorage name
 * @returns {boolean} current opt-in status
 */ MixpanelLib.prototype.has_opted_in_tracking = function(options) {
    return this._gdpr_call_func(hasOptedIn, options);
};
/**
 * Check whether the user has opted out of data tracking and cookies/localstorage for this Mixpanel instance
 *
 * ### Usage
 *
 *     var has_opted_out = mixpanel.has_opted_out_tracking();
 *     // use has_opted_out value
 *
 * @param {Object} [options] A dictionary of config options to override
 * @param {string} [options.persistence_type=localStorage] Persistence mechanism used - cookie or localStorage - falls back to cookie if localStorage is unavailable
 * @param {string} [options.cookie_prefix=__mp_opt_in_out] Custom prefix to be used in the cookie/localstorage name
 * @returns {boolean} current opt-out status
 */ MixpanelLib.prototype.has_opted_out_tracking = function(options) {
    return this._gdpr_call_func(hasOptedOut, options);
};
/**
 * Clear the user's opt in/out status of data tracking and cookies/localstorage for this Mixpanel instance
 *
 * ### Usage
 *
 *     // clear user's opt-in/out status
 *     mixpanel.clear_opt_in_out_tracking();
 *
 *     // clear user's opt-in/out status with specific cookie configuration - should match
 *     // configuration used when opt_in_tracking/opt_out_tracking methods were called.
 *     mixpanel.clear_opt_in_out_tracking({
 *         cookie_expiration: 30,
 *         secure_cookie: true
 *     });
 *
 * @param {Object} [options] A dictionary of config options to override
 * @param {boolean} [options.enable_persistence=true] If true, will re-enable sdk persistence
 * @param {string} [options.persistence_type=localStorage] Persistence mechanism used - cookie or localStorage - falls back to cookie if localStorage is unavailable
 * @param {string} [options.cookie_prefix=__mp_opt_in_out] Custom prefix to be used in the cookie/localstorage name
 * @param {Number} [options.cookie_expiration] Number of days until the opt-in cookie expires (overrides value specified in this Mixpanel instance's config)
 * @param {string} [options.cookie_domain] Custom cookie domain (overrides value specified in this Mixpanel instance's config)
 * @param {boolean} [options.cross_site_cookie] Whether the opt-in cookie is set as cross-site-enabled (overrides value specified in this Mixpanel instance's config)
 * @param {boolean} [options.cross_subdomain_cookie] Whether the opt-in cookie is set as cross-subdomain or not (overrides value specified in this Mixpanel instance's config)
 * @param {boolean} [options.secure_cookie] Whether the opt-in cookie is set as secure or not (overrides value specified in this Mixpanel instance's config)
 */ MixpanelLib.prototype.clear_opt_in_out_tracking = function(options) {
    options = _.extend({
        "enable_persistence": true
    }, options);
    this._gdpr_call_func(clearOptInOut, options);
    this._gdpr_update_persistence(options);
};
MixpanelLib.prototype.report_error = function(msg, err) {
    console.error.apply(console.error, arguments);
    try {
        if (!err && !(msg instanceof Error)) msg = new Error(msg);
        this.get_config("error_reporter")(msg, err);
    } catch (err) {
        console.error(err);
    }
};
// EXPORTS (for closure compiler)
// MixpanelLib Exports
MixpanelLib.prototype["init"] = MixpanelLib.prototype.init;
MixpanelLib.prototype["reset"] = MixpanelLib.prototype.reset;
MixpanelLib.prototype["disable"] = MixpanelLib.prototype.disable;
MixpanelLib.prototype["time_event"] = MixpanelLib.prototype.time_event;
MixpanelLib.prototype["track"] = MixpanelLib.prototype.track;
MixpanelLib.prototype["track_links"] = MixpanelLib.prototype.track_links;
MixpanelLib.prototype["track_forms"] = MixpanelLib.prototype.track_forms;
MixpanelLib.prototype["track_pageview"] = MixpanelLib.prototype.track_pageview;
MixpanelLib.prototype["register"] = MixpanelLib.prototype.register;
MixpanelLib.prototype["register_once"] = MixpanelLib.prototype.register_once;
MixpanelLib.prototype["unregister"] = MixpanelLib.prototype.unregister;
MixpanelLib.prototype["identify"] = MixpanelLib.prototype.identify;
MixpanelLib.prototype["alias"] = MixpanelLib.prototype.alias;
MixpanelLib.prototype["name_tag"] = MixpanelLib.prototype.name_tag;
MixpanelLib.prototype["set_config"] = MixpanelLib.prototype.set_config;
MixpanelLib.prototype["get_config"] = MixpanelLib.prototype.get_config;
MixpanelLib.prototype["get_property"] = MixpanelLib.prototype.get_property;
MixpanelLib.prototype["get_distinct_id"] = MixpanelLib.prototype.get_distinct_id;
MixpanelLib.prototype["toString"] = MixpanelLib.prototype.toString;
MixpanelLib.prototype["opt_out_tracking"] = MixpanelLib.prototype.opt_out_tracking;
MixpanelLib.prototype["opt_in_tracking"] = MixpanelLib.prototype.opt_in_tracking;
MixpanelLib.prototype["has_opted_out_tracking"] = MixpanelLib.prototype.has_opted_out_tracking;
MixpanelLib.prototype["has_opted_in_tracking"] = MixpanelLib.prototype.has_opted_in_tracking;
MixpanelLib.prototype["clear_opt_in_out_tracking"] = MixpanelLib.prototype.clear_opt_in_out_tracking;
MixpanelLib.prototype["get_group"] = MixpanelLib.prototype.get_group;
MixpanelLib.prototype["set_group"] = MixpanelLib.prototype.set_group;
MixpanelLib.prototype["add_group"] = MixpanelLib.prototype.add_group;
MixpanelLib.prototype["remove_group"] = MixpanelLib.prototype.remove_group;
MixpanelLib.prototype["track_with_groups"] = MixpanelLib.prototype.track_with_groups;
MixpanelLib.prototype["start_batch_senders"] = MixpanelLib.prototype.start_batch_senders;
MixpanelLib.prototype["stop_batch_senders"] = MixpanelLib.prototype.stop_batch_senders;
// MixpanelPersistence Exports
MixpanelPersistence.prototype["properties"] = MixpanelPersistence.prototype.properties;
MixpanelPersistence.prototype["update_search_keyword"] = MixpanelPersistence.prototype.update_search_keyword;
MixpanelPersistence.prototype["update_referrer_info"] = MixpanelPersistence.prototype.update_referrer_info;
MixpanelPersistence.prototype["get_cross_subdomain"] = MixpanelPersistence.prototype.get_cross_subdomain;
MixpanelPersistence.prototype["clear"] = MixpanelPersistence.prototype.clear;
var instances = {};
var extend_mp = function() {
    // add all the sub mixpanel instances
    _.each(instances, function(instance, name) {
        if (name !== PRIMARY_INSTANCE_NAME) mixpanel_master[name] = instance;
    });
    // add private functions as _
    mixpanel_master["_"] = _;
};
var override_mp_init_func = function() {
    // we override the snippets init function to handle the case where a
    // user initializes the mixpanel library after the script loads & runs
    mixpanel_master["init"] = function(token, config, name) {
        if (name) {
            // initialize a sub library
            if (!mixpanel_master[name]) {
                mixpanel_master[name] = instances[name] = create_mplib(token, config, name);
                mixpanel_master[name]._loaded();
            }
            return mixpanel_master[name];
        } else {
            var instance = mixpanel_master;
            if (instances[PRIMARY_INSTANCE_NAME]) // main mixpanel lib already initialized
            instance = instances[PRIMARY_INSTANCE_NAME];
            else if (token) {
                // intialize the main mixpanel lib
                instance = create_mplib(token, config, PRIMARY_INSTANCE_NAME);
                instance._loaded();
                instances[PRIMARY_INSTANCE_NAME] = instance;
            }
            mixpanel_master = instance;
            if (init_type === INIT_SNIPPET) window$1[PRIMARY_INSTANCE_NAME] = mixpanel_master;
            extend_mp();
        }
    };
};
var add_dom_loaded_handler = function() {
    // Cross browser DOM Loaded support
    function dom_loaded_handler() {
        // function flag since we only want to execute this once
        if (dom_loaded_handler.done) return;
        dom_loaded_handler.done = true;
        DOM_LOADED = true;
        ENQUEUE_REQUESTS = false;
        _.each(instances, function(inst) {
            inst._dom_loaded();
        });
    }
    function do_scroll_check() {
        try {
            document$1.documentElement.doScroll("left");
        } catch (e) {
            setTimeout(do_scroll_check, 1);
            return;
        }
        dom_loaded_handler();
    }
    if (document$1.addEventListener) {
        if (document$1.readyState === "complete") // safari 4 can fire the DOMContentLoaded event before loading all
        // external JS (including this file). you will see some copypasta
        // on the internet that checks for 'complete' and 'loaded', but
        // 'loaded' is an IE thing
        dom_loaded_handler();
        else document$1.addEventListener("DOMContentLoaded", dom_loaded_handler, false);
    } else if (document$1.attachEvent) {
        // IE
        document$1.attachEvent("onreadystatechange", dom_loaded_handler);
        // check to make sure we arn't in a frame
        var toplevel = false;
        try {
            toplevel = window$1.frameElement === null;
        } catch (e) {
        // noop
        }
        if (document$1.documentElement.doScroll && toplevel) do_scroll_check();
    }
    // fallback handler, always will work
    _.register_event(window$1, "load", dom_loaded_handler, true);
};
function init_as_module() {
    init_type = INIT_MODULE;
    mixpanel_master = new MixpanelLib();
    override_mp_init_func();
    mixpanel_master["init"]();
    add_dom_loaded_handler();
    return mixpanel_master;
}
var mixpanel = init_as_module();
module.exports = mixpanel;

},{}],"7hTpP":[function(require,module,exports) {
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
exports.default = ({ core , constants , stores , services  })=>()=>{
        const tags = stores.tags.list();
        const options = stores.settings.find("options");
        const modeCounts = Object.fromEntries(constants.options.modes.map((mode)=>[
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
exports.default = ({ services , constants  })=>async (emails, fallback)=>{
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
            services.gravatar.status.to.error(constants.gravatar.errorMessage);
            throw err; // probably for logging
        }
    };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1FfoM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ({ core , services , stores , subscriptions , util  })=>(tagData)=>{
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
        return util.pipe(assignRoleId, core.tags.buildTag, insertTag)(tagData || {});
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
exports.default = ({ services , subscriptions , util , constants  })=>()=>{
        const adjustTagInstanceCounts = util.debounce(services.tags.adjustTagInstanceCounts, constants.debounce.adjustTagInstanceCounts);
        constants.options.modes.forEach((mode)=>{
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
exports.default = ({ constants , stores  })=>()=>{
        const nilRoleId = stores.roles.insert(constants.roles.nilRole);
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
    const update = (id, changes)=>manage(id).update(changes);
    const onChange = (id, field, listener)=>manage(id).subscriptions.onChange(field, listener);
    const onChangeAny = (field, listener)=>collectionEmitter.on(`change:${field}`, listener);
    const onInsert = (listener)=>collectionEmitter.on("insert", listener);
    const onFirstInsert = (listener)=>collectionEmitter.once("firstInsert", listener);
    const onBeforeRemove = (listener)=>collectionEmitter.on("beforeRemove", listener);
    const subscriptions = {
        onChange,
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
        update,
        subscriptions
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
exports.default = ({ storage , constants  })=>()=>{
        return Object.fromEntries(constants.storage.stores.map((name)=>{
            const defaults = constants.storage.defaults[name];
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
exports.default = ({ ui , subscriptions , constants  })=>()=>{
        const $style = ui.el("style");
        subscriptions.settings.onChange("options", "shape", (shape)=>{
            const borderRadius = constants.options.shapeRadius[shape];
            $style.textContent = `.tag-image { border-radius: ${borderRadius}%; }`;
        });
        return $style;
    };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hB7MJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ({ ui , subscriptions , constants  })=>()=>{
        const $style = ui.el("style");
        subscriptions.settings.onChange("options", "size", (size)=>{
            const width = size - constants.tags.imagePadding * 2;
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
    function Color(r, g, b, a) {
        classCallCheck(this, Color);
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
            } else if (input.startsWith("#")) that.rgba = Color.hexToRgb(input);
            else that.rgba = Color.nameToRgb(input) || Color.hexToRgb(input);
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
    createClass(Color, [
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
                return this._rgba = Color.hslToRgb(this._hsla);
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
                return this._hsla = Color.rgbToHsl(this._rgba);
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
                this.rgba = Color.hexToRgb(hex);
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
                return hex === undefined ? hex : Color.hexToRgb(hex.replace(/\-/g, "00").padStart(6, "f"));
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
                    var q = l < 0.5 ? l * (1 + s) : l + s - l * s, p = 2 * l - q;
                    r = hue2rgb(p, q, h + 1 / 3);
                    g = hue2rgb(p, q, h);
                    b = hue2rgb(p, q, h - 1 / 3);
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
    return Color;
}();
var EventBucket = function() {
    function EventBucket() {
        classCallCheck(this, EventBucket);
        this._events = [];
    }
    createClass(EventBucket, [
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
                    if (isMatch) EventBucket._doRemove(e.target, e.type, e.handler);
                    return !isMatch;
                });
            }
        },
        {
            key: "destroy",
            value: function destroy() {
                this._events.forEach(function(e) {
                    return EventBucket._doRemove(e.target, e.type, e.handler);
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
    return EventBucket;
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
    function Picker(options) {
        classCallCheck(this, Picker);
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
    createClass(Picker, [
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
    return Picker;
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
var _vanillaPickerJs = require("./vanilla-picker.js");
var _vanillaPickerJsDefault = parcelHelpers.interopDefault(_vanillaPickerJs);
exports.default = {
    vanillaPicker: (0, _vanillaPickerJsDefault.default)
};

},{"./vanilla-picker.js":"3d8vC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3d8vC":[function(require,module,exports) {
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

},{"vanilla-picker":"2CfBK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"48ejv":[function(require,module,exports) {
/* eslint-disable no-undef */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    isTest: true,
    mixpanelToken: "2a4b8b61f947d51d88a2581a330d497e",
    app: {
        name: "Agile Avatars",
        issues: "https://github.com/mattriley/agile-avatars/issues",
        source: "https://github.com/mattriley/agile-avatars"
    },
    author: {
        name: "Matt Riley",
        profile: "https://github.com/mattriley"
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["1ntG6","bNKaB"], "bNKaB", "parcelRequirede3f")

//# sourceMappingURL=index.22b5059a.js.map
