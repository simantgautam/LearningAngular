import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appToggleHighlightDirective]',
  standalone: true,
})
export class ToggleHighlightDirectiveDirective {
  // color = 'red';
  // color2 = 'green';
  togle = true;
  constructor(private el: ElementRef) {}

  @HostListener('click') onClick() {
    this.el.nativeElement.style.backgroundColor = this.togle ? 'red' : 'green';
    this.togle = !this.togle;
  }
}
