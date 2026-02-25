import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
  @Input({ required: true }) product!: Product;
 @Output() delete = new EventEmitter<number>();

  selectedImageIndex = 0;

  get mainImage(): string {
    return this.product.images?.length
      ? this.product.images[this.selectedImageIndex]
      : this.product.image;
  }

  stars(): number[] {
    const full = Math.round(this.product.rating);
    return Array.from({ length: 5 }, (_, i) => (i < full ? 1 : 0));
  }

  like(): void {
    this.product.likes++;
  }

 onDelete(): void {
  const ok = confirm('Are you sure you want to delete this product?');
  if (ok) {
    this.delete.emit(this.product.id);
  }
}

  openKaspi(): void {
    window.open(this.product.link, '_blank');
  }

  shareWhatsapp(): void {
    const url = encodeURIComponent(this.product.link);
    const text = encodeURIComponent(`Check out this product: `);
    window.open(`https://wa.me/?text=${text}${url}`, '_blank');
  }

  shareTelegram(): void {
    const url = encodeURIComponent(this.product.link);
    const text = encodeURIComponent(this.product.name);
    window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank');
  }

  selectImage(i: number): void {
    this.selectedImageIndex = i;
  }
}