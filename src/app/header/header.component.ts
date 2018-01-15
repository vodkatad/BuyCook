import { Component, Output} from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import {  Response } from '@angular/http';

@Component({
    selector: 'app-header',
    // selection is possible by elements 'component-id', attributes [component-attr] or class (.component-class). Not id.
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    constructor(private recipeService: RecipeService) { }

    onSave() {
        this.recipeService.saveRecipes().subscribe( (response: Response) => {
            console.log('saved recipes!');
        });
    }

    onFetch() {
        this.recipeService.loadRecipes();
    }
}