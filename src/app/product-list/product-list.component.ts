import { Component } from '@angular/core';

import { products } from '../products';
import { productos } from '../data/productos';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  //products = products;
  products = productos;

  share() {
    window.alert('The product has been shared!');
  }

  compartir(){
    window.alert("El producto fue compartido");
  }

   onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

   onFa() {
    window.alert('Faaaaa !!!');
  }

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/