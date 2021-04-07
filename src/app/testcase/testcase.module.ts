import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestcaseComponent } from './testcase.component';
import { TestcaseListComponent } from './testcase-list.component';

@NgModule({
  declarations: [
    TestcaseComponent,
    TestcaseListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TestcaseComponent,
    TestcaseListComponent
  ]
})
export class TestcaseModule { }
