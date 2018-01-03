import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeFillerinoComponent } from './recipe-fillerino.component';

describe('RecipeFillerinoComponent', () => {
  let component: RecipeFillerinoComponent;
  let fixture: ComponentFixture<RecipeFillerinoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeFillerinoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeFillerinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
