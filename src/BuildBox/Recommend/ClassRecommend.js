const bindCss = require('../Lib/bindCss');
const ajax = require('../Lib/ajax');

class Recommend {
    layout
    item
    api
    arrItemid
    itemid
    arrIdBox
    lengthItem
    idBox
    $
    constructor(layout, item, css, api, lengthItem, idBox) {
        this.layout = layout;
        this.item = item;
        this.api = api;
        this.css = css;
        this.lengthItem = lengthItem;
        this.idBox = idBox;
        this.$ = document.querySelector.bind(document);
        this.arrItemid = /([\d]+).chn/.exec(document.URL + '');
        this.itemid = this.arrItemid ? this.arrItemid[1] : '';
    }

    renderHtml(dataStr) {
        window.String.prototype.interpolate = function (params) {
            const names = Object.keys(params);
            const vals = Object.values(params);
            return new Function(...names, `return \`${this}\`;`)(...vals);
        }
        let data = JSON.parse(dataStr)
        let algid = data.algid;
        let boxid = data.boxid;
        var checkPopup = false;

        if (window._ADM_Channel && window._ADM_Channel.indexOf('detail') != -1) {
            checkPopup = true;
        }
        let totalItem = ''
        this.arrIdBox = [];
        for (let i = 0; i < this.lengthItem; i++) {
            let itemI = data.recommend[i]
            this.arrIdBox.push(itemI.id)
            let dataPopupUrl = checkPopup ? ` data-popup-url="${item.url}" ` : ' data-popup-url="" ';
            let chkPopup = checkPopup ? ' ispopup="1" ' : ' ispopup="0" ';
            let contentItem = this.item.interpolate({
                item: itemI,
                chkPopup: chkPopup,
                dataPopupUrl: dataPopupUrl
            })
            totalItem += contentItem;
        }
        var htmlBox = this.layout.interpolate({
            content: totalItem,
            boxid: boxid,
            algid: algid
        })
        this.$(this.idBox).innerHTML = htmlBox;
        bindCss(this.css)
    }

    renderContentBox() {
        ajax(this.api, (data) => {
            this.renderHtml(data)
        })
    }
}


module.exports = Recommend