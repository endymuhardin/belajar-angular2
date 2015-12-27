import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';

@Component({
    selector: 'pengunjung',
    template:`
    Nama : <input type="text" #tamu (keyup)="updateNama(tamu.value)"> <br />
    <h2>Halo {{nama}}</h2>
    `
})
export class HaloComponent {
    nama: string = "belum ada";
    
    updateNama(x: string){
        this.nama = x;
    }
 }

bootstrap(HaloComponent);