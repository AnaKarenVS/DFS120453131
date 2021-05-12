import { Component, Input, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ServicioService } from './../../services/servicio.service';

@Component({
  selector: 'app-servicio-lista',
  templateUrl: './servicio-lista.component.html',
  styleUrls: ['./servicio-lista.component.css']
})
export class ServicioListaComponent implements OnInit {

  constructor(private servicioService: ServicioService, private modalService: NgbModal) { }
  listaServicios: any;
  @Input() itemRow : any;

  ngOnInit(): void {
    this.getServicios();
    console.log(this.itemRow);
  }

  getServicios(){
    this.servicioService.getServicios().subscribe((response)=>{
      this.listaServicios = response;
    });
  }
  
  deleteServicio(item: any, index: any){
    this.servicioService.deleteServicio(item._id).subscribe((response)=>{
    });
    this.listaServicios.splice(index, 1);
    this.getServicios();
  }

  openAlta(contentAlta){
    this.modalService.open(contentAlta);
  }
}
