import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InformationOverlayComponent } from './information-overlay/information-overlay.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OverlayCarouselComponent } from './overlay-carousel/overlay-carousel.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SectionsComponent } from './sections/sections.component';
import { InfiniteTypeDeleteModule } from "ngx-sbz-type-delete";
import { TypingAnimationComponent } from './typing-animation/typing-animation.component';
import { SectionAboutComponent } from './section-about/section-about.component';
import { SectionSkillsComponent } from './section-skills/section-skills.component';

@NgModule({
  declarations: [
    AppComponent,
    InformationOverlayComponent,
    OverlayCarouselComponent,
    NavBarComponent,
    SectionsComponent,
    TypingAnimationComponent,
    SectionAboutComponent,
    SectionSkillsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    InfiniteTypeDeleteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
