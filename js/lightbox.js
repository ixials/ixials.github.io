const galleryImages = document.querySelectorAll('.gallery img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.getElementById('close');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');
const caption = document.getElementById('lightbox-caption');

let galleryIndex = 0;

galleryImages.forEach((img) => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    caption.textContent = img.title;
    galleryIndex = index;
  });
});

closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

leftBtn.addEventListener('click', () => {
  galleryIndex =
    (galleryIndex - 1 + galleryImages.length) % galleryImages.length;
  const img = galleryImages[galleryIndex];
  lightboxImg.src = img.src;
  lightboxImg.alt = img.alt;
  caption.textContent = img.title;
});

rightBtn.addEventListener('click', () => {
  galleryIndex =
    (galleryIndex + 1 + galleryImages.length) % galleryImages.length;
  const img = galleryImages[galleryIndex];
  lightboxImg.src = img.src;
  lightboxImg.alt = img.alt;
  caption.textContent = img.title;
});
