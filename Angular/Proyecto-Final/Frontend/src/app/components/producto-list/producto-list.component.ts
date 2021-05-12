import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductoService } from './../../services/producto.service';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.css']
})
export class ProductoListComponent implements OnInit {

  constructor(private productoService: ProductoService, private modalService: NgbModal) { }
  listaProductos: any;

  ngOnInit(): void {
    this.getProductos();
  }

  getProductos(){
    this.productoService.getProductos().subscribe((response)=>{
      this.listaProductos = response;
    }); 
  }
  openAgregar(contentAlta){
    this.modalService.open(contentAlta);
  }

  deleteProducto(item, index){
    this.productoService.deleteProducto(item._id).subscribe((response)=>{
      alert('Producto Eliminado');
    });
    this.listaProductos.splice(index, 1);
    this.getProductos();
  }
  
  editProducto(item){

  }

}
