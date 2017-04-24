import { Injectable } from '@angular/core';

export class Hero5 {
  constructor(public id: number, public name: string) { }
}

let HEROES5 = [
  new Hero5(51, 'Mr. five'),
  new Hero5(52, 'Narco'),
  new Hero5(53, 'Bombasto'),
  new Hero5(54, 'Celeritas'),
  new Hero5(55, 'Magneta'),
  new Hero5(56, 'RubberMan')
];

let heroesPromise = Promise.resolve(HEROES5);

@Injectable()
export class Page5Service {
  getHeroes() { return heroesPromise; }

  getHero(id: number | string) {
    return heroesPromise
      .then(heroes => heroes.find(hero => hero.id === +id));
  }
}
