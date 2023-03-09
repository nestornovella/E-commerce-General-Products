const { sendError } = require("../functions/functions")
const { User, Transaction } = require('../db')


module.exports ={
    getUsers: async (req, res)=>{
        const {id, email}= req.body

    try {
       if(id){
            const user = await User.findOne({where:{id}, include:{model:Transaction}})
                user    
                    ? 
                res.status(200).json({status: 200, finded:true, user}) 
                    :
                res.status(200).json({status: 200, finded:false, user:"no se encontro el usuario"})
       }
       else if(email){
            const user = await User.findAll({where:{email:email}})
            res.status(200).json({status: 200, finded:true, user})
       }
       else{
        const users = await User.findAll({include:{model:Transaction}})
        if(!users.length){res.json({status:200, users:"no hay usuarios registrados en la base de datos"})}
        else res.status(200).json({status: 200, users})}

    } catch (error) {
        res.status(500).json({status:500, error})
    }
}
}