import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { variables } from 'src/app/shared/variables';
import { UserService } from 'src/app/services/user.service';
import { IUser } from 'src/app/models/iuser';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: IUser = {};
  form: FormGroup;
  mail = new FormControl('', [Validators.required, Validators.email]);
  pass = new FormControl('', [Validators.required, Validators.minLength(8)]);

  constructor(fb: FormBuilder, private userService: UserService, private route: Router, private localStorage: LocalStorageService) {
    this.form = fb.group({
        mail: this.mail,
        pass: this.pass,
    });
  }

  ngOnInit(): void {
  }
  onResetForm(): void{
    this.form.reset();
    console.log('Reseteado');
  }
  onSaveForm(): void{
    if (this.form.valid){
      console.log('Guardado');
      console.log(this.form);
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.form.value, null, 4));
      this.user.email = this.form.controls.email.value;
      this.user.pass = this.form.controls.pass.value;
      this.loginUser();

    }
  }
  loginUser = () => {
    this.userService.get('1').subscribe(res => {
      this.user.id = res.data.id;
      this.user.first_name = res.data.first_name;
      this.user.last_name = res.data.last_name;
      this.user.email = res.data.email;
      this.user.avatar = res.data.avatar;

      this.localStorage.setToken(JSON.stringify(this.user));
      this.route.navigate(['/']);
    });
  }
}
