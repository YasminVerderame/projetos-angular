import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './pages/home/home.component';
import { ModalProject1Component } from './components/modal-project1/modal-project1.component';
import { ModalProject2Component } from './components/modal-project2/modal-project2.component';
import { ModalProject3Component } from './components/modal-project3/modal-project3.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './pages/login/login.component';
import { PlansComponent } from './pages/plans/plans.component';
import { PurchaseComponent } from './pages/purchase/purchase.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ModalProject1Component,
    ModalProject2Component,
    ModalProject3Component,
    HeaderComponent,
    LoginComponent,
    PlansComponent,
    PurchaseComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
