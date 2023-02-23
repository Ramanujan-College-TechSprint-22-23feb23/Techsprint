const hostel = require('../models/hostel.model')
const review = require('../models/review.model')

const reviewByID = async (req, res) => {
    
    const {review_id} = await req.body 
    review.findOne({_id: review_id}).then((data) => {
        if (!data)  {
            console.log("Request not found");
            res.status(400).json({msg : "Request not found"})
        }
        //console.log("Hello")
        console.log(data, review_id, "hi")
        res.status(200).json(data)

    })
    console.log('Aw...Fuck')
}

const reviewByHostel = async (req, res) => {
    const {hostel_id} = await req.body
    hostel.find({_id: hostel_id}).then((data) => {
        if (!data)  {
            console.log("Request not found");
            res.status(400).json({msg : "Request not found"})
        }
        //console.log("Hello")
        console.log(data.Reviews, hostel_id, "hi")
        res.status(200).json(data.Reviews)

    })
}

const addReview = async (req, res) => {
    const {Review} = await req.body
    const newReview = new review(Review)
    newReview.save((err, data) => {
        if (!data)  {
            console.log("Request not found");
            res.status(400).json({msg : "Request not found"})
        }
        console.log(data)
        res.status(200).send("Success")
    })
    hostel.findOneAndUpdate({_id : newReview.Hostel}, {$push : {Reviews: data._id}})
}
module.exports = {reviewByHostel, reviewByID, addReview}