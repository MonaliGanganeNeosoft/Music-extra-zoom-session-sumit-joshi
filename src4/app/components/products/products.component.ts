import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  proData:any;
  constructor(private proser:ProductService) { }

  ngOnInit(): void {
     this.proser.getAllProducts()
     .subscribe((res:any)=>{
        this.proData=res;
     })
  }
  delpro(id:any){
    if(confirm("Do u want to delete ?")){
        this.proser.deleteProduct(id)
        .subscribe((res:any)=>{
           if(res){
               alert("Product Delete");
               let data=this.proData.filter((pro:any)=> pro.id!=id);
               this.proData=data;
           }
        })
    }
  }

}
