(window.webpackJsonp=window.webpackJsonp||[]).push([[7,18,20],{112:function(e,t,n){"use strict";var a=n(41),i=n(103),o=n(24),l=n(42),r=n(29);o(t,"__esModule",{value:!0}),t.default=void 0;var s=r(n(145)),u=r(n(715)),c=r(n(805)),d=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var n=h(t);if(n&&n.has(e))return n.get(e);var i={},r=o&&l;for(var s in e)if("default"!==s&&Object.prototype.hasOwnProperty.call(e,s)){var u=r?l(e,s):null;u&&(u.get||u.set)?o(i,s,u):i[s]=e[s]}i.default=e,n&&n.set(e,i);return i}(n(0)),f=n(259),m=n(257),p=r(n(806));function h(e){if("function"!=typeof i)return null;var t=new i,n=new i;return(h=function(e){return e?n:t})(e)}var g=n(694),v=function(e){var t,n=(0,d.useState)(!1),a=(0,c.default)(n,2),i=a[0],o=a[1],l=(0,d.useState)(),r=(0,c.default)(l,2),h=r[0],v=r[1],x=(0,d.useState)({num:0,result:!1}),b=(0,c.default)(x,2),w=b[0],y=b[1],E=(0,d.useState)(!0),k=(0,c.default)(E,2),B=k[0],N=k[1],A=(0,d.useState)(),C=(0,c.default)(A,2),F=C[0],D=C[1],T=(0,d.useState)([0,0,0,0,0,0,0,0,0,0]),S=(0,c.default)(T,2),W=S[0],z=S[1],q=(0,d.useRef)(null);(0,d.useEffect)((function(){v(g.data)}),[]);var M=function(){var e;D(F-1),null===(e=q.current)||void 0===e||e.swipePrev()},R=function(){if(9==F){var e=0;(0,s.default)(W).call(W,(function(t){10==t&&(e+=t)})),y(e>=80?{num:e,result:!0}:{num:e,result:!1}),N(!1)}else{if(!F&&0!=F)return;var t;if(0!=W[F])D(F+1),null===(t=q.current)||void 0===t||t.swipeNext(),window.scrollTo(0,0)}},I=function(e,t){D(e),W[e]=[3,0,0,0,3,2,3,3,1,3][e]==t?10:-1,z(W)},O=function(){y({num:0,result:!1}),N(!0),D(0),z([0,0,0,0,0,0,0,0,0,0])};return d.default.createElement(m.WrapperIndexCmp,null,d.default.createElement(p.default,{goBack:function(){console.log("goback")},goClose:function(){console.log("closeAll")},isWeb:function(e){o(e)},titleName:"Virtual Asset Knowledge Test"}),B?d.default.createElement(f.Swiper,{indicator:function(){return null},allowTouchMove:!1,ref:q,className:i?"hasTitle":""},null==h?void 0:null===(t=h.topics)||void 0===t?void 0:(0,s.default)(t).call(t,(function(e,t){var n,a,i;return(d.default.createElement(f.Swiper.Item,{key:t},d.default.createElement("div",{className:"quesMain"},d.default.createElement("div",{className:"quesNum"},d.default.createElement("span",null,t+1),"/",null==h?void 0:null===(n=h.topics)||void 0===n?void 0:n.length),d.default.createElement("div",{className:"quesTit"},e.title),d.default.createElement(f.Radio.Group,{onChange:(0,u.default)(I).call(I,void 0,t)},d.default.createElement(f.Space,{className:"quesOptions",direction:"vertical"},null==e?void 0:null===(a=e.items)||void 0===a?void 0:(0,s.default)(a).call(a,(function(e,t){return d.default.createElement(f.Radio,{icon:function(e){return e?d.default.createElement("div",{className:"adm-radio-icon checked"},d.default.createElement("span",null)):d.default.createElement("div",{className:"adm-radio-icon"})},value:t,key:t},e)})))),d.default.createElement("div",{className:"btns"},0!=t&&d.default.createElement(f.Button,{className:"prevBtn",onClick:M},"Previous"),d.default.createElement(f.Button,{className:"nextBtn ".concat(0==t?"onlyNext":""),onClick:R},(null==h?void 0:null===(i=h.topics)||void 0===i?void 0:i.length)==t+1?"Submit":"Save and Next")))))}))):d.default.createElement("div",{className:"result"},d.default.createElement(f.ProgressCircle,{percent:w.num,style:{"--fill-color":"".concat(w.result?"#22AE47":"#E0154A"),"--size":"188px","--track-color":"#F6F6F8","--track-width":"3px"}},d.default.createElement("div",{className:"innerWrap"},d.default.createElement("div",{className:w.result?"num":"num fail"},w.num),d.default.createElement("div",{className:"score"},"Score"))),w.result?d.default.createElement("div",{className:"name"},"CONGRATULATION"):d.default.createElement("div",{className:"name fail"},"FAILED"),d.default.createElement("div",{className:"content"},w.result?"You’ve passed the Quiz":"Don’t worry, you have 2 chances left")," :",!w.result&&d.default.createElement("div",{className:"detail"},"According to relevant requirements, you must reach 80 points to continue identity authentication, which does not meet the requirements for high-risk financial businesses such as digital currency transactions; if you still want to invest in digital currency, please go to the investor education center to learn and fill out the questionnaire again"),w.result?d.default.createElement("div",{className:"btns"},d.default.createElement(f.Button,{className:"btn1 riskBtn",onClick:function(){e.history.push("tolerance")}},"Go to Risk Tolerance Test"),d.default.createElement(f.Button,{className:"btn2 reTakeBtn",onClick:O},"Re-Take Test")):d.default.createElement("div",{className:"btns"},d.default.createElement(f.Button,{className:"btn1 reTakeBtn",onClick:O},"Re-Take Test"),d.default.createElement(f.Button,{className:"btn2 academyBtn",onClick:function(){location.href="https://www.hashkey.com/cn/academy"}},"Academy"))))};t.default=v},257:function(e,t,n){"use strict";var a=n(24),i=n(29);a(t,"__esModule",{value:!0}),t.WrapperIndexCmp=void 0;var o,l=i(n(240)),r=i(n(241)).default.div(o||(o=(0,l.default)(["\n    min-height: 100vh;\n    .adm-swiper-item {\n        position: relative;\n        min-height: 100vh;\n        .quesMain {\n            padding: 16px 16px 110px 16px;\n        }\n        .quesNum {\n            font-size: 17px;\n            font-weight: 500;\n            font-family: 'BarlowMedium';\n            color: rgba(20,20,28,0.4);\n            line-height: 22px;\n            span {\n                font-size: 34px;\n                font-weight: 500;\n                color: #3A478F;\n                line-height: 41px;\n            }\n        }\n        .quesTit {\n            font-size: 16px;\n            font-weight: 500;\n            font-family: 'BarlowMedium';\n            color: #14141C;\n            line-height: 21px;\n            padding: 8px 0 24px 0;\n            margin-bottom: 24px;\n            border-bottom: 1px solid #E9E9EA;\n        }\n        .quesOptions {\n            width: 100%;\n            .adm-space-item {\n                margin-bottom: 16px;\n                width: 100%;\n            }\n            .adm-radio {\n                width: 100%;\n                min-height: 52px;\n                background: rgba(255,255,255,0);\n                border-radius: 2px;\n                border: 1px solid #E9E9EA;\n                font-size: 15px;\n                font-family: 'BarlowRegular';\n                font-weight: 400;\n                color: rgba(20,20,28,0.8);\n                .adm-radio-icon {\n                    margin-left: 12px;\n                    width: 16px;\n                    height: 16px;\n                    border: 1px solid #9A999D;\n                    &.checked {\n                        background-color: #fff;\n                        border-color: #3A478F;\n                        position: relative;\n                        span {\n                            position: absolute;\n                            display: inline-block;\n                            top: 0;\n                            bottom: 0;\n                            left: 0;\n                            right: 0;\n                            margin: auto;\n                            width: 10px;\n                            height: 10px;\n                            border-radius: 50%;\n                            background-color: #3A478F;\n                        }\n                    }\n                }\n                .adm-radio-content {\n                    line-height: 20px;\n                    padding: 16px 16px 16px 8px;\n                }\n                &.adm-radio-checked {\n                    color: #3A478F;\n                    background: rgba(240,241,246,0.5);\n                }\n            }\n        }\n    }\n    .hasTitle .adm-swiper-item {\n        min-height: calc(100vh - 45px) !important;\n    }\n    .btns {\n        font-size: 17px;\n        font-weight: 500;\n        line-height: 22px;\n        button {\n            position: absolute;\n            bottom: 45px;\n            height: 48px;\n            border-radius: 4px;\n            span {\n                font-family: 'BarlowMedium';\n            }\n        }\n        .prevBtn {\n            width: calc(50vw - 22px);\n            background: rgba(255,255,255,0);\n            border: 1px solid #DBDBDC;\n            color: #14141C;\n            left: 16px;\n        }\n        .nextBtn {\n            width: calc(50vw - 22px);\n            float: right;\n            color: #FFFFFF;\n            background: #903F98;\n            right: 16px;\n            &.onlyNext {\n                width: calc(100vw - 32px);\n            }\n        }\n        .btn1, .btn2 {\n            width: calc(100vw - 32px);\n            left: 16px;\n        }\n        .btn1 {\n            bottom: 109px;\n            color: #FFFFFF;\n            background: #903F98;\n        }\n        .btn2 {\n            bottom: 45px;\n            border: 1px solid #DBDBDC;\n            background: rgba(255,255,255,0);\n            color: #14141C;\n        }\n    }\n    .result {\n        text-align: center;\n        .adm-progress-circle {\n            margin: 56px auto 32px;\n        }\n        .adm-progress-circle-info {\n            .resultBg, .innerWrap {\n                position: absolute;\n                top: 0;\n                left: 0;\n                right: 0;\n                bottom: 0;\n                margin: auto;\n                border-radius: 50%;\n            }\n            .innerWrap {\n                width: 154px;\n                height: 154px;\n                background: #FFFFFF;\n                box-shadow: 0px 7px 20px 0px rgba(0,0,0,0.08);\n                text-align: center;\n                font-family: 'BarlowMedium';\n                .num {\n                    color: #22AE47;\n                    padding-top: 35px;\n                    font-size: 56px;\n                    font-weight: 500;\n                    line-height: 64px;\n                    &.fail {\n                        color: #E0154A;\n                    }\n                }\n                .score {\n                    font-size: 15px;\n                    line-height: 20px;\n                    font-weight: 500;\n                    color: rgba(20,20,28,0.6);\n                }\n            }\n        }\n        .name {\n            font-size: 22px;\n            font-family: 'BarlowSemiBold';\n            font-weight: 600;\n            color: #22AE47;\n            line-height: 28px;\n            margin-bottom: 4px;\n            &.fail {\n                color: #E0154A;\n            }\n        }\n        .content {\n            font-size: 13px;\n            font-family: 'BarlowRegular';\n            font-weight: 400;\n            color: rgba(20,20,28,0.6);\n            line-height: 18px;\n        }\n        .detail {\n            margin: 40px 28px 0 28px;\n            text-align: left;\n            font-size: 13px;\n            font-family: 'BarlowRegular';\n            font-weight: 400;\n            color: rgba(20,20,28,0.6);\n            line-height: 18px;\n        }\n    }\n"])));t.WrapperIndexCmp=r},694:function(e){e.exports=JSON.parse('{"code":"0","message":"","data":{"paperId":2,"version":2,"topics":[{"title":"1.Which of the following is a stable coin?","items":["A.BTC","B.ETH","C.SOL","D.USDC"]},{"title":"2.Which of the following is true about virtual asset trading?","items":["A.Virtual asset can be traded 24/7 ","B.Virtual assets are risk free","C.US Dollar cash is considered a virtual asset","D.You can never lose money with virtual asset trading"]},{"title":"3.What is the safest way to trade virtual assets?","items":["A.Trade on a regulated exchange like HashKey","B.Purchase from a stranger on the street","C.Find someone to trade with on the internet","D.Exchange at the local sports betting shop"]},{"title":"4.What should you do to protect your virtual asset account?","items":["A.Keep your email, login and passwords protected at all times","B.Find a colleague to help you access your account remotely","C.Give your password to a stranger who claims to be your relative","D.Write your email and password on public forums"]},{"title":"5.Which of the following is/are risk(s) that might be associated with trading virtual assets?","items":["A.Virtual assets are high risk products","B.Many virtual assets are not backed by governments or monetary authorities.","C.Trading virtual assets might be irreversible. ","D.All the above"]},{"title":"6.Which of the following is a virtual asset?","items":["A.Stocks","B.Bonds","C.Bitcoin","D.Physical gold"]},{"title":"7.Which of the following is not a virtual asset?","items":["A.Bitcoin","B.Ethereum","C.Solana","D.Hong Kong Dollars"]},{"title":"8.What is the maximum loss of a virtual asset?","items":["A.10%","B.20%","C.30%","D.No Limit"]},{"title":"9.Which of the following items should virtual asset owners be most careful with?","items":["A.Internet speed","B.Private key","C.Browser provider","D.Bank provider"]},{"title":"10.What is a security token?","items":["A.Gold","B.Physical property","C.A physical art collection","D.A token treated as a security by regulators"]}]}}')}}]);