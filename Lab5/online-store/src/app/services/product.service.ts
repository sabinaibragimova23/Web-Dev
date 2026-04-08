import { Injectable } from '@angular/core';
import { PRODUCTS, CATEGORIES } from '../data/store.data';
import { Product } from '../models/product.model';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = PRODUCTS;
  private categories: Category[] = CATEGORIES;

  getProducts(): Product[] {
    return this.products;
  }

  getCategories(): Category[] {
    return this.categories;
  }

  deleteProduct(id: number) {
    this.products = this.products.filter(p => p.id !== id);
  }
}