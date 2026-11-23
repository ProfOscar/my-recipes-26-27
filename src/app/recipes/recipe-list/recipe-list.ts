import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RecipeItem } from './recipe-item/recipe-item';
import { RecipeModel } from '../../models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  imports: [RecipeItem],
  templateUrl: './recipe-list.html',
  styleUrl: './recipe-list.css',
})
export class RecipeList {
  @Output() recipeSelected = new EventEmitter<RecipeModel>();
  @Input() recipes: RecipeModel[] | undefined;

  onItemClick(item: RecipeModel) {
    this.recipeSelected.emit(item);
  }
}
