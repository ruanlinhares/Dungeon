import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "../_pages/home/home.component";
import { LoginPageComponent } from "../_pages/login-page/login-page.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoginPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dungeon-project';
}
