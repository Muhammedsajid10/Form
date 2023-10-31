const formModel = require("./formSchema")

const formCreate = async (req,res) => {
    const {Name,Age,Gender,BloodGroup,Mobile,Email,Address} = req.body

    const formDetails = await formModel.create({
        Name,Age,Gender,BloodGroup,Mobile,Email,Address
    })

    res.json(formDetails)
}


module.exports = formCreate;


