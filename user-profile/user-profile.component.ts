import { Component, OnInit } from '@angular/core';
//import { ActivatedRoute } from '@angular/router';
import { User } from './user';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user: User = new User("Doe", "John", 25, 'https://randomuser.me/api/portraits/lego/2.jpg');

  show : boolean = false;
  buttonName: string = 'Show/Hide my age';
  quote :string = '';
  constructor() { }

  toggleAge(){
    this.show = !this.show;

    if(this.show){
      this.buttonName = "Hide my age";
    }else{
      this.buttonName = "Show my age";
    }

  }

  onEnterPressed(value: string){
    this.quote = value;
  }

  ngOnInit(): void {
  }
  
}