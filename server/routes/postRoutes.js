const express = require("express");
const {
  getAllPosts,
  addPost,
  updatePost,
  deletePost,
  singlePost,
} = require("../controllers/postController");
const router = express.Router();

// Routes
// GET || ALL blog
router.get("/all-posts", getAllPosts);

// GET || Single Blog
router.get("/:id", singlePost);

// POST || add blog
router.post("/add-post", addPost);

// POST || update blog
router.post("/update-post/:id", updatePost);

// POST || delete blog
router.delete("/delete-post/:id", deletePost);

module.exports = router;
