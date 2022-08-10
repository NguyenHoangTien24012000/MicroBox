const css = require('./css.css');
const html = require('./html.html');
const buildBoxRecommend = require('./src/BuildBox/Recommend/ClassRecommend');
const item = require('./item.html')
const api = require('./api.txt')
const lengthItem = require('./lengthItem.txt');
const idBox = require('./idBox.txt')

const newBox = new buildBoxRecommend(html.default, item.default, css.default[0][1], api.default, lengthItem.default, idBox.default)

window.aiServiceNewsForYou = newBox.renderContentBox;

(function () {

	var $ = document.querySelector.bind(document);
	var ele = $(idBox.default);
	var attr;

	try {
		var attr = ele.getAttribute('data-no-init');
	} catch (e) { }
	if (ele && !(attr && attr == 'true')) {
		newBox.renderContentBox();
	}

})();
