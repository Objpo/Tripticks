import express from "express";
import Article from "../models/Article.js";

const router = express.Router();


router.get("/", async (req, res) => {
  try {
    const articles = await Article.find(); 
    res.json(articles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
