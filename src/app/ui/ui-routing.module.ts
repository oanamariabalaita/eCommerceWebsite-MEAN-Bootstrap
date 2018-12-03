import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { CartComponent } from './cart/cart.component';
import { ShopComponent } from './shop/shop.component';
import { ContactComponent } from './contact/contact.component';


const secondaryRoutes: Routes = [
{path:'', component: LayoutComponent},
{path:'cart', component: CartComponent},
{path:'shop', component: ShopComponent},
{path:'contact', component: ContactComponent},
{path:'home', component: LayoutComponent}
];

@NgModule({
	declarations: [ ],
  imports: [RouterModule.forChild(secondaryRoutes)],
  exports: [RouterModule]
})
export class UiRoutingModule { }
