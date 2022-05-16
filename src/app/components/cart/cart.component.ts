import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  listData = [...this.userService.listFoods];
  constructor(private userService: ServicesService) { }

  ngOnInit(): void {
  }

  delete(i: number): void{
    this.listData = this.userService.listFoods.filter(elm => elm.id !== i);
    this.userService.listFoods = this.listData;
  }

}
