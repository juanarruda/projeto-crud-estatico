

import {Component} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{

  itens = [
      {label: 'Home', icon: 'pi pi-home', routerLink: ['/home']},
      {label: 'Lista', icon: 'pi pi-align-justify', routerLink: ['/lista']},
      {label: 'Usuário', icon: 'pi pi-fw pi-user' },
      {label: 'Sair', icon: 'pi pi-fw pi-power-off', routerLink: ['/login']}
    ]


  constructor() {}

}
