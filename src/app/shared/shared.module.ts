import { NgModule } from "@angular/core";
import { LoaderComponent } from "./loader/loader.component";
import { AlertComponent } from "./alert/alert.component";

@NgModule({
    declarations: [
        LoaderComponent,
        AlertComponent
    ],
    exports: [
        LoaderComponent,
        AlertComponent
    ]
})
export class SharedModule { }