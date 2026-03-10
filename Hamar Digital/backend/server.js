const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection Schema
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  business: { type: String },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Contact = mongoose.model('Contact', contactSchema);

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Hamar Digital API is running' });
});

// Contact form submission
app.post('/api/contacts', async (req, res) => {
  try {
    const { name, business, phone, email, message } = req.body;
    
    if (!name || !phone || !email || !message) {
      return res.status(400).json({ error: 'All required fields must be filled' });
    }
    
    const contact = new Contact({
      name,
      business: business || '',
      phone,
      email,
      message
    });
    
    await contact.save();
    
    console.log('New contact form submission:', contact);
    
    res.status(201).json({ 
      success: true, 
      message: 'Message sent successfully!',
      id: contact._id 
    });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ error: 'Failed to send message' });
  }
});

// Get all contacts (for admin)
app.get('/api/contacts', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json({ contacts });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch contacts' });
  }
});

const PORT = process.env.PORT || 5000;

// Connect to MongoDB and start server
const startServer = async () => {
  try {
    // Try to connect to MongoDB (optional - will work without it too)
    if (process.env.MONGODB_URI) {
      await mongoose.connect(process.env.MONGODB_URI);
      console.log('Connected to MongoDB');
    } else {
      console.log('Running without MongoDB (no MONGODB_URI provided)');
    }
    
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
    // Start server anyway without database
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT} (without MongoDB)`);
    });
  }
};

startServer();
