import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
//import { HEROES } from '../mock-heroes';
import {HeroService} from '../services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  //heroes = HEROES;
  heroes: Hero[];
  selectedHero: string;

  constructor(private heroService: HeroService) {
  }

  ngOnInit() {
    this.getHeroes();
  }

  clickad() {
    console.log("I have been clicked");
  }

  // Function to display details when hero is selected
  onSelect(hero){
    this.selectedHero = hero;
    console.log(this.selectedHero);
  }

  // Function to retrieve heroes from the service
  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes =>this.heroes = heroes); 
  }
}
