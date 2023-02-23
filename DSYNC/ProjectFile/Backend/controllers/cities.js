const city = require('../models/city.model.js')

const allCities = async (req, res) => {
    
    city.find({}).then((data) => {
        if (!data)  {
            console.log("Request not found");
            res.status(400).json({msg : "Request not found"})
        }
        //console.log("Hello")
        console.log(data, "hi")
        res.status(200).json(data)
    })
    console.log('Aw...Fuck')
}

module.exports = {allCities}