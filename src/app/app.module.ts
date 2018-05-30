import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './not-found.component';
import { EnterDataComponent } from './enter-data/enter-data.component';
import { ListDataComponent } from './list-data/list-data.component';

import { HandleDataService } from './handle-data.service';


const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'enter_data', component: EnterDataComponent },
  { path: 'list_data', component: ListDataComponent },
  { path: '**', component: PageNotFoundComponent }
  ];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    EnterDataComponent,
    ListDataComponent
  ],
  imports: [
    RouterModule,
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule
  ],
  providers: [HandleDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
