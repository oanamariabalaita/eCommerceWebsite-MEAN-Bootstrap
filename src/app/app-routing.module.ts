import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UiModule } from './ui/ui.module';


const routes: Routes = [];

@NgModule({
	declarations: [ ],
  imports: [RouterModule.forRoot(routes), UiModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
