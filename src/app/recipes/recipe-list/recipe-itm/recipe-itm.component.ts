import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../../services/recipe.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-recipe-itm',
  templateUrl: './recipe-itm.component.html',
  styleUrls: ['./recipe-itm.component.css']
})
export class RecipeItmComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onSelected() {
    this.router.navigate([':0'], {relativeTo: this.route, queryParamsHandling: 'preserve'});
  }
} 
