let nilaiSiswa = 80;
let nilaiHuruf;
let bilanganGanjilGenap = nilaiSiswa % 2;

if (nilaiSiswa >= 85 && nilaiSiswa <= 100) {
  nilaiHuruf = 'A';
} else if (nilaiSiswa >= 75 && nilaiSiswa <= 84) {
  nilaiHuruf = 'B';
} else if (nilaiSiswa >= 60 && nilaiSiswa <= 74) {
  nilaiHuruf = 'C';
} else if (nilaiSiswa >= 0 && nilaiSiswa <= 60) {
  nilaiHuruf = 'D';
} else {
  nilaiHuruf = 'Nilai Anda tidak Valid!';
}

console.log('Nilai Angka : ' + nilaiSiswa);
console.log('Nilai Huruf : ' + nilaiHuruf);
console.log(bilanganGanjilGenap = 0 ? "Bilangan Ganjil" : "Bilangan Genap");