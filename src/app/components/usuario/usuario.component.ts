import { Component, OnInit } from '@angular/core';
//El ActivatedRoute nos permite obtener los parametros pasados por el router
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html'
})
export class UsuarioComponent implements OnInit {

  constructor(private router: ActivatedRoute) {

    //nos subscribimos para obtener el parametro enviado en el router
    this.router.params.subscribe(parametros => {
      console.log('Ruta Padre');
      console.log(parametros);
    })

  }

  ngOnInit() {
  }

}
