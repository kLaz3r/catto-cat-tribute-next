if(!self.define){let e,s={};const n=(n,a)=>(n=new URL(n+".js",a).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(a,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const r=e=>n(e,c),o={module:{uri:c},exports:t,require:r};s[c]=Promise.all(a.map((e=>o[e]||r(e)))).then((e=>(i(...e),t)))}}define(["./workbox-946f13af"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/FrEqowZJefh5oYRGWXyY_/_buildManifest.js",revision:"dcf6cf6ddebbf81cf1176c915cbbe992"},{url:"/_next/static/FrEqowZJefh5oYRGWXyY_/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/728-38228d6c5ea0a87b.js",revision:"38228d6c5ea0a87b"},{url:"/_next/static/chunks/framework-ed075df0e0b45174.js",revision:"ed075df0e0b45174"},{url:"/_next/static/chunks/main-b6582f245bf11510.js",revision:"b6582f245bf11510"},{url:"/_next/static/chunks/pages/_app-1a336683ff51f334.js",revision:"1a336683ff51f334"},{url:"/_next/static/chunks/pages/_error-e4f561a102d9bb14.js",revision:"e4f561a102d9bb14"},{url:"/_next/static/chunks/pages/index-024cc00495120ce4.js",revision:"024cc00495120ce4"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-d38be8d96a62f950.js",revision:"d38be8d96a62f950"},{url:"/_next/static/css/53ec6ca58e347c51.css",revision:"53ec6ca58e347c51"},{url:"/_next/static/media/logo.c626b23b.png",revision:"ea78ae361a74cade0b206926bcb68c90"},{url:"/android-chrome-144x144.png",revision:"0ff50d4893d63ae6330d0fe49a314bb6"},{url:"/android-chrome-192x192.png",revision:"cf5fc4bcb4cc3b1f574af8b97fe49957"},{url:"/android-chrome-256x256.png",revision:"19064cbf00cdcac7b543917848eb1691"},{url:"/android-chrome-36x36.png",revision:"d7c8f37595c888b67e0fc9a576e4fd09"},{url:"/android-chrome-384x384.png",revision:"6cdc38f0a6ca6e92a0c09205012b0bf7"},{url:"/android-chrome-48x48.png",revision:"ba708a14e2ec7981487abe3d4e83851f"},{url:"/android-chrome-512x512.png",revision:"657ebd3c0ad2e1b3b1afc3a2fe6ec1fa"},{url:"/android-chrome-72x72.png",revision:"df3e601bda93847c7e5917df4487eb5e"},{url:"/android-chrome-96x96.png",revision:"4bc20803e488180b962ab5ca4f64d7fe"},{url:"/apple-touch-icon.png",revision:"9782f76303a09bc79213d2c47e969866"},{url:"/browserconfig.xml",revision:"08d8b5e4c1dc5b123b9d5a2756067816"},{url:"/favicon-16x16.png",revision:"bfe35d918b5952f2f7830a643403d0d9"},{url:"/favicon-32x32.png",revision:"27e5d6aec1cba02d5f6ed62eef19a76a"},{url:"/favicon.ico",revision:"c4bbf469e38fb422ff22cf0196ca8b8e"},{url:"/mstile-150x150.png",revision:"c89bfabf7d746a153df10864d85ec8f9"},{url:"/safari-pinned-tab.svg",revision:"e46edb54b2d064780f14d080eba83d8c"},{url:"/site.webmanifest",revision:"352fda67b5f44d1ee638e3b4dd869d93"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
