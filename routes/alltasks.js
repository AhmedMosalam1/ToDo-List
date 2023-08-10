const express = require('express');
const router=express.Router()
const taskscontroller=require("../controller/Taskscontroller")

router.get("/index",taskscontroller.gettasks);

router.post("/",taskscontroller.posttasks);

router.delete("/:id",taskscontroller.deletetasks);

router.delete("/",taskscontroller.deleteall);



module.exports=router;

