import { Component, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild } from "@angular/core";

@Component({
    selector: 'app-custom',
    templateUrl: './custom.component.html'
})
export class CustomComponent implements OnInit, OnChanges {
    @ViewChild('customInput', { static: false }) customInput?: ElementRef;

    onSubmit() {
        console.log(this.customInput);
    }

    ngOnInit(): void {
        console.log('ngOnInit called');
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log('ngOnChanges called', changes);
    }
}