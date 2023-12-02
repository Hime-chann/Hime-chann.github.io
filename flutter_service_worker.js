'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "00011da453bc863e0af43da4a821726f",
".git/config": "39a0d7ae6ecadf20830d23374a0e23a2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "936319718b8abd0283ae98ab1a1ad61f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f2e57c7261bed5ca7aaa2265eda1a1d9",
".git/logs/refs/heads/main": "52c2382ac659e1bcb4fa85f7dd40fb65",
".git/logs/refs/heads/master": "b2eb4b00653e244ce514bb90fd0d2829",
".git/logs/refs/remotes/origin/main": "d7bee00ba32732accaa91c4ed141c63e",
".git/objects/01/bcca7d1c23955f7aeda6a269b1b7f540802096": "635a6822e2a56f7f333d54c66b0234db",
".git/objects/10/df70f343ce884e2dc721783e802f951da7b47e": "374493550dd3a587cdcc9cbc56d3b697",
".git/objects/15/b8b003b27ac9607aee2dd0f03710c9f416d818": "cc7cff951a2ed2fb77fd6c518fdbd64c",
".git/objects/17/4c0af9fe80488d51eb3933dc9f115e580f67fd": "10d53e36185bff4f7c8fc4d4d9f22aa8",
".git/objects/18/f19b96b63a48e1954a11c19e9fae2dc7ba7ca3": "9fa3557c83ea7be36dc4d206d8567518",
".git/objects/1c/66df76107d9debb187ff24b6903bbd223cdf1e": "2b69764e709f2d8cae6181afe8549f5c",
".git/objects/30/6dac5ed8d40c1a67b51105b2c459a386061bc3": "0a17491a92c8dee602194b7eabdb73a1",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/39/52be43002b2318d7c234bea1920838d6c75ef1": "57624876606006cb62e1b6eef2c00f77",
".git/objects/3e/5ba9b9d220c747721034f20c341074e6448cdf": "79b7eec15e5ed018028cbf9446071354",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/5040ad7ad4e400e150bcf0ad293e09ffa8280d": "f23ca860e5ec7fe93d10f35dad2a2d27",
".git/objects/4b/b4c221f53d23fc2d3a35ec546327a72e989bbf": "2b93d200680038a8c0bd525e6ec45b09",
".git/objects/4c/8fa517460abc459af1bb2c08c26778a3040e37": "7f378a73f666a926ae3bc322f519f620",
".git/objects/4c/a2a7c226d2c3e26f0b9dde74214486d0baa896": "734657b1f27c72d07dd9e52a25c020c1",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/54/d1236cf45852cf6d22f11757594dbbdc316aef": "d15d380cef4dc08163ad1a52ce5f65ed",
".git/objects/5c/f5c7d0bd0be4dca715976145aa310830c0a3ac": "52fead616cf11b6538bb7b8ed85f763c",
".git/objects/71/fb7f73de85806f108c8591a0b37845cd9a6f22": "c2ee8d62ac6e0f650c5f611dbc92cf1c",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/88/59e1f3243eaff039949c98d6df7f899ad6ecdf": "ff7bb8be0f4cd2902322053ae6b8f74b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/96/5f268e91b7f468ea4ded85a8f2abcddfe1f5a9": "6cde620475753acf951a3fbb6b42aca1",
".git/objects/9e/b653aeed122d26d200f591235eec5a02c6784f": "79d8576354fa15b390156bf2a183fcdd",
".git/objects/a0/41729919ca93c11157220271db28b310bc9bb9": "7c6b14021b7c715fe207994a38647b17",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/b2/05437ad01702f2229155aee89dd16d85b4f915": "5b0fe044bca5e35b61d0ecafb4fcba0a",
".git/objects/b5/9ed611e890681d36b3f929ae29f4116c60ebcf": "43cc078c81af065566785a2a41653cca",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/d3/3d136788ea0d822f2aba5b69b7d60860f48674": "bc7d929c763441bd9138b2121b6ff846",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e4/75e48896ccaafe7170c1c92d54e15a550997d7": "9664b0c8bd0dceba9246787224f88600",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/55dc987b0db3ccd24a8869a087233a0e124f27": "9b242467f4dfe05ce7d2727a68a1ea66",
".git/objects/e8/f4f467f54f9d146ca19fd20b28b86704dd9d31": "f7cb01de6976f00cd4faded5496a415d",
".git/objects/ea/bc44b204c1cf4d2fd44c2784934e2257a65473": "2fb25c3d8773fa7667c810a105ab1936",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/37687ad6a2285892882544c3d51b9d06324c9a": "ae483f666fc7895eee968a9244971209",
".git/objects/f7/41bf23be1df08890c91c6de8770183b4d5b68d": "806d2e5b009c7562c4e8137a1c4bd985",
".git/objects/fa/81d0cc454e3cb76ad2b16e97d09d6e390c48ba": "9190dbcf22d3f0b88a877e19fbdd02ae",
".git/objects/fb/0ebdb85a1d53b328bac2ce495c7eb3f3060cd7": "f3d3f67a833dce2d09cd6531ba312676",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fd/d1491a1c0d3e2c84355bd4cc6a70b8ce37f0c5": "0baea04d9788382674f15b39345b8bd3",
".git/refs/heads/main": "f6cb8861e833d6bc4abb5601d41214db",
".git/refs/heads/master": "a0cfe1fd739ef90877b0dc8ceeb56f24",
".git/refs/remotes/origin/main": "f6cb8861e833d6bc4abb5601d41214db",
"assets/AssetManifest.bin": "99ed31de88be0be779837fe8a3e2adbf",
"assets/AssetManifest.json": "46ed6057580f0bf7b019e8e8ca5f5cc6",
"assets/assets/images/cloud.png": "7877c9e4527e542d56992338aa1a0d5a",
"assets/assets/images/dino.png": "ed30e6b162ad9dfd1a8f1d01b76fcda0",
"assets/assets/images/rock.png": "21453c6b3fd3d4aa3ba27008e2356dbf",
"assets/assets/images/star.png": "cb6bcf44a1100571b9d62575fbb95447",
"assets/assets/images/start.png": "2a189338382f3b8d372b1d859260132d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/NOTICES": "a4cacc3f30e9f40dee4101c1fb300394",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"images/cloud.png": "7877c9e4527e542d56992338aa1a0d5a",
"images/dino.png": "ed30e6b162ad9dfd1a8f1d01b76fcda0",
"images/rock.png": "21453c6b3fd3d4aa3ba27008e2356dbf",
"images/star.png": "cb6bcf44a1100571b9d62575fbb95447",
"images/start.png": "2a189338382f3b8d372b1d859260132d",
"index.html": "1f43d11ef96c8e1af3e2bab92556c190",
"/": "1f43d11ef96c8e1af3e2bab92556c190",
"main.dart.js": "48a1295cb156a0d1c30b6de4eded960c",
"manifest.json": "5fea657047f33f1d3dd4a43cdc27530e",
"version.json": "70f1f38ad8255cac1d47e47181a92af1"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
