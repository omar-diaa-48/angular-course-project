import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') openClass: boolean = false;

  constructor() { }

  @HostListener('click') toggleOpen() {
    this.openClass = !this.openClass;
  }
}
