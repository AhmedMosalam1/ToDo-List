const express=require("express");
require("dotenv").config();
const mongoose = require("mongoose");  
const bodyParser=require("body-parser")
const app = express();
const router=require("./routes/alltasks.js")
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
port=3000


mongoose.connect("mongodb://0.0.0.0:27017/Tasks")
  .then(() => {
    app.listen(port, () => {
      console.log(`server running......`);
    });
  }).catch((err) => {
    console.log(err)
  })
  

app.use("/",router)

app.get("/", (req, res) => {
    res.redirect("/index");
  })
  
//  404 
app.use((req, res) => {
  res.status(404).send("Sorry can't find that!");
});




