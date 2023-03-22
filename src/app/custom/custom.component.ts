import { Component, ViewChild } from "@angular/core";

@Component({
    selector: 'app-custom',
    templateUrl: './custom.component.html'
})
export class CustomComponent {
    @ViewChild('customInput', { static: false }) serverContentInput?: HTMLInputElement;

    onSubmit(nameInput: HTMLInputElement) {
        
    }
}