import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body-content',
  templateUrl: './body-content.component.html',
  styleUrls: ['./body-content.component.css']
})
export class BodyContentComponent implements OnInit {
  pic1: String = "assets/images/YaeChibi.png"
  dataTitle: String = 'ANIME'
  constructor() { }

  ngOnInit(): void { }

  onClick() {
    alert(`This is ${this.dataTitle}`)
  }
}
