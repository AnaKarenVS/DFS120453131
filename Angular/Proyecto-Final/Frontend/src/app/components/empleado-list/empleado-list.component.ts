import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Empleado } from 'src/app/model/empleado.model';
import { EmpleadoService } from './../../services/empleado.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxBootstrapConfirmService } from 'ngx-bootstrap-confirm';
import { ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.css']
})
export class EmpleadoListComponent implements OnInit {
  constructor(private empleadoService: EmpleadoService, private modalService: NgbModal, 
    private ngxBootstrapConfirmService: NgxBootstrapConfirmService,
    private _route: ActivatedRoute, private _router: Router) { }

  listaEmpleados : any;
  emptyCard: boolean = true;
  infoEmpleado = [];
  empleado : any;

  ngOnInit(): void {
    this.getEmpleados();
  }

  getEmpleados(){
    this.empleadoService.getEmpleados().subscribe((response)=>{
      this.listaEmpleados = response;
    }); 
  }



  deleteEmpleado(item: any, index: any){
    this.empleadoService.deleteEmpleados(item._id).subscribe((response)=>{
      console.log(response);
      this.listaEmpleados.splice(index, 1);
      this.getEmpleados();
    });
  }
  
  open(content, data) {
    this.modalService.open(content);
     this.infoEmpleado = data;
  }

  openAlta(contentAlta){
    this.modalService.open(contentAlta);
  }

}
