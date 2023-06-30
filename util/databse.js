const Sequelize=require('sequelize')

const sequelize=new Sequelize('order_list','root','ravi2233',
    {
        dialect:'mysql',
        host:'localhost'
    }
)
module.exports=sequelize;