(window.webpackJsonp=window.webpackJsonp||[]).push([[1,36],{111:function(t,e,r){"use strict";var n=r(44),o=r(107),i=r(14),a=r(35),s=r(20);i(e,"__esModule",{value:!0}),e.default=void 0;var l=s(r(759)),c=function(t,e){if(!e&&t&&t.__esModule)return t;if(null===t||"object"!==n(t)&&"function"!=typeof t)return{default:t};var r=h(e);if(r&&r.has(t))return r.get(t);var o={},s=i&&a;for(var l in t)if("default"!==l&&Object.prototype.hasOwnProperty.call(t,l)){var c=s?a(t,l):null;c&&(c.get||c.set)?i(o,l,c):o[l]=t[l]}o.default=t,r&&r.set(t,o);return o}(r(0)),u=r(256),f=s(r(921)),p=r(277),d=r(775),g=r(255);function h(t){if("function"!=typeof o)return null;var e=new o,r=new o;return(h=function(t){return t?r:e})(t)}var m=function(t){var e=(0,c.useState)(!1),r=(0,l.default)(e,2),n=r[0],o=r[1],i=(0,d.useObserver)(g.jsbridgeStore).jsbridgeStatus,a=function(t){n||t.target.scrollTop+t.target.clientHeight+50>=t.target.scrollHeight&&o(!0)};return c.default.createElement(p.WrapperIndexCmp,null,t.document&&c.default.createElement(f.default,{className:"document",onScroll:a,html:t.document}),t.component&&c.default.createElement("div",{className:"document",onScroll:a},t.component),c.default.createElement(u.Button,{onClick:function(){i&&window.flutter_inappwebview.callHandler("closeAll")},className:n?"read":"unread",disabled:!n},"Confirm"))};e.default=m},277:function(t,e,r){"use strict";var n=r(14),o=r(20);n(e,"__esModule",{value:!0}),e.WrapperIndexCmp=void 0;var i,a=o(r(156)),s=o(r(157)).default.div(i||(i=(0,a.default)(["\n    padding: 0 16px;\n    .document {\n        margin: 16px 0 24px 0;\n        height: calc(100vh - 133px);\n        overflow-y: auto;\n    }\n    button {\n        width: 100%;\n        height: 48px;\n        background: #903F98;\n        border-radius: 4px;\n        font-size: 17px;\n        font-family: 'BarlowMedium';\n        font-weight: 500;\n        color: #FFFFFF;\n        opacity: 1;\n        &.unread {\n            background: #E9E9EA;\n            color: rgba(20,20,28,0.3);\n        }\n    }\n"])));e.WrapperIndexCmp=s},755:function(t,e,r){var n=r(760);t.exports=n},756:function(t,e,r){var n=r(21)("iterator"),o=!1;try{var i=0,a={next:function(){return{done:!!i++}},return:function(){o=!0}};a[n]=function(){return this},Array.from(a,(function(){throw 2}))}catch(t){}t.exports=function(t,e){if(!e&&!o)return!1;var r=!1;try{var i={};i[n]=function(){return{next:function(){return{done:r=!0}}}},t(i)}catch(t){}return r}},757:function(t,e,r){t.exports=r(762)},758:function(t,e,r){var n=r(767);t.exports=n},759:function(t,e,r){var n=r(790),o=r(791),i=r(781),a=r(792);t.exports=function(t,e){return n(t)||o(t,e)||i(t,e)||a()},t.exports.__esModule=!0,t.exports.default=t.exports},760:function(t,e,r){r(761);var n=r(19);t.exports=n.Array.isArray},761:function(t,e,r){r(7)({target:"Array",stat:!0},{isArray:r(66)})},762:function(t,e,r){t.exports=r(763)},763:function(t,e,r){var n=r(764);t.exports=n},764:function(t,e,r){var n=r(765);t.exports=n},765:function(t,e,r){var n=r(766);r(78),t.exports=n},766:function(t,e,r){r(109),r(254);var n=r(160);t.exports=n},767:function(t,e,r){r(254),r(768);var n=r(19);t.exports=n.Array.from},768:function(t,e,r){var n=r(7),o=r(769);n({target:"Array",stat:!0,forced:!r(756)((function(t){Array.from(t)}))},{from:o})},769:function(t,e,r){"use strict";var n=r(108),o=r(31),i=r(38),a=r(770),s=r(258),l=r(110),c=r(45),u=r(79),f=r(259),p=r(160),d=Array;t.exports=function(t){var e=i(t),r=l(this),g=arguments.length,h=g>1?arguments[1]:void 0,m=void 0!==h;m&&(h=n(h,g>2?arguments[2]:void 0));var v,b,x,w,y,k,A=p(e),S=0;if(!A||this===d&&s(A))for(v=c(e),b=r?new this(v):d(v);v>S;S++)k=m?h(e[S],S):e[S],u(b,S,k);else for(y=(w=f(e,A)).next,b=r?new this:[];!(x=o(y,w)).done;S++)k=m?a(w,h,[x.value,S],!0):x.value,u(b,S,k);return b.length=S,b}},770:function(t,e,r){var n=r(32),o=r(260);t.exports=function(t,e,r,i){try{return i?e(n(r)[0],r[1]):e(r)}catch(e){o(t,"throw",e)}}},772:function(t,e,r){t.exports=r(782)},773:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n},t.exports.__esModule=!0,t.exports.default=t.exports},775:function(t,e,r){"use strict";r.r(e),r.d(e,"useObserver",(function(){return i}));var n=r(17),o=r(0);function i(t){let e,r;if("function"==typeof t)r=t,e=t();else{if(!Object(n.isObservable)(t))return console.warn("args is not a mobx object or a reaction function"),t;e=t,r=()=>Object(n.toJS)(e)}const[i,a]=Object(o.useState)(Object(n.toJS)(e)),s=Object(n.reaction)(r,t=>{a(t)});return Object(o.useEffect)(()=>()=>{s()},[]),i}},777:function(t,e,r){t.exports=r(778)},778:function(t,e,r){t.exports=r(779)},779:function(t,e,r){var n=r(780);t.exports=n},780:function(t,e,r){var n=r(755);t.exports=n},781:function(t,e,r){var n=r(165),o=r(772),i=r(773);t.exports=function(t,e){var r;if(t){if("string"==typeof t)return i(t,e);var a=n(r=Object.prototype.toString.call(t)).call(r,8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?o(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?i(t,e):void 0}},t.exports.__esModule=!0,t.exports.default=t.exports},782:function(t,e,r){t.exports=r(783)},783:function(t,e,r){var n=r(784);t.exports=n},784:function(t,e,r){var n=r(758);t.exports=n},790:function(t,e,r){var n=r(777);t.exports=function(t){if(n(t))return t},t.exports.__esModule=!0,t.exports.default=t.exports},791:function(t,e,r){var n=r(257),o=r(757);t.exports=function(t,e){var r=null==t?null:void 0!==n&&o(t)||t["@@iterator"];if(null!=r){var i,a,s,l,c=[],u=!0,f=!1;try{if(s=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;u=!1}else for(;!(u=(i=s.call(r)).done)&&(c.push(i.value),c.length!==e);u=!0);}catch(t){f=!0,a=t}finally{try{if(!u&&null!=r.return&&(l=r.return(),Object(l)!==l))return}finally{if(f)throw a}}return c}},t.exports.__esModule=!0,t.exports.default=t.exports},792:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},t.exports.__esModule=!0,t.exports.default=t.exports},833:function(t,e,r){var n=r(859),o=r(923);for(var i in(e=t.exports=function(t,e){return new o(e).process(t)}).FilterCSS=o,n)e[i]=n[i];"undefined"!=typeof window&&(window.filterCSS=t.exports)},834:function(t,e){t.exports={indexOf:function(t,e){var r,n;if(Array.prototype.indexOf)return t.indexOf(e);for(r=0,n=t.length;r<n;r++)if(t[r]===e)return r;return-1},forEach:function(t,e,r){var n,o;if(Array.prototype.forEach)return t.forEach(e,r);for(n=0,o=t.length;n<o;n++)e.call(r,t[n],n,t)},trim:function(t){return String.prototype.trim?t.trim():t.replace(/(^\s*)|(\s*$)/g,"")},spaceIndex:function(t){var e=/\s|\n|\t/.exec(t);return e?e.index:-1}}},858:function(t,e,r){var n=r(833).FilterCSS,o=r(833).getDefaultWhiteList,i=r(834);function a(){return{a:["target","href","title"],abbr:["title"],address:[],area:["shape","coords","href","alt"],article:[],aside:[],audio:["autoplay","controls","crossorigin","loop","muted","preload","src"],b:[],bdi:["dir"],bdo:["dir"],big:[],blockquote:["cite"],br:[],caption:[],center:[],cite:[],code:[],col:["align","valign","span","width"],colgroup:["align","valign","span","width"],dd:[],del:["datetime"],details:["open"],div:[],dl:[],dt:[],em:[],figcaption:[],figure:[],font:["color","size","face"],footer:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],header:[],hr:[],i:[],img:["src","alt","title","width","height"],ins:["datetime"],li:[],mark:[],nav:[],ol:[],p:[],pre:[],s:[],section:[],small:[],span:[],sub:[],summary:[],sup:[],strong:[],strike:[],table:["width","border","align","valign"],tbody:["align","valign"],td:["width","rowspan","colspan","align","valign"],tfoot:["align","valign"],th:["width","rowspan","colspan","align","valign"],thead:["align","valign"],tr:["rowspan","align","valign"],tt:[],u:[],ul:[],video:["autoplay","controls","crossorigin","loop","muted","playsinline","poster","preload","src","height","width"]}}var s=new n;function l(t){return t.replace(c,"&lt;").replace(u,"&gt;")}var c=/</g,u=/>/g,f=/"/g,p=/&quot;/g,d=/&#([a-zA-Z0-9]*);?/gim,g=/&colon;?/gim,h=/&newline;?/gim,m=/((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a):/gi,v=/e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi,b=/u\s*r\s*l\s*\(.*/gi;function x(t){return t.replace(f,"&quot;")}function w(t){return t.replace(p,'"')}function y(t){return t.replace(d,(function(t,e){return"x"===e[0]||"X"===e[0]?String.fromCharCode(parseInt(e.substr(1),16)):String.fromCharCode(parseInt(e,10))}))}function k(t){return t.replace(g,":").replace(h," ")}function A(t){for(var e="",r=0,n=t.length;r<n;r++)e+=t.charCodeAt(r)<32?" ":t.charAt(r);return i.trim(e)}function S(t){return t=A(t=k(t=y(t=w(t))))}function I(t){return t=l(t=x(t))}e.whiteList={a:["target","href","title"],abbr:["title"],address:[],area:["shape","coords","href","alt"],article:[],aside:[],audio:["autoplay","controls","crossorigin","loop","muted","preload","src"],b:[],bdi:["dir"],bdo:["dir"],big:[],blockquote:["cite"],br:[],caption:[],center:[],cite:[],code:[],col:["align","valign","span","width"],colgroup:["align","valign","span","width"],dd:[],del:["datetime"],details:["open"],div:[],dl:[],dt:[],em:[],figcaption:[],figure:[],font:["color","size","face"],footer:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],header:[],hr:[],i:[],img:["src","alt","title","width","height"],ins:["datetime"],li:[],mark:[],nav:[],ol:[],p:[],pre:[],s:[],section:[],small:[],span:[],sub:[],summary:[],sup:[],strong:[],strike:[],table:["width","border","align","valign"],tbody:["align","valign"],td:["width","rowspan","colspan","align","valign"],tfoot:["align","valign"],th:["width","rowspan","colspan","align","valign"],thead:["align","valign"],tr:["rowspan","align","valign"],tt:[],u:[],ul:[],video:["autoplay","controls","crossorigin","loop","muted","playsinline","poster","preload","src","height","width"]},e.getDefaultWhiteList=a,e.onTag=function(t,e,r){},e.onIgnoreTag=function(t,e,r){},e.onTagAttr=function(t,e,r){},e.onIgnoreTagAttr=function(t,e,r){},e.safeAttrValue=function(t,e,r,n){if(r=S(r),"href"===e||"src"===e){if("#"===(r=i.trim(r)))return"#";if("http://"!==r.substr(0,7)&&"https://"!==r.substr(0,8)&&"mailto:"!==r.substr(0,7)&&"tel:"!==r.substr(0,4)&&"data:image/"!==r.substr(0,11)&&"ftp://"!==r.substr(0,6)&&"./"!==r.substr(0,2)&&"../"!==r.substr(0,3)&&"#"!==r[0]&&"/"!==r[0])return""}else if("background"===e){if(m.lastIndex=0,m.test(r))return""}else if("style"===e){if(v.lastIndex=0,v.test(r))return"";if(b.lastIndex=0,b.test(r)&&(m.lastIndex=0,m.test(r)))return"";!1!==n&&(r=(n=n||s).process(r))}return r=I(r)},e.escapeHtml=l,e.escapeQuote=x,e.unescapeQuote=w,e.escapeHtmlEntities=y,e.escapeDangerHtml5Entities=k,e.clearNonPrintableCharacter=A,e.friendlyAttrValue=S,e.escapeAttrValue=I,e.onIgnoreTagStripAll=function(){return""},e.StripTagBody=function(t,e){"function"!=typeof e&&(e=function(){});var r=!Array.isArray(t),n=[],o=!1;return{onIgnoreTag:function(a,s,l){if(function(e){return!!r||-1!==i.indexOf(t,e)}(a)){if(l.isClosing){var c="[/removed]",u=l.position+c.length;return n.push([!1!==o?o:l.position,u]),o=!1,c}return o||(o=l.position),"[removed]"}return e(a,s,l)},remove:function(t){var e="",r=0;return i.forEach(n,(function(n){e+=t.slice(r,n[0]),r=n[1]})),e+=t.slice(r)}}},e.stripCommentTag=function(t){for(var e="",r=0;r<t.length;){var n=t.indexOf("\x3c!--",r);if(-1===n){e+=t.slice(r);break}e+=t.slice(r,n);var o=t.indexOf("--\x3e",n);if(-1===o)break;r=o+3}return e},e.stripBlankChar=function(t){var e=t.split("");return(e=e.filter((function(t){var e=t.charCodeAt(0);return 127!==e&&(!(e<=31)||(10===e||13===e))}))).join("")},e.cssFilter=s,e.getDefaultCSSWhiteList=o},859:function(t,e){function r(){var t={"align-content":!1,"align-items":!1,"align-self":!1,"alignment-adjust":!1,"alignment-baseline":!1,all:!1,"anchor-point":!1,animation:!1,"animation-delay":!1,"animation-direction":!1,"animation-duration":!1,"animation-fill-mode":!1,"animation-iteration-count":!1,"animation-name":!1,"animation-play-state":!1,"animation-timing-function":!1,azimuth:!1,"backface-visibility":!1,background:!0,"background-attachment":!0,"background-clip":!0,"background-color":!0,"background-image":!0,"background-origin":!0,"background-position":!0,"background-repeat":!0,"background-size":!0,"baseline-shift":!1,binding:!1,bleed:!1,"bookmark-label":!1,"bookmark-level":!1,"bookmark-state":!1,border:!0,"border-bottom":!0,"border-bottom-color":!0,"border-bottom-left-radius":!0,"border-bottom-right-radius":!0,"border-bottom-style":!0,"border-bottom-width":!0,"border-collapse":!0,"border-color":!0,"border-image":!0,"border-image-outset":!0,"border-image-repeat":!0,"border-image-slice":!0,"border-image-source":!0,"border-image-width":!0,"border-left":!0,"border-left-color":!0,"border-left-style":!0,"border-left-width":!0,"border-radius":!0,"border-right":!0,"border-right-color":!0,"border-right-style":!0,"border-right-width":!0,"border-spacing":!0,"border-style":!0,"border-top":!0,"border-top-color":!0,"border-top-left-radius":!0,"border-top-right-radius":!0,"border-top-style":!0,"border-top-width":!0,"border-width":!0,bottom:!1,"box-decoration-break":!0,"box-shadow":!0,"box-sizing":!0,"box-snap":!0,"box-suppress":!0,"break-after":!0,"break-before":!0,"break-inside":!0,"caption-side":!1,chains:!1,clear:!0,clip:!1,"clip-path":!1,"clip-rule":!1,color:!0,"color-interpolation-filters":!0,"column-count":!1,"column-fill":!1,"column-gap":!1,"column-rule":!1,"column-rule-color":!1,"column-rule-style":!1,"column-rule-width":!1,"column-span":!1,"column-width":!1,columns:!1,contain:!1,content:!1,"counter-increment":!1,"counter-reset":!1,"counter-set":!1,crop:!1,cue:!1,"cue-after":!1,"cue-before":!1,cursor:!1,direction:!1,display:!0,"display-inside":!0,"display-list":!0,"display-outside":!0,"dominant-baseline":!1,elevation:!1,"empty-cells":!1,filter:!1,flex:!1,"flex-basis":!1,"flex-direction":!1,"flex-flow":!1,"flex-grow":!1,"flex-shrink":!1,"flex-wrap":!1,float:!1,"float-offset":!1,"flood-color":!1,"flood-opacity":!1,"flow-from":!1,"flow-into":!1,font:!0,"font-family":!0,"font-feature-settings":!0,"font-kerning":!0,"font-language-override":!0,"font-size":!0,"font-size-adjust":!0,"font-stretch":!0,"font-style":!0,"font-synthesis":!0,"font-variant":!0,"font-variant-alternates":!0,"font-variant-caps":!0,"font-variant-east-asian":!0,"font-variant-ligatures":!0,"font-variant-numeric":!0,"font-variant-position":!0,"font-weight":!0,grid:!1,"grid-area":!1,"grid-auto-columns":!1,"grid-auto-flow":!1,"grid-auto-rows":!1,"grid-column":!1,"grid-column-end":!1,"grid-column-start":!1,"grid-row":!1,"grid-row-end":!1,"grid-row-start":!1,"grid-template":!1,"grid-template-areas":!1,"grid-template-columns":!1,"grid-template-rows":!1,"hanging-punctuation":!1,height:!0,hyphens:!1,icon:!1,"image-orientation":!1,"image-resolution":!1,"ime-mode":!1,"initial-letters":!1,"inline-box-align":!1,"justify-content":!1,"justify-items":!1,"justify-self":!1,left:!1,"letter-spacing":!0,"lighting-color":!0,"line-box-contain":!1,"line-break":!1,"line-grid":!1,"line-height":!1,"line-snap":!1,"line-stacking":!1,"line-stacking-ruby":!1,"line-stacking-shift":!1,"line-stacking-strategy":!1,"list-style":!0,"list-style-image":!0,"list-style-position":!0,"list-style-type":!0,margin:!0,"margin-bottom":!0,"margin-left":!0,"margin-right":!0,"margin-top":!0,"marker-offset":!1,"marker-side":!1,marks:!1,mask:!1,"mask-box":!1,"mask-box-outset":!1,"mask-box-repeat":!1,"mask-box-slice":!1,"mask-box-source":!1,"mask-box-width":!1,"mask-clip":!1,"mask-image":!1,"mask-origin":!1,"mask-position":!1,"mask-repeat":!1,"mask-size":!1,"mask-source-type":!1,"mask-type":!1,"max-height":!0,"max-lines":!1,"max-width":!0,"min-height":!0,"min-width":!0,"move-to":!1,"nav-down":!1,"nav-index":!1,"nav-left":!1,"nav-right":!1,"nav-up":!1,"object-fit":!1,"object-position":!1,opacity:!1,order:!1,orphans:!1,outline:!1,"outline-color":!1,"outline-offset":!1,"outline-style":!1,"outline-width":!1,overflow:!1,"overflow-wrap":!1,"overflow-x":!1,"overflow-y":!1,padding:!0,"padding-bottom":!0,"padding-left":!0,"padding-right":!0,"padding-top":!0,page:!1,"page-break-after":!1,"page-break-before":!1,"page-break-inside":!1,"page-policy":!1,pause:!1,"pause-after":!1,"pause-before":!1,perspective:!1,"perspective-origin":!1,pitch:!1,"pitch-range":!1,"play-during":!1,position:!1,"presentation-level":!1,quotes:!1,"region-fragment":!1,resize:!1,rest:!1,"rest-after":!1,"rest-before":!1,richness:!1,right:!1,rotation:!1,"rotation-point":!1,"ruby-align":!1,"ruby-merge":!1,"ruby-position":!1,"shape-image-threshold":!1,"shape-outside":!1,"shape-margin":!1,size:!1,speak:!1,"speak-as":!1,"speak-header":!1,"speak-numeral":!1,"speak-punctuation":!1,"speech-rate":!1,stress:!1,"string-set":!1,"tab-size":!1,"table-layout":!1,"text-align":!0,"text-align-last":!0,"text-combine-upright":!0,"text-decoration":!0,"text-decoration-color":!0,"text-decoration-line":!0,"text-decoration-skip":!0,"text-decoration-style":!0,"text-emphasis":!0,"text-emphasis-color":!0,"text-emphasis-position":!0,"text-emphasis-style":!0,"text-height":!0,"text-indent":!0,"text-justify":!0,"text-orientation":!0,"text-overflow":!0,"text-shadow":!0,"text-space-collapse":!0,"text-transform":!0,"text-underline-position":!0,"text-wrap":!0,top:!1,transform:!1,"transform-origin":!1,"transform-style":!1,transition:!1,"transition-delay":!1,"transition-duration":!1,"transition-property":!1,"transition-timing-function":!1,"unicode-bidi":!1,"vertical-align":!1,visibility:!1,"voice-balance":!1,"voice-duration":!1,"voice-family":!1,"voice-pitch":!1,"voice-range":!1,"voice-rate":!1,"voice-stress":!1,"voice-volume":!1,volume:!1,"white-space":!1,widows:!1,width:!0,"will-change":!1,"word-break":!0,"word-spacing":!0,"word-wrap":!0,"wrap-flow":!1,"wrap-through":!1,"writing-mode":!1,"z-index":!1};return t}var n=/javascript\s*\:/gim;e.whiteList=r(),e.getDefaultWhiteList=r,e.onAttr=function(t,e,r){},e.onIgnoreAttr=function(t,e,r){},e.safeAttrValue=function(t,e){return n.test(e)?"":e}},860:function(t,e){t.exports={indexOf:function(t,e){var r,n;if(Array.prototype.indexOf)return t.indexOf(e);for(r=0,n=t.length;r<n;r++)if(t[r]===e)return r;return-1},forEach:function(t,e,r){var n,o;if(Array.prototype.forEach)return t.forEach(e,r);for(n=0,o=t.length;n<o;n++)e.call(r,t[n],n,t)},trim:function(t){return String.prototype.trim?t.trim():t.replace(/(^\s*)|(\s*$)/g,"")},trimRight:function(t){return String.prototype.trimRight?t.trimRight():t.replace(/(\s*$)/g,"")}}},861:function(t,e,r){var n=r(834);function o(t){var e,r=n.spaceIndex(t);return e=-1===r?t.slice(1,-1):t.slice(1,r+1),"/"===(e=n.trim(e).toLowerCase()).slice(0,1)&&(e=e.slice(1)),"/"===e.slice(-1)&&(e=e.slice(0,-1)),e}function i(t){return"</"===t.slice(0,2)}var a=/[^a-zA-Z0-9\\_:.-]/gim;function s(t,e){for(;e<t.length;e++){var r=t[e];if(" "!==r)return"="===r?e:-1}}function l(t,e){for(;e<t.length;e++){var r=t[e];if(" "!==r)return"'"===r||'"'===r?e:-1}}function c(t,e){for(;e>0;e--){var r=t[e];if(" "!==r)return"="===r?e:-1}}function u(t){return function(t){return'"'===t[0]&&'"'===t[t.length-1]||"'"===t[0]&&"'"===t[t.length-1]}(t)?t.substr(1,t.length-2):t}e.parseTag=function(t,e,r){"use strict";var n="",a=0,s=!1,l=!1,c=0,u=t.length,f="",p="";t:for(c=0;c<u;c++){var d=t.charAt(c);if(!1===s){if("<"===d){s=c;continue}}else if(!1===l){if("<"===d){n+=r(t.slice(a,c)),s=c,a=c;continue}if(">"===d||c===u-1){n+=r(t.slice(a,s)),f=o(p=t.slice(s,c+1)),n+=e(s,n.length,f,p,i(p)),a=c+1,s=!1;continue}if('"'===d||"'"===d)for(var g=1,h=t.charAt(c-g);""===h.trim()||"="===h;){if("="===h){l=d;continue t}h=t.charAt(c-++g)}}else if(d===l){l=!1;continue}}return a<u&&(n+=r(t.substr(a))),n},e.parseAttr=function(t,e){"use strict";var r=0,o=0,i=[],f=!1,p=t.length;function d(t,r){if(!((t=(t=n.trim(t)).replace(a,"").toLowerCase()).length<1)){var o=e(t,r||"");o&&i.push(o)}}for(var g=0;g<p;g++){var h,m=t.charAt(g);if(!1!==f||"="!==m)if(!1===f||g!==o)if(/\s|\n|\t/.test(m)){if(t=t.replace(/\s|\n|\t/g," "),!1===f){if(-1===(h=s(t,g))){d(n.trim(t.slice(r,g))),f=!1,r=g+1;continue}g=h-1;continue}if(-1===(h=c(t,g-1))){d(f,u(n.trim(t.slice(r,g)))),f=!1,r=g+1;continue}}else;else{if(-1===(h=t.indexOf(m,g+1)))break;d(f,n.trim(t.slice(o+1,h))),f=!1,r=(g=h)+1}else f=t.slice(r,g),r=g+1,o='"'===t.charAt(r)||"'"===t.charAt(r)?r:l(t,g+1)}return r<t.length&&(!1===f?d(t.slice(r)):d(f,u(n.trim(t.slice(r))))),n.trim(i.join(" "))}},921:function(t,e,r){"use strict";var n=r(14),o=r(20);n(e,"__esModule",{value:!0}),e.default=void 0;var i=o(r(159)),a=o(r(162)),s=o(r(0)),l=r(922),c=function(t){var e,r,n,o=l.whiteList;o.ol=["type","start"],(0,i.default)(e=(0,a.default)(o)).call(e,(function(t){return o[t].push("style")}));var c=null===(r=l.cssFilter)||void 0===r?void 0:null===(n=r.options)||void 0===n?void 0:n.whiteList;c["vertical-align"]=!0;var u={whiteList:o,stripIgnoreTag:!0,cssFilter:c};return(s.default.createElement("div",{className:t.className,style:t.style,onScroll:t.onScroll,dangerouslySetInnerHTML:{__html:l(t.html,u)}}))};e.default=c},922:function(t,e,r){var n=r(858),o=r(861),i=r(925);function a(t,e){return new i(e).process(t)}(e=t.exports=a).filterXSS=a,e.FilterXSS=i,function(){for(var t in n)e[t]=n[t];for(var r in o)e[r]=o[r]}(),"undefined"!=typeof window&&(window.filterXSS=t.exports),"undefined"!=typeof self&&"undefined"!=typeof DedicatedWorkerGlobalScope&&self instanceof DedicatedWorkerGlobalScope&&(self.filterXSS=t.exports)},923:function(t,e,r){var n=r(859),o=r(924);r(860);function i(t){return null==t}function a(t){(t=function(t){var e={};for(var r in t)e[r]=t[r];return e}(t||{})).whiteList=t.whiteList||n.whiteList,t.onAttr=t.onAttr||n.onAttr,t.onIgnoreAttr=t.onIgnoreAttr||n.onIgnoreAttr,t.safeAttrValue=t.safeAttrValue||n.safeAttrValue,this.options=t}a.prototype.process=function(t){if(!(t=(t=t||"").toString()))return"";var e=this.options,r=e.whiteList,n=e.onAttr,a=e.onIgnoreAttr,s=e.safeAttrValue;return o(t,(function(t,e,o,l,c){var u=r[o],f=!1;if(!0===u?f=u:"function"==typeof u?f=u(l):u instanceof RegExp&&(f=u.test(l)),!0!==f&&(f=!1),l=s(o,l)){var p,d={position:e,sourcePosition:t,source:c,isWhite:f};return f?i(p=n(o,l,d))?o+":"+l:p:i(p=a(o,l,d))?void 0:p}}))},t.exports=a},924:function(t,e,r){var n=r(860);t.exports=function(t,e){";"!==(t=n.trimRight(t))[t.length-1]&&(t+=";");var r=t.length,o=!1,i=0,a=0,s="";function l(){if(!o){var r=n.trim(t.slice(i,a)),l=r.indexOf(":");if(-1!==l){var c=n.trim(r.slice(0,l)),u=n.trim(r.slice(l+1));if(c){var f=e(i,s.length,c,u,r);f&&(s+=f+"; ")}}}i=a+1}for(;a<r;a++){var c=t[a];if("/"===c&&"*"===t[a+1]){var u=t.indexOf("*/",a+2);if(-1===u)break;i=(a=u+1)+1,o=!1}else"("===c?o=!0:")"===c?o=!1:";"===c?o||l():"\n"===c&&l()}return n.trim(s)}},925:function(t,e,r){var n=r(833).FilterCSS,o=r(858),i=r(861),a=i.parseTag,s=i.parseAttr,l=r(834);function c(t){return null==t}function u(t){(t=function(t){var e={};for(var r in t)e[r]=t[r];return e}(t||{})).stripIgnoreTag&&(t.onIgnoreTag&&console.error('Notes: cannot use these two options "stripIgnoreTag" and "onIgnoreTag" at the same time'),t.onIgnoreTag=o.onIgnoreTagStripAll),t.whiteList||t.allowList?t.whiteList=function(t){var e={};for(var r in t)Array.isArray(t[r])?e[r.toLowerCase()]=t[r].map((function(t){return t.toLowerCase()})):e[r.toLowerCase()]=t[r];return e}(t.whiteList||t.allowList):t.whiteList=o.whiteList,t.onTag=t.onTag||o.onTag,t.onTagAttr=t.onTagAttr||o.onTagAttr,t.onIgnoreTag=t.onIgnoreTag||o.onIgnoreTag,t.onIgnoreTagAttr=t.onIgnoreTagAttr||o.onIgnoreTagAttr,t.safeAttrValue=t.safeAttrValue||o.safeAttrValue,t.escapeHtml=t.escapeHtml||o.escapeHtml,this.options=t,!1===t.css?this.cssFilter=!1:(t.css=t.css||{},this.cssFilter=new n(t.css))}u.prototype.process=function(t){if(!(t=(t=t||"").toString()))return"";var e=this.options,r=e.whiteList,n=e.onTag,i=e.onIgnoreTag,u=e.onTagAttr,f=e.onIgnoreTagAttr,p=e.safeAttrValue,d=e.escapeHtml,g=this.cssFilter;e.stripBlankChar&&(t=o.stripBlankChar(t)),e.allowCommentTag||(t=o.stripCommentTag(t));var h=!1;e.stripIgnoreTagBody&&(h=o.StripTagBody(e.stripIgnoreTagBody,i),i=h.onIgnoreTag);var m=a(t,(function(t,e,o,a,h){var m={sourcePosition:t,position:e,isClosing:h,isWhite:Object.prototype.hasOwnProperty.call(r,o)},v=n(o,a,m);if(!c(v))return v;if(m.isWhite){if(m.isClosing)return"</"+o+">";var b=function(t){var e=l.spaceIndex(t);if(-1===e)return{html:"",closing:"/"===t[t.length-2]};var r="/"===(t=l.trim(t.slice(e+1,-1)))[t.length-1];return r&&(t=l.trim(t.slice(0,-1))),{html:t,closing:r}}(a),x=r[o],w=s(b.html,(function(t,e){var r=-1!==l.indexOf(x,t),n=u(o,t,e,r);return c(n)?r?(e=p(o,t,e,g))?t+'="'+e+'"':t:c(n=f(o,t,e,r))?void 0:n:n}));return a="<"+o,w&&(a+=" "+w),b.closing&&(a+=" /"),a+=">"}return c(v=i(o,a,m))?d(a):v}),d);return h&&(m=h.remove(m)),m},t.exports=u}}]);