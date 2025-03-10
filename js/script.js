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