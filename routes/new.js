const { Router } = require("express");
const messagesController = require("../controllers/messages");
const bodyParser = require("body-parser");
const { body, validationResult } = require("express-validator");

const newRouter = Router();
newRouter.use(bodyParser.json());
newRouter.use(bodyParser.urlencoded({ extended: true }));
newRouter.get("/", (req, res) => res.render("new"));

newRouter.post(
  "/",
  [
    body("text")
      .trim()
      .isAlphanumeric()
      .withMessage("messages can only be alphanumeric"),
    body("user")
      .trim()
      .isAlphanumeric()
      .withMessage("users can only be alphanumeric"),
  ],
  async (req, res) => {
    const result = validationResult(req);
    console.log(result.array());
    if (!result.isEmpty()) {
      return res.status(400).render("new", {
        errors: result.array(),
      });
    }
    await messagesController.addMessage(req.body.text, req.body.user);
    res.status(200).redirect("/");
  }
);

module.exports = newRouter;
