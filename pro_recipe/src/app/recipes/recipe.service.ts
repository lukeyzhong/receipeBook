import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

import { Ingredient } from "../shared/ingredients.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();

    private recipes: Recipe[] = [
        // dummy recipe
        new Recipe('Recipe1', 'this is a dummy recipe', 
        'https://i5.walmartimages.com/asr/c9cbc1c6-1fd1-4cb7-a134-bf6584ceba26.e20c078b6932862793078e7f792f8f1e.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
        [
            new Ingredient('meat', 1),
            new Ingredient('french fries', 2)
        ]),
        new Recipe('Recipe2', 'this is a dummy recipe', 
        'https://i5.walmartimages.com/asr/c9cbc1c6-1fd1-4cb7-a134-bf6584ceba26.e20c078b6932862793078e7f792f8f1e.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
        [
            new Ingredient('buns', 1),
            new Ingredient('pickle', 3)
        ])
      ];
    
    constructor(private slService: ShoppingListService) {}
    
    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }
}