const { Router } = require("express");
const messagesController = require("../controllers/messages");
const bodyParser = require('body-parser')

const newRouter = Router();
newRouter.use(bodyParser.json()) 
newRouter.use(bodyParser.urlencoded({ extended: true })) 
newRouter.get("/",  (req, res) =>
  res.render("new")
);

newRouter.post("/",async (req,res)=>{
  await messagesController.addMessage(req.body.text, req.body.user)
  res.status(200).redirect("/")
})

module.exports = newRouter;
