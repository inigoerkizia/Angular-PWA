import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PropNames, objectProps } from '../../utils/strong-type-props';
import { ContactoModel } from '../../models/contacto.model';
 
 
@Component({
  selector: 'app-formulario-agregar',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, CommonModule],
  templateUrl: './formulario-agregar.component.html',
  styleUrl: './formulario-agregar.component.css'
})
export class FormularioAgregarComponent {
    form : FormGroup;
    campos : PropNames<ContactoModel>;;
 
    constructor(private fb: FormBuilder) {
      this.form = this.fb.group({
        documento: ['', [Validators.required, Validators.min(1000000), Validators.max(99999999)]],
        nombre: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
        fechaNacimiento: [''],
        genero: ['']
      });
 
      this.campos = objectProps(this.form.value);
    }
 
    cambiarDatos(){
      //Setear un campo independiente. El get devuelve un objeto de la clase FormGroup
      //this.form.get('nombre')?.setValue('Juan');
 
      //Setear todos los campos del formulario
      this.form.setValue({
        documento: 123,
        nombre: 'Juan',
        fechaNacimiento: new Date().toISOString().split('T')[0],
        genero: 'Masculino'
      });
    }
}