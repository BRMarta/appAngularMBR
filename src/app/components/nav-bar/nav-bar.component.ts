import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { IUser } from 'src/app/models/iuser';
import { noUndefined } from '@angular/compiler/src/util';
import { UserHelper } from 'src/app/guards/user-helper';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  hayUser = false;
  constructor(private route: Router) { }

  ngOnInit(): void {
    this.hayUser = UserHelper.isLogged();
  }

  cerrarSesion = () => {
    localStorage.clear();
    this.route.navigate(['/']);
  }
}
