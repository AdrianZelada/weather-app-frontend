import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarCountriesComponent } from './sidebar-countries.component';

describe('SidebarCountriesComponent', () => {
  let component: SidebarCountriesComponent;
  let fixture: ComponentFixture<SidebarCountriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarCountriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
