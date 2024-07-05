import { Component } from '@angular/core';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formulario-editar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './formulario-editar.component.html',
  styleUrl: './formulario-editar.component.css'
})
export class FormularioEditarComponent {
  id: number = 0;
  constructor(private router: Router, private rutaActual:ActivatedRoute) {
    //Una manera mas sencilla de obtener el id es:
    // this.id = this.rutaActual.snapshot.params['id'];

    this.rutaActual.params.subscribe(
      params => {
        this.id = params['id'];
      }
    );
   }

  volver() {
    this.router.navigate(['']);
  }
}
