import { Component } from '@angular/core';
import { InputBaseComponent } from '../../_components/input-base/input-base.component';
import { ButtonBaseComponent } from '../../_components/button-base/button-base.component';

@Component({
  selector: 'app-login-page',
  imports: [InputBaseComponent, ButtonBaseComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {

}
