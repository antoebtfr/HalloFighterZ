import { Attack } from './../../models/attack';
import { AttackService } from './../../service/attack.service';
import { Component, OnInit, Input } from '@angular/core';
import { MonstreService } from 'src/app/service/monstre.service';

@Component({
  selector: 'app-battleground',
  templateUrl: './battleground.component.html',
  styleUrls: ['./battleground.component.scss']
})
export class BattlegroundComponent implements OnInit {

  public life1 = 100;
  public life2 = 100;

  public attacks: Attack[] = [];
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
  public linkLife() {
    document.getElementById("currentLife1").style.width = `${this.life1}%`;
    document.getElementById("currentLife2").style.width = `${this.life2}%`;
  }
  public bootAttack(idMonster: number) {
    for (let i = 0; i < this._attackService.allAttack.length; i++) {
      if (this._attackService.allAttack[i].idMonster === idMonster) {
        this.attacks.push(this._attackService.allAttack[i]);
      }
    }
    console.log('je suis  attacks' + this.attacks);
    return this.attacks;
  }

  public atkP1(x) {
    this.attacks[x];
    if (x === 0) {
      this.life2 -= this.attacks[x].damage
    } else if (x === 1) {
      this.life2 -= this.attacks[x].damage
    } else if (x === 2) {
      this.life2 -= this.attacks[x].damage
    } else if (x === 3) {
      this.life2 -= this.attacks[x].damage
    }
    const spriteA = document.getElementById('containerPersoA');
    const spriteB = document.getElementById('containerPersoB');
    let node = document.createElement('img');
    node.src = this.attacks[x].sprites;
    node.id = "AttackAnimation";
    console.log(node.src)
    if (this.attacks[x].toTheOpponent === false) {
      node.style = "position: absolute; left : 30px; top: 150px; z-index: 1000;";
      spriteB.appendChild(node);
      window.setTimeout(() => spriteB.removeChild(node), 1000);
  
    }
    if (this.attacks[x].toTheOpponent === true) {
      node.style = "position: absolute; right : 30px; top: 150px; z-index: 1000;"

        spriteA.appendChild(node);
        window.setTimeout(() => spriteA.removeChild(node), 1000);
    }
    // spriteA.appendChild(node);
    // window.setTimeout(() => spriteA.removeChild(node), 1000);
    this.linkLife();
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


}

