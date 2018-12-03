import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageCardComponent } from './home-page-card/home-page-card.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CartComponent } from './cart/cart.component';
import { ShopComponent } from './shop/shop.component';
import { ContactComponent } from './contact/contact.component';
import { UiRoutingModule } from './ui-routing.module'


@NgModule({
  declarations: [LayoutComponent, HeaderComponent, FooterComponent, HomePageCardComponent, CarouselComponent, CartComponent, ShopComponent, ContactComponent],
  exports: [LayoutComponent],
  imports: [
    CommonModule,
    UiRoutingModule,
    NgbModule.forRoot()
  ]
})
export class UiModule { }
