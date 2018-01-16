import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-free1000',
  templateUrl: './free1000.component.html',
  styleUrls: ['./free1000.component.css']
})
export class Free1000Component implements OnInit {

  line = {
    id: " @king918",
    link: "https://line.me/R/ti/p/%40king918"
  }

  facebook = {
    id: "918kissking",
    link: "https://www.facebook.com/918kissking/"
  }

  extension = '.jpg';
  

  FREE1000_FACEBOOK = [
    {
      step: 1,
      how_to: "เข้ามาที่เพจ 918Kissking",
      image: ""
    },
    {
      step: 2,
      how_to: "ถูกใจ (LIKE)",
      image: "step_like"+this.extension
    },
    {
      step: 3,
      how_to: "กดเห็นโพสต์ก่อน (SEE FIRST)",
      image: "step_follow"+this.extension
    },
    {
      step: 4,
      how_to: "แชร์โพสต์กิจกรรม (SHARE)",
      image: "step_share"+this.extension
    },
    {
      step: 5,
      how_to: "พิมพ์แฮชแทค #918kiss #918kissking เว้นวรรคด้วยนะคะ",
      image: "step_hashtag"+this.extension
    },
    {
      step: 6,
      how_to: "โพสต์และแคปภาพหน้าจอ (POST&CAPTURE)",
      image: "step_capture"+this.extension
    },
    // {
    //   step: 7,
    //   how_to: "ส่งภาพที่แคปมาที่ห้องไลน์ที่ลูกค้าอยู่ได้เลยคะ (ห้องใดห้องหนึ่ง)",
    //   image: ""
    // }
  ]


  FREE1000_LINE = [
    {
      step: 0,
      how_to: "แอดไลน์ @918kissking",
      image: "0_add"+this.extension
    },
    {
      step: 1,
      how_to: "เข้าไปที่หน้าหลัก",
      image: "1_like"+this.extension
    },
    {
      step: 2,
      how_to: "มองหาโพสต์กิจกรรม",
      image: "2_seepost"+this.extension
    },
    {
      step: 3,
      how_to: "แชร์โพสต์กิจกรรม (SHARE)",
      image: "3_share"+this.extension
    },
    {
      step: 4,
      how_to: "พิมพ์แฮชแทค @918kissking",
      image: "4_hashtag"+this.extension
    },
    {
      step: 5,
      how_to: "โพสต์และแคปภาพหน้าจอ (POST&CAPTURE)",
      image: "5_capture"+this.extension
    },
    // {
    //   step: 7,
    //   how_to: "ส่งภาพที่แคปมาที่ห้องไลน์ที่ลูกค้าอยู่ได้เลยคะ (ห้องใดห้องหนึ่ง)",
    //   image: ""
    // }
  ]

  FREE1000_FINISH = [
    {
      image: "line_@vipking"+this.extension
    },
    {
      image: "line_@scrkingplus"+this.extension
    },
    {
      image: "line_@scrking"+this.extension
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
