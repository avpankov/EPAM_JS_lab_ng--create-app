import { Component, OnInit } from '@angular/core';
import { ConsoleService } from '../console.service';

@Component({
  selector: 'app-my',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.scss'],
  providers: [ConsoleService]
})
export class MyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const service = new ConsoleService();
    service.log();
  }

}
