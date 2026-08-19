self.addEventListener("install",e=>self.skipWaiting());
self.addEventListener("activate",e=>e.waitUntil(self.clients.claim()));
self.addEventListener("push",e=>e.waitUntil(
  self.registration.showNotification("KoBoTrade Pushテスト",{
    body:"Pushイベントを受信しました。"
  })
));