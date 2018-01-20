import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  line = {
    id: " @918KING",
    link: "https://line.me/R/ti/p/%40zkt8553r"
  }

  title_th = "ผู้ให้บริการเกมคาสิโนบนมือถือ 918Kiss อย่างเป็นทางการ";
  description= "918kiss Slot เป็นอีกหมวดหมู่เกมที่นิยมเล่นกัน เพลิดกับภาพและเสียงที่เร้า ลุ้นได้ Free Spin และรางวัล Jackpot Slot Online ได้ตลอดเวลา";

  constructor() { }

  ngOnInit() {
  }

}
