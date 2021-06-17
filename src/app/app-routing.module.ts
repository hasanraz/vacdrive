import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VaccenterComponent } from './components/vaccenter/vaccenter.component';
import { VaccinationFormComponent } from './components/vaccination-form/vaccination-form.component';

const routes: Routes = [
  {path: 'state', component: VaccinationFormComponent},
  {path: 'center', component: VaccenterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
