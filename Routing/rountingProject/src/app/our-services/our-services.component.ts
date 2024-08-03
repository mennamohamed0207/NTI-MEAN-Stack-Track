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
}
