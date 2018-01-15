import { Recipe } from '../recipes/recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient} from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class RecipeService {
    constructor(private shoppingListService: ShoppingListService, private http: Http) {}
    recipeChanged = new Subject<Recipe[]>();

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


    saveRecipes(): Observable<Response> {
        return this.http.put('https://buycook-ead56.firebaseio.com/recipes.json', this.recipes);
    }

    loadRecipes() {
        this.http.get('https://buycook-ead56.firebaseio.com/recipes.json').map( (response: Response) => {
            const fixedRecipes = response.json();
            for (const r of fixedRecipes) {
                if (!r['ingredients']) {
                    r['ingredients'] = [];
                }
            }
            return fixedRecipes;
        }).subscribe( (recipes: Recipe[]) => {
            this.recipes = recipes;
            this.recipeChanged.next(this.recipes.slice());
        });
    }

    getRecipes(): Recipe[] {
        return this.recipes.slice(); // to avoid changing from outside out recipes stored here
    }

    getRecipe(id: number): Recipe {
        return this.recipes[id];
    }

    addIngredients(recipe: Recipe) {
        /*for (let i of recipe.ingredients) {
            this.shoppingListService.addIngredient(i);
        }*/
        // This emits a lot of events! Best to:
        this.shoppingListService.addIngredients(recipe.ingredients);
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipeChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, recipe: Recipe){
        this.recipes[index] = recipe;
        this.recipeChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipeChanged.next(this.recipes.slice());
    }
}