import { Monster } from 'src/app/models/monster';
import { Component, OnInit, Input } from '@angular/core';
import { MonstreService } from 'src/app/service/monstre.service';
import { AttackService } from 'src/app/service/attack.service';

@Component({
  selector: 'app-monstres',
  templateUrl: './monstres.component.html',
  styleUrls: ['./monstres.component.scss']
})
export class MonstresComponent implements OnInit {

  @Input() playerId: number;
  @Input() currentMonster: Monster[];
  img: string = "";

  constructor(public monster: MonstreService, public attack: AttackService) { }

  ngOnInit() {
    this.img = this.monster.currentMonster[this.playerId - 1].image;

  }

}
