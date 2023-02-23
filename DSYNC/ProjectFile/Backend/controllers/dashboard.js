const userData = require('../models/userdata.model')
const User = require('../models/user.model')
const jwt = require('jsonwebtoken')
const dashboard = async (req, res) => {
    
    const {user_id, user_name} = await jwt.verify(req.cookies.auth, process.env.TOKEN_KEY);
     
    const user = await User.findOne({_id: user_id}).then((data) => {
        if (!data)  {
            console.log("Request not found");
            res.status(400).json({msg : "Request not found"})
        }
        //console.log("Hello")
        console.log(data, user_id, "hi")
        
    })
    
    userData.find({Username: user_name}).then((data)=>{
        console.log("Hello")
        res.status(200).send({Data : data, userinfo : {username : user_name}})
    })
    console.log('Aw...Fuck')
}

module.exports = {dashboard}