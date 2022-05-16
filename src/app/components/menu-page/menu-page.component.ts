import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from 'src/app/services/services.service';
@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.scss']
})
export class MenuPageComponent implements OnInit {
  listData = [...this.userService.listFoods] || [];
  selectedFoodType = 'all';

  constructor(private userService: ServicesService, private route: ActivatedRoute) {
    this.userService.navigate('menu');
    this.route.queryParams.subscribe(url => {
      this.selectedFoodType = url['categori'] || 'all';
      this.getListFood(this.selectedFoodType);
    });
  }

  ngOnInit(): void {

  }

  getListFood(type: string) {
    console.log('type', type);
    if (type === 'all') {
      this.listData = [...this.userService.listFoods] || [];
      this.ngOnInit();
    } else {
      this.listData = [...this.userService.listFoods.filter(i => i.categori === type)];
      this.ngOnInit();
    }
  }

  unLike(i: any): void {
    this.listData.forEach(elm =>{
      if(elm.id === i.id){
        elm.check= true;
      }
    })
  }

  like(i: any): void {
    this.listData.forEach(elm =>{
      if(elm.id === i.id){
        elm.check= false;
      }
    })
  }
}
