const express = require("express");
const { PORT, CLOUDINARY_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } = require("./config/config");
const cookieParser = require("cookie-parser");
const userRouter = require("./routes/user.route");
const connectTodb = require("./dbconnection");
const cors = require('cors');
const cloudinary = require('cloudinary');
const categoryRouter = require("./routes/category.route");

const app = express();

const port = PORT;


connectTodb();


cloudinary.config({
  cloud_name: CLOUDINARY_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
});


app.use(express.json());
app.use(express.urlencoded({urlencoded:true}));
app.use(cookieParser());
app.use(cors());

app.get("/", (req, res) => {
  res.send(`<center><h1>Server is Started...</h1></center>`);
});


app.use('/api/v1/user',userRouter);
app.use('/api/v1/category',categoryRouter);


app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
