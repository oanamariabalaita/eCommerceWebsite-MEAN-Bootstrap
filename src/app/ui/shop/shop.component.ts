import { Component, OnInit } from '@angular/core';
import { ApiService} from '../../api.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  
  this.apiService.getProducts().subscribe((products) => {
  console.log(products);
   });
  }
  

  
}
