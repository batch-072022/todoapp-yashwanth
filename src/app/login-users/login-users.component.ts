import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-users',
  templateUrl: './login-users.component.html',
  styleUrls: ['./login-users.component.css']
})
export class LoginUsersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  users = [
    {id:222,firstname:"yashwanth",lastname:"Dayakar",email:"yashwanth@gmail.com"},
    {id:223,firstname:"janitha",lastname:"jaan",email:"janitha@gmail.com"},
    {id:223,firstname:"Sai",lastname:"krishnna",email:"sai@gmail.com"}
  ];

  deleteUsers(){
    alert("Successfully Deleted");
  }

}

