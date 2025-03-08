import mongoose from 'mongoose'
const DbConnerction = async()=>{
    try{
     const conn = await mongoose.connect(process.env.MONGOS_URL!);
     if(!conn){
        console.log('mongoose connection error!')
     }
     console.log(`mongoose connection successfully mongodb:${conn.connection.host}://${conn.connection.port}`)
    }
    catch(error){
        console.log(error)
    }
}

export default DbConnerction;