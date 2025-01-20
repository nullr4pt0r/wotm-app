import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-word-details',
  template: `
    <div class="max-w-md mx-auto my-4 rounded-xl border bg-card text-card-foreground shadow">
      <div class="flex flex-col space-y-1.5 p-6">
        <div class="font-semibold leading-none tracking-tight">{{ word }}</div>
        <div class="text-sm text-muted-foreground">{{ pronunciation }}</div>
      </div>
      <div class="p-6 pt-0">
        <div class="mb-4">
          <h3 class="font-semibold">Usage:</h3>
          <p>{{ usage }}</p>
        </div>
        <div class="mb-4">
          <h3 class="font-semibold">Example:</h3>
          <p>{{ example }}</p>
        </div>
        <div>
          <h3 class="font-semibold">Origin:</h3>
          <p>{{ origin }}</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .bg-card {
      background-color: var(--card);
    }
    .text-card-foreground {
      color: var(--card-foreground);
    }
    .text-muted-foreground {
      color: var(--muted-foreground);
    }
  `]
})
export class WordDetailsComponent {
  @Input() word: string = '';
  @Input() pronunciation: string = '';
  @Input() usage: string = '';
  @Input() example: string = '';
  @Input() origin: string = '';
}
