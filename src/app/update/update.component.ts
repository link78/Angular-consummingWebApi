import { Component, OnInit } from '@angular/core';
import{ActivatedRoute, Router} from '@angular/router';
import {AlbumService} from '../classes/album.service';
import { Album } from '../classes/album.model';
import {Model} from '../classes/repository';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  album: Album;
  message: string = '';
  constructor(private service: AlbumService,private model: Model,
     private route: ActivatedRoute) { }

  ngOnInit() {
    let id= this.route.snapshot.params['id'];
    this.service.getAlbum(id).subscribe(res => this.album= res);
  }

  updateAlbum(){
    this.model.PostAlbum(this.album);
    // this.service.postAlbum(this.album).subscribe(data => {
      
    //   this.album= data;
    //   this.message='Data was successfuly updated';
    // });
    this.message='Data was successfuly updated';
  }

  FormSubmitted = false;
  
      formSubmit(form: NgForm){
        this.FormSubmitted = true;
        if(form.valid){
          this.updateAlbum();
         // this.route.navigateByUrl('/list');
          form.reset();
          this.FormSubmitted=false;
        }
      }

      getValidationMessage(state: any, thingName?: string) {
        let thing: string = state.path || thingName ;
    
        let messages: string[] ;
        if(state.errors) {
          for(let errorName in state.errors) {
            switch(errorName) {
              case "required":
              messages.push(`You must enter a ${thing}`);
              break ;
              case "minlength":
              messages.push(`A ${thing} must be at least ${state.errors['minlength'].requiredLength} characters`);
              break;
              case "pattern":
              messages.push(`The ${thing} can't contains special chatacters`);
              break;
            }
          }
        }
        return messages;
      }

      getFormValidation(form: NgForm): string[]{
        let messages : string[] =[];
        Object.keys(form.controls).forEach(k=> {
          this.getValidationMessage(form.controls[k],k).forEach(m=> messages.push(m))
        });
        return messages;
      }
  }
  
