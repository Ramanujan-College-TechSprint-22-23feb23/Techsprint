const mongoose = require('mongoose');
const {Schema}  = mongoose;
const {ObjectId}= mongoose.Schema.Types

const HostelSchema= new Schema({
    Name : {type : String}, 
    Owner : {type : String},
    Reviews : {
        type : Array,
        members : {type : String},
    },
    Stars: {
        Overall : {type : Number},
        Facilities : {type : Number},
        Environment : {type : Number},
        Staff : {type : Number},
        IssueResolution : {type : Number},
    },
    Residents : {
        Number : {type : Number},
        Hostellers: {
        type : {type : Array},
        members : {type : String},
    }},
    Facilities : {
        type : {type : Array},
        members : {type : String},
    },
    Rooms : {
        type : {type : Array},
        members : {
            Available : {type : Number},
            Roommates : {type : String},
            Price : {type : Number},
            Gender : {type : String},   
        },
    },
    Location : {
        Address : {type : String},
        Coordinates : {type : String},
    },
    postedBy:{
        type:ObjectId,
        ref:"Register"
    }
})

const hostel = mongoose.model('Hostel', HostelSchema);

module.exports = hostel;