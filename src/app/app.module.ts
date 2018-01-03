import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shoppinglist/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './shoppinglist/shopping-list-edit/shopping-list-edit.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItmComponent } from './recipes/recipe-list/recipe-itm/recipe-itm.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipesComponent } from './recipes/recipes/recipes.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService} from './services/shopping-list.service';
import { AppRoutingModule } from './app-routing.module';
import { RecipeFillerinoComponent } from './recipes/recipe-fillerino/recipe-fillerino.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipeListComponent,
    RecipeItmComponent,
    RecipeDetailComponent,
    RecipesComponent,
    DropdownDirective,
    RecipeFillerinoComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [ ShoppingListService ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
