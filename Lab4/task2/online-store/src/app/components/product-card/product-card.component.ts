import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input({ required: true }) product!: Product;

  isActive = false;

toggleActive() {
  this.isActive = !this.isActive;
}

  selectedImageIndex = 0;

  get selectedImage(): string {
    const imgs = this.product.images?.length ? this.product.images : [this.product.image];
    return imgs[this.selectedImageIndex] ?? imgs[0];
  }
 
 
  setImage(i: number) {
    this.selectedImageIndex = i;
  }

  prevImage() {
    const n = this.product.images.length;
    this.selectedImageIndex = (this.selectedImageIndex - 1 + n) % n;
  }

  nextImage() {
    const n = this.product.images.length;
    this.selectedImageIndex = (this.selectedImageIndex + 1) % n;
  }

  stars(): number[] {
    return [1, 2, 3, 4, 5];
  }

  filledStarsCount(): number {
    return Math.round(this.product.rating);
  }

  whatsappShareUrl(): string {
    const text = `Check out this product: ${this.product.link}`;
    return `https://wa.me/?text=${encodeURIComponent(text)}`;
  }

  telegramShareUrl(): string {
    const url = encodeURIComponent(this.product.link);
    const text = encodeURIComponent(this.product.name);
    return `https://t.me/share/url?url=${url}&text=${text}`;
  }
}
