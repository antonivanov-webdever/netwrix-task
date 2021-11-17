const sequelize = require('../db/index');
const {DataTypes} = require('sequelize');


const Partner = sequelize.define('partner_locator', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    company: {type: DataTypes.STRING, allowNull: false},
    status: {type: DataTypes.STRING, allowNull: false},
    logo: {type: DataTypes.STRING, allowNull: false},
    address: {type: DataTypes.STRING, allowNull: false},
    website: {type: DataTypes.STRING, allowNull: false},
    phone: {type: DataTypes.STRING, allowNull: false},
    countries_covered: {type: DataTypes.STRING, allowNull: false},
    states_covered: {type: DataTypes.STRING, allowNull: false},
}, {
    timestamps: false,
    freezeTableName: true
})

module.exports = {
    Partner
}