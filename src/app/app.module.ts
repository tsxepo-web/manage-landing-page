import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { register } from 'swiper/element/bundle';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { HeroSectionComponent } from './Components/hero-section/hero-section.component';
import { MainComponent } from './Components/main/main.component';
import { CarouselComponent } from './Components/carousel/carousel.component';
import { CallToActionComponent } from './Components/call-to-action/call-to-action.component';
import { FooterComponent } from './Components/footer/footer.component';

register();

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroSectionComponent,
    MainComponent,
    CarouselComponent,
    CallToActionComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
