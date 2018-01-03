import {Routes, RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import { ShoppingListComponent } from './shoppinglist/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './shoppinglist/shopping-list-edit/shopping-list-edit.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItmComponent } from './recipes/recipe-list/recipe-itm/recipe-itm.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipesComponent } from './recipes/recipes/recipes.component';
import { RecipeFillerinoComponent } from './recipes/recipe-fillerino/recipe-fillerino.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';


const appRoutes: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full'},
    { path: 'recipes', component: RecipesComponent,
        children: [ 
                    { path: '', component: RecipeFillerinoComponent},
                    { path: 'new', component: RecipeEditComponent },
                    { path: ':id', component: RecipeDetailComponent},
                    { path: ':id/edit', component: RecipeEditComponent },
        ]
    },
    { path: 'shoppinglist', component: ShoppingListComponent}
];

@NgModule({
    imports: [ RouterModule.forRoot(appRoutes)],
    exports: [ RouterModule ]
})
export class AppRoutingModule {

}