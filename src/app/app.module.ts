import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginComponent } from './login/login.component';
import { from } from 'rxjs';
import { SignupComponent } from './signup/signup.component';

import { UnsplashbgService } from './unsplashbg.service';
import { MasterService } from './services/master.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatSelectModule,
    MatNativeDateModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    HttpClientModule,
    MatDatepickerModule,
    MatButtonToggleModule,
    MatInputModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [UnsplashbgService, MasterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
