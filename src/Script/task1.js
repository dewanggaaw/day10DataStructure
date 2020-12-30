console.log("halo data structure");

// Buat sebuah function dengan aturan paramaternya sebagai berikut :
// Harus array
// Value dari array harus integer / number
// Jika
//       paramater tidak memenuhi kriteria , tampilkan pesan error berupa alert
// Else
//      Return invert value dari array.
// Contoh
// nama_Function([1,2,3,4,5])
// Expected output :
// [-1,-2,-3,-4,-5]

let arrNum = [4, 5, 2, 3, 6, -2];
function invertNum(arrNum) {
  for (let index = 0; index < arrNum.length; index++) {
    if (typeof arrNum == NaN) {
      console.log("salah!");
    } else {
      arrNum[index] *= -1;
    }
  }
  console.log(arrNum);
}
invertNum(arrNum);
