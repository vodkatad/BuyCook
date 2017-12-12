import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() selectedRecipe = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe("Chicken Tikka","spicy chicken!","https://upload.wikimedia.org/wikipedia/commons/4/44/Chicken_Tikka_Masala_KellySue.JPG"),
    new Recipe("Chicken Tikka2","less spicy","https://upload.wikimedia.org/wikipedia/commons/4/44/Chicken_Tikka_Masala_KellySue.JPG")
  ];

  constructor() { }

  ngOnInit() {
  }
  
  onSelectedRecipe(r: Recipe) {
      console.log("selected recipe " + r.name);
      this.selectedRecipe.emit(r);
  }

}
