
const User=require('../models/resto')

exports.getOrders=(async(req,res,next)=>
{
    try{
        const getOrders= await User.findAll()
        res.status(201).json({allOrders: getOrders})
    }
    catch(err)
    {
        res.status(500).json(
            {
                err: "cant get order form server side"
            }
        )
    }
})

exports.postOrders=async (req,res,next)=>
{
    try
    {
        const orderName=req.body.name;
        const  orderQuantity=req.body.count;
        const tableName=req.body.tablename;
        const postData=await User.create(
            {
                order_name:orderName,
                order_quantity:orderQuantity,
                table_name:tableName
            })  
            {
                res.status(201).json({order:postData})
            }
        }
        
        catch(err)
        {
            console.log(err)
        }
}


exports.deleteById=async (req,res,next)=>
{
    const orderId=req.params.id;
    
    if(req.params.id==='undefined')
    {
        return res.status(500).json({err:"id is missing"})
    }
     const deletedData=await User.destroy({where:{id:orderId}})
    try{
         res.status(201).json(  {  delData:deletedData   }
         )
    }
    catch(err)
    {
        res.status(500).json({
            err:err
        })
    }

}