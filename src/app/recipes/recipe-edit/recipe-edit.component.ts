import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { RecipeService } from '../../services/recipe.service';
import { RecipeItmComponent } from '../recipe-list/recipe-itm/recipe-itm.component';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode: boolean = false;
  recipeForm: FormGroup;
  recipeIngredients = new FormArray([]);

  constructor(private route: ActivatedRoute, private recipeService: RecipeService, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe( (params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
    });
  }

  private initForm() {
    let recipeName = '';
    let recipePath = '';
    let recipeDescription = '';

    if (this.editMode) {
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipePath = recipe.imagePath;
      recipeDescription = recipe.description;
      if (recipe['ingredients']) {
        for (let i of recipe.ingredients) {
          this.recipeIngredients.push(new FormGroup({
            'name': new FormControl(i.name, Validators.required),
             'amount': new FormControl(i.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
          }));
        }
      }
    }
    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'recipeImagePath': new FormControl(recipePath, Validators.required),
      'recipeDescription': new FormControl(recipeDescription, Validators.required),
      'ingredients': this.recipeIngredients
    });
  }

  onSubmit() {
    const newRecipe = new Recipe(this.recipeForm.value['name'],
    this.recipeForm.value['recipeDescription'],
    this.recipeForm.value['recipeImagePath'],
    this.recipeForm.value['ingredients']);
    // if names of the form are == to our model we could
    // simply pass this.recipeForm.value as newRecipe!
    // advantage of reactive approach.
    if (this.editMode) {
      this.recipeService.updateRecipe(this.id, newRecipe);
    } else {
      this.recipeService.addRecipe(newRecipe);
    }
    this.onCancel();
  }

  onAddIngredient() {
     (<FormArray> this.recipeForm.get('ingredients')).push(
       new FormGroup({
         'name': new FormControl(null, Validators.required),
         'amount': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
       }));
  }

  onCancel() {
    this.router.navigate(['../'], {'relativeTo': this.route});
  }

  onDeleteIngredient(i: number) {
    (<FormArray> this.recipeForm.get('ingredients')).removeAt(i);
  }
}
