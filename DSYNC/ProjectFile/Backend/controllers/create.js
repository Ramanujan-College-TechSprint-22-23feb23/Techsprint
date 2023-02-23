const template_1 = require('../templates/template1.js')
const template_2 = require('../templates/template_2.js') 
const template_3 = require('../templates/template_3')
const formData = require('../models/data.model')

const create = async (req, res) => {
    const {_data_profile} = await req.body
            
    formData.findOne({
        data_profile : _data_profile,
        username : req.sessions.user}).then( async (data)=>{
            const {template} = await req.body
            if(template == `template_1`)
            {
                template_1(data);
            }
            elif(template == `template_2`)
            {
                template_2(data);
            }
            elif(template == `template_3`)
            {
                template_3(data);
            }
            console.log(`${data_profile} has been saved successfully`)
         }).catch(err => console.log(err))
}

module.exports = {create}