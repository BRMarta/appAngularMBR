import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { variables } from 'src/app/shared/variables';
import { UserService } from 'src/app/services/user.service';
import { IUser } from 'src/app/models/iuser';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  public user: IUser = {};
  public titulo: string;
  form: FormGroup;
  nombre = new FormControl('', Validators.required);
  apellidos = new FormControl('', Validators.required);
  mail = new FormControl('', [Validators.required, Validators.email]);
  pass = new FormControl('', [Validators.required, Validators.minLength(8)]);
  repass = new FormControl('', [Validators.required, Validators.minLength(8)]);

  constructor(fb: FormBuilder, private userService: UserService) {
    this.form = fb.group({
        nombre: this.nombre,
        apellidos: this.apellidos,
        mail: this.mail,
        pass: this.pass,
        repass: this.repass,
    });
  }

  ngOnInit(): void {
    if (localStorage.getItem('user')) {
      this.titulo = 'Editar Perfil';
      this.user = JSON.parse(localStorage.getItem('user'));
      this.form.patchValue({
          nombre: this.user.first_name,
          apellidos: this.user.last_name,
          mail: this.user.email,
      });
    }
    else{
      this.titulo = 'Nuevo Perfil';
    }
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
    }
  }

}
