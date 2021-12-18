import StudentModel from '../models/studentmodel.js'

class StudentControler {
    static createDoc = async (req, res) => {
        const { name, age, fees } = req.body
        let result = new StudentModel({
            name: name,
            age: age,
            fees: fees
        })
        var xx = await result.save()
        const xxx = await StudentModel.find();
        res.render("index", { data: xxx })
    }
    static getAllDoc = async (req, res) => {
        try {
            const result = await StudentModel.find();
            res.render("index", { data: result })
        } catch (error) {
            console.log(error)
        }
    }
    static editDoc = async (req, res) => {
        const result = await StudentModel.findById(req.params.id)
        res.render("edit",{editdata:result})
    }
    static updateDocById = async (req, res) => {
        console.log(req.body)
        console.log(req.params)
        const result= await StudentModel.findByIdAndUpdate(req.params.id,req.body)
        console.log(result)
        res.redirect("/student/get")
    }
    static delectDocById = async (req, res) => {
        const result =await StudentModel.findByIdAndDelete(req.params.id) 
        res.redirect("/student/get")
    }
}

export default StudentControler