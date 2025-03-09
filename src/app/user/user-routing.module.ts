import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from '../user/user-details/user-details.component';

const routes: Routes = [
  { path: '', component: UserDetailsComponent },    // Página de detalles del usuario
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
