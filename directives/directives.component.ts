import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  title : string = "Hello !"
  isAdmin: boolean = true;


  constructor() { }

  toggleTitle(){
    this.isAdmin = !this.isAdmin;
  }

  ngOnInit(): void {
  }

}