import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  imgUrl: string = '../../assets/angular_icon.png'
  imgWidth: string = '100'
  constructor() { }

  ngOnInit(): void {
  }

  clickBack() {
    return this.imgUrl = '../../assets/angular_icon.png'
  }
  clickForward() {
    return this.imgUrl = '../../assets/react_logo.png'
  }
}
