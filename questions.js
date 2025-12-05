const questions = [
  // Soal 1–10 (tetap sama seperti sebelumnya)
  {
    soal: "Pak Ahmad mempunyai 2/5 liter bensin dalam satu botol. Ia memiliki 7 botol bensin yang sama. Berapa liter bensin seluruhnya?",
    pilihan: ["9/5 liter", "12/5 liter", "14/5 liter", "10/5 liter"],
    jawabanBenar: "14/5 liter"
  },
  {
    soal: "Rudi memiliki 9/10 meter tali. Ia ingin memotongnya menjadi 9 potongan sama panjang. Berapa panjang setiap potongan tali?",
    pilihan: ["1/9 m", "1/10 m", "1/12 m", "1/15 m"],
    jawabanBenar: "1/10 m"
  },
  {
    soal: "Hasil dari pembagian pecahan 5/3 ÷ 1/2 = …",
    pilihan: ["10/3", "3/4", "2/5", "2/5"],
    jawabanBenar: "10/3"
  },
  {
    soal: "Hasil dari 1/2 × 3/2 = …",
    pilihan: ["3/4", "3/8", "4/8", "1/6"],
    jawabanBenar: "3/4"
  },
  {
    soal: "Pecahan desimal dari 7/5 adalah …",
    pilihan: ["1,25", "1,4", "1,45", "2,25"],
    jawabanBenar: "1,4"
  },
  {
    soal: "Di sebuah kelas Jika, jumlah siswa laki-laki 14 anak dan siswa perempuan 14 anak. Maka perbandingan siswa laki-laki dan siswa perempuan adalah …",
    pilihan: ["1 : 1", "1 : 2", "2 : 1", "3 : 1"],
    jawabanBenar: "1 : 1"
  },
  {
    soal: "Ibu membuat teh manis. Jika 2 gelas memerlukan 3 sendok gula, maka untuk 6 gelas diperlukan … sendok gula",
    pilihan: ["3", "6", "9", "10"],
    jawabanBenar: "9"
  },
  {
    soal: "Ibu membeli buah 20 kg (jeruk dan apel) dengan rasio 1 : 4.  kg jeruk yang dibeli?",
    pilihan: ["4 Kg", "5 Kg", "10 Kg", "15 Kg"],
    jawabanBenar: "4 Kg"
  },
  {
    soal: "Jarak pada peta antara Kota A dan Kota B adalah 5 cm, jarak sebenarnya 25 km. Berapa skala peta tersebut?",
    pilihan: ["1 : 500.000", "1 : 5.000.000", "1 : 5", "5 : 25"],
    jawabanBenar: "1 : 500.000"
  },
  {
    soal: "Waktu berlari Budi dan Rian berbanding 3 : 4. Jika Rian berlari 32 menit, berapa menit Budi berlari?",
    pilihan: ["40 menit", "42 menit", "50 menit", "24 menit"],
    jawabanBenar: "24 menit"
  },

  // Soal 11–20 (diperbaiki sesuai foto terbaru yang jelas)
  {
    soal: "Hitunglah hasil perkalian dan pembagian berikut: 3/5 × 10 = …",
    pilihan: ["3", "6", "50/3", "30/5"],
    jawabanBenar: "6"
  },
  {
    soal: "Hitunglah hasil perkalian dan pembagian berikut: 7 × 2/5 = …",
    pilihan: ["14/5", "7/5", "2/5", "9/5"],
    jawabanBenar: "14/5"
  },
  {
    soal: "Hitunglah hasil perkalian dan pembagian berikut: 3/4 × 2/3 = …",
    pilihan: ["6/12", "5/7", "6/20", "1/2"],
    jawabanBenar: "6/12"
  },
  {
    soal: "Hitunglah hasil perkalian dan pembagian berikut: 1/5 ÷ 2/5 = …",
    pilihan: ["2/15", "3/10", "1/15", "3/5"],
    jawabanBenar: "3/10"
  },
  {
    soal: "Hitunglah hasil perkalian dan pembagian berikut: 3 ÷ 3/2 = …",
    pilihan: ["2", "9/2", "6/3", "3/2"],
    jawabanBenar: "2"
  },
  {
    soal: "Angka 7 pada bilangan 4,7 menunjukkan nilai tempat …",
    pilihan: ["satuan", "persepuluhan", "perseratusan", "perseribuan"],
    jawabanBenar: "persepuluhan"
  },
  {
    soal: "Urutkan nilai ulangan dari yang terkecil ke terbesar (Ani 7,5 – Budi 7,2 – Citra 7,8 – Deni 7,4)",
    pilihan: ["Budi, Deni, Ani, Citra", "Budi, Ani, Deni, Citra", "Citra, Deni, Ani, Budi", "Ani, Budi, Citra, Deni"],
    jawabanBenar: "Budi, Deni, Ani, Citra"
  },
  {
    soal: "Nilai : Ani 7,5 – Budi 7,2 – Citra 7,8 – Deni 7,4. Nilai terkecil ulangan diperoleh oleh …",
    pilihan: ["Ani", "Budi", "Citra", "Deni"],
    jawabanBenar: "Budi"
  },
  {
    soal: "Berapakah nilai terbesar dari data Nilai : Ani 7,5 – Budi 7,2 – Citra 7,8 – Deni 7,4.",
    pilihan: ["7,2", "7,4", "7,5", "7,8"],
    jawabanBenar: "7,8"
  },
  {
    soal: "Pada bilangan 7,82, angka 2 bernilai …",
    pilihan: ["2", "0,2", "0,02", "0,002"],
    jawabanBenar: "0,02"
  },
  {
    soal: "Bentuk paling sederhana dari rasio 16 : 24 adalah …",
    pilihan: ["1 : 2", "2 : 3", "4 : 6", "8 : 12"],
    jawabanBenar: "2 : 3"
  },
  {
    soal: "Bentuk paling sederhana dari 34 : 40 adalah …",
    pilihan: ["17 : 20", "5 : 6", "3 : 4", "2 : 3"],
    jawabanBenar: "17 : 20"
  },
  {
    soal: "Rasio waktu belajar dan bermain Dela 3 : 1. Jika belajar selama 3 jam, maka Dela akan bermain selama …",
    pilihan: ["1 jam", "2 jam", "3 jam", "4 jam"],
    jawabanBenar: "1 jam"
  },
  {
    soal: "Usia Ani dan Budi berbanding 2 : 3. Jika jumlah usia mereka 25 tahun, berapa usia Ani?",
    pilihan: ["8 tahun", "10 tahun", "12 tahun", "15 tahun"],
    jawabanBenar: "10 tahun"
  },
  {
    soal: "Usia Ani dan Budi berbanding 2 : 3. Jika jumlah usia mereka 25 tahun, berapa usia Budi?",
    pilihan: ["10 tahun", "12 tahun", "15 tahun", "18 tahun"],
    jawabanBenar: "15 tahun"
  },
  {
    soal: "Jarak pada peta antara Kota A dan Kota B adalah 6 cm. Jarak sebenarnya 12 km. Skala petanya adalah …",
    pilihan: ["1 : 200.000", "1 : 20.000", "1 : 2.000.000", "1 : 200"],
    jawabanBenar: "1 : 200.000"
  },
  {
    soal: "Skala sebuah peta adalah 1 : 100.000. Jika jarak pada peta 3 cm, maka jarak sebenarnya adalah … km",
    pilihan: ["0,3 km", "3 km", "30 km", "300 km"],
    jawabanBenar: "3 km"
  },
  {
    soal: "Rasio waktu Ani dan Sita dalam belajar adalah 2 : 3. Jika Ani belajar selama 20 menit, berapa lama Sita belajar?",
    pilihan: ["12 menit", "24 menit", "30 menit", "36 menit"],
    jawabanBenar: "30 menit"
  },
  {
    soal: "Budi dan Rian berlatih bernyanyi dengan rasio waktu 4 : 5. Jika total waktu latihan mereka adalah 45 menit, berapa menit Budi berlatih?",
    pilihan: ["16 menit", "18 menit", "20 menit", "25 menit"],
    jawabanBenar: "20 menit"
  },
  {
    soal: "Budi dan Rian berlatih bernyanyi dengan rasio waktu 4 : 5. Jika total waktu latihan mereka adalah 45 menit, berapa menit Rian berlatih?",
    pilihan: ["20 menit", "25 menit", "27 menit", "30 menit"],
    jawabanBenar: "25 menit"
  }


];
