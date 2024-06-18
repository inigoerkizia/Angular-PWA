import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hola-mundo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hola-mundo.component.html',
  styleUrl: './hola-mundo.component.css'
})
export class HolaMundoComponent {
  titulo : string = 'Hola mundo desde el componenente HolaMundoComponent';
  color : string = 'blue';
  //Opcionalmente publico
  public alumnos : string[] = ["Jesus", "Unai", "Jeray", "Mikel", "Maore"];

  mostrarDiv : boolean = false;
  alternarDivs() {
    this.mostrarDiv = !this.mostrarDiv;
  }

  /*agregarAlumno(alumno : string) {
    if(alumno.length > 0) {
      this.alumnos.push(alumno);
    }
  }
*/
//any() no distingue tipos
agregarAlumno(txtAlumno : HTMLInputElement) {
    if(txtAlumno.value.length > 0) {
      this.alumnos.push(txtAlumno.value);
      txtAlumno.value = "";
    }
  }
}