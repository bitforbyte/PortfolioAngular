import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayCarouselComponent } from './overlay-carousel.component';

describe('OverlayCarouselComponent', () => {
  let component: OverlayCarouselComponent;
  let fixture: ComponentFixture<OverlayCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverlayCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverlayCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
