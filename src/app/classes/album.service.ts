import { Injectable } from '@angular/core';
import {Album} from './album.model';
import {Http, Request, RequestMethod, Headers} from '@angular/http';
import {Observable} from 'rxjs/observable';
import 'rxjs/add/operator/map';


@Injectable()
export class AlbumService {

  albums: Album[];

  constructor(private http: Http) { }

  private url= 'http://localhost:52092/api/albums';
   // getting all albums
    getAll():Observable<Album[]>{

     return this.http.get(this.url).map(res => res.json());
    }


    // creating new 
    postAlbum(data: Album):Observable<Album>{
      return this.http.post(this.url,data).map(res=> res.json());
    }


     getAlbum(id: number):Observable<Album>{
       return this.http.get(`${this.url}/${id}`).map(res => res.json());
     }

     DeleteAlbum(id: number):Observable<Album>{
       return this.http.delete(`${this.url}/${id}`).map(res=> res.json());
     }

     
     updateAlbum(al: Album){
       return this.http.put(`${this.url}/${al.AlbumID}`, al).map(res => res.json());
     }
}
