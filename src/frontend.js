
  /* stuff for sending form. 
  const form = document.getElementById('myForm');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      message: document.getElementById('message').value
    };
    try {
      const response = await fetch('/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
  
      const result = await response.json();
      if (response.ok) {
        document.getElementById('alertMessage').textContent = 'Message sent!';
        form.reset();
      } else {
        document.getElementById('alertMessage').textContent = `Failed to send message: ${result.error || 'Unknown error'}`;
      }
    } catch (error) {
      document.getElementById('alertMessage').textContent = `Failed to send message: ${error.message}`;
    }
  });
*/
