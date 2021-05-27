import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InformationOverlayComponent } from './information-overlay/information-overlay.component';

@NgModule({
  declarations: [
    AppComponent,
    InformationOverlayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
