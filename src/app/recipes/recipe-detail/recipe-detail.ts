import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RecipeModel } from '../../models/recipe.model';

@Component({
  selector: 'app-recipe-detail',
  imports: [],
  templateUrl: './recipe-detail.html',
  styleUrl: './recipe-detail.css',
})
export class RecipeDetail {
  @Input() recipe: RecipeModel | undefined;
  @Output() recipeDeleted = new EventEmitter<RecipeModel>;

  onDeleteRecipe(){
    // TODO:: chiedere conferma
    this.recipeDeleted.emit(this.recipe);
  }
}
