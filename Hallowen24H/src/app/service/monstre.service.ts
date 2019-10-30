import { Injectable } from '@angular/core';
import { Monster } from '../models/monster';
import { map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class MonstreService {

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

}
