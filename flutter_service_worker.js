'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "275dc3f66d4a33b10a9579644f6d5584",
".git/config": "4d3425db3c90550435b3f7abf0a0dd83",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "17875f4f2276392eb7b2cfa898aeb3c8",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9a69611f2aefd234c747afb1fa1a8c71",
".git/logs/refs/heads/master": "9a69611f2aefd234c747afb1fa1a8c71",
".git/logs/refs/remotes/origin/master": "7494de68d0e02571dc88cd7befcd294a",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/0f/260723624c86df91074de665e4e8d4acefa801": "84f2fdb1b972c64ff495f6d4af1b2206",
".git/objects/15/986a2bf58a09b05a2def6e4797db80e89cc643": "bb9e8935b98aef870564de6b35c7084f",
".git/objects/1a/cb64ca867eaeaecd0d0cbe5748a574c46af9d7": "f9f6ea6cdd926a71a8a68c2731489891",
".git/objects/1a/d47d31b17c867af2d24007f2fde931ffbbc7b6": "7c30b521cc218d6ead520ee1c9e43762",
".git/objects/1c/ed9eef9e97fab9481a47a04649323d24cf3ef0": "2359287d686c72f3886f2b87b7230a81",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/23/fa1441ceac366b0022a69caec1d15e9217107d": "dc93446af8d694627d39f8282d4aaf4e",
".git/objects/30/f93025a39aba675d0f4044a717e15dfed230df": "b165d5c5c58f295c6bebab7a76492468",
".git/objects/31/cefc03745606ba401f6fb42ade4ff5211ad112": "9777be79d3d4a5db54edfaf5f414f620",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/32/bfe1ee41377063dfecb4465d6dd990230f8f56": "e987cd9662de3bd1ae684c82cc0bd8b8",
".git/objects/34/4c3e64b31318590a9933a941f1571669ea3e9e": "29aa0f713ce8258f875dccacff88ac8c",
".git/objects/3a/216760abcfa06a9b1a648de61ca99bd5b3e687": "e93cef4c0d4548427b15677fc9c7994f",
".git/objects/3c/da03665719cc0d82165e5e1924ffa3d5ca4ed2": "6161f608cdebd99c9cce888772fe61bb",
".git/objects/40/fe5fe055971c6561c884f1ab226da390a4f6de": "817919589eff4b201cf2e40945617819",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/54/ef37e456fa217d7c80111199b8973b115846f2": "98cbd483ad34ffb3a13a0cb909219631",
".git/objects/5c/61aaba3cc3bd3670a7b5e160865db2ad7bd118": "1342122d127c3cb2d5cfb129e11cb366",
".git/objects/63/70456e2bcb423eb7c6ee898271fc3d07b565a5": "ccc4e0d5b73175c10f893dfcf3ed109c",
".git/objects/6b/2fb3a0d8e209f48f458bc84a785f7796a0713a": "099bfd554f20e764c42cf5533d2eb8e7",
".git/objects/71/a202aa27a62c32f3c4b67c2f6dc486eb6ef614": "adb7b53920fb10a44bfa68c2922ec536",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/e2628306f9b876292f7dc4bd495273c11e9e7b": "ca3ee210f11fdbb898d094064337930d",
".git/objects/7c/e414142ef910adb1285219e332b77ea4c66362": "185152162fc42fc9bdda894cf7cc6eea",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/a92ef052d086b6a7a0821461bc3ec200985586": "2e3a58f545dcb47f51493d478d382f0d",
".git/objects/8f/cc30f53cce0d8f591f1af15a9ad6b5b04266c4": "fc85a6f779db3dbf06236e96ed929412",
".git/objects/95/23f3ff5ee12f22dce554170e50450d98c5c769": "33cdb1211c4f7510c84e790c251dadde",
".git/objects/96/20307361c74bc240c0d45934cf345e77e5cd7f": "91cb0c377aec23cb49fc632e7649d0ff",
".git/objects/9f/577d76ebb16dcb10dcd617503fb445adb50d3c": "21aa747de82f6c0a62e0343eedc2f734",
".git/objects/a0/c4259e47b4f17a7769028e5297423d822ad98e": "73648de75cab94ee11508a6d860642ef",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a4/8180ffb3810e7adfbaa0a6e4286ad4a2153516": "51a1c5886fc26442361b79451103ed3b",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b3/f867407e84545aa937641f8521a8612573aae3": "bdb53f6d771423494aa87d5693646f02",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/d7/6d764da8f04ee5ec6ab48daa522ed9888ba77c": "b4ba70f0aa6b361a53a1e9c77ff58caf",
".git/objects/e5/8e73a2c236797287da1d5d8c098c94c9200f09": "3614c1b18dd727168af78e65596b7759",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/ceb752491bcf8a5e8eddcc41927273757c0d4a": "32bdc9b16a11063160f7da8e2f6133da",
".git/objects/ef/81bde5be136f2ed36a9341bef4a98be6222f97": "46bc41b8147a63b3a61ef8c138abd81b",
".git/objects/f1/1c38d78064a9a0b35e56b4dfc93de910f04450": "0063062203863923ddecd1abb4448ad0",
".git/objects/f1/58339c49f252144b0e665ab8aed9b52b99dca3": "fba69544fe09d78646ccfa6606e51ef6",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/refs/heads/master": "758adb1fd1cbbd272b5a1c842fbb4721",
".git/refs/remotes/origin/master": "758adb1fd1cbbd272b5a1c842fbb4721",
"assets/AssetManifest.json": "d7e63ffb944e6d0aef4d1c84c402b20c",
"assets/assets/char.jpg": "c659d32fd4659143296458583a376f87",
"assets/assets/char2.jpg": "aeda2dba18a1747d2c81a47d01c59d3a",
"assets/assets/logo1.jpg": "f182b25b3c3f7a29edf422ae8af03589",
"assets/assets/logo2.jpg": "7cdf2518ca9bc3b2f8dc9a73df122de4",
"assets/assets/profile.jpg": "0a2114cbaee1044daecb4ddb2c761723",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "68774e5bc5d3785519632c83ae3d89cb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "7409ef7f2b62874613726b27e56cf831",
"/": "7409ef7f2b62874613726b27e56cf831",
"main.dart.js": "b2c67ac1cc76298ecb0c8a53afd83560",
"manifest.json": "66f5e4c83524b711bbbca6783f0bd7a3",
"version.json": "ff3bee9121f0382422f581e94a1253ee"
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
