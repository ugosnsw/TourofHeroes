import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes = HEROES;
  selectedHero: string;

  constructor() {
  }

  ngOnInit() {
  }

  clickad() {
    console.log("I have been clicked");
  }

  // Function to display details when hero is selected
  onSelect(hero){
    this.selectedHero = hero;
    console.log(this.selectedHero);
  }

}
