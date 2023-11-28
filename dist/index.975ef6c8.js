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
})({"1RB6v":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "890e741a975ef6c8";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, importScripts */ /*::
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
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
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
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Safari doesn't support sourceURL in error stacks.
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
            } else if ("reload" in location) location.reload();
            else {
                // Web extension context
                var ext = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
                if (ext && ext.runtime && ext.runtime.reload) ext.runtime.reload();
            }
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
                if (asset.type === "js") {
                    if (typeof document !== "undefined") {
                        let script = document.createElement("script");
                        script.src = asset.url;
                        return new Promise((resolve, reject)=>{
                            var _document$head;
                            script.onload = ()=>resolve(script);
                            script.onerror = reject;
                            (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
                        });
                    } else if (typeof importScripts === "function") return new Promise((resolve, reject)=>{
                        try {
                            importScripts(asset.url);
                        } catch (err) {
                            reject(err);
                        }
                    });
                }
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

},{}],"8lqZg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _notie = require("notie");
var _notieDefault = parcelHelpers.interopDefault(_notie);
"use strict";
function banner() {
    const overlay = document.getElementById("overlay");
    const hasVisited = localStorage.getItem("hasVisited");
    if (!hasVisited) {
        overlay.style.display = "block";
        localStorage.setItem("hasVisited", true);
    } else overlay.style.display = "none";
}
setTimeout(banner, 15000);
// Form script
const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    body: document.querySelector("[data-page]")
};
refs.openModalBtn.addEventListener("click", toggleModal);
refs.closeModalBtn.addEventListener("click", toggleModal);
function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
}
// перший варіант
function submit() {
    const form1 = document.getElementsByClassName("modal-form")[0];
    form1.addEventListener("submit", formSend);
    async function formSend(e) {
        e.preventDefault();
        let error = formValidate(form1);
        let formData = new FormData(form1);
        if (error === 0) try {
            let response = await fetch("https://planvoyage.fr/sendMail.php", {
                method: "POST",
                body: formData
            });
            if (response.ok) {
                let result = await response.json();
                console.log("form", form1);
                form1.reset();
                console.log("Form sended!)");
            } else console.error("Form submit error:", response.statusText);
            (0, _notieDefault.default).alert({
                type: 3,
                text: "Thanks. I will reach out to you soon.",
                position: "top"
            });
        } catch (error1) {
            console.error("Form submit error:", error1.message);
        }
        else (0, _notieDefault.default).alert({
            type: 3,
            text: "Fill in required fields",
            position: "top"
        });
    }
    function formValidate(form) {
        let error = 0;
        let formReq = form.getElementsByClassName("_req");
        for(let i = 0; i < formReq.length; i++){
            const input = formReq[i];
            formRemoveError(input);
            if (input.classList.contains("_email")) {
                if (emailTest(input)) {
                    formAddError(input);
                    error++;
                    (0, _notieDefault.default).alert({
                        type: 3,
                        text: "Fill in the email correctly",
                        position: "top"
                    });
                }
            }
            if (input.classList.contains("_tel")) {
                if (phoneTest(input)) {
                    formAddError(input);
                    error++;
                    (0, _notieDefault.default).alert({
                        type: 3,
                        text: "Fill in the phone number correctly",
                        position: "top"
                    });
                }
            }
            if (input.value === "") {
                formAddError(input);
                error++;
            }
        }
        return error;
    }
    function formAddError(input) {
        input.parentElement.classList.add("_error");
        input.classList.add("_error");
    }
    function formRemoveError(input) {
        input.parentElement.classList.remove("_error");
        input.classList.remove("_error");
    }
    function emailTest(input) {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }
    function phoneTest(input) {
        return !/(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?/.test(input.value);
    }
}

},{"notie":"2egWV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2egWV":[function(require,module,exports) {
!function(e, t) {
    module.exports = t();
}(this, function() {
    return function(e1) {
        function t1(s) {
            if (n1[s]) return n1[s].exports;
            var a = n1[s] = {
                i: s,
                l: !1,
                exports: {}
            };
            return e1[s].call(a.exports, a, a.exports, t1), a.l = !0, a.exports;
        }
        var n1 = {};
        return t1.m = e1, t1.c = n1, t1.i = function(e) {
            return e;
        }, t1.d = function(e, n, s) {
            t1.o(e, n) || Object.defineProperty(e, n, {
                configurable: !1,
                enumerable: !0,
                get: s
            });
        }, t1.n = function(e) {
            var n = e && e.__esModule ? function() {
                return e.default;
            } : function() {
                return e;
            };
            return t1.d(n, "a", n), n;
        }, t1.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }, t1.p = "", t1(t1.s = 1);
    }([
        function(e2, t) {
            e2.exports = function(e) {
                return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
                    enumerable: !0,
                    get: function() {
                        return e.l;
                    }
                }), Object.defineProperty(e, "id", {
                    enumerable: !0,
                    get: function() {
                        return e.i;
                    }
                }), e.webpackPolyfill = 1), e;
            };
        },
        function(e3, t2, n2) {
            "use strict";
            (function(e4) {
                var n3, s1, a1, i1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e;
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                };
                !function(c, o) {
                    "object" === i1(t2) && "object" === i1(e4) ? e4.exports = o() : (s1 = [], n3 = o, a1 = "function" == typeof n3 ? n3.apply(t2, s1) : n3, void 0 !== a1 && (e4.exports = a1));
                }(void 0, function() {
                    return function(e5) {
                        function t3(s) {
                            if (n4[s]) return n4[s].exports;
                            var a = n4[s] = {
                                i: s,
                                l: !1,
                                exports: {}
                            };
                            return e5[s].call(a.exports, a, a.exports, t3), a.l = !0, a.exports;
                        }
                        var n4 = {};
                        return t3.m = e5, t3.c = n4, t3.i = function(e) {
                            return e;
                        }, t3.d = function(e, n, s) {
                            t3.o(e, n) || Object.defineProperty(e, n, {
                                configurable: !1,
                                enumerable: !0,
                                get: s
                            });
                        }, t3.n = function(e) {
                            var n = e && e.__esModule ? function() {
                                return e.default;
                            } : function() {
                                return e;
                            };
                            return t3.d(n, "a", n), n;
                        }, t3.o = function(e, t) {
                            return Object.prototype.hasOwnProperty.call(e, t);
                        }, t3.p = "", t3(t3.s = 0);
                    }([
                        function(e6, t4, n5) {
                            function s2(e, t) {
                                var n = {};
                                for(var s in e)t.indexOf(s) >= 0 || Object.prototype.hasOwnProperty.call(e, s) && (n[s] = e[s]);
                                return n;
                            }
                            Object.defineProperty(t4, "__esModule", {
                                value: !0
                            });
                            var a2 = "function" == typeof Symbol && "symbol" === i1(Symbol.iterator) ? function(e) {
                                return "undefined" == typeof e ? "undefined" : i1(e);
                            } : function(e) {
                                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : "undefined" == typeof e ? "undefined" : i1(e);
                            }, c1 = Object.assign || function(e) {
                                for(var t = 1; t < arguments.length; t++){
                                    var n = arguments[t];
                                    for(var s in n)Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s]);
                                }
                                return e;
                            }, o1 = {
                                top: "top",
                                bottom: "bottom"
                            }, r = {
                                alertTime: 3,
                                dateMonths: [
                                    "January",
                                    "February",
                                    "March",
                                    "April",
                                    "May",
                                    "June",
                                    "July",
                                    "August",
                                    "September",
                                    "October",
                                    "November",
                                    "December"
                                ],
                                overlayClickDismiss: !0,
                                overlayOpacity: .75,
                                transitionCurve: "ease",
                                transitionDuration: .3,
                                transitionSelector: "all",
                                classes: {
                                    container: "notie-container",
                                    textbox: "notie-textbox",
                                    textboxInner: "notie-textbox-inner",
                                    button: "notie-button",
                                    element: "notie-element",
                                    elementHalf: "notie-element-half",
                                    elementThird: "notie-element-third",
                                    overlay: "notie-overlay",
                                    backgroundSuccess: "notie-background-success",
                                    backgroundWarning: "notie-background-warning",
                                    backgroundError: "notie-background-error",
                                    backgroundInfo: "notie-background-info",
                                    backgroundNeutral: "notie-background-neutral",
                                    backgroundOverlay: "notie-background-overlay",
                                    alert: "notie-alert",
                                    inputField: "notie-input-field",
                                    selectChoiceRepeated: "notie-select-choice-repeated",
                                    dateSelectorInner: "notie-date-selector-inner",
                                    dateSelectorUp: "notie-date-selector-up"
                                },
                                ids: {
                                    overlay: "notie-overlay"
                                },
                                positions: {
                                    alert: o1.top,
                                    force: o1.top,
                                    confirm: o1.top,
                                    input: o1.top,
                                    select: o1.bottom,
                                    date: o1.top
                                }
                            }, l1 = t4.setOptions = function(e) {
                                r = c1({}, r, e, {
                                    classes: c1({}, r.classes, e.classes),
                                    ids: c1({}, r.ids, e.ids),
                                    positions: c1({}, r.positions, e.positions)
                                });
                            }, d1 = function() {
                                return new Promise(function(e) {
                                    return setTimeout(e, 0);
                                });
                            }, u1 = function(e) {
                                return new Promise(function(t) {
                                    return setTimeout(t, 1e3 * e);
                                });
                            }, p1 = function() {
                                document.activeElement && document.activeElement.blur();
                            }, f = function() {
                                var e7 = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
                                    var t = 16 * Math.random() | 0, n = "x" === e ? t : 3 & t | 8;
                                    return n.toString(16);
                                });
                                return "notie-" + e7;
                            }, m1 = {
                                1: r.classes.backgroundSuccess,
                                success: r.classes.backgroundSuccess,
                                2: r.classes.backgroundWarning,
                                warning: r.classes.backgroundWarning,
                                3: r.classes.backgroundError,
                                error: r.classes.backgroundError,
                                4: r.classes.backgroundInfo,
                                info: r.classes.backgroundInfo,
                                5: r.classes.backgroundNeutral,
                                neutral: r.classes.backgroundNeutral
                            }, v1 = function() {
                                return r.transitionSelector + " " + r.transitionDuration + "s " + r.transitionCurve;
                            }, b1 = function(e) {
                                return 13 === e.keyCode;
                            }, x1 = function(e) {
                                return 27 === e.keyCode;
                            }, y = function(e, t) {
                                e.classList.add(r.classes.container), e.style[t] = "-10000px", document.body.appendChild(e), e.style[t] = "-" + e.offsetHeight + "px", e.listener && window.addEventListener("keydown", e.listener), d1().then(function() {
                                    e.style.transition = v1(), e.style[t] = 0;
                                });
                            }, L = function(e, t) {
                                var n = document.getElementById(e);
                                n && (n.style[t] = "-" + n.offsetHeight + "px", n.listener && window.removeEventListener("keydown", n.listener), u1(r.transitionDuration).then(function() {
                                    n.parentNode && n.parentNode.removeChild(n);
                                }));
                            }, g1 = function(e, t) {
                                var n = document.createElement("div");
                                n.id = r.ids.overlay, n.classList.add(r.classes.overlay), n.classList.add(r.classes.backgroundOverlay), n.style.opacity = 0, e && r.overlayClickDismiss && (n.onclick = function() {
                                    L(e.id, t), h();
                                }), document.body.appendChild(n), d1().then(function() {
                                    n.style.transition = v1(), n.style.opacity = r.overlayOpacity;
                                });
                            }, h = function() {
                                var e = document.getElementById(r.ids.overlay);
                                e.style.opacity = 0, u1(r.transitionDuration).then(function() {
                                    e.parentNode && e.parentNode.removeChild(e);
                                });
                            }, k = t4.hideAlerts = function(e) {
                                var t = document.getElementsByClassName(r.classes.alert);
                                if (t.length) {
                                    for(var n = 0; n < t.length; n++){
                                        var s = t[n];
                                        L(s.id, s.position);
                                    }
                                    e && u1(r.transitionDuration).then(function() {
                                        return e();
                                    });
                                }
                            }, C1 = t4.alert = function(e8) {
                                var t = e8.type, n = void 0 === t ? 4 : t, s = e8.text, a = e8.time, i = void 0 === a ? r.alertTime : a, c = e8.stay, o = void 0 !== c && c, l = e8.position, d = void 0 === l ? r.positions.alert || d.top : l;
                                p1(), k();
                                var v = document.createElement("div"), g = f();
                                v.id = g, v.position = d, v.classList.add(r.classes.textbox), v.classList.add(m1[n]), v.classList.add(r.classes.alert), v.innerHTML = '<div class="' + r.classes.textboxInner + '">' + s + "</div>", v.onclick = function() {
                                    return L(g, d);
                                }, v.listener = function(e) {
                                    (b1(e) || x1(e)) && k();
                                }, y(v, d), i && i < 1 && (i = 1), !o && i && u1(i).then(function() {
                                    return L(g, d);
                                });
                            }, E1 = t4.force = function(e9, t) {
                                var n = e9.type, s = void 0 === n ? 5 : n, a = e9.text, i = e9.buttonText, c = void 0 === i ? "OK" : i, o = e9.callback, l = e9.position, d = void 0 === l ? r.positions.force || d.top : l;
                                p1(), k();
                                var u = document.createElement("div"), v = f();
                                u.id = v;
                                var x = document.createElement("div");
                                x.classList.add(r.classes.textbox), x.classList.add(r.classes.backgroundInfo), x.innerHTML = '<div class="' + r.classes.textboxInner + '">' + a + "</div>";
                                var C = document.createElement("div");
                                C.classList.add(r.classes.button), C.classList.add(m1[s]), C.innerHTML = c, C.onclick = function() {
                                    L(v, d), h(), o ? o() : t && t();
                                }, u.appendChild(x), u.appendChild(C), u.listener = function(e) {
                                    b1(e) && C.click();
                                }, y(u, d), g1();
                            }, T1 = t4.confirm = function(e10, t, n) {
                                var s = e10.text, a = e10.submitText, i = void 0 === a ? "Yes" : a, c = e10.cancelText, o = void 0 === c ? "Cancel" : c, l = e10.submitCallback, d = e10.cancelCallback, u = e10.position, m = void 0 === u ? r.positions.confirm || m.top : u;
                                p1(), k();
                                var v = document.createElement("div"), C = f();
                                v.id = C;
                                var E = document.createElement("div");
                                E.classList.add(r.classes.textbox), E.classList.add(r.classes.backgroundInfo), E.innerHTML = '<div class="' + r.classes.textboxInner + '">' + s + "</div>";
                                var T = document.createElement("div");
                                T.classList.add(r.classes.button), T.classList.add(r.classes.elementHalf), T.classList.add(r.classes.backgroundSuccess), T.innerHTML = i, T.onclick = function() {
                                    L(C, m), h(), l ? l() : t && t();
                                };
                                var M = document.createElement("div");
                                M.classList.add(r.classes.button), M.classList.add(r.classes.elementHalf), M.classList.add(r.classes.backgroundError), M.innerHTML = o, M.onclick = function() {
                                    L(C, m), h(), d ? d() : n && n();
                                }, v.appendChild(E), v.appendChild(T), v.appendChild(M), v.listener = function(e) {
                                    b1(e) ? T.click() : x1(e) && M.click();
                                }, y(v, m), g1(v, m);
                            }, M1 = function(e11, t5, n6) {
                                var i = e11.text, c = e11.submitText, o = void 0 === c ? "Submit" : c, l = e11.cancelText, d = void 0 === l ? "Cancel" : l, u = e11.submitCallback, m = e11.cancelCallback, v = e11.position, C = void 0 === v ? r.positions.input || C.top : v, E = s2(e11, [
                                    "text",
                                    "submitText",
                                    "cancelText",
                                    "submitCallback",
                                    "cancelCallback",
                                    "position"
                                ]);
                                p1(), k();
                                var T = document.createElement("div"), M = f();
                                T.id = M;
                                var H = document.createElement("div");
                                H.classList.add(r.classes.textbox), H.classList.add(r.classes.backgroundInfo), H.innerHTML = '<div class="' + r.classes.textboxInner + '">' + i + "</div>";
                                var S = document.createElement("input");
                                S.classList.add(r.classes.inputField), S.setAttribute("autocapitalize", E.autocapitalize || "none"), S.setAttribute("autocomplete", E.autocomplete || "off"), S.setAttribute("autocorrect", E.autocorrect || "off"), S.setAttribute("autofocus", E.autofocus || "true"), S.setAttribute("inputmode", E.inputmode || "verbatim"), S.setAttribute("max", E.max || ""), S.setAttribute("maxlength", E.maxlength || ""), S.setAttribute("min", E.min || ""), S.setAttribute("minlength", E.minlength || ""), S.setAttribute("placeholder", E.placeholder || ""), S.setAttribute("spellcheck", E.spellcheck || "default"), S.setAttribute("step", E.step || "any"), S.setAttribute("type", E.type || "text"), S.value = E.value || "", E.allowed && (S.oninput = function() {
                                    var e = void 0;
                                    if (Array.isArray(E.allowed)) {
                                        for(var t = "", n = E.allowed, s = 0; s < n.length; s++)"an" === n[s] ? t += "0-9a-zA-Z" : "a" === n[s] ? t += "a-zA-Z" : "n" === n[s] && (t += "0-9"), "s" === n[s] && (t += " ");
                                        e = new RegExp("[^" + t + "]", "g");
                                    } else "object" === a2(E.allowed) && (e = E.allowed);
                                    S.value = S.value.replace(e, "");
                                });
                                var w = document.createElement("div");
                                w.classList.add(r.classes.button), w.classList.add(r.classes.elementHalf), w.classList.add(r.classes.backgroundSuccess), w.innerHTML = o, w.onclick = function() {
                                    L(M, C), h(), u ? u(S.value) : t5 && t5(S.value);
                                };
                                var O = document.createElement("div");
                                O.classList.add(r.classes.button), O.classList.add(r.classes.elementHalf), O.classList.add(r.classes.backgroundError), O.innerHTML = d, O.onclick = function() {
                                    L(M, C), h(), m ? m(S.value) : n6 && n6(S.value);
                                }, T.appendChild(H), T.appendChild(S), T.appendChild(w), T.appendChild(O), T.listener = function(e) {
                                    b1(e) ? w.click() : x1(e) && O.click();
                                }, y(T, C), S.focus(), g1(T, C);
                            };
                            t4.input = M1;
                            var H1 = t4.select = function(e12, t6) {
                                var n7 = e12.text, s3 = e12.cancelText, a3 = void 0 === s3 ? "Cancel" : s3, i2 = e12.cancelCallback, c = e12.choices, o2 = e12.position, l = void 0 === o2 ? r.positions.select || l.top : o2;
                                p1(), k();
                                var d = document.createElement("div"), u = f();
                                d.id = u;
                                var v = document.createElement("div");
                                v.classList.add(r.classes.textbox), v.classList.add(r.classes.backgroundInfo), v.innerHTML = '<div class="' + r.classes.textboxInner + '">' + n7 + "</div>", d.appendChild(v), c.forEach(function(e, t) {
                                    var n = e.type, s = void 0 === n ? 1 : n, a = e.text, i = e.handler, o = document.createElement("div");
                                    o.classList.add(m1[s]), o.classList.add(r.classes.button), o.classList.add(r.classes.selectChoice);
                                    var p = c[t + 1];
                                    p && !p.type && (p.type = 1), p && p.type === s && o.classList.add(r.classes.selectChoiceRepeated), o.innerHTML = a, o.onclick = function() {
                                        L(u, l), h(), i();
                                    }, d.appendChild(o);
                                });
                                var b = document.createElement("div");
                                b.classList.add(r.classes.backgroundNeutral), b.classList.add(r.classes.button), b.innerHTML = a3, b.onclick = function() {
                                    L(u, l), h(), i2 ? i2() : t6 && t6();
                                }, d.appendChild(b), d.listener = function(e) {
                                    x1(e) && b.click();
                                }, y(d, l), g1(d, l);
                            }, S1 = t4.date = function(e13, t7, n8) {
                                var s = e13.value, a = void 0 === s ? new Date : s, i = e13.submitText, c = void 0 === i ? "OK" : i, o = e13.cancelText, l = void 0 === o ? "Cancel" : o, d = e13.submitCallback, u = e13.cancelCallback, m = e13.position, v = void 0 === m ? r.positions.date || v.top : m;
                                p1(), k();
                                var C = "&#9662", E = document.createElement("div"), T = document.createElement("div"), M = document.createElement("div"), H = function(e) {
                                    E.innerHTML = r.dateMonths[e.getMonth()], T.innerHTML = e.getDate(), M.innerHTML = e.getFullYear();
                                }, S = function(e) {
                                    var t = new Date(a.getFullYear(), a.getMonth() + 1, 0).getDate(), n = e.target.textContent.replace(/^0+/, "").replace(/[^\d]/g, "").slice(0, 2);
                                    Number(n) > t && (n = t.toString()), e.target.textContent = n, Number(n) < 1 && (n = "1"), a.setDate(Number(n));
                                }, w = function(e) {
                                    var t = e.target.textContent.replace(/^0+/, "").replace(/[^\d]/g, "").slice(0, 4);
                                    e.target.textContent = t, a.setFullYear(Number(t));
                                }, O = function(e) {
                                    H(a);
                                }, A = function(e) {
                                    var t = new Date(a.getFullYear(), a.getMonth() + e + 1, 0).getDate();
                                    a.getDate() > t && a.setDate(t), a.setMonth(a.getMonth() + e), H(a);
                                }, D = function(e) {
                                    a.setDate(a.getDate() + e), H(a);
                                }, I = function(e) {
                                    var t = a.getFullYear() + e;
                                    t < 0 ? a.setFullYear(0) : a.setFullYear(a.getFullYear() + e), H(a);
                                }, j = document.createElement("div"), N = f();
                                j.id = N;
                                var P = document.createElement("div");
                                P.classList.add(r.classes.backgroundInfo);
                                var F = document.createElement("div");
                                F.classList.add(r.classes.dateSelectorInner);
                                var Y = document.createElement("div");
                                Y.classList.add(r.classes.button), Y.classList.add(r.classes.elementThird), Y.classList.add(r.classes.dateSelectorUp), Y.innerHTML = C;
                                var _ = document.createElement("div");
                                _.classList.add(r.classes.button), _.classList.add(r.classes.elementThird), _.classList.add(r.classes.dateSelectorUp), _.innerHTML = C;
                                var z = document.createElement("div");
                                z.classList.add(r.classes.button), z.classList.add(r.classes.elementThird), z.classList.add(r.classes.dateSelectorUp), z.innerHTML = C, E.classList.add(r.classes.element), E.classList.add(r.classes.elementThird), E.innerHTML = r.dateMonths[a.getMonth()], T.classList.add(r.classes.element), T.classList.add(r.classes.elementThird), T.setAttribute("contentEditable", !0), T.addEventListener("input", S), T.addEventListener("blur", O), T.innerHTML = a.getDate(), M.classList.add(r.classes.element), M.classList.add(r.classes.elementThird), M.setAttribute("contentEditable", !0), M.addEventListener("input", w), M.addEventListener("blur", O), M.innerHTML = a.getFullYear();
                                var U = document.createElement("div");
                                U.classList.add(r.classes.button), U.classList.add(r.classes.elementThird), U.innerHTML = C;
                                var B = document.createElement("div");
                                B.classList.add(r.classes.button), B.classList.add(r.classes.elementThird), B.innerHTML = C;
                                var J = document.createElement("div");
                                J.classList.add(r.classes.button), J.classList.add(r.classes.elementThird), J.innerHTML = C, Y.onclick = function() {
                                    return A(1);
                                }, _.onclick = function() {
                                    return D(1);
                                }, z.onclick = function() {
                                    return I(1);
                                }, U.onclick = function() {
                                    return A(-1);
                                }, B.onclick = function() {
                                    return D(-1);
                                }, J.onclick = function() {
                                    return I(-1);
                                };
                                var R = document.createElement("div");
                                R.classList.add(r.classes.button), R.classList.add(r.classes.elementHalf), R.classList.add(r.classes.backgroundSuccess), R.innerHTML = c, R.onclick = function() {
                                    L(N, v), h(), d ? d(a) : t7 && t7(a);
                                };
                                var W = document.createElement("div");
                                W.classList.add(r.classes.button), W.classList.add(r.classes.elementHalf), W.classList.add(r.classes.backgroundError), W.innerHTML = l, W.onclick = function() {
                                    L(N, v), h(), u ? u(a) : n8 && n8(a);
                                }, F.appendChild(Y), F.appendChild(_), F.appendChild(z), F.appendChild(E), F.appendChild(T), F.appendChild(M), F.appendChild(U), F.appendChild(B), F.appendChild(J), P.appendChild(F), j.appendChild(P), j.appendChild(R), j.appendChild(W), j.listener = function(e) {
                                    b1(e) ? R.click() : x1(e) && W.click();
                                }, y(j, v), g1(j, v);
                            };
                            t4.default = {
                                alert: C1,
                                force: E1,
                                confirm: T1,
                                input: M1,
                                select: H1,
                                date: S1,
                                setOptions: l1,
                                hideAlerts: k
                            };
                        }
                    ]);
                });
            }).call(t2, n2(0)(e3));
        }
    ]);
});

},{}],"gkKU3":[function(require,module,exports) {
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

},{}]},["1RB6v","8lqZg"], "8lqZg", "parcelRequireedb3")

//# sourceMappingURL=index.975ef6c8.js.map
