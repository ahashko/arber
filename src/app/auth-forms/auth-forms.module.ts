import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import {MatInputModule, MatButtonModule } from '@angular/material';



import { ActivateComponent } from './activate/activate.component';
import { RememberComponent } from './remember/remember.component';
import { PasswordResetComponent } from './pasword-reset/password-reset.component';
import { FirstregComponent } from './firstreg/firstreg.component';

@NgModule({
  imports: [
      BrowserModule, FormsModule, HttpClientModule, RouterModule, MatInputModule, MatButtonModule
  ],
  declarations: [
        ActivateComponent, RememberComponent, PasswordResetComponent, FirstregComponent
  ],
    exports: [
        ActivateComponent, RememberComponent
    ]
})
export class AuthFormsModule { }
