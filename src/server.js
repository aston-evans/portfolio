const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');  

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '..', 'dist'))); // Serve frontend

// Serve homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'dist', 'home.html'));
});



// Handle form submission

app.post('/send', async (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail', 
    auth: {
      user: 'findaston@gmail.com',
      pass: 'eedh pwcd mybj bvdv' 
    }
  });

  const mailOptions = {
    from: email,
    to: 'findaston@gmail.com',
    subject: `Message from ${name}`,
    text: message, 
    replyTo: email 
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Message sent successfully'); 
    res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error); 
    res.status(500).json({ error: 'Error sending message', details: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
