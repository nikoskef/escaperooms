"use strict";var precacheConfig=[["/escaperooms/index.html","aa4f531bf1d2af49bdc744528273467f"],["/escaperooms/static/css/main.b60d609b.css","97556bf71bd549a13f1b6fae1b728999"],["/escaperooms/static/js/main.200abd1e.js","e05ceb18e70149c3200326c7599fa35c"],["/escaperooms/static/media/Cold-War.78b301e3.jpg","78b301e335a11a66751a5f74f1ca0ea2"],["/escaperooms/static/media/Darkmagic.857aff43.jpg","857aff436e9f45833f05ed7122a0d983"],["/escaperooms/static/media/OriginalGame.168e5ef4.jpg","168e5ef41300b03ae5e428da3084d865"],["/escaperooms/static/media/The-Museum-Job.64a1275d.jpg","64a1275d48893f72fa8df671540f9ef6"],["/escaperooms/static/media/acropolismys.4b195c77.jpg","4b195c77a24d5754b4412889a9ab5d8e"],["/escaperooms/static/media/ayianapa3.c21e97a2.jpg","c21e97a286c1714f83c9d1f663b6b836"],["/escaperooms/static/media/bunker.4664b54c.jpg","4664b54c59469808c575fc51fdad49bd"],["/escaperooms/static/media/christmas-site.73fcdcc2.jpg","73fcdcc20e8734b50af059109de16dd4"],["/escaperooms/static/media/conjuring.a4109d17.jpg","a4109d17d894f67f3f693c0f4851f877"],["/escaperooms/static/media/en_elm.719af0f1.jpg","719af0f16fe75684165ea832ebb16868"],["/escaperooms/static/media/en_monalisa.99a2abd4.jpg","99a2abd4dab784383a503ba7b13a08f8"],["/escaperooms/static/media/en_poirot.3582a633.jpg","3582a633273ae39cd7634070a273b8bd"],["/escaperooms/static/media/en_tombraider.07a7e881.jpg","07a7e8815ff78b59e7735e1b43b03cb7"],["/escaperooms/static/media/esc2.7adac216.jpg","7adac2162f9eaeb915d849c2b8d26267"],["/escaperooms/static/media/heist.7f5b9a05.jpg","7f5b9a05fec5c01719c3805f5eb05c8d"],["/escaperooms/static/media/illuminati.1d478a87.jpg","1d478a876b7af4b97fa8b502c27f99c1"],["/escaperooms/static/media/inception.ce40acf1.jpg","ce40acf1e08c8da33e71bc6905a56725"],["/escaperooms/static/media/johnmonroeoffice.465a3415.jpg","465a3415c60cb0c4aa004f70ff94c1dc"],["/escaperooms/static/media/kingstombs.dfbeb860.jpg","dfbeb860840e7d76f0a786e13341cad2"],["/escaperooms/static/media/lab.1ff94820.jpg","1ff948207bc4a8236a097f9c7b158f25"],["/escaperooms/static/media/lost.4975fcb2.jpg","4975fcb2f9e6bb2e17aef74c9920756a"],["/escaperooms/static/media/missingfinger.9be54110.jpg","9be541104dc14c2b75465c1a595a50cf"],["/escaperooms/static/media/mission.eeab08d8.jpg","eeab08d8aee089a60f9a80413833b0de"],["/escaperooms/static/media/museum1.5b993085.jpg","5b9930857b5a9faa8aaafc2bc2fdfcc7"],["/escaperooms/static/media/orientexp.622a2667.jpg","622a26676d23180ba4b3201c171ad0ec"],["/escaperooms/static/media/poker-night.419744a5.jpg","419744a51fb6bf96aca7e597b7b89413"],["/escaperooms/static/media/pope.da3bee24.jpg","da3bee245a9b6bc3821a836ba7df5768"],["/escaperooms/static/media/prison.9db1da31.jpg","9db1da31e756d360be7d41ae44aa197d"],["/escaperooms/static/media/robcasino.add8bfc4.jpg","add8bfc470575a3d2d6877dff2f38000"],["/escaperooms/static/media/seven.054081cd.jpg","054081cd69915eb6e99120642e1d9de8"],["/escaperooms/static/media/smugbay.e5306a68.jpg","e5306a688fa793049934a8395a445953"],["/escaperooms/static/media/smugglersbay.af02232e.jpg","af02232e19f2917da2345675cb180c3a"],["/escaperooms/static/media/taken.d79292a5.jpg","d79292a5ae252af154ca9719451fced0"],["/escaperooms/static/media/thelab.e76197fc.jpg","e76197fcf03d470a6b6b7dffd91fd229"],["/escaperooms/static/media/unl_deathride.9799d335.jpg","9799d3357a1c0a079cb186333f265899"],["/escaperooms/static/media/unl_minionshunting.b92fbfda.jpg","b92fbfda6c03ee7a07b5698c95b074f4"],["/escaperooms/static/media/wizzard.a0f2af6d.jpg","a0f2af6db669335320bfdb0eec198aae"],["/escaperooms/static/media/zodiac_killer.c258e3df.jpg","c258e3df84bf6442a3c0d0a9c2132cd0"],["/escaperooms/static/media/zombie_lab.6e11cd4a.jpg","6e11cd4a68daa12c72d945ed831c5f59"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=a),c.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,c,t){var s=new URL(e);return t&&s.pathname.match(t)||(s.search+=(s.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(c)),s.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var c=new URL(a).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,c){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return c.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],c=e[1],t=new URL(a,self.location),s=createCacheKey(t,hashParamName,c,/\.\w{8}\./);return[t.toString(),s]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(t){return setOfCachedUrls(t).then(function(c){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!c.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return t.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var c=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!c.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,c=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),t="index.html";(e=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,t),e=urlsToCacheKeys.has(c));var s="/escaperooms/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(c=new URL(s,self.location).toString(),e=urlsToCacheKeys.has(c)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});