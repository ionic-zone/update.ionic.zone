import { RollbarModule } from 'angular-rollbar';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MdlModule } from '@angular-mdl/core';
import { MdlSelectModule } from '@angular-mdl/select';
import { MarkdownModule } from 'ngx-md';
import { Angulartics2RouterlessModule } from 'angulartics2/routerlessmodule';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';
import { Angulartics2Facebook } from 'angulartics2/facebook';

import { AppComponent } from './app.component';
import { ReleaseService } from './release.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdlModule,
    MdlSelectModule,
    RollbarModule.forRoot({
      accessToken: 'fdd0ae5eaee044dfb5dfced2df20f4dd'
    }),
    MarkdownModule.forRoot(),
    Angulartics2RouterlessModule.forRoot([Angulartics2GoogleAnalytics, Angulartics2Facebook])
  ],
  providers: [ReleaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
