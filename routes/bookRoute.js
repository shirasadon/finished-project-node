const express = require("express");
const router = express.Router();

const {
  addBook,
  getBook,
  getAllBooks,
  updateBook,
  deleteBook,
} = require("../controller/bookController");

router.post("/", (req, res) => {
  const { title, description, price } = req.body;
  addBook(title, description, price)
    .then((bookDate) => res.json(bookDate))
    .catch((error) => res.json(error));
});

router.get("/:theid", (req, res) => {
  getBook(req.params.theid)
    .then((bookDate) => {
      res.json(bookDate);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/", (req, res) => {
  getAllBooks()
    .then((bookDate) => {
      res.json(bookDate);
    })
    .catch((error) => res.json(error));
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  const title = req.body.title;
  const description = req.body.description;
  const price = req.body.price;
  updateBook(id, title, description, price)
    .then((bookDate) => {
      console.log(bookDate);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.delete("/:delById", (req, res) => {
  const _id = req.params.delById;
  deleteBook(_id)
    .then((bookDate) => {
      console.log(bookDate);
    })
    .catch((err) => {
      res.json(err);
    });
});
module.exports = router;
