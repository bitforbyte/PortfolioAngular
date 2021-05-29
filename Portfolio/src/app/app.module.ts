import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InformationOverlayComponent } from './information-overlay/information-overlay.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OverlayCarouselComponent } from './overlay-carousel/overlay-carousel.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    InformationOverlayComponent,
    OverlayCarouselComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
