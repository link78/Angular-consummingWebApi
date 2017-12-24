import { Component, OnInit } from '@angular/core';
import {AlbumService} from '../classes/album.service';
import { Album } from '../classes/album.model';
import {Http, Response} from '@angular/http';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
albums: Album[];
  constructor(private service: AlbumService, private http: Http) { }
   // private uri= 'http://localhost:52092/api/albums/?s=';
  ngOnInit() {
    this.service.getAll().subscribe(res => this.albums = res );
  }


  // performSearch(searchTerm: HTMLInputElement):void{
  //   const link= this.uri + searchTerm.value;
    
  //   this.http.request(link).subscribe(res=> {
  //     this.albums = res.json().data;
  //     console.log(this.albums);
  //   })


  // }
}
