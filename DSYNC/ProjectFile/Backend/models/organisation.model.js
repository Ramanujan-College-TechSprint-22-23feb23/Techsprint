const mongoose = require(`mongoose`)
const {Schema}  = mongoose;

const Organisation = new Schema ({
    Name : {
        type: String, 
        required: true,
        unique: true,
        trim: true,         
    },
    Hostels : {
        type : Array,
        members : {
            type : String
        }
    },
    City : {type : String},
    Location : {
        address : {type : String},
        coordinates : {type : String},
    },
});

const organisation = mongoose.model('Organisation', Organisation);

module.exports = organisation;