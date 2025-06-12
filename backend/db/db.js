import mongoose, { connect } from "mongoose";

const connect_db=async()=>{
    await mongoose.connect(`${process.env.MONGO_URI}/${process.env.DB_NAME}`)
}

export default connect_db