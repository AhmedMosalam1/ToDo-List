const Task = require("../models/taskschema")


const gettasks = (req, res) => {
    Task.find()
  .then((result) => {
    res.render("index",{arrTask:result});
  })
  .catch((err) => {
    console.log(err);
  });

  }


  const posttasks = (req, res) => {
    const task = new Task(req.body);
  
    task
      .save() 
      .then(() => {
        res.redirect("/");
      })
      .catch((err) => {
        console.log(err);
      });
  }


  const deletetasks = (req,res)=>{
    Task.findByIdAndDelete(req.params.id)
    .catch((err) => {
      console.log(err);
    })
  }

  const deleteall = (req,res)=>{
    Task.deleteMany()
     .catch((err) => {
       console.log(err);
     })
  }




module.exports={gettasks,posttasks,deletetasks,deleteall}