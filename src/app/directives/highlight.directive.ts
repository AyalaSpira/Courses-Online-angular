import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true,
})
export class HighlightDirective {
  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(0.5);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(1); 
  }

  private highlight(opacity: number) {
    this.el.nativeElement.style.opacity = opacity; 
  }
}