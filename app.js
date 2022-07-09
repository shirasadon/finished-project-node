const express = require("express"),
  app = express(),
  port = process.env.PORT || 3000,
  path = require("path"),
  mongoose = require("mongoose"),
  bodyParser = require("body-parser");

const wishListRoute = require("./routes/wishlistRoute");
const routeCart = require("./routes/cartRoute");
const userRoute = require("./routes/userRoute");
const bookRoute = require("./routes/bookRoute");
const authicationRoute = require("./routes/authicationRoute");
const logger = require("./logger/logger");

app.use(express.static("public"));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.use("/wishlist", wishListRoute);
app.use("/cart", routeCart);
app.use("/user", userRoute);
app.use("/book", bookRoute);
app.use("/authication", authicationRoute);

mongoose.connect("mongodb://localhost:27017/GreatLibrary").then(() => {
  app.listen(port, () => {
    logger.info(
      `start server start listening on port http://localhost:${port}`
    );
  });
});

app.get("/*", function (req, res) {
  res.status("404");
  res.sendFile(path.join(__dirname, "/error.html"));
});
