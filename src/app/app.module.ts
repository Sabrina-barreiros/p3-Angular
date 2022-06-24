import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterModule } from '@angular/router';
import { SabrinaHomeComponent } from './sabrina-home/sabrina-home.component';
import { SabrinaListComponent } from './sabrina-list/sabrina-list.component';
import { SabrinaListService } from './sabrina-list.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot([
    {path :"", component: SabrinaHomeComponent},
    {path :"Lista", component: SabrinaListComponent}
  ]
  )],
  declarations: [ AppComponent, HelloComponent, SabrinaHomeComponent, SabrinaListComponent ],
  bootstrap:    [ AppComponent ]
 
})
export class AppModule { }
