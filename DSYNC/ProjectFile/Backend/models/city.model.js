const mongoose = require(`mongoose`)
const {Schema}  = mongoose;

const City = new Schema ({
    Name : {
        type: String, 
        required: true,
        unique: true,
        trim: true,         
    },
    Organisations : {
        type : Array,
        members : {
            type : String
        }
    },
});

const city = mongoose.model('City', City);

module.exports = city;