import { AttackService } from './../../service/attack.service';
import { Monster } from './../../models/monster';
import { Component, OnInit } from '@angular/core';
import { MonstreService } from 'src/app/service/monstre.service';

@Component({
  selector: 'app-battleground',
  templateUrl: './battleground.component.html',
  styleUrls: ['./battleground.component.scss']
})
export class BattlegroundComponent implements OnInit {

  currentMonster: Monster[] = [];

  constructor(public monster: MonstreService, public attack: AttackService) { }

  ngOnInit () {
    this.monster.currentMonster = [
      this.monster.getMonsterById(1),
      this.monster.getMonsterById(2)
    ]
    this.attack.pushMonsterAttack(1);
    this.attack.pushMonsterAttack(2);
  }

}
