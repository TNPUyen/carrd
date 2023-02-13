import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
    let dem = 1;
    console.log(this.productService.items.length);
    console.log(this.cardList?.nativeElement);
    if (this.cardList != undefined) {


      for (let i = 0; i < this.productService.items.length; i++) {
        //create ngContent for card


        let parent = document.createElement('div');
        parent.classList.add('parent');
        let card = document.createElement('div');
        card.classList.add('card');
        let content_box = document.createElement('div');
        content_box.classList.add('content-box');
        let card_title = document.createElement('h1');
        card_title.classList.add('card-title');
        let card_content = document.createElement('p');
        card_content.classList.add('card-content');
        let see_more = document.createElement('span');
        see_more.classList.add('see-more');
        let date_box = document.createElement('div');
        date_box.classList.add('date-box');
        let date = document.createElement('span');
        date.classList.add('date');
        let month = document.createElement('span');
        month.classList.add('month');

        this.cardList.nativeElement.appendChild(parent);
        parent.appendChild(card);
        card.appendChild(content_box);
        content_box.appendChild(card_title);
        content_box.appendChild(card_content);
        content_box.appendChild(see_more);
        card.appendChild(date_box);
        date_box.appendChild(month);
        date_box.appendChild(date);

        card_title.innerHTML = this.productService.items[i].title;
        card_content.innerHTML = this.productService.items[i].content;
        see_more.innerHTML = 'See More';
        month.innerHTML = this.productService.items[i].month;
        date.innerHTML = this.productService.items[i].day;

        //how to check 1 2 3 4 index in a cycle
        if (dem == 1) {
          parent.classList.add('card1');
          dem++;
        } else if (dem == 2) {
          parent.classList.add('card2');
          dem++;
        } else if (dem == 3) {
          parent.classList.add('card3');
          dem++;
        } else if (dem == 4) {
          parent.classList.add('card4');
          dem = 1;
        }
      }
    }
  }
  ngOnInit(): void {

  }

  // addToCart(pizza: any){
  //   this.pizzaService.cart.push(pizza);
  //   console.log(pizza);
  // }


}
