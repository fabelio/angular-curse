import { Routes } from '@angular/router';
import { TracksPageComponent } from '../tracks/pages/tracks-page/tracks-page.component';
import { FavoritesPageComponent } from '../favorites/pages/favorites-page/favorites-page.component';
import { HistoryPageComponent } from '../history/pages/history-page/history-page.component';

export const routes: Routes = [
    {
        path: "favorites",
        component: FavoritesPageComponent,
        loadChildren: () => import('../favorites/favorites.routes').then(com => com.routes)
    },
    {
        path: "tracks",
        component: TracksPageComponent,
        loadChildren: () => import('../tracks/tracks.routes').then(com => com.routes)
    },
    {
        path: "history",
        component: HistoryPageComponent
        // loadChildren: () => import('../history/pages/history-page/history-page.component').then(com => com.HistoryPageComponent)
    }
];
