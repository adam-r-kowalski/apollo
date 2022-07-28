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
})({"iJYvl":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "5c1b77e3b71e74eb";
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

},{}],"h7u1C":[function(require,module,exports) {
var _event = require("./event");
var _run = require("./ui/run");
var _view = require("./ui/view");
var _state = require("./state");
var _webgl2 = require("./ui/webgl2");
const generateUUID = ()=>crypto.randomUUID();
const success_or_error = (0, _run.run)({
    state: (0, _state.demoState)(generateUUID),
    view: (0, _view.view),
    update: (state, event)=>(0, _event.update)(generateUUID, state, event),
    window,
    document: document,
    requestAnimationFrame,
    setTimeout
});
if (success_or_error.kind == (0, _webgl2.ProgramKind).ERROR) throw success_or_error;
const dispatch = success_or_error.dispatch;
if (typeof PointerEvent.prototype.getCoalescedEvents === "function") document.addEventListener("pointermove", (e)=>{
    e.getCoalescedEvents().forEach((p)=>{
        dispatch({
            kind: (0, _event.EventKind).POINTER_MOVE,
            pointer: (0, _run.transformPointer)(p)
        });
    });
});
else document.addEventListener("pointermove", (p)=>dispatch({
        kind: (0, _event.EventKind).POINTER_MOVE,
        pointer: (0, _run.transformPointer)(p)
    }));
document.addEventListener("pointerdown", (p)=>{
    dispatch({
        kind: (0, _event.EventKind).POINTER_DOWN,
        pointer: (0, _run.transformPointer)(p)
    });
});
document.addEventListener("pointerup", (p)=>{
    dispatch({
        kind: (0, _event.EventKind).POINTER_UP,
        pointer: (0, _run.transformPointer)(p)
    });
});
document.addEventListener("wheel", (e)=>{
    e.preventDefault();
    dispatch({
        kind: (0, _event.EventKind).WHEEL,
        position: {
            x: e.clientX,
            y: e.clientY
        },
        deltaY: e.deltaY
    });
}, {
    passive: false
});
document.addEventListener("contextmenu", (e)=>{
    e.preventDefault();
});
document.addEventListener("touchend", ()=>{
    document.body.requestFullscreen();
});
document.addEventListener("keydown", (e)=>{
    e.preventDefault();
    dispatch({
        kind: (0, _event.EventKind).KEYDOWN,
        key: e.key
    });
});

},{"./event":"edjVn","./ui/run":"e5SKV","./ui/view":"gXfVS","./state":"1Yeju","./ui/webgl2":"gDI6s"}],"edjVn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EventKind", ()=>EventKind);
parcelHelpers.export(exports, "changeNth", ()=>changeNth);
parcelHelpers.export(exports, "openFinder", ()=>openFinder);
parcelHelpers.export(exports, "addNodeToGraph", ()=>addNodeToGraph);
parcelHelpers.export(exports, "removeNodeFromGraph", ()=>removeNodeFromGraph);
parcelHelpers.export(exports, "openNumericKeyboard", ()=>openNumericKeyboard);
parcelHelpers.export(exports, "update", ()=>update);
var _fuzzyFind = require("./fuzzy_find");
var _matrix3X3 = require("./linear_algebra/matrix3x3");
var _vector3 = require("./linear_algebra/vector3");
var _state = require("./state");
var _update = require("./graph/update");
let EventKind;
(function(EventKind1) {
    EventKind1[EventKind1["POINTER_MOVE"] = 0] = "POINTER_MOVE";
    EventKind1[EventKind1["POINTER_DOWN"] = 1] = "POINTER_DOWN";
    EventKind1[EventKind1["POINTER_UP"] = 2] = "POINTER_UP";
    EventKind1[EventKind1["CLICKED_NODE"] = 3] = "CLICKED_NODE";
    EventKind1[EventKind1["WHEEL"] = 4] = "WHEEL";
    EventKind1[EventKind1["CLICKED_INPUT"] = 5] = "CLICKED_INPUT";
    EventKind1[EventKind1["CLICKED_OUTPUT"] = 6] = "CLICKED_OUTPUT";
    EventKind1[EventKind1["DOUBLE_CLICK_TIMEOUT"] = 7] = "DOUBLE_CLICK_TIMEOUT";
    EventKind1[EventKind1["DOUBLE_CLICK"] = 8] = "DOUBLE_CLICK";
    EventKind1[EventKind1["KEYDOWN"] = 9] = "KEYDOWN";
    EventKind1[EventKind1["VIRTUAL_KEYDOWN"] = 10] = "VIRTUAL_KEYDOWN";
    EventKind1[EventKind1["CLICKED_FINDER_OPTION"] = 11] = "CLICKED_FINDER_OPTION";
    EventKind1[EventKind1["CLICKED_NUMBER"] = 12] = "CLICKED_NUMBER";
    EventKind1[EventKind1["CLICKED_BACKGROUND"] = 13] = "CLICKED_BACKGROUND";
    EventKind1[EventKind1["DELETE_NODE"] = 14] = "DELETE_NODE";
    EventKind1[EventKind1["DELETE_INPUT_EDGE"] = 15] = "DELETE_INPUT_EDGE";
    EventKind1[EventKind1["DELETE_OUTPUT_EDGES"] = 16] = "DELETE_OUTPUT_EDGES";
})(EventKind || (EventKind = {}));
const pointerDown = (state, event)=>{
    if (state.inputTarget.kind !== (0, _state.InputTargetKind).NONE) return {
        state
    };
    const pointers = [
        ...state.pointers,
        event.pointer
    ];
    if (pointers.length > 1) return {
        state: {
            ...state,
            potentialDoubleClick: false,
            dragging: false,
            zooming: pointers.length === 2,
            pointers
        }
    };
    else if (state.potentialDoubleClick) return {
        state: {
            ...state,
            potentialDoubleClick: false,
            pointers
        },
        dispatch: [
            {
                kind: EventKind.DOUBLE_CLICK,
                pointer: event.pointer
            }
        ]
    };
    else return {
        state: {
            ...state,
            dragging: true,
            potentialDoubleClick: true,
            pointers
        },
        schedule: [
            {
                after: {
                    milliseconds: 300
                },
                event: {
                    kind: EventKind.DOUBLE_CLICK_TIMEOUT
                }
            }
        ]
    };
};
const pointerUp = (state, event)=>{
    const pointers = state.pointers.filter((p)=>p.id !== event.pointer.id);
    switch(pointers.length){
        case 1:
            return {
                state: {
                    ...state,
                    pointers,
                    zooming: false,
                    dragging: true,
                    pointerDistance: 0
                }
            };
        case 0:
            return {
                state: {
                    ...state,
                    pointers,
                    dragging: false,
                    pointerDistance: 0
                }
            };
        default:
            return {
                state: {
                    ...state,
                    pointers
                }
            };
    }
};
const changeNth = (xs, i, x)=>[
        ...xs.slice(0, i),
        x,
        ...xs.slice(i + 1)
    ];
const pointerMove = (state, event)=>{
    if (!state.dragging && !state.zooming) {
        const nodePlacementLocation = !state.finder.show ? event.pointer.position : state.nodePlacementLocation;
        return {
            state: {
                ...state,
                nodePlacementLocation
            }
        };
    } else {
        const index = state.pointers.findIndex((p)=>p.id === event.pointer.id);
        const pointer = state.pointers[index];
        const pointers = changeNth(state.pointers, index, event.pointer);
        if (state.dragging) {
            const dx = event.pointer.position.x - pointer.position.x;
            const dy = event.pointer.position.y - pointer.position.y;
            if (state.selected.kind === (0, _state.SelectedKind).NODE) {
                const scaling = (0, _vector3.length)((0, _matrix3X3.multiplyMatrixVector)(state.camera, [
                    0,
                    1,
                    0
                ]));
                const graph = (0, _update.changeNodePosition)(state.graph, state.selected.node, (p)=>({
                        x: p.x + dx * scaling,
                        y: p.y + dy * scaling
                    }));
                return {
                    state: {
                        ...state,
                        pointers,
                        graph
                    },
                    render: true
                };
            } else {
                const camera = (0, _matrix3X3.multiplyMatrices)(state.camera, (0, _matrix3X3.translate)(-dx, -dy));
                return {
                    state: {
                        ...state,
                        pointers,
                        camera
                    },
                    render: true
                };
            }
        } else {
            // must be zooming
            const [p0, p1] = [
                pointers[0],
                pointers[1]
            ];
            const { x: x1 , y: y1  } = p0.position;
            const { x: x2 , y: y2  } = p1.position;
            const pointerDistance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
            const previousDistance = state.pointerDistance;
            const previousCenter = state.pointerCenter;
            const x = (p0.position.x + p1.position.x) / 2;
            const y = (p0.position.y + p1.position.y) / 2;
            const pointerCenter = {
                x,
                y
            };
            if (previousDistance > 0) {
                const move = (0, _matrix3X3.translate)(x, y);
                const zoom = Math.pow(2, (previousDistance - pointerDistance) * 0.01);
                const moveBack = (0, _matrix3X3.translate)(-x, -y);
                const dx = x - previousCenter.x;
                const dy = y - previousCenter.y;
                const camera = (0, _matrix3X3.multiplyMatrices)(state.camera, move, (0, _matrix3X3.scale)(zoom, zoom), moveBack, (0, _matrix3X3.translate)(-dx, -dy));
                return {
                    state: {
                        ...state,
                        pointerCenter,
                        pointerDistance,
                        pointers,
                        camera
                    },
                    render: true
                };
            } else return {
                state: {
                    ...state,
                    pointerCenter,
                    pointerDistance,
                    pointers
                }
            };
        }
    }
};
const clickedNode = (state, event)=>{
    const nodeOrder = state.nodeOrder.filter((uuid)=>uuid !== event.node);
    nodeOrder.push(event.node);
    return {
        state: {
            ...state,
            selected: {
                kind: (0, _state.SelectedKind).NODE,
                node: event.node
            },
            nodeOrder
        },
        render: true
    };
};
const wheel = (state, event)=>{
    const move = (0, _matrix3X3.translate)(event.position.x, event.position.y);
    const zoom = Math.pow(2, event.deltaY * 0.01);
    const moveBack = (0, _matrix3X3.translate)(-event.position.x, -event.position.y);
    const camera = (0, _matrix3X3.multiplyMatrices)(state.camera, move, (0, _matrix3X3.scale)(zoom, zoom), moveBack);
    return {
        state: {
            ...state,
            camera
        },
        render: true
    };
};
const clickedInput = (state, event, generateUUID)=>{
    if (state.selected.kind === (0, _state.SelectedKind).OUTPUT) {
        const input = state.graph.inputs[event.input];
        const output = state.graph.outputs[state.selected.output];
        if (input.node === output.node) return {
            state
        };
        else {
            const graph0 = input.edge !== undefined ? (0, _update.removeInputEdge)(state.graph, input.uuid) : state.graph;
            const { graph: graph1  } = (0, _update.addEdge)({
                graph: graph0,
                input: event.input,
                output: state.selected.output,
                generateUUID
            });
            return {
                state: {
                    ...state,
                    selected: {
                        kind: (0, _state.SelectedKind).NONE
                    },
                    graph: graph1
                },
                render: true
            };
        }
    } else return {
        state: {
            ...state,
            selected: {
                kind: (0, _state.SelectedKind).INPUT,
                input: event.input
            }
        },
        render: true
    };
};
const clickedOutput = (state, event, generateUUID)=>{
    if (state.selected.kind === (0, _state.SelectedKind).INPUT) {
        const input = state.graph.inputs[state.selected.input];
        const output = state.graph.outputs[event.output];
        if (output.node === input.node) return {
            state
        };
        else {
            const graph0 = input.edge !== undefined ? (0, _update.removeInputEdge)(state.graph, input.uuid) : state.graph;
            const { graph: graph1  } = (0, _update.addEdge)({
                graph: graph0,
                input: state.selected.input,
                output: event.output,
                generateUUID
            });
            return {
                state: {
                    ...state,
                    selected: {
                        kind: (0, _state.SelectedKind).NONE
                    },
                    graph: graph1
                },
                render: true
            };
        }
    } else return {
        state: {
            ...state,
            selected: {
                kind: (0, _state.SelectedKind).OUTPUT,
                output: event.output
            }
        },
        render: true
    };
};
const doubleClickTimeout = (state, _)=>({
        state: {
            ...state,
            potentialDoubleClick: false
        }
    });
const updateFinderOptions = (state)=>{
    const options = Object.keys(state.operations).filter((item)=>(0, _fuzzyFind.fuzzyFind)({
            haystack: item,
            needle: state.finder.search
        }));
    return {
        ...state,
        finder: {
            ...state.finder,
            options
        }
    };
};
const openFinder = (state)=>updateFinderOptions({
        ...state,
        finder: {
            show: true,
            search: "",
            options: []
        },
        virtualKeyboard: {
            show: true,
            kind: (0, _state.VirtualKeyboardKind).ALPHABETIC
        },
        inputTarget: {
            kind: (0, _state.InputTargetKind).FINDER
        },
        potentialDoubleClick: false
    });
const doubleClick = (state, { pointer  })=>({
        state: openFinder({
            ...state,
            nodePlacementLocation: pointer.position
        }),
        render: true
    });
const closeFinder = (state)=>({
        ...state,
        finder: {
            show: false,
            search: "",
            options: []
        },
        virtualKeyboard: {
            show: false,
            kind: (0, _state.VirtualKeyboardKind).ALPHABETIC
        },
        inputTarget: {
            kind: (0, _state.InputTargetKind).NONE
        }
    });
const insertOperationFromFinder = (state, name, generateUUID)=>{
    const operation = state.operations[name];
    const [x, y, _] = (0, _matrix3X3.multiplyMatrixVector)(state.camera, [
        state.nodePlacementLocation.x,
        state.nodePlacementLocation.y,
        1
    ]);
    const { state: nextState  } = addNodeToGraph({
        state,
        operation,
        position: {
            x,
            y
        },
        generateUUID
    });
    return {
        state: closeFinder(nextState),
        render: true
    };
};
const updateFinderSearch = (state, transform)=>({
        state: updateFinderOptions({
            ...state,
            finder: {
                ...state.finder,
                search: transform(state.finder.search)
            }
        }),
        render: true
    });
const updateBodyValue = (state, body, transform)=>{
    return {
        state: {
            ...state,
            graph: (0, _update.changeBodyValue)(state.graph, body, transform)
        },
        render: true
    };
};
const addNodeToGraph = ({ state , operation , position , generateUUID  })=>{
    const { graph , node  } = (0, _update.addNode)({
        graph: state.graph,
        operation,
        position,
        generateUUID
    });
    return {
        state: {
            ...state,
            graph,
            nodeOrder: [
                ...state.nodeOrder,
                node
            ]
        },
        node
    };
};
const removeNodeFromGraph = (state, node)=>({
        ...state,
        graph: (0, _update.removeNode)(state.graph, node),
        nodeOrder: state.nodeOrder.filter((n)=>n !== node),
        selected: {
            kind: (0, _state.SelectedKind).NONE
        }
    });
const keyDown = (state, { key  }, generateUUID)=>{
    switch(state.inputTarget.kind){
        case (0, _state.InputTargetKind).FINDER:
            switch(key){
                case "Backspace":
                    return updateFinderSearch(state, (search)=>search.slice(0, -1));
                case "Shift":
                case "Alt":
                case "Control":
                case "Meta":
                case "Tab":
                    return {
                        state
                    };
                case "Enter":
                    if (state.finder.options.length > 0) {
                        const name = state.finder.options[0];
                        return insertOperationFromFinder(state, name, generateUUID);
                    } else return {
                        state: closeFinder(state),
                        render: true
                    };
                case "Escape":
                    return {
                        state: closeFinder(state),
                        render: true
                    };
                default:
                    return updateFinderSearch(state, (search)=>search + key);
            }
        case (0, _state.InputTargetKind).NUMBER:
            switch(key){
                case "Backspace":
                    return updateBodyValue(state, state.inputTarget.body, (value)=>{
                        let newValue = value.toString().slice(0, -1);
                        return newValue === "" ? 0 : parseFloat(newValue);
                    });
                case "1":
                case "2":
                case "3":
                case "4":
                case "5":
                case "6":
                case "7":
                case "8":
                case "9":
                case "0":
                    return updateBodyValue(state, state.inputTarget.body, (value)=>parseFloat(value.toString() + key));
                case "Enter":
                    return {
                        state: {
                            ...state,
                            virtualKeyboard: {
                                show: false,
                                kind: (0, _state.VirtualKeyboardKind).ALPHABETIC
                            },
                            inputTarget: {
                                kind: (0, _state.InputTargetKind).NONE
                            },
                            selected: {
                                kind: (0, _state.SelectedKind).NONE
                            }
                        },
                        render: true
                    };
                default:
                    return {
                        state
                    };
            }
        case (0, _state.InputTargetKind).NONE:
            switch(key){
                case "f":
                    return {
                        state: openFinder(state),
                        render: true
                    };
                case "d":
                    switch(state.selected.kind){
                        case (0, _state.SelectedKind).NODE:
                            return {
                                state: removeNodeFromGraph(state, state.selected.node),
                                render: true
                            };
                        case (0, _state.SelectedKind).INPUT:
                            return {
                                state: {
                                    ...state,
                                    graph: (0, _update.removeInputEdge)(state.graph, state.selected.input),
                                    selected: {
                                        kind: (0, _state.SelectedKind).NONE
                                    }
                                },
                                render: true
                            };
                        case (0, _state.SelectedKind).OUTPUT:
                            return {
                                state: {
                                    ...state,
                                    graph: (0, _update.removeOutputEdges)(state.graph, state.selected.output),
                                    selected: {
                                        kind: (0, _state.SelectedKind).NONE
                                    }
                                },
                                render: true
                            };
                        default:
                            return {
                                state
                            };
                    }
                default:
                    return {
                        state
                    };
            }
    }
};
const virtualKeyDown = (state, { key  }, generateUUID)=>{
    switch(state.inputTarget.kind){
        case (0, _state.InputTargetKind).FINDER:
            switch(key){
                case "del":
                    return updateFinderSearch(state, (search)=>search.slice(0, -1));
                case "sft":
                    return {
                        state
                    };
                case "space":
                    return updateFinderSearch(state, (search)=>search + " ");
                case "ret":
                    if (state.finder.options.length > 0) {
                        const name = state.finder.options[0];
                        return insertOperationFromFinder(state, name, generateUUID);
                    } else return {
                        state: closeFinder(state),
                        render: true
                    };
                default:
                    return updateFinderSearch(state, (search)=>search + key);
            }
        case (0, _state.InputTargetKind).NUMBER:
            switch(key){
                case "del":
                    return updateBodyValue(state, state.inputTarget.body, (value)=>{
                        let newValue = value.toString().slice(0, -1);
                        return newValue === "" ? 0 : parseFloat(newValue);
                    });
                case "1":
                case "2":
                case "3":
                case "4":
                case "5":
                case "6":
                case "7":
                case "8":
                case "9":
                case "0":
                case ".":
                    return updateBodyValue(state, state.inputTarget.body, (value)=>parseFloat(value.toString() + key));
                case "ret":
                    return {
                        state: {
                            ...state,
                            virtualKeyboard: {
                                show: false,
                                kind: (0, _state.VirtualKeyboardKind).ALPHABETIC
                            },
                            inputTarget: {
                                kind: (0, _state.InputTargetKind).NONE
                            },
                            selected: {
                                kind: (0, _state.SelectedKind).NONE
                            }
                        },
                        render: true
                    };
                default:
                    return {
                        state
                    };
            }
        case (0, _state.InputTargetKind).NONE:
            return {
                state
            };
    }
};
const clickedFinderOption = (state, { option  }, generateUUID)=>insertOperationFromFinder(state, option, generateUUID);
const openNumericKeyboard = (state, body)=>({
        ...state,
        virtualKeyboard: {
            show: true,
            kind: (0, _state.VirtualKeyboardKind).NUMERIC
        },
        inputTarget: {
            kind: (0, _state.InputTargetKind).NUMBER,
            body
        },
        selected: {
            kind: (0, _state.SelectedKind).BODY,
            body
        }
    });
const clickedNumber = (state, { body  })=>({
        state: openNumericKeyboard(closeFinder(state), body),
        render: true
    });
const clickedBackground = (state)=>({
        state: closeFinder({
            ...state,
            selected: {
                kind: (0, _state.SelectedKind).NONE
            }
        }),
        render: true
    });
const deleteNode = (state, { node  })=>({
        state: removeNodeFromGraph(state, node),
        render: true
    });
const deleteInputEdge = (state, { input  })=>({
        state: {
            ...state,
            graph: (0, _update.removeInputEdge)(state.graph, input),
            selected: {
                kind: (0, _state.SelectedKind).NONE
            }
        },
        render: true
    });
const deleteOutputEdges = (state, { output  })=>({
        state: {
            ...state,
            graph: (0, _update.removeOutputEdges)(state.graph, output),
            selected: {
                kind: (0, _state.SelectedKind).NONE
            }
        },
        render: true
    });
const update = (generateUUID, state, event)=>{
    switch(event.kind){
        case EventKind.POINTER_DOWN:
            return pointerDown(state, event);
        case EventKind.POINTER_UP:
            return pointerUp(state, event);
        case EventKind.POINTER_MOVE:
            return pointerMove(state, event);
        case EventKind.CLICKED_NODE:
            return clickedNode(state, event);
        case EventKind.WHEEL:
            return wheel(state, event);
        case EventKind.CLICKED_INPUT:
            return clickedInput(state, event, generateUUID);
        case EventKind.CLICKED_OUTPUT:
            return clickedOutput(state, event, generateUUID);
        case EventKind.DOUBLE_CLICK_TIMEOUT:
            return doubleClickTimeout(state, event);
        case EventKind.DOUBLE_CLICK:
            return doubleClick(state, event);
        case EventKind.KEYDOWN:
            return keyDown(state, event, generateUUID);
        case EventKind.VIRTUAL_KEYDOWN:
            return virtualKeyDown(state, event, generateUUID);
        case EventKind.CLICKED_FINDER_OPTION:
            return clickedFinderOption(state, event, generateUUID);
        case EventKind.CLICKED_NUMBER:
            return clickedNumber(state, event);
        case EventKind.CLICKED_BACKGROUND:
            return clickedBackground(state);
        case EventKind.DELETE_NODE:
            return deleteNode(state, event);
        case EventKind.DELETE_INPUT_EDGE:
            return deleteInputEdge(state, event);
        case EventKind.DELETE_OUTPUT_EDGES:
            return deleteOutputEdges(state, event);
    }
};

},{"./fuzzy_find":"9hQgB","./linear_algebra/matrix3x3":"aZqnw","./linear_algebra/vector3":"kGcgk","./state":"1Yeju","./graph/update":"lzKMU","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9hQgB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "fuzzyFind", ()=>fuzzyFind);
const fuzzyFind = ({ haystack , needle  })=>{
    let haystackIndex = 0;
    let needleIndex = 0;
    while(needleIndex < needle.length){
        const n = needle[needleIndex].toLowerCase();
        while(haystackIndex < haystack.length && n !== haystack[haystackIndex].toLowerCase())++haystackIndex;
        if (haystackIndex === haystack.length) return false;
        ++needleIndex;
    }
    return true;
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

},{}],"aZqnw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "identity", ()=>identity);
parcelHelpers.export(exports, "projection", ()=>projection);
parcelHelpers.export(exports, "translate", ()=>translate);
parcelHelpers.export(exports, "scale", ()=>scale);
parcelHelpers.export(exports, "rotate", ()=>rotate);
parcelHelpers.export(exports, "multiplyMatrices", ()=>multiplyMatrices);
parcelHelpers.export(exports, "multiplyMatrixVector", ()=>multiplyMatrixVector);
parcelHelpers.export(exports, "inverse", ()=>inverse);
const identity = ()=>[
        1,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        1, 
    ];
const projection = ({ width , height  })=>[
        2 / width,
        0,
        -1,
        0,
        -2 / height,
        1,
        0,
        0,
        1
    ];
const translate = (x, y)=>[
        1,
        0,
        x,
        0,
        1,
        y,
        0,
        0,
        1
    ];
const scale = (x, y)=>[
        x,
        0,
        0,
        0,
        y,
        0,
        0,
        0,
        1
    ];
const rotate = (radians)=>{
    const c = Math.cos(radians);
    const s = Math.sin(radians);
    return [
        c,
        s,
        0,
        -s,
        c,
        0,
        0,
        0,
        1
    ];
};
const multiplyMatrices = (...matrices)=>{
    const [head, ...tail] = matrices;
    return tail.reduce((a, b)=>{
        const a11 = a[0];
        const a12 = a[1];
        const a13 = a[2];
        const a21 = a[3];
        const a22 = a[4];
        const a23 = a[5];
        const a31 = a[6];
        const a32 = a[7];
        const a33 = a[8];
        const b11 = b[0];
        const b12 = b[1];
        const b13 = b[2];
        const b21 = b[3];
        const b22 = b[4];
        const b23 = b[5];
        const b31 = b[6];
        const b32 = b[7];
        const b33 = b[8];
        const c11 = a11 * b11 + a12 * b21 + a13 * b31;
        const c12 = a11 * b12 + a12 * b22 + a13 * b32;
        const c13 = a11 * b13 + a12 * b23 + a13 * b33;
        const c21 = a21 * b11 + a22 * b21 + a23 * b31;
        const c22 = a21 * b12 + a22 * b22 + a23 * b32;
        const c23 = a21 * b13 + a22 * b23 + a23 * b33;
        const c31 = a31 * b11 + a32 * b21 + a33 * b31;
        const c32 = a31 * b12 + a32 * b22 + a33 * b32;
        const c33 = a31 * b13 + a32 * b23 + a33 * b33;
        return [
            c11,
            c12,
            c13,
            c21,
            c22,
            c23,
            c31,
            c32,
            c33, 
        ];
    }, head);
};
const multiplyMatrixVector = (a, b)=>{
    const a11 = a[0];
    const a12 = a[1];
    const a13 = a[2];
    const a21 = a[3];
    const a22 = a[4];
    const a23 = a[5];
    const a31 = a[6];
    const a32 = a[7];
    const a33 = a[8];
    const b1 = b[0];
    const b2 = b[1];
    const b3 = b[2];
    const c1 = a11 * b1 + a12 * b2 + a13 * b3;
    const c2 = a21 * b1 + a22 * b2 + a23 * b3;
    const c3 = a31 * b1 + a32 * b2 + a33 * b3;
    return [
        c1,
        c2,
        c3
    ];
};
const inverse = (a)=>{
    const a11 = a[0];
    const a12 = a[1];
    const a13 = a[2];
    const a21 = a[3];
    const a22 = a[4];
    const a23 = a[5];
    const a31 = a[6];
    const a32 = a[7];
    const a33 = a[8];
    const b11 = a22 * a33 - a23 * a32;
    const b12 = a21 * a33 - a23 * a31;
    const b13 = a21 * a32 - a22 * a31;
    const b21 = a12 * a33 - a13 * a32;
    const b22 = a11 * a33 - a13 * a31;
    const b23 = a11 * a32 - a12 * a31;
    const b31 = a12 * a23 - a13 * a22;
    const b32 = a11 * a23 - a13 * a21;
    const b33 = a11 * a22 - a12 * a21;
    const det = a31 * b31 - a32 * b32 + a33 * b33;
    const idet = 1 / det;
    return [
        idet * b11,
        idet * -b21,
        idet * b31,
        idet * -b12,
        idet * b22,
        idet * -b32,
        idet * b13,
        idet * -b23,
        idet * b33
    ];
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kGcgk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "length", ()=>length);
const length = ([a, b, c])=>Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2) + Math.pow(c, 2));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1Yeju":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "VirtualKeyboardKind", ()=>VirtualKeyboardKind);
parcelHelpers.export(exports, "InputTargetKind", ()=>InputTargetKind);
parcelHelpers.export(exports, "SelectedKind", ()=>SelectedKind);
parcelHelpers.export(exports, "emptyState", ()=>emptyState);
parcelHelpers.export(exports, "demoState", ()=>demoState);
var _matrix3X3 = require("./linear_algebra/matrix3x3");
var _model = require("./graph/model");
var _update = require("./graph/update");
let VirtualKeyboardKind;
(function(VirtualKeyboardKind1) {
    VirtualKeyboardKind1[VirtualKeyboardKind1["ALPHABETIC"] = 0] = "ALPHABETIC";
    VirtualKeyboardKind1[VirtualKeyboardKind1["NUMERIC"] = 1] = "NUMERIC";
})(VirtualKeyboardKind || (VirtualKeyboardKind = {}));
let InputTargetKind;
(function(InputTargetKind1) {
    InputTargetKind1[InputTargetKind1["FINDER"] = 0] = "FINDER";
    InputTargetKind1[InputTargetKind1["NUMBER"] = 1] = "NUMBER";
    InputTargetKind1[InputTargetKind1["NONE"] = 2] = "NONE";
})(InputTargetKind || (InputTargetKind = {}));
let SelectedKind;
(function(SelectedKind1) {
    SelectedKind1[SelectedKind1["NODE"] = 0] = "NODE";
    SelectedKind1[SelectedKind1["INPUT"] = 1] = "INPUT";
    SelectedKind1[SelectedKind1["OUTPUT"] = 2] = "OUTPUT";
    SelectedKind1[SelectedKind1["BODY"] = 3] = "BODY";
    SelectedKind1[SelectedKind1["NONE"] = 4] = "NONE";
})(SelectedKind || (SelectedKind = {}));
const emptyState = ()=>({
        graph: (0, _model.emptyGraph)(),
        nodeOrder: [],
        zooming: false,
        dragging: false,
        pointers: [],
        pointerDistance: 0,
        pointerCenter: {
            x: 0,
            y: 0
        },
        camera: (0, _matrix3X3.identity)(),
        selected: {
            kind: SelectedKind.NONE
        },
        theme: {
            background: {
                red: 2,
                green: 22,
                blue: 39,
                alpha: 255
            },
            node: {
                red: 41,
                green: 95,
                blue: 120,
                alpha: 255
            },
            selectedNode: {
                red: 23,
                green: 54,
                blue: 69,
                alpha: 255
            },
            input: {
                red: 188,
                green: 240,
                blue: 192,
                alpha: 255
            },
            selectedInput: {
                red: 175,
                green: 122,
                blue: 208,
                alpha: 255
            },
            connection: {
                red: 255,
                green: 255,
                blue: 255,
                alpha: 255
            }
        },
        potentialDoubleClick: false,
        nodePlacementLocation: {
            x: 0,
            y: 0
        },
        finder: {
            search: "",
            options: [],
            show: false
        },
        virtualKeyboard: {
            show: false,
            kind: VirtualKeyboardKind.ALPHABETIC
        },
        inputTarget: {
            kind: InputTargetKind.NONE
        },
        operations: {}
    });
const demoState = (generateUUID)=>{
    const state = {
        ...emptyState(),
        operations: {
            "Number": {
                name: "Number",
                inputs: [],
                body: 0,
                outputs: [
                    "out"
                ]
            },
            "Add": {
                name: "Add",
                inputs: [
                    "x",
                    "y"
                ],
                outputs: [
                    "out"
                ]
            },
            "Subtract": {
                name: "Subtract",
                inputs: [
                    "x",
                    "y"
                ],
                outputs: [
                    "out"
                ]
            },
            "Multiply": {
                name: "Multiply",
                inputs: [
                    "x",
                    "y"
                ],
                outputs: [
                    "out"
                ]
            },
            "Divide": {
                name: "Divide",
                inputs: [
                    "x",
                    "y"
                ],
                outputs: [
                    "out"
                ]
            },
            "Equal": {
                name: "Equal",
                inputs: [
                    "x",
                    "y"
                ],
                outputs: [
                    "out"
                ]
            },
            "Less Than": {
                name: "Less Than",
                inputs: [
                    "x",
                    "y"
                ],
                outputs: [
                    "out"
                ]
            },
            "Print": {
                name: "Print",
                inputs: [
                    "value"
                ],
                outputs: []
            }
        }
    };
    const { graph: graph0 , node: number0  } = (0, _update.addNode)({
        graph: state.graph,
        operation: state.operations["Number"],
        position: {
            x: 25,
            y: 20
        },
        generateUUID
    });
    const graph1 = (0, _update.changeBodyValue)(graph0, graph0.nodes[number0].body, ()=>10);
    const { graph: graph2 , node: number1  } = (0, _update.addNode)({
        graph: graph1,
        operation: state.operations["Number"],
        position: {
            x: 55,
            y: 105
        },
        generateUUID
    });
    const graph3 = (0, _update.changeBodyValue)(graph2, graph2.nodes[number1].body, ()=>25);
    const { graph: graph4 , node: add  } = (0, _update.addNode)({
        graph: graph3,
        operation: state.operations["Add"],
        position: {
            x: 175,
            y: 55
        },
        generateUUID
    });
    const { graph: graph5  } = (0, _update.addEdge)({
        graph: graph4,
        input: graph4.nodes[add].inputs[0],
        output: graph4.nodes[number0].outputs[0],
        generateUUID
    });
    const { graph: graph6  } = (0, _update.addEdge)({
        graph: graph5,
        input: graph5.nodes[add].inputs[1],
        output: graph5.nodes[number1].outputs[0],
        generateUUID
    });
    const { graph: graph7 , node: number2  } = (0, _update.addNode)({
        graph: graph6,
        operation: state.operations["Number"],
        position: {
            x: 225,
            y: 145
        },
        generateUUID
    });
    const graph8 = (0, _update.changeBodyValue)(graph7, graph7.nodes[number2].body, ()=>5);
    const { graph: graph9 , node: div  } = (0, _update.addNode)({
        graph: graph8,
        operation: state.operations["Divide"],
        position: {
            x: 355,
            y: 75
        },
        generateUUID
    });
    const { graph: graph10  } = (0, _update.addEdge)({
        graph: graph9,
        input: graph9.nodes[div].inputs[0],
        output: graph9.nodes[add].outputs[0],
        generateUUID
    });
    const { graph: graph11  } = (0, _update.addEdge)({
        graph: graph10,
        input: graph10.nodes[div].inputs[1],
        output: graph10.nodes[number2].outputs[0],
        generateUUID
    });
    const { graph: graph12 , node: print  } = (0, _update.addNode)({
        graph: graph11,
        operation: state.operations["Print"],
        position: {
            x: 535,
            y: 85
        },
        generateUUID
    });
    const { graph: graph13  } = (0, _update.addEdge)({
        graph: graph12,
        input: graph12.nodes[print].inputs[0],
        output: graph12.nodes[div].outputs[0],
        generateUUID
    });
    return {
        ...state,
        graph: graph13,
        nodeOrder: [
            number0,
            number1,
            add,
            number2,
            div,
            print
        ]
    };
};

},{"./linear_algebra/matrix3x3":"aZqnw","./graph/model":"riTFE","./graph/update":"lzKMU","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"riTFE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "emptyGraph", ()=>emptyGraph);
const emptyGraph = ()=>({
        nodes: {},
        edges: {},
        inputs: {},
        bodys: {},
        outputs: {}
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lzKMU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addNode", ()=>addNode);
parcelHelpers.export(exports, "removeNode", ()=>removeNode);
parcelHelpers.export(exports, "removeInputEdge", ()=>removeInputEdge);
parcelHelpers.export(exports, "removeOutputEdges", ()=>removeOutputEdges);
parcelHelpers.export(exports, "addEdge", ()=>addEdge);
parcelHelpers.export(exports, "changeNodePosition", ()=>changeNodePosition);
parcelHelpers.export(exports, "changeBodyValue", ()=>changeBodyValue);
const addNode = ({ graph , operation , position , generateUUID  })=>{
    const nodeUUID = generateUUID();
    const inputs = {
        ...graph.inputs
    };
    const inputUUIDs = [];
    for (const name of operation.inputs){
        const uuid = generateUUID();
        inputs[uuid] = {
            uuid,
            node: nodeUUID,
            name
        };
        inputUUIDs.push(uuid);
    }
    const outputs = {
        ...graph.outputs
    };
    const outputUUIDs = [];
    for (const name1 of operation.outputs){
        const uuid = generateUUID();
        outputs[uuid] = {
            uuid,
            node: nodeUUID,
            name: name1,
            edges: []
        };
        outputUUIDs.push(uuid);
    }
    const node = {
        uuid: nodeUUID,
        name: operation.name,
        inputs: inputUUIDs,
        outputs: outputUUIDs,
        position
    };
    if (operation.body !== undefined) {
        const body = {
            uuid: generateUUID(),
            node: nodeUUID,
            value: operation.body
        };
        return {
            graph: {
                ...graph,
                nodes: {
                    ...graph.nodes,
                    [node.uuid]: {
                        ...node,
                        body: body.uuid
                    }
                },
                inputs,
                outputs,
                bodys: {
                    ...graph.bodys,
                    [body.uuid]: body
                }
            },
            node: nodeUUID
        };
    } else return {
        graph: {
            ...graph,
            nodes: {
                ...graph.nodes,
                [node.uuid]: node
            },
            inputs,
            outputs
        },
        node: nodeUUID
    };
};
const removeNode = (graph, node)=>{
    const nodes = {
        ...graph.nodes
    };
    const removedNode = nodes[node];
    delete nodes[node];
    const edgeUUIDs = [];
    for (const input of removedNode.inputs){
        const edge = graph.inputs[input].edge;
        if (edge) edgeUUIDs.push(edge);
    }
    for (const output of removedNode.outputs)for (const edge of graph.outputs[output].edges)edgeUUIDs.push(edge);
    const edges = {
        ...graph.edges
    };
    const inputs = {
        ...graph.inputs
    };
    const outputs = {
        ...graph.outputs
    };
    for (const uuid of edgeUUIDs){
        const edge = edges[uuid];
        const input = inputs[edge.input];
        inputs[edge.input] = {
            ...input,
            edge: undefined
        };
        const output = outputs[edge.output];
        outputs[edge.output] = {
            ...output,
            edges: output.edges.filter((e)=>e !== uuid)
        };
        delete edges[uuid];
    }
    for (const input1 of removedNode.inputs)delete inputs[input1];
    for (const output1 of removedNode.outputs)delete outputs[output1];
    return {
        ...graph,
        nodes,
        edges,
        inputs,
        outputs
    };
};
const removeInputEdge = (graph, input)=>{
    const edgeUUID = graph.inputs[input].edge;
    if (edgeUUID) {
        const edge = graph.edges[edgeUUID];
        const output = graph.outputs[edge.output];
        const outputs = {
            ...graph.outputs,
            [edge.output]: {
                ...output,
                edges: output.edges.filter((e)=>e !== edge.uuid)
            }
        };
        const input = graph.inputs[edge.input];
        const inputs = {
            ...graph.inputs,
            [edge.input]: {
                ...input,
                edge: undefined
            }
        };
        const edges = {
            ...graph.edges
        };
        delete edges[edgeUUID];
        return {
            ...graph,
            outputs,
            inputs,
            edges
        };
    } else return graph;
};
const removeOutputEdges = (graph, output)=>{
    const edges = {
        ...graph.edges
    };
    const inputs = {
        ...graph.inputs
    };
    const outputs = {
        ...graph.outputs
    };
    for (const uuid of graph.outputs[output].edges){
        const edge = graph.edges[uuid];
        const input = inputs[edge.input];
        inputs[edge.input] = {
            ...input,
            edge: undefined
        };
        const output = outputs[edge.output];
        outputs[edge.output] = {
            ...output,
            edges: output.edges.filter((e)=>e !== uuid)
        };
        delete edges[uuid];
    }
    return {
        ...graph,
        outputs,
        inputs,
        edges
    };
};
const addEdge = ({ graph , input , output , generateUUID  })=>{
    const edge = {
        uuid: generateUUID(),
        input,
        output
    };
    const inputs = {
        ...graph.inputs,
        [input]: {
            ...graph.inputs[input],
            edge: edge.uuid
        }
    };
    const currentOutput = graph.outputs[output];
    const outputs = {
        ...graph.outputs,
        [output]: {
            ...currentOutput,
            edges: [
                ...currentOutput.edges,
                edge.uuid
            ]
        }
    };
    return {
        graph: {
            ...graph,
            inputs,
            outputs,
            edges: {
                ...graph.edges,
                [edge.uuid]: edge
            }
        },
        edge: edge.uuid
    };
};
const changeNodePosition = (graph, node, transform)=>{
    const currentNode = graph.nodes[node];
    return {
        ...graph,
        nodes: {
            ...graph.nodes,
            [node]: {
                ...currentNode,
                position: transform(currentNode.position)
            }
        }
    };
};
const changeBodyValue = (graph, body, transform)=>{
    const currentBody = graph.bodys[body];
    return {
        ...graph,
        bodys: {
            ...graph.bodys,
            [body]: {
                ...currentBody,
                value: transform(currentBody.value)
            }
        }
    };
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e5SKV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "transformPointer", ()=>transformPointer);
parcelHelpers.export(exports, "run", ()=>run);
var _pointerDown = require("./pointer_down");
var _render = require("./render");
var _webgl2 = require("./webgl2");
const transformPointer = (p)=>({
        id: p.pointerId,
        position: {
            x: p.clientX,
            y: p.clientY
        }
    });
const run = (properties)=>{
    let { state , view , update , window , document , requestAnimationFrame , setTimeout  } = properties;
    const renderer_or_error = (0, _webgl2.webGL2Renderer)({
        width: window.innerWidth,
        height: window.innerHeight,
        window,
        document
    });
    switch(renderer_or_error.kind){
        case (0, _webgl2.ProgramKind).ERROR:
            return renderer_or_error;
        case (0, _webgl2.ProgramKind).DATA:
            let renderer = renderer_or_error;
            let renderQueued = false;
            const scheduleRender = ()=>{
                if (!renderQueued) {
                    renderQueued = true;
                    requestAnimationFrame(()=>{
                        renderer = (0, _render.render)(renderer, view(state));
                        renderQueued = false;
                    });
                }
            };
            const dispatch = (event)=>{
                const { state: newState , render , schedule , dispatch: dispatchEvents  } = update(state, event);
                state = newState;
                if (render) scheduleRender();
                for (const { after , event: event1  } of schedule ?? []){
                    const { milliseconds  } = after;
                    setTimeout(()=>dispatch(event1), milliseconds);
                }
                for (const event2 of dispatchEvents ?? [])dispatch(event2);
            };
            renderer.dispatch = dispatch;
            document.body.appendChild(renderer.canvas);
            document.addEventListener("pointerdown", (p)=>{
                renderer = (0, _pointerDown.pointerDown)(renderer, transformPointer(p));
            });
            window.addEventListener("resize", ()=>{
                renderer.size = {
                    width: window.innerWidth,
                    height: window.innerHeight
                };
                scheduleRender();
            });
            scheduleRender();
            return {
                kind: (0, _webgl2.ProgramKind).DATA,
                dispatch
            };
    }
};

},{"./pointer_down":"2M9Su","./render":"ijMQi","./webgl2":"gDI6s","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2M9Su":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "pointerDown", ()=>pointerDown);
const inWorldSpace = ({ x0 , y0 , x1 , y1  }, pointer)=>x0 <= pointer.position.x && pointer.position.x <= x1 && y0 <= pointer.position.y && pointer.position.y <= y1;
const pointerDown = (renderer, pointer)=>{
    for(let i = renderer.clickHandlers.length; i > 0; --i){
        for (const { onClick , worldSpace  } of renderer.clickHandlers[i - 1])if (inWorldSpace(worldSpace, pointer)) {
            renderer.dispatch(onClick);
            return renderer;
        }
    }
    return renderer;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ijMQi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "render", ()=>render);
var _batchGeometry = require("./batch_geometry");
var _cameraStack = require("./camera_stack");
var _reduce = require("./reduce");
var _ = require(".");
var _reducer = require("./reducer");
const render = (renderer, ui)=>{
    const { width , height  } = renderer.size;
    renderer.clear();
    const constraints = {
        minWidth: 0,
        maxWidth: width,
        minHeight: 0,
        maxHeight: height
    };
    const uiLayout = (0, _.layout)(ui, constraints, renderer.measureText);
    const offsets = {
        x: 0,
        y: 0
    };
    const cameraStack = (0, _cameraStack.initCameraStack)();
    const uiGeometry = (0, _.geometry)(ui, uiLayout, offsets, cameraStack);
    const { layers , clickHandlers , connections , idToWorldSpace  } = (0, _reduce.reduce)(ui, uiLayout, uiGeometry, _reducer);
    const batches = (0, _batchGeometry.batchGeometry)(layers, connections, idToWorldSpace);
    renderer.cameras = cameraStack.cameras;
    renderer.clickHandlers = clickHandlers;
    for (const batch of batches)renderer.draw(batch);
    return renderer;
};

},{"./batch_geometry":"jV9Rc","./camera_stack":"dUAJr","./reduce":"2zvtU",".":"cOWCo","./reducer":"fWs3f","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jV9Rc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "cubicBezier", ()=>cubicBezier);
parcelHelpers.export(exports, "batchGeometry", ()=>batchGeometry);
const newBatch = (textureIndex)=>({
        triangles: {
            vertices: [],
            colors: [],
            vertexIndices: [],
            textureIndex,
            textureCoordinates: [],
            cameraIndex: []
        },
        lines: {
            vertices: [],
            colors: []
        }
    });
const linspace = (start, stop, num)=>{
    const step = (stop - start) / (num - 1);
    return Array.from({
        length: num
    }, (_, i)=>start + step * i);
};
function* cubicBezier(ts, from, to, offset) {
    const p0x = (from.x0 + from.x1) / 2;
    const p0y = (from.y0 + from.y1) / 2;
    const p1x = p0x + offset;
    const p1y = p0y;
    const p3x = (to.x0 + to.x1) / 2;
    const p3y = (to.y0 + to.y1) / 2;
    const p2x = p3x - offset;
    const p2y = p3y;
    let lastX = 0;
    let lastY = 0;
    let first = true;
    for (const t of ts){
        const tSquared = t * t;
        const tCubed = tSquared * t;
        const oneMinusT = 1 - t;
        const oneMinusTSquared = oneMinusT * oneMinusT;
        const oneMinusTCubed = oneMinusTSquared * oneMinusT;
        const a = oneMinusTCubed;
        const b = 3 * oneMinusTSquared * t;
        const c = 3 * oneMinusT * tSquared;
        const d = tCubed;
        const x = a * p0x + b * p1x + c * p2x + d * p3x;
        const y = a * p0y + b * p1y + c * p2y + d * p3y;
        if (first) {
            yield x;
            yield y;
            first = false;
        } else {
            yield lastX;
            yield lastY;
        }
        yield x;
        yield y;
        lastX = x;
        lastY = y;
    }
}
const batchGeometry = (layers, connections, idToWorldSpace)=>{
    const samples = 20;
    const ts = linspace(0, 1, samples);
    const batches = [];
    let batch = newBatch(0);
    let batchTextureIndex = batch.triangles.textureIndex.toString();
    layers.forEach((layer, z)=>{
        for (const [textureIndex, geometries] of Object.entries(layer)){
            if (batchTextureIndex !== textureIndex) {
                if (batch.triangles.vertices.length !== 0) batches.push(batch);
                batch = newBatch(parseInt(textureIndex));
                batchTextureIndex = textureIndex;
            }
            for (const geometry of geometries){
                const offset = batch.triangles.vertices.length / 2;
                batch.triangles.vertices.push(...geometry.vertices);
                batch.triangles.colors.push(...geometry.colors);
                for (const index of geometry.vertexIndices)batch.triangles.vertexIndices.push(index + offset);
                batch.triangles.textureCoordinates.push(...geometry.textureCoordinates);
                batch.triangles.cameraIndex.push(...geometry.cameraIndex);
            }
        }
        if (connections.length > z) {
            for (const { connections: cs , scale  } of connections[z]){
                const offset = 50 * scale;
                for (const { from , to , color  } of cs){
                    for (const p of cubicBezier(ts, idToWorldSpace[from], idToWorldSpace[to], offset))batch.lines.vertices.push(p);
                    const { red , green , blue , alpha  } = color;
                    for(let i = 0; i < samples * 2; ++i)batch.lines.colors.push(red, green, blue, alpha);
                }
            }
            if (batch.lines.vertices.length !== 0) {
                batches.push(batch);
                batch = newBatch(0);
            }
        }
    });
    if (batch.triangles.vertices.length !== 0) batches.push(batch);
    return batches;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dUAJr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initCameraStack", ()=>initCameraStack);
parcelHelpers.export(exports, "pushCamera", ()=>pushCamera);
parcelHelpers.export(exports, "activeCamera", ()=>activeCamera);
parcelHelpers.export(exports, "popCamera", ()=>popCamera);
parcelHelpers.export(exports, "transformWorldSpace", ()=>transformWorldSpace);
var _matrix3X3 = require("../linear_algebra/matrix3x3");
const initCameraStack = ()=>{
    const camera = (0, _matrix3X3.identity)();
    return {
        cameras: [
            (0, _matrix3X3.identity)()
        ],
        stack: [
            0
        ],
        transform: (0, _matrix3X3.inverse)(camera)
    };
};
const pushCamera = (cameraStack, camera)=>{
    const index = cameraStack.cameras.length;
    cameraStack.cameras.push(camera);
    cameraStack.stack.push(index);
    cameraStack.transform = (0, _matrix3X3.inverse)(camera);
};
const activeCamera = (cameraStack)=>cameraStack.stack.slice(-1)[0];
const popCamera = (cameraStack)=>{
    cameraStack.stack.pop();
    cameraStack.transform = (0, _matrix3X3.inverse)(cameraStack.cameras[activeCamera(cameraStack)]);
};
const transformWorldSpace = (cameraStack, worldSpace)=>{
    const [x0, y0, _0] = (0, _matrix3X3.multiplyMatrixVector)(cameraStack.transform, [
        worldSpace.x0,
        worldSpace.y0,
        1
    ]);
    const [x1, y1, _1] = (0, _matrix3X3.multiplyMatrixVector)(cameraStack.transform, [
        worldSpace.x1,
        worldSpace.y1,
        1
    ]);
    return {
        x0,
        y0,
        x1,
        y1
    };
};

},{"../linear_algebra/matrix3x3":"aZqnw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2zvtU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "reduce", ()=>reduce);
var _ = require(".");
const reduce = (ui, layout, geometry, reducer)=>{
    const accumulator = reducer.initial();
    for (const entry of (0, _.traverse)(ui, layout, geometry, 0))reducer.combine(accumulator, entry);
    return accumulator;
};

},{".":"cOWCo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cOWCo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "center", ()=>(0, _center.center));
parcelHelpers.export(exports, "column", ()=>(0, _column.column));
parcelHelpers.export(exports, "container", ()=>(0, _container.container));
parcelHelpers.export(exports, "row", ()=>(0, _row.row));
parcelHelpers.export(exports, "scene", ()=>(0, _scene.scene));
parcelHelpers.export(exports, "stack", ()=>(0, _stack.stack));
parcelHelpers.export(exports, "text", ()=>(0, _text.text));
parcelHelpers.export(exports, "UIKind", ()=>UIKind);
parcelHelpers.export(exports, "layout", ()=>layout);
parcelHelpers.export(exports, "geometry", ()=>geometry);
parcelHelpers.export(exports, "traverse", ()=>traverse);
var _center = require("./center");
var _column = require("./column");
var _container = require("./container");
var _row = require("./row");
var _scene = require("./scene");
var _stack = require("./stack");
var _text = require("./text");
let UIKind;
(function(UIKind1) {
    UIKind1[UIKind1["CENTER"] = 0] = "CENTER";
    UIKind1[UIKind1["COLUMN"] = 1] = "COLUMN";
    UIKind1[UIKind1["CONTAINER"] = 2] = "CONTAINER";
    UIKind1[UIKind1["ROW"] = 3] = "ROW";
    UIKind1[UIKind1["SCENE"] = 4] = "SCENE";
    UIKind1[UIKind1["STACK"] = 5] = "STACK";
    UIKind1[UIKind1["TEXT"] = 6] = "TEXT";
})(UIKind || (UIKind = {}));
const layout = (ui, constraints, measureText)=>{
    switch(ui.kind){
        case UIKind.CENTER:
            return (0, _center.centerLayout)(ui, constraints, measureText);
        case UIKind.COLUMN:
            return (0, _column.columnLayout)(ui, constraints, measureText);
        case UIKind.CONTAINER:
            return (0, _container.containerLayout)(ui, constraints, measureText);
        case UIKind.ROW:
            return (0, _row.rowLayout)(ui, constraints, measureText);
        case UIKind.SCENE:
            return (0, _scene.sceneLayout)(ui, constraints, measureText);
        case UIKind.STACK:
            return (0, _stack.stackLayout)(ui, constraints, measureText);
        case UIKind.TEXT:
            return (0, _text.textLayout)(ui, constraints, measureText);
    }
};
const geometry = (ui, layout1, offset, cameraStack)=>{
    switch(ui.kind){
        case UIKind.CENTER:
            return (0, _center.centerGeometry)(ui, layout1, offset, cameraStack);
        case UIKind.COLUMN:
            return (0, _column.columnGeometry)(ui, layout1, offset, cameraStack);
        case UIKind.CONTAINER:
            return (0, _container.containerGeometry)(ui, layout1, offset, cameraStack);
        case UIKind.ROW:
            return (0, _row.rowGeometry)(ui, layout1, offset, cameraStack);
        case UIKind.SCENE:
            return (0, _scene.sceneGeometry)(ui, layout1, offset, cameraStack);
        case UIKind.STACK:
            return (0, _stack.stackGeometry)(ui, layout1, offset, cameraStack);
        case UIKind.TEXT:
            return (0, _text.textGeometry)(ui, layout1, offset, cameraStack);
    }
};
function* traverse(ui, layout2, geometry1, z) {
    switch(ui.kind){
        case UIKind.CENTER:
            yield* (0, _center.centerTraverse)(ui, layout2, geometry1, z);
            break;
        case UIKind.COLUMN:
            yield* (0, _column.columnTraverse)(ui, layout2, geometry1, z);
            break;
        case UIKind.CONTAINER:
            yield* (0, _container.containerTraverse)(ui, layout2, geometry1, z);
            break;
        case UIKind.ROW:
            yield* (0, _row.rowTraverse)(ui, layout2, geometry1, z);
            break;
        case UIKind.SCENE:
            yield* (0, _scene.sceneTraverse)(ui, layout2, geometry1, z);
            break;
        case UIKind.STACK:
            yield* (0, _stack.stackTraverse)(ui, layout2, geometry1, z);
            break;
        case UIKind.TEXT:
            yield* (0, _text.textTraverse)(ui, layout2, geometry1, z);
            break;
    }
}

},{"./center":"iGT29","./column":"h1BCG","./container":"1RkTm","./row":"hjMl0","./scene":"hsfX6","./stack":"lfhKB","./text":"6jNj8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iGT29":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "center", ()=>center);
parcelHelpers.export(exports, "centerLayout", ()=>centerLayout);
parcelHelpers.export(exports, "centerGeometry", ()=>centerGeometry);
parcelHelpers.export(exports, "centerTraverse", ()=>centerTraverse);
var _ = require(".");
var _cameraStack = require("./camera_stack");
const center = (child)=>{
    return {
        kind: (0, _.UIKind).CENTER,
        child
    };
};
const centerLayout = (ui, constraints, measureText)=>{
    const childLayout = (0, _.layout)(ui.child, constraints, measureText);
    const width = constraints.maxWidth;
    const height = constraints.maxHeight;
    return {
        size: {
            width,
            height
        },
        child: childLayout
    };
};
const centerGeometry = (ui, layout, offset, cameraStack)=>{
    const worldSpace = (0, _cameraStack.transformWorldSpace)(cameraStack, {
        x0: offset.x,
        y0: offset.y,
        x1: offset.x + layout.size.width,
        y1: offset.y + layout.size.height
    });
    const childLayout = layout.child;
    const childOffset = {
        x: offset.x + layout.size.width / 2 - childLayout.size.width / 2,
        y: offset.y + layout.size.height / 2 - childLayout.size.height / 2
    };
    const childGeometry = (0, _.geometry)(ui.child, childLayout, childOffset, cameraStack);
    return {
        worldSpace,
        child: childGeometry
    };
};
function* centerTraverse(ui, layout, geometry, z) {
    yield* (0, _.traverse)(ui.child, layout.child, geometry.child, z + 1);
}

},{".":"cOWCo","./camera_stack":"dUAJr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"h1BCG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "column", ()=>column);
parcelHelpers.export(exports, "columnLayout", ()=>columnLayout);
parcelHelpers.export(exports, "columnGeometry", ()=>columnGeometry);
parcelHelpers.export(exports, "columnTraverse", ()=>columnTraverse);
var _ = require(".");
var _alignment = require("./alignment");
var _cameraStack = require("./camera_stack");
function column(...args) {
    const [properties, children] = (()=>args[0] instanceof Array ? [
            {},
            args[0]
        ] : [
            args[0],
            args[1]
        ])();
    return {
        kind: (0, _.UIKind).COLUMN,
        mainAxisAlignment: properties.mainAxisAlignment ?? (0, _alignment.MainAxisAlignment).START,
        crossAxisAlignment: properties.crossAxisAlignment ?? (0, _alignment.CrossAxisAlignment).START,
        children
    };
}
const columnLayout = (ui, constraints, measureText)=>{
    const initialChildren = [];
    const initial = {
        children: initialChildren,
        width: 0,
        totalChildHeight: 0
    };
    const result = ui.children.reduce((acc, child)=>{
        const childLayout = (0, _.layout)(child, constraints, measureText);
        acc.children.push(childLayout);
        acc.totalChildHeight += childLayout.size.height;
        acc.width = Math.max(acc.width, childLayout.size.width);
        return acc;
    }, initial);
    const { children , width , totalChildHeight  } = result;
    const height = ui.mainAxisAlignment == (0, _alignment.MainAxisAlignment).START ? totalChildHeight : constraints.maxHeight;
    return {
        size: {
            width,
            height
        },
        totalChildHeight,
        children
    };
};
const columnGeometry = (ui, layout, offset, cameraStack)=>{
    const initialChildren = [];
    const freeSpaceY = layout.size.height - layout.totalChildHeight;
    const initial = {
        children: initialChildren,
        y: (()=>{
            switch(ui.mainAxisAlignment){
                case (0, _alignment.MainAxisAlignment).START:
                    return offset.y;
                case (0, _alignment.MainAxisAlignment).CENTER:
                    return offset.y + freeSpaceY / 2;
                case (0, _alignment.MainAxisAlignment).END:
                    return offset.y + freeSpaceY;
                case (0, _alignment.MainAxisAlignment).SPACE_EVENLY:
                    return offset.y + freeSpaceY / (ui.children.length + 1);
                case (0, _alignment.MainAxisAlignment).SPACE_BETWEEN:
                    return offset.y;
            }
        })()
    };
    const addYStart = (childLayout)=>childLayout.size.height;
    const addYCenter = (childLayout)=>childLayout.size.height;
    const addYEnd = (childLayout)=>childLayout.size.height;
    const addYSpaceEvenly = (childLayout)=>childLayout.size.height + freeSpaceY / (ui.children.length + 1);
    const addYSpaceBetween = (childLayout)=>childLayout.size.height + freeSpaceY / (ui.children.length - 1);
    const addY = (()=>{
        switch(ui.mainAxisAlignment){
            case (0, _alignment.MainAxisAlignment).START:
                return addYStart;
            case (0, _alignment.MainAxisAlignment).CENTER:
                return addYCenter;
            case (0, _alignment.MainAxisAlignment).END:
                return addYEnd;
            case (0, _alignment.MainAxisAlignment).SPACE_EVENLY:
                return addYSpaceEvenly;
            case (0, _alignment.MainAxisAlignment).SPACE_BETWEEN:
                return addYSpaceBetween;
        }
    })();
    const offsetXStart = (_)=>offset.x;
    const offsetXCenter = (childLayout)=>offset.x + layout.size.width / 2 - childLayout.size.width / 2;
    const offsetXEnd = (childLayout)=>offset.x + layout.size.width - childLayout.size.width;
    const offsetX = (()=>{
        switch(ui.crossAxisAlignment){
            case (0, _alignment.CrossAxisAlignment).START:
                return offsetXStart;
            case (0, _alignment.CrossAxisAlignment).CENTER:
                return offsetXCenter;
            case (0, _alignment.CrossAxisAlignment).END:
                return offsetXEnd;
        }
    })();
    const result = ui.children.reduce((acc, child, i)=>{
        const childLayout = layout.children[i];
        const childOffset = {
            x: offsetX(childLayout),
            y: acc.y
        };
        const childGeometry = (0, _.geometry)(child, childLayout, childOffset, cameraStack);
        acc.children.push(childGeometry);
        acc.y += addY(childLayout);
        return acc;
    }, initial);
    const worldSpace = (0, _cameraStack.transformWorldSpace)(cameraStack, {
        x0: offset.x,
        y0: offset.y,
        x1: offset.x + layout.size.width,
        y1: offset.y + layout.size.height
    });
    return {
        worldSpace,
        children: result.children
    };
};
function* columnTraverse(ui, layout, geometry, z) {
    yield {
        ui,
        layout,
        geometry,
        z
    };
    const nextZ = z + 1;
    let i = 0;
    for (const child of ui.children){
        yield* (0, _.traverse)(child, layout.children[i], geometry.children[i], nextZ);
        i += 1;
    }
}

},{".":"cOWCo","./alignment":"eEpxz","./camera_stack":"dUAJr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eEpxz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MainAxisAlignment", ()=>MainAxisAlignment);
parcelHelpers.export(exports, "CrossAxisAlignment", ()=>CrossAxisAlignment);
let MainAxisAlignment;
(function(MainAxisAlignment1) {
    MainAxisAlignment1[MainAxisAlignment1["START"] = 0] = "START";
    MainAxisAlignment1[MainAxisAlignment1["CENTER"] = 1] = "CENTER";
    MainAxisAlignment1[MainAxisAlignment1["END"] = 2] = "END";
    MainAxisAlignment1[MainAxisAlignment1["SPACE_EVENLY"] = 3] = "SPACE_EVENLY";
    MainAxisAlignment1[MainAxisAlignment1["SPACE_BETWEEN"] = 4] = "SPACE_BETWEEN";
})(MainAxisAlignment || (MainAxisAlignment = {}));
let CrossAxisAlignment;
(function(CrossAxisAlignment1) {
    CrossAxisAlignment1[CrossAxisAlignment1["START"] = 0] = "START";
    CrossAxisAlignment1[CrossAxisAlignment1["CENTER"] = 1] = "CENTER";
    CrossAxisAlignment1[CrossAxisAlignment1["END"] = 2] = "END";
})(CrossAxisAlignment || (CrossAxisAlignment = {}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1RkTm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "container", ()=>container);
parcelHelpers.export(exports, "containerLayout", ()=>containerLayout);
parcelHelpers.export(exports, "containerGeometry", ()=>containerGeometry);
parcelHelpers.export(exports, "containerTraverse", ()=>containerTraverse);
var _ = require(".");
var _cameraStack = require("./camera_stack");
const transformPadding = (padding)=>{
    if (padding) return {
        top: padding,
        right: padding,
        bottom: padding,
        left: padding
    };
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    };
};
const container = ({ padding , width , height , color , x , y , onClick , id  }, child)=>{
    return {
        kind: (0, _.UIKind).CONTAINER,
        padding: transformPadding(padding),
        width,
        height,
        x,
        y,
        color,
        onClick,
        id,
        child
    };
};
const containerLayout = (ui, constraints, measureText)=>{
    const { top , right , bottom , left  } = ui.padding;
    if (ui.child) {
        const childLayout = (0, _.layout)(ui.child, constraints, measureText);
        const width = ui.width ?? childLayout.size.width + left + right;
        const height = ui.height ?? childLayout.size.height + top + bottom;
        return {
            size: {
                width,
                height
            },
            child: childLayout
        };
    }
    const width = (()=>{
        if (ui.width) return ui.width + left + right;
        return constraints.maxWidth;
    })();
    const height = (()=>{
        if (ui.height) return ui.height + top + bottom;
        return constraints.maxHeight;
    })();
    return {
        size: {
            width,
            height
        }
    };
};
const containerGeometry = (ui, layout, offset, cameraStack)=>{
    const x0 = offset.x + (ui.x ?? 0);
    const x1 = x0 + layout.size.width;
    const y0 = offset.y + (ui.y ?? 0);
    const y1 = y0 + layout.size.height;
    const worldSpace = (0, _cameraStack.transformWorldSpace)(cameraStack, {
        x0,
        x1,
        y0,
        y1
    });
    const childGeometry = (()=>{
        if (ui.child) {
            const childLayout = layout.child;
            const childOffset = {
                x: x0 + ui.padding.left,
                y: y0 + ui.padding.top
            };
            return (0, _.geometry)(ui.child, childLayout, childOffset, cameraStack);
        }
        return undefined;
    })();
    if (ui.color) {
        const { red , green , blue , alpha  } = ui.color;
        return {
            worldSpace,
            vertices: [
                x0,
                y0,
                x0,
                y1,
                x1,
                y0,
                x1,
                y1, 
            ],
            colors: [
                red,
                green,
                blue,
                alpha,
                red,
                green,
                blue,
                alpha,
                red,
                green,
                blue,
                alpha,
                red,
                green,
                blue,
                alpha, 
            ],
            vertexIndices: [
                0,
                1,
                2,
                1,
                2,
                3
            ],
            cameraIndex: Array(4).fill((0, _cameraStack.activeCamera)(cameraStack)),
            textureIndex: 0,
            textureCoordinates: Array(8).fill(0),
            child: childGeometry
        };
    }
    return {
        worldSpace,
        vertices: [],
        colors: [],
        vertexIndices: [],
        cameraIndex: [],
        textureIndex: 0,
        textureCoordinates: [],
        child: childGeometry
    };
};
function* containerTraverse(ui, layout, geometry, z) {
    yield {
        ui,
        layout,
        geometry,
        z
    };
    if (ui.child) {
        const childLayout = layout.child;
        const childGeometry = geometry.child;
        yield* (0, _.traverse)(ui.child, childLayout, childGeometry, z + 1);
    }
}

},{".":"cOWCo","./camera_stack":"dUAJr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hjMl0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "row", ()=>row);
parcelHelpers.export(exports, "rowLayout", ()=>rowLayout);
parcelHelpers.export(exports, "rowGeometry", ()=>rowGeometry);
parcelHelpers.export(exports, "rowTraverse", ()=>rowTraverse);
var _ = require(".");
var _alignment = require("./alignment");
var _cameraStack = require("./camera_stack");
function row(...args) {
    const [properties, children] = (()=>args[0] instanceof Array ? [
            {},
            args[0]
        ] : [
            args[0],
            args[1]
        ])();
    return {
        kind: (0, _.UIKind).ROW,
        mainAxisAlignment: properties.mainAxisAlignment ?? (0, _alignment.MainAxisAlignment).START,
        crossAxisAlignment: properties.crossAxisAlignment ?? (0, _alignment.CrossAxisAlignment).START,
        children
    };
}
const rowLayout = (ui, constraints, measureText)=>{
    const initialChildren = [];
    const initial = {
        children: initialChildren,
        totalChildWidth: 0,
        height: 0
    };
    const result = ui.children.reduce((acc, child)=>{
        const childLayout = (0, _.layout)(child, constraints, measureText);
        acc.children.push(childLayout);
        acc.totalChildWidth += childLayout.size.width;
        acc.height = Math.max(acc.height, childLayout.size.height);
        return acc;
    }, initial);
    const { children , totalChildWidth , height  } = result;
    const width = ui.mainAxisAlignment == (0, _alignment.MainAxisAlignment).START ? totalChildWidth : constraints.maxWidth;
    return {
        size: {
            width,
            height
        },
        totalChildWidth,
        children
    };
};
const rowGeometry = (ui, layout, offset, cameraStack)=>{
    const initialChildren = [];
    const freeSpaceX = layout.size.width - layout.totalChildWidth;
    const initial = {
        children: initialChildren,
        x: (()=>{
            switch(ui.mainAxisAlignment){
                case (0, _alignment.MainAxisAlignment).START:
                    return offset.x;
                case (0, _alignment.MainAxisAlignment).CENTER:
                    return offset.x + freeSpaceX / 2;
                case (0, _alignment.MainAxisAlignment).END:
                    return offset.x + freeSpaceX;
                case (0, _alignment.MainAxisAlignment).SPACE_EVENLY:
                    return offset.x + freeSpaceX / (ui.children.length + 1);
                case (0, _alignment.MainAxisAlignment).SPACE_BETWEEN:
                    return offset.x;
            }
        })()
    };
    const addXStart = (childLayout)=>childLayout.size.width;
    const addXCenter = (childLayout)=>childLayout.size.width;
    const addXEnd = (childLayout)=>childLayout.size.width;
    const addXSpaceEvenly = (childLayout)=>childLayout.size.width + freeSpaceX / (ui.children.length + 1);
    const addXSpaceBetween = (childLayout)=>childLayout.size.width + freeSpaceX / (ui.children.length - 1);
    const addX = (()=>{
        switch(ui.mainAxisAlignment){
            case (0, _alignment.MainAxisAlignment).START:
                return addXStart;
            case (0, _alignment.MainAxisAlignment).CENTER:
                return addXCenter;
            case (0, _alignment.MainAxisAlignment).END:
                return addXEnd;
            case (0, _alignment.MainAxisAlignment).SPACE_EVENLY:
                return addXSpaceEvenly;
            case (0, _alignment.MainAxisAlignment).SPACE_BETWEEN:
                return addXSpaceBetween;
        }
    })();
    const offsetYStart = (_)=>offset.y;
    const offsetYCenter = (childLayout)=>offset.y + layout.size.height / 2 - childLayout.size.height / 2;
    const offsetYEnd = (childLayout)=>offset.y + layout.size.height - childLayout.size.height;
    const offsetY = (()=>{
        switch(ui.crossAxisAlignment){
            case (0, _alignment.CrossAxisAlignment).START:
                return offsetYStart;
            case (0, _alignment.CrossAxisAlignment).CENTER:
                return offsetYCenter;
            case (0, _alignment.CrossAxisAlignment).END:
                return offsetYEnd;
        }
    })();
    const result = ui.children.reduce((acc, child, i)=>{
        const childLayout = layout.children[i];
        const childOffset = {
            x: acc.x,
            y: offsetY(childLayout)
        };
        const childGeometry = (0, _.geometry)(child, childLayout, childOffset, cameraStack);
        acc.children.push(childGeometry);
        acc.x += addX(childLayout);
        return acc;
    }, initial);
    const worldSpace = (0, _cameraStack.transformWorldSpace)(cameraStack, {
        x0: offset.x,
        y0: offset.y,
        x1: offset.x + layout.size.width,
        y1: offset.y + layout.size.height
    });
    return {
        worldSpace,
        children: result.children
    };
};
function* rowTraverse(ui, layout, geometry, z) {
    yield {
        ui,
        layout,
        geometry,
        z
    };
    const nextZ = z + 1;
    let i = 0;
    for (const child of ui.children){
        yield* (0, _.traverse)(child, layout.children[i], geometry.children[i], nextZ);
        i += 1;
    }
}

},{".":"cOWCo","./alignment":"eEpxz","./camera_stack":"dUAJr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hsfX6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scene", ()=>scene);
parcelHelpers.export(exports, "sceneLayout", ()=>sceneLayout);
parcelHelpers.export(exports, "sceneGeometry", ()=>sceneGeometry);
parcelHelpers.export(exports, "sceneTraverse", ()=>sceneTraverse);
var _ = require(".");
var _cameraStack = require("./camera_stack");
const scene = ({ id , onClick , camera , children , connections  })=>({
        id,
        onClick,
        kind: (0, _.UIKind).SCENE,
        camera,
        children,
        connections: connections ?? []
    });
const sceneLayout = (ui, constraints, measureText)=>{
    const children = ui.children.map((c)=>(0, _.layout)(c, constraints, measureText));
    const width = constraints.maxWidth;
    const height = constraints.maxHeight;
    return {
        size: {
            width,
            height
        },
        children
    };
};
const sceneGeometry = (ui, layout, offset, cameraStack)=>{
    const worldSpace = (0, _cameraStack.transformWorldSpace)(cameraStack, {
        x0: offset.x,
        y0: offset.y,
        x1: offset.x + layout.size.width,
        y1: offset.y + layout.size.height
    });
    (0, _cameraStack.pushCamera)(cameraStack, ui.camera);
    const children = ui.children.map((c, i)=>(0, _.geometry)(c, layout.children[i], offset, cameraStack));
    (0, _cameraStack.popCamera)(cameraStack);
    return {
        worldSpace,
        children
    };
};
function* sceneTraverse(ui, layout, geometry, z) {
    yield {
        ui,
        layout,
        geometry,
        z
    };
    let i = 0;
    for (const child of ui.children){
        for (const entry of (0, _.traverse)(child, layout.children[i], geometry.children[i], z)){
            yield entry;
            z = Math.max(z, entry.z);
        }
        i++;
        z++;
    }
}

},{".":"cOWCo","./camera_stack":"dUAJr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lfhKB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "stack", ()=>stack);
parcelHelpers.export(exports, "stackLayout", ()=>stackLayout);
parcelHelpers.export(exports, "stackGeometry", ()=>stackGeometry);
parcelHelpers.export(exports, "stackTraverse", ()=>stackTraverse);
var _ = require(".");
var _cameraStack = require("./camera_stack");
const stack = (children)=>({
        kind: (0, _.UIKind).STACK,
        children
    });
const stackLayout = (ui, constraints, measureText)=>{
    const children = ui.children.map((c)=>(0, _.layout)(c, constraints, measureText));
    const width = constraints.maxWidth;
    const height = constraints.maxHeight;
    return {
        size: {
            width,
            height
        },
        children
    };
};
const stackGeometry = (ui, layout, offset, cameraStack)=>{
    const children = ui.children.map((c, i)=>(0, _.geometry)(c, layout.children[i], offset, cameraStack));
    const worldSpace = (0, _cameraStack.transformWorldSpace)(cameraStack, {
        x0: offset.x,
        y0: offset.y,
        x1: offset.x + layout.size.width,
        y1: offset.y + layout.size.height
    });
    return {
        worldSpace,
        children
    };
};
function* stackTraverse(ui, layout, geometry, z) {
    yield {
        ui,
        layout,
        geometry,
        z
    };
    let i = 0;
    for (const child of ui.children){
        for (const entry of (0, _.traverse)(child, layout.children[i], geometry.children[i], z)){
            yield entry;
            z = Math.max(z, entry.z);
        }
        i += 1;
        z += 1;
    }
}

},{".":"cOWCo","./camera_stack":"dUAJr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6jNj8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "text", ()=>text);
parcelHelpers.export(exports, "textLayout", ()=>textLayout);
parcelHelpers.export(exports, "textGeometry", ()=>textGeometry);
parcelHelpers.export(exports, "textTraverse", ()=>textTraverse);
var _ = require(".");
var _cameraStack = require("./camera_stack");
function text(...args) {
    const [properties, str] = (()=>typeof args[0] == "string" ? [
            {},
            args[0]
        ] : [
            args[0],
            args[1]
        ])();
    return {
        kind: (0, _.UIKind).TEXT,
        font: {
            family: properties.font ?? "monospace",
            size: properties.size ?? 14
        },
        color: properties.color ?? {
            red: 255,
            green: 255,
            blue: 255,
            alpha: 255
        },
        str
    };
}
const textLayout = ({ font , str  }, _, measureText)=>{
    const measurements = measureText(font, str);
    const width1 = measurements.widths.reduce((acc, width)=>acc + width);
    const size = {
        width: width1,
        height: font.size
    };
    return {
        measurements,
        size
    };
};
const vertices = (widths, height, offset)=>{
    const result = [];
    let offsetX = offset.x;
    const y0 = offset.y;
    const y1 = offset.y + height;
    for (const width of widths){
        const x0 = offsetX;
        const x1 = offsetX + width;
        result.push(x0, y0, x0, y1, x1, y0, x1, y1);
        offsetX += width;
    }
    return result;
};
const colors = (n, { red , green , blue , alpha  })=>{
    const result = [];
    for(let i = 0; i < n; ++i)result.push(red, green, blue, alpha, red, green, blue, alpha, red, green, blue, alpha, red, green, blue, alpha);
    return result;
};
const vertexIndices = (n)=>{
    const result = [];
    let offset = 0;
    for(let i = 0; i < n; ++i){
        result.push(offset, offset + 1, offset + 2, offset + 1, offset + 2, offset + 3);
        offset += 4;
    }
    return result;
};
const textGeometry = (ui, layout, offset, cameraStack)=>{
    const textLayout1 = layout;
    const { measurements  } = textLayout1;
    const { textureIndex , textureCoordinates , widths  } = measurements;
    return {
        worldSpace: (0, _cameraStack.transformWorldSpace)(cameraStack, {
            x0: offset.x,
            y0: offset.y,
            x1: offset.x + layout.size.width,
            y1: offset.y + layout.size.height
        }),
        textureIndex,
        textureCoordinates: textureCoordinates.flat(),
        colors: colors(widths.length, ui.color),
        vertices: vertices(widths, ui.font.size, offset),
        vertexIndices: vertexIndices(widths.length),
        cameraIndex: Array(widths.length * 4).fill((0, _cameraStack.activeCamera)(cameraStack))
    };
};
function* textTraverse(ui, layout, geometry, z) {
    yield {
        ui,
        layout,
        geometry,
        z
    };
}

},{".":"cOWCo","./camera_stack":"dUAJr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fWs3f":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initial", ()=>initial);
parcelHelpers.export(exports, "combine", ()=>combine);
var _gatherOnClickHandlers = require("./gather_on_click_handlers");
var _idToWorldSpace = require("./id_to_world_space");
var _layerGeometry = require("./layer_geometry");
var _gatherConnections = require("./gather_connections");
const initial = ()=>({
        layers: _layerGeometry.initial(),
        clickHandlers: _gatherOnClickHandlers.initial(),
        idToWorldSpace: _idToWorldSpace.initial(),
        connections: _gatherConnections.initial()
    });
const combine = (acc, entry)=>({
        layers: _layerGeometry.combine(acc.layers, entry),
        clickHandlers: _gatherOnClickHandlers.combine(acc.clickHandlers, entry),
        idToWorldSpace: _idToWorldSpace.combine(acc.idToWorldSpace, entry),
        connections: _gatherConnections.combine(acc.connections, entry)
    });

},{"./gather_on_click_handlers":"68I2F","./id_to_world_space":"kf3mj","./layer_geometry":"bIbxG","./gather_connections":"lQ73H","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"68I2F":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initial", ()=>initial);
parcelHelpers.export(exports, "combine", ()=>combine);
const initial = ()=>[];
const combine = (handlers, entry)=>{
    if (entry.ui.onClick === undefined) return handlers;
    const needed = entry.z - handlers.length + 1;
    for(let i = 0; i < needed; ++i)handlers.push([]);
    handlers[entry.z].push({
        onClick: entry.ui.onClick,
        worldSpace: entry.geometry.worldSpace
    });
    return handlers;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kf3mj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initial", ()=>initial);
parcelHelpers.export(exports, "combine", ()=>combine);
const initial = ()=>({});
const combine = (lookup, entry)=>{
    if (!entry.ui.id) return lookup;
    lookup[entry.ui.id] = entry.geometry.worldSpace;
    return lookup;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bIbxG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initial", ()=>initial);
parcelHelpers.export(exports, "combine", ()=>combine);
var _ = require(".");
const initial = ()=>[];
const combine = (layers, entry)=>{
    switch(entry.ui.kind){
        case (0, _.UIKind).CONTAINER:
        case (0, _.UIKind).TEXT:
            const entryGeometry = entry.geometry;
            if (entryGeometry.vertices.length == 0) return layers;
            const needed = entry.z - layers.length + 1;
            for(let i = 0; i < needed; ++i)layers.push({});
            const layer = layers[entry.z];
            const geometry1 = (()=>{
                const geometry = layer[entryGeometry.textureIndex];
                if (geometry) return geometry;
                const newGeometry = [];
                layer[entryGeometry.textureIndex] = newGeometry;
                return newGeometry;
            })();
            geometry1.push(entryGeometry);
            return layers;
        default:
            return layers;
    }
};

},{".":"cOWCo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lQ73H":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initial", ()=>initial);
parcelHelpers.export(exports, "combine", ()=>combine);
var _ = require(".");
var _matrix3X3 = require("../linear_algebra/matrix3x3");
var _vector3 = require("../linear_algebra/vector3");
const initial = ()=>[];
const combine = (connections, entry)=>{
    if (entry.ui.kind == (0, _.UIKind).SCENE) {
        if (entry.ui.connections.length === 0) return connections;
        const needed = entry.z - connections.length + 1;
        for(let i = 0; i < needed; ++i)connections.push([]);
        const layer = connections[entry.z];
        layer.push({
            connections: entry.ui.connections,
            scale: (0, _vector3.length)((0, _matrix3X3.multiplyMatrixVector)((0, _matrix3X3.inverse)(entry.ui.camera), [
                0,
                1,
                0
            ]))
        });
        return connections;
    }
    return connections;
};

},{".":"cOWCo","../linear_algebra/matrix3x3":"aZqnw","../linear_algebra/vector3":"kGcgk","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gDI6s":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ProgramKind", ()=>ProgramKind);
parcelHelpers.export(exports, "WebGL2Renderer", ()=>WebGL2Renderer);
parcelHelpers.export(exports, "webGL2Renderer", ()=>webGL2Renderer);
var _matrix3X3 = require("../linear_algebra/matrix3x3");
let ProgramKind;
(function(ProgramKind1) {
    ProgramKind1[ProgramKind1["DATA"] = 0] = "DATA";
    ProgramKind1[ProgramKind1["ERROR"] = 1] = "ERROR";
})(ProgramKind || (ProgramKind = {}));
const nearestPowerOfTwo = (x)=>{
    let current = 1;
    while(current < x)current <<= 1;
    return current;
};
const createTextMeasurements = (document, gl, font, dpr)=>{
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const totalCells = 256;
    const rows = Math.sqrt(totalCells);
    const size = nearestPowerOfTwo(font.size * rows);
    const cellSize = size / rows;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    canvas.style.width = `${size}px`;
    canvas.style.height = `${size}px`;
    ctx.scale(dpr, dpr);
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    ctx.font = `${font.size}px ${font.family}`;
    ctx.fillStyle = "white";
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    const height = font.size;
    const widths = [];
    const textureCoordinates = [];
    for(let i = 0; i < totalCells; ++i){
        const c = String.fromCharCode(i);
        const metric = ctx.measureText(c);
        const width = Math.ceil(metric.width);
        const x = i % rows * cellSize;
        const y = Math.floor(i / rows) * cellSize;
        ctx.fillText(c, x, y);
        widths.push(width);
        const x0 = x / size;
        const x1 = (x + width) / size;
        const y0 = y / size;
        const y1 = (y + height) / size;
        textureCoordinates.push([
            x0,
            y0,
            x0,
            y1,
            x1,
            y0,
            x1,
            y1
        ]);
    }
    const texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texImage2D(gl.TEXTURE_2D, /*mipLevel*/ 0, /*internalformat*/ gl.RGBA, /*srcFormat*/ gl.RGBA, /*srcType*/ gl.UNSIGNED_BYTE, /*source*/ canvas);
    gl.generateMipmap(gl.TEXTURE_2D);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    return {
        widths,
        textureCoordinates,
        texture
    };
};
const mapString = (str, f)=>{
    let result = [];
    for(let i = 0; i < str.length; ++i)result.push(f(str[i], i));
    return result;
};
class WebGL2Renderer {
    constructor(window1, document1, canvas, gl1, program1, textures1, textMeasurementsCache, clickHandlers, dispatch){
        this.window = window1;
        this.document = document1;
        this.canvas = canvas;
        this.gl = gl1;
        this.program = program1;
        this.textures = textures1;
        this.textMeasurementsCache = textMeasurementsCache;
        this.clickHandlers = clickHandlers;
        this.dispatch = dispatch;
        this.kind = ProgramKind.DATA;
        this.clear = ()=>{
            const { gl  } = this;
            gl.clear(gl.COLOR_BUFFER_BIT);
        };
        this.draw = ({ triangles , lines  })=>{
            const { gl , program , textures  } = this;
            const { attributes  } = program;
            {
                const { vertices , colors , vertexIndices , textureCoordinates , textureIndex , cameraIndex  } = triangles;
                if (vertices.length !== 0) {
                    const texture = textures[textureIndex];
                    gl.bindTexture(gl.TEXTURE_2D, texture);
                    gl.bindBuffer(gl.ARRAY_BUFFER, attributes.vertices.buffer);
                    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
                    gl.bindBuffer(gl.ARRAY_BUFFER, attributes.colors.buffer);
                    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
                    gl.bindBuffer(gl.ARRAY_BUFFER, attributes.textureCoordinates.buffer);
                    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoordinates), gl.STATIC_DRAW);
                    gl.bindBuffer(gl.ARRAY_BUFFER, attributes.cameraIndex.buffer);
                    gl.bufferData(gl.ARRAY_BUFFER, new Uint8Array(cameraIndex), gl.STATIC_DRAW);
                    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, attributes.vertexIndices);
                    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(vertexIndices), gl.STATIC_DRAW);
                    gl.drawElements(gl.TRIANGLES, /*count*/ vertexIndices.length, /*type*/ gl.UNSIGNED_SHORT, /*offset*/ 0);
                }
            }
            {
                const { vertices , colors  } = lines;
                if (vertices.length !== 0) {
                    const texture = textures[0];
                    const count = vertices.length / 2;
                    gl.bindTexture(gl.TEXTURE_2D, texture);
                    gl.bindBuffer(gl.ARRAY_BUFFER, attributes.vertices.buffer);
                    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
                    gl.bindBuffer(gl.ARRAY_BUFFER, attributes.colors.buffer);
                    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
                    gl.bindBuffer(gl.ARRAY_BUFFER, attributes.textureCoordinates.buffer);
                    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(Array(count * 2).fill(0)), gl.STATIC_DRAW);
                    gl.bindBuffer(gl.ARRAY_BUFFER, attributes.cameraIndex.buffer);
                    gl.bufferData(gl.ARRAY_BUFFER, new Uint8Array(Array(count).fill(0)), gl.STATIC_DRAW);
                    gl.drawArrays(gl.LINES, /*first*/ 0, count);
                }
            }
        };
        this.getTextureMeasurements = (font, dpr)=>{
            const { document , gl  } = this;
            const key = `${dpr} ${font.size} ${font.family}`;
            const measurements = this.textMeasurementsCache.get(key);
            if (measurements) return measurements;
            const { texture , widths , textureCoordinates  } = createTextMeasurements(document, gl, font, dpr);
            const textureIndex = this.textures.length;
            this.textures.push(texture);
            const newMeasurements = {
                widths,
                textureIndex,
                textureCoordinates
            };
            this.textMeasurementsCache.set(key, newMeasurements);
            return newMeasurements;
        };
        this.measureText = (font, str)=>{
            const { window  } = this;
            const dpr = window.devicePixelRatio;
            const { widths , textureIndex , textureCoordinates  } = this.getTextureMeasurements(font, dpr);
            const indices = mapString(str, (c)=>c.charCodeAt(0));
            return {
                widths: indices.map((i)=>widths[i]),
                textureIndex,
                textureCoordinates: indices.map((i)=>textureCoordinates[i])
            };
        };
    }
    set size(size) {
        const { gl , program , window  } = this;
        const { uniforms  } = program;
        const { canvas  } = gl;
        gl.uniformMatrix3fv(uniforms.projection, /*transpose*/ true, (0, _matrix3X3.projection)(size));
        canvas.width = size.width * window.devicePixelRatio;
        canvas.height = size.height * window.devicePixelRatio;
        canvas.style.width = `${size.width}px`;
        canvas.style.height = `${size.height}px`;
        gl.viewport(0, 0, canvas.width, canvas.height);
        this._size = size;
    }
    get size() {
        return this._size;
    }
    set cameras(cameras) {
        const { gl , program  } = this;
        const { uniforms  } = program;
        const data = [];
        for (const camera of cameras)data.push(...camera);
        gl.uniformMatrix3fv(uniforms.cameras, /*transpose*/ true, data);
        this._cameras = cameras;
    }
    get cameras() {
        return this._cameras;
    }
}
const createVertexShader = (gl, attributes)=>{
    const { vertices , colors , textureCoordinates , cameraIndex  } = attributes;
    const vertexShaderSource = `#version 300 es
  uniform mat3 u_projection;
  uniform mat3 u_cameras[8];

  layout(location = ${vertices.location}) in vec2 a_vertex;
  layout(location = ${colors.location}) in vec4 a_color;
  layout(location = ${textureCoordinates.location}) in vec2 a_textureCoordinates;
  layout(location = ${cameraIndex.location}) in uint a_cameraIndex;

  out vec4 v_color;
  out vec2 v_textureCoordinates;

  void main() {
    mat3 camera = u_cameras[a_cameraIndex];
    mat3 transform = u_projection * inverse(camera);
    gl_Position = vec4((transform * vec3(a_vertex, 1)).xy, 0, 1);
    v_color = a_color / 255.0;
    v_textureCoordinates = a_textureCoordinates;
  }
  `;
    const vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderSource);
    gl.compileShader(vertexShader);
    return vertexShader;
};
const createFragmentShader = (gl)=>{
    const fragmentShaderSource = `#version 300 es
  precision highp float;

  uniform sampler2D u_texture;

  in vec4 v_color;
  in vec2 v_textureCoordinates;

  out vec4 fragColor;
  
  void main() {
    fragColor = texture(u_texture, v_textureCoordinates) * v_color;
  }
  `;
    const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentShaderSource);
    gl.compileShader(fragmentShader);
    return fragmentShader;
};
const bindVertices = (gl, program, { location , buffer  })=>{
    gl.bindAttribLocation(program, location, "a_vertex");
    gl.enableVertexAttribArray(location);
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.vertexAttribPointer(location, /*size*/ 2, /*type*/ gl.FLOAT, /*normalize*/ false, /*stride*/ 0, /*offset*/ 0);
};
const bindColors = (gl, program, { location , buffer  })=>{
    gl.bindAttribLocation(program, location, "a_color");
    gl.enableVertexAttribArray(location);
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.vertexAttribPointer(location, /*size*/ 4, /*type*/ gl.FLOAT, /*normalize*/ false, /*stride*/ 0, /*offset*/ 0);
};
const bindTextureCoordinates = (gl, program, { location , buffer  })=>{
    gl.bindAttribLocation(program, location, "a_textureCoordinates");
    gl.enableVertexAttribArray(location);
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.vertexAttribPointer(location, /*size*/ 2, /*type*/ gl.FLOAT, /*normalize*/ false, /*stride*/ 0, /*offset*/ 0);
};
const bindCameraIndex = (gl, program, { location , buffer  })=>{
    gl.bindAttribLocation(program, location, "a_cameraIndex");
    gl.enableVertexAttribArray(location);
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.vertexAttribIPointer(location, /*size*/ 1, /*type*/ gl.UNSIGNED_BYTE, /*stride*/ 0, /*offset*/ 0);
};
const createProgram = (gl)=>{
    const attributes = {
        vertices: {
            location: 0,
            buffer: gl.createBuffer()
        },
        colors: {
            location: 1,
            buffer: gl.createBuffer()
        },
        textureCoordinates: {
            location: 2,
            buffer: gl.createBuffer()
        },
        cameraIndex: {
            location: 3,
            buffer: gl.createBuffer()
        },
        vertexIndices: gl.createBuffer()
    };
    const vertexShader = createVertexShader(gl, attributes);
    const fragmentShader = createFragmentShader(gl);
    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return {
        kind: ProgramKind.ERROR,
        vertexInfoLog: gl.getShaderInfoLog(vertexShader),
        fragmentInfoLog: gl.getShaderInfoLog(fragmentShader)
    };
    gl.useProgram(program);
    const vertexArrayObject = gl.createVertexArray();
    gl.bindVertexArray(vertexArrayObject);
    bindVertices(gl, program, attributes.vertices);
    bindColors(gl, program, attributes.colors);
    bindTextureCoordinates(gl, program, attributes.textureCoordinates);
    bindCameraIndex(gl, program, attributes.cameraIndex);
    const uniforms = {
        projection: gl.getUniformLocation(program, "u_projection"),
        texture: gl.getUniformLocation(program, "u_texture"),
        cameras: gl.getUniformLocation(program, "u_cameras")
    };
    return {
        kind: ProgramKind.DATA,
        vertexShader,
        fragmentShader,
        program,
        attributes,
        uniforms
    };
};
const webGL2Renderer = ({ width , height , document , window , dispatch  })=>{
    const canvas = document.createElement("canvas");
    canvas.style.touchAction = "none";
    const gl = canvas.getContext("webgl2");
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
    gl.depthMask(false);
    gl.activeTexture(gl.TEXTURE0);
    gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, true);
    gl.clearColor(0, 0, 0, 1);
    const program = createProgram(gl);
    if (program.kind == ProgramKind.ERROR) return program;
    const texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texImage2D(gl.TEXTURE_2D, /*mipLevel*/ 0, /*internalformat*/ gl.RGBA, /*width*/ 1, /*height*/ 1, /*border*/ 0, /*srcFormat*/ gl.RGBA, /*srcType*/ gl.UNSIGNED_BYTE, /*data*/ new Uint8Array([
        255,
        255,
        255,
        255
    ]));
    const renderer = new WebGL2Renderer(window, document, canvas, gl, program, [
        texture
    ], new Map(), [], dispatch ?? (()=>{}));
    renderer.size = {
        width,
        height
    };
    return renderer;
};

},{"../linear_algebra/matrix3x3":"aZqnw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gXfVS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "spacer", ()=>spacer);
parcelHelpers.export(exports, "intersperse", ()=>intersperse);
parcelHelpers.export(exports, "isSelected", ()=>isSelected);
parcelHelpers.export(exports, "inputUi", ()=>inputUi);
parcelHelpers.export(exports, "inputsUi", ()=>inputsUi);
parcelHelpers.export(exports, "outputUi", ()=>outputUi);
parcelHelpers.export(exports, "outputsUi", ()=>outputsUi);
parcelHelpers.export(exports, "numberUi", ()=>numberUi);
parcelHelpers.export(exports, "nodeUi", ()=>nodeUi);
parcelHelpers.export(exports, "finder", ()=>finder);
parcelHelpers.export(exports, "virtualKey", ()=>virtualKey);
parcelHelpers.export(exports, "virtualKeys", ()=>virtualKeys);
parcelHelpers.export(exports, "alphabeticVirtualKeyboard", ()=>alphabeticVirtualKeyboard);
parcelHelpers.export(exports, "numericVirtualKeyboard", ()=>numericVirtualKeyboard);
parcelHelpers.export(exports, "virtualKeyboard", ()=>virtualKeyboard);
parcelHelpers.export(exports, "selectedMenuItem", ()=>selectedMenuItem);
parcelHelpers.export(exports, "view", ()=>view);
var _alignment = require("../alignment");
var _event = require("../../event");
var _state = require("../../state");
var _ = require("..");
var _contextMenu = require("./context_menu");
const spacer = (size)=>(0, _.container)({
        width: size,
        height: size
    });
const intersperse = (array, seperator)=>{
    const result = [
        array[0]
    ];
    for (const element of array.slice(1))result.push(seperator, element);
    return result;
};
const isSelected = (selected, uuid)=>{
    switch(selected.kind){
        case (0, _state.SelectedKind).BODY:
            return selected.body === uuid;
        case (0, _state.SelectedKind).INPUT:
            return selected.input === uuid;
        case (0, _state.SelectedKind).NODE:
            return selected.node === uuid;
        case (0, _state.SelectedKind).NONE:
            return false;
        case (0, _state.SelectedKind).OUTPUT:
            return selected.output === uuid;
    }
};
const inputUi = (theme, { name , uuid  }, selected)=>(0, _.container)({
        onClick: {
            kind: (0, _event.EventKind).CLICKED_INPUT,
            input: uuid
        }
    }, (0, _.row)({
        crossAxisAlignment: (0, _alignment.CrossAxisAlignment).CENTER
    }, [
        (0, _.container)({
            id: uuid,
            width: 14,
            height: 14,
            color: isSelected(selected, uuid) ? theme.selectedInput : theme.input
        }),
        spacer(4),
        (0, _.text)(name)
    ]));
const inputsUi = (theme, inputs, selected)=>(0, _.column)(intersperse(inputs.map((input)=>inputUi(theme, input, selected)), spacer(4)));
const outputUi = (theme, { name , uuid  }, selected)=>(0, _.container)({
        onClick: {
            kind: (0, _event.EventKind).CLICKED_OUTPUT,
            output: uuid
        }
    }, (0, _.row)({
        crossAxisAlignment: (0, _alignment.CrossAxisAlignment).CENTER
    }, [
        (0, _.text)(name),
        spacer(4),
        (0, _.container)({
            id: uuid,
            width: 14,
            height: 14,
            color: isSelected(selected, uuid) ? theme.selectedInput : theme.input
        }), 
    ]));
const outputsUi = (theme, outputs, selected)=>(0, _.column)(intersperse(outputs.map((output)=>outputUi(theme, output, selected)), spacer(4)));
const numberUi = (theme, body, selected)=>(0, _.container)({
        color: isSelected(selected, body.uuid) ? theme.selectedInput : theme.background,
        padding: 5,
        onClick: {
            kind: (0, _event.EventKind).CLICKED_NUMBER,
            body: body.uuid
        }
    }, (0, _.text)(body.value.toString()));
const nodeUi = (theme, nodeUUID, graph, selected)=>{
    const node = graph.nodes[nodeUUID];
    const rowEntries = [];
    if (node.inputs.length) rowEntries.push(inputsUi(theme, node.inputs.map((i)=>graph.inputs[i]), selected));
    if (node.inputs.length && node.outputs.length) rowEntries.push(spacer(15));
    if (node.body) rowEntries.push(numberUi(theme, graph.bodys[node.body], selected), spacer(15));
    if (node.outputs.length) rowEntries.push(outputsUi(theme, node.outputs.map((o)=>graph.outputs[o]), selected));
    return (0, _.container)({
        color: isSelected(selected, node.uuid) ? theme.selectedNode : theme.node,
        padding: 4,
        x: node.position.x,
        y: node.position.y,
        onClick: {
            kind: (0, _event.EventKind).CLICKED_NODE,
            node: node.uuid
        }
    }, (0, _.column)({
        crossAxisAlignment: (0, _alignment.CrossAxisAlignment).CENTER
    }, [
        (0, _.text)(node.name),
        spacer(4),
        (0, _.row)(rowEntries)
    ]));
};
const finder = ({ search , options  }, theme)=>(0, _.column)({
        crossAxisAlignment: (0, _alignment.CrossAxisAlignment).CENTER
    }, [
        (0, _.container)({
            height: 10
        }),
        (0, _.container)({
            color: theme.node,
            padding: 4
        }, (0, _.column)([
            (0, _.container)({
                color: theme.background,
                width: 300,
                padding: 4
            }, (0, _.text)({
                color: theme.input,
                size: 24
            }, search.length ? search : "Search ...")),
            (0, _.container)({
                width: 10,
                height: 10
            }),
            ...options.map((option, i)=>(0, _.container)({
                    padding: 4,
                    onClick: {
                        kind: (0, _event.EventKind).CLICKED_FINDER_OPTION,
                        option
                    }
                }, (0, _.text)({
                    size: 18,
                    color: i == 0 ? theme.input : {
                        red: 255,
                        green: 255,
                        blue: 255,
                        alpha: 255
                    }
                }, option)))
        ]))
    ]);
const virtualKey = (key)=>(0, _.container)({
        padding: 10,
        onClick: {
            kind: (0, _event.EventKind).VIRTUAL_KEYDOWN,
            key
        }
    }, (0, _.text)({
        size: 24
    }, key));
const virtualKeys = (keys)=>(0, _.row)(keys.map((c)=>virtualKey(c)));
const alphabeticVirtualKeyboard = (theme)=>(0, _.column)({
        mainAxisAlignment: (0, _alignment.MainAxisAlignment).END
    }, [
        (0, _.row)({
            mainAxisAlignment: (0, _alignment.MainAxisAlignment).SPACE_BETWEEN
        }, [
            (0, _.container)({
                padding: 4,
                color: theme.node
            }, (0, _.column)([
                virtualKeys([
                    "1",
                    "2",
                    "3",
                    "4",
                    "5"
                ]),
                virtualKeys([
                    "q",
                    "w",
                    "e",
                    "r",
                    "t"
                ]),
                virtualKeys([
                    "a",
                    "s",
                    "d",
                    "f",
                    "g"
                ]),
                virtualKeys([
                    "z",
                    "x",
                    "c",
                    "v"
                ]),
                virtualKeys([
                    "sft",
                    "space"
                ]), 
            ])),
            (0, _.container)({
                padding: 4,
                color: theme.node
            }, (0, _.column)({
                crossAxisAlignment: (0, _alignment.CrossAxisAlignment).END
            }, [
                virtualKeys([
                    "6",
                    "7",
                    "8",
                    "9",
                    "0"
                ]),
                virtualKeys([
                    "y",
                    "u",
                    "i",
                    "o",
                    "p"
                ]),
                virtualKeys([
                    "h",
                    "j",
                    "k",
                    "l"
                ]),
                virtualKeys([
                    "b",
                    "n",
                    "m",
                    "del"
                ]),
                virtualKeys([
                    "space",
                    "ret"
                ]), 
            ])), 
        ]), 
    ]);
const numericVirtualKeyboard = (theme)=>(0, _.column)({
        mainAxisAlignment: (0, _alignment.MainAxisAlignment).END
    }, [
        (0, _.row)({
            mainAxisAlignment: (0, _alignment.MainAxisAlignment).END
        }, [
            (0, _.container)({
                padding: 4,
                color: theme.node
            }, (0, _.column)({
                crossAxisAlignment: (0, _alignment.CrossAxisAlignment).END
            }, [
                virtualKeys([
                    "1",
                    "2",
                    "3",
                    "4"
                ]),
                virtualKeys([
                    "5",
                    "6",
                    "7",
                    "8"
                ]),
                virtualKeys([
                    "9",
                    "0",
                    "del"
                ]),
                virtualKeys([
                    ".",
                    "ret"
                ]), 
            ])), 
        ]), 
    ]);
const virtualKeyboard = (theme, kind)=>{
    switch(kind){
        case (0, _state.VirtualKeyboardKind).ALPHABETIC:
            return alphabeticVirtualKeyboard(theme);
        case (0, _state.VirtualKeyboardKind).NUMERIC:
            return numericVirtualKeyboard(theme);
    }
};
const selectedMenuItem = (theme, graph, selected)=>{
    switch(selected.kind){
        case (0, _state.SelectedKind).NODE:
            return {
                name: "Delete Node",
                shortcut: "d",
                onClick: {
                    kind: (0, _event.EventKind).DELETE_NODE,
                    node: selected.node
                }
            };
        case (0, _state.SelectedKind).INPUT:
            if (graph.inputs[selected.input].edge) return {
                name: "Delete Edge",
                shortcut: "d",
                onClick: {
                    kind: (0, _event.EventKind).DELETE_INPUT_EDGE,
                    input: selected.input
                }
            };
            return null;
        case (0, _state.SelectedKind).OUTPUT:
            if (graph.outputs[selected.output].edges.length > 0) return {
                name: "Delete Edge",
                shortcut: "d",
                onClick: {
                    kind: (0, _event.EventKind).DELETE_OUTPUT_EDGES,
                    output: selected.output
                }
            };
            return null;
        default:
            return null;
    }
};
const view = (state)=>{
    const nodes = state.nodeOrder.map((node)=>nodeUi(state.theme, node, state.graph, state.selected));
    const connections = Object.values(state.graph.edges).map(({ input , output  })=>({
            from: output,
            to: input,
            color: state.theme.connection
        }));
    const stacked = [
        (0, _.container)({
            color: state.theme.background,
            onClick: {
                kind: (0, _event.EventKind).CLICKED_BACKGROUND
            }
        }),
        (0, _.scene)({
            camera: state.camera,
            children: nodes,
            connections
        }), 
    ];
    if (state.finder.show) stacked.push(finder(state.finder, state.theme));
    if (state.virtualKeyboard.show) stacked.push(virtualKeyboard(state.theme, state.virtualKeyboard.kind));
    const menuItem = selectedMenuItem(state.theme, state.graph, state.selected);
    if (menuItem) stacked.push((0, _contextMenu.contextMenu)({
        items: [
            menuItem
        ],
        backgroundColor: state.theme.node
    }));
    return (0, _.stack)(stacked);
};

},{"../alignment":"eEpxz","../../event":"edjVn","../../state":"1Yeju","..":"cOWCo","./context_menu":"8YVTy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8YVTy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "contextMenu", ()=>contextMenu);
var _ = require("..");
var _alignment = require("../alignment");
const contextMenu = ({ items , backgroundColor  })=>(0, _.column)({
        mainAxisAlignment: (0, _alignment.MainAxisAlignment).END
    }, [
        (0, _.row)({
            mainAxisAlignment: (0, _alignment.MainAxisAlignment).END
        }, [
            (0, _.container)({
                padding: 4,
                color: backgroundColor
            }, (0, _.column)(items.map(({ name , shortcut , onClick  })=>(0, _.container)({
                    padding: 10,
                    onClick
                }, (0, _.text)({
                    size: 18
                }, `(${shortcut}) ${name}`)))))
        ])
    ]);

},{"..":"cOWCo","../alignment":"eEpxz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["iJYvl","h7u1C"], "h7u1C", "parcelRequire045c")

//# sourceMappingURL=index.b71e74eb.js.map
