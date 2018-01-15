import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-free1000',
  templateUrl: './free1000.component.html',
  styleUrls: ['./free1000.component.css']
})
export class Free1000Component implements OnInit {

  extension = '.jpg';

  FREE1000 = [
    {
      step: 2,
      
      image: "step_like"+this.extension
    },
    {
      image: "step_follow"+this.extension
    },
    {
      image: "step_share"+this.extension
    },
    {
      image: "step_hashtag"+this.extension
    },
    {
      image: "step_capture"+this.extension
    },
    {
      image: "step_finish"+this.extension
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
