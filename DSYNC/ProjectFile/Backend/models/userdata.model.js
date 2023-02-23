const {Schema, model} = require('mongoose') 

const userdata = new Schema(
    {
        username : {
            type : String,
            required : true,
            trim : true,
        },
        hostel : {
            type: String,   
            trim : true,
        },
        organisation : {
            type: String,
            trim : true
        }
    },{
        timestamps: true
    }
)

const userData = model('userData', userdata)

module.exports = userData