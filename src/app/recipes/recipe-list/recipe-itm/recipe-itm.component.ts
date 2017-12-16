import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../../services/recipe.service';
@Component({
  selector: 'app-recipe-itm',
  templateUrl: './recipe-itm.component.html',
  styleUrls: ['./recipe-itm.component.css']
})
export class RecipeItmComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  onSelected() {
    this.recipeService.selectedRecipe.emit(this.recipe);
  }
} 
