import { Component } from '@angular/core';
import { ReversePipe } from './task1/reverse.pipe/reverse.pipe.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: ` Reverse Machine: {{ word | reverse }} `,
  imports: [ReversePipe],
})
export class AppComponent {
  word = 'You are a champion';
}
