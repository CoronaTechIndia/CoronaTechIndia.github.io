'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "820dd310329b6bbfa5460e9ccf037683",
"assets/assets/fonts/Montserrat-Bold.ttf": "d3085f686df272f9e1a267cc69b2d24f",
"assets/assets/fonts/Montserrat-Regular.ttf": "07689d4eaaa3d530d58826b5d7f84735",
"assets/assets/images/abuse1.png": "95697292be523ae2cb2c44e1fb94bb1c",
"assets/assets/images/abuse2.png": "dec44934c5e737ec821db9a793e28583",
"assets/assets/images/lp_image.png": "5aad4d4216174954f5228d7d268546e8",
"assets/assets/images/ppp.png": "22498a204aa44e80811847af3338f2e2",
"assets/assets/images/splash1.png": "c0982f48e2bd19ea8bfae3e8e958c002",
"assets/assets/images/step1.jpeg": "ca2cf8da471fdd446dfb45e07546ce67",
"assets/assets/images/step2.jpeg": "ef779c6584ae7a5821a0ccf9b01d989b",
"assets/assets/images/step3.jpeg": "4dff32c7ceba60ecf6c4ae76022a71b3",
"assets/assets/images/step4.jpeg": "929dd2bb150d98e3ed20f1a97746370e",
"assets/assets/images/step5.jpeg": "13c67952c8022f8c859742f0208d1798",
"assets/assets/images/step6.jpeg": "aa5c42a0e396b4364639c8f76933d68a",
"assets/assets/images/usage2.jpg": "94d6df89ada1e00bdd37eb425137b479",
"assets/assets/images/usage3.jpg": "2d239d523bc1fbbbfb11fc18268458a8",
"assets/assets/images/usage4.jpg": "bb4ca9a40ffd3459210928a0df8f4d89",
"assets/FontManifest.json": "7d00176be594fd22d0b1ebf00ae0c712",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "11be1c9dae910f7ad0c762b085b33059",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "9a62a954b81a1ad45a58b9bcea89b50b",
"assets/packages/fluttericon/lib/fonts/Brandico.ttf": "791921e9b25210e2551b6eda3f86c733",
"assets/packages/fluttericon/lib/fonts/Elusive.ttf": "23f24df0388819e94db2b3c19841841c",
"assets/packages/fluttericon/lib/fonts/Entypo.ttf": "58edfaf27b1032ea4778b69297c02b5a",
"assets/packages/fluttericon/lib/fonts/FontAwesome.ttf": "799bb4e5c577847874f20bd0e9b38a9d",
"assets/packages/fluttericon/lib/fonts/FontAwesome5.ttf": "221b27a41202ddd33990e299939e4504",
"assets/packages/fluttericon/lib/fonts/Fontelico.ttf": "3a1e1cecf0a3eae6be5cba3677379ba2",
"assets/packages/fluttericon/lib/fonts/Iconic.ttf": "34e12214307f5f7cf7bc62086fbf55a3",
"assets/packages/fluttericon/lib/fonts/LineariconsFree.ttf": "276b1d61e45eb9b2dde9482545d9e3ac",
"assets/packages/fluttericon/lib/fonts/Linecons.ttf": "2d0ac407ed11860bf470cb01745fb144",
"assets/packages/fluttericon/lib/fonts/Maki.ttf": "9ecdcd7d24a2461a55d532b86b2740bd",
"assets/packages/fluttericon/lib/fonts/Meteocons.ttf": "8b9c7982496155bb39c67eaf2a243731",
"assets/packages/fluttericon/lib/fonts/MfgLabs.ttf": "09daa533ea11600a98e3148b7531afe3",
"assets/packages/fluttericon/lib/fonts/ModernPictograms.ttf": "5046c536516be5b91c15eb7795e0352d",
"assets/packages/fluttericon/lib/fonts/Octicons.ttf": "7242d2fe9e36eb4193d2bc7e521779bf",
"assets/packages/fluttericon/lib/fonts/RpgAwesome.ttf": "99232001effca5cf2b5aa92cc3f3e892",
"assets/packages/fluttericon/lib/fonts/Typicons.ttf": "3386cae1128e52caf268508d477fb660",
"assets/packages/fluttericon/lib/fonts/WebSymbols.ttf": "4fd66aa74cdc6e5eaff0ec916ac269c6",
"assets/packages/fluttericon/lib/fonts/Zocial.ttf": "c29d6e34d8f703a745c6f18d94ce316d",
"index.html": "d3008e3991366467d93b5a0b53ad2ada",
"/": "d3008e3991366467d93b5a0b53ad2ada",
"main.dart.js": "40a940b1ba99285c1b4e1199fbbc926e"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
