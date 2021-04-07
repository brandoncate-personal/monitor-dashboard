import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Testcase } from './testcase.model';

@Injectable({
  providedIn: 'root'
})
export class TestcaseService {
  currentTestCase = this.socket.fromEvent<Testcase>('testcase')

  constructor(private socket: Socket) { }
}
