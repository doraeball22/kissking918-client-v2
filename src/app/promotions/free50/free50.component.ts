import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-free50',
  templateUrl: './free50.component.html',
  styleUrls: ['./free50.component.css']
})
export class Free50Component implements OnInit {

  line = {
    id: " @918KING",
    link: "https://line.me/R/ti/p/%40zkt8553r"
  }

  facebook = {
    id: "Scrkingth",
    link: "https://www.facebook.com/Scrkingth/"
  }

  extension = '.jpg';
  

  hashtag_facebook = ['#king168 #918kissking #scrkingth #slotยิงปลา'];
  FREE1000_FACEBOOK = [
    {
      step: 1,
      how_to: "เข้ามาที่เพจ "+this.facebook.id,
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
      how_to: `พิมพ์แฮชแทค ${this.hashtag_facebook[0]} เว้นวรรคด้วยนะคะ`,
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

  hashtag_line = ['@918king'];

  FREE1000_LINE = [
    {
      step: 0,
      how_to: "เข้าไปที่ห้องไลน์ที่ลูกค้าอยูู่ @scrking, @scrkingplus, @vipking",
      image: ""
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
      how_to: "พิมพ์แฮชแทค "+this.hashtag_line[0],
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
