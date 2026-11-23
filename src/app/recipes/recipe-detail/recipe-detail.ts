import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RecipeModel } from '../../models/recipe.model';
import { IngredientModel } from '../../models/ingredient.model';

@Component({
  selector: 'app-recipe-detail',
  imports: [],
  templateUrl: './recipe-detail.html',
  styleUrl: './recipe-detail.css',
})
export class RecipeDetail {
  @Input() recipe: RecipeModel | undefined;
  @Output() recipeDeleted = new EventEmitter<RecipeModel>;
  @Output() shoppingListAddIngredients = new EventEmitter<IngredientModel[]>;

  showDeleteConfirm: boolean = false;

  onShowConfirmDelete() {
    this.showDeleteConfirm = true;
  }

  cancelDelete() {
    this.showDeleteConfirm = false;
  }

  confirmDelete() {
    this.recipeDeleted.emit(this.recipe);
    this.showDeleteConfirm = false;
  }

  onAddToShoppingList(){
    this.shoppingListAddIngredients.emit(this.recipe?.ingredients);
  }
}
