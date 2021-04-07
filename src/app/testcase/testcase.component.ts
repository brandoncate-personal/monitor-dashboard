import { Component, Input } from '@angular/core';
import { Testcase } from './testcase.model';

@Component({
  selector: 'app-testcase',
  templateUrl: './testcase.component.html',
  styleUrls: ['./testcase.component.scss']
})

// presentational component
export class TestcaseComponent {

  @Input()
  testcase!: Testcase;

}
