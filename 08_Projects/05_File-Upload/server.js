const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const connectDB = require("./config/db");
const Resume = require("./models/Resume");
dotenv.config();
const path = require('path')
const cors = require('cors');
const fs = require('fs');
const multer = require('multer');

// App setups and middlewares
const app = express();
app.use(express.json());
app.use(cors());

// Ensure upload folders exists
fs.mkdirSync(path.join(__dirname, 'uploads'), { recursive: true });

// MongoDB connection
connectDB();

//Multer setup
const allowedExt = new Set([".pdf", ".doc", ".docx"]);
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, path.join(__dirname, "uploads")),
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase();
    const unique = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, `${unique}${ext}`);
  },
});
const fileFilter = (req, file, cb) => {
  const ext = path.extname(file.originalname).toLowerCase();
  if (!allowedExt.has(ext)) {
    return cb(new Error("Only PDF, DOC, DOCX allowed"));
  }
  cb(null, true);
};
const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB
  fileFilter,
});
//Routes
app.get("/", (req, res) => {
  res.send("hello everyone how are u");
});
app.post("/upload", upload.single("resume"), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ message: "No file uploaded" });
    const file = req.file;
    const newFile = await Resume.create({
      originalName: file.originalname,
      fileName: file.filename,
      size: file.size,
      mimetype: file.mimetype,
      ext: path.extname(file.originalname).toLowerCase(),
    });
    res.json({ message: "File uploaded successfully", file: newFile });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
app.get("/files", async (req, res) => {
  const files = await Resume.find().sort({ uploadedAt: -1 });
  res.json(files);
});
app.get("/download/:id", async (req, res) => {
  const fileDoc = await Resume.findById(req.params.id);
  if (!fileDoc) return res.status(404).send("File not found");
  const filePath = path.join(__dirname, "uploads", fileDoc.fileName);
  res.download(filePath, fileDoc.originalName);
});
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
