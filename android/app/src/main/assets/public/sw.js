/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return registry[uri] || (
      
        new Promise(resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = uri;
            script.onload = resolve;
            document.head.appendChild(script);
          } else {
            nextDefineUri = uri;
            importScripts(uri);
            resolve();
          }
        })
      
      .then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn’t register its module`);
        }
        return promise;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri = nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = depUri => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require
    };
    registry[uri] = Promise.all(depsNames.map(
      depName => specialDeps[depName] || require(depName)
    )).then(deps => {
      factory(...deps);
      return exports;
    });
  };
}
define(['./workbox-7e5eb42b'], (function (workbox) { 'use strict';

  self.skipWaiting();
  workbox.clientsClaim();
  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */
  workbox.precacheAndRoute([{
    "url": "registerSW.js",
    "revision": "1872c500de691dce40960bb85481de07"
  }, {
    "url": "pwa-maskable-512x512.png",
    "revision": "a6b4c66e480ba663446fed19eddb0f35"
  }, {
    "url": "pwa-512x512.png",
    "revision": "a6b4c66e480ba663446fed19eddb0f35"
  }, {
    "url": "pwa-192x192.png",
    "revision": "53773165463f50c05e4ce11f3663fd4f"
  }, {
    "url": "index.html",
    "revision": "087404d7cd453a7d00b40973c0bf3695"
  }, {
    "url": "icon.svg",
    "revision": "3e2fa3b07e02106d6a29dabf1eeb016e"
  }, {
    "url": "favicon.ico",
    "revision": "4f61053f5911a50029f485603e7b7d51"
  }, {
    "url": "apple-touch-icon.png",
    "revision": "fc94be1aae808034778a30f1c3767e7b"
  }, {
    "url": "assets/purify.es-Bvo9QlJ8.js",
    "revision": null
  }, {
    "url": "assets/index.es-xXtFCLJk.js",
    "revision": null
  }, {
    "url": "assets/index-DpQ-H9yb.css",
    "revision": null
  }, {
    "url": "assets/index-BiTrI-N6.js",
    "revision": null
  }, {
    "url": "assets/html2canvas-C7Pmo8yB.js",
    "revision": null
  }, {
    "url": "apple-touch-icon.png",
    "revision": "fc94be1aae808034778a30f1c3767e7b"
  }, {
    "url": "favicon.ico",
    "revision": "4f61053f5911a50029f485603e7b7d51"
  }, {
    "url": "icon.svg",
    "revision": "3e2fa3b07e02106d6a29dabf1eeb016e"
  }, {
    "url": "pwa-192x192.png",
    "revision": "53773165463f50c05e4ce11f3663fd4f"
  }, {
    "url": "pwa-512x512.png",
    "revision": "a6b4c66e480ba663446fed19eddb0f35"
  }, {
    "url": "pwa-maskable-512x512.png",
    "revision": "a6b4c66e480ba663446fed19eddb0f35"
  }, {
    "url": "manifest.webmanifest",
    "revision": "c0b6fb202e56577c8cf864d426147c02"
  }], {});
  workbox.cleanupOutdatedCaches();
  workbox.registerRoute(new workbox.NavigationRoute(workbox.createHandlerBoundToURL("index.html")));

}));
