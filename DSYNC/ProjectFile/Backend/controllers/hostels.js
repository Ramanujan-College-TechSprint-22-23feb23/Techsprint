const hostel = require('../models/hostel.model')
const organisation = require('../models/organisation.model')
const owner = require('../models/owner.model')
const hostelByID = async (req, res) => {
    
    const {hostel_id} = await req.body 
    hostel.findOne({_id: hostel_id}).then((data) => {
        if (!data)  {
            console.log("Request not found");
            res.status(400).json({msg : "Request not found"})
        }
        //console.log("Hello")
        console.log(data, hostel_id, "hi")
        res.status(200).json(data)

    })
    console.log('Aw...Fuck')
}

const hostelByOrganisation = async (req, res) => {
    const {organisation_id} = await req.body
    organisation.find({_id: organisation_id}).then((data) => {
        if (!data)  {
            console.log("Request not found");
            res.status(400).json({msg : "Request not found"})
        }
        //console.log("Hello")
        console.log(data.Hostels, organisation_id, "hi")
        res.status(200).json(data.Hostels)

    })
}

const addHostel = async (req, res) => {
    const {Hostel, Owner} = await req.body
    const newHostel = new hostel(Hostel)
    newHostel.save((err, data) => {
        if (!data)  {
            console.log("Request not found");
            res.status(400).json({msg : "Request not found"})
        }
        organisation.findOneAndUpdate({_id : newHostel.Organisation}, {$push : {Hostels: data._id}})
        console.log(data)
    })
    const newOwner = new owner(Owner)
    newOwner.save((err, data) => {
        if (!data)  {
            console.log("Request not found");
            res.status(400).json({msg : "Request not found"})
        }
        console.log(data)
    })
    res.status(200).send("Success")
}
module.exports = {hostelByID, hostelByOrganisation, addHostel}