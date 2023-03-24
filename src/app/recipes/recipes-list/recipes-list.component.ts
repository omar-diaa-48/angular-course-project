import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent {
  recipes: Recipe[] = [
    new Recipe('A test recipe 1', 'This is simply the first test', 'https://www.shutterstock.com/image-photo/notepad-your-recipe-herbs-spices-260nw-370298699.jpg'),
    new Recipe('A test recipe 2', 'This is simply the second test', 'https://www.shutterstock.com/image-photo/notepad-your-recipe-herbs-spices-260nw-370298699.jpg'),
  ];
}
