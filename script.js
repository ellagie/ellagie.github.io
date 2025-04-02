// script.js
document.addEventListener("DOMContentLoaded", function() {
  AOS.init();
  fetch('content.html')
    .then(response => response.text())
    .then(data => document.getElementById('content').innerHTML = data);
});
