import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Category } from '../models/category.model';
import { PRODUCTS, CATEGORIES } from '../data/store.data';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  private products: Product[] = PRODUCTS;
  private categories: Category[] = CATEGORIES;

  getCategories(): Category[] {
    return this.categories;
  }

  getProducts(): Product[] {
    return this.products;
  }

  deleteProduct(id: number) {
    this.products = this.products.filter(p => p.id !== id);
  }
}