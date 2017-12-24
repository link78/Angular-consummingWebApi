import { Component, OnInit } from '@angular/core';
import{ActivatedRoute, Router} from '@angular/router';
import {AlbumService} from '../classes/album.service';
import { Album } from '../classes/album.model';
import {Model} from '../classes/repository';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  album: Album;
  constructor(private service: AlbumService, private model: Model,
    private route: ActivatedRoute) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.getDetails(id);
  }


    getDetails(id:number){
     return this.service.getAlbum(id).subscribe(res => this.album = res);
    }

    getDelete(){
      let idd = this.route.snapshot.params['id']
       return this.service.DeleteAlbum(idd).subscribe(res => this.album= res);
    }
}
