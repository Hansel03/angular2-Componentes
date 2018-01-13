import { Routes, RouterModule } from '@angular/router';
//importamos el componente que queremos agregarle el routing
import { HomeComponent } from './components/home/home.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { USUARIO_ROUTES } from './components/usuario/usuario.routes';


const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    //El elemento llamado children permite manejar rutas hijas
    {
        path: 'usuario/:id', component: UsuarioComponent,
        children: USUARIO_ROUTES
        /*children: [
            { path: 'nuevo', component: UsuarioNuevoComponent },
            { path: 'editar', component: UsuarioEditarComponent },
            { path: 'detalle', component: UsuarioDetalleComponent },
            { path: '**', pathMatch: 'full', redirectTo: 'nuevo' }
        ]*/
    },

    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];


export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);

