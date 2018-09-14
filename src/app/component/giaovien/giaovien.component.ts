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
  colums: string[] = ['id','name','option','hihi','edit'];
  dataSource: MatTableDataSource<GiaoVien> = new MatTableDataSource<GiaoVien>();
  //dataSource: MatTableDataSource<GiaoVien> = new MatTableDataSource<GiaoVien>();
  constructor(private modalService: BsModalService,private giaoVienService: GiaoVienService){

  }
  ngOnInit(){
    this.getData();
  }
  getData(){
    this.giaoVienService.getDataGiaoVien().subscribe((data:any) => {this.dataSource=data;this.giaoviens = data});
  }
  openModal(template: TemplateRef<any>,giaoVien: GiaoVien = {name:""}) {
    this.giaovien = JSON.parse(JSON.stringify(giaoVien));
    this.modalRef = this.modalService.show(template);
  }
  closeModel(){
    this.modalRef.hide();
  }
  addGV() {
    console.log(this.giaovien);
    let newGiaoVien: GiaoVien = {name: this.giaovien.name};
    this.giaoVienService.addDataGV(newGiaoVien).subscribe(data =>{
        
        this.giaoviens.push(data);
        this.dataSource.data = this.giaoviens;
        this.getData();
        this.closeModel();
    });
  }
  updateGV(gv: GiaoVien) {
    this.giaoVienService.updateGV(gv).subscribe( data => this.getData());
    this.closeModel();
  }

  DeleteGV(giaoVien) {
    this.giaoviens = this.giaoviens.filter(h => h !== giaoVien);
    this.giaoVienService.delete(giaoVien.id).subscribe();
    this.getData();
  }
}
