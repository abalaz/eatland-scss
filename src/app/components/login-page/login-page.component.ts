import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { ServicesService } from 'src/app/services/services.service';

interface inf4 {
  id: number;
  name: string;
  gmail:any;
  pass:any;
}

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  Users : inf4[]=[
    {
      id: 1,
      name: "nguyengiahuy",
      gmail: "nggiahuy0904",
      pass: "12345332",
    },
    {
      id: 2,
      name: "nguyenthikimthien",
      gmail: "ntkthien1801",
      pass: "123",
    },
    {
      id: 3,
      name: "tranthanhman",
      gmail: "man1233",
      pass: "1234",
    },
  ]

  detailForm= new FormGroup({
    name: new FormControl(''),
    gmail: new FormControl(''),
    pass: new FormControl(''),
  });

  constructor(private router:Router, public userService: ServicesService) { }

  ngOnInit(): void {
  }

  loginUser(e:any): void{
    e.preventDefault();
    let fUser = e.target.id.value;
    let fPass = e.target.pass.value;
    console.log(fUser,fPass);

    const isExistUser = this.Users.find(item => item.gmail === fUser && item.pass === fPass);
    if (isExistUser) {
      alert("Đăng Nhập Thành Công !");
      this.router.navigate(['home']);
      this.userService.isSelectedRoute= 'home';
      localStorage.setItem('isLoginIn', 'false');
    } else {
      alert("Đăng Nhập Thất bại !");
      this.userService.setLoggedIn(false);
    }
  }

}
