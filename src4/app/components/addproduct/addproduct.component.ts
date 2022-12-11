import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  formData={pname:'',price:'',quantity:''}
  constructor(private proser:ProductService,private router:Router) { }

  ngOnInit(): void {
  }
  postData(){
     this.proser.postAddProduct(this.formData)
     .subscribe((res)=>{
       if(res){
          alert("Product Added");
          this.router.navigate(["/products"]);
       }
     })
  }
}
