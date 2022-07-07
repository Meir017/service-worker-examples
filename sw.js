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
 });
 
 sw.addEventListener('activate', event => {
     console.info('[Service-Worker] activate');
 })
 
 sw.addEventListener('fetch', event => {
     try {
         event.respondWith(new Response(JSON.stringify({ message: 'hello from service-worker' }, null, 2)));
     } catch (e) {
     }
 });