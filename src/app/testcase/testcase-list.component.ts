import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Testcase } from './testcase.model';
import { TestcaseService } from './testcase.service';

@Component({
  selector: 'app-testcase-list',
  templateUrl: './testcase-list.component.html',
  styleUrls: ['./testcase-list.component.scss']
})
export class TestcaseListComponent implements OnInit {

  testCaseHistories: Map<string, Testcase[]> = new Map();
  private _testCaseSub!: Subscription;

  constructor(private testCaseService: TestcaseService) { }

  ngOnInit(): void {
    this._testCaseSub = this.testCaseService.currentTestCase
      .subscribe(testcase => {

        // add to map if does not exist
        if (!this.testCaseHistories.has(testcase.name)) {
          this.testCaseHistories.set(testcase.name, [])
        }

        this.testCaseHistories.get(testcase.name)?.unshift(testcase)
      })
  }

  ngOnDestroy(): void {
    this._testCaseSub.unsubscribe();
  }

}
