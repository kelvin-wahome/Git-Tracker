import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserFormComponent } from './user-form/user-form.component';
import { RepositoryComponent } from './repository/repository.component';

const routes: Routes = [
  {path:"user", component:UserFormComponent},
  {path:"repository",component:RepositoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
