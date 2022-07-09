const express = require("express");
const router = express.Router();

const { addUser, getAllUsers } = require("../controller/usersController");

router.post("/", (req, res) => {
  let { userName, userPhone, userEmail, password, vip } = req.body;

  addUser(userName, userPhone, userEmail, password, vip)
    .then((userDate) => res.json(userDate))
    .catch((error) => res.json(error));
  console.log(req.body);
});

router.get("/", (req, res) => {
  getAllUsers()
    .then((userDate) => {
      res.json(userDate);
    })
    .catch((error) => res.json(error));
});

module.exports = router;
