// models/Article.js
import mongoose from "mongoose";

const articleSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    imageUrl: { type: String },
    link: { type: String },
    date: { type: Date, default: Date.now }
});

const Article = mongoose.model("Article", articleSchema);
export default Article;
