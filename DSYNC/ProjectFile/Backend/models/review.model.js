const {Schema, model} = require('mongoose') 

const Reviews = new Schema(
    {
        Username : {
            type : String,
            required : true,
            trim : true,
        },
        Description : {
            type: String,   
            trim : true,
        },
        Stars: {
            Overall : {type : Number},
            Facilities : {type : Number},
            Environment : {type : Number},
            Staff : {type : Number},
            IssueResolution : {type : Number},
        },
        Hostel_id : {
            type: String,
            required : true,
            trim : true
        }
    },{
        timestamps: true
    }
)

const review = model('userData', Reviews)

module.exports = review