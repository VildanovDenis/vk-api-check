(this["webpackJsonpvk-api-check"]=this["webpackJsonpvk-api-check"]||[]).push([[0],{10:function(e,t,n){e.exports={searchBar:"searchBar_searchBar__SXmRI",input:"searchBar_input__3nhhT",button:"searchBar_button__2mhQQ",checkbox:"searchBar_checkbox__1uZ2A",checkboxLabel:"searchBar_checkboxLabel__13rDX"}},12:function(e,t,n){e.exports={card:"friendCard_card__1hZxh",avatar:"friendCard_avatar__7yfr1",userName:"friendCard_userName__d_5Kz"}},26:function(e,t,n){e.exports=n(39)},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(19),o=n.n(c),i=n(6);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var u=n(4),s=n(7),l=n(14),m=n.n(l),f=n(20),h=n(25),d=n(21),p=n(22),v=function(){function e(){Object(d.a)(this,e)}return Object(p.a)(e,null,[{key:"subscribeVkInit",value:function(t){if(window.VK)return window.VK.init({apiId:t}),void(e.inited=!0);var n=0;!function a(){if(!(n>=10)){if(n++,window.VK)return window.VK.init({apiId:t}),void(e.inited=!0);setTimeout(a,500)}}()}},{key:"isAvailable",value:function(){if(e.inited)return Promise.resolve(!0);return new Promise((function(t,n){var a=0;!function r(){return a++,console.warn("Trying to get access to VK: ATTEMP #".concat(a)),e.inited?t(!0):a>=10?n(!1):void setTimeout(r,1500)}()}))}},{key:"initAuth",value:function(){return new Promise((function(t,n){window.VK.Auth.login((function(a){if("connected"===a.status)t(a.session);else{var r=a.status,c=new Error("\u041e\u0448\u0438\u0431\u043a\u0430 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438: ".concat(e.authError[r]));n(c)}}))}))}},{key:"killAuth",value:function(){return new Promise((function(e,t){window.VK.Auth.logout((function(t){return e(t)}))}))}},{key:"callApi",value:function(t,n){var a=Object(h.a)({},n,{v:e.version});return new Promise((function(e,n){window.VK.api(t,a,(function(t){return e(t)}))}))}}]),e}();v.inited=!1,v.version="5.78",v.authError={not_authorized:"\u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430 \u0440\u0430\u0437\u0440\u0435\u0448\u0438\u0442\u0435 \u0434\u043e\u0441\u0442\u0443\u043f",unknown:"\u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430 \u0432\u043e\u0439\u0434\u0438\u0442\u0435 \u0447\u0435\u0440\u0435\u0437 \u0432\u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0435, \u0438 \u0440\u0430\u0437\u0440\u0435\u0448\u0438\u0442\u0435 \u0434\u043e\u0441\u0442\u0443\u043f"},v.getLoginStatus=function(){return new Promise((function(e,t){window.VK.Auth.getLoginStatus((function(t){return e(t)}))}))},v.getSession=function(){return window.VK.Auth.getSession((function(e){return e}))};var _=function(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),n=t[0],c=t[1],o=Object(s.f)(),i=function(){var e=Object(f.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.initAuth();case 3:t=e.sent,console.log("Dispatch auth data if need: ",t),o.push("/"),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0),c(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("button",{type:"button",onClick:i,title:"login via vk"},"\u0412\u043e\u0439\u0442\u0438"),n&&r.a.createElement("p",null,n))},b=function(){return null===v.getSession()?r.a.createElement(_,null):r.a.createElement("div",null,"\u0412\u044b \u0443\u0436\u0435 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u043e\u0432\u0430\u043d\u044b, \u0432\u0435\u0440\u043d\u0438\u0442\u0435\u0441\u044c \u043d\u0430 ",r.a.createElement(i.b,{to:"/"},"\u0433\u043b\u0430\u0432\u043d\u0443\u044e"))},g=n(10),E=n.n(g),k=function(e){var t=e.setSearchString,n=Object(a.useState)(""),c=Object(u.a)(n,2),o=c[0],i=c[1],s=Object(a.useState)(!1),l=Object(u.a)(s,2),m=l[0],f=l[1];return r.a.createElement("div",{className:E.a.searchBar},r.a.createElement("input",{value:o,onChange:function(e){i(e.target.value),m&&t(e.target.value)},type:"text",className:E.a.input,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f \u0434\u0440\u0443\u0433\u0430"}),r.a.createElement("button",{type:"button",onClick:function(){return t(o)},className:E.a.button},"\u041d\u0430\u0439\u0442\u0438"),r.a.createElement("button",{type:"button",onClick:function(){t(""),i("")},className:E.a.button},"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c"),r.a.createElement("input",{id:"search-bar-dynamic-toggle",type:"checkbox",value:m,onChange:function(){return f(!m)},className:E.a.checkbox}),r.a.createElement("label",{htmlFor:"search-bar-dynamic-toggle",className:E.a.checkboxLabel},r.a.createElement("span",null,"\u0418\u0441\u043a\u0430\u0442\u044c \u0434\u0438\u043d\u0430\u043c\u0438\u0447\u0435\u0441\u043a\u0438")))},w=n(12),O=n.n(w),j=function(e){var t=e.image,n=e.name,a=e.surname,c=e.id;return r.a.createElement("a",{href:"https://vk.com/id".concat(c),target:"_blank",rel:"noreferrer noopener",className:O.a.card},r.a.createElement("img",{className:O.a.avatar,src:t,width:"100",height:"100",title:"\u0410\u0432\u0430\u0442\u0430\u0440 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f ".concat(n," ").concat(a),alt:"\u0410\u0432\u0430\u0442\u0430\u0440 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f ".concat(n," ").concat(a)}),r.a.createElement("p",{className:O.a.userName},"".concat(n," ").concat(a)))},N=n(8),y=n.n(N),S=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(null),i=Object(u.a)(o,2),l=i[0],m=i[1],f=Object(a.useState)(""),h=Object(u.a)(f,2),d=h[0],p=h[1],_=Object(s.f)();Object(a.useEffect)((function(){var e={user_ids:v.getSession().mid,fields:"photo_200"};v.callApi("users.get",e).then((function(e){return m(e.response[0])})).catch((function(e){return console.error(e)}))}),[]),Object(a.useEffect)((function(){if(null!==l){v.callApi("friends.get",{fields:"first_name, last_name, photo_100"}).then((function(e){return c(e.response.items)})).catch((function(e){return console.error(e)}))}}),[l]);return r.a.createElement("div",{className:y.a.main},r.a.createElement("button",{type:"button",onClick:function(){return v.killAuth().then((function(){return _.push("/login")})).catch((function(e){return console.error(e)}))},className:y.a.logout},"\u0412\u044b\u0439\u0442\u0438"),l&&r.a.createElement("div",{className:y.a.userWrapper},r.a.createElement("a",{href:"https://vk.com/id".concat(l.id),target:"_blank",rel:"noreferrer noopener",className:y.a.userLinkWrapper},r.a.createElement("img",{className:y.a.loginedUserAvatar,src:l.photo_200,alt:"\u0410\u0432\u0430\u0442\u0430\u0440 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f ".concat(l.first_name),width:"200",height:"200"}),r.a.createElement("p",{className:y.a.loginedUserName},"".concat(l.first_name," ").concat(l.last_name)))),n.length>0&&r.a.createElement(k,{setSearchString:p}),d&&r.a.createElement("p",null,'\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b \u043f\u043e\u0438\u0441\u043a\u0430 \u043f\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0443: "',d,'"'),r.a.createElement("div",{className:y.a.cards},""===d?n.map((function(e){var t=e.id,n=e.first_name,a=e.last_name,c=e.photo_100;return r.a.createElement(j,{key:t,image:c,id:t,name:n,surname:a})})):n.filter((function(e){var t=e.first_name,n=e.last_name,a="".concat(t," ").concat(n).toLowerCase();return new RegExp(d.toLowerCase(),"g").test(a)})).map((function(e){var t=e.id,n=e.first_name,a=e.last_name,c=e.photo_100;return r.a.createElement(j,{key:t,image:c,id:t,name:n,surname:a})}))))},A=function(){return null===v.getSession()?r.a.createElement("div",null,"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430 ",r.a.createElement(i.b,{to:"/login"},r.a.createElement("b",null,"\u0432\u043e\u0439\u0434\u0438\u0442\u0435")),", \u0447\u0442\u043e\u0431\u044b \u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c"):r.a.createElement(S,null)},x="initial",C="loading",V="error",K="success";n(37);var B=function(){var e=Object(a.useState)(x),t=Object(u.a)(e,2),n=t[0],c=t[1],o=Object(s.f)();return Object(a.useEffect)((function(){c(C),v.isAvailable().then((function(){v.getLoginStatus().then((function(e){"connected"!==e.status&&o.push("/login"),c(K)})).catch((function(e){console.error(e),c(V)}))})).catch((function(e){console.error(e),c(V)}))}),[]),n===x?r.a.createElement("div",null,"Welcome. App is starting.."):n===C?r.a.createElement("div",null,"Checking is vk auth available"):n===V?r.a.createElement("div",null,"Oops, VK api is not available, try to reload page"):r.a.createElement(r.a.Fragment,null,r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/",component:A}),r.a.createElement(s.a,{path:"/login",component:b})))};n(38);v.subscribeVkInit(7299169),o.a.render(r.a.createElement(i.a,{basename:"/vk-api-check"},r.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,t,n){e.exports={main:"main_main__1j8rY",userWrapper:"main_userWrapper__2ddZn",userLinkWrapper:"main_userLinkWrapper__29ecm",loginedUserAvatar:"main_loginedUserAvatar__3lvOO",loginedUserName:"main_loginedUserName__BCH_f",cards:"main_cards__1HhsC",logout:"main_logout__28enz"}}},[[26,1,2]]]);
//# sourceMappingURL=main.5611c14f.chunk.js.map