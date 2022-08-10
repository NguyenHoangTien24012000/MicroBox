const db = require('../models/index')
const bcrypt = require('bcrypt');
const saltRounds = 10;

exports.register = (req, res, next) => {
    // console.log(req.param)
    let { name, email, phoneNumber, password } = req.body;
    let roleid = 0;

    bcrypt.hash(password, saltRounds, async function (err, hash) {
        try {
            await db.User.create({
                name: name,
                email: email,
                phoneNumber: phoneNumber,
                password: hash,
                roleid: roleid
            })
            res.status(200).send("Register Success!")
        } catch (error) {
            res.status(400).send(error)
        }
    });
};

exports.login = async (req, res, next) => {
    console.log(req.body)
    let { email, password } = req.body;

    try {
        const user = await db.User.findAll({
            where: {
                email: email
            }
        })
        let hash = user[0].dataValues.password
        bcrypt.compare(password, hash, function (err, result) {
            if (result) {
                res.status(200).send('Login success!')
            } else {
                res.status(400).send('Password invalid!')
            }
        });
    } catch (error) {
        res.status(400).send(error)
    }

}


// [
//     User {
//       dataValues: {
//         id: 1,
//         name: 'Nguyen Tien',
//         email: 'hoangtienflytom@gmail.com',
//         phoneNumber: '0868408924',
//         password: '123456',
//         roleid: '0',
//         createdAt: 2022-08-09T09:01:32.000Z,
//         updatedAt: 2022-08-09T09:01:32.000Z
//       },
//       _previousDataValues: {
//         id: 1,
//         name: 'Nguyen Tien',
//         email: 'hoangtienflytom@gmail.com',
//         phoneNumber: '0868408924',
//         password: '123456',
//         roleid: '0',
//         createdAt: 2022-08-09T09:01:32.000Z,
//         updatedAt: 2022-08-09T09:01:32.000Z
//       },
//       uniqno: 1,
//       _changed: Set(0) {},
//       _options: {
//         isNewRecord: false,
//         _schema: null,
//         _schemaDelimiter: '',
//         raw: true,
//         attributes: [Array]
//       },
//       isNewRecord: false
//     }
//   ]