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

}
