(()=>{var e={705:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var i="",n=void 0!==t[5];return t[4]&&(i+="@supports (".concat(t[4],") {")),t[2]&&(i+="@media ".concat(t[2]," {")),n&&(i+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),i+=e(t),n&&(i+="}"),t[2]&&(i+="}"),t[4]&&(i+="}"),i})).join("")},t.i=function(e,i,n,o,r){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(n)for(var a=0;a<this.length;a++){var p=this[a][0];null!=p&&(s[p]=!0)}for(var l=0;l<e.length;l++){var w=[].concat(e[l]);n&&s[w[0]]||(void 0!==r&&(void 0===w[5]||(w[1]="@layer".concat(w[5].length>0?" ".concat(w[5]):""," {").concat(w[1],"}")),w[5]=r),i&&(w[2]?(w[1]="@media ".concat(w[2]," {").concat(w[1],"}"),w[2]=i):w[2]=i),o&&(w[4]?(w[1]="@supports (".concat(w[4],") {").concat(w[1],"}"),w[4]=o):w[4]="".concat(o)),t.push(w))}},t}},738:e=>{"use strict";e.exports=function(e){return e[1]}},822:e=>{e.exports=function(e,t,i){var n=new XMLHttpRequest;n.onreadystatechange=function(){4==n.readyState&&(200==n.status?t&&t(n.responseText):i&&i(n))},n.open("GET",e,!0),n.send(null)}},619:e=>{e.exports=function(e){var t=document.createElement("style");t.type="text/css",document.getElementsByTagName("head")[0].appendChild(t),t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e))}},399:(e,t,i)=>{function n(e,t,i){return n=o()?Reflect.construct.bind():function(e,t,i){var n=[null];n.push.apply(n,t);var o=new(Function.bind.apply(e,n));return i&&r(o,i.prototype),o},n.apply(null,arguments)}function o(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function r(e,t){return r=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},r(e,t)}function s(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}i(619);var p=i(822),l=function(){function e(t,i,n,o,r,s){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),a(this,"layout",void 0),a(this,"item",void 0),a(this,"api",void 0),a(this,"arrItemid",void 0),a(this,"itemid",void 0),a(this,"arrIdBox",void 0),a(this,"lengthItem",void 0),a(this,"idBox",void 0),a(this,"$",void 0),this.layout=t,this.item=i,this.api=o,this.css=n,this.lengthItem=r,this.idBox=s,this.$=document.querySelector.bind(document),this.arrItemid=/([\d]+).chn/.exec(document.URL+""),this.itemid=this.arrItemid?this.arrItemid[1]:""}var t,i;return t=e,(i=[{key:"renderHtml",value:function(e){window.String.prototype.interpolate=function(e){var t=Object.keys(e),i=Object.values(e);return n(Function,t.concat(["return `".concat(this,"`;")])).apply(void 0,i)};var t=JSON.parse(e),i=t.algid,o=t.boxid,r=!1;window._ADM_Channel&&-1!=window._ADM_Channel.indexOf("detail")&&(r=!0);var s="";this.arrIdBox=[];for(var a=0;a<this.lengthItem;a++){var p=t.recommend[a];this.arrIdBox.push(p.id);var l=r?' data-popup-url="'.concat(item.url,'" '):' data-popup-url="" ',w=r?' ispopup="1" ':' ispopup="0" ';s+=this.item.interpolate({item:p,chkPopup:w,dataPopupUrl:l})}var c=this.layout.interpolate({content:s,boxid:o,algid:i});this.$(this.idBox).innerHTML=c}},{key:"renderContentBox",value:function(){var e=this;p(this.api,(function(t){e.renderHtml(t)}))}}])&&s(t.prototype,i),Object.defineProperty(t,"prototype",{writable:!1}),e}();e.exports=l},750:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>a});var n=i(738),o=i.n(n),r=i(705),s=i.n(r)()(o());s.push([e.id,'@font-face{font-family:SFD-Medium;src:url(https://static.mediacdn.vn/web_font/SFD-Medium.woff2)}@font-face{font-family:SFD-SemiBold;src:url(https://static.mediacdn.vn/web_font/SFD-Bold.woff2)}@font-face{font-family:SFD-Bold;src:url(https://static.mediacdn.vn/web_font/SFD-Bold.woff2)}#aiservice-foryou a{text-decoration:none}#aiservice-foryou .gk_home20-wrapper .gknews_box[type=newest] h3{margin-bottom:15px;border-bottom:1px solid #d6dce2;box-sizing:border-box}#aiservice-foryou .gk_home20-wrapper .gknews_box[type=newest] .noticeable-news-title{font-size:14px;line-height:140%;text-transform:uppercase;color:#555;font-family:SFD-Bold;position:relative;display:block}#aiservice-foryou .gk_home20-wrapper .gknews_box[type=newest] .noticeable-news .list-nn{display:flex;flex-direction:column;list-style:none}#aiservice-foryou .gk_home20-wrapper .gknews_box[type=newest] .noticeable-news .list-nn .nn-item{padding-bottom:12px;border-bottom:1px dashed #d6dce2;margin-bottom:12px}#aiservice-foryou .gk_home20-wrapper .gknews_box[type=newest] .noticeable-news .list-nn .nn-item .item-gr{display:flex}#aiservice-foryou .gk_home20-wrapper .gknews_box[type=newest] .noticeable-news .list-nn .nn-item.first-noticeable-news .item-gr .item-news{flex-direction:column}#aiservice-foryou .gk_home20-wrapper .gknews_box[type=newest] .noticeable-news .list-nn .nn-item .item-gr .item-news{width:100%}#aiservice-foryou .gk_home20-wrapper .gknews_box[type=newest] .noticeable-news .list-nn .nn-item .item-gr .item-news{display:flex;justify-content:space-between}#aiservice-foryou .gk_home20-wrapper .gknews_box[type=newest] .noticeable-news .list-nn .nn-item.first-noticeable-news .item-gr .item-news .item-news-thumb{width:100%}#aiservice-foryou .gk_home20-wrapper .gknews_box[type=newest] .noticeable-news .list-nn .nn-item .item-gr .item-news .item-news-thumb{display:block}#aiservice-foryou .gk_home20-wrapper .gknews_box[type=newest] .noticeable-news .list-nn .nn-item .item-gr .item-news .item-news-thumb i{display:block;width:100%;padding-top:61.5%;position:relative;margin-bottom:10px;border-radius:4px;overflow:hidden}#aiservice-foryou .gk_home20-wrapper .gknews_box[type=newest] .noticeable-news .list-nn .nn-item .item-gr .item-news .item-news-thumb i img{position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover}#aiservice-foryou .gk_home20-wrapper .gknews_box[type=newest] .noticeable-news .list-nn .nn-item.first-noticeable-news .item-gr .item-news h4{width:100%}#aiservice-foryou .gk_home20-wrapper .gknews_box[type=newest] .noticeable-news .list-nn .nn-item.first-noticeable-news .item-gr .item-news h4 .item-news-title{font-family:SFD-SemiBold;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}#aiservice-foryou .gk_home20-wrapper .gknews_box[type=newest] .noticeable-news .list-nn .nn-item .item-gr .item-news h4 .item-news-title{font-size:13px;line-height:140%;color:#555}#aiservice-foryou .gk_home20-wrapper .gknews_box[type=newest] .noticeable-news .list-nn .nn-item{padding-bottom:12px;border-bottom:1px dashed #d6dce2;margin-bottom:12px}#aiservice-foryou .gk_home20-wrapper .gknews_box[type=newest] .noticeable-news .list-nn .nn-item .item-gr{display:flex}#aiservice-foryou .gk_home20-wrapper .gknews_box[type=newest] .noticeable-news .list-nn .nn-item .item-gr .item-news{width:100%}#aiservice-foryou .gk_home20-wrapper .gknews_box[type=newest] .noticeable-news .list-nn .nn-item .item-gr .item-news{display:flex;justify-content:space-between}#aiservice-foryou .gk_home20-wrapper .gknews_box[type=newest] .noticeable-news .list-nn .nn-item .item-gr .item-news h4{display:block;width:64%}#aiservice-foryou .gk_home20-wrapper .gknews_box[type=newest] .noticeable-news .list-nn .nn-item .item-gr .item-news h4 .item-news-title{font-size:13px;line-height:140%;color:#555;font-family:SFD-Medium}#aiservice-foryou .gk_home20-wrapper .gknews_box[type=newest] .noticeable-news .list-nn .nn-item .item-gr .item-news h4 .item-news-title{font-size:14px;line-height:140%;color:#555;font-family:SFD-Medium;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}#aiservice-foryou .gk_home20-wrapper .gknews_box[type=newest] .noticeable-news .list-nn .nn-item .item-gr .item-news .item-news-thumb{display:block;width:32%}#aiservice-foryou .gk_home20-wrapper .gknews_box[type=newest] .noticeable-news .list-nn .nn-item .item-gr .item-news .item-news-thumb i{display:block;width:100%;padding-top:61.5%;position:relative;margin-bottom:10px;border-radius:4px;overflow:hidden}#aiservice-foryou .gk_home20-wrapper .gknews_box[type=newest] .noticeable-news .list-nn .nn-item .item-gr .item-news .item-news-thumb i img{position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover}#aiservice-foryou .gk_home20-wrapper .gknews_box[type=newest] .noticeable-news{background:#f1f1f1;box-sizing:border-box;border-radius:10px}#aiservice-foryou .gk_home20-wrapper .gknews_box[type=newest] .noticeable-news .list-nn .nn-item{border-bottom:unset;width:260px}#aiservice-foryou .gk_home20-wrapper .gknews_box[type=newest] .noticeable-news .list-nn .nn-item .item-gr .item-news{flex-direction:column;width:260px;border-radius:8px;overflow:hidden}#aiservice-foryou .gk_home20-wrapper .gknews_box[type=newest] .noticeable-news .list-nn .nn-item .item-gr .item-news .item-news-thumb{width:260px;height:163px}#aiservice-foryou .gk_home20-wrapper .gknews_box[type=newest] .noticeable-news .list-nn .nn-item .item-gr .item-news .item-news-thumb img{width:260px;display:block}#aiservice-foryou .gk_home20-wrapper .gknews_box[type=newest] .noticeable-news .list-nn .nn-item .item-gr .item-news{background:#fff}#aiservice-foryou .gk_home20-wrapper .gknews_box[type=newest] .noticeable-news .list-nn{flex-direction:row}#aiservice-foryou .gk_home20-wrapper .gknews_box[type=newest] .noticeable-news .list-nn .nn-item{width:260px!important;margin-bottom:unset;padding-bottom:unset}#aiservice-foryou .gk_home20-wrapper .gknews_box[type=newest] .noticeable-news{padding:21px 0 21px 0!important}#aiservice-foryou .gk_home20-wrapper .gknews_box[type=newest] h3{border-bottom:unset}#aiservice-foryou .gk_home20-wrapper .gknews_box[type=newest] .noticeable-news-title{display:flex;flex-wrap:nowrap;align-items:center;font-weight:700;font-size:22px;color:#111}#aiservice-foryou .gk_home20-wrapper .gknews_box[type=newest] .noticeable-news--reload{width:125px;height:31px;background:#e5e5e5;border-radius:8px;display:flex;font-weight:600;font-size:14px;align-items:center;flex-wrap:nowrap;color:#555;padding:0 10px 0 10px;margin-right:20px}#aiservice-foryou .gk_home20-wrapper .gknews_box[type=newest] .noticeable-news--reload::before{content:"";background:url(https://static.mediacdn.vn/kenh14/web_images/icon_reload.svg);width:20px;height:15px;display:block;margin-right:5px}#aiservice-foryou .gk_home20-wrapper .gknews_box[type=newest] .noticeable_top{display:flex;flex-wrap:nowrap;justify-content:space-between;padding-left:20px}#aiservice-foryou .gk_home20-wrapper .gknews_box[type=newest] .noticeable-news{width:700px;position:relative;background-position:100% 100%;background-color:#f1f1f1;border:1px solid rgba(0,0,0,.1);box-sizing:border-box;border-radius:10px}#aiservice-foryou .gk_home20-wrapper .gknews_box[type=newest] .noticeable-news .genkSwiper .swiper-button-next,#aiservice-foryou .gk_home20-wrapper .gknews_box[type=newest] .noticeable-news .genkSwiper .swiper-button-prev{position:absolute;top:65px!important;width:30px!important;height:80px!important;z-index:20;cursor:pointer}#aiservice-foryou .gk_home20-wrapper .gknews_box[type=newest] .noticeable-news .genkSwiper .swiper-button-next{background:url(https://kenh14cdn.com/web_images/sprite-k14.20.png) -82px -96px no-repeat!important;background-color:rgba(251,108,39,.9)!important;border-top-left-radius:3px;-webkit-border-top-left-radius:3px;-moz-border-radius-topleft:3px;border-bottom-left-radius:3px;-webkit-border-bottom-left-radius:3px;-moz-border-radius-bottomleft:3px;background-size:400px!important}#aiservice-foryou .gk_home20-wrapper .gknews_box[type=newest] .noticeable-news .genkSwiper .swiper-button-next:after,#aiservice-foryou .gk_home20-wrapper .gknews_box[type=newest] .noticeable-news .genkSwiper .swiper-button-prev:after{content:""}#aiservice-foryou .gk_home20-wrapper .gknews_box[type=newest] .noticeable-news .genkSwiper .swiper-button-prev{background:url(https://kenh14cdn.com/web_images/sprite-k14.20.png) -50px -96px no-repeat!important;background-color:rgba(251,108,39,.9)!important;border-top-right-radius:3px;-webkit-border-top-right-radius:3px;-moz-border-radius-topright:3px;border-bottom-right-radius:3px;-webkit-border-bottom-right-radius:3px;-moz-border-radius-bottomright:3px;background-size:400px!important}#aiservice-foryou .gk_home20-wrapper .gknews_box[type=newest] .noticeable-news .genkSwiper{width:calc(100% - 20px);padding-left:20px}#aiservice-foryou .gk_home20-wrapper .gknews_box[type=newest] .noticeable-news .list-nn .nn-item:last-child{margin-right:0}#aiservice-foryou .gk_home20-wrapper .gknews_box[type=newest] .noticeable-news .list-nn .swiper-slide--lastchild{width:0!important;margin-right:0!important}#aiservice-foryou .gk_home20-wrapper .gknews_box[type=newest] .noticeable-news .list-nn .nn-item .item-gr .item-news h4{height:91px;padding:10px 15px 12px 15px;text-align:left;overflow:hidden;width:230px}#aiservice-foryou .gk_home20-wrapper .gknews_box[type=newest] .noticeable-news .list-nn .nn-item .item-gr .item-news h4 .item-news-title{font-style:normal;line-height:140%;color:#111;font-family:SFD-SemiBold;display:-webkit-box;-webkit-line-clamp:4;-webkit-box-orient:vertical;overflow:hidden;font-weight:600;font-size:16px}#aiservice-foryou .gk_home20-wrapper .gknews_box[type=newest] .noticeable-news-image{width:28px;height:28px}#aiservice-foryou .gk_home20-wrapper .gknews_box[type=newest] .noticeable-news-title{margin-left:8px}.gk_home20-wrapper .gknews_box[type=newest] h3{border-bottom:unset;display:flex}#aiservice-foryou .gk_home20-wrapper .gknews_box[type=newest] .noticeable-news .genkSwiper .swiper-button-prev.swiper-button-disabled,#aiservice-foryou .swiper-button-next.swiper-button-disabled .gk_home20-wrapper .gknews_box[type=newest] .noticeable-news .genkSwiper{background-color:#333!important}',""]);const a=s},996:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>n});const n='<div class="gk_home20-wrapper"> <div class="gknews_box" type="newest"> <div class="noticeable-news nhipdapthitruong" data-marked-zoneid="kenh14_foryou_boxid_${boxid}_algid_${algid}"> <div class="noticeable_top"> <h3> <a href="javascript:;"> <img src="https://static.mediacdn.vn/kenh14/web_images/box-recommend-icon.gif" alt="" class="noticeable-news-image"> </a> <a href="javascript:;" title="Tin dành cho bạn" class="noticeable-news-title">Tin dành cho bạn</a> </h3> <a href="javascript:;" class="noticeable-news--reload"> Xem tin khác </a> </div> <div class="genkSwiper swiper-container"> <ul class="list-nn swiper-wrapper" id="ChinhSachMoi"> ${content} </ul> <div class="swiper-button-next"></div> <div class="swiper-button-prev"></div> </div> </div> </div> </div>'},913:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>n});const n='<li class="nn-item swiper-slide" data-newsid="${item.id}" ${chkPopup} style="display:list-item"> <div class="item-gr"> <div class="item-news"> <a data-url="${item.url}" href="${item.url}" title="${item.title}" ${dataPopupUrl} class="item-news-thumb"> <img src="${item.image}" alt="${item.title}"></a> <h4> <a data-url="${item.url}" href="${item.url}" title="${item.title}" class="item-news-title">${item.title}</a> </h4> </div> </div> </li> '},615:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>n});const n="https://rec.aiservice.vn/recengine/recgate/api/v1/recommender?customerid=kenh14web&boxid=4&uid=&itemid=&deviceid=&template=&offset=&refresh=&vieweditems=&limit=5"},186:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>n});const n="#aiservice-foryou"},908:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>n});const n="5"}},t={};function i(n){var o=t[n];if(void 0!==o)return o.exports;var r=t[n]={id:n,exports:{}};return e[n](r,r.exports,i),r.exports}i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e=i(750),t=i(996),n=i(399),o=i(913),r=i(615),s=i(908),a=i(186);new n(t.default,o.default,e.default[0][1],r.default,s.default,a.default).renderContentBox()})()})();