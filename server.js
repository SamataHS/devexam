const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/api/data', (req, res) => {
  res.json({
    message: 'Hello from backend!',
    timestamp: new Date().toLocaleString()
  });
});

app.post('/api/message', (req, res) => {
  const { text } = req.body;
  res.json({
    received: text,
    response: `You sent: ${text}`
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
