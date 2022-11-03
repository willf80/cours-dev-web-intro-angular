import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutTodoComponent } from './layout-todo.component';

describe('LayoutTodoComponent', () => {
  let component: LayoutTodoComponent;
  let fixture: ComponentFixture<LayoutTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutTodoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
