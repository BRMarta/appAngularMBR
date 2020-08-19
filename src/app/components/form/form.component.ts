import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { variables } from 'src/app/shared/variables';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  form: FormGroup;
  nombre = new FormControl('', Validators.required);
  apellidos = new FormControl('', Validators.required);
  sexo = new FormControl('', Validators.required);
  mail = new FormControl('', [Validators.required, Validators.email]);
  pass = new FormControl('', [Validators.required, Validators.minLength(8)]);
  repass = new FormControl('', [Validators.required, Validators.minLength(8)]);

  constructor(fb: FormBuilder) {
    this.form = fb.group({
        nombre: this.nombre,
        apellidos: this.apellidos,
        sexo: this.sexo,
        mail: this.mail,
        pass: this.pass,
        repass: this.repass,
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
    }
  }

}
