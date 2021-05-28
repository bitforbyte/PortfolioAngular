import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-overlay-carousel',
  templateUrl: './overlay-carousel.component.html',
  styleUrls: ['./overlay-carousel.component.css']
})
export class OverlayCarouselComponent implements OnInit {

  images = ['highway.webp', 'TrainTracks.webp', 'Dark_Road.webp', ].map((n) => `../assets/img/large/${n}`);
  constructor(config: NgbCarouselConfig) {
    config.interval = 10000;
    config.showNavigationArrows = false;
   }

  ngOnInit(): void {
  }

}
