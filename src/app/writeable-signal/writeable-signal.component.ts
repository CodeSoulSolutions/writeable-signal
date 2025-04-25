import { Component, signal } from '@angular/core';
import { WritableSignal } from '@angular/core';

@Component({
  selector: 'app-writeable-signal',
  imports: [],
  templateUrl: './writeable-signal.component.html',
  styleUrl: './writeable-signal.component.css'
})
export class WriteableSignalComponent {
  count: WritableSignal<number>=signal(0);

  increment() {
    this.count.update(current => current + 1);
  }

  decrement() {
    this.count.update(current => current - 1);
  }

  reset() {
    this.count.set(0);
  }

  customUpdate(value: number) {
    this.count.update(current => current + value);
  }
}
