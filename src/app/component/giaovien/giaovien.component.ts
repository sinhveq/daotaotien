import { Component, OnInit, Input,TemplateRef  } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef,MatDialog,MatTableDataSource, MatGridTileHeaderCssMatStyler} from '@angular/material';
import {BottomSheetOverviewExampleSheet} from './../giaovien/BottomSheetOverviewExampleSheet';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { GiaoVienService }  from '../../service/giaovien.service' ;
import { Template } from '../../../../node_modules/@angular/compiler/src/render3/r3_ast';
import { Observable } from 'rxjs';
import { GiaoVien } from './../../model/giaovien';


@Component({
  selector: 'app-giaovien',
  templateUrl: './giaovien.component.html',
  styleUrls: ['./giaovien.component.css']
})
 export class GiaovienComponent implements OnInit {

  modalRef: BsModalRef;
  giaoviens: GiaoVien[];
  giaovien: GiaoVien = new GiaoVien();
  colums: string[] = ['id','name','option'];
  dataSource: MatTableDataSource<GiaoVien> = new MatTableDataSource<GiaoVien>();
  //dataSource: MatTableDataSource<GiaoVien> = new MatTableDataSource<GiaoVien>();
  constructor(private modalService: BsModalService,private giaoVienService: GiaoVienService){

  }
  ngOnInit(){
    this.getData();
  }
  getData(){
    this.giaoVienService.getDataGiaoVien().subscribe((data:any) => this.dataSource=data);
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  closeModel(){
    this.modalRef.hide();
  }
  addGV() {
    console.log(this.giaovien);
    this.giaoVienService.addDataGV(this.giaovien).subscribe(data =>{
        console.log(data);
    });
    
  }
}
