import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  recipe = [
    { id: 1, name: 'cuisineType' },
    { id: 1, name: 'mealType' },
    { id: 1, name: 'dishType' },
    { id: 1, name: 'calories' },
    { id: 1, name: 'time' },
    { id: 1, name: 'diet' },
  ];
  constructor(private http: HttpClient) {}
  recipList() {
    return of(this.recipe)
    
  }
  getRecipList() {
    
    return this.http.get('https://developer.edamam.com/edamam-docs-recipe-api')
  }
}
