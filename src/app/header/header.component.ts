import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-header', // selection is possible by elements 'component-id', attributes [component-attr] or class (.component-class). Not id.
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    @Output() selectedRecipes = new EventEmitter<any>();
    @Output() selectedShoppingList = new EventEmitter<any>();

    onClickRecipes()   {
        console.log("recipes header!");
        this.selectedRecipes.emit("");
    }

    onClickShoppingList()   {
        console.log("sl header!");
        this.selectedShoppingList.emit("");
    }

}