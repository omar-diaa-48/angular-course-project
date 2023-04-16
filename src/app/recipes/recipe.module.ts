import { NgModule } from "@angular/core";
import { RecipesComponent } from "./recipes.component";
import { RecipesListComponent } from "./recipes-list/recipes-list.component";
import { RecipesDetailComponent } from "./recipes-detail/recipes-detail.component";
import { RecipesItemComponent } from "./recipes-list/recipes-item/recipes-item.component";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { LoaderComponent } from "../shared/loader/loader.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [
        RecipesComponent,
        RecipesListComponent,
        RecipesDetailComponent,
        RecipesItemComponent,
    ],
    imports: [RouterModule, CommonModule, FormsModule, SharedModule],
    exports: [
        RecipesComponent,
        RecipesListComponent,
        RecipesDetailComponent,
        RecipesItemComponent,
    ],

})
export class RecipeModule { }