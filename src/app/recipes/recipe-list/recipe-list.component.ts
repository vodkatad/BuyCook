import { Component, OnInit, OnDestroy} from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  private recipes : Recipe[];
  private subscriptionRecipes;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
    this.subscriptionRecipes = this.recipeService.recipeChanged.subscribe( (recipes : Recipe[]) => {
      this.recipes = recipes;
    }
    );
  }

  ngOnDestroy() {
    this.subscriptionRecipes.unsubscribe();
  }
  // the a out of the recipe-itm is bad cause I cannot listen to the click event on the whole block. It was easier before with the event bubbling.
}
