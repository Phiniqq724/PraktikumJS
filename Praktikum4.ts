function jumlahDeretGeometri(a, r, n) {
  let jumlah = 0;
  let suku = a;

  if (suku === 1) {
    return suku * n;
  }
  for (let i = 1; i <= n; i++) {
    let geometri = suku * Math.pow(r, i - 1);
    console.log("Suku " + i + " adalah = ", geometri);
    jumlah += geometri;
  }

  return jumlah;
}
let a = 4;
let r = 3;
let n = 10;

let hasil = jumlahDeretGeometri(a, r, n);

console.log("Jumlah 10 suku pertama dari deret geometri adalah:", hasil);
