const connectDB = (url) => {
    const mongoose = require('mongoose')
    mongoose.connect(url)
        .then(() => console.log('Connection Successful!'))
        .catch(error => console.log(error.message))
}

module.exports = connectDB
