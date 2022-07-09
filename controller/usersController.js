const User = require("../models/User");

const addUser = (userName, userPhone, userEmail, password, vip) => {
  return new Promise((resolve, reject) => {
    let user = new User({
      userName,
      userPhone,
      userEmail,
      password,
      vip,
    });
    user.save((err, userData) => {
      userData ? resolve(userData) : reject(err);
    });
  });
};

const getAllUsers = () => {
  return new Promise((resolve, reject) => {
    User.find().then((userData) => {
      userData ? resolve(userData) : reject(err);
    });
  });
};

module.exports = {
  addUser,
  getAllUsers,
};
