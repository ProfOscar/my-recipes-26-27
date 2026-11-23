import { Component } from '@angular/core';
import { ShoppingEdit } from './shopping-edit/shopping-edit';
import { IngredientModel } from '../models/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  imports: [ShoppingEdit],
  templateUrl: './shopping-list.html',
  styleUrl: './shopping-list.css',
})
export class ShoppingList {

  // Provvisoriamente scrivo nel codice una lista di ingredienti di test
  ingredients: IngredientModel[] = [
    { "name": "Farina", amount: 200 },
    { "name": "Uova", amount: 12 },
    { "name": "Zucchero", amount: 500 }
  ]

  onIngredientAdded(ingredient: IngredientModel) {
    let ingredientFound = this.ingredients.find((item) => {
      return item.name.toLowerCase().trim() == ingredient.name.toLowerCase().trim()
    })
    if (ingredientFound) {
      ingredientFound.amount += ingredient.amount;
    } else {
      this.ingredients.push(ingredient);
    }
  }

  onDelete(ingredient: IngredientModel) {
    var index = this.ingredients.indexOf(ingredient);
    if (index != -1) {
      this.ingredients.splice(index, 1);
    } else {
      alert("Elemento non trovato!");
    }
  }

  addIngredients(ingredients: IngredientModel[]) {
    console.log(ingredients);
  }
}
