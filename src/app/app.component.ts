import { Component } from '@angular/core';
import { Recipe } from './recipes/recipe.model';
import { ShoppingListService} from './services/shopping-list.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ ShoppingListService ]
})
export class AppComponent {
  status: number = 0; // 0 means recipes, 1 means shopping list  selectedR: Recipe;

  onSelectedRecipes()   {
    console.log("recipes app!");
    this.status = 0;
  } 

  onSelectedShoppingList()   {
    console.log("sl app!");
    this.status = 1;
  }
}
