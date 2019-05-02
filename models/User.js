const Sequelize = require('sequelize')

const db = require("../database/db.js")

module.exports = db.seqeuelize.define(
    'user',
{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    first_name: {
        type: Sequelize.STRING
    },
    email:  {
        type: Sequelize.STRING
    },
    password:   {
        type: Sequelize.STRING
    },
    created:    {
        type: Sequelize.STRING
        defaultValue: Sequelize.NOW
    }

},

}
)