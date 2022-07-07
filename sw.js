// service-worker.js

/// <reference no-default-lib="true"/>
/// <reference lib="es2015" />
/// <reference lib="webworker" />

/**
 * @type {ServiceWorkerGlobalScope}
 */
 const sw = self;

 sw.addEventListener("install", event => {
     console.info('[Service-Worker] install');
     event.waitUntil(self.skipWaiting());
 });
 
 sw.addEventListener('activate', event => {
     console.info('[Service-Worker] activate');
     event.waitUntil(sw.clients.claim());
 });
 
 sw.addEventListener('fetch', event => {
     try {
         event.respondWith(new Response(JSON.stringify({ message: 'hello from service-worker' }, null, 2)));
     } catch (e) {
     }
 });