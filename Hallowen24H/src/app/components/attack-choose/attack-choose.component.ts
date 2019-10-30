import { Attack } from './../../models/attack';
import { MonstreService } from './../../service/monstre.service';
import { AttackService } from './../../service/attack.service';
import { Component, OnInit } from '@angular/core';
import { Monster } from 'src/app/models/monster';

@Component({
  selector: 'app-attack-choose',
  templateUrl: './attack-choose.component.html',
  styleUrls: ['./attack-choose.component.scss']
})

export class AttackChooseComponent implements OnInit {

  monsterAttacks : Attack[] = [];
  allMonster: Monster[] = [];
  currentMonster: Monster[] = [];

  constructor(private attackService: AttackService, private monstreService: MonstreService) {

  }

  ngOnInit() {
    // this.allMonster = this.monstreService.allMonster;
    // this.currentMonster = this.monstreService.currentMonster;
    // this.attackService.getAttackByIdMonster(1).subscribe((data) => {return this.monsterAttacks = data});
  }
  showMonsterAttack(){
    console.log( this.monsterAttacks);
    console.log( 'allMonster' + this.allMonster);
    console.log('currentMonster :' + this.currentMonster);
  }
}
