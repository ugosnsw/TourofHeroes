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

  constructor() {
  }

  ngOnInit() {
  }

  clickad() {
    console.log("I have been clicked");
  }

  // yoo() {
  //   alert("Yooooooo!");
  //   console.log("hello");
  // }

}
