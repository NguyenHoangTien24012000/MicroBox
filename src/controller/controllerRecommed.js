

const Recommend = require('../models/recommend')

exports.createBoxRecommend = (req, res) =>{
    let {idUser} = req
    let {name, idTypeBox, idDomain, idAlgorithm, layout, item, css, javascript, idBoxView, offSetPage, numberPage} = req.body;
    
    Recommend.create({
        idUser : idUser,
        name : name,
        idTypeBox : idTypeBox,
        idDomain : idDomain,
        idAlgorithm : idAlgorithm,
        layout : layout,
        item : item,
        css : css,
        javascript : javascript, 
        idBoxView : idBoxView, 
        offSetPage : offSetPage,
        numberPage : numberPage
    }).then(result =>{
        res.status(200).json({
            message : "Create box success!!"
        })
    }).catch(error =>{
        res.status(400).json({
            message : "Create box failed!!",
            error : error
        })
    })


}