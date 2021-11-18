import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {

  array = [1, 2, 3]

  constructor() { }

  ngOnInit(): void {
  }

  addStr() {
    this.array.push(this.array.length + 1)
  }
}
