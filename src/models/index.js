const User = require('./user');
const TypeBox = require('./typeBox');
const Recommend = require('./recommend');
const Domain = require('./domain');
const Algorithm = require('./algorithm')

User.hasOne(Recommend, {
    foreignKey: 'idUser',
    onDelete: 'CASCADE'
})

TypeBox.hasOne(Recommend, {
    foreignKey: 'idTypeBox',
    onDelete: 'SET NULL'
})

Algorithm.hasOne(Recommend, {
    foreignKey: 'idAlgorithm',
    onDelete: 'SET NULL'
})

TypeBox.hasOne(Algorithm, {
    foreignKey: 'idTypeBox',
    onDelete: 'SET NULL'
})

Domain.hasOne(Recommend, {
    foreignKey: 'idDomain',
    onDelete: 'SET NULL'
})
