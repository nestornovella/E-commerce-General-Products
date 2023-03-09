const bcryptjs = require('bcryptjs')


module.exports = {
    hashText: async (text) => {
        return await bcryptjs.hash(text, 8)
    },
    hashCompar:async (pass, hashPass)=>{
        return await bcryptjs.compare(pass, hashPass)
    }

}