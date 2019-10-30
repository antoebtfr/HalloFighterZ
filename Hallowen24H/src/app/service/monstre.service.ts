import { Monster } from './../models/monster';
import { Injectable, OnInit } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MonstreService implements OnInit{

  currentMonster: Monster[];

  allMonster: Monster[] = [];


  // allMonster: Monster[] = [
  //   {
  //     id: 1,
  //     name: "Jason",
  //     image: "https://www.mezcotoyz.com/mas_assets/cache/image/1/3/2/3/4899.Jpg",
  //     description: "",
  //     attack: 150,
  //     life: 125,
  //     energy: 100,
  //     defense: 125
  //   },
  //   {
  //     id: 2,
  //     name: "Dracula",
  //     image: "https://www.ecranlarge.com/uploads/image/001/090/dracula-photo-1090996.jpg",
  //     description: "",
  //     attack: 100,
  //     life: 150,
  //     energy: 150,
  //     defense: 100
  //   }
  // ];



  constructor(private http: HttpClient) { }

  getMonsters() {
    return this.http.get('http://192.168.1.99:3000/monster').pipe(
      tap((data: Monster[]) => this.allMonster = data));
  }

  getMonsterById(id: number) {

    return this.http.get<Monster>('http://192.168.1.99:3000/monster' + id)
    .pipe(
      map((monster: Monster) => new Monster(monster)),
      tap((monster: Monster) => {this.currentMonster = monster; })
    );
  }

  ngOnInit () {
    this.getMonsterById(1).subscribe();
    this.getMonsterById(2).subscribe();


  }

}
