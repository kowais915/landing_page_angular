import { Component } from '@angular/core';

@Component({
  selector: 'app-categories-section',
  templateUrl: './categories-section.component.html',
  styleUrls: ['./categories-section.component.css']
})
export class CategoriesSectionComponent {
  addCategory: boolean = false;
  products: number = 10;

  incProd(){
    this.products++;
  }

  decProd(){
    this.products--;
  }
}
