const images = document.querySelectorAll('.gallery img');
const fullImage = document.getElementById('fullImage');
const lightbox = document.getElementById('lightbox');

images.forEach(img => {
  img.addEventListener('click', () => {
    fullImage.src = img.src;
    lightbox.style.display = "block";
  });
});

lightbox.addEventListener('click', () => {
  lightbox.style.display = "none";
});
