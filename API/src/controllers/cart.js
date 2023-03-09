const { sendError } = require("../functions/functions")
const { User, Cart } = require("../db")





module.exports = {
    updateCart: async (req, res)=>{
        
        const { UserId, productsID} = req.body
        try {
            if(!UserId || !productsID.length){sendError("faltan parametros!")}
            const user = await User.findOne({where:{id: UserId}})
            if(user){
                const cart = await Cart.findOne({where:{id: user.CartId}})
                if(cart){
                    await Cart.update({productsID:productsID}, {where:{id: cart.id}})
                    res.json(await Cart.findByPk(cart.id))
                }
                else{
                    sendError("no se pudo actualizar el carro de compras")
                }
            } 
        } catch (error) {
            res.json(error)
        }
        
    },
    cleanCart: async(req, res)=>{
        const { UserId } = req.body
        try {
            if( !UserId ){sendError("se necesita id del usuario!")}
            const user = await User.findOne({where:{id: UserId}})
            console.log(user)
            if(user){
                const cart = await Cart.findOne({where:{id: user.CartId}})
                if(cart){
                    await Cart.update({productsID:[]}, {where:{id: cart.id}})
                    res.json(await Cart.findByPk(cart.id))
                }
                else{
                    sendError("no se pudo vaciar el carro de compras")
                }
            }else{sendError("usuario no encontrado")} 
        } catch (error) {
            res.json(error)
        }
        
    }
    
}