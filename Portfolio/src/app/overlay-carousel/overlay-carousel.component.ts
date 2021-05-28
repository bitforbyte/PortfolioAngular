import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overlay-carousel',
  templateUrl: './overlay-carousel.component.html',
  styleUrls: ['./overlay-carousel.component.css']
})
export class OverlayCarouselComponent implements OnInit {

  images = ['Dark_Road.webp', 'highway.webp', 'TrainTracks.webp'].map((n) => `../assets/img/large/${n}`);
  constructor() { }

  ngOnInit(): void {
  }

}
