import { Component, Input, OnInit } from '@angular/core';




interface carouselImage {
  imageSrc: string;
  imageAlt: string;
  imageDesc: string;
}

@Component({
  selector: 'app-crousel-empty',
  templateUrl: './crousel-empty.component.html',
  styleUrls: ['./crousel-empty.component.css']
})
export class CrouselEmptyComponent implements OnInit {

  constructor() { }


  @Input() images: carouselImage[] = [];
  @Input() indicators = true;
  @Input() controls = true;
  @Input() autoSlide = false;
  @Input() slideInterval = 4000;

  selectedIndex = 0;

  ngOnInit(): void {
    if (this.autoSlide) {
      this.autoSlideImages();
    }
  }

  autoSlideImages(): void {
    setInterval(() => {
      this.onNextClick();
    }, this.slideInterval);
  }

  // set index of image on dot click
  selectImage(index: number): void {
    this.selectedIndex = index;
  }

  onPrevClick(): void {
    if (this.selectedIndex === 0) {
      this.selectedIndex = this.images.length - 1;
    } else {
      this.selectedIndex--;
    }
  }

  onNextClick(): void {
    if (this.selectedIndex === this.images.length - 1) {
      this.selectedIndex = 0;
    } else {
      this.selectedIndex++;
    }
  }

}
