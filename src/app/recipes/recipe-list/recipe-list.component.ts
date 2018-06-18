import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('dhokla', 'It is a special dish of Gujarat', 'https://www.ndtv.com/cooks/images/dhokla%20%281%29%20%281%29.jpg'),
    new Recipe('dhokla', 'It is a special dish of Gujarat', 'https://www.ndtv.com/cooks/images/dhokla%20%281%29%20%281%29.jpg'),

  ];
  constructor() { }

  ngOnInit() {
  }

}
