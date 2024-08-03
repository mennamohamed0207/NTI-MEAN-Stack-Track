import { Component } from '@angular/core';
import { DataService } from '../dataservices/data.service';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrl: './our-services.component.css',
  providers: [],
})
export class OurServicesComponent {
  constructor(private _dataService: DataService) {}
  products: {
    userId:number;
    title: string;
    price: number;
    description: string;
    category: string;
    images: string[];
    rating: number;
    stock: number;
    brand: string;
    discountPercentage:number;

  }[] = [];
  ngOnInit(): void {
    this._dataService.getProducts().subscribe((data) => {
      this.products = data['products'];
      // console.log(this.products);
    });
  }
  addProduct() {
    this._dataService
      .addProduct({ 
        userId: 2,
        title: 'Product 1',
        price: 10,
        description: 'This is product 1',
        category: 'Category 1',
        images: ['image1.jpg', 'image2.jpg'],
        rating: 4.5,
        stock: 100,
        brand: 'Brand 1',
        discountPercentage: 10
      })
      .subscribe((data) => {
        console.log(data);
      });
  }
}
