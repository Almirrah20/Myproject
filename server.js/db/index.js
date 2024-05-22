const mongoose = require("mongoose")

const connectDB = async (url) => {
    try {
        return await mongoose.connect(url);
    } catch (error) {
        console.log("ERROR WHILE CONNECTING DB", error);
        process.exit(1)
    }
}

module.exports = connectDB;