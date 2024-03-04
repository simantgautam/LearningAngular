import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appUppercase]',
  standalone: true,
})
export class UppercaseDirective {
  constructor(private el: ElementRef) {}

  private text = this.el.nativeElement.textContent;

  @HostListener('mouseenter') onMouseEnter() {
    console.log(this.text);
    this.el.nativeElement.textContent = this.text.toUpperCase();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.textContent = this.text;
  }

  private upperCase(text: String) {}
}
