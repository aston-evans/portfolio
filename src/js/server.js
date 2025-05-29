/* Backend for taking code... future purpooses 
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