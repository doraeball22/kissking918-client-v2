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

  title_th = "สมัครสมาชิกเกม 918Kiss";
  title_en = "Download 918kiss";
  description = "สมัคร 918kiss เกมสล็อตออนไลน์บนมือถือ บนระบบ IOS และ Android และโปรโมชันมากมายเมื่อสมัครสมาชิกใหม่";

  line = {
    id: " @918KING",
    link: "https://line.me/R/ti/p/%40zkt8553r"
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
