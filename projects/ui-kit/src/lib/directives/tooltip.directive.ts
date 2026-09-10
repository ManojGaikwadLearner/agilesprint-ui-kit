import { Directive, ElementRef, HostListener, inject, input } from '@angular/core';

@Directive({
  selector: '[agileTooltip]',
  standalone: true
})
export class TooltipDirective {
  // v16 Input Signal API
  appTooltip = input.required<string>();

  private readonly el = inject(ElementRef<HTMLElement>);

  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.el.nativeElement.title = this.appTooltip();
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.el.nativeElement.title = '';
  }
}