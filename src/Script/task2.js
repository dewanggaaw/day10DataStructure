// Buat sebuah function dengan aturan paramaternya sebagai berikut :
// Harus array
// Value dari array harus integer / number
// 5 value pertama positif 5 value terakhir negatif
// Jika
//       paramater tidak memenuhi kriteria , tampilkan pesan error berupa alert
// Else
//      Jika
//           parameter positif kalikan value value tersebut
//      Else
//          Jumlah semua bilangan negatif

// Lalu return kedua value yang sudah di olah kedalam array

// Contoh
// nama_Function([1,2,3,4,5, -1,-2,-3,-4,-5])
// Expected output :
// [120, -15]

// let arrAngka = [1, 2, 3, 4, 5, -1, -2, -3, -4, -5];
// let positif = [];
// let negatif = [];
// function kaliTambah(arrAngka) {
//   for (let index = 0; index < arrAngka.length; index++) {
//     if (Math.sign(index) == 1) {
//       positif *= arrAngka[index];
//     } else {
//       negatif += arrAngka[index];
//     }
//   }
//   return [positif, negatif];
// }

// console.log(kaliTambah(arrAngka));

// console.log(Math.sign(arrAngka[6]));

let arrAngka = [1, 2, 3, 4, 5, -1, -2, -3, -4, -5];
let positif = 0;
let negatif = 0;
function kaliTambah(arrAngka) {
  let positif = 1;
  let negatif = 0;
  if (arrAngka.length && typeof arrAngka !== "string") {
    for (let index = 0; index < arrAngka.length; index++) {
      if (arrAngka[index] > 0) {
        positif *= arrAngka[index];
      } else if (arrAngka[index] < 0) {
        negatif += arrAngka[index];
      }
    }
    return [positif, negatif];
  } else {
    console.log("salah!");
    return [];
  }
}

console.log(kaliTambah(arrAngka));
