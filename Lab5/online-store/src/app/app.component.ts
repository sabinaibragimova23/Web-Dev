import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductListComponent } from './components/product-list/product-list.component';
import { CATEGORIES, PRODUCTS } from './data/store.data';

import { Category } from './models/category.model';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  categories: Category[] = CATEGORIES;
  allProducts: Product[] = PRODUCTS;

  selectedCategoryId: number | null = null;

  selectCategory(id: number): void {
    this.selectedCategoryId = id;
  }

  get filteredProducts(): Product[] {
    if (this.selectedCategoryId === null) return [];
    return this.allProducts.filter(p => p.categoryId === this.selectedCategoryId);
  }

 handleDelete(id: number): void {
  this.allProducts = this.allProducts.filter(p => p.id !== id);
}
}