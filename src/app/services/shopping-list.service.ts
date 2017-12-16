import { EventEmitter } from '@angular/core';
import  { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
    public ingredients: Ingredient[] = [
        new Ingredient("Chicken breast", 1),
        new Ingredient("Curry", 42)
    ];

    public ingredientChanged = new EventEmitter<Ingredient[]> ();

    getIngredients() {
        return this.ingredients.slice();
    }

    public addIngredient(i: Ingredient) {
        this.ingredients.push(i);
        this.ingredientChanged.emit(this.ingredients.slice());
    }
}