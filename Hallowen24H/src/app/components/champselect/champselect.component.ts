import { Monster } from './../../models/monster';
import { MonstreService } from './../../service/monstre.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-champselect',
  templateUrl: './champselect.component.html',
  styleUrls: ['./champselect.component.scss']
})
export class ChampselectComponent implements OnInit {

  public monsters: Monster[];
  public currentUser = {img: "", name: ""};
  public isSelected = false;

  constructor(private _monstreService: MonstreService) { }

  ngOnInit() {
    this.monsters = this._monstreService.allMonster
    this.isSelected = false;
    console.log(this.isSelected);
     
  }

  showMonster(x ,y){
    const currentChamp = document.getElementById("currentChamp");
    const currentChampName = document.getElementById("currentChampName")
    this.currentUser.name = x;
    this.currentUser.img = y;
    currentChamp.setAttribute("src", this.currentUser.img);
    this.isSelected = true;
  }

}
