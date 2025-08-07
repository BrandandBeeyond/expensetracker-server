const Category = require("../models/Category.model");
const Cloudinary = require("cloudinary");

const addCategory = async (req, res) => {
  try {
    const { name, categoryType } = req.body;


    if (!name || !categoryType) {
      return res
        .status(400)
        .json({ success: false, message: "Enter name and category type" });
    }

    if (!req.files || !req.files.icon) {
      return res.status(400).json({ message: "Please upload a icon image" });
    }

    const existingCategory = await Category.findOne({ name: name.trim() });

    if (existingCategory) {
      return res
        .status(400)
        .json({ success: false, message: "category already exists" });
    }

    const iconResult = await Cloudinary.v2.uploader.upload(
      req.files.icon[0].path,
      {
        folder: "categories/icons",
      }
    );

    const category = await Category.create({
      name: name.trim(),
      icon: {
        public_id: iconResult.public_id,
        url: iconResult.secure_url,
      },
      categoryType: categoryType,
    });

    res.status(201).json({
      message: "Category created successfully",
      category,
    });
  } catch (error) {
    console.error("Error creating category:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};


const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json({ success: true, categories });
  } catch (error) {
    console.error("Error fetching categories:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};


module.exports = {addCategory,getAllCategories}