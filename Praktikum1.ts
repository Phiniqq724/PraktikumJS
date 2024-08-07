let ukuranTanah1 = 20.5;
let ukuranTanah2 = 30;
let hargaTanah = 1500000;
let ppn = 0.15;

let luasTanah = ukuranTanah1 * ukuranTanah2;
let hargaTotal = luasTanah * hargaTanah;
let hargaPPN = hargaTotal * ppn;
let hargaAkhir = hargaTotal + hargaPPN;

console.log("Harga Akhir : " + hargaAkhir);
