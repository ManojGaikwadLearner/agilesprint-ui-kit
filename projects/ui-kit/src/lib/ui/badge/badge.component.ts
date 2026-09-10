import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  template: `
    <span
      class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
      [class.bg-blue-100]="variant() === 'info'"
      [class.text-blue-800]="variant() === 'info'"
      [class.bg-green-100]="variant() === 'success'"
      [class.text-green-800]="variant() === 'success'"
      [class.bg-amber-100]="variant() === 'warning'"
      [class.text-amber-800]="variant() === 'warning'"
      [class.bg-red-100]="variant() === 'danger'"
      [class.text-red-800]="variant() === 'danger'">
      <ng-content />
    </span>
  `
})
export class BadgeComponent {
  // v22 Presentational component intended for selectorless rendering (<ng-component [is]="BadgeComponent" />)
  variant = input<'info' | 'success' | 'warning' | 'danger'>('info');
}