const Sequelize=require('sequelize')

const sequelize=require('../util/databse')

const User=sequelize.define('order',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    order_name:
    {
        type:Sequelize.STRING,
        allowNull:false
    },
    order_quantity:
    {
        type:Sequelize.INTEGER,
          allowNull:false
    },
    table_name:Sequelize.STRING
})

module.exports=User;