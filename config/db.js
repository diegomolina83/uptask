const { Sequelize } = require('sequelize');

// Option 2: Passing parameters separately (other dialects)
const db = new Sequelize('uptasknode', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    define: {
        timestamps:false
    },
})

module.exports=db