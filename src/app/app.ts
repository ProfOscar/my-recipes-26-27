import { AfterViewInit, Component, ElementRef, signal, ViewChild } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Recipes } from './recipes/recipes';
import { ShoppingList } from './shopping-list/shopping-list';
import { IngredientModel } from './models/ingredient.model';

@Component({
  selector: 'app-root',
  imports: [Header, Recipes, ShoppingList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements AfterViewInit {
  @ViewChild("shoppingList") shoppingListComponent!: ShoppingList;

  title = 'My Recipes';
  selectedFeature: string = "recipes";

  ngAfterViewInit() {
    console.log(this.shoppingListComponent);
  }

  onFeatureSelected(feature: string) {
    this.selectedFeature = feature;
  }

  onShoppingListAddIngredients(ingredients: IngredientModel[]) {
    this.shoppingListComponent.addIngredients(ingredients);
  }
}
