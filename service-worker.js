"use strict";var precacheConfig=[["/escaperooms/index.html","67afffe908a16585bb0fc410ceab1578"],["/escaperooms/static/css/main.1cd202ea.css","fcedab481b25fb454434e88431cbb054"],["/escaperooms/static/js/main.0d42ce49.js","15ee96b3bec3c375f1e48eb7edf23211"],["/escaperooms/static/media/Cold-War.78b301e3.jpg","78b301e335a11a66751a5f74f1ca0ea2"],["/escaperooms/static/media/Darkmagic.5dfe8e6a.jpg","5dfe8e6a33326ff972e99abc829ca793"],["/escaperooms/static/media/OriginalGame.168e5ef4.jpg","168e5ef41300b03ae5e428da3084d865"],["/escaperooms/static/media/The-Museum-Job.1ab2d10f.jpg","1ab2d10fe1d7f8275a9445c61ff07b39"],["/escaperooms/static/media/acropolismys.fce2d681.jpg","fce2d681a0aedc99c908707be3a9f927"],["/escaperooms/static/media/christmas-site.73fcdcc2.jpg","73fcdcc20e8734b50af059109de16dd4"],["/escaperooms/static/media/illuminati.8462f6c3.jpg","8462f6c3e3b3fdd03da13ca1f15cd6e6"],["/escaperooms/static/media/johnmonroeoffice.8ee512b3.jpg","8ee512b328a10f20a0e6041adb6da1a9"],["/escaperooms/static/media/lost.788fd5eb.jpg","788fd5eb246ae9615a1b85f45a103135"],["/escaperooms/static/media/missingfinger.9be54110.jpg","9be541104dc14c2b75465c1a595a50cf"],["/escaperooms/static/media/museum1.5b993085.jpg","5b9930857b5a9faa8aaafc2bc2fdfcc7"],["/escaperooms/static/media/orientexp.622a2667.jpg","622a26676d23180ba4b3201c171ad0ec"],["/escaperooms/static/media/poker-night.419744a5.jpg","419744a51fb6bf96aca7e597b7b89413"],["/escaperooms/static/media/seven.054081cd.jpg","054081cd69915eb6e99120642e1d9de8"],["/escaperooms/static/media/taken.d79292a5.jpg","d79292a5ae252af154ca9719451fced0"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,r){var n=new URL(e);return r&&n.pathname.match(r)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],r=new URL(a,self.location),n=createCacheKey(r,hashParamName,t,/\.\w{8}\./);return[r.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(r){return setOfCachedUrls(r).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return r.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),r="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,r),e=urlsToCacheKeys.has(t));var n="/escaperooms/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});