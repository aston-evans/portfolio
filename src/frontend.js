document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('myForm');
  
  // Check if form exists before adding listener
  if (!form) {
    console.error('Form with id "myForm" not found');
    return;
  }
  
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Example: Accessing style (make sure the element exists)
    form.style.border = "2px solid green";  // Just an example of modifying style
    
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
      alert('Message sent!');
      form.reset();
    } else {
      const errorText = await res.text();
      alert('Failed to send message: ' + errorText);
    }
  });
});
