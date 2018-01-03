import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Recipe } from '../recipe.model';
import { Ingredient } from '../../shared/ingredient.model';
import { RecipeService } from '../../services/recipe.service';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute) { }

  ngOnInit() {
      //this.recipe = this.recipeService.getRecipe(this.route.snapshot.params['id']);
      this.route.params.subscribe( (params: Params) => { 
             this.recipe = this.recipeService.getRecipe(params['id']);  //how come this works without casting to number?
             this.id = +params['id'];
            }
      );
  }

  newIngredients() {
    this.recipeService.addIngredients(this.recipe);
  }

}
