import { Component, OnInit } from '@angular/core';
import { Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("big food", "the biggest food", "http://thegirlonbloor.com/wp-content/uploads/2015/03/Big-Mac-recipe-1.jpg");
  ];
  constructor() { }

  ngOnInit() {
  }

}
