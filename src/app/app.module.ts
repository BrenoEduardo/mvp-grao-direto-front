import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxMaskModule } from 'ngx-mask';
import {AngularFireModule} from '@angular/fire/compat'
import {AngularFireStorageModule} from '@angular/fire/compat/storage'
import { enviroment } from 'src/enviroments/enviroment';
import { ColaboratorComponent } from './colaborator/colaborator.component';
import { ClientComponent } from './client/client.component';

@NgModule({
  declarations: [
    AppComponent,
    ColaboratorComponent,
    ClientComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxMaskModule.forRoot(),
    AngularFireModule.initializeApp(enviroment.firebaseConfig),
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
