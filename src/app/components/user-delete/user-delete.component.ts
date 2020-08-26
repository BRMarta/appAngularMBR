import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { IUser } from 'src/app/models/iuser';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.scss']
})
export class UserDeleteComponent implements OnInit {

  public user: IUser = {};
  private id: string;

  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getUser();
  }
  getUser = () => {
    if (localStorage.getItem('user')){
     this.user = JSON.parse(localStorage.getItem('user'));
    }
  }

  delete = () =>
  {
    this.userService.delete(this.user.id).subscribe(res => {
      this.user = res;
   });
  }
}
