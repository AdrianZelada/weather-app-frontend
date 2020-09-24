import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleCityComponent } from './title-city.component';

describe('TitleCityComponent', () => {
  let component: TitleCityComponent;
  let fixture: ComponentFixture<TitleCityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleCityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
