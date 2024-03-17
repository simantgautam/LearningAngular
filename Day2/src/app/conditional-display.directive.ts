import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appConditionalDisplay]',
  standalone: true,
})
export class ConditionalDisplayDirective {
  constructor(private el: ElementRef) {}
}
