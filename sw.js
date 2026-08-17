self.addEventListener("install",e=>self.skipWaiting());
self.addEventListener("activate",e=>e.waitUntil(self.clients.claim()));
self.addEventListener("push",e=>{
  let d={};
  try{d=e.data?e.data.json():{}}catch(_){}
  e.waitUntil(self.registration.showNotification(
    d.title||"KoBoTrade Pushテスト",
    {body:d.body||"Pushイベントを受信しました。"}
  ));
});