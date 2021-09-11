import { Component, Input, OnInit } from '@angular/core';

import { FormGroup } from '@angular/forms';

@Component({
  selector: 'element-invalid',
  templateUrl: './element-invalid.component.html',
  styleUrls: ['./element-invalid.component.scss']
})
export class ElementInvalidComponent implements OnInit {
  @Input() submitted = false;
  @Input() formGroup: FormGroup | any;
  @Input() fieldName: string = '';
  @Input() errorLabel: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
