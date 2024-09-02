// script.js

// Fungsi ini dijalankan setelah semua elemen DOM selesai dimuat
document.addEventListener("DOMContentLoaded", function() {
    const overlay = document.querySelector('.overlay');
    const audio = document.getElementById('linkmp3');
    
    // Menyembunyikan overlay dan memulai audio setelah 3 detik
    setTimeout(() => {
        overlay.style.display = 'none';
        audio.play();
    }, 3000); // Waktu tunggu 3 detik sebelum overlay hilang dan audio dimulai

    // Fungsi ketika tombol "Boleh" diklik
    window.fungsimau = () => {
        Swal.fire({
            title: 'Yay!',
            text: 'Kamu setuju!',
            icon: 'success',
            confirmButtonText: 'Lanjut'
        }).then(() => {
            // Contoh tindakan tambahan setelah tombol diklik
            // Misalnya, melanjutkan ke bagian berikutnya atau mengubah konten di halaman
        });
    };

    // Fungsi ketika tombol "Engga" diklik
    window.fungsibaru = (btn) => {
        if (btn === 'Bn') {
            Swal.fire({
                title: 'Oh no!',
                text: 'Kamu menolak🙁 :(',
                icon: 'error',
                confirmButtonText: 'Maaf ya'
            }).then(() => {
                // Tindakan tambahan setelah tombol diklik
                // Misalnya, menampilkan pesan lain atau mengubah konten di halaman
                document.getElementById('kataditolak').classList.remove('sembunyi');
                document.getElementById('stikerditolak').classList.remove('sembunyi');
            });
        } else {
            Swal.fire({
                title: 'Oh no!',
                text: 'Kamu menolak lagi :(',
                icon: 'error',
                confirmButtonText: 'Maaf ya'
            });
        }
    };

    // Fungsi untuk tombol WhatsApp
    window.menuju = () => {
        window.location.href = "https://wa.link/y3s3d1"; // Ganti dengan nomor WhatsApp tujuan
    };

    // Fungsi untuk menambahkan elemen hati yang jatuh
    function berjatuhan() {
        const heart = document.createElement("div");
        heart.className = "fas fa-heart";
        heart.style.left = (Math.random() * 90) + "vw";
        heart.style.animationDuration = (Math.random() * 3) + 2 + "s";
        document.body.appendChild(heart);
    }

    // Memastikan hanya ada 100 elemen hati di layar
    setInterval(function() {
        var heartArr = document.querySelectorAll(".fa-heart");
        if (heartArr.length > 100) {
            heartArr[0].remove();
        }
    }, 100);

    // Panggil fungsi berjatuhan untuk menambahkan hati secara terus menerus
    setInterval(berjatuhan, 500);
});
