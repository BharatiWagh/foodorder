import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }




  getAll():Foods[]{
    return[
      //Only images ouput
      // '/assets/berger.jpg',
      // '/assets/bhujiya.jpg',
      // '/assets/dosa.jpg',
      // '/assets/frenchFries.jpg',
      // '/assets/panipuri.jpg',
      // '/assets/pizza.jpg',
      // '/assets/roll.jpg',
      // '/assets/samosa.jpg',

      //images with details    
      {
        id:1,
    price:10,
    name:'Berger',
    favorite:false,
    star:4.5,
    tags:['Fastfood','Berger','Lunch'],
    imageUrl:'/assets/berger.jpg',
    cookTime:'10-20',
    origins:['italy']
      },
      {
        id:2,
    price:20,
    name:'Bhujiya',
    favorite:false,
    star:4.6,
    tags:['Fastfood','Bhujiya','Lunch'],
    imageUrl:'/assets/bhujiya.jpg',
    cookTime:'10-20',
    origins:['italy']
      },
      {
        id:3,
    price:6,
    name:'Dosa',
    favorite:false,
    star:4.8,
    tags:['Fastfood','Dosa','Lunch'],
    imageUrl:'/assets/dosa.jpg',
    cookTime:'10-20',
    origins:['Punjab']
      },
      {
        id:4,
    price:10,
    name:'FrenchFries',
    favorite:false,
    star:4.9,
    tags:['Fastfood','FrenchFries','Lunch'],
    imageUrl:'/assets/frenchFries.jpg',
    cookTime:'10-20',
    origins:['indian']
      },
      {
        id:5,
    price:10,
    name:'Panipuri',
    favorite:false,
    star:5.0,
    tags:['Fastfood','Panipuri','Lunch'],
    imageUrl:'/assets/panipuri.jpg',
    cookTime:'10-20',
    origins:['indian']
      },
      {
        id:6,
    price:10,
    name:'Pizza Hut',
    favorite:false,
    star:4.3,
    tags:['Fastfood','Pizza','Lunch'],
    imageUrl:'/assets/pizza.jpg',
    cookTime:'10-20',
    origins:['italy']
      },
      {
        id:7,
    price:10,
    name:'Roll',
    favorite:false,
    star:4.1,
    tags:['Fastfood','Roll','Lunch'],
    imageUrl:'/assets/roll.jpg',
    cookTime:'10-20',
    origins:['italy']
      },
      {
        id:8,
    price:10,
    name:'Samosa',
    favorite:true,
    star:4.7,
    tags:['Fastfood','Samosa','Lunch'],
    imageUrl:'/assets/samosa.jpg',
    cookTime:'10-20',
    origins:['italy']
      }       
    ];    
  }
}
