const form = document.getElementById('email-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const to = document.getElementById('to').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;

  fetch('/send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ to, subject, message }),
  })
    .then((response) => response.json())
    .then((data) => {
      alert('Email sent successfully');
      form.reset();
    })
    .catch((error) => {
      console.error(error);
      alert('Error sending email');
    });
});
