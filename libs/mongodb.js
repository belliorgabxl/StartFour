import mongoos from "mongoose";

 const connectMongoDB  = async ()=>{
    try{
        await mongoos.connect(process.env.MONGODB_URI);
        console.log("libs is connect");
    }
    catch(error) {
        console.log(error+"Mongoos DB Err.");
    }
};
export default connectMongoDB;