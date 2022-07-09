const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
    {
        title: {
          type: String,
          required: "The filed title is a required filed!",
        },
        // price: {
        //   type: Number,
        //   required: "The filed price is a required filed!",
        // },
      },
      {
        timestamps: true,
      }
)
const Cart = mongoose.model("Cart", cartSchema);
module.exports = Cart;
