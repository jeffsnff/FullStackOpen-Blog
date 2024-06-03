require('dotenv').config()

const PORT = process.env.PORT
const mongoURL = process.env.MONGODB_URI

module.exports = {
  PORT,
  mongoURL
}