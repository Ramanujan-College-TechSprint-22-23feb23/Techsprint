const mongoose = require(`mongoose`)
const {Schema}  = mongoose;

const Owner = new Schema ({
    Name : {
        type: String, 
        required: true,
        unique: true,
        trim: true,         
        minlength:3,
    },
    Hostel : {type : String},
    Email : {
        type : String,
        required : true,
        trim: true,
    },
    PhoneNo: {type : Number},
    Emergency: {type : Number},
    Rating : {type : Number},
});

const owner = mongoose.model('Owner', Owner);

module.exports = owner;