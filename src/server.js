const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');  // <-- Import body-parser

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());  // <-- Use body-parser to parse JSON requests


// Basic GET route for testing server status
app.get('/', (req, res) => {
  res.send('Server is running');
});
// Handle form submission

app.post('/send', async (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail', // or another provider
    auth: {
      user: 'findaston@gmail.com',
      pass: 'eedh pwcd mybj bvdv' // use app password if 2FA is enabled
    }
  });

  const mailOptions = {
    from: email,
    to: 'findaston@gmail.com',
    subject: `Message from ${name}`,
    text: message
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Message sent successfully'); // Log success
    res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error); // Log the error details
    res.status(500).json({ error: 'Error sending message', details: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
