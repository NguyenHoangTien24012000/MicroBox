const User = require('./user');
const TypeBox = require('./typeBox');
const Recommend = require('./recommend');
const Domain = require('./domain');
const Algorithm = require('./algorithm');
const TemplateDomain = require('./templateDomain');
const BoxIdDomain = require('./boxIdDomain');
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

TemplateDomain.hasOne(Recommend, {
    foreignKey: 'idTemplateDomain',
    onDelete: 'SET NULL'
})

BoxIdDomain.hasOne(Recommend,{
    foreignKey: 'idBoxidDomain',
    onDelete: 'SET NULL'
})

