import mongoose from "mongoose";

export const db = () => {
    mongoose.connect(process.env.MONGO_URI,
        {
            dbName: "Restaurant"
        }
    ).then(() => {
        console.log("✅ Restaurant database connected.")
    }).catch(() => {
        console.log(`Some error oocured while connecting to database! ${err}`)

    })
};
