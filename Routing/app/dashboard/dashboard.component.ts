import { Component, OnInit } from '@angular/core';
import { DataService } from '../dataservices/data.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{
  products: any[] = [];

  constructor(private router: Router,private dataServ: DataService,private auth:AuthService) { }

  ngOnInit(): void {
    this.dataServ.getProducts().subscribe(data => {
      this.products = data;
      console.log(this.products);
    });
  }

  postProduct(){
    let product = { title: 'product 1', body: 'my product', userId: 1 };
   
      this.dataServ.addProduct(product).subscribe(data => {
         console.log(data)
      });
    
  }

  logout(){
    this.auth.logout();
    this.router.navigate(['/login']);
  }

}
