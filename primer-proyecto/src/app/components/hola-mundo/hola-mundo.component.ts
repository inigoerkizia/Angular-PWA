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
}