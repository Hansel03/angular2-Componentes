import { Component, OnInit } from '@angular/core';
//El ActivatedRoute nos permite obtener los parametros pasados por el router
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-nuevo',
  template: `
    <p>
      usuario-nuevo Works!
    </p>
  `,
  styles: []
})
export class UsuarioNuevoComponent implements OnInit {

  constructor(private router: ActivatedRoute) {

    //El parent nos indica que se obtendrá el parametro del padre
    this.router.parent.params.subscribe(parametros => {
      console.log('Ruta Hija');
      console.log(parametros);
    })

  }

  ngOnInit() {
  }

}
