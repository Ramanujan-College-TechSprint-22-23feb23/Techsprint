//Express framework for server side programming
const Moralis = require('moralis');
const { EvmChain } = require("@moralisweb3/common-evm-utils")

const express = require("express");
const path = require("path");

const router = express.Router();

//module for encryption of password
const bcrypt = require("bcryptjs");
//module for login authentication
const passport = require("passport");

const serverUrl = "https://kveunvyi5b9o.usemoralis.com:2053/server";
const appId = "WUv3APbXl4LtaxVnHPoLE8U6fydsLv2szdk7PsJ5";
new Moralis.start({ serverUrl, appId });

Moralis.authenticate().then(function (user) {
    e.preventDefault()
    console.log('Logged in')
})

//Upload an image
const uploadImage = async () => {
    const data = fileInput.files[0]
    const file = new Moralis.File(data.name, data)
    await file.saveIPFS({useMasterKey:true});
    
    console.log(file.ipfs(), file.hash())
    return file.ipfs();
}

//Upload metadata object
const uploadMetadata = async (imageURL) => {

    const name = document.getElementById('fileName').value;
    const description = document.getElementById('fileDescription').value;

    const metadata = {
        "filename": name,
        "description": description,
        "url": imageURL
    }
    var hashValue=document.getElementById('hash');
    hashValue.value=imageURL

    console.log(metadata)
    const file = new Moralis.File("file.json", {base64 : btoa(JSON.stringify(metadata))});
    await file.saveIPFS({useMasterKey:true});

    console.log(file.ipfs());

}


const IPFS=require('ipfs-mini');
const ipfs=new IPFS({host:'ipfs.infura.io',port:5001,protocol:'https'});

//bring auth-config file
// =>ensureAuthenticated : Use to protect the routes
// =>forwardAuthenticated : by pass the routes without having authentication
const { forwardAuthenticated, ensureAuthenticated } = require("../config/auth");

const {Student} = require("../models/Student");

router.get("/login", (req, res) => {
  res.render("student/login");
});

router.get("/dashboard", (req, res) => {
    const user=req.user;
    const registrationNumber=user.registrationNumber;
    res.render('student/dashboard',{
        user:user,
        hashes:user.hashes,
        texthashes:user.texthashes
    })
});


router.get('/upload',(req,res)=>{
    res.render('student/upload',{
        user:req.user
    })
})

router.post("/upload",(req,res)=>{
    //need to have a flash message that file has been uploaded
    // res.render('admin/dashboard');
    const user=req.user;
    const {fileName,fileDescription,hash}=req.body;
    const registrationNumber=user.registrationNumber
    var hashed={
        name:fileName,
        description:fileDescription,
        url:hash
    }
    console.log(hashed);
    Student.findOne({registrationNumber:registrationNumber},(err,student)=>{
        student.hashes.unshift(hashed);
        Student.updateOne({registrationNumber:registrationNumber},student,(err)=>{
            if(err){
                console.log(err);
                return;
            }
            res.render('student/dashboard',{
                user:req.user,
                hashes:req.user.hashes,
                texthashes:user.texthashes
            });
        })
    })


    res.render('student/dashboard',{
        user:req.user,
        hashes:req.user.hashes,
        texthashes:user.texthashes
    })
})


router.get('/addNotes',(req,res)=>{
    res.render('student/addNotes',{
        user:req.user
    })
})

router.post('/addNotes',(req,res)=>{
    const user=req.user
    const {title,text}=req.body;

    const registrationNumber=user.registrationNumber
    
    ipfs.add(text,(err,hash)=>{
        if(err){
            return console.log(err);
        }
        const URL='https://ipfs.infura.io/ipfs/'+hash;
        console.log(URL);
        Student.findOne({registrationNumber:registrationNumber},(err,student)=>{
            const hashed={
                title:title,
                text:text,
                url:URL
            }
            student.texthashes.unshift(hashed);
            Student.updateOne({registrationNumber:registrationNumber},student,(err)=>{
                if(err){
                    console.log(err);
                    return;
                }
                res.render('student/dashboard',{
                    user:user,
                    hashes:user.hashes,
                    texthashes:user.texthashes
                });
            })
        })
    })
    


    res.render('student/dashboard',{
        user:req.user,
        hashes:req.user.hashes,
        texthashes:user.texthashes
    })
})

//handle post request for Student login page

//here comes,passport.js 's 'Local strategy'
// for Student, we have create 'local.student' named to strategy
//will authenticatec company and most imp , serialize it as a user
router.post("/login", (req, res, next) => {
  passport.authenticate("local.student", {
    successRedirect: "/student/dashboard",
    failureRedirect: "/student/login",
    failureFlash: true,
  })(req, res, next);
});

//This route logout the student
//deserialize it
//and redirect to student's login page again
//with a success flash message
router.get("/logout", ensureAuthenticated, (req, res) => {
  req.logout();
  req.flash("success_msg", "You are logged out");
  res.redirect("/student/login");
});

router.post("/uploadImage", async (req, res)=>{
    try {
        const image = await uploadImage();
        await uploadMetadata(image);
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;
