document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('myForm');

  // Check if form exists before adding listener
  if (!form) {
    console.error('Form with id "myForm" not found');
    return;
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    form.style.border = "2px solid green";  

    const data = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };

    const res = await fetch('/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      const alertDiv = document.getElementById('alertMessage');
      alertDiv.style.display = 'block';
      form.reset();
    } else {
      const errorText = await res.text();

      
      const alertDiv = document.getElementById('alertMessage');
      alertDiv.style.color = 'red';
      alertDiv.textContent = 'Failed to send message: ' + errorText;
      alertDiv.style.display = 'block';
    }
  });
});
