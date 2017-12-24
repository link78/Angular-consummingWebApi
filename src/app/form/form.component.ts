import { Component, OnInit } from '@angular/core';
import {AlbumService} from '../classes/album.service';
import { Album } from '../classes/album.model';
import {NgForm} from '@angular/forms';
import{ActivatedRoute, Router} from '@angular/router';





@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
album: Album = new Album();
private message = '';
  constructor(private service: AlbumService, private route: Router) { }

  ngOnInit() {
  }


    CreateAlbum(){
      this.service.postAlbum(this.album).subscribe(res => {
        this.album = res;
        this.message="Album has been saved";
      });
    }

    FormSubmitted = false;

    formSubmit(form: NgForm){
      this.FormSubmitted = true;
      if(form.valid){
        this.CreateAlbum();
        this.route.navigateByUrl('/list');
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
