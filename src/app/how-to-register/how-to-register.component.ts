import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-how-to-register',
  templateUrl: './how-to-register.component.html',
  styleUrls: ['./how-to-register.component.css']
})
export class HowToRegisterComponent implements OnInit {

  isCollapsed = true;
  model = {
    left: true,
    middle: false,
    right: false
  };

  title_th = "ขั้นตอนการสมัครสมาชิก";
  title_en = "Download 918kiss";
  description = "ดาวน์โหลด 918kiss เกมสล็อตออนไลน์บนมือถือ บนระบบ IOS และ Android และดูวิธีการติดตั้งผ่านทางลิงค์ด้านล่าง";

  line = {
    id: " @king918",
    link: "https://line.me/R/ti/p/%40king918"
  }

  register_in_line = [
    {
      step: 1,
      how_to: "ลูกค้า Add Line ID : " + this.line.id
    },
    {
      step: 2,
      how_to: "แจ้งทีมงานขอสมัครสมาชิกและขอรับบัญชีโอนเงิน"
    },
    {
      step: 3,
      how_to: "แสดงหลักฐานการโอนเงินแก่ทีมงานพร้อมกรอกข้อมูล"
    },
    {
      step: 4,
      how_to: "ทีมงานจะทำการตรวจสอบหลักฐานการโอนเงินและข้อมูลลูกค้า เสร็จ ทีมงานจะส่ง Username และ Password ให้กับลูกค้า"
    },
    {
      step: 5,
      how_to: "ลูกค้าสามารถนำ Username และ Password เข้าเล่นเกมส์ได้ ทันที"
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
