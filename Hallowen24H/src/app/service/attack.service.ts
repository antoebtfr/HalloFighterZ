import { Attack } from './../models/attack';
import { Monster } from './../models/monster';
import { Injectable, OnInit } from '@angular/core';
import { MonstreService } from './monstre.service';
import { HttpClient } from '@angular/common/http';
import { map, flatMap, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AttackService {

  static URL = '192.169.1.99:3000/attack/';

  player1: number = 0;
  player2: number = 1;

  allAttack: Attack[] = [
    {
        id: 1,
        idMonster: 1,
        title: "Coup de Hache",
        damage: 50,
        ratio: 1,
        caracteristic: "life",
        cost: 80,
        toTheOpponent: true,
        sprites: ""
    },
    {
        id: 2,
        idMonster: 1,
        title: "Etranglement",
        damage: 20,
        ratio: 1,
        caracteristic: "life",
        cost: 30,
        toTheOpponent: true,
        sprites: ""
    },
    {
        id: 3,
        idMonster: 1,
        title: "Berserk",
        damage: 10,
        ratio: 1,
        caracteristic: "attack",
        cost: 20,
        toTheOpponent: false,
        sprites: ""
    },
    {
        id: 4,
        idMonster: 1,
        title: "Saignement",
        damage: 5,
        ratio: 1,
        caracteristic: "life",
        cost: 25,
        toTheOpponent: true,
        sprites: ""
    },
    {
        id: 5,
        idMonster: 2,
        title: "Croc",
        damage: 30,
        ratio: 1,
        caracteristic: "life",
        cost: 60,
        toTheOpponent: true,
        sprites: ""
    },
    {
        id: 6,
        idMonster: 2,
        title: "Lancer de chauve-souris",
        damage: 15,
        ratio: 1,
        caracteristic: "life",
        cost: 40,
        toTheOpponent: true,
        sprites: ""
    },
    {
        id: 7,
        idMonster: 2,
        title: "Lecture approfondi",
        damage: 20,
        ratio: 1,
        caracteristic: "energy",
        cost: 25,
        toTheOpponent: false,
        sprites: ""
    },
    {
        id: 8,
        idMonster: 2,
        title: "Transfusion sanguine",
        damage: 5,
        ratio: 1,
        caracteristic: "life",
        cost: 30,
        toTheOpponent: false,
        sprites: ""
    },
];

  monsterCurrentAttack: Attack[][] = [];

  pushMonsterAttack (id: number) {
    this.monsterCurrentAttack.push(this.allAttack.filter((attack) => attack.idMonster[id - 1]));
  }


  constructor(public service: MonstreService, private http: HttpClient) { }

  getAttackByIdMonster(player: number) {
    const id: number = this.service.currentMonster[player - 1].id;
    return this.http.get(AttackService.URL + id)
    .pipe(
      // map(this.turnDataIntoAttack,
      tap((data: Attack[]) => this.monsterCurrentAttack.push(data))
      );
  }

  // turnDataIntoAttack(data: Attack[]): Attack {
  //   return {
  //     id : data.id,
  //     idMonster : data.idMonster,
  //     title : data.title,
  //     damage : data.damage,
  //     ratio : data.ratio,
  //     caracteristic : data.caracteristic,
  //     cost : data.cost,
  //     toTheOpponent : data.toTheOpponent,
  //     sprites : data.sprites,

  //   }
  // }

  // pushAttackIntoService(player: number) {
  //   const idMonsterPlayer: number = this.service.currentMonster[player - 1].id;
  //   this.monsterCurrentAttack.pipe(flatMap(push(this.getAttackByIdMonster(idMonsterPlayer)));
  // }

  defineOtherPlayer(playerId: number): number {
    if (playerId === 1) {return 2; } else {return 1; }
  }

  launchAttack(id: number, player: number) {
    const attack: Attack = this.monsterCurrentAttack[player - 1][id];
    let otherPlayerLife: number = this.service.currentMonster[this.defineOtherPlayer(player) - 1].life;
    if (attack.toTheOpponent === true) {
      otherPlayerLife -= (attack.damage * this.service.currentMonster[player - 1].attack) / 100;
      return this.service.currentMonster[this.defineOtherPlayer(player) - 1].life = otherPlayerLife;
    } else {
      let currentPlayer: Monster = this.service.currentMonster[player - 1];
      if (attack.caracteristic === 'life') {
        currentPlayer.life += attack.damage;
      }
      if (attack.caracteristic === 'energy') {
        currentPlayer.energy += attack.damage;
      }
      if (attack.caracteristic === 'defense') {
        currentPlayer.defense += attack.damage;
      }
      if (attack.caracteristic === 'attack') {
        currentPlayer.attack += attack.damage;
      }
    }
  }
}
