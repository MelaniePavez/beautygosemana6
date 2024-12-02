import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConsejosPage } from './consejos.page';

describe('ConsejosPage', () => {
  let component: ConsejosPage;
  let fixture: ComponentFixture<ConsejosPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsejosPage]
    }).compileComponents();

    fixture = TestBed.createComponent(ConsejosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
