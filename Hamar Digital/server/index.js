const express = require('express');
const next = require('next');
const mongoose = require('mongoose');
require('dotenv').config();

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  server.use(express.json());

  // connect to MongoDB (optional if using Next API route)
  const MONGODB_URI = process.env.MONGODB_URI;
  if (MONGODB_URI) {
    mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
  }

  // example express route for contact (could forward to Next API route)
  server.post('/api/contact', async (req, res) => {
    try {
      // forward to Next's handler or implement logic here
      const { default: handler } = require('../pages/api/contact');
      await handler(req, res);
    } catch (err) {
      res.status(500).json({ success: false, error: err.message });
    }
  });

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  const port = process.env.PORT || 3000;
  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});