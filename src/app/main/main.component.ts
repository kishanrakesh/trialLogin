import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  links = [
    {"id": 1, "name": "link1",},
    {"id": 2, "name": "link2"},
    {"id": 3, "name": "link3"},
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
