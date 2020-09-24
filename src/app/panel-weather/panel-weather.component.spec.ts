import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelWeatherComponent } from './panel-weather.component';

describe('PanelWeatherComponent', () => {
  let component: PanelWeatherComponent;
  let fixture: ComponentFixture<PanelWeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelWeatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
