import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';
@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  listDataRight = [...this.userService.articlesRight] || [];
  listDataLeft =[...this.userService.articlesLeft] || [];
  constructor(private userService: ServicesService) { }

  ngOnInit(): void {
  }

}
