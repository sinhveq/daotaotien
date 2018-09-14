import { Component, OnInit, Input } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef,MatDialog} from '@angular/material';
@Component({
    selector: 'bottom-sheet-overview-example-sheet',
    templateUrl: 'bottom-sheet-overview-example-sheet.html',
  })
  export class BottomSheetOverviewExampleSheet {
    @Input('dataSource') dataSource: any;
  
    constructor(){
      console.log(this.dataSource);
    }
  }