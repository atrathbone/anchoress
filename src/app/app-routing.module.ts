import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [{path: '', loadChildren: () => import('./home/home.module').then((m) => m.HomeModule)}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    onSameUrlNavigation: 'reload',
    scrollOffset: [0, 50]
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
