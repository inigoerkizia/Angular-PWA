import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { subscribeOn } from 'rxjs';
 
@Component({
  selector: 'app-formulario-ejemplo',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formulario-ejemplo.component.html',
  styleUrl: './formulario-ejemplo.component.css'
})
 
export class FormularioEjemploComponent {

  form : FormGroup;
 
  constructor(private fb : FormBuilder) {
    this.form = this.fb.group({
      nombre : [''],
      apellido : ['']
    });
  }
 
  submit(){
    alert(JSON.stringify(this.form.value));
  }

  cambiarNombre() {
    this.form.get('nombre')?.setValue('Jesus');
  }
}
