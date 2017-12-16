import { Recipe } from '../recipes/recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient} from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Injectable()
export class RecipeService {
    public selectedRecipe = new EventEmitter<Recipe> ();
    constructor(private shoppingListService: ShoppingListService) {}

    private recipes: Recipe[] = [
        new Recipe("Chicken Tikka",
        "spicy chicken!",
        "https://upload.wikimedia.org/wikipedia/commons/4/44/Chicken_Tikka_Masala_KellySue.JPG",
        [
            new Ingredient("pollo",1), new Ingredient("curry",100)
        ]),
        new Recipe("Chicken Tikka2",
        "less spicy",
        "https://upload.wikimedia.org/wikipedia/commons/4/44/Chicken_Tikka_Masala_KellySue.JPG", 
        [ 
            new Ingredient("pollo",1)
        ])
        ];

    getRecipes(): Recipe[] {
        return this.recipes.slice(); // to avoid changing from outside out recipes stored here
    }

    addIngredients(recipe: Recipe) {
        /*for (let i of recipe.ingredients) {
            this.shoppingListService.addIngredient(i);
        }*/
        // This emits a lot of events! Best to:
        this.shoppingListService.addIngredients(recipe.ingredients);
    }
}