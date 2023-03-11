const form = document.getElementById('download-form');
const urlInput = document.getElementById('url-input');
const downloadLink = document.getElementById('download-link');
const downloadButton = document.getElementById('download-button');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const url = urlInput.value;
  fetch(`/download?url=${encodeURIComponent(url)}`)
    .then((response) => response.json())
    .then((data) => {
      downloadLink.style.display = 'block';
      downloadButton.href = data.downloadUrl;
    })
    .catch((error) => {
      console.error(error);
    });
});
