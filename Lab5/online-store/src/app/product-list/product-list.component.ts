import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../models/product.model';
import { ProductCardComponent } from '../components/product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  @Input({ required: true }) products: Product[] = [];
  @Output() deleteProduct = new EventEmitter<number>();
  removeProduct(id: number) { this.deleteProduct.emit(id); }

  removeProduct(id: number): void {
    this.deleteProduct.emit(id);
  }
}
