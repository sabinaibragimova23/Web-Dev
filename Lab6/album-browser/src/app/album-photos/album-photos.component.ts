import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AlbumService } from '../services/album.service';
import { Photo } from '../models/photo.model';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css'],
})
export class AlbumPhotosComponent implements OnInit {
  loading = true;
  albumId = 0;
  photos: Photo[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {
    this.albumId = Number(this.route.snapshot.paramMap.get('id'));
    const count = Number(localStorage.getItem('photoCount'));

    this.albumService.getAlbumPhotos(this.albumId).subscribe({
      next: (data) => {
        this.photos = data;
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
      },
      
    });
  }

  setFallback(event: Event) {
    const img = event.target as HTMLImageElement;
    img.src = 'https://picsum.photos/150';
  }

  back() {
    this.router.navigate(['/albums', this.albumId]);
  }
}