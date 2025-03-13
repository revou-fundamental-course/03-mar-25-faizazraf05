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
// Mendapatkan elemen slider
const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const dots = document.querySelectorAll('.dot');

// Inisialisasi indeks slide
let currentSlide = 0;

// Fungsi untuk menampilkan slide
function showSlide(index) {
    if (index >= slide.length) {
        currentSlide = 0; // Kembali ke slide pertama jika melebihi jumlah slide
    } else if (index < 0) {
        currentSlide = slide.length - 1; // Kembali ke slide terakhir jika negatif
    } else {
        currentSlide = index;
    }
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;

    // Update active dot
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentSlide].classList.add('active');
}

// Event listener untuk tombol sebelumnya
prevBtn.addEventListener('click', () => {
    showSlide(currentSlide - 1);
    resetAutoSlide(); // Reset timer saat tombol diklik
});

// Event listener untuk tombol berikutnya
nextBtn.addEventListener('click', () => {
    showSlide(currentSlide + 1);
    resetAutoSlide(); // Reset timer saat tombol diklik
});

// Event listener untuk dots
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showSlide(index);
        resetAutoSlide(); // Reset timer saat dot diklik
    });
});

// Fungsi autoslide
let autoSlideInterval;

function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        showSlide(currentSlide + 1); // Pindah ke slide berikutnya
    }, 3000); // Durasi 5 detik per slide
}

// Fungsi untuk mereset autoslide
function resetAutoSlide() {
    clearInterval(autoSlideInterval); // Hentikan interval saat ini
    startAutoSlide(); // Mulai ulang autoslide
}

// Mulai autoslide saat halaman dimuat
startAutoSlide();

// Hentikan autoslide saat mouse hover dan mulai lagi saat mouse out
slides.addEventListener('mouseover', () => {
    clearInterval(autoSlideInterval);
});

slides.addEventListener('mouseout', () => {
    startAutoSlide();
});

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
