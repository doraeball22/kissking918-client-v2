import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';

import { OwlCarousel } from 'ngx-owl-carousel';

@Component({
  selector: 'app-welcome-section',
  templateUrl: './welcome-section.component.html',
  styleUrls: ['./welcome-section.component.css']
})
export class WelcomeSectionComponent implements OnInit {

  // images = ['promotion_free_2500.jpg'];

  promotions = [
    {
      name: "กิจกรรมแจกฟรี 2500",
      image: "promotion_free_2500.jpg",
      link: "promotions/free1000"
    },
    {
      name: "กิจกรรมแจกฟรี 50",
      image: "promotion_free_50.jpg",
      link: "promotions/free50"
    }
  ]

  ticks = 7777777;
  

  constructor() { }

  ngOnInit() {
    setInterval(() => { this.timer(); }, 100);
  }

  private timer() {
    this.ticks = this.ticks + 1.22;
  }

}
