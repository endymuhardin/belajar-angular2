class Produk {
    private _kode: string;
    nama: string;
    harga: number;
    
    constructor(k: string, n: string, h:number){
        this._kode = k;
        this.nama = n;
        this.harga = h;
    }
    
    get kode(): string {
        return this._kode;
    }
    
    set kode(x: string) {
        this._kode = x;
    }
}

let p = new Produk("P-002", "Produk 002", 122000);

console.log("Kode Produk : "+p.kode);
console.log("Nama Produk : "+p.nama);
console.log("Harga Produk : "+p.harga);
