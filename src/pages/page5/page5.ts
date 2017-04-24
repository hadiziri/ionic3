import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Hero5, Page5Service }  from './page5.service';

@Component({
  selector: 'page-page5',
  templateUrl: 'page5.html'
})
export class Page5 {
  heroes: Observable<Hero5[]>;
  private selectedId : number;

  constructor(private service: Page5Service,
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

  isSelected(hero: Hero5) { return hero.id === this.selectedId; }

  onSelect(hero: Hero5) {
    this.router.navigate(['/PageFive', hero.id]);
  }

  ionViewDidLoad() {
    console.log('Hello from Page5 Page');
  }

}
