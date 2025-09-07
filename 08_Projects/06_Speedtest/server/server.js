const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Prevent caching for download route
app.use('/download', express.static(path.join(__dirname, 'public'), {
    setHeaders: (res) => {
      res.set('Cache-Control', 'no-store');
    }
  }));
  
const upload = multer({ limits: { fileSize: 100 * 1024 * 1024 } });

app.post('/upload', upload.single('file'), (req, res) => {
  res.sendStatus(200); // Only for measuring upload speed
});

app.get('/ping', (req, res) => {
  res.send({ timestamp: Date.now() });
});

app.listen(5000, () => console.log('🚀 Server running on http://localhost:5000'));
