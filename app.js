const form = document.querySelector('form');
const input = document.querySelector('input[type="text"]');
const button = document.querySelector('button[type="submit"]');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const url = input.value.trim();
  if (!url) return;

  const xhr = new XMLHttpRequest();
  xhr.open('POST', '/download');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        if (response.success) {
          window.location.href = response.data.url;
        } else {
          console.error(response.error);
        }
      } else {
        console.error('Error:', xhr.statusText);
      }
      button.disabled = false;
    }
  };
  xhr.send(JSON.stringify({ url }));
  button.disabled = true;
});
