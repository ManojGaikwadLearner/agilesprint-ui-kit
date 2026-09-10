import { Directive, HostBinding, HostListener, signal } from '@angular/core';

@Directive({
  selector: '[agileDraggable]',
  standalone: true
})
export class DraggableDirective {
  readonly isDragging = signal<boolean>(false);

  @HostBinding('attr.draggable') readonly draggable = true;

  @HostBinding('class.opacity-50')
  get opacityClass(): boolean {
    return this.isDragging();
  }

  @HostListener('dragstart', ['$event'])
  onDragStart(event: DragEvent): void {
    this.isDragging.set(true);
    if (event.dataTransfer) {
      event.dataTransfer.effectAllowed = 'move';
    }
  }

  @HostListener('dragend')
  onDragEnd(): void {
    this.isDragging.set(false);
  }
}