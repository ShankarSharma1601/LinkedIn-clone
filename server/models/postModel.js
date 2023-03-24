const mongoose = require("mongoose");

// user schema
const postSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: false,
    },
    message: {
      type: String,
      required: [true, "Message is required"],
    },
    like: {
      type: Number,
    },
    comment: [],
    date: {
      type: Date,
    },
  },
  { timestamps: true }
);

// model
const postModel = mongoose.model("posts", postSchema);

// export
module.exports = postModel;
