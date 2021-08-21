import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormvalidatorComponent } from './formvalidator/formvalidator.component';
import { TemplateformComponent } from './templateform/templateform.component';
import { RouterModule } from '@angular/router';
import { Approutes } from './Routes';


@NgModule({
  declarations: [
    AppComponent,
    FormvalidatorComponent,
    TemplateformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(Approutes)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
