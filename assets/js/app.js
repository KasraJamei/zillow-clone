document.addEventListener('DOMContentLoaded', () => {
  fetch('components/header.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('header-placeholder').innerHTML = data;
    });
});

document.addEventListener('DOMContentLoaded', () => {
  fetch('components/footer.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('footer-placeholder').innerHTML = data;
    });
});

document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
  toggle.addEventListener('click', function () {
    const parent = this.parentElement;
    parent.classList.toggle('open');

    const content = this.nextElementSibling;
    if (parent.classList.contains('open')) {
      content.style.display = 'block';
    } else {
      content.style.display = 'none';
    }
  });
});