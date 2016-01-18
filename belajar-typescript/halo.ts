import {Produk} from 'produk';
import  {Pelanggan} from 'pelanggan';

let p = new Produk("P-002", "Produk 002", 122000);

console.log("Kode Produk : "+p.kode);
console.log("Nama Produk : "+p.nama);
console.log("Harga Produk : "+p.harga);

let endy = new Pelanggan();
endy.nama = "Endy Muhardin";
endy.email = "endy.muhardin@gmail.com";

console.log("Nama Pelanggan 1 : "+endy.nama);
console.log("Email Pelanggan 1 : "+endy.email);