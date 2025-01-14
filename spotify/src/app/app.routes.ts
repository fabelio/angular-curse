import { Routes } from '@angular/router';
import { HomePageComponent } from './modules/home/pages/home-page/home-page.component';

export const routes: Routes = [
    {
        path: "",
        component: HomePageComponent,
        loadChildren: () => import('@home/home.routes').then(m => m.routes)
    },
    {
        path: "auth",
        loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
    }

];
