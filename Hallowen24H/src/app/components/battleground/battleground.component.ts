import { AttackService } from './../../service/attack.service';
import { Component, OnInit, Input } from '@angular/core';
import { MonstreService } from 'src/app/service/monstre.service';

@Component({
  selector: 'app-battleground',
  templateUrl: './battleground.component.html',
  styleUrls: ['./battleground.component.scss']
})
export class BattlegroundComponent implements OnInit {

  public life1 = 50;
  public life2 = 70;

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
      return 42;
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

  public test(){
    this.life1 -= 30;
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
    this.linkLife();
  }

  linkLife(){
    const L1 = document.getElementById("currentLife1").style.width = `50%`;
    const L2 = document.getElementById("currentLife2").style.width = `{life2}%`;
  }

}

