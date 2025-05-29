const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
require('dotenv').config(); // load .env variables

const app = express();

app.use(bodyParser.json());
app.use(express.static('dist')); // serve your frontend from dist or change as needed

app.post('/send', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).send('All fields are required');
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,   // <-- use your authenticated email here
      replyTo: email,                  // <-- user email goes here so you can reply
      to: process.env.EMAIL_USER,
      subject: `New contact form message from ${name}`,
      text: `You got a new message from ${name} (${email}):\n\n${message}`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).send('Email sent successfully!');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Error sending email: ' + error.message);  // Send error message to frontend for debugging
  }
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));


/*
const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '..', 'dist')));

// Route: serve homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'dist', 'home.html'));
});

// Route: contact form handler
app.post('/send', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'findaston@gmail.com',
        pass: 'eedh pwcd mybj bvdv',
      },
    });
//
    const mailOptions = {
      from: email,
      to: 'findaston@gmail.com',
      subject: `Message from ${name}`,
      text: message,
      replyTo: email,
    };

    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'Failed to send message', details: error.message });
  }
});

// Catch-all (AFTER all other routes)
app.get('*', (req, res) => {
  // Only serve index.html if it's NOT an API request
  if (req.originalUrl.startsWith('/send')) {
    return res.status(404).json({ error: 'Not Found' });
  }

  res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
*/