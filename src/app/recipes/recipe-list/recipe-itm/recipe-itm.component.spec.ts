import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeItmComponent } from './recipe-itm.component';

describe('RecipeItmComponent', () => {
  let component: RecipeItmComponent;
  let fixture: ComponentFixture<RecipeItmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeItmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeItmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
