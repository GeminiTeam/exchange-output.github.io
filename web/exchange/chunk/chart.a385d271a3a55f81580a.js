(window.webpackJsonp=window.webpackJsonp||[]).push([[6,7,13,17,18,19],{111:function(e,t,n){"use strict";var r=n(42),a=n(106),i=n(22),o=n(41);i(t,"__esModule",{value:!0}),t.default=void 0;var u=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=c(t);if(n&&n.has(e))return n.get(e);var a={},u=i&&o;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var s=u?o(e,l):null;s&&(s.get||s.set)?i(a,l,s):a[l]=e[l]}a.default=e,n&&n.set(e,a);return a}(n(0)),l=n(243);function c(e){if("function"!=typeof a)return null;var t=new a,n=new a;return(c=function(e){return e?n:t})(e)}var s=function(e){return u.createElement(l.LoadingWrapper,{className:e.isReady?"hide":""},u.createElement("div",{className:"loadingContent"},u.createElement("span",null),u.createElement("span",null),u.createElement("span",null),u.createElement("span",null),u.createElement("span",null)))};t.default=s},115:function(e,t,n){"use strict";(function(e,r){var a=n(42),i=n(106),o=n(22),u=n(41),l=n(27);o(t,"__esModule",{value:!0}),t.default=void 0;var c=l(n(145)),s=l(n(146)),d=l(n(155)),f=l(n(276)),p=l(n(750)),h=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var n=w(t);if(n&&n.has(e))return n.get(e);var r={},i=o&&u;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var c=i?u(e,l):null;c&&(c.get||c.set)?o(r,l,c):r[l]=e[l]}r.default=e,n&&n.set(e,r);return r}(n(0)),v=n(254),m=l(n(111)),g=n(255),b=n(758),y=n(253);function w(e){if("function"!=typeof i)return null;var t=new i,n=new i;return(w=function(e){return e?n:t})(e)}var _=n(715),S=null,x=[],P=function(t){var n=(0,h.useState)(!1),a=(0,p.default)(n,2),i=a[0],o=a[1],u=(0,h.useState)(!1),l=(0,p.default)(u,2),w=l[0],P=l[1],k=(0,b.useObserver)(y.instrumentStore),A=k.currentInstrumentId,O=k.currentInterval,M=k.kLineAndMiddlePriceStatus,E=k.pricePrecision,j=k.volumePrecision,I=(0,h.useRef)(null);(0,h.useEffect)((function(){window.webApp.getCandleStick=function(e){var t=e;try{t=JSON.parse(e)}catch(e){}window.webApp.kDataArray=t.kLine,window.webApp.middlePriceArray=t.middlePrice,"1"==t.status&&(y.instrumentStore.changeStatus(!0),y.instrumentStore.changePricePrecision(t.pricePrecision),y.instrumentStore.changeVolumePrecision(t.volumePrecision))},window.webApp.changeSymbol=function(e){var t=e;try{t=JSON.parse(e)}catch(e){}y.instrumentStore.changeInstrumentId(t)},window.webApp.changeInterval=function(e){var t=e;try{t=JSON.parse(e)}catch(e){}y.instrumentStore.changeInterval(t)},e.loadScript("".concat(r.widget.library_path,"charting_library.standalone.js"),(function(){P(!0)}),(function(){P(!1)}))}),[]),(0,h.useEffect)((function(){var e;M&&w&&(alert((0,c.default)(e="first load: ".concat(A," ")).call(e,O)),y.instrumentStore.changeStatus(!1),P(!1),C())}),[w,M]),(0,h.useEffect)((function(){S&&O&&(alert("change interval: ".concat(O)),S.chart().setResolution(O),S.chart().setChartType(1))}),[O]),(0,h.useEffect)((function(){i&&A&&M&&(alert("change instrumentId: ".concat(A)),y.instrumentStore.changeStatus(!1),o(!1),C())}),[A,M]),(0,h.useEffect)((function(){r.symbol.pricescale=Math.pow(10,E),r.symbol.volume_precision=j}),[E,j]);var C=function(){S&&(S.remove(),S=null),(!window.webApp.kDataArray||window.webApp.kDataArray.length<=0)&&(window.webApp.kDataArray=_,window.webApp.middlePriceArray=_);var e=(0,f.default)(r.widget,{symbol:A||"BTC/USDT",interval:O||"15",datafeed:new g.UDFCompatibleDatafeed(""),container:"tv_chart_container"});(S=new TradingView.widget(e)).onChartReady((function(){o(!0),R()}))},R=function(){x&&x.length>0&&((0,s.default)(x).call(x,(function(e){S.chart().removeEntity(e)})),x=[]);var e=r.ma.time;(0,d.default)(e).call(e,(function(e,t){S.chart().createStudy("Moving Average",!1,!1,{length:e},{"plot.color.0":r.ma.colors[t],"plot.linewidth":1,precision:E}).then((function(e){x.push(e)}))}));var t=window.webApp.middlePriceArray;t&&t.length>0&&S.chart().createStudy("Compare",!1,!1,["open","Market Middle Price"],{"plot.color.0":r.compare.color}).then((function(e){var t="".concat(r.symbol.pricescale,",1,false");S.applyOverrides({"mainSeriesProperties.priceAxisProperties.percentage":!1,"mainSeriesProperties.priceAxisProperties.autoScale":!1,"mainSeriesProperties.priceAxisProperties.indexedTo100":!1,"mainSeriesProperties.priceAxisProperties.log":!1,"mainSeriesProperties.minTick":t,"scalesProperties.showSymbolLabels":!1}),S.applyStudiesOverrides({"compare.precision":E,"compare.minTick":t}),S.chart().getPanes()[0].getRightPriceScales()[0].setMode(0),S.chart().getStudyById(e).changePriceScale("as-series"),S.chart().getStudyById(e).applyOverrides({precision:E,minTick:t}),x.push(e)}))};return h.default.createElement(v.WrapperIndexCmp,null,h.default.createElement("div",{ref:I,id:"tv_chart_container",className:i?"show":""}),h.default.createElement(m.default,{isReady:i}))};t.default=P}).call(this,n(158).default,n(801).default)},243:function(e,t,n){"use strict";var r=n(22),a=n(27);r(t,"__esModule",{value:!0}),t.LoadingWrapper=void 0;var i,o=a(n(240)),u=a(n(241)).default.div(i||(i=(0,o.default)(["\n    position: absolute;\n    z-index: 150;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    background-color: #fff;\n    background: transparent;\n    visibility: visible;\n    &.hide {\n        visibility: hidden;\n    }\n    .loadingContent {\n        position: absolute;\n        width: 48px;\n        height: 40px;\n        left: 0;\n        right: 0;\n        top: 0;\n        bottom: 0;\n        margin: auto;\n        display: flex;\n        justify-content: space-between;\n        span {\n            display: inline-block;\n            width: 6px;\n            height: 100%;\n            background: rgba(57, 158, 250, 1);\n            animation: load 1.2s ease-in-out infinite;\n            &:nth-child(1) {\n                animation-delay: -1.2s;\n            }\n            &:nth-child(2) {\n                animation-delay: -1.1s;\n            }\n            &:nth-child(3) {\n                animation-delay: -1.0s;\n            }\n            &:nth-child(4) {\n                animation-delay: -0.9s;\n            }\n            &:nth-child(5) {\n                animation-delay: -0.8s;\n            }\n        }\n        @keyframes load {\n            0%, 40%, 100% {\n                // height: 16px;\n                transform: scaleY(0.4);\n                background: rgba(57, 158, 250, 1);\n            }\n            20% {\n                // height: 48px;\n                // margin: -18px 0px;\n                transform: scaleY(1);\n                background: rgba(38, 192, 249, 1);\n            }\n        }\n    }\n"])));t.LoadingWrapper=u},244:function(e,t,n){"use strict";var r=n(22),a=n(27);r(t,"__esModule",{value:!0}),t.QuotesProvider=void 0;var i=a(n(730)),o=a(n(60)),u=a(n(61)),l=n(238),c=function(){function e(t,n){(0,o.default)(this,e),this._datafeedUrl=t,this._requester=n}return(0,u.default)(e,[{key:"getQuotes",value:function(e){var t=this;return new i.default((function(n,r){t._requester.sendRequest(t._datafeedUrl,"quotes",{symbols:e}).then((function(e){"ok"===e.s?n(e.d):r(e.errmsg)})).catch((function(e){var t=(0,l.getErrorMessage)(e);(0,l.logMessage)("QuotesProvider: getQuotes failed, error=".concat(t)),r("network error: ".concat(t))}))}))}}]),e}();t.QuotesProvider=c},245:function(e,t,n){"use strict";var r=n(22),a=n(27);r(t,"__esModule",{value:!0}),t.Requester=void 0;var i=a(n(149)),o=a(n(146)),u=a(n(145)),l=a(n(60)),c=a(n(61)),s=n(238),d=function(){function e(t){(0,l.default)(this,e),t&&(this._headers=t)}return(0,c.default)(e,[{key:"sendRequest",value:function(e,t,n){var r;if(void 0!==n){var a=(0,i.default)(n);0!==a.length&&(t+="?"),t+=(0,o.default)(a).call(a,(function(e){var t;return(0,u.default)(t="".concat(encodeURIComponent(e),"=")).call(t,encodeURIComponent(n[e].toString()))})).join("&")}(0,s.logMessage)("New request: "+t);var l={credentials:"same-origin"};return void 0!==this._headers&&(l.headers=this._headers),fetch((0,u.default)(r="".concat(e,"/")).call(r,t),l).then((function(e){return e.text()})).then((function(e){return JSON.parse(e)}))}}]),e}();t.Requester=d},254:function(e,t,n){"use strict";var r=n(22),a=n(27);r(t,"__esModule",{value:!0}),t.WrapperIndexCmp=void 0;var i,o=a(n(240)),u=a(n(241)).default.div(i||(i=(0,o.default)(["\n    #tv_chart_container {\n        display: block;\n        box-sizing: border-box;\n        margin: 0;\n        min-width: 0;\n        height: 100%;\n        visibility: hidden;\n        &.show {\n            visibility: visible;\n        }\n    }\n"])));t.WrapperIndexCmp=u},255:function(e,t,n){"use strict";var r=n(266),a=n(22),i=n(27);a(t,"__esModule",{value:!0}),t.UDFCompatibleDatafeed=void 0;var o=i(n(61)),u=i(n(60)),l=i(n(267)),c=i(n(268)),s=i(n(269)),d=n(256),f=n(244),p=n(245);function h(e){var t=function(){if("undefined"==typeof Reflect||!r)return!1;if(r.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(r(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,s.default)(e);if(t){var i=(0,s.default)(this).constructor;n=r(a,arguments,i)}else n=a.apply(this,arguments);return(0,c.default)(this,n)}}var v=function(e){(0,l.default)(n,e);var t=h(n);function n(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e4,a=arguments.length>2?arguments[2]:void 0;(0,u.default)(this,n);var i=new p.Requester,o=new f.QuotesProvider(e,i);return t.call(this,e,o,i,r,a)}return(0,o.default)(n)}(d.UDFCompatibleDatafeedBase);t.UDFCompatibleDatafeed=v},750:function(e,t,n){var r=n(759),a=n(763),i=n(752),o=n(767);e.exports=function(e,t){return r(e)||a(e,t)||i(e,t)||o()},e.exports.__esModule=!0,e.exports.default=e.exports},758:function(e,t,n){"use strict";n.r(t),n.d(t,"useObserver",(function(){return i}));var r=n(19),a=n(0);function i(e){let t,n;if("function"==typeof e)n=e,t=e();else{if(!Object(r.isObservable)(e))return console.warn("args is not a mobx object or a reaction function"),e;t=e,n=()=>Object(r.toJS)(t)}const[i,o]=Object(a.useState)(Object(r.toJS)(t)),u=Object(r.reaction)(n,e=>{o(e)});return Object(a.useEffect)(()=>()=>{u()},[]),i}},759:function(e,t,n){var r=n(751);e.exports=function(e){if(r(e))return e},e.exports.__esModule=!0,e.exports.default=e.exports},763:function(e,t,n){var r=n(246),a=n(721);e.exports=function(e,t){var n=null==e?null:void 0!==r&&a(e)||e["@@iterator"];if(null!=n){var i,o,u,l,c=[],s=!0,d=!1;try{if(u=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;s=!1}else for(;!(s=(i=u.call(n)).done)&&(c.push(i.value),c.length!==t);s=!0);}catch(e){d=!0,o=e}finally{try{if(!s&&null!=n.return&&(l=n.return(),Object(l)!==l))return}finally{if(d)throw o}}return c}},e.exports.__esModule=!0,e.exports.default=e.exports},767:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports}}]);