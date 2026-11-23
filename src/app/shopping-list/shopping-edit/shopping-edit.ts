import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
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
  @ViewChild("txtName") nameInputField!: ElementRef;

  name?: string = "";
  amount?: number;

  errorMessage?: string = undefined;

  ngAfterViewInit(): void {
    this.nameInputField.nativeElement.focus();
  }

  onAddIngredient() {
    if (this.name && this.amount) {
      let newIngredient = new IngredientModel(this.name.trim(), this.amount);
      this.ingredientAdded.emit(newIngredient);
      this.onClearFields();
    } else {
      this.errorMessage = 'Devi inserire descrizione e quantità!';
      this.nameInputField.nativeElement.focus();
    }
  }

  onClearFields() {
    this.name = "";
    this.amount = undefined;
    this.errorMessage = undefined;
    this.nameInputField.nativeElement.focus();
  }

  onCloseAlert() {
    this.errorMessage = undefined;
    this.nameInputField.nativeElement.focus();
  }
}
