



import mongoose from "mongoose";

const connectDB = async(url) => {
    mongoose.set('strictQuery',true);

    // mongoose.connect(url).then(()=>console.log('MongoDB Connected')).catch((err)=>console.log(err, "This is errirrkmnfalf"))

    mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("Connected to database")
    }).catch((err)=>console.log(err, "This is errirrkmnfalf"))
    
}


export default connectDB;