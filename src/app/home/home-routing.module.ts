import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { HomeDisplayComponent } from './pages/home-display/home-display.component';
import { EpkComponent } from './pages/epk/epk.component';

const routes: Routes = [{
  path: "",
  component: HomeComponent,
  children:[
    { path: '', redirectTo: '/homeDisplay', pathMatch: 'full' },
  {
    path: 'homeDisplay',
    component: HomeDisplayComponent,
  },{
    path: 'epk',
    component: EpkComponent,
  },]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
