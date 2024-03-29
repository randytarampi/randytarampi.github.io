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
define(['./workbox-6f983169'], (function (workbox) { 'use strict';

  /**
  * Welcome to your Workbox-powered service worker!
  *
  * You'll need to register this file in your web app.
  * See https://goo.gl/nhQhGp
  *
  * The rest of the code is auto-generated. Please don't update this file
  * directly; instead, make changes to your Workbox build configuration
  * and re-run your build process.
  * See https://goo.gl/2aRDsh
  */

  workbox.setCacheNameDetails({
    prefix: "@randy.tarampi/www"
  });
  self.skipWaiting();
  workbox.clientsClaim();
  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */

  workbox.precacheAndRoute([{
    "url": "/1c35992cb16aed3df351.woff2",
    "revision": null
  }, {
    "url": "/32338106b8a27eca0f7f.ttf",
    "revision": null
  }, {
    "url": "/37ce1c8efaca69c9a622.eot",
    "revision": null
  }, {
    "url": "/37eb2c4adb9a59f4ec34.svg",
    "revision": null
  }, {
    "url": "/394a9d340c3581a3eae4.ttf",
    "revision": null
  }, {
    "url": "/404.html",
    "revision": "b7d9bb0b7c50ad5dd4aafd701fd8a959"
  }, {
    "url": "/4b8dc273b820e3b986b1.woff",
    "revision": null
  }, {
    "url": "/4efe4ab8ce1d66302c3f.ttf",
    "revision": null
  }, {
    "url": "/5bb02dfd7fa1670b00fd.svg",
    "revision": null
  }, {
    "url": "/9bb4c4480aa4171fad27.woff2",
    "revision": null
  }, {
    "url": "/CHANGELOG..md",
    "revision": "6f1e22337c535996396377d4277d0fa7"
  }, {
    "url": "/README..md",
    "revision": "a9450dcc3b643316938526a8d84d94af"
  }, {
    "url": "/android-chrome-144x144..png",
    "revision": "8012a431dfbff61eddf6adbb4ec6a862"
  }, {
    "url": "/android-chrome-192x192..png",
    "revision": "3f8c92ac02f8f2b3084fa0a7779d53c8"
  }, {
    "url": "/android-chrome-256x256..png",
    "revision": "943fc65cad22e5ac330435796d6f9dde"
  }, {
    "url": "/android-chrome-36x36..png",
    "revision": "1fc91ed51fea8f70c7cdd99a1c16c468"
  }, {
    "url": "/android-chrome-384x384..png",
    "revision": "66e72e8143f83c45fca826caefad99b6"
  }, {
    "url": "/android-chrome-48x48..png",
    "revision": "8781abfc4f28ea20acf53f7d9af7a468"
  }, {
    "url": "/android-chrome-512x512..png",
    "revision": "ee7d9a9a7b6b94b8e45d0385b3a77ad1"
  }, {
    "url": "/android-chrome-72x72..png",
    "revision": "59eeac0c3ba35721d1ae1354cb1ca195"
  }, {
    "url": "/android-chrome-96x96..png",
    "revision": "bd3dc313c4b00e5f24bf24f853d8d205"
  }, {
    "url": "/apple-touch-icon-114x114-precomposed..png",
    "revision": "dba3d2de2aeb01601d76a8144397d090"
  }, {
    "url": "/apple-touch-icon-114x114..png",
    "revision": "9c28fe9dd473fdae614661177020dd0d"
  }, {
    "url": "/apple-touch-icon-120x120-precomposed..png",
    "revision": "c302672967aeca4a97f6c2f28f782258"
  }, {
    "url": "/apple-touch-icon-120x120..png",
    "revision": "ac88c0377ec2743d834b2ed8f84334da"
  }, {
    "url": "/apple-touch-icon-144x144-precomposed..png",
    "revision": "0554ecfcfd609575b74c1299d36abe80"
  }, {
    "url": "/apple-touch-icon-144x144..png",
    "revision": "7498fa70f2731ac7122257be0df047a8"
  }, {
    "url": "/apple-touch-icon-152x152-precomposed..png",
    "revision": "d3be2a20482af8b0e29ef956f4c8189b"
  }, {
    "url": "/apple-touch-icon-152x152..png",
    "revision": "8b685dda7e70be8a7b70016a66b31f8c"
  }, {
    "url": "/apple-touch-icon-180x180-precomposed..png",
    "revision": "23cecbdd4890a605dde90cb143e4521e"
  }, {
    "url": "/apple-touch-icon-180x180..png",
    "revision": "782c5ff97a5057645955e931f983bdab"
  }, {
    "url": "/apple-touch-icon-57x57-precomposed..png",
    "revision": "69ac82ad66860df028754735ed4de794"
  }, {
    "url": "/apple-touch-icon-57x57..png",
    "revision": "3a80c23d600439db14cd82572e55b0fe"
  }, {
    "url": "/apple-touch-icon-60x60-precomposed..png",
    "revision": "58e7a31c16dbd89fa5d06c3f8f07f803"
  }, {
    "url": "/apple-touch-icon-60x60..png",
    "revision": "c9315ba4d20ba3be852ec414d33b70f1"
  }, {
    "url": "/apple-touch-icon-72x72-precomposed..png",
    "revision": "6899076f762b1119ab613acd53b42e8c"
  }, {
    "url": "/apple-touch-icon-72x72..png",
    "revision": "9a2010082ef3774e97f0469a15f9ec18"
  }, {
    "url": "/apple-touch-icon-76x76-precomposed..png",
    "revision": "b0b9868b6f3be0fe0c7e70ae8972d46c"
  }, {
    "url": "/apple-touch-icon-76x76..png",
    "revision": "c06b3783090f8fa6b13efb96d1fdf826"
  }, {
    "url": "/apple-touch-icon-precomposed..png",
    "revision": "23cecbdd4890a605dde90cb143e4521e"
  }, {
    "url": "/apple-touch-icon..png",
    "revision": "782c5ff97a5057645955e931f983bdab"
  }, {
    "url": "/bb7eff6cc4cd45d5d98d.woff",
    "revision": null
  }, {
    "url": "/be162bc816aa8f83298b.svg",
    "revision": null
  }, {
    "url": "/blog.html",
    "revision": "537813df7656e7c03e5d051fc829770e"
  }, {
    "url": "/browserconfig..xml",
    "revision": "e43b4aa7ff024e5dffcec725b36e0703"
  }, {
    "url": "/ce2f5b4ab976d5098fac.eot",
    "revision": null
  }, {
    "url": "/cf0e5e68350b864b9460.eot",
    "revision": null
  }, {
    "url": "/d47fb16d054d4736673a.woff2",
    "revision": null
  }, {
    "url": "/dist/fa-brands-400.eot",
    "revision": "592643a83b8541edc52063d84c468700"
  }, {
    "url": "/dist/fa-brands-400.svg",
    "revision": "1d5619cd804367cefe6da2d79289218a"
  }, {
    "url": "/dist/fa-brands-400.ttf",
    "revision": "513aa607d398efaccc559916c3431403"
  }, {
    "url": "/dist/fa-brands-400.woff",
    "revision": "1a575a4138e5f366474f0e7c5bd614a5"
  }, {
    "url": "/dist/fa-brands-400.woff2",
    "revision": "ed311c7a0ade9a75bb3ebf5a7670f31d"
  }, {
    "url": "/dist/fa-regular-400.eot",
    "revision": "b0e2db3b634d1bc3928e127458d993d8"
  }, {
    "url": "/dist/fa-regular-400.svg",
    "revision": "c5d109be8edd3de0f60eb472bd9ef691"
  }, {
    "url": "/dist/fa-regular-400.ttf",
    "revision": "766913e6c0088ab8c9f73e18b4127bc4"
  }, {
    "url": "/dist/fa-regular-400.woff",
    "revision": "d1d7e3b4c219fde0f7376c6facfd7149"
  }, {
    "url": "/dist/fa-regular-400.woff2",
    "revision": "b91d376b8d7646d671cd820950d5f7f1"
  }, {
    "url": "/dist/fa-solid-900.eot",
    "revision": "0c6bfc668a72935760178f91327aed3a"
  }, {
    "url": "/dist/fa-solid-900.svg",
    "revision": "37bc7099f6f1ba80236164f22e905837"
  }, {
    "url": "/dist/fa-solid-900.ttf",
    "revision": "b9625119ce4300f0ef890a8f3234c773"
  }, {
    "url": "/dist/fa-solid-900.woff",
    "revision": "d745348d289b149026921f197929a893"
  }, {
    "url": "/dist/fa-solid-900.woff2",
    "revision": "d824df7eb2e268626a2dd9a6a741ac4e"
  }, {
    "url": "/f5507a0df01bcccae0bc.woff",
    "revision": null
  }, {
    "url": "/fa-brands-400..eot",
    "revision": "592643a83b8541edc52063d84c468700"
  }, {
    "url": "/fa-brands-400..svg",
    "revision": "1d5619cd804367cefe6da2d79289218a"
  }, {
    "url": "/fa-brands-400..ttf",
    "revision": "513aa607d398efaccc559916c3431403"
  }, {
    "url": "/fa-brands-400..woff",
    "revision": "1a575a4138e5f366474f0e7c5bd614a5"
  }, {
    "url": "/fa-brands-400..woff2",
    "revision": "ed311c7a0ade9a75bb3ebf5a7670f31d"
  }, {
    "url": "/fa-regular-400..eot",
    "revision": "b0e2db3b634d1bc3928e127458d993d8"
  }, {
    "url": "/fa-regular-400..svg",
    "revision": "c5d109be8edd3de0f60eb472bd9ef691"
  }, {
    "url": "/fa-regular-400..ttf",
    "revision": "766913e6c0088ab8c9f73e18b4127bc4"
  }, {
    "url": "/fa-regular-400..woff",
    "revision": "d1d7e3b4c219fde0f7376c6facfd7149"
  }, {
    "url": "/fa-regular-400..woff2",
    "revision": "b91d376b8d7646d671cd820950d5f7f1"
  }, {
    "url": "/fa-solid-900..eot",
    "revision": "0c6bfc668a72935760178f91327aed3a"
  }, {
    "url": "/fa-solid-900..svg",
    "revision": "37bc7099f6f1ba80236164f22e905837"
  }, {
    "url": "/fa-solid-900..ttf",
    "revision": "b9625119ce4300f0ef890a8f3234c773"
  }, {
    "url": "/fa-solid-900..woff",
    "revision": "d745348d289b149026921f197929a893"
  }, {
    "url": "/fa-solid-900..woff2",
    "revision": "d824df7eb2e268626a2dd9a6a741ac4e"
  }, {
    "url": "/favicon-16x16..png",
    "revision": "c2b34f7c6bc6bf8400f5f3677d28edc9"
  }, {
    "url": "/favicon-194x194..png",
    "revision": "f86e14b8862822648a9b0e316ac67716"
  }, {
    "url": "/favicon-32x32..png",
    "revision": "07a9ee9bc3b688d67eb38e466e04b2c1"
  }, {
    "url": "/favicon..ico",
    "revision": "b22ef66e6c3634238d14bba613e47b34"
  }, {
    "url": "/index.html",
    "revision": "b7d9bb0b7c50ad5dd4aafd701fd8a959"
  }, {
    "url": "/ipad_splash-landscape..png",
    "revision": "5364723066954a9b9e29eefd29445210"
  }, {
    "url": "/ipad_splash..png",
    "revision": "9a93a57cf8490f1e9d58f5ef3a54170c"
  }, {
    "url": "/ipadpro1_splash-landscape..png",
    "revision": "4f9748f437a514bb5fa457a553a2a67d"
  }, {
    "url": "/ipadpro1_splash..png",
    "revision": "373a5af7e00ef4e4722c575b3ffce02c"
  }, {
    "url": "/ipadpro2_splash-landscape..png",
    "revision": "cec283c2184d587462874a2a558fccb0"
  }, {
    "url": "/ipadpro2_splash..png",
    "revision": "4e7765c4a87b0ca8816b74fb421efbde"
  }, {
    "url": "/iphone5_splash-landscape..png",
    "revision": "ca68e5b8826983ded92cbf42c5e0d501"
  }, {
    "url": "/iphone5_splash..png",
    "revision": "7a2564f020009a96c1b5e85a68fdb851"
  }, {
    "url": "/iphone6_splash-landscape..png",
    "revision": "e7de3db2a11c5ca3cac8987a8e1dcf6c"
  }, {
    "url": "/iphone6_splash..png",
    "revision": "27b2274eda7f1b15dceec38792bef5ce"
  }, {
    "url": "/iphoneplus_splash-landscape..png",
    "revision": "3ffe992b886e7613980f75a491439ef1"
  }, {
    "url": "/iphoneplus_splash..png",
    "revision": "05147f69f91c7681ac8e7cd896d69649"
  }, {
    "url": "/iphonex_splash-landscape..png",
    "revision": "0408349cb85fdc9bbc2ae289a8831406"
  }, {
    "url": "/iphonex_splash..png",
    "revision": "2e8c4487a09b5125b9410ab1ff6c619a"
  }, {
    "url": "/letter.html",
    "revision": "bc15b8a0d64879454479638d9e533ed1"
  }, {
    "url": "/manifest..json",
    "revision": "6c60aacb82585d7cd304d2f3cfa8d8f5"
  }, {
    "url": "/map.html",
    "revision": "07ecffa6c7f922031ae3e10b6fc6a0c9"
  }, {
    "url": "/mstile-144x144..png",
    "revision": "e2d363054f15eba9ee4c24a67b313c17"
  }, {
    "url": "/mstile-150x150..png",
    "revision": "9f497311cc6bb165e00b1eac83764a19"
  }, {
    "url": "/mstile-310x150..png",
    "revision": "07f95c0f3d0b3cef0abf77dd716dbbf0"
  }, {
    "url": "/mstile-310x310..png",
    "revision": "94baccbe0be40a4368a2a2d52d50f940"
  }, {
    "url": "/mstile-70x70..png",
    "revision": "d861bf166b57b68e529f6c92c31524b2"
  }, {
    "url": "/photos.html",
    "revision": "4586faae593f0771c6661bf055a67206"
  }, {
    "url": "/resume.html",
    "revision": "fc2b6b34c6ea3f672e1ca90dcb0f0658"
  }, {
    "url": "/safari-pinned-tab..svg",
    "revision": "a65e6a5595231726e365c618da0fbf8c"
  }, {
    "url": "/signature..svg",
    "revision": "41317dcbb1b860fcf88f240a0117f3d5"
  }, {
    "url": "/styles.css",
    "revision": "17c6d8bfe112573bacbb8c26c8aa17ed"
  }, {
    "url": "/styles.js",
    "revision": "54e92e18e4f41b0aa50d4cb5973680b1"
  }, {
    "url": "/words.html",
    "revision": "cb020b13ffbb4932e671174f10281dda"
  }, {
    "url": "/www.sw.installer.js",
    "revision": "b6532fb39fdba59f859b25027bb7cf2d"
  }, {
    "url": "/ʕつ•ᴥ•ʔつ-square-knockout-black..png",
    "revision": "ae9aa18ba3c0e31fbe133c7ac60b33b3"
  }, {
    "url": "/ʕつ•ᴥ•ʔつ-square-knockout-orange..png",
    "revision": "5cf48d734a98973a22e67a4ec68d5d12"
  }, {
    "url": "/ʕつ•ᴥ•ʔつ-square-solid..png",
    "revision": "c8a25e2e13cf4b445d7a61addc26a0fd"
  }, {
    "url": "/ʕつ•ᴥ•ʔつ..svg",
    "revision": "ea1067fc26b93a6bef6223778fe00271"
  }], {});
  workbox.registerRoute(/.*(?:flickr|instagram|tumblr|unsplash|gravatar)\.com|.*(shields)\.io|.*(crisp)\.chat/, new workbox.StaleWhileRevalidate({
    "cacheName": "external",
    plugins: [new workbox.ExpirationPlugin({
      maxEntries: 100,
      purgeOnQuotaError: true
    })]
  }), 'GET');

}));
//# sourceMappingURL=www.sw.js.map
