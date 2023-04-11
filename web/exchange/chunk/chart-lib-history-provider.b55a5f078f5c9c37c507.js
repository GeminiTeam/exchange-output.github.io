(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{267:function(t,e,r){"use strict";var n=r(26),o=r(30);n(e,"__esModule",{value:!0}),e.HistoryProvider=void 0;var a=o(r(808)),i=o(r(724)),u=o(r(272)),s=o(r(733)),c=o(r(717)),f=o(r(262)),l=o(r(839)),p=o(r(844)),d=o(r(848)),h=o(r(101)),v=o(r(102)),y=r(237),x=function(){function t(e,r,n){(0,h.default)(this,t),this._datafeedUrl=e,this._requester=r,this._limitedServerResponse=n}var e;return(0,v.default)(t,[{key:"historyDataPromise",value:function(t){return new i.default((function(e,r){webExchangeAjax({method:"get",url:(0,u.default)(t).call(t,"Market Middle Price")?"trade.getMiddlePrice":"trade.getCandleSticks",noHost:!0,handlerErr:!0,params:{size:1e3,period:"1m",instrumentId:"ETH/USDC",endTime:(0,s.default)(((0,u.default)(t).call(t,"Market Middle Price")?webApp.middlePriceArray[0].time:webApp.kDataArray[0].time)/1e3)},callback:function(t){t&&(0,c.default)(t)?e(t):e([])}})}))}},{key:"getHistoryData",value:function(t){return this.historyDataPromise(t).then((function(t){return t}))}},{key:"getBars",value:function(t,e,r){var n={symbol:t.ticker||"",resolution:e,from:r.from,to:r.to};return void 0!==r.countBack&&(n.countback=r.countBack),void 0!==t.currency_code&&(n.currencyCode=t.currency_code),void 0!==t.unit_id&&(n.unitId=t.unit_id),new i.default(function(){var e=(0,d.default)(a.default.mark((function e(n,o){var i,s,c;return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s=(0,u.default)(i=t.name).call(i,"Market Middle Price")?webApp.middlePriceArray:webApp.kDataArray,c={bars:[],meta:{noData:!1}},s[0]&&s[0].time>1e3*r.to?(c.meta.noData=!0,c.meta.nextTime=(new Date).getTime(),n(c)):(s.length>0?(c.bars=JSON.parse((0,f.default)(s)),c.meta.noData=!1):(c.meta.noData=!0,c.meta.nextTime=(new Date).getTime()),n(c));case 3:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}())}},{key:"_processTruncatedResponse",value:(e=(0,d.default)(a.default.mark((function t(e,r){var n,o,i,u,s,c;return a.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=e.bars.length,t.prev=1;case 2:if(!(this._limitedServerResponse&&this._limitedServerResponse.maxResponseLength>0&&this._limitedServerResponse.maxResponseLength===n&&r.from<r.to)){t.next=13;break}return r.countback&&(r.countback=r.countback-n),"earliestFirst"===this._limitedServerResponse.expectedOrder?r.from=Math.round(e.bars[e.bars.length-1].time/1e3):r.to=Math.round(e.bars[0].time/1e3),t.next=7,this._requester.sendRequest(this._datafeedUrl,"history",r);case 7:o=t.sent,i=this._processHistoryResponse(o),n=i.bars.length,"earliestFirst"===this._limitedServerResponse.expectedOrder?(u=e.bars).push.apply(u,(0,p.default)(i.bars)):(s=e.bars).unshift.apply(s,(0,p.default)(i.bars)),t.next=2;break;case 13:t.next=18;break;case 15:t.prev=15,t.t0=t.catch(1),(t.t0 instanceof Error||"string"==typeof t.t0)&&(c=(0,y.getErrorMessage)(t.t0),console.warn("HistoryProvider: getBars() warning during followup request, error=".concat(c)));case 18:case"end":return t.stop()}}),t,this,[[1,15]])}))),function(t,r){return e.apply(this,arguments)})},{key:"_processHistoryResponse",value:function(t){if("ok"!==t.s&&"no_data"!==t.s)throw new Error(t.errmsg);var e=[],r={noData:!1};if("no_data"===t.s)r.noData=!0,r.nextTime=t.nextTime;else for(var n=void 0!==t.v,o=void 0!==t.o,a=0;a<t.t.length;++a){var i={time:1e3*t.t[a],close:(0,l.default)(t.c[a]),open:(0,l.default)(t.c[a]),high:(0,l.default)(t.c[a]),low:(0,l.default)(t.c[a])};o&&(i.open=(0,l.default)(t.o[a]),i.high=(0,l.default)(t.h[a]),i.low=(0,l.default)(t.l[a])),n&&(i.volume=(0,l.default)(t.v[a])),e.push(i)}return{bars:e,meta:r}}}]),t}();e.HistoryProvider=x},717:function(t,e,r){t.exports=r(718)},718:function(t,e,r){var n=r(728);t.exports=n},721:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},725:function(t,e,r){t.exports=r(736)},726:function(t,e,r){var n=r(741);t.exports=n},728:function(t,e,r){r(729);var n=r(17);t.exports=n.Array.isArray},729:function(t,e,r){r(7)({target:"Array",stat:!0},{isArray:r(61)})},733:function(t,e,r){t.exports=r(751)},736:function(t,e,r){t.exports=r(737)},737:function(t,e,r){var n=r(738);t.exports=n},738:function(t,e,r){var n=r(739);t.exports=n},739:function(t,e,r){var n=r(740);r(73),t.exports=n},740:function(t,e,r){r(106),r(239);var n=r(143);t.exports=n},741:function(t,e,r){r(239),r(742);var n=r(17);t.exports=n.Array.from},742:function(t,e,r){var n=r(7),o=r(743);n({target:"Array",stat:!0,forced:!r(735)((function(t){Array.from(t)}))},{from:o})},743:function(t,e,r){"use strict";var n=r(104),o=r(31),a=r(37),i=r(744),u=r(248),s=r(107),c=r(42),f=r(75),l=r(249),p=r(143),d=Array;t.exports=function(t){var e=a(t),r=s(this),h=arguments.length,v=h>1?arguments[1]:void 0,y=void 0!==v;y&&(v=n(v,h>2?arguments[2]:void 0));var x,m,g,w,b,_,k=p(e),L=0;if(!k||this===d&&u(k))for(x=c(e),m=r?new this(x):d(x);x>L;L++)_=y?v(e[L],L):e[L],f(m,L,_);else for(b=(w=l(e,k)).next,m=r?new this:[];!(g=o(b,w)).done;L++)_=y?i(w,v,[g.value,L],!0):g.value,f(m,L,_);return m.length=L,m}},744:function(t,e,r){var n=r(33),o=r(250);t.exports=function(t,e,r,a){try{return a?e(n(r)[0],r[1]):e(r)}catch(e){o(t,"throw",e)}}},746:function(t,e,r){var n=r(10),o=r(77),a=r(47),i=r(721),u=n("".replace),s=RegExp("^["+i+"]+"),c=RegExp("(^|[^"+i+"])["+i+"]+$"),f=function(t){return function(e){var r=a(o(e));return 1&t&&(r=u(r,s,"")),2&t&&(r=u(r,c,"$1")),r}};t.exports={start:f(1),end:f(2),trim:f(3)}},749:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n},t.exports.__esModule=!0,t.exports.default=t.exports},750:function(t,e,r){t.exports=r(762)},751:function(t,e,r){var n=r(752);t.exports=n},752:function(t,e,r){r(753);var n=r(17);t.exports=n.parseInt},753:function(t,e,r){var n=r(7),o=r(754);n({global:!0,forced:parseInt!=o},{parseInt:o})},754:function(t,e,r){var n=r(27),o=r(9),a=r(10),i=r(47),u=r(746).trim,s=r(721),c=n.parseInt,f=n.Symbol,l=f&&f.iterator,p=/^[+-]?0x/i,d=a(p.exec),h=8!==c(s+"08")||22!==c(s+"0x16")||l&&!o((function(){c(Object(l))}));t.exports=h?function(t,e){var r=u(i(t));return c(r,e>>>0||(d(p,r)?16:10))}:c},758:function(t,e,r){t.exports=r(759)},759:function(t,e,r){t.exports=r(760)},760:function(t,e,r){var n=r(761);t.exports=n},761:function(t,e,r){var n=r(718);t.exports=n},762:function(t,e,r){t.exports=r(763)},763:function(t,e,r){var n=r(764);t.exports=n},764:function(t,e,r){var n=r(726);t.exports=n},765:function(t,e,r){var n=r(147),o=r(750),a=r(749);t.exports=function(t,e){var r;if(t){if("string"==typeof t)return a(t,e);var i=n(r=Object.prototype.toString.call(t)).call(r,8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?o(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?a(t,e):void 0}},t.exports.__esModule=!0,t.exports.default=t.exports},794:function(t,e,r){t.exports=r(810)},808:function(t,e,r){var n=r(809)();t.exports=n;try{regeneratorRuntime=n}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},809:function(t,e,r){var n=r(41).default,o=r(66),a=r(247),i=r(278),u=r(279),s=r(274),c=r(159),f=r(794),l=r(275),p=r(147);function d(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */t.exports=d=function(){return e},t.exports.__esModule=!0,t.exports.default=t.exports;var e={},r=Object.prototype,h=r.hasOwnProperty,v=o||function(t,e,r){t[e]=r.value},y="function"==typeof a?a:{},x=y.iterator||"@@iterator",m=y.asyncIterator||"@@asyncIterator",g=y.toStringTag||"@@toStringTag";function w(t,e,r){return o(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{w({},"")}catch(t){w=function(t,e,r){return t[e]=r}}function b(t,e,r,n){var o=e&&e.prototype instanceof L?e:L,a=i(o.prototype),u=new O(n||[]);return v(a,"_invoke",{value:j(t,r,u)}),a}function _(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=b;var k={};function L(){}function E(){}function A(){}var M={};w(M,x,(function(){return this}));var S=u&&u(u(N([])));S&&S!==r&&h.call(S,x)&&(M=S);var R=A.prototype=L.prototype=i(M);function T(t){var e;s(e=["next","throw","return"]).call(e,(function(e){w(t,e,(function(t){return this._invoke(e,t)}))}))}function D(t,e){var r;v(this,"_invoke",{value:function(o,a){function i(){return new e((function(r,i){!function r(o,a,i,u){var s=_(t[o],t,a);if("throw"!==s.type){var c=s.arg,f=c.value;return f&&"object"==n(f)&&h.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,i,u)}),(function(t){r("throw",t,i,u)})):e.resolve(f).then((function(t){c.value=t,i(c)}),(function(t){return r("throw",t,i,u)}))}u(s.arg)}(o,a,r,i)}))}return r=r?r.then(i,i):i()}})}function j(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return G()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var u=P(i,r);if(u){if(u===k)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=_(t,e,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===k)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}function P(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,P(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),k;var o=_(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,k;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,k):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,k)}function F(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function I(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],s(t).call(t,F,this),this.reset(!0)}function N(t){if(t){var e=t[x];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(h.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:G}}function G(){return{value:void 0,done:!0}}return E.prototype=A,v(R,"constructor",{value:A,configurable:!0}),v(A,"constructor",{value:E,configurable:!0}),E.displayName=w(A,g,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===E||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return c?c(t,A):(t.__proto__=A,w(t,g,"GeneratorFunction")),t.prototype=i(R),t},e.awrap=function(t){return{__await:t}},T(D.prototype),w(D.prototype,m,(function(){return this})),e.AsyncIterator=D,e.async=function(t,r,n,o,a){void 0===a&&(a=f);var i=new D(b(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},T(R),w(R,g,"Generator"),w(R,x,(function(){return this})),w(R,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return l(r).call(r),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=N,O.prototype={constructor:O,reset:function(t){var e;if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,s(e=this.tryEntries).call(e,I),!t)for(var r in this)"t"===r.charAt(0)&&h.call(this,r)&&!isNaN(+p(r).call(r,1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],a=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var i=h.call(o,"catchLoc"),u=h.call(o,"finallyLoc");if(i&&u){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&h.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,k):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),k},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),I(r),k}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;I(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:N(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),k}},e}t.exports=d,t.exports.__esModule=!0,t.exports.default=t.exports},810:function(t,e,r){t.exports=r(811)},811:function(t,e,r){var n=r(812);r(835),r(836),r(837),r(838),t.exports=n},812:function(t,e,r){var n=r(795);t.exports=n},835:function(t,e,r){r(796)},836:function(t,e,r){r(803)},837:function(t,e,r){"use strict";var n=r(7),o=r(716),a=r(722);n({target:"Promise",stat:!0,forced:!0},{try:function(t){var e=o.f(this),r=a(t);return(r.error?e.reject:e.resolve)(r.value),e.promise}})},838:function(t,e,r){r(804)},839:function(t,e,r){t.exports=r(840)},840:function(t,e,r){var n=r(841);t.exports=n},841:function(t,e,r){r(842);var n=r(17);t.exports=n.parseFloat},842:function(t,e,r){var n=r(7),o=r(843);n({global:!0,forced:parseFloat!=o},{parseFloat:o})},843:function(t,e,r){var n=r(27),o=r(9),a=r(10),i=r(47),u=r(746).trim,s=r(721),c=a("".charAt),f=n.parseFloat,l=n.Symbol,p=l&&l.iterator,d=1/f(s+"-0")!=-1/0||p&&!o((function(){f(Object(p))}));t.exports=d?function(t){var e=u(i(t)),r=f(e);return 0===r&&"-"==c(e,0)?-0:r}:f},844:function(t,e,r){var n=r(845),o=r(846),a=r(765),i=r(847);t.exports=function(t){return n(t)||o(t)||a(t)||i()},t.exports.__esModule=!0,t.exports.default=t.exports},845:function(t,e,r){var n=r(758),o=r(749);t.exports=function(t){if(n(t))return o(t)},t.exports.__esModule=!0,t.exports.default=t.exports},846:function(t,e,r){var n=r(247),o=r(725),a=r(750);t.exports=function(t){if(void 0!==n&&null!=o(t)||null!=t["@@iterator"])return a(t)},t.exports.__esModule=!0,t.exports.default=t.exports},847:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},t.exports.__esModule=!0,t.exports.default=t.exports},848:function(t,e,r){var n=r(794);function o(t,e,r,o,a,i,u){try{var s=t[i](u),c=s.value}catch(t){return void r(t)}s.done?e(c):n.resolve(c).then(o,a)}t.exports=function(t){return function(){var e=this,r=arguments;return new n((function(n,a){var i=t.apply(e,r);function u(t){o(i,n,a,u,s,"next",t)}function s(t){o(i,n,a,u,s,"throw",t)}u(void 0)}))}},t.exports.__esModule=!0,t.exports.default=t.exports}}]);