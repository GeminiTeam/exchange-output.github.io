(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{275:function(t,e,r){"use strict";var n=r(20),o=r(27);n(e,"__esModule",{value:!0}),e.HistoryProvider=void 0;var a=o(r(833)),i=o(r(756)),u=o(r(280)),s=o(r(771)),c=o(r(746)),l=o(r(149)),f=o(r(249)),p=o(r(270)),d=o(r(864)),h=o(r(869)),v=o(r(873)),x=o(r(47)),y=o(r(48)),m=r(242),g=r(247),w=function(){function t(e,r,n){(0,x.default)(this,t),this._datafeedUrl=e,this._requester=r,this._limitedServerResponse=n}var e;return(0,y.default)(t,[{key:"historyDataPromise",value:function(t){return new i.default((function(e,r){var n={url:(0,u.default)(t).call(t,"Market Middle Price")?"/api/exchange/webapi/getMiddlePrice":"/api/exchange/webapi/getCandleSticks",method:"GET",params:{size:1e3,period:g.instrumentStore.currentInterval,instrumentId:g.instrumentStore.currentInstrumentId,endTime:(0,s.default)(((0,u.default)(t).call(t,"Market Middle Price")?webApp.middlePriceArray[0].time:webApp.kDataArray[0].time)/1e3)}};g.jsbridgeStore.jsbridgeStatus?window.flutter_inappwebview.callHandler("httpRequest",n).then((function(t){alert(t),null!=t&&t.data&&(0,c.default)(null==t?void 0:t.data)?e(null==t?void 0:t.data):e([])})):e([])}))}},{key:"getHistoryData",value:function(t){return this.historyDataPromise(t).then((function(t){return t}))}},{key:"getBars",value:function(t,e,r){var n=this,o={symbol:t.ticker||"",resolution:e,from:r.from,to:r.to};return void 0!==r.countBack&&(o.countback=r.countBack),void 0!==t.currency_code&&(o.currencyCode=t.currency_code),void 0!==t.unit_id&&(o.unitId=t.unit_id),new i.default(function(){var e=(0,v.default)(a.default.mark((function e(o,i){var s,c,d,h,v,x,y,m;return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=(0,u.default)(s=t.name).call(s,"Market Middle Price")?webApp.middlePriceArray:webApp.kDataArray,d={bars:[],meta:{noData:!1}},!(c[0]&&c[0].time>1e3*r.to)){e.next=19;break}return e.next=5,n.getHistoryData(t.name);case 5:h=e.sent,v=0,x=h.length-1;case 8:if(!(x>0)){e.next=15;break}if(!(h[x].time<c[0].time)){e.next=12;break}return v=x,e.abrupt("break",15);case 12:x--,e.next=8;break;case 15:h.length>0&&v>0?(c=(0,l.default)(y=(0,f.default)(h).call(h,0,v+1)).call(y,c),(0,u.default)(m=t.name).call(m,"Market Middle Price")?webApp.middlePriceArray=c:webApp.kDataArray=c,d.bars=JSON.parse((0,p.default)(c)),d.meta.noData=!1):(d.meta.noData=!0,d.meta.nextTime=JSON.parse((0,p.default)(g.serverTimeStore.currentServerTime))),o(d),e.next=21;break;case 19:c.length>0?(d.bars=JSON.parse((0,p.default)(c)),d.meta.noData=!1):(d.meta.noData=!0,d.meta.nextTime=JSON.parse((0,p.default)(g.serverTimeStore.currentServerTime))),o(d);case 21:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}())}},{key:"_processTruncatedResponse",value:(e=(0,v.default)(a.default.mark((function t(e,r){var n,o,i,u,s,c;return a.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=e.bars.length,t.prev=1;case 2:if(!(this._limitedServerResponse&&this._limitedServerResponse.maxResponseLength>0&&this._limitedServerResponse.maxResponseLength===n&&r.from<r.to)){t.next=13;break}return r.countback&&(r.countback=r.countback-n),"earliestFirst"===this._limitedServerResponse.expectedOrder?r.from=Math.round(e.bars[e.bars.length-1].time/1e3):r.to=Math.round(e.bars[0].time/1e3),t.next=7,this._requester.sendRequest(this._datafeedUrl,"history",r);case 7:o=t.sent,i=this._processHistoryResponse(o),n=i.bars.length,"earliestFirst"===this._limitedServerResponse.expectedOrder?(u=e.bars).push.apply(u,(0,h.default)(i.bars)):(s=e.bars).unshift.apply(s,(0,h.default)(i.bars)),t.next=2;break;case 13:t.next=18;break;case 15:t.prev=15,t.t0=t.catch(1),(t.t0 instanceof Error||"string"==typeof t.t0)&&(c=(0,m.getErrorMessage)(t.t0),console.warn("HistoryProvider: getBars() warning during followup request, error=".concat(c)));case 18:case"end":return t.stop()}}),t,this,[[1,15]])}))),function(t,r){return e.apply(this,arguments)})},{key:"_processHistoryResponse",value:function(t){if("ok"!==t.s&&"no_data"!==t.s)throw new Error(t.errmsg);var e=[],r={noData:!1};if("no_data"===t.s)r.noData=!0,r.nextTime=t.nextTime;else for(var n=void 0!==t.v,o=void 0!==t.o,a=0;a<t.t.length;++a){var i={time:1e3*t.t[a],close:(0,d.default)(t.c[a]),open:(0,d.default)(t.c[a]),high:(0,d.default)(t.c[a]),low:(0,d.default)(t.c[a])};o&&(i.open=(0,d.default)(t.o[a]),i.high=(0,d.default)(t.h[a]),i.low=(0,d.default)(t.l[a])),n&&(i.volume=(0,d.default)(t.v[a])),e.push(i)}return{bars:e,meta:r}}}]),t}();e.HistoryProvider=w},727:function(t,e,r){t.exports=r(736)},729:function(t,e,r){var n=r(734);t.exports=n},730:function(t,e,r){var n=r(741);t.exports=n},734:function(t,e,r){r(735);var n=r(18);t.exports=n.Array.isArray},735:function(t,e,r){r(7)({target:"Array",stat:!0},{isArray:r(63)})},736:function(t,e,r){t.exports=r(737)},737:function(t,e,r){var n=r(738);t.exports=n},738:function(t,e,r){var n=r(739);t.exports=n},739:function(t,e,r){var n=r(740);r(77),t.exports=n},740:function(t,e,r){r(108),r(246);var n=r(151);t.exports=n},741:function(t,e,r){r(246),r(742);var n=r(18);t.exports=n.Array.from},742:function(t,e,r){var n=r(7),o=r(743);n({target:"Array",stat:!0,forced:!r(745)((function(t){Array.from(t)}))},{from:o})},743:function(t,e,r){"use strict";var n=r(107),o=r(31),a=r(38),i=r(744),u=r(253),s=r(109),c=r(43),l=r(79),f=r(254),p=r(151),d=Array;t.exports=function(t){var e=a(t),r=s(this),h=arguments.length,v=h>1?arguments[1]:void 0,x=void 0!==v;x&&(v=n(v,h>2?arguments[2]:void 0));var y,m,g,w,b,_,k=p(e),L=0;if(!k||this===d&&u(k))for(y=c(e),m=r?new this(y):d(y);y>L;L++)_=x?v(e[L],L):e[L],l(m,L,_);else for(b=(w=f(e,k)).next,m=r?new this:[];!(g=o(b,w)).done;L++)_=x?i(w,v,[g.value,L],!0):g.value,l(m,L,_);return m.length=L,m}},744:function(t,e,r){var n=r(32),o=r(255);t.exports=function(t,e,r,a){try{return a?e(n(r)[0],r[1]):e(r)}catch(e){o(t,"throw",e)}}},746:function(t,e,r){t.exports=r(729)},749:function(t,e,r){t.exports=r(763)},750:function(t,e,r){var n=r(155),o=r(751),a=r(752);t.exports=function(t,e){var r;if(t){if("string"==typeof t)return a(t,e);var i=n(r=Object.prototype.toString.call(t)).call(r,8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?o(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?a(t,e):void 0}},t.exports.__esModule=!0,t.exports.default=t.exports},751:function(t,e,r){t.exports=r(767)},752:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n},t.exports.__esModule=!0,t.exports.default=t.exports},753:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},763:function(t,e,r){t.exports=r(764)},764:function(t,e,r){var n=r(765);t.exports=n},765:function(t,e,r){var n=r(729);t.exports=n},767:function(t,e,r){t.exports=r(768)},768:function(t,e,r){var n=r(769);t.exports=n},769:function(t,e,r){var n=r(730);t.exports=n},771:function(t,e,r){t.exports=r(776)},773:function(t,e,r){var n=r(10),o=r(82),a=r(50),i=r(753),u=n("".replace),s=RegExp("^["+i+"]+"),c=RegExp("(^|[^"+i+"])["+i+"]+$"),l=function(t){return function(e){var r=a(o(e));return 1&t&&(r=u(r,s,"")),2&t&&(r=u(r,c,"$1")),r}};t.exports={start:l(1),end:l(2),trim:l(3)}},776:function(t,e,r){var n=r(777);t.exports=n},777:function(t,e,r){r(778);var n=r(18);t.exports=n.parseInt},778:function(t,e,r){var n=r(7),o=r(779);n({global:!0,forced:parseInt!=o},{parseInt:o})},779:function(t,e,r){var n=r(28),o=r(9),a=r(10),i=r(50),u=r(773).trim,s=r(753),c=n.parseInt,l=n.Symbol,f=l&&l.iterator,p=/^[+-]?0x/i,d=a(p.exec),h=8!==c(s+"08")||22!==c(s+"0x16")||f&&!o((function(){c(Object(f))}));t.exports=h?function(t,e){var r=u(i(t));return c(r,e>>>0||(d(p,r)?16:10))}:c},815:function(t,e,r){t.exports=r(835)},833:function(t,e,r){var n=r(834)();t.exports=n;try{regeneratorRuntime=n}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},834:function(t,e,r){var n=r(42).default,o=r(68),a=r(248),i=r(287),u=r(288),s=r(282),c=r(167),l=r(815),f=r(283),p=r(155);function d(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */t.exports=d=function(){return e},t.exports.__esModule=!0,t.exports.default=t.exports;var e={},r=Object.prototype,h=r.hasOwnProperty,v=o||function(t,e,r){t[e]=r.value},x="function"==typeof a?a:{},y=x.iterator||"@@iterator",m=x.asyncIterator||"@@asyncIterator",g=x.toStringTag||"@@toStringTag";function w(t,e,r){return o(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{w({},"")}catch(t){w=function(t,e,r){return t[e]=r}}function b(t,e,r,n){var o=e&&e.prototype instanceof L?e:L,a=i(o.prototype),u=new F(n||[]);return v(a,"_invoke",{value:P(t,r,u)}),a}function _(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=b;var k={};function L(){}function S(){}function A(){}var E={};w(E,y,(function(){return this}));var M=u&&u(u(N([])));M&&M!==r&&h.call(M,y)&&(E=M);var T=A.prototype=L.prototype=i(E);function R(t){var e;s(e=["next","throw","return"]).call(e,(function(e){w(t,e,(function(t){return this._invoke(e,t)}))}))}function I(t,e){var r;v(this,"_invoke",{value:function(o,a){function i(){return new e((function(r,i){!function r(o,a,i,u){var s=_(t[o],t,a);if("throw"!==s.type){var c=s.arg,l=c.value;return l&&"object"==n(l)&&h.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,i,u)}),(function(t){r("throw",t,i,u)})):e.resolve(l).then((function(t){c.value=t,i(c)}),(function(t){return r("throw",t,i,u)}))}u(s.arg)}(o,a,r,i)}))}return r=r?r.then(i,i):i()}})}function P(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return G()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var u=j(i,r);if(u){if(u===k)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=_(t,e,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===k)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}function j(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,j(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),k;var o=_(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,k;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,k):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,k)}function D(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function F(t){this.tryEntries=[{tryLoc:"root"}],s(t).call(t,D,this),this.reset(!0)}function N(t){if(t){var e=t[y];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(h.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:G}}function G(){return{value:void 0,done:!0}}return S.prototype=A,v(T,"constructor",{value:A,configurable:!0}),v(A,"constructor",{value:S,configurable:!0}),S.displayName=w(A,g,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===S||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return c?c(t,A):(t.__proto__=A,w(t,g,"GeneratorFunction")),t.prototype=i(T),t},e.awrap=function(t){return{__await:t}},R(I.prototype),w(I.prototype,m,(function(){return this})),e.AsyncIterator=I,e.async=function(t,r,n,o,a){void 0===a&&(a=l);var i=new I(b(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},R(T),w(T,g,"Generator"),w(T,y,(function(){return this})),w(T,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return f(r).call(r),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=N,F.prototype={constructor:F,reset:function(t){var e;if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,s(e=this.tryEntries).call(e,O),!t)for(var r in this)"t"===r.charAt(0)&&h.call(this,r)&&!isNaN(+p(r).call(r,1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],a=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var i=h.call(o,"catchLoc"),u=h.call(o,"finallyLoc");if(i&&u){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&h.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,k):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),k},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),k}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:N(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),k}},e}t.exports=d,t.exports.__esModule=!0,t.exports.default=t.exports},835:function(t,e,r){t.exports=r(836)},836:function(t,e,r){var n=r(837);r(860),r(861),r(862),r(863),t.exports=n},837:function(t,e,r){var n=r(816);t.exports=n},860:function(t,e,r){r(817)},861:function(t,e,r){r(824)},862:function(t,e,r){"use strict";var n=r(7),o=r(731),a=r(754);n({target:"Promise",stat:!0,forced:!0},{try:function(t){var e=o.f(this),r=a(t);return(r.error?e.reject:e.resolve)(r.value),e.promise}})},863:function(t,e,r){r(825)},864:function(t,e,r){t.exports=r(865)},865:function(t,e,r){var n=r(866);t.exports=n},866:function(t,e,r){r(867);var n=r(18);t.exports=n.parseFloat},867:function(t,e,r){var n=r(7),o=r(868);n({global:!0,forced:parseFloat!=o},{parseFloat:o})},868:function(t,e,r){var n=r(28),o=r(9),a=r(10),i=r(50),u=r(773).trim,s=r(753),c=a("".charAt),l=n.parseFloat,f=n.Symbol,p=f&&f.iterator,d=1/l(s+"-0")!=-1/0||p&&!o((function(){l(Object(p))}));t.exports=d?function(t){var e=u(i(t)),r=l(e);return 0===r&&"-"==c(e,0)?-0:r}:l},869:function(t,e,r){var n=r(870),o=r(871),a=r(750),i=r(872);t.exports=function(t){return n(t)||o(t)||a(t)||i()},t.exports.__esModule=!0,t.exports.default=t.exports},870:function(t,e,r){var n=r(749),o=r(752);t.exports=function(t){if(n(t))return o(t)},t.exports.__esModule=!0,t.exports.default=t.exports},871:function(t,e,r){var n=r(248),o=r(727),a=r(751);t.exports=function(t){if(void 0!==n&&null!=o(t)||null!=t["@@iterator"])return a(t)},t.exports.__esModule=!0,t.exports.default=t.exports},872:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},t.exports.__esModule=!0,t.exports.default=t.exports},873:function(t,e,r){var n=r(815);function o(t,e,r,o,a,i,u){try{var s=t[i](u),c=s.value}catch(t){return void r(t)}s.done?e(c):n.resolve(c).then(o,a)}t.exports=function(t){return function(){var e=this,r=arguments;return new n((function(n,a){var i=t.apply(e,r);function u(t){o(i,n,a,u,s,"next",t)}function s(t){o(i,n,a,u,s,"throw",t)}u(void 0)}))}},t.exports.__esModule=!0,t.exports.default=t.exports}}]);