import { inject, Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Recipe } from "../recipes/recipe.model";
import { RecipeService } from "../recipes/recipe.service";

// @Injectable()
// export class RecipeResolver implements Resolve<Recipe>{
//     constructor(private recipeService: RecipeService) { }

//     resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Recipe | Observable<Recipe> | Promise<Recipe> {
//         return this.recipeService.getRecipe(+route.params['recipeId']) as Recipe;
//     }
// }

export const RecipeResolver: ResolveFn<Recipe> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    return inject(RecipeService).getRecipe(+route.params['recipeId']) as Recipe;
}
