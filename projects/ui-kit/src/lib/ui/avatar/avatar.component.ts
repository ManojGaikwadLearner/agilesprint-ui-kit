import { Component, input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  standalone: true,
  imports: [NgOptimizedImage],
  template: `
    <div class="relative inline-block rounded-full overflow-hidden border border-gray-200"
         [style.width.px]="size()"
         [style.height.px]="size()">
      @if (src()) {
        <img [ngSrc]="src()!" [alt]="alt()" [width]="size()" [height]="size()" class="object-cover" />
      } @else {
        <div class="w-full h-full bg-slate-700 text-white flex items-center justify-center font-bold text-xs">
          {{ fallbackInitials }}
        </div>
      }
    </div>
  `
})
export class AvatarComponent {
  src = input<string | null>(null);
  alt = input<string>('User avatar');
  name = input<string>('User');
  size = input<number>(32);

  get fallbackInitials(): string {
    const parts = this.name().split(' ');
    if (parts.length >= 2) {
      return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
    }
    return this.name().slice(0, 2).toUpperCase();
  }
}