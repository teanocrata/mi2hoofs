(this.webpackJsonpbluehoofs=this.webpackJsonpbluehoofs||[]).push([[0],{140:function(e,t,n){e.exports=n(174)},145:function(e,t,n){},173:function(e,t,n){},174:function(e,t,n){"use strict";n.r(t);var o,a,i,c,r,l,u,s,d,v,h,b=n(0),f=n.n(b),g=n(13),p=n.n(g),m=(n(145),n(80)),w=n(18),y=n(21),O=n(29),j=n(30),E=n(22),C=n(46),k=n(47),_=n(19),A=(n(50),n(45)),B=n(3),D=Object(A.a)((a=function(e){Object(k.a)(n,e);var t=Object(C.a)(n);function n(){var e;Object(O.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return e=t.call.apply(t,[this].concat(a)),Object(y.a)(e,"connecting",i,Object(E.a)(e)),Object(y.a)(e,"toggleConnecting",c,Object(E.a)(e)),e.handleToggleConnect=function(){e.props.device.gattConnected?e.props.device.disconnect():(e.toggleConnecting(),e.props.device.connect().then(e.toggleConnecting))},e}return Object(j.a)(n,[{key:"render",value:function(){var e=this.props,t=e.device,n=e.connected;return f.a.createElement(w.Card,{interactive:!0},f.a.createElement("h5",null,t.name),f.a.createElement(w.Switch,{disabled:this.connecting,checked:n,onChange:this.handleToggleConnect}))}}]),n}(f.a.Component),i=Object(_.a)(a.prototype,"connecting",[B.n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),c=Object(_.a)(a.prototype,"toggleConnecting",[B.g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){return e.connecting=!e.connecting}}}),o=a))||o,N=n(57),S=n.n(N),T=n(87),W=(r=function(){function e(t){var n,o=this;Object(O.a)(this,e),this._device=void 0,this.id=void 0,this.name=void 0,Object(y.a)(this,"gattConnected",l,this),this.onDisconnected=function(e){var t=e.target;o.updateDevice(t)},this.connect=Object(T.a)(S.a.mark((function e(){var t;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!o.gattConnected){e.next=3;break}return console.warn("Trying to connect allready connected gatt server ".concat(o.id)),e.abrupt("return",!0);case 3:return e.abrupt("return",null===(t=o._device.gatt)||void 0===t?void 0:t.connect().then((function(e){return console.log(e),o.updateDevice(e.device),!0})).catch((function(e){return console.error("Error while trying to connect ",o.name),console.error(e),!1})));case 4:case"end":return e.stop()}}),e)}))),this.disconnect=function(){var e;null===(e=o._device.gatt)||void 0===e||e.disconnect()},this._device=t,this.id=t.id,this.name=t.name,this.gattConnected=(null===(n=t.gatt)||void 0===n?void 0:n.connected)||!1,t.addEventListener("gattserverdisconnected",this.onDisconnected)}return Object(j.a)(e,[{key:"updateDevice",value:function(e){var t;if(e.id!==this.id)throw new Error("Trying to update device ".concat(this.id," with data from other device ").concat(e.id));this._device=e,this.gattConnected=(null===(t=e.gatt)||void 0===t?void 0:t.connected)||!1}}]),e}(),l=Object(_.a)(r.prototype,"gattConnected",[B.n],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Object(_.a)(r.prototype,"updateDevice",[B.g],Object.getOwnPropertyDescriptor(r.prototype,"updateDevice"),r.prototype),r),x=n(49),z=n.n(x),L=Object(A.a)((s=function(e){Object(k.a)(n,e);var t=Object(C.a)(n);function n(){var e;Object(O.a)(this,n);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return e=t.call.apply(t,[this].concat(a)),Object(y.a)(e,"devices",d,Object(E.a)(e)),Object(y.a)(e,"bluetoothAvailable",v,Object(E.a)(e)),e.addDevice=function(){navigator.bluetooth.requestDevice({acceptAllDevices:!0}).then((function(t){return Object(B.o)((function(){var n=e.devices.get(t.id);n?n.updateDevice(t):e.devices.set(t.id,new W(t))}))})).catch((function(e){console.log(e)}))},Object(y.a)(e,"updateBluetoothAvailability",h,Object(E.a)(e)),e}return Object(j.a)(n,[{key:"componentDidMount",value:function(){var e=this;"bluetooth"in navigator&&(navigator.bluetooth.getAvailability().then((function(t){console.log("> Bluetooth is ".concat(t?"available":"unavailable")),e.updateBluetoothAvailability(t)})),"onavailabilitychanged"in navigator.bluetooth&&navigator.bluetooth.addEventListener("availabilitychanged",(function(t){console.log("> Bluetooth is ".concat(t.value?"available":"unavailable")),e.updateBluetoothAvailability(t.value)})))}},{key:"render",value:function(){var e=[];return this.devices.forEach((function(t){e.push(f.a.createElement(D,{key:t.id,device:t}))})),f.a.createElement("div",{className:z.a.configuration},f.a.createElement("div",{className:z.a.devices},e),this.bluetoothAvailable?f.a.createElement(w.Button,{className:z.a.addButton,fill:!0,minimal:!0,onClick:this.addDevice},f.a.createElement(w.Icon,{icon:"add",iconSize:100,intent:"primary"})):f.a.createElement(w.NonIdealState,{icon:"offline",title:"Bluetooth is not available"}))}}]),n}(f.a.Component),d=Object(_.a)(s.prototype,"devices",[B.n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return new B.b}}),v=Object(_.a)(s.prototype,"bluetoothAvailable",[B.n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),h=Object(_.a)(s.prototype,"updateBluetoothAvailability",[B.g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){return e.bluetoothAvailable=t}}}),u=s))||u,P=n(58),I=n.n(P);n(173);var U=function(){return f.a.createElement(f.a.Fragment,null,f.a.createElement(m.a,null,f.a.createElement("title",null,"Blue hoofs"),f.a.createElement("meta",{name:"description",content:"Mi band 2 for hoofs friends"})),f.a.createElement(L,null),f.a.createElement(w.Navbar,{fixedToTop:!0,className:I.a.toBottom},f.a.createElement(w.Navbar.Group,{align:"center",className:I.a.center},f.a.createElement(w.Navbar.Heading,null,"Blue hoofs"))))},M=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function R(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}p.a.render(f.a.createElement(f.a.StrictMode,null,f.a.createElement(U,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/bluehoofs",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/bluehoofs","/service-worker.js");M?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):R(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):R(t,e)}))}}()},49:function(e,t,n){e.exports={configuration:"Configuration_configuration__1O6ua",addButton:"Configuration_addButton__27U5I",devices:"Configuration_devices__1LPi9"}},58:function(e,t,n){e.exports={toBottom:"App_toBottom__gEblt",center:"App_center__3oPdq"}}},[[140,1,2]]]);
//# sourceMappingURL=main.a9597f23.chunk.js.map