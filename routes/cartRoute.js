const express = require("express");
const router = express.Router();
const {
  getAllBooksInCart,
  insertBookToCart,
  deleteBookFromCart
} = require("../controller/cartController.js");

router.get("/", (req, res) => {
  getAllBooksInCart()
    .then((booksInCart) => {
      res.json(booksInCart);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.post("/", (req, res) => {
  const bookToCart = req.body.bookToCart;
  // const price = req.body
  insertBookToCart(bookToCart)
    .then((theBookChosen) => res.json(theBookChosen))
    .catch((err) => res.json(err));
});

router.delete("/:id", (req, res) => {
  const _id = req.params.id;
  deleteBookFromCart(_id)
    .then((bookRemoved) => {
      console.log(bookRemoved);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
