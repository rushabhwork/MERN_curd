import mongoose from 'mongoose'

 const connectDB = async (url)=>{
    try {
        const dataBaseName = "crudOpration"
         mongoose.connect(url)

    } catch (error) {
        console.log("not connect to database")
    }
}

export default connectDB