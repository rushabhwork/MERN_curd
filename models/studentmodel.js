import mongoose from "mongoose"
const studentSchema = new mongoose.Schema({
    name:{type
        :String,required:true},
    age:{type:Number,required:true },
    fees:{type:Number,required:true   }

})

const StudentModel = mongoose.model('   ',studentSchema)



export default  StudentModel