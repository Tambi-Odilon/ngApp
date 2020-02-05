import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
namePerson = 'David';
productName = 'foods';
buttonName = 'wait . . .';
productNumber = 0;
isDisable = true;

  constructor() { 
    setTimeout(
      ()=> {
        this.productName = 'orange',
        this.buttonName = 'change product',
        this.isDisable = false
    },
      2000
    )
  }

  ngOnInit() {
  }

}
