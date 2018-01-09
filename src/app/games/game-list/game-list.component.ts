import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  title_th = "เกมสล็อตออนไลน์";
  description= "918kiss Slot เป็นอีกหมวดหมู่เกมที่นิยมเล่นกัน เพลิดกับภาพและเสียงที่เร้า ลุ้นได้ Free Spin และรางวัล Jackpot Slot Online ได้ตลอดเวลา";

  constructor() { }

  ngOnInit() {
  }

  GAMES = [
    {
      name: "BACARAT",
      type: "",
      description: "",
      image: "king168-BACARAT.jpg"
    },
    {
      name: "Dolphin",
      type: "",
      description: "",
      image: "king168-Dolphin.jpg"
    },
    {
      name: "Highway",
      type: "",
      description: "",
      image: "king168-Highway.jpg"
    },
    {
      name: "Multiplayer",
      type: "",
      description: "",
      image: "king168-Multiplayer.jpg"
    },
    {
      name: "Roulette",
      type: "",
      description: "",
      image: "king168-Roulette.jpg"
    },
    {
      name: "SCIBO2",
      type: "",
      description: "",
      image: "king168-SCIBO2.jpg"
    },
    {
      name: "slotavengers",
      type: "",
      description: "",
      image: "king168-slotavengers.jpg"
    },
    {
      name: "ThreeKingdom",
      type: "",
      description: "",
      image: "king168-ThreeKingdom.jpg"
    },
    {
      name: "Thunderbolt",
      type: "",
      description: "",
      image: "king168-Thunderbolt.jpg"
    }
  ]

}
