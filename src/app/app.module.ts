import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ValidationerrorsComponent } from './validationerrors/validationerrors.component';
import { ValidationPipe } from './validation.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ValidationerrorsComponent,
    ValidationPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
