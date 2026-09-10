import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  template: `
    <span class="inline-block w-2.5 h-2.5 rounded-full"
          [class.bg-slate-400]="status() === 'BACKLOG'"
          [class.bg-blue-500]="status() === 'IN_PROGRESS'"
          [class.bg-amber-500]="status() === 'REVIEW'"
          [class.bg-emerald-500]="status() === 'DONE'">
    </span>
  `
})
export class StatusIconComponent {
  status = input<'BACKLOG' | 'IN_PROGRESS' | 'REVIEW' | 'DONE'>('BACKLOG');
}