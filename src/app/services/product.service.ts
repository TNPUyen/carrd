import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  items = [
    {
      title: 'Phone XL',
      content: 'A large phone with one of the best screens',
      month: 'January',
      day: '1',
    },
    {
      title: 'Phone Mini',
      content: 'A great phone with one of the best cameras',
      month: 'March',
      day: '10',
    },
    {
      title: 'Phone Standard',
      content: 'A great phone with one of the best cameras',
      month: 'February',
      day: '14',
    },
    {
      title: 'Phone Standard',
      content: 'A great phone with one of the best cameras',
      month: 'April',
      day: '30',
    },
    {
      title: 'Phone Standard',
      content: 'A great phone with one of the best cameras',
      month: 'May',
      day: '1',
    },
    {
      title: 'Phone Standard',
      content: 'A great phone with one of the best cameras',
      month: 'June',
      day: '25',
    },
    {
      title: 'Phone Standard',
      content: 'A great phone with one of the best cameras',
      month: 'July',
      day: '29',
    },
    {
      title: 'Phone Standard',
      content: 'A great phone with one of the best cameras',
      month: 'August',
      day: '30',
    },
    {
      title: 'Phone Standard',
      content: 'A great phone with one of the best cameras',
      month: 'September',
      day: '2',
    },
    {
      title: 'Phone Standard',
      content: 'A great phone with one of the best cameras',
      month: 'October',
      day: '12',
    },
    {
      title: 'Phone Standard',
      content: 'A great phone with one of the best cameras',
      month: 'November',
      day: '20',
    },
    {
      title: 'Phone Standard',
      content: 'A great phone with one of the best cameras',
      month: 'December',
      day: '15',
    },
  ]


  constructor() { }
}
