import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  classes: string[] = ['parent'];
  @Input()
  product: any;

  _colorId: number = 0;

  @Input()
  set colorId(colorId: number) {
    this._colorId = colorId;
    this.classes.push(`card${colorId}`);
  }

  constructor() { }
}
