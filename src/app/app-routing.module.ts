import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from "./auth/auth.guard";
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent,
    canActivate:[AuthGuard]
  },
  {
    path: "heroes",
    loadChildren: "../app/heroes/heroes.module#HeroesModule",
    canActivate:[AuthGuard]
  },
  {
    path: "auth",
    loadChildren: "../app/auth/auth.module#AuthModule"
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
