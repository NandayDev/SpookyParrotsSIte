'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "style.css": "ffba23ff301032bec9a3922e763ddcca",
"index.html": "1146a9feff4117834f1825dd55312a9a",
"/": "1146a9feff4117834f1825dd55312a9a",
"manifest.json": "6cbe41637e331ef626d9a50c26f95fc1",
"version.json": "db8990b8a733cdd52065ba1549ba9aa5",
"assets/FontManifest.json": "f0f4be009d67b49f6afb66286f706923",
"assets/NOTICES": "aeeec532e42d799e09a2641600b48d38",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/assets/experience/opensource.png": "997db9ffb7f57a2c0ef1323c6056c44b",
"assets/assets/experience/rcctechz.png": "40de2922a15538d96a1210fd9eb8457c",
"assets/assets/experience/GDSC.png": "a144476dba333629f9a232e8c7cd64bf",
"assets/assets/experience/kofi.png": "5132bddcb9ce0828888c91a08f35a2ec",
"assets/assets/experience/constant/experience.png": "8f6a768aa1f3a803088eff838313f7b0",
"assets/assets/experience/credanic.png": "27b5605cf2f3291e4cfe71f4f97daaf2",
"assets/assets/experience/coding-ninjas.png": "5b94a7d8ef90a9b60a3967745e044778",
"assets/assets/experience/patreon.png": "5350cf08cd55456df04db0c76e588ed4",
"assets/assets/crew/adelina.png": "0df33e3e1ebe47192efcdec14d72d7d1",
"assets/assets/crew/pappi.png": "c578dab1e06810035724bd79a84e0e9c",
"assets/assets/crew/guido.png.bak": "b3b3825b2c94a506e8c9aee976000e43",
"assets/assets/crew/guido.png": "30ee04beb698fdcb56ba46b330fe253d",
"assets/assets/crew/valerio.png": "cafa38532e92d2e98354032744ec27f8",
"assets/assets/contact_me/constant/location.png": "dbc10b089546daaee5c45d9bb754f989",
"assets/assets/contact_me/constant/location-dark.png": "08a65e7c79b85fbcb40e8fce00953e47",
"assets/assets/contact_me/constant/picture.png": "1a817a95a42d8c43031378d122a05ffe",
"assets/assets/contact_me/constant/ciocce.jpg": "b186b11c8fbbd8e48f79dbb79a54bebb",
"assets/assets/contact_me/spookyparrots.png": "50b67e296839a45a466013dab2162b9c",
"assets/assets/contact_me/picture.png": "13a4b677d9fa726efd9e771189222bf5",
"assets/assets/fonts/FjallaOne-Regular.ttf": "4fa3683005fa20dd058f47b9cfd411df",
"assets/assets/fonts/SourceCodePro-SemiBold.ttf": "420d3580f5b6e63ba1eabb8555b5f6cf",
"assets/assets/fonts/Montserrat-Medium.ttf": "c8b6e083af3f94009801989c3739425e",
"assets/assets/portfolio.json": "34cdedcafb14c1cfcf5f7f7a6e6f659a",
"assets/assets/projects/kofi.png": "18eab84f712861e838db43a0186d336a",
"assets/assets/projects/stxaviers.png": "54936ceae932c0337c5c4096d2bf6037",
"assets/assets/projects/onelastnight.png": "ea413861a3d6bfa50df51e412ab97e70",
"assets/assets/projects/rcciit.png": "e549f157d5783656caeb1f605259b897",
"assets/assets/projects/gitaram.png": "e0c528ff1e67d954a6039ce204c38c8f",
"assets/assets/home/constant/email.png": "0ae11c7c131c4152f3279d35526388ff",
"assets/assets/home/constant/kofi.png": "c2b84425597a1c52b9d91627bcac697c",
"assets/assets/home/constant/instagram.png": "11fd5e27dbef0fc872e872b2d8828faf",
"assets/assets/home/constant/patreon.png": "d16c0e60162af902c49e8d833c97895c",
"assets/assets/home/constant/twitch.png": "07f3a81d259bc36399667ab1e459e778",
"assets/assets/home/constant/twitter.png": "3a20f0fc87bf5ad851182d6681903770",
"assets/assets/what_i_do/cpp.png": "efeec8be519a45426ed24cd91b86fc53",
"assets/assets/what_i_do/git.png": "2f2db226d2f03acc82b77c7fe652fd3b",
"assets/assets/what_i_do/python.png": "d464079775fdeabf0ffb1323b2a02d2c",
"assets/assets/what_i_do/bash.png": "8aec2de4c0634c93202ec36d7ac4a5de",
"assets/assets/what_i_do/constant/checklist.png": "bce0e7781492fe752297f8369c666494",
"assets/assets/what_i_do/constant/checklist-light.png": "c6a80a3ff27e7db249fb88159383f74d",
"assets/assets/what_i_do/c.png": "9f6665a404d1b2384b4a90419ad08fd2",
"assets/assets/what_i_do/flutter.png": "5b26614dbdbcf4b3ecb80bed00ad3702",
"assets/assets/what_i_do/linux.png": "0dda41d21f571add8b3a558c9914c8ff",
"assets/assets/what_i_do/java.png": "53b82a97cf4e13fac807691e7b0be082",
"assets/AssetManifest.json": "b1ffd4abe9af0c1b53f13be7c64f3922",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"CNAME": "29aef196e8236e18fc155f43d056da57",
"main.dart.js": "d407891530f998b46411f948aa18e4e5"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
