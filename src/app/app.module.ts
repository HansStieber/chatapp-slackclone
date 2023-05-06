import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component'
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ImprintComponent } from './components/imprint/imprint.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
<<<<<<< HEAD
import {MatInputModule} from '@angular/material/input';
=======
import {MatButtonModule} from '@angular/material/button';
>>>>>>> 1637799a8018e11376483bd7798b3a0c3207df9f

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    RegisterComponent,
    LoginComponent,
    ImprintComponent,
    PrivacyPolicyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
<<<<<<< HEAD
    MatInputModule
=======
    MatButtonModule
>>>>>>> 1637799a8018e11376483bd7798b3a0c3207df9f
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
