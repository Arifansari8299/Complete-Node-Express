const express = require('express')
const cors = require('cors');
const multer = require('multer');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/download',express.static(path.join(__dirname,'public')));

const upload  = multer({ limits: { fileSize: 10 * 1024 * 1024 } })

app.post('/upload', upload.single('file'), (req, res) => {
    res.sendStatus(200); // Just to test upload speed
  });

app.get('/ping', (req, res) => {
    res.send({ timestamp: Date.now() });
  });
app.listen(5000, () => console.log('Server running on port 5000'));