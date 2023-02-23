const hostel = require('../models/hostel.model')
const organisation = require('../models/organisation.model')
const city = require('../models/city.model')

const organisationByID = async (req, res) => {
    
    const {organisation_id} = await req.body 
    organisation.findOne({_id: organisation_id}).then((data) => {
        if (!data)  {
            console.log("Request not found");
            res.status(400).json({msg : "Request not found"})
        }
        //console.log("Hello")
        console.log(data, organisation_id, "hi")
        res.status(200).json(data)
        })
    console.log('Aw...Fuck')
}

const organisationByCity = async (req, res) => {
    const {city_id} = await req.body
    city.find({_id: city_id}).then((data) => {
        if (!data)  {
            console.log("Request not found");
            res.status(400).json({msg : "Request not found"})
        }
        //console.log("Hello")
        console.log(data.Organisations, city_id, "hi")
        res.status(200).json(data.Organisations)
    })
}

const addOrganisation = async (req, res) => {
    const {Organisation} = await req.body
    const newOrganisation = new organisation(Organisation)
    const jack = newOrganisation.save((err, data) => {
        if (!data)  {
            console.log("Request not found");
            res.status(400).json({msg : "Request not found"})
        }
        console.log(data)
        city.findOneAndUpdate({_id : Organisation.city}, {$push : {Organisations: data._id}})
        res.status(200).send("Success")
    })
}
module.exports = {organisationByCity, organisationByID, addOrganisation}