import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  @Output() featureSelected = new EventEmitter<string>();

  collapsed: boolean = false;
  open: boolean = false;
  selectedFeature: string = "recipes";

  onSelectFeature(feature: string) {
    this.open = false;
    this.selectedFeature = feature;
    this.featureSelected.emit(feature);
  }
}
