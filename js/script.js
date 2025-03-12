// ini file javascript

// Meminta pengguna untuk memasukkan nama sebelum masuk ke situs
let userName = "";
while (!userName) { // Looping hingga pengguna memasukkan nama
    userName = prompt("Masukkan nama Anda untuk melanjutkan:").trim(); // Meminta input nama dan menghapus spasi ekstra
}

// Menunggu hingga dokumen sepenuhnya dimuat
document.addEventListener("DOMContentLoaded", function() {
    // Menetapkan nama pengguna yang dimasukkan ke elemen dengan id 'username'
    document.getElementById("username").textContent = userName;
});

// Auto Slide
let currentSlide = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;
const dots = document.querySelectorAll('.dot');
let autoSlide;

function showSlide(index) {
    if (index >= totalSlides) currentSlide = 0;
    else if (index < 0) currentSlide = totalSlides - 1;
    else currentSlide = index;
    
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
    updateDots();
}

function updateDots() {
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentSlide].classList.add('active');
}

// Next/Previous controls
document.querySelector('.next').addEventListener('click', () => {
    clearInterval(autoSlide);
    showSlide(currentSlide + 1);
    startAutoSlide();
});

document.querySelector('.prev').addEventListener('click', () => {
    clearInterval(autoSlide);
    showSlide(currentSlide - 1);
    startAutoSlide();
});

// Dot navigation
dots.forEach(dot => {
    dot.addEventListener('click', () => {
        clearInterval(autoSlide);
        showSlide(parseInt(dot.getAttribute('data-slide')));
        startAutoSlide();
    });
});

// Auto slide
function startAutoSlide() {
    autoSlide = setInterval(() => {
        showSlide(currentSlide + 1);
    }, 4000); // 4 detik
}

// Start slider
showSlide(0);
startAutoSlide();

// Pause on hover
const sliderContainer = document.querySelector('.slider-container');
sliderContainer.addEventListener('mouseenter', () => clearInterval(autoSlide));
sliderContainer.addEventListener('mouseleave', startAutoSlide);

// Message Us
document.getElementById('messageForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Ambil nilai dari form (kolom kiri)
    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const message = document.getElementById('message').value;

    // Dapatkan waktu saat ini
    const currentTime = new Date().toString();

    // Tampilkan data di kolom kanan
    document.getElementById('current-time').textContent = currentTime;
    document.getElementById('preview-name').textContent = name;
    document.getElementById('preview-dob').textContent = dob;
    document.getElementById('preview-gender').textContent = gender;
    document.getElementById('preview-message').textContent = message;
});