import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  isSelectedRoute = 'home';
  selectedFoodType= 'all';
  private loggedInStatus = JSON.parse(localStorage.getItem('loggedIn') || 'false');
  listFoodsOriginal = [
    {
      id: 1,
      img: "img-burger/pixlr-bg-result.png",
      name: "Burger Beef",
      des: "Lorem Ipsum is simply dummy text of the printing ",
      price: "5",
      categori: "burger",
      check:false,
      bestsaler:false,

    },
    {
      id: 2,
      img: "img-burger/pixlr-bg-result (1).png",
      name: "Burger Chicken",
      des: "Lorem Ipsum is simply dummy text of the printing ",
      price: "12",
      categori: "burger",
      check:false,
      bestsaler:false,

    },
    {
      id: 3,
      img: "download-removebg-preview.png",
      name: "Burger Pork",
      des: "Lorem Ipsum is simply dummy text of the printing ",
      price: "25",
      categori: "burger",
      check:false,
      bestsaler:false,
    },
    {
      id: 4,
      img: "img-burger/pixlr-bg-result (1).png",
      name: "Burger Seafood",
      des: "Lorem Ipsum is simply dummy text of the printing ",
      price: "20",
      categori: "burger",
      check:false,
      bestsaler:true,
    },
    {
      id: 5,
      img: "img-pizza/pixlr-bg-result (1).png",
      name: "Pizza",
      des: "Lorem Ipsum is simply dummy text of the printing ",
      price: "10",
      categori: "pizza",
      check:false,
      bestsaler:false,
    },
    {
      id: 6,
      img: "img-pizza/pixlr-bg-result.png",
      name: "Pizza pork",
      des: "Lorem Ipsum is simply dummy text of the printing ",
      price: "35",
      categori: "pizza",
      check:false,
      bestsaler:false,
    },
    {
      id: 7,
      img: "img-pizza/pixlr-bg-result (2).png",
      name: "Pizza Chicken",
      des: "Lorem Ipsum is simply dummy text of the printing ",
      price: "40",
      categori: "pizza",
      check:false,
      bestsaler:false,
    },
    {
      id: 8,
      img: "img-pizza/pixlr-bg-result (3).png",
      name: "Pizza chesse",
      des: "Lorem Ipsum is simply dummy text of the printing ",
      price: "35",
      categori: "pizza",
      check:false,
      bestsaler:true,

    },
    {
      id: 9,
      img: "img-salad/pixlr-bg-result (1).png",
      name: "Salad with eggs",
      des: "Lorem Ipsum is simply dummy text of the printing ",
      price: "10",
      categori: "salads",
      check:false,
      bestsaler:true,

    },
    {
      id: 10,
      img: "img-salad/pixlr-bg-result.png",
      name: "Salad vegetable",
      des: "Lorem Ipsum is simply dummy text of the printing ",
      price: "6",
      categori: "salads",
      check:false,
      bestsaler:true,
    },
    {
      id: 11,
      img: "download-removebg-preview.png",
      name: "Salad fruit",
      des: "Lorem Ipsum is simply dummy text of the printing ",
      price: "20",
      categori: "salads",
      check:false,
      bestsaler:true,
    },
    {
      id: 12,
      img: "img-dessert/pixlr-bg-result.png",
      name: "Souffle",
      des: "Lorem Ipsum is simply dummy text of the printing ",
      price: "20",
      categori: "deserts",
      check:false,
      bestsaler:false,
    },
    {
      id: 13,
      img: "img-dessert/pixlr-bg-result (1).png",
      name: "Cupcake",
      des: "Lorem Ipsum is simply dummy text of the printing ",
      price: "30",
      categori: "deserts",
      check:false,
      bestsaler:false,
    },
    {
      id: 14,
      img: "img-dessert/pixlr-bg-result (2).png",
      name: "Chocolate mousse",
      des: "Lorem Ipsum is simply dummy text of the printing ",
      price: "25",
      categori: "deserts",
      check:false,
      bestsaler:false,
    },
    {
      id: 15,
      img: "img-drink/pixlr-bg-result (3).png",
      name: "Cocacola",
      des: "Lorem Ipsum is simply dummy text of the printing ",
      price: "3",
      categori: "drinks",
      check:false,
      bestsaler:true,
    },
    {
      id: 16,
      img: "img-drink/pixlr-bg-result (2).png",
      name: "Pepsi",
      des: "Lorem Ipsum is simply dummy text of the printing ",
      price: "3",
      categori: "drinks",
      check:false,
      bestsaler:false,
    },
    {
      id: 17,
      img: "img-drink/pixlr-bg-result (1).png",
      name: "7Up",
      des: "Lorem Ipsum is simply dummy text of the printing ",
      price: "3",
      categori: "drinks",
      check:false,
      bestsaler:false,
    },
    {
      id: 18,
      img: "img-drink/pixlr-bg-result.png",
      name: "Water",
      des: "Lorem Ipsum is simply dummy text of the printing ",
      price: "25",
      categori: "drinks",
      check:false,
      bestsaler:false,
    },
  ];
  listFoods = [...this.listFoodsOriginal];

  articlesRight =[
    {
      id: 1,
      img: "articles-burger/download (1).jfif",
      name: "Burger Beef",
      des: "Lorem Ipsum is simply dummy text of the printing ",
    },
    {
      id: 2,
      img: "articles-burger/download (2).jfif",
      name: "Burger Chicken",
      des: "Lorem Ipsum is simply dummy text of the printing ",
    },
    {
      id: 3,
      img: "articles-dessert/images (6).jfif",
      name: "Desert Chocolat",
      des: "Lorem Ipsum is simply dummy text of the printing ",
    },
    {
      id: 4,
      img: "articles-pizza/images (4).jfif",
      name: "Pizza ",
      des: "Lorem Ipsum is simply dummy text of the printing ",
    },
    {
      id: 5,
      img: "articles-burger/download (1).jfif",
      name: "Burger Beef",
      des: "Lorem Ipsum is simply dummy text of the printing ",
    },
    {
      id: 6,
      img: "articles-burger/download (1).jfif",
      name: "Burger Beef",
      des: "Lorem Ipsum is simply dummy text of the printing ",
    },
  ];
  articlesLeft =[
    {
      id: 1,
      img: "articles-burger/download (1).jfif",
      name: "Burger Beef",
      des: "Lorem Ipsum is simply dummy text of the printing ",
    },
    {
      id: 2,
      img: "articles-burger/download (2).jfif",
      name: "Burger Beef",
      des: "Lorem Ipsum is simply dummy text of the printing ",
    },
    {
      id: 3,
      img: "articles-burger/download (1).jfif",
      name: "Burger Beef",
      des: "Lorem Ipsum is simply dummy text of the printing ",
    },
    {
      id: 4,
      img: "articles-burger/download (1).jfif",
      name: "Burger Beef",
      des: "Lorem Ipsum is simply dummy text of the printing ",
    },
    {
      id: 5,
      img: "articles-burger/download (1).jfif",
      name: "Burger Beef",
      des: "Lorem Ipsum is simply dummy text of the printing ",
    },
    {
      id: 6,
      img: "articles-burger/download (1).jfif",
      name: "Burger Beef",
      des: "Lorem Ipsum is simply dummy text of the printing ",
    },
  ];

  constructor() {
   }

   setLoggedIn(value :boolean){
    this.loggedInStatus = value;
    localStorage.setItem('loggedIn','true');
  }

  isLoggedIn(){
    return JSON.parse(localStorage.getItem('loggedIn') || this.loggedInStatus.toString());
  }

  navigate(direction: string) {
    this.isSelectedRoute = direction;

  }
}
