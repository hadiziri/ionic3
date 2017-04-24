import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Hero6, Page6Service }  from './page6.service';


@Component({
  selector: 'page-page6',
  templateUrl: 'page6.html'
})


export class Page6 {
  heroes: Observable<Hero6[]>;
  private selectedId : number;

  constructor(private service: Page6Service,
    private route: ActivatedRoute,
    private router: Router) {

  }

  ngOnInit() {
    this.heroes = this.route.params
      .switchMap((params: Params) => {
        this.selectedId = +params['id'];
        return this.service.getHeroes();
      });
  }

  isSelected(hero: Hero6) { return hero.id === this.selectedId; }

  onSelect(hero: Hero6) {
    this.router.navigate(['/PageSix', hero.id], { relativeTo: this.route });
  }

  ionViewDidLoad() {
    console.log('Hello from Page6 Page');
  }

}
