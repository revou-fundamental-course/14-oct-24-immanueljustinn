// Ini JavaScript

// js carousel 
const carousel = document.getElementById('carousel');
const images = document.querySelectorAll('.carousel img');
const totalImages = images.length;
let currentIndex = 0;
let autoSlideInterval;

// fungsi untuk update carousel
function updateCarousel() {
    const offset = -currentIndex * images[0].clientWidth;
    carousel.style.transform = `translateX(${offset}px)`;
}

// fungsi untuk maju ke gambar berikutnya
function nextImage() {
    currentIndex = (currentIndex + 1) % totalImages;
    updateCarousel();
}

// untuk kembali ke gambar sebelumnya
function prevImage() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateCarousel();
}

// fungsi untuk memulai auto slide
function startAutoSlide() {
    autoSlideInterval = setInterval(nextImage, 5000); //ganti gambar setelah 5 detik
}

// tombol navigasi manual 
document.getElementById('nextBtn').addEventListener('click', function() {
    clearInterval(autoSlideInterval); //menghentikan auto-slide ketika ditekan
    nextImage();
    startAutoSlide();
});

document.getElementById('prevBtn').addEventListener('click', function() {
    clearInterval(autoSlideInterval);
    prevImage();
    startAutoSlide();
});

// mulai auto-slide saat web dimuat
startAutoSlide();

//mengatur ulang carousel saat jendela diresize 
window.addEventListener('resize', updateCarousel);