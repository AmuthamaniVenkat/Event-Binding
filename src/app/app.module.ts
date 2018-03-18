import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AppConfigModule } from './app-config.module';
import {AuthService } from './core/auth.service'
import {  AuthGuard } from './auth/auth.guard';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component'
import { AboutComponent } from './about/about.component';
import { FormComponent } from './form/form.component';
import { counterReducer } from './counter';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'about/:id',             // Add /:id here
    component: AboutComponent
  },
  {
    path: 'form',
    component: FormComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    StoreModule.provideStore({ counter: counterReducer }),
    ReactiveFormsModule,
    AppConfigModule,
    
  ],
  providers: [AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
