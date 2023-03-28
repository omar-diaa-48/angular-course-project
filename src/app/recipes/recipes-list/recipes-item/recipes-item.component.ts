import { Component, Input } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent {
  @Input() recipe: Recipe = new Recipe();

  constructor(private router: Router, private recipeService: RecipeService) { }

  onSelected() {
    // this.recipeService.recipeSelected.emit(this.recipe);
    this.router.navigate([`recipes/${this.recipe.id}`])
  }
}
