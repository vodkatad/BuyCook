import { Recipe } from '../recipes/recipe.model';
import { EventEmitter } from '@angular/core';
 
export class RecipeService {
    public selectedRecipe = new EventEmitter<Recipe> ();

    private recipes: Recipe[] = [
        new Recipe("Chicken Tikka","spicy chicken!","https://upload.wikimedia.org/wikipedia/commons/4/44/Chicken_Tikka_Masala_KellySue.JPG"),
        new Recipe("Chicken Tikka2","less spicy","https://upload.wikimedia.org/wikipedia/commons/4/44/Chicken_Tikka_Masala_KellySue.JPG")
          ];

    getRecipes(): Recipe[] {
        return this.recipes.slice(); // to avoid changing from outside out recipes stored here
    }


}