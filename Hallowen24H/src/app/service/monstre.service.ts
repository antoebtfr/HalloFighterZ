import { Injectable } from '@angular/core';
import { Monster } from '../models/monster';


@Injectable({
  providedIn: 'root'
})
export class MonstreService {

  currentMonster: Monster[];


  allMonster: Monster[] = [
    {
      id: 1,
      name: ".JSON",
      image: "../../../assets/json.gif",
      description: "",
      attack: 150,
      life: 125,
      energy: 100,
      defense: 125
    },
    {
      id: 2,
      name: "Dracula",
      image: "../../../assets/alucard.gif",
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


}
