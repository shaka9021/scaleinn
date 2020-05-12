import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//---[Firebase]-----------------
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
 
import { environment } from '../environments/environment';
import { FormProductoComponent } from './componentes/producto/form-producto/form-producto.component';
import { FormplanComponent } from './componentes/plan/formplan/formplan.component';

@NgModule({
  declarations: [
    AppComponent,
    FormProductoComponent,
    FormplanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
