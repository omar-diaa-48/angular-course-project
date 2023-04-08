import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./auth-guard.service";
import { NotFoundComponent } from "./not-found/not-found.component";
import { RecipesDetailComponent } from "./recipes/recipes-detail/recipes-detail.component";
import { RecipesComponent } from "./recipes/recipes.component";
import { RecipeResolver } from "./resolvers/recipe.resolver";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { AuthenticateComponent } from "./authenticate/authenticate.component";

const appRoutes: Routes = [
    { path: '', redirectTo: 'recipes', pathMatch: 'full' },
    { path: 'recipes/:recipeId', canActivate: [AuthGuard], component: RecipesDetailComponent, resolve: { recipe: RecipeResolver } },
    { path: 'recipes', component: RecipesComponent },
    { path: 'shopping-list', component: ShoppingListComponent },
    { path: 'authenticate', component: AuthenticateComponent },
    { path: '**', component: NotFoundComponent },
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }