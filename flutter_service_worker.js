'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "7861fdf36a9227f825bd486a335855f6",
".git/config": "ffb2a3fca02d7b52565d8971fac2d0a5",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
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
".git/index": "0d8507fc1add2f47133d591b6fdbb66b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b9dda2abf0f5b3eca21af6aa7a9e5ad2",
".git/logs/refs/heads/main": "47d1781895cf4cf815887c0c75ec4f23",
".git/logs/refs/remotes/origin/main": "a09429b985a143c171f10420d538826f",
".git/objects/00/353b92bbd315085411d350d5e9539684459872": "5a6ce6373bc65f1efc9f8d284d54d947",
".git/objects/00/dc884c41a503c91f0d0a0e25db39a6d62fc2de": "4ca58e324e321c38692a013e4f7f8bf9",
".git/objects/0e/3285c063a50ef0b47a189307b107f042e780a4": "1ce2e9ccf7861fc9ec99e553fb54a157",
".git/objects/19/92213403ad703c16741e9c45e485549c9946c0": "29f010321802916871a5405826a3936e",
".git/objects/1f/0cb23c9b23ba12c1ac2fd244859723826b1181": "3fe722c5a2af0ed35f5c8e95c6ffd6c2",
".git/objects/24/e25a4368b5336559d06aa7840019fe70578245": "c115c494d36a3f15e8d00d2162d7c9d0",
".git/objects/28/4cfce37edfb6a9a39a2fb56b5fedec45f02f78": "eada62488bdb5f46c6f1bee3603a808e",
".git/objects/2b/d35600e0535f956f658d9d83b0c1a28bd387e7": "1240fced7f13b7982449915b293ee836",
".git/objects/2d/9f572436919b068fdd2eecdb32bfa8f540bb6d": "7704273154ab0427af02c09005cedd42",
".git/objects/2e/fe8c2cf700f02fb55d425155ae17f3ce4bfe3c": "6936d403dca1f3a520d42429abd0cee3",
".git/objects/2e/ff401411406838277aec52c9c224330c35d768": "84bfdf060a5e8aab7c19fd1f8dcf5aea",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/36/c8e78eb5ad265ed3a41aa559ab53aa7193b8cb": "ac5ed6081c3daba1aaa1351b4da74ff0",
".git/objects/43/4cd5053d4e9fa31fe0ba7b575d82f72aba2412": "91b58b169a4f87c9d4f0c5d9674f5aa9",
".git/objects/47/b66238f403b24bed80c489c8c6795d1bfaf6d4": "fade2ff1a2acb3cf2dc358641c8f1abc",
".git/objects/48/8e40f89320a3c2ca87c2c971d44822501bfd69": "981df62d4b8db6719f7c7cdd64958e81",
".git/objects/55/22a3c76ee68be127ea1b13af5c535ad1dc40b6": "4e53e41c97dfcd24b9e563c21cd5ba7d",
".git/objects/62/564f98770617ad349e3d76a655b81583345725": "4ca859d6ec07ba03244ed86eed6f8e29",
".git/objects/66/7848d6fd2d64905126a4825f4c649e32c4f30f": "11ed7c65b1ba9177451f3c5ac16adc92",
".git/objects/67/e4f439df9fdb661f735d4cc06fe22778b4a8a8": "8c9ff63c37355d27baa588d502bf0c67",
".git/objects/6e/69a4c3932ea397730050f25195f4aa8e30fb7b": "e0ed31b80a6f9e7da6fce38ca0eaac2b",
".git/objects/70/6c6d289b33be555ce6d649df1757f260eadcc8": "6e2d578c097576cb0b59c98c7d13dfa9",
".git/objects/72/44828ca38186306677a2479f3a14512231d242": "9b5fb949cd2ef0ed79b5c770db34bdc1",
".git/objects/73/73c58d4f580a1969cf052e5172c82760a10741": "651cf7839d8147872d1927a34db1cd39",
".git/objects/74/242c7ea94965fbb08a5c2fdbcd2125247aabd0": "9be446500bd1bb52dffa00a134916fc0",
".git/objects/74/fdd363cfdfb203d67c7ab1ae39e1a569ff53df": "7d5bdf67eb19cbc5ae342a332e656697",
".git/objects/77/27abe478efadcc3902f835486f458c6b89a4f2": "01e8a6ffe339fd65c5e2d9df4e0a70e4",
".git/objects/77/3e51fd868235e85e208cd936da0e4db6364a26": "5767ec26fef9928063032b893b4aa8cc",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/5561e465e992d74aaf31c7959e237b9d720393": "7a783cb47d3dde7c903d2ab317e46777",
".git/objects/7d/87ef3cb629b16b4316536542d4ea9340ce3887": "8502dee8c99a7b7c110bba1b2eac98d9",
".git/objects/81/f3f82f11697b38481e5d43a00048ac55aeb488": "0a9f04e19180a60b58e3d6a98f1b04c0",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/92/64da37bdfdd69914db50141eada6331fc0e850": "a125809ffdb58cd48857424445356be6",
".git/objects/98/ad8f2d00178947e5bfe5ba692026dc37dfe54d": "b7dece04b32f504905f24593898957e0",
".git/objects/98/b41a6ddd9f10f9f4cab050d9ddd959904278c5": "992c8beaf21edb00d3bfc74e82351d8e",
".git/objects/9e/a43fbe64ec196a33318135d24c0c6d5c35b85d": "882709741073c4be8b7dd6b450526b0e",
".git/objects/9f/8c5d15075a50b8779f75a9439c9dfba924090c": "404aca7092a422ff08df73cb88070a44",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/b9162eec80b648a6df9978187650f12cc716a0": "00aef4c8c3149eb70bf2bbb3df06a7a2",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bc/6164c8b1af72c9cf33cbc19165be7915043e1d": "aff02404131c6d87b49076a8dfd681ca",
".git/objects/bd/4a04217cbac44de14332cf78a413b840236113": "b5d8d62d4f342406e7c73a8e9e86857c",
".git/objects/ce/a6a2c1c9f4e8bb72d22b5a858011aa02aecbf3": "4c8b721bbf1337035c3166b0dc14a985",
".git/objects/d1/e5711ea5b659f2f05436f23b78b7e18626c96b": "1264dac5c601816c07e01406dee1c9e5",
".git/objects/d5/1917b0e9341d4339f3a29fdd8ae54aadc7eab8": "ca0e6ead00804894042c652e85c52b58",
".git/objects/d5/2db32dc7332984b5fcbd3c21aa42b4b5318cbb": "e10530e4f63d9b65b61ce1f7660f705b",
".git/objects/d5/66c6d9fb46823b14b9c5d46c1a079de0d2ff23": "beceeb185692f9f022e71caaaa27885e",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dd/dac110005dcb77ca6c3fa5fa8c103623e02744": "c67911f354e513b8764ad7cf6fea42bb",
".git/objects/de/37c4d8af62e6473dee76695772c42ae7f07166": "b26014e8641f129597658853d8279438",
".git/objects/e0/0f4ee2b523df642763393d8c8ddc51eadddc47": "df49138e4031bb53b084f988974e7249",
".git/objects/e1/4030cc9bc151d45bba1ae586ef18c2220d4e21": "3e42fce1382dffccb1d5d724caa943a2",
".git/objects/e4/363d559e3e3e7d279483d4704db8c23c14a4a3": "137797563c013e00e27f374468c633da",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/0d3a84b02a0dff4c257381f59204b32489c9b1": "1cb292a09309d81d1062cdffdd1e0d9d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f4/c40f4c49753c6ed76b557cab3ef077d89c929a": "2eddb869ffb7e2470bc4c7f04c713a87",
".git/objects/f5/e4b037af6551c7dacd758510aceb8c260324e6": "0b92847714150165b49f4af2a9fc4a05",
".git/objects/f8/5b6095cf82678bfaa829e30620861def56c1d0": "15a6af1d86245f93c9ec9462b5f9cb05",
".git/objects/fd/a32265de2c95eb2ef54c15775907e402f6da0f": "e2eb7e8a3eef92b49ec8b4101cdcd9c1",
".git/objects/fe/3c4532480477f5f79767f535a085f118f27ab0": "4cb7bed17ac5c1b803af1bc11eaea746",
".git/refs/heads/main": "202dc4c7c77212dd10fa237f230722e7",
".git/refs/remotes/origin/main": "202dc4c7c77212dd10fa237f230722e7",
"assets/AssetManifest.json": "bfc4fad3bc78f54655bbd6909058d3c4",
"assets/assets/covidapp.png": "6df40ae6a4995ca7f15deb816908f59d",
"assets/assets/icons/bootstrap-plain.png": "186e464faa6a9052e08832c59a60b262",
"assets/assets/icons/css3-original.png": "4f62343427002846cadebf7b572aa3bd",
"assets/assets/icons/dart-original.png": "702a032eddea90a75d3d0be248fc2112",
"assets/assets/icons/figma-original.png": "c08a45abf932b77d836e099b428cb6c1",
"assets/assets/icons/firebase-plain.png": "e0985da35de9f0c37574d14f05e8ed8d",
"assets/assets/icons/flutter-original.png": "a2c21a398ece69d9d24ad12ac7bd96b6",
"assets/assets/icons/html5-original.png": "3768ce284d6bfa71a327027da8095365",
"assets/assets/icons/javascript-original.png": "5dfc64a8540882ccfe060ea64954b977",
"assets/assets/icons/vscode-original.png": "82e6a4f088a82f46790491f251085d7d",
"assets/assets/iphone.jpg": "f65bdc0ea78613579cb32e9d4f79c806",
"assets/assets/moviiezapp.png": "98d02439be1129f8dcfb927c0dbe5c0f",
"assets/assets/portfolio.jpg": "0e45a2170ac1aa6078df7c93bc1f5994",
"assets/assets/stars.gif": "5448e9356802646e4905ac3d9c8649b9",
"assets/assets/yolodepart.jpg": "d2ee3ddd800572515bedebab346c3bed",
"assets/FontManifest.json": "b146974b0bd32f5006146947dd3c3935",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "b137a1d046fdbf357a4a73b223a2ca86",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/unicons/icons/UniconsLine.ttf": "897b30998fda10237ba083acb529d291",
"assets/packages/unicons/icons/UniconsSolid.ttf": "630f8bd494e53400fa9cda3a4eb8ec10",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "bf9411fd6e7ef7e975165c02b49de700",
"/": "bf9411fd6e7ef7e975165c02b49de700",
"main.dart.js": "5af43f749599e6c889caf680ce619030",
"manifest.json": "d23f3c9a204ca4fd091d8ddedfcf287f",
"version.json": "79b124ed9fc07d5a17e708134e4fb9f0"
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
