# Belajar AngularJS 2.0 #

## Langkah-langkah pembuatan Hello World ##

1. [Instalasi NodeJS dan
   NPM](http://software.endy.muhardin.com/javascript/persiapan-coding-nodejs)
2. [Instalasi TypeScript](#instalasi-typescript)
3. [Inisialisasi Struktur Project](#inisialisasi-struktur-project)
4. [Membuat Template HTML](#membuat-template-html)
5. [Implementasi Komponen Angular 2](#implementasi-komponen-ng2)

### <a name="instalasi-typescript">Instalasi TypeScript</a> ###

AngularJS 2.0 menggunakan bahasa pemrograman TypeScript, yaitu pengembangan dari JavaScript. Nama resmi JavaScript adalah ECMAScript, dan versi yang saat ini terinstal di browser pada umumnya adalah versi 5. Saat ini yang sedang dikembangkan adalah versi 6. Berikut adalah beberapa poin penting mengenai TypeScript:

* TypeScript adalah superset dari ES6, sedangkan ES6 adalah superset dari ES5. Artinya, kita bisa menulis ES5 di kode program ES6, dan kita bisa menulis kode program ES6 dan ES5 di dalam TypeScript dan tidak akan error.
* TypeScript dikembangkan oleh Microsoft
* AngularJS versi 2.0 menggunakan TypeScript sebagai bahasa pemrograman utama. Kita juga bisa membuat aplikasi AngularJS 2.0 dengan bahasa ES5, ES6, ataupun Dart.
* Sebelum dirilis, TypeScript juga dikenal dengan istilah AtScript.
* TypeScript harus diubah dulu (transpile) menjadi ES5 supaya bisa dijalankan di browser.
* TypeScript menambahkan beberapa fitur dari ES6, yaitu:

    * static typing : tipe data ditulis secara eksplisit dan diperiksa pada waktu kompilasi
    * annotations / decorator : mirip dengan annotations di Java. Yaitu metadata yang dipasang di kode program dan akan diproses pada waktu aplikasi dijalankan.
    * karena memiliki type system, maka lebih banyak editor yang bisa menawarkan fitur autocomplete dan pemeriksaan error pada waktu kita mengetik

Untuk menginstal TypeScript, terlebih dulu kita harus menginstal NodeJS dan NPM. Selanjutnya, instalasi dilakukan dengan perintah berikut:

```
npm install -g typescript
```

Selanjutnya, untuk mengetes instalasi kita dan melihat cara kerja transpiler TypeScript, buatlah folder kosong dengan nama `belajar-typescript`.

```
mkdir belajar-typescript
cd belajar-typescript
```

Kemudian, buat file halo.ts di dalam folder tersebut dengan isi sebagai berikut:

```ts
var nama: string = "Endy";
```

Selanjutnya, jalankan transpiler untuk mengkompilasi file `halo.ts`

```
tsc halo.ts
```

Dia akan membuat file baru dengan nama `halo.js` yang berisi sebagai berikut:

```js
var nama = "Endy";
```

Seperti kita lihat di atas, kode program JavaScript yang dihasilkan tidaklah istimewa. Kode program JavaScript biasa.

Kita juga bisa menjalankan transpiler untuk selalu memantau file `.ts` sehingga kita tidak perlu menjalankan kompilasi setiap file diedit. Jalankan `tsc` dengan opsi `-w` (watch)

```
tsc -w *.ts
```

Kita bisa melihat fitur type system pada TypeScript dengan cara mengisi nilai angka ke dalam variabel nama (yang sudah dideklarasikan dengan tipe data `string`). Ubah file `halo.ts` menjadi seperti ini:

```ts
var nama: string = "Endy";
nama = 123;
```

Bila kita perhatikan transpiler, dia akan mengeluarkan pesan error seperti ini

```
File change detected. Starting incremental compilation...
halo.ts(2,1): error TS2322: Type 'number' is not assignable to type 'string'.
```

Dari pesan error di atas, kita bisa lihat bahwa variabel `nama` tidak bisa diisi dengan nilai `123` karena tipe datanya berbeda.

### <a name="inisialisasi-struktur-project">Inisialisasi Struktur Project</a> ###
### <a name="membuat-template-html">Membuat Template HTML</a> ###
### <a name="membuat-komponen-ng2">Membuat Komponen AngularJS 2.0</a> ###
## Tools ##

* [Visual Studio Code]()
* [Atom Editor]() dengan [package AngularJS 2.0]() 


## Referensi ##

* [AngularJS 2.0 Quickstart](https://angular.io/docs/ts/latest/quickstart.html)
* [Arsitektur Aplikasi AngularJS
  2](https://angular.io/docs/ts/latest/guide/architecture.html)
