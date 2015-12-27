import {Component} from 'angular2/core';

@Component({
    selector: 'pengunjung',
    templateUrl: './app/halo/halo.component.html'
})
export class HaloComponent {
    nama: string = "belum ada";
    
    updateNama(x: string){
        this.nama = x;
    }
 }
