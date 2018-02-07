import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UfcComponent } from './components/ufc/ufc.component';

const routes: Routes = [
	{ path: 'ufc', component: UfcComponent}
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
  	RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
