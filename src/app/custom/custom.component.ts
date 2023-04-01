import { Component, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild } from "@angular/core";
import { Form, NgForm } from "@angular/forms";

@Component({
    selector: 'app-custom',
    templateUrl: './custom.component.html'
})
export class CustomComponent implements OnInit, OnChanges {
    @ViewChild('customInput', { static: false }) customInput?: ElementRef;
    evenNumbers: number[] = [];
    oddNumbers: number[] = [];

    @ViewChild('f') form?: HTMLFormElement;

    onFormSubmit() {
        console.log('Submitted', this.form);
    }

    onSubmit() {
        console.log(this.customInput);
    }

    onIntervalFired(firedNumber: number) {
        if (firedNumber % 2 === 0) {
            this.evenNumbers.push(firedNumber)
        }
        else {
            this.oddNumbers.push(firedNumber)
        }
    }

    ngOnInit(): void {
        console.log('ngOnInit called');
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log('ngOnChanges called', changes);
    }
}