'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "76ffc0b4b6fdf6383ec61958acaa05a4",
"assets/assets/fonts/HoneyScript-Light.ttf": "cd1a74b3cd01bb99f3658948d3dd771f",
"assets/assets/fonts/HoneyScript-SemiBold.ttf": "0e446bfab952c170640611971b235737",
"assets/assets/images/1.JPG": "7d5fce57bf4002bd9acdc3f2c5702c53",
"assets/assets/images/10.JPG": "cc8b639d1cb8d6400d1226285187d422",
"assets/assets/images/11.JPG": "f029c9df7139114f9e92cd0251af8501",
"assets/assets/images/12.jpg": "a996b9a3373887c38099771a042f8a70",
"assets/assets/images/13.JPG": "ccfd1b6a02eea297f78644a625713552",
"assets/assets/images/14.jpg": "d5f8917f323369812ad83ff7d034e6b7",
"assets/assets/images/2.jpg": "07e567f31ec1925e5eb23014384d1ab2",
"assets/assets/images/3.jpg": "74ecc11fed25cdd944b8b7d97f616482",
"assets/assets/images/4.JPG": "6c3556362ae62cbaaf566b8513742656",
"assets/assets/images/5.JPG": "2750b9415e3ee650a3008902c1a6fcc0",
"assets/assets/images/6.jpg": "6cdabc1e92b82ea7043f4db219cec3b4",
"assets/assets/images/7.jpeg": "97bcf56fad81edd7033c8208ddb96917",
"assets/assets/images/8.jpg": "73c78ff3bb1b0accbcc370f6c76c01a1",
"assets/assets/images/9.JPG": "39fc08f4fa0cd642362d146f9ff3546e",
"assets/assets/images/a.jpg": "c0d374a7430eb38f57cec4819540788e",
"assets/assets/images/a1.jpg": "a66abab03bcb3a6540833d595628e11c",
"assets/assets/images/a2.JPG": "0f870131744ad0658ae03af139b6e20f",
"assets/assets/images/a3.jpg": "f2e71438465b1e07a3086608d61b96ec",
"assets/assets/images/a4.jpg": "c396afd2fccdfc17c50daa64372b90f2",
"assets/assets/images/b.jpg": "460a26b57af5a8a1b599d4df5a97966e",
"assets/assets/images/bride.png": "a80e9aaa12511370be0e68e4aa76368a",
"assets/assets/images/c.jpg": "dbb23fb3ad555aa3d73b57a248c8b59e",
"assets/assets/images/d.jpg": "032c2a93af6615e93ed0cd4ee8845698",
"assets/assets/images/e.jpg": "c8873bbfcc72bc64708c7f5777f8d2c9",
"assets/assets/images/f.jpg": "193ad5e6e60c0a1534e17c7d353d71b7",
"assets/assets/images/g.jpg": "52baeadeb4341de9189d0286db163b00",
"assets/assets/images/groom.png": "3fb7cbb35f8d4f3b287317654a833510",
"assets/assets/images/h.jpg": "454e4aec0911e5874a0a4bb6b4659647",
"assets/assets/images/head_logo.png": "fa2968f2af830de7907c201211f89346",
"assets/assets/images/i.jpg": "a9d2ea64aa37474bd866333fc33eca1e",
"assets/assets/images/j.jpg": "34abb0d83a40806b0156173c58f32104",
"assets/assets/images/leak.JPG": "cd90b37f16d294c72125235a5f6ff392",
"assets/assets/images/muny.JPG": "1517fe804c3c934028e435511fdc98c6",
"assets/assets/images/n.jpg": "90d61a691fe223eab05c83251091e5e7",
"assets/assets/images/o.jpg": "29cf58369268aec4dddb1e525b596c55",
"assets/assets/images/p.jpg": "e0efcea3e06aa4878be72155de6c98c8",
"assets/assets/images/p1.jpg": "62622458486940d69847b0086a244ed5",
"assets/assets/images/p10.JPG": "db9924cb74184ccdd5116223a06defa8",
"assets/assets/images/p11.jpg": "c97aca5d0f5f8fa569679274eb8d0143",
"assets/assets/images/p12.JPG": "c8872df57215099bd19f2ba0ee790bbe",
"assets/assets/images/p13.JPG": "0130b2fe26d43f8d1e5ed0f3ac4dac09",
"assets/assets/images/p14.JPG": "7feb7f7730ce10fc9d0d17dd1b9c5933",
"assets/assets/images/p15.jpg": "e2aa6349bfbf9d7f1fc42910b357025c",
"assets/assets/images/p16.jpg": "5324264883712f8886f89c4474e625ab",
"assets/assets/images/p2.jpg": "91f569da6fd0dbcc37204a3de2d6f3c0",
"assets/assets/images/p3.JPG": "e5684d32e2d9578708a7e9c778c7f386",
"assets/assets/images/p4.JPG": "6230053db8049016652bad136811dfd3",
"assets/assets/images/p5.jpg": "b526d834aba725f03eb9ccb40d5dae86",
"assets/assets/images/p6.jpg": "a6c1f2d333244bff052d4c0cbedceeb8",
"assets/assets/images/p7.JPG": "9d35ef389d30f685dcd2819815a28136",
"assets/assets/images/p8.JPG": "d4a18a2aff748a12e8c7f278044611af",
"assets/assets/images/p9.jpg": "9c8919ad6bf88bf4a3668020ba720d33",
"assets/assets/images/q.jpg": "517a48805b64bcfc7deb15478939ddc0",
"assets/assets/images/r.jpg": "cf7f7dab58b8ebf0c5c03e4a6b4fee91",
"assets/assets/images/s.jpg": "52fe748c339fb2d32b0300287569a4f1",
"assets/assets/images/t.jpg": "73520bdffe21af7779e7fc1093a56107",
"assets/assets/images/u.jpg": "f61d9dc14d7f21cc4d0f2ddd7952cd9d",
"assets/assets/images/v.jpg": "c1e73f247aaf249463c76aa02d896d6e",
"assets/assets/images/w.jpg": "f41b45a47f5250a05a42a1fb7c7dc8a3",
"assets/assets/images/x.jpg": "c0d7773bd047f687b581967a5a285ce0",
"assets/assets/images/y.jpg": "8d6972f9fcc839362f52a1dcf03a08f3",
"assets/assets/images/z.jpg": "f17cb9325b2d2098889faf441bf6fb6e",
"assets/FontManifest.json": "73e7eba26dbc03451421bf09e240b3e8",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "77bc3442b32b7d6bf637977db5916161",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b14fcf3ee94e3ace300b192e9e7c8c5d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "02db921a3bc3befdc19381d0e9dd1de1",
"/": "02db921a3bc3befdc19381d0e9dd1de1",
"main.dart.js": "d4d1aeb056175a6dc9d0f0f0f4abbc77",
"manifest.json": "9f531173b1a4ddaaa31d3465210347f7",
"version.json": "c11191fc7b79957556605af418ae7c26"
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
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
  for (var resourceKey in Object.keys(RESOURCES)) {
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
