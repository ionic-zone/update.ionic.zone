import { RollbarModule } from 'angular-rollbar';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MdlModule } from '@angular-mdl/core';
import { MdlSelectModule } from '@angular-mdl/select';

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
    })
  ],
  providers: [ReleaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
