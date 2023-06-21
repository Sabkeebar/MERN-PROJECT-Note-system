const mongoose = require('mongoose')

const connectDB = async () => {
    try {
     const password = 'superSABA17@123';
const encodedPassword = encodeURIComponent(password);

const uri = `mongodb+srv://sabkeebar:${encodedPassword}@cluster0.szctqzp.mongodb.net/?retryWrites=true&w=majority`;

        await mongoose.connect(uri)
    } catch (err) {
        console.log(err)
    }
}

module.exports = connectDB