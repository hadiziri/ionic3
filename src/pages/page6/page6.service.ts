import { Injectable } from '@angular/core';

export class Hero6 {
  constructor(public id: number, public name: string) { }
}

let HEROES6 = [
  new Hero6(61, 'Mr. six'),
  new Hero6(62, 'Narco'),
  new Hero6(63, 'Bombasto'),
  new Hero6(64, 'Celeritas'),
  new Hero6(65, 'Magneta'),
  new Hero6(66, 'RubberMan')
];

let heroesPromise = Promise.resolve(HEROES6);

@Injectable()
export class Page6Service {
  getHeroes() { return heroesPromise; }

  getHero(id: number | string) {
    return heroesPromise
      .then(heroes => heroes.find(hero => hero.id === +id));
  }
}
