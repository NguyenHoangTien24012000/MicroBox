

const Recommend = require('../models/recommend')

exports.createBox = (req, res) =>{
    let {idUser} = req
    let {name, idTypeBox, idDomain, idAlgorithm, layout, item, css, javascript, idBoxView, offSetPage, numberPage} = req.body;
}