import { Component, OnInit, ContentChild, ViewChild, AfterContentInit, AfterViewInit } from '@angular/core';
import { MatFormFieldControl, MatFormField } from '@angular/material/form-field';

@Component({
  selector: 'app-sidebar-countries',
  templateUrl: './sidebar-countries.component.html',
  styleUrls: ['./sidebar-countries.component.scss']
})
export class SidebarCountriesComponent implements OnInit, AfterViewInit {

  @ContentChild(MatFormFieldControl) _control: MatFormFieldControl<any>;
  @ViewChild(MatFormField) _matFormField: MatFormField;
  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    this._matFormField._control = this._control;
  }

}
