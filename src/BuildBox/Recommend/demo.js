import { bindCss, ajax, paramInfoAdm } from 'admicrolib';
import { bindJS } from './lib/bindJS'
import { jsBox } from './component/aiservice-kenh14-foryou/jsBox'
const layout = require('./component/aiservice-kenh14-foryou/layout.html')
const content = require('./component/aiservice-kenh14-foryou/item.html')
const style = require('./component/aiservice-kenh14-foryou/style.min.css')
import {getuid} from './lib/getuid.js';

window.String.prototype.interpolate = function (params) {
	const names = Object.keys(params);
	const vals = Object.values(params);
	return new Function(...names, `return \`${this}\`;`)(...vals);
}

function drawRecomend(ele) {

	var param = paramInfoAdm.getParam();

	var arrItemid = /([\d]+).chn/.exec(document.URL + '');
	let uid=getuid();
	var itemid = '';

	var refresh = 0;

	var arrIdBox = []

	if (arrItemid) {
		itemid = arrItemid[1];
	}
	let $ = document.querySelector.bind(document);
	// return `https://rec.aiservice.vn/recengine/recgate/api/v1/recommender?customerid=kenh14web&boxid=4&uid=${paramInfoAdm.get('__uid')}&itemid=${itemid}&deviceid=&template=&offset=&refresh=${refresh == 0 ? '' : 1}&vieweditems=[${arrIdBox}]&limit=5`;
	var urlAI = (refresh, arrIdBox) => {
		var prod = ''
		if (document.URL.includes("https://kenh14.vn")) {
			prod = '/prod'
		}
		var api = `https://rec.aiservice.vn/recengine${prod}/recgate/api/v1/recommender?customerid=kenh14web&boxid=4&uid=&itemid=${itemid}&deviceid=${uid}&template=&offset=&refresh=${refresh == 0 ? '' : 1}&vieweditems=[${arrIdBox}]&limit=5`
		return api
	}

	var getapi = (url) => {
		ajax(url, renderHtml)
	}

	function renderHtml(dataStr) {
		arrIdBox = []
		var data = JSON.parse(dataStr);

		if (!data) {
			window[$(`${ele}`).getAttribute('data-callback-error')]()
		} else {
			if (!data.recommend || data.recommend.length == 0) {
				window[$(`${ele}`).getAttribute('data-callback-error')]()
			} else {
				var eleOld=document.querySelector('[data-marked-zoneid="k14_home_trend_ad"] .box-dang-duoc-quan-tam');
				if(eleOld){
					eleOld.innerHTML='';
				}
				var {algid,requestid,boxid}=data;
				var strRequestid='';
				// loadCss(linkCss)
				bindCss(style.default[0][1]);

				var html = '';

				var checkPopup = false;

				if (window._ADM_Channel && window._ADM_Channel.indexOf('detail') != -1) {
					checkPopup = true;
				}
				for (var i = 0; i < 5; i++) {

					let item = data.recommend[i];

					arrIdBox.push(item.id)
					// item.image = thumbImg(item.image, 223, 140);
					item.url = item.url.replace('https://kenh14.vn', '');
					//item.url=item.url.replace('.chn',`rf${itemid}.chn`);

					let dataPopupUrl = checkPopup ? ` data-popup-url="${item.url}" ` : ' data-popup-url="" ';
					let chkPopup = checkPopup ? ' ispopup="1" ' : ' ispopup="0" ';
					const result = content.default.interpolate({
						item: item,
						chkPopup: chkPopup,
						dataPopupUrl: dataPopupUrl
					});
					html += result;
				}

				var htmlBox = layout.default.interpolate({
					content: html,
					boxid: boxid,
					algid: algid
				})

				$(ele).innerHTML = htmlBox;

				// loadJs(linkJs, function () {
				// })
				bindJS(jsBox)


				try {
					relatedNews.initTimelinePoppup("#ChinhSachMoi");
				} catch (e) { }
				try {
					window.initLightBoxDom();
				} catch (e) { }

				refresh++;

				$(ele + ' .noticeable-news--reload').addEventListener('click', () => {
					getapi(urlAI(refresh, arrIdBox))
				})
			}
		}



	}

	getapi(urlAI(refresh, arrIdBox))

}
window.aiServiceNewsForYou = drawRecomend;
(function () {
	var $ = document.querySelector.bind(document);
	var ele = $('#aiservice-foryou');
	var attr;

	try {
		var attr = ele.getAttribute('data-no-init');
	} catch (e) { }
	if (ele && !(attr && attr == 'true')) {
		drawRecomend('#aiservice-foryou');
	}
})();

