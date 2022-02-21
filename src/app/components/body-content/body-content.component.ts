import { Component, Input, OnInit } from '@angular/core';
import { NgImageSliderModule } from 'ng-image-slider';
import { Router } from '@angular/router';

@Component({
  selector: 'app-body-content',
  templateUrl: './body-content.component.html',
  styleUrls: ['./body-content.component.css']
})
export class BodyContentComponent implements OnInit {
  @Input() animationSpeed: number;
  pic1: String = "assets/images/YaeChibi.png"
  dataTitle: String = 'ANIME'
  constructor(private router: Router) { }

  ngOnInit(): void { }

  animeCollection: Array<object> = [
    {
      image: 'assets/images/YaeChibi.png',
      alt: 'img',
      thumbImage: 'assets/images/YaeChibi.png',
      title: 'One Piece'
    },
    {
      image: 'assets/images/YaeChibi.png',
      alt: 'img',
      thumbImage: 'assets/images/YaeChibi.png',
      title: 'Code Geass'
    },
    {
      image: 'assets/images/YaeChibi.png',
      alt: 'img',
      thumbImage: 'assets/images/YaeChibi.png',
      title: 'Code Geass'
    },
    {
      image: 'assets/images/YaeChibi.png',
      alt: 'img',
      thumbImage: 'assets/images/YaeChibi.png',
      title: 'Code Geass'
    },
    {
      image: 'assets/images/YaeChibi.png',
      alt: 'img',
      thumbImage: 'assets/images/YaeChibi.png',
      title: 'Code Geass'
    },
    {
      image: 'assets/images/YaeChibi.png',
      alt: 'img',
      thumbImage: 'assets/images/YaeChibi.png',
      title: 'Code Geass'
    },
    {
      image: 'assets/images/YaeChibi.png',
      alt: 'img',
      thumbImage: 'assets/images/YaeChibi.png',
      title: 'Re:Zero'
    }
  ]

  onClick() {
    alert(`This is ${this.dataTitle}`)
  }

  hasRoute(route: string) {
    return this.router.url == route;
  }
}
