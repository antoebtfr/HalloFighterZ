import { Monster } from './../models/monster';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MonstreService {

  currentMonster: Monster[];

  allMonter: Monster[] = [
    {
        id: 1,
        name: 'Jason',
        image: '',
        description: '',
        attack: 150,
        life: 125,
        energy: 100,
        defense: 125
    },
    {
        id: 2,
        name: 'Dracula',
        image: '',
        description: '',
        attack: 100,
        life: 150,
        energy: 150,
        defense: 100
    }
];
  // allMonster: Monster[] = [];

  constructor(private http: HttpClient) { }

  // getMonsters() {
  //   return this.http.get('http://192.168.1.99:3000/monster').pipe(
  //     tap((data: Monster[]) => this.allMonster = data));
  // }

  // getMonsterById(id: number) {

  //   return this.http.get<Monster>('http://192.168.1.99:3000/monster' + id)
  //   .pipe(
  //     map((monster: Monster) => new Monster(monster)),
  //     tap((monster: Monster) => {this.currentMonster.push(monster) ; })
  //   );
  // }

}
