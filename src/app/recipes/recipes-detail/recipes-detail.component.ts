import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit, OnDestroy {
  recipe: Recipe = new Recipe();
  paramsSubscription: Subscription = new Subscription();

  constructor(private router: Router, private route: ActivatedRoute, private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.paramsSubscription = this.route.params.subscribe(
      (params: Params) => {
        const recipeId = params['recipeId'];
        const recipe = this.recipeService.getRecipe(recipeId);
        if (recipe) {
          this.recipe = recipe;
        }
      }
    )
  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }
}
