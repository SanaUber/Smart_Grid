import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
 

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Smart_Grid';
  constructor(private router: Router,){}
}
