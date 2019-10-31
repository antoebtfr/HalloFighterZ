import { Component, OnInit, Input } from '@angular/core';
import { MonstreService } from 'src/app/service/monstre.service';

@Component({
  selector: 'app-battleground',
  templateUrl: './battleground.component.html',
  styleUrls: ['./battleground.component.scss']
})
export class BattlegroundComponent implements OnInit {


  public persoB = {}

  @Input() persoA;
  @Input() test;
  public playerOne;


  constructor(private _monstreService: MonstreService) { 
  }
  
  ngOnInit() {    
   this.playerOne = this._monstreService.playerOneImg;
  }

  test2(){
    console.log(this.playerOne + "JE SUIS P1");
  }

}
