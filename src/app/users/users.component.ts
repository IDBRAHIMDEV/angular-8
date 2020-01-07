import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: any[] = [];
  resultUsers: any[] = [];
  mySearch: string = "";

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getAllUsers()
  }

  getAllUsers() {
     this.userService.getUsers().subscribe((res: any[]) => {
        this.resultUsers = this.users = res;
        console.log(res);
     })
  }

  searchUsers() {

    if(this.mySearch == "") {
      this.resultUsers = this.users;
      return;
    }

    this.userService.searchUser(this.mySearch).subscribe((res: any[]) => {
      this.resultUsers = res['items'];
    })
  }

}
