import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from './../environments/environment';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { LeftNavComponent } from './components/left-nav/left-nav.component';
import { UfcComponent } from './components/ufc/ufc.component';
import { ModalComponent } from './components/modal/modal.component';


import { UfcService } from './services/ufc.service';
import { ModalService } from './services/modal.service';


import { AppRoutingModule } from './/app-routing.module';



import { FighterdComponent } from './components/ufc/fighterd/fighterd.component';




@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    LeftNavComponent,
    UfcComponent,
    FighterdComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UfcService, ModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
