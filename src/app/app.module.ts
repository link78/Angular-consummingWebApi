import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpModule} from '@angular/http';
import{FormsModule, ReactiveFormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import {AlbumService} from './classes/album.service';
import {Model} from './classes/repository';
import { DetailsComponent } from './details/details.component';
import { UpdateComponent } from './update/update.component';



 const routes: Routes = [
  {path: '', redirectTo: 'list', pathMatch:'full'},
   
   {path: 'list', component: ListComponent},
   {path:'form', component: FormComponent},
   {path: 'list/:id', component: DetailsComponent},
   {path: 'list/:id/edit', component: UpdateComponent}
  
 ]











@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    FormComponent,
    DetailsComponent,
    UpdateComponent
    
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, HttpModule,
    RouterModule.forRoot(routes)
    
  ],
  providers: [AlbumService, Model],
  bootstrap: [AppComponent]
})
export class AppModule { }
