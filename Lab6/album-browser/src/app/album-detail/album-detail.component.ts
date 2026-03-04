import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { AlbumService } from '../services/album.service';
import { Album } from '../models/album.model';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './album-detail.component.html',
})
export class AlbumDetailComponent implements OnInit {
  loading = true;
  album!: Album;
  editedTitle = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumService.getAlbum(id).subscribe({
      next: (data) => {
        this.album = data;
        this.editedTitle = data.title;
        this.loading = false;
      },
      error: (err) => {
        console.error('ALBUM DETAIL ERROR', err);
        this.loading = false;
      },
    });
  }

  save() {
    const updated: Album = { ...this.album, title: this.editedTitle };
    this.albumService.updateAlbum(updated).subscribe({
      next: (res) => {
        this.album = res;
        this.editedTitle = res.title;
        alert('Saved!');
      },
      error: (err) => console.error(err),
    });
  }

  back() {
    this.router.navigate(['/albums']);
  }
}