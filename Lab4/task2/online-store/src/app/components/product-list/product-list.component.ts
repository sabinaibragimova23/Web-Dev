import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';
import { PRODUCTS } from '../../data/products';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {

  products: Product[] = PRODUCTS;

  
  minPrice: number | null = null;
  maxPrice: number | null = null;


  get filteredProducts(): Product[] {
    return this.products.filter(p => {
      const okMin = this.minPrice === null || p.price >= this.minPrice;
      const okMax = this.maxPrice === null || p.price <= this.maxPrice;
      return okMin && okMax;
    });
  }

} 

