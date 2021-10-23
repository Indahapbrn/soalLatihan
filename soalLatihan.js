const questions = [
    {
      question: "Manakah dari pasangan di bawah ini yang merupakan himpunan dan bukan himpunan ...",
      answers: {
        a: "Kumpulan planet di tata surya dan kumpulan kendaraan roda 2",
        b: "Kumpulan minuman segar dan kumpulan makan pedas",
        c: "Kumpulan bilangan bulat dan kumpulan siswa pandai",
        d: "Kumpulan hewan pemakan tumbuhan dan kumpulan tumbuhan berakar serabut"
      },
      correctAnswer: "c"
    },
    {
      question: "Pernyataan di bawah ini yang bukan merupakan himpunan adalah ...",
      answers: {
        a: "Himpunan nama-nama bulan dalam setahun",
        b: "Himpunan alat-alat elektronik",
        c: "Himpunan baju berbahan katun",
        d: "Himpunan siswa kelas VII yang bertubuh tinggi"
      },
      correctAnswer: "d"
    },
    {
      question: "Diketahui Z adalah himpunan bilangan genap kurang dari sama dengan 100. Maka penulisan notasi himpunan yang benar, ialah ...",
      answers: {
        a: "Z = {2, 4, 6, 8, …, 98, 100}",
        b: "z = {2, 4, 6, 8, …}",
        c: "z = (2, 4, 6, 8, …, 98, 100}",
        d: "Z = {2, 4, 6, 8, …, 98}"
      },
      correctAnswer: "a"
    },
    {
      question: "Apabila P = {alat-alat tulis}, maka pernyataan yang salah tentang anggota dari himpunan P, yaitu ...",
      answers: {
        a: "Penggaris ∈ P",
        b: "Penghapus ∈ P",
        c: "Meja belajar ∈ P",
        d: "Rak sepatu ∉ P"
      },
      correctAnswer: "c"
    },
    {
      question: "Anggota himpunan B adalah kucing, anjing, singa, dan harimau. Di bawah ini himpunan B jika dinyatakan dalam metode deskripsi, kecuali ...",
      answers: {
        a: "B = {hewan berkaki empat}",
        b: "B = {hewan pemakan tumbuhan}",
        c: "B = {hewan pemakan daging}",
        d: "B = {hewan yang berkembang biak dengan melahirkan}"
      },
      correctAnswer: "b"
    },
    {
      question: "T adalah himpunan bilangan ganjil yang kurang dari 34. Himpunan tersebut jika dinyatakan dalam metode bersyarat seperti di bawah ini, yaitu ...",
      answers: {
        a: "T = {x | x > 34, x ∈ bilangan ganjil}",
        b: "T = {x | x ≤ 34, x ∈ bilangan ganjil}",
        c: "T = {x | x ≥ 34, x ∈ bilangan ganjil}",
        d: "T = {x | x < 34, x ∈ bilangan ganjil}"
      },
      correctAnswer: "d"
    },
    {
      question: "Di sebuah perternakan terdapat beberapa hewan ternak, diantara lain, ayam, bebek, kambing, sapi, angsa, kuda, dan domba. Apabila himpunan I adalah kumpulan hewan ternak yang berkembang biak dengan cara ovopipar, maka penulisan himpunan I dalam metode tabulasi yang benar, adalah ...",
      answers: {
        a: "I = {ayam, bebek, angsa}",
        b: "I = {kambing, sapi, domba}",
        c: "I = {ayam, bebek, kambing, sapi, angsa, domba}",
        d: "I = {ayam, bebek, kambing, sapi, angsa, domba}"
      },
      correctAnswer: "a"
    },
    {
      question: "Himpunan S = {3, 6, 9, 12, …, 24}, apabila himpunan S dinyatakan dalam metode bersyarat, maka penulisan yang benar di bawah ini yaitu ...",
      answers: {
        a: "S = {x | x < 24, x ∈ bilangan kelipatan 3}",
        b: "S = {x | x > 24, x ∈ bilangan kelipatan 3}",
        c: "S = {x | x ≤ 24, x ∈ bilangan kelipatan 3}",
        d: "S = {x | x ≥ 24, x ∈ bilangan kelipatan 3}"
      },
      correctAnswer: "c"
    },
    {
      question: "<br> &emsp;• Himpunan G = {x | 2 > x > 0, x ∈ bilangan ganjil} <br> &emsp;• Himpunan L = {nama-nama hari dalam seminggu berawalan D} <br> &emsp;• Himpunan O = {x | 12x + 6 = 6, x ∈ bilangan cacah} <br> &emsp;• Himpunan Y = {bilangan asli lebih dari 23} <br> <br>Berikut pasangan himpunan yang merupakan bukan himpunan kosong dan himpunan kosong, ialah ...",
      answers: {
        a: "Himpunan L dan himpunan Y",
        b: "Himpunan G dan himpunan L",
        c: "Himpunan Y dan himpunan O",
        d: "Himpunan O dan himpunan L"
      },
      correctAnswer: "d"
    },
    {
      question: "Diketahui himpunan A = {indonesia, myanmar, malaysia, brunei darussalam}, maka himpunan semesta yang mungkin dari himpunan A, kecuali ...",
      answers: {
        a: "S = {anggota negara asean yang pernah dijajah inggris}",
        b: "S = {anggota asean yang termasuk negara maju}",
        c: "S = {negara-negara anggota asean}",
        d: "S = {negara-negara yang berada di benua asia bagian tenggara}"
      },
      correctAnswer: "b"
    },
    {
      question: "Di bawah ini adalah contoh himpunan tak berhingga, kecuali ...",
      answers: {
        a: "U = {bilangan genap}",
        b: "W = {kipas angin, televisi, radio, telepon genggam, ….}",
        c: "C = {x | x < 24, x ∈ bilangan prima}",
        d: "M = {x | x < 1, x ∈ bilangan bulat}"
      },
      correctAnswer: "c"
    },
    {
      question: "<br><img src=images/materi/soal1-5.svg width=50% height= auto style=display: relative; margin: auto; text-align: right><br>Dari empat bentuk diagram Venn di atas, manakah bentuk yang tepat untuk menyatakan himpunan berikut:<br>S = {bilangan asli}<br>M = {x | x > 15, x ∈ bilangan kelipatan 4}<br>N = {x | x > 20, x ∈ bilangan kelipatan 2}",
      answers: {
        a: "1",
        b: "2",
        c: "4",
        d: "3"
      },
      correctAnswer: "b"
    },
    {
      question: "Perhatikan diagram Venn berikut!<br><img src=images/materi/latihan13.svg width=50% height= auto style=display: block; margin: auto><br>Dalam sebuah kelas terdapat 35 siswa. Apabila diketahui himpunan G adalah jumlah siswa yang pernah mendaki gunung, himpunan P adalah jumlah siswa yang pernah berkunjung ke pantai, dan 7 siswa yang belum pernah mengunjungi keduanya, maka berpakah jumlah siswa yang pernah mengunjungi keduanya ...",
      answers: {
        a: "35 siswa",
        b: "25 siswa",
        c: "10 siswa",
        d: "7 siswa"
      },
      correctAnswer: "d"
    },
    {
      question: "Diketahui sebuah diagram Venn seperti di bawah ini.<br><img class=gambar-soal src=images/materi/latihan14.svg width=50% height= auto display= relative; margin= auto; text-align= right><br>Himpunan D merupakan kumpulan hewan berkaki dua dan himpunan O adalah kumpulan hewan pemakan segala atau omnivora. Berikut himpunan O jika dinyatakan dalam metode tabulasi, adalah ...",
      answers: {
        a: "O = {bebek, ayam}",
        b: "O = {tikus, lele, gagak}",
        c: "O = {bebek, ayam, tikus, lele, gagak}",
        d: "O = {bebek, ayam, tikus, gagak}"
      },
      correctAnswer: "c"
    },
    {
      question: "Himpunan X = {bilangan asli kurang dari sama dengan 4}, maka banyaknya himpunan bagian X yang memiliki 3 anggota, ialah ...",
      answers: {
        a: "4",
        b: "6",
        c: "1",
        d: "2"
      },
      correctAnswer: "a"
    },
    {
      question: "Diketahui P adalah kumpulan bilangan asli kurang dari 5, Q adalah kumpulan bilangan genap lebih dari 5 dan kurang dari 10, dan R adalah kumpulan faktor bilangan dari 6. Maka (P ∪ Q) ∩ (Q ∪ R) = ...",
      answers: {
        a: "{1, 2, 3, 4}",
        b: "{3, 4, 6, 8}",
        c: "{1, 2, 3, 6, 8}",
        d: "{1, 2, 3, 4, 6, 8}"
      },
      correctAnswer: "c"
    },
    {
      question: "Diketahui:<br>&emsp;S = {kumpulan planet-planet di tata surya}<br>&emsp;D = {merkurius, venus, bumi, mars}<br>&emsp;L = {jupiter, saturnus, uranus, neptunus}<br>&emsp;T = {merkurius, venus}<br><br>Maka ((D ∩ T) ∪ L) <sup>c</sup> = ...",
      answers: {
        a: "{merkurius, venus, jupiter, saturnus, uranus, neptunus}",
        b: "{bumi, mars}",
        c: "{merkurius, venus}",
        d: "{jupiter, saturnus, uranus, neptunus}"
      },
      correctAnswer: "b"
    },
    {
      question: "Di kelas VII D terdapat 24 orang suka pelajaran Matematika, 27 orang suka pelajaran IPA, dan 14 orang menyukai kedua pelajaran. Banyaknya jumlah siswa dalam kelas tersebut adalah ...",
      answers: {
        a: "35",
        b: "36",
        c: "38",
        d: "37"
      },
      correctAnswer: "d"
    },
    {
      question: "Diketahui L = {faktor dari 32} dan M = {faktor dari 8}. Selisih antara himpunan L dan himpunan M adalah ...",
      answers: {
        a: "{16, 32}",
        b: "{1, 2, 4, 8}",
        c: "{1, 2, 4, 8, 16}",
        d: "{8, 16, 32}"
      },
      correctAnswer: "a"
    },
    {
      question: "Alwi, Kaffa, dan Tania pergi ke rumah makan khas Banjar. Di sana mereka memesan beberapa menu khas Banjar. Pesanan mereka jika dinyatakan dalam diagram Venn, sebagai berikut.<br><img src=images/materi/latihan20.svg width=50% height= auto style=display: block; margin: auto;><br>Berdasarkan diagram Venn, maka (A ∪ K) – T = ...",
      answers: {
        a: "{soto banjar, sate tulang}",
        b: "{saluang goreng, teh es, soto banjar, sate tulang}",
        c: "{nasi putih, gangan asam, air mineral}",
        d: "{saluang goreng, teh es, patin bakar, sambal acan}"
      },
      correctAnswer: "b"
    }
  ]