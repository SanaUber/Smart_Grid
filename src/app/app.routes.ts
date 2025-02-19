import { RouterModule, Routes } from '@angular/router';
import { GridComponent } from './grid/grid.component';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  export const routes: Routes = [
    { path: '',  component:WelcomeComponent }, // Default route
{path:'grid',component:GridComponent},
 


];
@NgModule({
    declarations: [ ],
    imports: [
      CommonModule,  
        BrowserModule,
   RouterModule ,
        ] ,
      providers: [
         ],
    bootstrap: [AppComponent ]
    
  })

  export class AppModule { }