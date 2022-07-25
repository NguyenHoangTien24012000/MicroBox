function ajax(theUrl, resolve,reject){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 ){
            if(xmlHttp.status == 200){
                if(resolve){
                    resolve(xmlHttp.responseText);
                }
            }else{
                if(reject){
                    reject(xmlHttp);
                }
            }
        }
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}
module.exports = ajax;