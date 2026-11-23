import { Component } from '@angular/core';
import { Header } from './header/header';
import { Recipes } from './recipes/recipes';
import { ShoppingList } from './shopping-list/shopping-list';

@Component({
  selector: 'app-root',
  imports: [Header, Recipes, ShoppingList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'My Recipes';
  selectedFeature: string = "recipes";

  onFeatureSelected(feature: string) {
    this.selectedFeature = feature;
  }
}
