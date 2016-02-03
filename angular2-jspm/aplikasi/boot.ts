import 'reflect-metadata';
import {bootstrap} from "angular2/platform/browser";
import {HaloComponent} from "./halo/halo.component";

import 'bootstrap/css/bootstrap.css!';

console.log("Bootstrapping Angular 2");
bootstrap(HaloComponent);
