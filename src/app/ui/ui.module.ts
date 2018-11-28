import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageCardComponent } from './home-page-card/home-page-card.component';
import { ItemCardComponent } from './item-card/item-card.component';

@NgModule({
  declarations: [LayoutComponent, HeaderComponent, FooterComponent, HomePageCardComponent, ItemCardComponent],
  exports: [LayoutComponent],
  imports: [
    CommonModule
  ]
})
export class UiModule { }
