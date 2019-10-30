import { Monster } from './../models/monster';
import { Injectable, OnInit } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MonstreService implements OnInit{

  currentMonster: Monster[];


  allMonster: Monster[] = [
    {
      id: 1,
      name: "Jason",
      image: "https://www.mezcotoyz.com/mas_assets/cache/image/1/3/2/3/4899.Jpg",
      description: "",
      attack: 150,
      life: 125,
      energy: 100,
      defense: 125
    },
    {
      id: 2,
      name: "Dracula",
      image: "https://www.ecranlarge.com/uploads/image/001/090/dracula-photo-1090996.jpg",
      description: "",
      attack: 100,
      life: 150,
      energy: 150,
      defense: 100
    }
  ];

  constructor() { }

  getMonsters(): Monster[] {
    return this.allMonster;
  }

  getMonsterById(id: string) {
    return this.allMonster.find(monster => monster.id === Number(id));
  }

  pushMonster(player: number) {
    this.currentMonster.push(this.getMonsterById[player - 1]);
  }

  ngOnInit() {
    
  }


}
