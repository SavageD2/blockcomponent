import { Component, OnInit } from '@angular/core';
//import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
    user = {
    name: 'Doe',
    firstName : 'John',
    age : 25,
    //quote : '',
    photo :'https://randomuser.me/api/portraits/lego/2.jpg'
  }

  show : boolean = false;
  buttonName: string = 'Show';
  quote :string = '';
  constructor() { }

  toggleAge(){
    this.show = !this.show;

    if(this.show){
      this.buttonName = "Hide";
    }else{
      this.buttonName = "Show";
    }

  }

  onEnterPressed(value: string){
    this.quote = value;
  }

  ngOnInit(): void {
  }

}
