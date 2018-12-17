import { RollbarModule } from 'angular-rollbar';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MdlModule } from '@angular-mdl/core';
import { MdlSelectModule } from '@angular-mdl/select';
import { NgxMdModule } from 'ngx-md';
import { Angulartics2Module } from 'angulartics2';
import { Angulartics2RouterlessModule } from 'angulartics2/routerlessmodule';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ReleaseService } from './release.service';

const ROUTES: Routes = [
  { path: '', component: AppComponent },
  { path: 'changelog', component: AppComponent },
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    FormsModule,
    HttpModule,
    MdlModule,
    MdlSelectModule,
    RollbarModule.forRoot({
      accessToken: 'fdd0ae5eaee044dfb5dfced2df20f4dd'
    }),
    NgxMdModule.forRoot(),
    Angulartics2RouterlessModule.forRoot()
  ],
  providers: [ReleaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
