import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './routable-components/home/home.component';
import { ConfigComponent } from './shared-components/config/component/config.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'config', component: ConfigComponent, outlet:'popup'},
  {path:'', redirectTo:'home', pathMatch:'full'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
