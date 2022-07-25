function bindCss(css){
    var e=document.createElement("style");
   e.type="text/css";
   document.getElementsByTagName("head")[0].appendChild(e);
   e.styleSheet?e.styleSheet.cssText=css: e.appendChild(document.createTextNode(css))
}

module.exports = bindCss;