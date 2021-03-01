import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { HttpClientModule} from "@angular/common/http";
import { SearchBoxComponent } from './search-box.component';


const myRoutes :Routes =[
  {path:"box", component:SearchBoxComponent}
]

@NgModule({
  declarations: [SearchBoxComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(myRoutes),
    HttpClientModule
  ],
  exports:[SearchBoxComponent],
  providers: [],
})
export class SearchboxModule { }
