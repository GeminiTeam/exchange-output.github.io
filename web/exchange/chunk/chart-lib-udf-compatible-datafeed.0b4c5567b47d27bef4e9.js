(window.webpackJsonp=window.webpackJsonp||[]).push([[16,12],{242:function(e,t,r){"use strict";var n=r(22),u=r(27);n(t,"__esModule",{value:!0}),t.QuotesProvider=void 0;var a=u(r(726)),o=u(r(72)),i=u(r(73)),s=r(237),f=function(){function e(t,r){(0,o.default)(this,e),this._datafeedUrl=t,this._requester=r}return(0,i.default)(e,[{key:"getQuotes",value:function(e){var t=this;return new a.default((function(r,n){t._requester.sendRequest(t._datafeedUrl,"quotes",{symbols:e}).then((function(e){"ok"===e.s?r(e.d):n(e.errmsg)})).catch((function(e){var t=(0,s.getErrorMessage)(e);(0,s.logMessage)("QuotesProvider: getQuotes failed, error=".concat(t)),n("network error: ".concat(t))}))}))}}]),e}();t.QuotesProvider=f},243:function(e,t,r){"use strict";var n=r(22),u=r(27);n(t,"__esModule",{value:!0}),t.Requester=void 0;var a=u(r(148)),o=u(r(145)),i=u(r(144)),s=u(r(72)),f=u(r(73)),l=r(237),c=function(){function e(t){(0,s.default)(this,e),t&&(this._headers=t)}return(0,f.default)(e,[{key:"sendRequest",value:function(e,t,r){var n;if(void 0!==r){var u=(0,a.default)(r);0!==u.length&&(t+="?"),t+=(0,o.default)(u).call(u,(function(e){var t;return(0,i.default)(t="".concat(encodeURIComponent(e),"=")).call(t,encodeURIComponent(r[e].toString()))})).join("&")}(0,l.logMessage)("New request: "+t);var s={credentials:"same-origin"};return void 0!==this._headers&&(s.headers=this._headers),fetch((0,i.default)(n="".concat(e,"/")).call(n,t),s).then((function(e){return e.text()})).then((function(e){return JSON.parse(e)}))}}]),e}();t.Requester=c},252:function(e,t,r){"use strict";var n=r(263),u=r(22),a=r(27);u(t,"__esModule",{value:!0}),t.UDFCompatibleDatafeed=void 0;var o=a(r(73)),i=a(r(72)),s=a(r(264)),f=a(r(265)),l=a(r(266)),c=r(253),d=r(242),v=r(243);function h(e){var t=function(){if("undefined"==typeof Reflect||!n)return!1;if(n.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(n(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,u=(0,l.default)(e);if(t){var a=(0,l.default)(this).constructor;r=n(u,arguments,a)}else r=u.apply(this,arguments);return(0,f.default)(this,r)}}var p=function(e){(0,s.default)(r,e);var t=h(r);function r(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e4,u=arguments.length>2?arguments[2]:void 0;(0,i.default)(this,r);var a=new v.Requester,o=new d.QuotesProvider(e,a);return t.call(this,e,o,a,n,u)}return(0,o.default)(r)}(c.UDFCompatibleDatafeedBase);t.UDFCompatibleDatafeed=p}}]);