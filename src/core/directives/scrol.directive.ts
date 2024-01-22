import { Directive, HostListener, Renderer2, ElementRef, HostBinding } from '@angular/core';

@Directive({
  selector: '[scrollable]'
})
export class ScrollableDirective {
  private isDragging = false;
  private startX!: number;
  private scrollLeft!: number;
  @HostBinding('style.userSelect') userSelect = 'none';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent): void {
    this.isDragging = true;
    this.startX = event.pageX;
    this.scrollLeft = this.el.nativeElement.scrollLeft;
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    if (this.isDragging) {
      const deltaX = this.startX - event.pageX;
      this.renderer.setProperty(this.el.nativeElement, 'scrollLeft', this.scrollLeft + deltaX);
    }
  }

  @HostListener('mouseup')
  onMouseUp(): void {
    this.isDragging = false;
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.isDragging = false;
  }
}
