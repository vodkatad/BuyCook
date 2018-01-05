import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { Ingredient } from '../../shared/ingredient.model'; 
import { ShoppingListService} from '../../services/shopping-list.service';
import { formDirectiveProvider } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
  // @ViewChild('nameInput') nameInputRef: ElementRef;
  // @ViewChild('amountInput') amountInputRef: ElementRef;
  @ViewChild('f') formItemRef: NgForm; // wrong name
  editSubscription: Subscription;
  editMode: boolean = false;
  editedItemIndex: number;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.editSubscription = this.shoppingListService.ingredientEdit.subscribe( (i: number) => {
      this.editMode = true;
      this.editedItemIndex = i;
      const ingredientEdited = this.shoppingListService.getIngredient(i);
      this.formItemRef.setValue( {
        'name' : ingredientEdited.name,
        'amount' : ingredientEdited.amount
      });
    });
  }

  ngOnDestroy() {
    this.editSubscription.unsubscribe();
  }

  onSubmitFormItem() {
    const newIngredient = new Ingredient(this.formItemRef.value.name, this.formItemRef.value.amount);
    if (this.editMode) {
      this.shoppingListService.updateIngredient(this.editedItemIndex, newIngredient);
    } else {
      this.shoppingListService.addIngredient(newIngredient);
    }
    this.formItemRef.reset();
    this.editMode = false;
  }

  onClearFormItem() {
    this.formItemRef.reset();
    this.editMode = false;
  }

  onDeleteFormItem() {
    //if (this.editMode) { // stupid! Use ngif!
      this.shoppingListService.deleteIngredient(this.editedItemIndex);
      this.editMode = false; // call onClear instead
      this.formItemRef.reset();
    //}
  }
}
