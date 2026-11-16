import { Component, EventEmitter, Output } from '@angular/core';
import { IngredientModel } from '../../models/ingredient.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  imports: [FormsModule],
  templateUrl: './shopping-edit.html',
  styleUrl: './shopping-edit.css',
})
export class ShoppingEdit {
  @Output() ingredientAdded = new EventEmitter<IngredientModel>();

  name?: string;
  amount?: number;

  errorMessage?: string = undefined;

  onAddIngredient() {
    if (this.name && this.amount) {
      let newIngredient = new IngredientModel(this.name.trim(), this.amount);
      this.ingredientAdded.emit(newIngredient);
      this.onClearFields();
    } else {
      this.errorMessage = 'Devi inserire descrizione e quantità!';
    }
  }

  onClearFields() {
    this.name = "";
    this.amount = undefined;
    this.errorMessage = undefined;
  }
}
