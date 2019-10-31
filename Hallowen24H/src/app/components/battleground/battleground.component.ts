import { AttackService } from './../../service/attack.service';
import { Component, OnInit, Input } from '@angular/core';
import { MonstreService } from 'src/app/service/monstre.service';

@Component({
  selector: 'app-battleground',
  templateUrl: './battleground.component.html',
  styleUrls: ['./battleground.component.scss']
})
export class BattlegroundComponent implements OnInit {

  public attacks = [];
  public persoB = "";
  public playerOne;
  public getRandomInt() {
    return Math.floor(Math.random() * Math.floor(this._monstreService.allMonster.length));
  }
  public checker() {
    if (this.playerOne === "../../../assets/json.gif") {
      return 1;
    } else if (this.playerOne === "../../../assets/alucard.gif") {
      return 2;
    } else {
      return 6;
    }
  }
  bootAttack(idMonster: number) {
    for (let i = 0; i < this._attackService.allAttack.length; i++) {
      if (this._attackService.allAttack[i].idMonster === idMonster) {
        this.attacks.push(this._attackService.allAttack[i]);
      }
    }
    console.log(this.attacks);
    return this.attacks;
  }
  constructor(private _monstreService: MonstreService, private _attackService: AttackService) {
  }

  ngOnInit() {
    this.getRandomInt();
    this.playerOne = this._monstreService.playerOneImg;
    this.persoB = this._monstreService.allMonster[this.getRandomInt()].image;
    this.checker();
    console.log(this.checker());
    this.bootAttack(this.checker());
  }

}

