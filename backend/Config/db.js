import { connect } from "mongoose"

const connectDB = async () => {
    await connect(process.env.DB_URL).then(() => {
        console.log("Database connected");
    }).catch((error) => {
        console.log(error);
    })
}

export default connectDB;