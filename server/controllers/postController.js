const postModel = require("../models/postModel");
const mongoose = require("mongoose");

// get all post
const getAllPosts = async (req, res) => {
  try {
    const post = await postModel.find();
    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({
      success: false,
      error,
    });
  }
};

// get Single post
const singlePost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await postModel.findById(id);
    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({
      success: false,
      error,
    });
  }
};

// add post
const addPost = async (req, res) => {
  try {
    const newpost = postModel(req.body);
    await newpost.save();
    res.status(201).json({
      success: true,
      message: "Post added Successfully",
      newpost: {
        ...newpost,
        id: newpost._id,
      },
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      error,
    });
  }
};

const updatePost = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`post ${id} not found`);
  try {
    postModel.findById(id).then((post) => {
      post.image = req.body.image;
      post.description = req.body.description;
      post.save().then(() =>
        res.status(201).json({
          success: true,
          message: "Update Successfully",
          post,
        })
      );
    });
    // await updateblog.save();
    // res.status(201).json({
    //   success: true,
    //   message: "Update Successfully",
    //   updateblog,
    // });
  } catch (error) {
    res.status(404).json({
      success: false,
      error,
    });
  }
};

const deletePost = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`post ${id} not found`);
  try {
    postModel.findByIdAndDelete(id).then(
      res.status(201).json({
        success: true,
        message: "Deleted Successfully",
      })
    );
  } catch (error) {
    res.status(404).json({
      success: false,
      error,
    });
  }
};

module.exports = { getAllPosts, singlePost, addPost, updatePost, deletePost };
