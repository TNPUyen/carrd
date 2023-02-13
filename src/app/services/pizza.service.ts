import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  pizzas = [
    {
      id: 1,
      title: 'Pizza Bò Beefsteak Phô Mai Kiểu New York - New York CheeseSteak',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies tincidunt, nisl nisl aliquet nisl, eget aliquet nunc nisl eget nisl. Donec auctor, nisl eget ultricies tincidunt, nisl nisl aliquet nisl, eget aliquet nunc nisl eget nisl.',
      author: 'Khoai',
      photoURL: 'https://img.dominos.vn/Menu-PC_LTO-NewYork.jpg',
      price: 110000,
    },
    {
      id: 2,
      title: 'Pizza Lạp Xưởng Xốt Trứng Muối Mayonnaise - Saigon Mania',
      content: 'Content 2',
      author: 'Khoai',
      photoURL: 'https://img.dominos.vn/pizza-lap-xuong-2k.jpg',
      price: 100000,
    },
    {
      id: 3,
      title: 'Pizza 5 Loại Thịt Thượng Hạng - Meat Lovers',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies tincidunt, nisl nisl aliquet nisl, eget aliquet nunc nisl eget nisl. Donec auctor, nisl eget ultricies tincidunt, nisl nisl aliquet nisl, eget aliquet nunc nisl eget nisl.',
      author: 'Khoai Mỡ',
      photoURL: 'https://img.dominos.vn/Meat-lover-Pizza-5-Loai-Thit-Thuong-Hang.jpg',
      price: 100000,
    },
    {
      id: 4,
      title: 'Pizza Hải Sản Nhiệt Đới  Xốt Tiêu - Pizzamin Sea',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies tincidunt, nisl nisl aliquet nisl, eget aliquet nunc nisl eget nisl. Donec auctor, nisl eget ultricies tincidunt, nisl nisl aliquet nisl, eget aliquet nunc nisl eget nisl.',
      author: 'Khoai Mỡ',
      photoURL: 'https://img.dominos.vn/Pizzaminsea-Hai-San-Nhiet-Doi-Xot-Tieu.jpg',
      price: 100000,
    },
  ]

  cart: any[] = [];



  constructor() { }
}
