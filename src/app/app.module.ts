import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Import your library
import { OwlModule } from 'ngx-owl-carousel';


import { AppComponent } from './app.component';
import { NgBootstrap } from './ng-bootstrap.module';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { GameListComponent } from './games/game-list/game-list.component';
import { DownloadsComponent } from './downloads/downloads.component';
import { HowToRegisterComponent } from './how-to-register/how-to-register.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { InstallationComponent } from './installation/installation.component';
import { WelcomeSectionComponent } from './welcome-section/welcome-section.component';
import { AboutComponent } from './about/about.component';
import { Free1000Component } from './promotions/free1000/free1000.component';
import { Free50Component } from './promotions/free50/free50.component';
import { PromotionListComponent } from './promotions/promotion-list/promotion-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    GameListComponent,
    DownloadsComponent,
    HowToRegisterComponent,
    HomeComponent,
    ContactComponent,
    InstallationComponent,
    WelcomeSectionComponent,
    AboutComponent,
    Free1000Component,
    Free50Component,
    PromotionListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgBootstrap,
    OwlModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
