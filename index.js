const express = require("express");
const { PORT } = require("./config/config");
const cookieParser = require("cookie-parser");
const userRouter = require("./routes/user.route");
const connectTodb = require("./dbconnection");

const app = express();

const port = PORT;


connectTodb();

app.use(express.json());
app.use(express.urlencoded({urlencoded:true}));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send(`<center><h1>Server is Started...</h1></center>`);
});


app.use('/api/v1/user',userRouter);

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
