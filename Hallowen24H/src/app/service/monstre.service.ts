import { Monster } from './../models/monster';
import { Injectable, OnInit } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MonstreService implements OnInit{

  currentMonster: Monster;


  allMonster: Monster[] = [];

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
