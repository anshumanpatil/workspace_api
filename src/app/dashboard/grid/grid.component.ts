import { Component, OnInit, ViewChild  } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ProductService } from '../../services/product.service';
import { AgGridNg2 } from 'ag-grid-angular';
import { Router } from '@angular/router';
//import { MatDialog, MatDialogRef } from '@angular/material';
//import { AddDialog } from '../addDialog/addDialog.component';
@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html'
})
export class GridComponent implements OnInit {
    @ViewChild('agGrid') agGrid: AgGridNg2;
    //fileNameDialogRef: MatDialogRef<AddDialog>;
    columnDefs = [
        {headerName: 'Generic Name', field: 'genName', checkboxSelection: true, filter: "agTextColumnFilter" },
        {headerName: 'Brand', field: 'brand', width: 200, filter: "agTextColumnFilter" },
        {headerName: 'Price', field: 'price', filter: "agNumberColumnFilter"},
        {headerName: 'Category', field: 'category', filter: "agTextColumnFilter"},
        {headerName: 'id', field: 'id', hide : true}
    ];

    rowData = [];

  constructor(private __userService:UserService, private __router:Router, private __productService:ProductService/*, private dialog: MatDialog*/) { }

  ngOnInit() {
      console.log("this.__userService.user",this.__userService.user)
      this.__productService.getProducts().subscribe(products=>{
          if(products.length) this.rowData = products[0];
          console.log('__productService getProducts',products)
      })

      
  }
  getSelectedRows() {
      let selectedNodes:any = this.agGrid.api.getSelectedNodes();
      if(selectedNodes.length){
          console.log(selectedNodes, selectedNodes.id)
          let selectedData = selectedNodes.map( node => {
              this.__router.navigate(['/dashboard/modifyProduct/'+node.data.id])
          } );
      }else{
          alert("Please Select Product To Edit !!!")
      }
  }
  addProduct(){
      this.__router.navigate(['/dashboard/addProduct']);
  }
}
