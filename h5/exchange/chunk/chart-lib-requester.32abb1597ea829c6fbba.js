(window.webpackJsonp=window.webpackJsonp||[]).push([[31,27],{253:function(e,t,n){"use strict";var a=n(14),r=n(20);a(t,"__esModule",{value:!0}),t.getErrorMessage=function(e){if(void 0===e)return"";if("string"==typeof e)return e;return e.message},t.logMessage=function(e){if(u){var t,n,a=new Date;console.log((0,o.default)(t=(0,o.default)(n="".concat(a.toLocaleTimeString(),".")).call(n,a.getMilliseconds(),"> ")).call(t,e))}};var o=r(n(158)),u=!1},264:function(e,t,n){"use strict";var a=n(14),r=n(20);a(t,"__esModule",{value:!0}),t.Requester=void 0;var o=r(n(162)),u=r(n(159)),s=r(n(158)),i=r(n(42)),c=r(n(43)),l=n(253),d=function(){function e(t){(0,i.default)(this,e),t&&(this._headers=t)}return(0,c.default)(e,[{key:"sendRequest",value:function(e,t,n){var a;if(void 0!==n){var r=(0,o.default)(n);0!==r.length&&(t+="?"),t+=(0,u.default)(r).call(r,(function(e){var t;return(0,s.default)(t="".concat(encodeURIComponent(e),"=")).call(t,encodeURIComponent(n[e].toString()))})).join("&")}(0,l.logMessage)("New request: "+t);var i={credentials:"same-origin"};return void 0!==this._headers&&(i.headers=this._headers),fetch((0,s.default)(a="".concat(e,"/")).call(a,t),i).then((function(e){return e.text()})).then((function(e){return JSON.parse(e)}))}}]),e}();t.Requester=d}}]);