import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayComponentComponent } from './display-component/display-component.component';
import { RegistrationformComponent } from './registrationform/registrationform.component';
import { SearchComponent } from './search/search.component';
import { SortComponent } from './sort/sort.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path:'registeration',component:RegistrationformComponent},
  {path:'search',component:SearchComponent},
  {path:'sort',component:SortComponent},
  {path:'display',component:DisplayComponentComponent},
  {path:"update/:id",component:UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
