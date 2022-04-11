import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  nomeUsuario:any;
  senha:any;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClickLogin(){
    console.log(this.nomeUsuario + ' ' + this.senha)
    this.router.navigateByUrl('/user');
  }
}
