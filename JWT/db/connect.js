const mongoose = require('mongoose')

const connectDB = (url) => {
  return mongoose.connect(Url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
}

module.exports = connectDB
