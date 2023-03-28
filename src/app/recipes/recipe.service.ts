import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(1, 'A test recipe 1', 'This is simply the first test', 'https://www.shutterstock.com/image-photo/notepad-your-recipe-herbs-spices-260nw-370298699.jpg'),
        new Recipe(2, 'A test recipe 2', 'This is simply the second test', 'https://www.shutterstock.com/image-photo/notepad-your-recipe-herbs-spices-260nw-370298699.jpg'),
    ];

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(id: number) {
        return this.recipes.find((recipe) => recipe.id == id);
    }
}