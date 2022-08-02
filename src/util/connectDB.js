// const mysql = require('mysql2');

// // create the connection to database
// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     database: 'micro_box',
//     password:'hoangtien'
// });

// module.exports = connection;


const Sequelize = require('sequelize')

const sequelize = new Sequelize('micro_box', 'root', 'hoangtien', {
    host: 'localhost',
    dialect: 'mysql'
});



module.exports = sequelize;