const { Router } = require("express");
const messagesController = require("../controllers/messages");

const indexRouter = Router();

indexRouter.get("/", async (req, res) =>
  res.render("index", { messages: await messagesController.getAllMessages() })
);

module.exports = indexRouter;
