// run `node index.js` in the terminal
function download() {
  var url = document.getElementsByName('url')[0].value;
  var xhr = new XMLHttpRequest();

  xhr.open('GET', '/download?url=' + url, true);
  xhr.responseType = 'blob';

  xhr.onload = function () {
    if (xhr.status === 200) {
      var blob = xhr.response;
      var link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = 'audio.mp3';
      link.click();
      document.getElementById('result').innerHTML = 'Download completed!';
    } else {
      document.getElementById('result').innerHTML =
        'Error: Unable to download audio.';
    }
  };

  xhr.send();
}
