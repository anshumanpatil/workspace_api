import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addProduct',
  templateUrl: './addProduct.component.html'
})
export class AddProduct implements OnInit {
    product:any = {
            catagory_id:'',
            price:2000,
            brand:'',
            genName:''
    }
    catagories:any;
  constructor(private __productService:ProductService, private __router:Router) { }

  ngOnInit() {
      this.__productService.getCatagories().subscribe(catagories=>{
          console.log('__productService catagories',catagories)
          this.catagories = catagories;
      })
  }
  
  backToGrid(){
      this.__router.navigate(['/dashboard']);
  }
  
  onAddProductSubmit(){
      console.log(this.product)
      this.__productService.addProduct(this.product).subscribe(products=>{
          if(products.success){
              alert("Product added successfully !!")
              this.__router.navigate(['/dashboard']);
          }else{
              alert("Error in adding product !!")
          }
          console.log('__productService addProduct',products)
      })
  }
}
