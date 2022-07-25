const css = require('./css.css');
const html = require('./html.html');
const buildBoxRecommend = require('./src/BuildBox/Recommend/ClassRecommend');
const item = require('./item.html')
const api = require('./api.txt')
const lengthItem = require('./lengthItem.txt');
const idBox = require('./idBox.txt')

// console.log("html", html.default)

// console.log("item", item.default)

// console.log("css", css.default[0][1])

// console.log("api", api.default)

// console.log("lengthItem", lengthItem.default)

// console.log("idBox", idBox.default)


// const layout = html.default;
// const style = css.default[1][1];
// const itemHtml = item.default;


const newBox = new buildBoxRecommend(html.default, item.default, css.default[0][1], api.default, lengthItem.default, idBox.default)

newBox.renderContentBox();


// window.aiServiceNewsForYou = drawRecomend;
// (function () {
// 	var $ = document.querySelector.bind(document);
// 	var ele = $(idBox);
// 	var attr;

// 	try {
// 		var attr = ele.getAttribute('data-no-init');
// 	} catch (e) { }
// 	if (ele && !(attr && attr == 'true')) {
// 	}
// })();