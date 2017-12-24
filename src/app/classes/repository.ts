import { Injectable } from '@angular/core';
import {Album} from './album.model';
import {AlbumService} from './album.service';
import {Observable} from 'rxjs/observable';
import 'rxjs/add/operator/map';


@Injectable()
export class Model {

    album: Album;
    albums: Album[];

    private locator=(al: Album, id: number) => al.AlbumID == id;

    constructor(private service: AlbumService){
        service.getAll().subscribe(res => this.albums = res);
    }

    getAll():Album[]{
        return this.albums;
    }

    getAlbum(id: number): any{
        return this.albums.find(a=> this.locator(a,id));
    }

    PostAlbum(al: Album){
        if(al.AlbumID == 0 || al.AlbumID == null){

            this.service.postAlbum(al).subscribe(res => this.albums.push(res));
        }else {

            this.service.updateAlbum(al).subscribe(data =>{
                let index = this.albums.findIndex(item => this.locator(item, data.id));
                this.albums.splice(index, 1 , data);
            });
        }

    }

        DeleteAlbum(id: number){
            this.service.DeleteAlbum(id).subscribe(() => {
                let index = this.albums.findIndex( m=> this.locator(m, id));
                if( index > -1){
                    this.albums.splice(index, 1);
                }
            });
        }
    

}