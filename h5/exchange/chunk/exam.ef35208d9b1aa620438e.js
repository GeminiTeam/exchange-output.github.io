(window.webpackJsonp=window.webpackJsonp||[]).push([[20,40,44],{124:function(e,n,t){"use strict";(function(e){var a=t(44),o=t(107),r=t(14),i=t(35),l=t(20);r(n,"__esModule",{value:!0}),n.default=void 0;var s=l(t(265)),c=l(t(159)),u=l(t(158)),d=l(t(754)),m=l(t(759)),f=function(e,n){if(!n&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var t=w(n);if(t&&t.has(e))return t.get(e);var o={},l=r&&i;for(var s in e)if("default"!==s&&Object.prototype.hasOwnProperty.call(e,s)){var c=l?i(e,s):null;c&&(c.get||c.set)?r(o,s,c):o[s]=e[s]}o.default=e,t&&t.set(e,o);return o}(t(0)),p=t(256),h=t(281),g=l(t(803)),b=t(775),v=t(255);function w(e){if("function"!=typeof o)return null;var n=new o,t=new o;return(w=function(e){return e?t:n})(e)}t(729);var x=function(n){var t=(0,f.useState)(!1),a=(0,m.default)(t,2),o=a[0],r=a[1],i=(0,f.useState)(),l=(0,m.default)(i,2),w=l[0],x=l[1],y=(0,f.useState)(),k=(0,m.default)(y,2),E=k[0],A=k[1],S=(0,f.useState)(0),T=(0,m.default)(S,2),N=T[0],q=T[1],C=(0,f.useState)(0),I=(0,m.default)(C,2),B=I[0],O=I[1],F=(0,f.useState)([]),z=(0,m.default)(F,2),M=z[0],_=z[1],P=(0,f.useState)(!1),W=(0,m.default)(P,2),J=W[0],j=W[1],R=(0,b.useObserver)(v.jsbridgeStore).jsbridgeStatus;(0,f.useEffect)((function(){V()}),[R]);var V=function(){e({url:"exam.getPaper",callback:function(e){x(null==e?void 0:e.topics),A(null==e?void 0:e.paperId)}})},D=function(e,n){var t=JSON.parse((0,s.default)(w));t[e].answers[0]!=n?t[e].myAnswer=2:t[e].myAnswer=1,x(t);var a=0,o=0,r=[];(0,c.default)(t).call(t,(function(e,n){e.myAnswer&&(a+=1,2==e.myAnswer&&(o+=1,r.push(n)))})),q(a),O(o),_(r)};return f.default.createElement(h.WrapperIndexCmp,null,f.default.createElement(g.default,{goBack:function(){console.log("goback")},goClose:function(){console.log("closeAll")},isH5:function(e){r(e)},titleName:"Virtual Asset Knowledge Test"}),f.default.createElement("div",{className:o?"examWrapper hasTitle":"examWrapper"},f.default.createElement("div",{className:"top"},f.default.createElement("div",{className:"content1"},"You can click “",f.default.createElement("a",{onClick:function(){location.href="https://www.hashkey.com/cn/academy"}},"Go To Academy"),"” to get more detail about Virtual Asset Knowledge."),f.default.createElement("div",{className:"content2"},"This test will take you about 1-2 minutes")),f.default.createElement("div",{className:"questions"},null==w?void 0:(0,c.default)(w).call(w,(function(e,n){var t,a;return(f.default.createElement("div",{className:"questionItem questionItem".concat(n),key:n},f.default.createElement("div",{className:"quesTit"},(0,u.default)(t="".concat(n+1,".")).call(t,e.title)),f.default.createElement(p.Radio.Group,{onChange:(0,d.default)(D).call(D,void 0,n)},f.default.createElement(p.Space,{className:e.myAnswer?2==e.myAnswer?"quesOptions error":"quesOptions success":"quesOptions"},null==e?void 0:null===(a=e.items)||void 0===a?void 0:(0,c.default)(a).call(a,(function(e,n){return f.default.createElement(p.Radio,{icon:function(e){return e?f.default.createElement("div",{className:"adm-radio-icon checked"},f.default.createElement("span",null)):f.default.createElement("div",{className:"adm-radio-icon"})},value:n,key:n},e)}))))))}))),J?f.default.createElement("div",{className:"bottom"},f.default.createElement("div",{className:B>0?"bottomTit error":"bottomTit success"},B>0?"".concat(B," answers are incorr"):"All answers are correct"),f.default.createElement(p.Button,{onClick:function(){var n=[],t=JSON.parse((0,s.default)(w));(0,c.default)(t).call(t,(function(e){n.push({optionSelectedList:e.answers,questionId:e.questionId})})),e({url:"exam.submitAnswers",method:"POST",params:{paperId:E,submittedList:n},callback:function(e){window.flutter_inappwebview.callHandler("closeAll")}})},disabled:B>0,className:0==B?"ready":""},B>0?"Submit":"Success")):f.default.createElement("div",{className:"bottom"},f.default.createElement("div",{className:"bottomTit"},"You have finished ",N,"/",null==w?void 0:w.length," questions."),f.default.createElement(p.Button,{onClick:function(){M.length>0&&document.querySelector(".questionItem".concat(M[0])).scrollIntoView(!0),j(!0)},disabled:N!=(null==w?void 0:w.length),className:N==(null==w?void 0:w.length)?"ready":""},N==(null==w?void 0:w.length)?"Prompt Answers":"Submit"))))};n.default=x}).call(this,t(799).default)},281:function(e,n,t){"use strict";var a=t(14),o=t(20);a(n,"__esModule",{value:!0}),n.WrapperIndexCmp=void 0;var r,i=o(t(156)),l=o(t(157)).default.div(r||(r=(0,i.default)(["\n    height: 100vh;\n    overflow: hidden;\n    .examWrapper {\n        position: relative;\n        height: 100vh;\n        padding: 0 16px;\n        &.hasTitle {\n            height: calc(100vh - 45px) !important;    \n        }\n        .top {\n            padding: 19px 0 16px 0;\n            border-bottom: 1px solid #E9E9EA;\n            font-family: 'BarlowRegular';\n            font-weight: 400;\n            .content1 {\n                font-size: 12px;\n                color: #1DA8B9;\n                line-height: 16px;\n                a {\n                    color: #1DA8B9;\n                    text-decoration: underline;\n                    font-family: 'BarlowMedium';\n                }\n            }\n            .content2 {\n                font-size: 13px;\n                color: rgba(20,20,28,0.5);\n                line-height: 18px;\n                margin-top: 8px;\n            }\n        }\n        .questions {\n            width: 100%;\n            height: calc(100% - 234px);\n            overflow-y: auto;\n            .questionItem {\n                margin-top: 24px;\n                &:nth-child(1) {\n                    margin-top: 16px;\n                }\n            }\n            .quesTit {\n                font-size: 16px;\n                font-family: 'BarlowMedium';\n                font-weight: 500;\n                color: #14141C;\n                line-height: 21px;\n                padding-bottom: 12px;\n            }\n            .quesOptions {\n                width: 100%;\n                .adm-space-item {\n                    width: calc(50% - 8px);\n                    &:nth-child(1) {\n                        margin-right: 16px;\n                    }\n                }\n                .adm-radio {\n                    box-sizing: border-box;\n                    width: 100%;\n                    height: 52px;\n                    background: rgba(255,255,255,0);\n                    border-radius: 4px;\n                    border: 1px solid #E9E9EA;\n                    font-size: 15px;\n                    font-family: 'BarlowRegular';\n                    font-weight: 400;\n                    color: rgba(20,20,28,0.76);\n                    .adm-radio-icon {\n                        margin-left: 12px;\n                        width: 16px;\n                        height: 16px;\n                        border: 1px solid #CCCCCE;\n                        &.checked {\n                            position: relative;\n                            background-color: #fff;\n                            span {\n                                position: absolute;\n                                display: inline-block;\n                                top: 0;\n                                bottom: 0;\n                                left: 0;\n                                right: 0;\n                                margin: auto;\n                                width: 10px;\n                                height: 10px;\n                                border-radius: 50%;\n                            }\n                        }\n                    }\n                    .adm-radio-content {\n                        line-height: 20px;\n                        padding: 16px 16px 16px 8px;\n                    }\n                    &.adm-radio-checked {\n                        border: 0;\n                        font-family: 'BarlowMedium';\n                        font-weight: 500;\n                    }\n                }\n                &.success {\n                    .adm-radio {\n                        .adm-radio-icon {\n                            &.checked {\n                                border-color: #22AE47;\n                                span {\n                                    background-color: #22AE47;\n                                }\n                            }\n                        }\n                        &.adm-radio-checked {\n                            background: rgba(238, 249, 241, 0.5);\n                            color: #22AE47;\n                        }\n                    }\n                }\n                &.error {\n                    .adm-radio {\n                        .adm-radio-icon {\n                            &.checked {\n                                border-color: #E0154A;\n                                span {\n                                    background-color: #E0154A;\n                                }\n                            }\n                        }\n                        &.adm-radio-checked {\n                            background: rgba(253, 237, 241, 0.5);\n                            color: #E0154A;\n                        }\n                    }\n                }\n            }\n        }\n        .bottom {\n            margin: 24px 0 37px 0;\n            font-family: 'BarlowMedium';\n            font-weight: 500;\n            .bottomTit {\n                font-size: 13px;\n                color: rgba(20,20,28,0.5);\n                line-height: 18px;\n                &.success {\n                    color: #22AE47;\n                }\n                &.error {\n                    color: #CA1343;\n                }\n            }\n            button {\n                margin-top: 14px;\n                width: 100%;\n                height: 48px;\n                background: #E9E9EA;\n                border-radius: 4px;\n                font-size: 16px;\n                color: rgba(20,20,28,0.3);\n                opacity: 1;\n                &.ready {\n                    color: #fff;\n                    background: #903F98;\n                }\n            }\n        }\n    }\n"])));n.WrapperIndexCmp=l},729:function(e){e.exports=JSON.parse('{"code":200,"data":{"paperId":155,"topics":[{"title":"Virtual asset can be traded 24/7.","items":["True","False"],"answers":[1],"rank":2},{"title":"Is it Safe to trade on a regulated exchange.","items":["True","False"],"answers":[1],"rank":3},{"title":"Protecting your account credentials is the best way to secure your virtual asset account.","items":["True","False"],"answers":[1],"rank":4},{"title":"Investor should always be cautious when investing in Stablecoins.","items":["True","False"],"answers":[1],"rank":6},{"title":"There is no limit to the maximum loss of a virtual asset.","items":["True","False"],"answers":[1],"rank":8},{"title":"Private keys are important item for virtual asset owners to protect.","items":["True","False"],"answers":[1],"rank":9},{"title":"A cryptocurrency is a digital or virtual currency secured by cryptography.","items":["True","False"],"answers":[1],"rank":11},{"title":"Dogecoin is the name for digital currencies that link their value to an underlying asset such as national currencies or precious metals.","items":["True","False"],"answers":[2],"rank":12}]}}')}}]);