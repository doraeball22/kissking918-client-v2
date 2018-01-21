import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promotion-list',
  templateUrl: './promotion-list.component.html',
  styleUrls: ['./promotion-list.component.css']
})
export class PromotionListComponent implements OnInit {

  title_th = "โปรโมชั่น 918Kiss";
  title_en = "promotions 918kiss";
  description = "โปรโมชั่นเกมคาสิโน และสล็อตออนไลน์บนมือถือ ของเกม 918Kiss ที่ดีสุดสุด แจ็คพอตมากมาย";

  promotions = [
    {
      name: "กิจกรรมแจกฟรี 2500",
      desc: "สำหรับสมัครสมาชิกใหม่รับทันที 2500 เพื่อเล่นเกม 918Kiss",
      image: "promotion_free_2500.jpg",
      link: "/promotions/free1000"
    },
    {
      name: "กิจกรรมแจกฟรี 50",
      desc: "เมื่อลูกค้าเติมเงินในเกม",
      image: "promotion_free_50.jpg",
      link: "/promotions/free50"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
