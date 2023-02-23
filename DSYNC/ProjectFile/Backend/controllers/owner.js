const hostel = require('../models/hostel.model')
const owner = require('../models/owner.model')

const ownerByID = async (req, res) => {
    
    const {owner_id} = await req.body 
    owner.findOne({_id: owner_id}).then((data) => {
        if (!data)  {
            console.log("Request not found");
            res.status(400).json({msg : "Request not found"})
        }
        //console.log("Hello")
        console.log(data, owner_id, "hi")
        res.status(200).json(data)
    })
    console.log('Aw...Fuck')
}

const ownerByHostel = async (req, res) => {
    const {organisation_id} = await req.body
    hostel.find({_id: organisation_id}).then((data) => {
        if (!data)  {
            console.log("Request not found");
            res.status(400).json({msg : "Request not found"})
        }
        //console.log("Hello")
        console.log(data.Hostels, organisation_id, "hi")
        res.status(200).json(data)

    })
}

module.exports = {ownerByHostel, ownerByID}