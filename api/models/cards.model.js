const { DataTypes } = require('sequelize');
const sequelize = require('../config/database')

const Card = sequelize.define("Card", {
    name: DataTypes.STRING,
    rarity: DataTypes.STRING,
    level: DataTypes.INTEGER,
    stars: DataTypes.INTEGER,
    plus: DataTypes.INTEGER,
    image: DataTypes.STRING
});

module.exports = Card;