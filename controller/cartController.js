const { reject } = require("lodash");
const { resolve } = require("path");
const Cart = require("../models/Cart");

const getAllBooksInCart = () => {
  return new Promise((resolve, reject) => {
    Cart.find()
      .then((booksInCart) => resolve(booksInCart))
      .catch((err) => reject(err));
  });
};

const insertBookToCart = (title) => {
  return new Promise((resolve, reject) => {
    const cart = new Cart({
      title,
    });
    cart
      .save()
      .then((theBookChosen) => {
        resolve(theBookChosen);
      })
      .catch((err) => reject(err));
  });
};


const deleteBookFromCart = (_id) => {
  return new Promise((resolve, reject) => {
    Cart.findByIdAndDelete(_id)
      .then((bookRemoved) => {
        resolve(bookRemoved);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

module.exports = {getAllBooksInCart, insertBookToCart,deleteBookFromCart}



