import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {
  recipe: Recipe = new Recipe();

  constructor(private router: Router, private route: ActivatedRoute, private recipeService: RecipeService) { }

  ngOnInit(): void {
    const recipeId = this.route.snapshot.params['recipeId'];
    const recipe = this.recipeService.getRecipe(recipeId);
    if (recipe) {
      this.recipe = recipe;
    }
  }
}
