import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    // dummy recipe
    new Recipe('A test Recipe', 'this is a dummy recipe', 
    'https://i5.walmartimages.com/asr/c9cbc1c6-1fd1-4cb7-a134-bf6584ceba26.e20c078b6932862793078e7f792f8f1e.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF'),
    new Recipe('A test Recipe', 'this is a dummy recipe', 
    'https://i5.walmartimages.com/asr/c9cbc1c6-1fd1-4cb7-a134-bf6584ceba26.e20c078b6932862793078e7f792f8f1e.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
