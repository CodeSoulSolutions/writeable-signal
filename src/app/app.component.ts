import { Component } from '@angular/core';
import { WriteableSignalComponent } from "./writeable-signal/writeable-signal.component";

@Component({
  selector: 'app-root',
  imports: [WriteableSignalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'code';
}
