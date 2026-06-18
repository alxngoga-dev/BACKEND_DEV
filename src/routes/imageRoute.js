import express from "express";
import multer from "multer";
import cloudinary from "../config/cloudinary.js";

const router = express.Router();


const upload = multer({dest: "uploads/",});

router.post("/upload",upload.single("image"),
  async (req, res) => {
    try {
      const result = await cloudinary.uploader.upload(
        req.file.path
      );

      res.status(200).json({
        message: "Image uploaded successfully",
        imageUrl: result.secure_url,
        public_id: result.public_id,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }
);

router.delete("/delete/:public_id",

  async (req, res) => {
    try {
      const result = await cloudinary.uploader.destroy(
        req.params.public_id
      );

      res.status(200).json({
        message: "Image deleted successfully",
        result,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }
);

export default router;