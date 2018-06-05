import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-modifyProduct',
  templateUrl: './modifyProduct.component.html'
})
export class ModifyProduct implements OnInit {
    catagories:any;
    product:any = {
            catagory_id:'',
            price:2000,
            brand:'',
            genName:''
    }
    id: number;
    private sub: any;
  constructor(private __productService:ProductService, private __router:Router, private __route: ActivatedRoute) { }

  ngOnInit() {
      this.__productService.getCatagories().subscribe(catagories=>{
          console.log('__productService catagories',catagories)
          this.catagories = catagories;
      })
      
      
      
      this.sub = this.__route.params.subscribe(params => {
          this.id = +params['id'];
          console.log('__route.params.subscribe', this.id)
          this.__productService.getProduct(this.id).subscribe(product=>{
              this.product = product;
              console.log('__productService getProduct(2)',product)
          })
       });
  }
  
  backToGrid(){
      this.__router.navigate(['/dashboard']);
  }
  
  onAddProductSubmit(productForm){
      console.log('product',this.product)
      this.__productService.updateProduct(this.product).subscribe(product=>{
          if(product.success){
              alert("Update Successful !!!")
          }
          this.product = product.product;
          console.log('__productService onAddProductSubmit',product)
      })
  }
  
  deleteProduct(){
      console.log('__productService deleteProduct',this.product)
      this.__productService.deleteProduct(this.product).subscribe(product=>{
          if(product.success){
              alert("Delete Successful !!!")
              this.__router.navigate(['/dashboard']);
          }else{
              alert("Error !!!")
          }
          
      })
  }
}
