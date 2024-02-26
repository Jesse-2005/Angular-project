import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {
  // name: string = 'mark';
  addToCart = 0;

 product = {

  name: 'iphone',
  color: 'green',
  price: 999,
  discount: 5,
  inStock: 10,
  pImage:'../../assets/images/images.jpg'
 }

 getDiscountPrice(){
   return this.product.price - ( this.product.price * this.product.discount / 100)
 }

 onNameChange(event:any)
 {
  // this.name = event.target.value;
 }

 increament()
 {
    if(this.addToCart <10)
    {
      this.addToCart ++;
    }
 }

 decreament()
 {
    if(this.addToCart > 0){
      this.addToCart --;
 }
}
listOfString: string[] = ['Jesse', 'Anjorin', 'Steve', 'Joel'];
}