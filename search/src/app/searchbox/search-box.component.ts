import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';


@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {
public allRecipe :any
public searchState :any
public searchWord=""
public searchHistory:any=[]
 
public myRecipe :any

  constructor(private service :SearchService) { }
  
  searchHandler($event:any){
  this.searchWord = $event.target.value;
  //this.searchHistory=  this.searchWord //[...this.searchHistory, this.searchWord]
  console.log('search',this.searchWord);
  this.searchState = this.allRecipe.filter((item :any)=>{
         if(item.name.includes(this.searchWord)){
           return item.name
           
         }
       
  })
   this.searchState.map((i:any)=>{
  this.searchHistory.push(i)
 })
  
// this.searchHistory.push( this.searchState.map((e:any)=>{
//   return e
// }))
  }
  ngOnInit(): void {
    this.service.recipList().subscribe((data)=>{
      this.allRecipe = data;
      console.log ('Data fetched from Server', data)
    })

    // this.service.getRecipList().subscribe((recipe:any)=>{
    //   this.myRecipe =recipe
    //   console.log('response', recipe);
      

    // })
   
  }

}
