import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; 
import { AlbumService } from '../services/album.service';
import { Album } from '../models/album.model';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterModule],        
  templateUrl: './albums.component.html',
})
export class AlbumsComponent implements OnInit {
  loading = true;
  albums: Album[] = [];

  constructor(private albumService: AlbumService) {}

  ngOnInit(): void {

  const deletedAlbums = JSON.parse(localStorage.getItem('deletedAlbum')  '[]');

  this.albumService.getAlbums().subscribe({
    next: (data) => {

      this.albums = data.filter(album => !deletedAlbums.includes(album.id));

      this.loading = false;
    },
    error: () => {
      this.loading = false;
    },
  });

}


deleteAlbum(id: number) {

  this.albumService.deleteAlbum(id).subscribe({

    next: () => {

      this.albums = this.albums.filter(a => a.id !== id);

  
      const deletedAlbums = JSON.parse(localStorage.getItem('deletedAlbums')  '[]');
    
      if (!deletedAlbums.includes(id)) {
        deletedAlbums.push(id);
      }

      localStorage.setItem('deletedAlbums', JSON.stringify(deletedAlbums));

    }
  

  });

}

}

  