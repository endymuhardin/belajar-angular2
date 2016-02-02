import {Component} from "angular2/core";

@Component({
    selector: 'halo',
    templateUrl: "./aplikasi/halo/halo.component.html"
})
export class HaloComponent{
    nama: string;
    constructor(){
        this.nama = "Endy";
        console.log(`Halo ${this.nama}`);
    }
}