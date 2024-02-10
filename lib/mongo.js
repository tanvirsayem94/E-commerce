import mongoose from "mongoose";


export const mongoDbConnect = async() => {
    try {
        await mongoose.connect(process.env.MONGODBURI);
    } catch (error) {
        console.log('there is an error while connecting mongodb', error)
    }
};

export default mongoDbConnect;