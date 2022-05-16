import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Output,EventEmitter } from '@angular/core';
import { ServicesService } from './services/services.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'eatland-scss';
  @Output() direction = new EventEmitter<string>();
  isSearch=false;
  isSelectedRoute = this.userService.isSelectedRoute;
  isChosse = false;
  selectedFoodType = 'all';
  listData =[...this.userService.listFoods] || [];
  items= 0;

  constructor(private router:Router, public userService: ServicesService,private route: ActivatedRoute ){
  }


  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        this.selectedFoodType = params['categori'];
        console.log(this.selectedFoodType); // { order: "popular" }
      })
  }

  get islogin() {
    return localStorage.getItem('isLoginIn');
  }

  search(value: any){
    console.log(value);
    // this.listData =[...this.userService.listFoods.filter(i => i.name.includes(value))];
    this.userService.listFoods = [...this.userService.listFoods.filter(i => i.name.includes(value))];
    console.log(this.userService.listFoods);
    this.isSearch=true;
    if(value === ''){
      this.userService.navigate('home');
      this.router.navigate(['home']);
    }else{
      this.router.navigate(['menu']);
    }
  }

  navigateUrl(direction: string, type: string) {
    this.router.navigate([direction], { queryParams: { categori: type }});
    this.selectedFoodType = type;

  }

  addNewItem(value: string) {
    this.direction.emit(value);
    console.log(value);
  }

  navigate(directionMenu: string){
    this.userService.navigate(directionMenu);
    this.router.navigate([directionMenu]);
    if(directionMenu==='menu'){
      this.selectedFoodType='all';
    }
    else{
      this.selectedFoodType='';
    }
  }

  logout(direction: string):void{
    this.userService.navigate(direction);
    this.router.navigate([direction]);
    this.router.navigate(['']) ;
    localStorage.clear();
  }

  get countNumber(){
    const numberListOrder = this.userService.listFoods.filter(i => i.check).length;
    console.log(numberListOrder);
    return numberListOrder;
  }

}
