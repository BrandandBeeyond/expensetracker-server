require('dotenv').config();

const PORT = process.env.PORT;
const JWT_EXPIRESIN = process.env.JWT_EXPIRESIN
const JWT_SECRET = process.env.JWT_SECRET
const MONGODB_URI = process.env.MONGODB_URI
const CLOUDINARY_NAME = process.env.CLOUDINARY_NAME
const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY
const CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET


module.exports = {
    PORT,
    JWT_EXPIRESIN,
    JWT_SECRET,
    MONGODB_URI,
    CLOUDINARY_API_KEY,
    CLOUDINARY_NAME,
    CLOUDINARY_API_SECRET
}