import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
@Input()


product :
 {
  id: number,
  name: string,
  description: string,
  brand: string,
  gender: string,
  discount?: number,
  category: string,
  size: string,
  color: string[],
  price: number,
  is_in_inventory: boolean,
  items_left: number,
  imageURL: string,
  slug: string,
};

}
