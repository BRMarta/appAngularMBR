import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { IUser } from 'src/app/models/iuser';
import { noUndefined } from '@angular/compiler/src/util';

import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  userExiste = 'no';
  hayUser = false;
  constructor(private route: Router) { }

  ngOnInit(): void {
    this.existeStringToBool();
  }

  cerrarSesion = () => {
    localStorage.clear();
    this.existeStringToBool();
    console.log(this.hayUser);
    this.route.navigate(['/']);
  }

  existeStringToBool = () => {
    this.userExiste = localStorage.getItem('existe');
    if (this.userExiste === 'si'){
        this.hayUser = true;
    }
    else{
      this.hayUser = false;
    }
  }
}
