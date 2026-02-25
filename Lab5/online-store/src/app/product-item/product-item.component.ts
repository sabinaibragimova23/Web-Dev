import { Component, input, output } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {

  product = input.required<Product>();
  delete = output<number>();

  like() {
    this.product().likes++;
  }

  remove() {
    this.delete.emit(this.product().id);
  }

  whatsapp() {
    return `https://wa.me/?text=${encodeURIComponent(this.product().link)}`;
  }

  telegram() {
    return `https://t.me/share/url?url=${encodeURIComponent(this.product().link)}`;
  }
}