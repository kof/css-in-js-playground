webpackJsonp([6],{"/home/travis/build/DSchau/css-in-js-playground/node_modules/source-map-loader/index.js!/home/travis/build/DSchau/css-in-js-playground/node_modules/webfontloader/webfontloader.js":function(t,n,i){var e;!function(){function o(t,n,i){return t.call.apply(t.bind,arguments)}function a(t,n,i){if(!t)throw Error();if(2<arguments.length){var e=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,e),t.apply(n,i)}}return function(){return t.apply(n,arguments)}}function s(t,n,i){return s=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?o:a,s.apply(null,arguments)}function r(t,n){this.a=t,this.o=n||t,this.c=this.o.document}function c(t,n,i,e){if(n=t.c.createElement(n),i)for(var o in i)i.hasOwnProperty(o)&&("style"==o?n.style.cssText=i[o]:n.setAttribute(o,i[o]));return e&&n.appendChild(t.c.createTextNode(e)),n}function f(t,n,i){t=t.c.getElementsByTagName(n)[0],t||(t=document.documentElement),t.insertBefore(i,t.lastChild)}function h(t){t.parentNode&&t.parentNode.removeChild(t)}function l(t,n,i){n=n||[],i=i||[];for(var e=t.className.split(/\s+/),o=0;o<n.length;o+=1){for(var a=!1,s=0;s<e.length;s+=1)if(n[o]===e[s]){a=!0;break}a||e.push(n[o])}for(n=[],o=0;o<e.length;o+=1){for(a=!1,s=0;s<i.length;s+=1)if(e[o]===i[s]){a=!0;break}a||n.push(e[o])}t.className=n.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function u(t,n){for(var i=t.className.split(/\s+/),e=0,o=i.length;e<o;e++)if(i[e]==n)return!0;return!1}function p(t){return t.o.location.hostname||t.a.location.hostname}function d(t,n,i){function e(){r&&o&&a&&(r(s),r=null)}n=c(t,"link",{rel:"stylesheet",href:n,media:"all"});var o=!1,a=!0,s=null,r=i||null;at?(n.onload=function(){o=!0,e()},n.onerror=function(){o=!0,s=Error("Stylesheet failed to load"),e()}):setTimeout(function(){o=!0,e()},0),f(t,"head",n)}function g(t,n,i,e){var o=t.c.getElementsByTagName("head")[0];if(o){var a=c(t,"script",{src:n}),s=!1;return a.onload=a.onreadystatechange=function(){s||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(s=!0,i&&i(null),a.onload=a.onreadystatechange=null,"HEAD"==a.parentNode.tagName&&o.removeChild(a))},o.appendChild(a),setTimeout(function(){s||(s=!0,i&&i(Error("Script load timeout")))},e||5e3),a}return null}function v(){this.a=0,this.c=null}function m(t){return t.a++,function(){t.a--,y(t)}}function w(t,n){t.c=n,y(t)}function y(t){0==t.a&&t.c&&(t.c(),t.c=null)}function b(t){this.a=t||"-"}function j(t,n){this.c=t,this.f=4,this.a="n";var i=(n||"n4").match(/^([nio])([1-9])$/i);i&&(this.a=i[1],this.f=parseInt(i[2],10))}function x(t){return S(t)+" "+t.f+"00 300px "+_(t.c)}function _(t){var n=[];t=t.split(/,\s*/);for(var i=0;i<t.length;i++){var e=t[i].replace(/['"]/g,"");-1!=e.indexOf(" ")||/^\d/.test(e)?n.push("'"+e+"'"):n.push(e)}return n.join(",")}function k(t){return t.a+t.f}function S(t){var n="normal";return"o"===t.a?n="oblique":"i"===t.a&&(n="italic"),n}function T(t){var n=4,i="n",e=null;return t&&((e=t.match(/(normal|oblique|italic)/i))&&e[1]&&(i=e[1].substr(0,1).toLowerCase()),(e=t.match(/([1-9]00|normal|bold)/i))&&e[1]&&(/bold/i.test(e[1])?n=7:/[1-9]00/.test(e[1])&&(n=parseInt(e[1].substr(0,1),10)))),i+n}function A(t,n){this.c=t,this.f=t.o.document.documentElement,this.h=n,this.a=new b("-"),this.j=!1!==n.events,this.g=!1!==n.classes}function C(t){t.g&&l(t.f,[t.a.c("wf","loading")]),E(t,"loading")}function N(t){if(t.g){var n=u(t.f,t.a.c("wf","active")),i=[],e=[t.a.c("wf","loading")];n||i.push(t.a.c("wf","inactive")),l(t.f,i,e)}E(t,"inactive")}function E(t,n,i){t.j&&t.h[n]&&(i?t.h[n](i.c,k(i)):t.h[n]())}function I(){this.c={}}function O(t,n,i){var e,o=[];for(e in n)if(n.hasOwnProperty(e)){var a=t.c[e];a&&o.push(a(n[e],i))}return o}function P(t,n){this.c=t,this.f=n,this.a=c(this.c,"span",{"aria-hidden":"true"},this.f)}function W(t){f(t.c,"body",t.a)}function B(t){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+_(t.c)+";font-style:"+S(t)+";font-weight:"+t.f+"00;"}function F(t,n,i,e,o,a){this.g=t,this.j=n,this.a=e,this.c=i,this.f=o||3e3,this.h=a||void 0}function D(t,n,i,e,o,a,s){this.v=t,this.B=n,this.c=i,this.a=e,this.s=s||"BESbswy",this.f={},this.w=o||3e3,this.u=a||null,this.m=this.j=this.h=this.g=null,this.g=new P(this.c,this.s),this.h=new P(this.c,this.s),this.j=new P(this.c,this.s),this.m=new P(this.c,this.s),t=new j(this.a.c+",serif",k(this.a)),t=B(t),this.g.a.style.cssText=t,t=new j(this.a.c+",sans-serif",k(this.a)),t=B(t),this.h.a.style.cssText=t,t=new j("serif",k(this.a)),t=B(t),this.j.a.style.cssText=t,t=new j("sans-serif",k(this.a)),t=B(t),this.m.a.style.cssText=t,W(this.g),W(this.h),W(this.j),W(this.m)}function L(){if(null===rt){var t=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);rt=!!t&&(536>parseInt(t[1],10)||536===parseInt(t[1],10)&&11>=parseInt(t[2],10))}return rt}function $(t,n,i){for(var e in st)if(st.hasOwnProperty(e)&&n===t.f[st[e]]&&i===t.f[st[e]])return!0;return!1}function q(t){var n,i=t.g.a.offsetWidth,e=t.h.a.offsetWidth;(n=i===t.f.serif&&e===t.f["sans-serif"])||(n=L()&&$(t,i,e)),n?ot()-t.A>=t.w?L()&&$(t,i,e)&&(null===t.u||t.u.hasOwnProperty(t.a.c))?M(t,t.v):M(t,t.B):H(t):M(t,t.v)}function H(t){setTimeout(s(function(){q(this)},t),50)}function M(t,n){setTimeout(s(function(){h(this.g.a),h(this.h.a),h(this.j.a),h(this.m.a),n(this.a)},t),0)}function z(t,n,i){this.c=t,this.a=n,this.f=0,this.m=this.j=!1,this.s=i}function G(t){0==--t.f&&t.j&&(t.m?(t=t.a,t.g&&l(t.f,[t.a.c("wf","active")],[t.a.c("wf","loading"),t.a.c("wf","inactive")]),E(t,"active")):N(t.a))}function J(t){this.j=t,this.a=new I,this.h=0,this.f=this.g=!0}function K(t,n,i,e,o){var a=0==--t.h;(t.f||t.g)&&setTimeout(function(){var t=o||null,r=e||null||{};if(0===i.length&&a)N(n.a);else{n.f+=i.length,a&&(n.j=a);var c,f=[];for(c=0;c<i.length;c++){var h=i[c],u=r[h.c],p=n.a,d=h;if(p.g&&l(p.f,[p.a.c("wf",d.c,k(d).toString(),"loading")]),E(p,"fontloading",d),p=null,null===ct)if(window.FontFace){var d=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent),g=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);ct=d?42<parseInt(d[1],10):!g}else ct=!1;p=ct?new F(s(n.g,n),s(n.h,n),n.c,h,n.s,u):new D(s(n.g,n),s(n.h,n),n.c,h,n.s,t,u),f.push(p)}for(c=0;c<f.length;c++)f[c].start()}},0)}function R(t,n,i){var e=[],o=i.timeout;C(n);var e=O(t.a,i,t.c),a=new z(t.c,n,o);for(t.h=e.length,n=0,i=e.length;n<i;n++)e[n].load(function(n,i,e){K(t,a,n,i,e)})}function U(t,n){this.c=t,this.a=n}function V(t,n){this.c=t,this.a=n}function X(t,n){this.c=t||ft,this.a=[],this.f=[],this.g=n||""}function Q(t,n){for(var i=n.length,e=0;e<i;e++){var o=n[e].split(":");3==o.length&&t.f.push(o.pop());var a="";2==o.length&&""!=o[1]&&(a=":"),t.a.push(o.join(a))}}function Y(t){if(0==t.a.length)throw Error("No fonts to load!");if(-1!=t.c.indexOf("kit="))return t.c;for(var n=t.a.length,i=[],e=0;e<n;e++)i.push(t.a[e].replace(/ /g,"+"));return n=t.c+"?family="+i.join("%7C"),0<t.f.length&&(n+="&subset="+t.f.join(",")),0<t.g.length&&(n+="&text="+encodeURIComponent(t.g)),n}function Z(t){this.f=t,this.a=[],this.c={}}function tt(t){for(var n=t.f.length,i=0;i<n;i++){var e=t.f[i].split(":"),o=e[0].replace(/\+/g," "),a=["n4"];if(2<=e.length){var s,r=e[1];if(s=[],r)for(var r=r.split(","),c=r.length,f=0;f<c;f++){var h;if(h=r[f],h.match(/^[\w-]+$/)){var l=pt.exec(h.toLowerCase());if(null==l)h="";else{if(h=l[2],h=null==h||""==h?"n":ut[h],null==(l=l[1])||""==l)l="4";else var u=lt[l],l=u||(isNaN(l)?"4":l.substr(0,1));h=[h,l].join("")}}else h="";h&&s.push(h)}0<s.length&&(a=s),3==e.length&&(e=e[2],s=[],e=e?e.split(","):s,0<e.length&&(e=ht[e[0]])&&(t.c[o]=e))}for(t.c[o]||(e=ht[o])&&(t.c[o]=e),e=0;e<a.length;e+=1)t.a.push(new j(o,a[e]))}}function nt(t,n){this.c=t,this.a=n}function it(t,n){this.c=t,this.a=n}function et(t,n){this.c=t,this.f=n,this.a=[]}var ot=Date.now||function(){return+new Date},at=!!window.FontFace;b.prototype.c=function(t){for(var n=[],i=0;i<arguments.length;i++)n.push(arguments[i].replace(/[\W_]+/g,"").toLowerCase());return n.join(this.a)},F.prototype.start=function(){var t=this.c.o.document,n=this,i=ot(),e=new Promise(function(e,o){function a(){ot()-i>=n.f?o():t.fonts.load(x(n.a),n.h).then(function(t){1<=t.length?e():setTimeout(a,25)},function(){o()})}a()}),o=null,a=new Promise(function(t,i){o=setTimeout(i,n.f)});Promise.race([a,e]).then(function(){o&&(clearTimeout(o),o=null),n.g(n.a)},function(){n.j(n.a)})};var st={D:"serif",C:"sans-serif"},rt=null;D.prototype.start=function(){this.f.serif=this.j.a.offsetWidth,this.f["sans-serif"]=this.m.a.offsetWidth,this.A=ot(),q(this)};var ct=null;z.prototype.g=function(t){var n=this.a;n.g&&l(n.f,[n.a.c("wf",t.c,k(t).toString(),"active")],[n.a.c("wf",t.c,k(t).toString(),"loading"),n.a.c("wf",t.c,k(t).toString(),"inactive")]),E(n,"fontactive",t),this.m=!0,G(this)},z.prototype.h=function(t){var n=this.a;if(n.g){var i=u(n.f,n.a.c("wf",t.c,k(t).toString(),"active")),e=[],o=[n.a.c("wf",t.c,k(t).toString(),"loading")];i||e.push(n.a.c("wf",t.c,k(t).toString(),"inactive")),l(n.f,e,o)}E(n,"fontinactive",t),G(this)},J.prototype.load=function(t){this.c=new r(this.j,t.context||this.j),this.g=!1!==t.events,this.f=!1!==t.classes,R(this,new A(this.c,t),t)},U.prototype.load=function(t){function n(){if(a["__mti_fntLst"+e]){var i,o=a["__mti_fntLst"+e](),s=[];if(o)for(var r=0;r<o.length;r++){var c=o[r].fontfamily;void 0!=o[r].fontStyle&&void 0!=o[r].fontWeight?(i=o[r].fontStyle+o[r].fontWeight,s.push(new j(c,i))):s.push(new j(c))}t(s)}else setTimeout(function(){n()},50)}var i=this,e=i.a.projectId,o=i.a.version;if(e){var a=i.c.o;g(this.c,(i.a.api||"https://fast.fonts.net/jsapi")+"/"+e+".js"+(o?"?v="+o:""),function(o){o?t([]):(a["__MonotypeConfiguration__"+e]=function(){return i.a},n())}).id="__MonotypeAPIScript__"+e}else t([])},V.prototype.load=function(t){var n,i,e=this.a.urls||[],o=this.a.families||[],a=this.a.testStrings||{},s=new v;for(n=0,i=e.length;n<i;n++)d(this.c,e[n],m(s));var r=[];for(n=0,i=o.length;n<i;n++)if(e=o[n].split(":"),e[1])for(var c=e[1].split(","),f=0;f<c.length;f+=1)r.push(new j(e[0],c[f]));else r.push(new j(e[0]));w(s,function(){t(r,a)})};var ft="https://fonts.googleapis.com/css",ht={latin:"BESbswy","latin-ext":"çöüğş",cyrillic:"йяЖ",greek:"αβΣ",khmer:"កខគ",Hanuman:"កខគ"},lt={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},ut={i:"i",italic:"i",n:"n",normal:"n"},pt=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/,dt={Arimo:!0,Cousine:!0,Tinos:!0};nt.prototype.load=function(t){var n=new v,i=this.c,e=new X(this.a.api,this.a.text),o=this.a.families;Q(e,o);var a=new Z(o);tt(a),d(i,Y(e),m(n)),w(n,function(){t(a.a,a.c,dt)})},it.prototype.load=function(t){var n=this.a.id,i=this.c.o;n?g(this.c,(this.a.api||"https://use.typekit.net")+"/"+n+".js",function(n){if(n)t([]);else if(i.Typekit&&i.Typekit.config&&i.Typekit.config.fn){n=i.Typekit.config.fn;for(var e=[],o=0;o<n.length;o+=2)for(var a=n[o],s=n[o+1],r=0;r<s.length;r++)e.push(new j(a,s[r]));try{i.Typekit.load({events:!1,classes:!1,async:!0})}catch(t){}t(e)}},2e3):t([])},et.prototype.load=function(t){var n=this.f.id,i=this.c.o,e=this;n?(i.__webfontfontdeckmodule__||(i.__webfontfontdeckmodule__={}),i.__webfontfontdeckmodule__[n]=function(n,i){for(var o=0,a=i.fonts.length;o<a;++o){var s=i.fonts[o];e.a.push(new j(s.name,T("font-weight:"+s.weight+";font-style:"+s.style)))}t(e.a)},g(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+p(this.c)+"/"+n+".js",function(n){n&&t([])})):t([])};var gt=new J(window);gt.a.c.custom=function(t,n){return new V(n,t)},gt.a.c.fontdeck=function(t,n){return new et(n,t)},gt.a.c.monotype=function(t,n){return new U(n,t)},gt.a.c.typekit=function(t,n){return new it(n,t)},gt.a.c.google=function(t,n){return new nt(n,t)};var vt={load:s(gt.load,gt)};void 0!==(e=function(){return vt}.call(n,i,n,t))&&(t.exports=e)}()}});
//# sourceMappingURL=6.5adbef810e3a1c1686dc.js.map