import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { PizzaService } from 'src/app/services/pizza.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, AfterViewInit {
  @ViewChild('container') cardList: any;


  constructor(public pizzaService: PizzaService, public productService: ProductService) { }
  ngAfterViewInit(): void {


  }
  ngOnInit(): void {

  }

  // addToCart(pizza: any){
  //   this.pizzaService.cart.push(pizza);
  //   console.log(pizza);
  // }


}
