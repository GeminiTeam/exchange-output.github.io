(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{261:function(e,t,r){"use strict";(function(e){var o=r(152),s=r(163),n=r(164),i=r(37),a=r(159),u=r(165),l=r(166),c=r(20),d=r(27);c(t,"__esModule",{value:!0}),t.UDFCompatibleDatafeedBase=void 0;var f,_=d(r(115)),v=d(r(47)),h=d(r(48)),m=d(r(150)),p=d(r(746)),g=d(r(831)),y=d(r(771)),b=d(r(149)),P=d(r(726)),x=d(r(774)),w=d(r(270)),k=r(242),S=r(275),q=r(262),M=r(263),D=r(264),C=r(247);function I(e,t){var r=o(e);if(s){var a=s(e);t&&(a=n(a).call(a,(function(t){return i(e,t).enumerable}))),r.push.apply(r,a)}return r}function E(e){for(var t=1;t<arguments.length;t++){var r,o,s=null!=arguments[t]?arguments[t]:{};t%2?a(r=I(Object(s),!0)).call(r,(function(t){(0,_.default)(e,t,s[t])})):u?l(e,u(s)):a(o=I(Object(s))).call(o,(function(t){c(e,t,i(s,t))}))}return e}var T=e.config,A=[];function B(e,t,r){var o=e[t];return(0,p.default)(o)?o[r]:o}(0,m.default)(f=e.resolutions).call(f,(function(e,t){"chart"!=e.value&&A.push(e.value)})),T.supported_resolutions=A;var U=function(){function t(r,o,s){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1e4,i=arguments.length>4?arguments[4]:void 0;(0,v.default)(this,t),e.updateFrequency&&e.updateFrequency>0&&(n=e.updateFrequency),this._configuration={supports_search:!1,supports_group_request:!0,supported_resolutions:T.supported_resolutions,supports_marks:!1,supports_timescale_marks:!1},this._symbolsStorage=null,this._datafeedURL=r,this._requester=s,this._historyProvider=new S.HistoryProvider(r,this._requester,i),this._quotesProvider=o,this._dataPulseProvider=new q.DataPulseProvider(this._historyProvider,n),this._quotesPulseProvider=new M.QuotesPulseProvider(this._quotesProvider),this._setupWithConfiguration(T)}return(0,h.default)(t,[{key:"onReady",value:function(e){var t=this;(0,g.default)((function(){e(t._configuration)}),0)}},{key:"getQuotes",value:function(e,t,r){this._quotesProvider.getQuotes(e).then(t).catch(r)}},{key:"subscribeQuotes",value:function(e,t,r,o){this._quotesPulseProvider.subscribeQuotes(e,t,r,o)}},{key:"unsubscribeQuotes",value:function(e){this._quotesPulseProvider.unsubscribeQuotes(e)}},{key:"getMarks",value:function(e,t,r,o,s){if(this._configuration.supports_marks){var n={symbol:e.ticker||"",from:t,to:r,resolution:s};this._send("marks",n).then((function(e){if(!(0,p.default)(e)){for(var t=[],r=0;r<e.id.length;++r)t.push({id:B(e,"id",r),time:B(e,"time",r),color:B(e,"color",r),text:B(e,"text",r),label:B(e,"label",r),labelFontColor:B(e,"labelFontColor",r),minSize:B(e,"minSize",r)});e=t}o(e)})).catch((function(e){(0,k.logMessage)("UdfCompatibleDatafeed: Request marks failed: ".concat((0,k.getErrorMessage)(e))),o([])}))}}},{key:"getTimescaleMarks",value:function(e,t,r,o,s){if(this._configuration.supports_timescale_marks){var n={symbol:e.ticker||"",from:t,to:r,resolution:s};this._send("timescale_marks",n).then((function(e){if(!(0,p.default)(e)){for(var t=[],r=0;r<e.id.length;++r)t.push({id:B(e,"id",r),time:B(e,"time",r),color:B(e,"color",r),label:B(e,"label",r),tooltip:B(e,"tooltip",r)});e=t}o(e)})).catch((function(e){(0,k.logMessage)("UdfCompatibleDatafeed: Request timescale marks failed: ".concat((0,k.getErrorMessage)(e))),o([])}))}}},{key:"getServerTime",value:function(e){if(this._configuration.supports_time){var t=(0,y.default)(C.serverTimeStore.currentServerTime/1e3);isNaN(t)?(0,k.logMessage)("UdfCompatibleDatafeed: Fail to load server time"):e(t)}}},{key:"searchSymbols",value:function(e,t,r,o){if(this._configuration.supports_search){var s={limit:30,query:e.toUpperCase(),type:r,exchange:t};this._send("search",s).then((function(e){if(void 0!==e.s)return(0,k.logMessage)("UdfCompatibleDatafeed: search symbols error=".concat(e.errmsg)),void o([]);o(e)})).catch((function(t){var r;(0,k.logMessage)((0,b.default)(r="UdfCompatibleDatafeed: Search symbols for '".concat(e,"' failed. Error=")).call(r,(0,k.getErrorMessage)(t))),o([])}))}else{if(null===this._symbolsStorage)throw new Error("UdfCompatibleDatafeed: inconsistent configuration (symbols storage)");this._symbolsStorage.searchSymbols(e,t,r,30).then(o).catch((0,P.default)(o).call(o,null,[]))}}},{key:"resolveSymbol",value:function(t,r,o,s){var n=this;(0,k.logMessage)("Resolve requested");var i=s&&s.currencyCode,a=s&&s.unitId,u=(0,x.default)();function l(e){(0,k.logMessage)("Symbol resolved: ".concat((0,x.default)()-u,"ms")),r(e)}if(this._configuration.supports_group_request){if(null===this._symbolsStorage)throw new Error("UdfCompatibleDatafeed: inconsistent configuration (symbols storage)");this._symbolsStorage.resolveSymbol(t,i,a).then(l).catch(o)}else{var c={symbol:t};void 0!==i&&(c.currencyCode=i),void 0!==a&&(c.unitId=a);var d=t?t.split("|"):[],f=JSON.parse((0,w.default)(e.symbol));f.name=t,f.description=d.length>0?d[0]:"",f.supported_resolutions=T.supported_resolutions,f.ticker=t,(0,g.default)((function(){var e,t,r,o,s,i,a,u,c,d,_,v,h,m,p,g,y,P,x,w,k,S,q,M,D,C,I,T,A,B,U=f.name,R=null!==(t=f.listed_exchange)&&void 0!==t?t:f["exchange-listed"],Q=null!==(r=f.exchange)&&void 0!==r?r:f["exchange-traded"],F=null!==(o=f.full_name)&&void 0!==o?o:(0,b.default)(e="".concat(Q,":")).call(e,U);l(E(E({},f),{},{name:U,base_name:[R+":"+U],full_name:F,listed_exchange:R,exchange:Q,currency_code:null!==(s=f.currency_code)&&void 0!==s?s:f["currency-code"],original_currency_code:null!==(i=f.original_currency_code)&&void 0!==i?i:f["original-currency-code"],unit_id:null!==(a=f.unit_id)&&void 0!==a?a:f["unit-id"],original_unit_id:null!==(u=f.original_unit_id)&&void 0!==u?u:f["original-unit-id"],unit_conversion_types:null!==(c=f.unit_conversion_types)&&void 0!==c?c:f["unit-conversion-types"],has_intraday:null!==(_=null!==(d=f.has_intraday)&&void 0!==d?d:f["has-intraday"])&&void 0!==_&&_,has_no_volume:null!==(v=f.has_no_volume)&&void 0!==v?v:f["has-no-volume"],visible_plots_set:null!==(h=f.visible_plots_set)&&void 0!==h?h:f["visible-plots-set"],minmov:null!==(p=null!==(m=f.minmovement)&&void 0!==m?m:f.minmov)&&void 0!==p?p:0,minmove2:null!==(y=null!==(g=f.minmovement2)&&void 0!==g?g:f.minmove2)&&void 0!==y?y:f.minmov2,session:null!==(P=f.session)&&void 0!==P?P:f["session-regular"],session_holidays:null!==(x=f.session_holidays)&&void 0!==x?x:f["session-holidays"],supported_resolutions:null!==(S=null!==(k=null!==(w=f.supported_resolutions)&&void 0!==w?w:f["supported-resolutions"])&&void 0!==k?k:n._configuration.supported_resolutions)&&void 0!==S?S:[],has_daily:null===(M=null!==(q=f.has_daily)&&void 0!==q?q:f["has-daily"])||void 0===M||M,intraday_multipliers:null!==(C=null!==(D=f.intraday_multipliers)&&void 0!==D?D:f["intraday-multipliers"])&&void 0!==C?C:["1","5","15","30","60"],has_weekly_and_monthly:null!==(I=f.has_weekly_and_monthly)&&void 0!==I?I:f["has-weekly-and-monthly"],has_empty_bars:null!==(T=f.has_empty_bars)&&void 0!==T?T:f["has-empty-bars"],volume_precision:null!==(A=f.volume_precision)&&void 0!==A?A:f["volume-precision"],format:null!==(B=f.format)&&void 0!==B?B:"price"}))}),0)}}},{key:"getBars",value:function(e,t,r,o,s){this._historyProvider.getBars(e,t,r).then((function(e){o(e.bars,e.meta)})).catch(s)}},{key:"subscribeBars",value:function(e,t,r,o,s){this._dataPulseProvider.subscribeBars(e,t,r,o)}},{key:"unsubscribeBars",value:function(e){this._dataPulseProvider.unsubscribeBars(e)}},{key:"_requestConfiguration",value:function(){return this._send("config").catch((function(e){return(0,k.logMessage)("UdfCompatibleDatafeed: Cannot get datafeed configuration - use default, error=".concat((0,k.getErrorMessage)(e))),null}))}},{key:"_send",value:function(e,t){return this._requester.sendRequest(this._datafeedURL,e,t)}},{key:"_setupWithConfiguration",value:function(e){if(this._configuration=e,void 0===e.exchanges&&(e.exchanges=[]),!e.supports_search&&!e.supports_group_request)throw new Error("Unsupported datafeed configuration. Must either support search, or support group request");!e.supports_group_request&&e.supports_search||(this._symbolsStorage=new D.SymbolsStorage(this._datafeedURL,e.supported_resolutions||[],this._requester)),(0,k.logMessage)("UdfCompatibleDatafeed: Initialized with ".concat((0,w.default)(e)))}}]),t}();t.UDFCompatibleDatafeedBase=U}).call(this,r(814).default)},262:function(e,t,r){"use strict";var o=r(20),s=r(27);o(t,"__esModule",{value:!0}),t.DataPulseProvider=void 0;var n=s(r(732)),i=s(r(726)),a=s(r(149)),u=s(r(771)),l=s(r(774)),c=s(r(47)),d=s(r(48)),f=r(242),_=function(){function e(t,r){var o;(0,c.default)(this,e),this._subscribers={},this._requestsPending=0,this._historyProvider=t,(0,n.default)((0,i.default)(o=this._updateData).call(o,this),r)}return(0,d.default)(e,[{key:"subscribeBars",value:function(e,t,r,o){var s,n;this._subscribers.hasOwnProperty(o)?(0,f.logMessage)("DataPulseProvider: already has subscriber with id=".concat(o)):(this._subscribers[o]={lastBarTime:null,listener:r,resolution:t,symbolInfo:e},(0,f.logMessage)((0,a.default)(s=(0,a.default)(n="DataPulseProvider: subscribed for #".concat(o," - {")).call(n,e.name,", ")).call(s,t,"}")))}},{key:"unsubscribeBars",value:function(e){delete this._subscribers[e],(0,f.logMessage)("DataPulseProvider: unsubscribed for #".concat(e))}},{key:"_updateData",value:function(){var e=this;if(!(this._requestsPending>0)){this._requestsPending=0;var t=function(t){e._requestsPending+=1,e._updateDataForSubscriber(t).then((function(){var r;e._requestsPending-=1,(0,f.logMessage)((0,a.default)(r="DataPulseProvider: data for #".concat(t," updated successfully, pending=")).call(r,e._requestsPending))})).catch((function(r){var o,s;e._requestsPending-=1,(0,f.logMessage)((0,a.default)(o=(0,a.default)(s="DataPulseProvider: data for #".concat(t," updated with error=")).call(s,(0,f.getErrorMessage)(r),", pending=")).call(o,e._requestsPending))}))};for(var r in this._subscribers)t(r)}}},{key:"_updateDataForSubscriber",value:function(e){var t=this,r=this._subscribers[e],o=(0,u.default)(((0,l.default)()/1e3).toString()),s=o-function(e,t){var r=0;r="D"===e||"1D"===e?t:"M"===e||"1M"===e?31*t:"W"===e||"1W"===e?7*t:t*(0,u.default)(e)/1440;return 24*r*60*60}(r.resolution,10);return this._historyProvider.getBars(r.symbolInfo,r.resolution,{from:s,to:o,countBack:2,firstDataRequest:!1}).then((function(r){t._onSubscriberDataReceived(e,r)}))}},{key:"_onSubscriberDataReceived",value:function(e,t){if(this._subscribers.hasOwnProperty(e)){var r=t.bars;if(0!==r.length){var o=r[r.length-1],s=this._subscribers[e];if(!(null!==s.lastBarTime&&o.time<s.lastBarTime)){if(null!==s.lastBarTime&&o.time>s.lastBarTime){if(r.length<2)throw new Error("Not enough bars in history for proper pulse update. Need at least 2.");var n=r[r.length-2];s.listener(n)}s.lastBarTime=o.time,s.listener(o)}}}else(0,f.logMessage)("DataPulseProvider: Data comes for already unsubscribed subscription #".concat(e))}}]),e}();t.DataPulseProvider=_},263:function(e,t,r){"use strict";var o=r(20),s=r(27);o(t,"__esModule",{value:!0}),t.QuotesPulseProvider=void 0;var n=s(r(152)),i=s(r(732)),a=s(r(726)),u=s(r(149)),l=s(r(47)),c=s(r(48)),d=r(242),f=function(){function e(t){(0,l.default)(this,e),this._subscribers={},this._requestsPending=0,this._timers=null,this._quotesProvider=t}return(0,c.default)(e,[{key:"subscribeQuotes",value:function(e,t,r,o){this._subscribers[o]={symbols:e,fastSymbols:t,listener:r},this._createTimersIfRequired(),(0,d.logMessage)("QuotesPulseProvider: subscribed quotes with #".concat(o))}},{key:"unsubscribeQuotes",value:function(e){delete this._subscribers[e],0===(0,n.default)(this._subscribers).length&&this._destroyTimers(),(0,d.logMessage)("QuotesPulseProvider: unsubscribed quotes with #".concat(e))}},{key:"_createTimersIfRequired",value:function(){if(null===this._timers){var e,t,r=(0,i.default)((0,a.default)(e=this._updateQuotes).call(e,this,1),1e4),o=(0,i.default)((0,a.default)(t=this._updateQuotes).call(t,this,0),6e4);this._timers={fastTimer:r,generalTimer:o}}}},{key:"_destroyTimers",value:function(){null!==this._timers&&(clearInterval(this._timers.fastTimer),clearInterval(this._timers.generalTimer),this._timers=null)}},{key:"_updateQuotes",value:function(e){var t=this;if(!(this._requestsPending>0)){var r=function(r){t._requestsPending++;var o=t._subscribers[r];t._quotesProvider.getQuotes(1===e?o.fastSymbols:o.symbols).then((function(s){var n,i;t._requestsPending--,t._subscribers.hasOwnProperty(r)&&(o.listener(s),(0,d.logMessage)((0,u.default)(n=(0,u.default)(i="QuotesPulseProvider: data for #".concat(r," (")).call(i,e,") updated successfully, pending=")).call(n,t._requestsPending)))})).catch((function(o){var s,n,i;t._requestsPending--,(0,d.logMessage)((0,u.default)(s=(0,u.default)(n=(0,u.default)(i="QuotesPulseProvider: data for #".concat(r," (")).call(i,e,") updated with error=")).call(n,(0,d.getErrorMessage)(o),", pending=")).call(s,t._requestsPending))}))};for(var o in this._subscribers)r(o)}}}]),e}();t.QuotesPulseProvider=f},264:function(e,t,r){"use strict";var o=r(249),s=r(783),n=r(784),i=r(727),a=r(746),u=r(20),l=r(27);u(t,"__esModule",{value:!0}),t.SymbolsStorage=void 0;var c=l(r(47)),d=l(r(48)),f=l(r(746)),_=l(r(756)),v=l(r(150)),h=l(r(249)),m=l(r(785)),p=l(r(795)),g=l(r(800)),y=l(r(149)),b=r(242);function P(e,t){var r=void 0!==n&&i(e)||e["@@iterator"];if(!r){if(a(e)||(r=function(e,t){var r;if(!e)return;if("string"==typeof e)return x(e,t);var n=o(r=Object.prototype.toString.call(e)).call(r,8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return s(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return x(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var u=0,l=function(){};return{s:l,n:function(){return u>=e.length?{done:!0}:{done:!1,value:e[u++]}},e:function(e){throw e},f:l}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,d=!0,f=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return d=e.done,e},e:function(e){f=!0,c=e},f:function(){try{d||null==r.return||r.return()}finally{if(f)throw c}}}}function x(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}function w(e,t,r,o){var s=e[t];return!(0,f.default)(s)||o&&!(0,f.default)(s[0])?s:s[r]}function k(e,t,r){return e+(void 0!==t?"_%|#|%_"+t:"")+(void 0!==r?"_%|#|%_"+r:"")}var S=function(){function e(t,r,o){(0,c.default)(this,e),this._exchangesList=["NYSE","FOREX","AMEX"],this._symbolsInfo={},this._symbolsList=[],this._datafeedUrl=t,this._datafeedSupportedResolutions=r,this._requester=o,this._readyPromise=this._init(),this._readyPromise.catch((function(e){console.error("SymbolsStorage: Cannot init, error=".concat(e.toString()))}))}return(0,d.default)(e,[{key:"resolveSymbol",value:function(e,t,r){var o=this;return this._readyPromise.then((function(){var s=o._symbolsInfo[k(e,t,r)];return void 0===s?_.default.reject("invalid symbol"):_.default.resolve(s)}))}},{key:"searchSymbols",value:function(e,t,r,o){var s=this;return this._readyPromise.then((function(){var n,i,a=[],u=0===e.length;e=e.toUpperCase();var l,c=P(s._symbolsList);try{var d=function(){var o,n,i=l.value,c=s._symbolsInfo[i];if(void 0===c)return"continue";if(r.length>0&&c.type!==r)return"continue";if(t&&t.length>0&&c.exchange!==t)return"continue";var d=(0,p.default)(o=c.name.toUpperCase()).call(o,e),f=(0,p.default)(n=c.description.toUpperCase()).call(n,e);if((u||d>=0||f>=0)&&!(0,g.default)(a).call(a,(function(e){return e.symbolInfo===c}))){var _=d>=0?d:8e3+f;a.push({symbolInfo:c,weight:_})}};for(c.s();!(l=c.n()).done;)d()}catch(e){c.e(e)}finally{c.f()}var f=(0,v.default)(n=(0,h.default)(i=(0,m.default)(a).call(a,(function(e,t){return e.weight-t.weight}))).call(i,0,o)).call(n,(function(e){var t=e.symbolInfo;return{symbol:t.name,full_name:t.full_name,description:t.description,exchange:t.exchange,params:[],type:t.type,ticker:t.name}}));return _.default.resolve(f)}))}},{key:"_init",value:function(){var e,t=this,r=[],o={},s=P(this._exchangesList);try{for(s.s();!(e=s.n()).done;){var n=e.value;o[n]||(o[n]=!0,r.push(this._requestExchangeData(n)))}}catch(e){s.e(e)}finally{s.f()}return _.default.all(r).then((function(){var e;(0,m.default)(e=t._symbolsList).call(e),(0,b.logMessage)("SymbolsStorage: All exchanges data loaded")}))}},{key:"_requestExchangeData",value:function(e){var t=this;return new _.default((function(r,o){t._requester.sendRequest(t._datafeedUrl,"symbol_info",{group:e}).then((function(s){try{t._onExchangeDataReceived(e,s)}catch(e){return void o(e instanceof Error?e:new Error("SymbolsStorage: Unexpected exception ".concat(e)))}r()})).catch((function(t){var o;(0,b.logMessage)((0,y.default)(o="SymbolsStorage: Request data for exchange '".concat(e,"' failed, reason=")).call(o,(0,b.getErrorMessage)(t))),r()}))}))}},{key:"_onExchangeDataReceived",value:function(e,t){var r=0;try{for(var o=t.symbol.length,s=void 0!==t.ticker;r<o;++r){var n=t.symbol[r],i=w(t,"exchange-listed",r),a=w(t,"exchange-traded",r),u=a+":"+n,l=w(t,"currency-code",r),c=w(t,"unit-id",r),d=s?w(t,"ticker",r):n,f={ticker:d,name:n,base_name:[i+":"+n],full_name:u,listed_exchange:i,exchange:a,currency_code:l,original_currency_code:w(t,"original-currency-code",r),unit_id:c,original_unit_id:w(t,"original-unit-id",r),unit_conversion_types:w(t,"unit-conversion-types",r,!0),description:w(t,"description",r),has_intraday:q(w(t,"has-intraday",r),!1),has_no_volume:q(w(t,"has-no-volume",r),void 0),visible_plots_set:q(w(t,"visible-plots-set",r),void 0),minmov:w(t,"minmovement",r)||w(t,"minmov",r)||0,minmove2:w(t,"minmove2",r)||w(t,"minmov2",r),fractional:w(t,"fractional",r),pricescale:w(t,"pricescale",r),type:w(t,"type",r),session:w(t,"session-regular",r),session_holidays:w(t,"session-holidays",r),corrections:w(t,"corrections",r),timezone:w(t,"timezone",r),supported_resolutions:q(w(t,"supported-resolutions",r,!0),this._datafeedSupportedResolutions),has_daily:q(w(t,"has-daily",r),!0),intraday_multipliers:q(w(t,"intraday-multipliers",r,!0),["1","5","15","30","60"]),has_weekly_and_monthly:w(t,"has-weekly-and-monthly",r),has_empty_bars:w(t,"has-empty-bars",r),volume_precision:q(w(t,"volume-precision",r),0),format:"price"};this._symbolsInfo[d]=f,this._symbolsInfo[n]=f,this._symbolsInfo[u]=f,void 0===l&&void 0===c||(this._symbolsInfo[k(d,l,c)]=f,this._symbolsInfo[k(n,l,c)]=f,this._symbolsInfo[k(u,l,c)]=f),this._symbolsList.push(n)}}catch(o){var _,v,h;throw new Error((0,y.default)(_=(0,y.default)(v=(0,y.default)(h="SymbolsStorage: API error when processing exchange ".concat(e," symbol #")).call(h,r," (")).call(v,t.symbol[r],"): ")).call(_,Object(o).message))}}}]),e}();function q(e,t){return void 0!==e?e:t}t.SymbolsStorage=S},726:function(e,t,r){e.exports=r(256)},728:function(e,t,r){"use strict";var o,s=r(28),n=r(78),i=r(21),a=r(760),u=r(243),l=r(110),c=r(748),d=s.Function,f=/MSIE .\./.test(u)||a&&((o=s.Bun.version.split(".")).length<3||0==o[0]&&(o[1]<3||3==o[1]&&0==o[2]));e.exports=function(e,t){var r=t?2:1;return f?function(o,s){var a=c(arguments.length,1)>r,u=i(o)?o:d(o),f=a?l(arguments,r):[],_=a?function(){n(u,this,f)}:u;return t?e(_,s):e(_)}:e}},732:function(e,t,r){e.exports=r(758)},747:function(e,t,r){r(759),r(761)},758:function(e,t,r){r(747);var o=r(18);e.exports=o.setInterval},759:function(e,t,r){var o=r(7),s=r(28),n=r(728)(s.setInterval,!0);o({global:!0,bind:!0,forced:s.setInterval!==n},{setInterval:n})},760:function(e,t){e.exports="function"==typeof Bun&&Bun&&"string"==typeof Bun.version},761:function(e,t,r){var o=r(7),s=r(28),n=r(728)(s.setTimeout,!0);o({global:!0,bind:!0,forced:s.setTimeout!==n},{setTimeout:n})},774:function(e,t,r){e.exports=r(780)},780:function(e,t,r){var o=r(781);e.exports=o},781:function(e,t,r){r(782);var o=r(18);e.exports=o.Date.now},782:function(e,t,r){var o=r(7),s=r(10),n=Date,i=s(n.prototype.getTime);o({target:"Date",stat:!0},{now:function(){return i(new n)}})},783:function(e,t,r){e.exports=r(730)},784:function(e,t,r){e.exports=r(268)},785:function(e,t,r){e.exports=r(786)},786:function(e,t,r){var o=r(787);e.exports=o},787:function(e,t,r){var o=r(30),s=r(788),n=Array.prototype;e.exports=function(e){var t=e.sort;return e===n||o(n,e)&&t===n.sort?s:t}},788:function(e,t,r){r(789);var o=r(35);e.exports=o("Array").sort},789:function(e,t,r){"use strict";var o=r(7),s=r(10),n=r(49),i=r(38),a=r(43),u=r(790),l=r(50),c=r(9),d=r(791),f=r(153),_=r(792),v=r(793),h=r(80),m=r(794),p=[],g=s(p.sort),y=s(p.push),b=c((function(){p.sort(void 0)})),P=c((function(){p.sort(null)})),x=f("sort"),w=!c((function(){if(h)return h<70;if(!(_&&_>3)){if(v)return!0;if(m)return m<603;var e,t,r,o,s="";for(e=65;e<76;e++){switch(t=String.fromCharCode(e),e){case 66:case 69:case 70:case 72:r=3;break;case 68:case 71:r=4;break;default:r=2}for(o=0;o<47;o++)p.push({k:t+o,v:r})}for(p.sort((function(e,t){return t.v-e.v})),o=0;o<p.length;o++)t=p[o].k.charAt(0),s.charAt(s.length-1)!==t&&(s+=t);return"DGBEFHACIJK"!==s}}));o({target:"Array",proto:!0,forced:b||!P||!x||!w},{sort:function(e){void 0!==e&&n(e);var t=i(this);if(w)return void 0===e?g(t):g(t,e);var r,o,s=[],c=a(t);for(o=0;o<c;o++)o in t&&y(s,t[o]);for(d(s,function(e){return function(t,r){return void 0===r?-1:void 0===t?1:void 0!==e?+e(t,r)||0:l(t)>l(r)?1:-1}}(e)),r=a(s),o=0;o<r;)t[o]=s[o++];for(;o<c;)u(t,o++);return t}})},790:function(e,t,r){"use strict";var o=r(66),s=TypeError;e.exports=function(e,t){if(!delete e[t])throw s("Cannot delete property "+o(t)+" of "+o(e))}},791:function(e,t,r){var o=r(269),s=Math.floor,n=function(e,t){var r=e.length,u=s(r/2);return r<8?i(e,t):a(e,n(o(e,0,u),t),n(o(e,u),t),t)},i=function(e,t){for(var r,o,s=e.length,n=1;n<s;){for(o=n,r=e[n];o&&t(e[o-1],r)>0;)e[o]=e[--o];o!==n++&&(e[o]=r)}return e},a=function(e,t,r,o){for(var s=t.length,n=r.length,i=0,a=0;i<s||a<n;)e[i+a]=i<s&&a<n?o(t[i],r[a])<=0?t[i++]:r[a++]:i<s?t[i++]:r[a++];return e};e.exports=n},792:function(e,t,r){var o=r(243).match(/firefox\/(\d+)/i);e.exports=!!o&&+o[1]},793:function(e,t,r){var o=r(243);e.exports=/MSIE|Trident/.test(o)},794:function(e,t,r){var o=r(243).match(/AppleWebKit\/(\d+)\./);e.exports=!!o&&+o[1]},795:function(e,t,r){e.exports=r(796)},796:function(e,t,r){var o=r(797);e.exports=o},797:function(e,t,r){var o=r(30),s=r(798),n=Array.prototype;e.exports=function(e){var t=e.indexOf;return e===n||o(n,e)&&t===n.indexOf?s:t}},798:function(e,t,r){r(799);var o=r(35);e.exports=o("Array").indexOf},799:function(e,t,r){"use strict";var o=r(7),s=r(156),n=r(157).indexOf,i=r(153),a=s([].indexOf),u=!!a&&1/a([1],1,-0)<0;o({target:"Array",proto:!0,forced:u||!i("indexOf")},{indexOf:function(e){var t=arguments.length>1?arguments[1]:void 0;return u?a(this,e,t)||0:n(this,e,t)}})},800:function(e,t,r){e.exports=r(801)},801:function(e,t,r){var o=r(802);e.exports=o},802:function(e,t,r){var o=r(30),s=r(803),n=Array.prototype;e.exports=function(e){var t=e.some;return e===n||o(n,e)&&t===n.some?s:t}},803:function(e,t,r){r(804);var o=r(35);e.exports=o("Array").some},804:function(e,t,r){"use strict";var o=r(7),s=r(51).some;o({target:"Array",proto:!0,forced:!r(153)("some")},{some:function(e){return s(this,e,arguments.length>1?arguments[1]:void 0)}})},814:function(e,t,r){"use strict";r(20)(t,"__esModule",{value:!0}),t.default=void 0;var o={widget:{debug:!1,locale:"en",interval:15,library_path:"/web/exchange/charting_library/",timezone:"Asia/Hong_Kong",theme:"light",disabled_features:["use_localstorage_for_settings","header_widget","edit_buttons_in_legend","show_interval_dialog_on_key_press","timeframes_toolbar","symbol_info","symbol_search_hot_key","study_dialog_search_control","adaptive_logo","legend_context_menu","display_market_status","volume_force_overlay","control_bar","context_menus","popup_hints","left_toolbar","border_around_the_chart","remove_library_container_border","right_toolbar","trading_account_manager","order_panel","main_series_scale_menu","order_panel_undock","property_pages"],enabled_features:["hide_last_na_study_output","hide_left_toolbar_by_default","dont_show_boolean_study_arguments","move_logo_to_main_pane","same_data_requery","side_toolbar_in_fullscreen_mode","pricescale_currency","pricescale_unit","show_zoom_and_move_buttons_on_touch","snapshot_trading_drawings"],charts_storage_url:"",charts_storage_api_version:"1.1",client_id:"tradingview.com",user_id:"public_user_id",fullscreen:!0,autosize:!0,studies_overrides:{},loading_screen:{},overrides:{"paneProperties.legendProperties.showSeriesTitle":!1,"paneProperties.legendProperties.showLegend":!1,"mainSeriesProperties.showPriceLine":!1}},resolutions:[{name:"1min",value:"1",title:"1m",titleCn:"1分钟",wsParam:"1m"},{name:"5min",value:"5",title:"5m",titleCn:"5分钟",wsParam:"5m"},{name:"15min",value:"15",title:"15m",titleCn:"15分钟",wsParam:"15m"},{name:"1hour",value:"60",title:"1H",titleCn:"1小时",wsParam:"1h"},{name:"4hour",value:"240",title:"4H",titleCn:"4小时",wsParam:"4h"},{name:"6hour",value:"360",title:"6H",titleCn:"6小时",wsParam:"6h"},{name:"12hour",value:"720",title:"12H",titleCn:"12小时",wsParam:"12h"},{name:"1day",value:"1D",title:"1D",titleCn:"1天",wsParam:"1d"},{name:"1week",value:"1W",title:"1W",titleCn:"1周",wsParam:"1w"},{name:"1month",value:"1M",title:"1M",titleCn:"1月",wsParam:"1Mon"}],ma:{colors:["#46CEFF","#FF647C","#7EDE4C"],time:[5,10,30]},compare:{color:"#673AB7"},config:{supports_search:!0,supports_group_request:!1,supports_marks:!1,supports_timescale_marks:!1,supports_time:!0,exchange:[{value:"",name:"All Exchange",desc:""}],symbols_types:[{name:"All types",value:""},{name:"Stock",value:"stock"},{name:"Index",value:"index"}]},symbol:{name:"",description:"",ticker:"","exchange-traded":"","exchange-listed":"",timezone:"Asia/Hong_Kong",minmov:1,minmov2:0,pointvalue:1,session:"24x7",has_intraday:!0,visible_plots_set:"ohlcv",has_daily:!0,has_weekly_and_monthly:!0,type:"stock",intraday_multipliers:["1","5","15","60","240","360","720"],supported_resolutions:["1","5","15","60","240","360","720","1D","1W","1M"],pricescale:1,volume_precision:0},updateFrequency:1e4};t.default=o},831:function(e,t,r){e.exports=r(832)},832:function(e,t,r){r(747);var o=r(18);e.exports=o.setTimeout}}]);