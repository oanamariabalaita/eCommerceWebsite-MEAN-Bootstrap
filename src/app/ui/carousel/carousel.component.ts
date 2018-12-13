import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  providers: [ NgbCarouselConfig]
})
export class CarouselComponent implements OnInit {

  constructor(config: NgbCarouselConfig)
   { config.interval=2000;
     config.wrap = false;
     config.keyboard=false;
     config.pauseOnHover=false; }

  ngOnInit() {
  }

}
