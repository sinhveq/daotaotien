import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ModalModule } from 'ngx-bootstrap';
import { MatTableModule,MatDialogModule,MatInputModule,MatButtonModule} from '@angular/material';
import { FormsModule }      from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import {GiaovienApiService} from './api/giaovien-api-service';
import {SinhVienApiService} from './api/sinhvien-api.service';
import { GiaovienComponent} from './component/giaovien/giaovien.component';
import {BottomSheetOverviewExampleSheet} from './component/giaovien/BottomSheetOverviewExampleSheet';
import {MatChipsModule} from '@angular/material/chips';
import { BsModalService } from 'ngx-bootstrap/modal';
import {GiaoVienService} from './service/giaovien.service';
@NgModule({
  declarations: [
    AppComponent,
    GiaovienComponent,
    BottomSheetOverviewExampleSheet,
  ],
  imports: [
    ModalModule.forRoot(),
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatChipsModule,
    MatDialogModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    HttpClientInMemoryWebApiModule.forRoot(
      GiaovienApiService
    ),
  ],
  entryComponents: [GiaovienComponent, BottomSheetOverviewExampleSheet],
  providers: [BsModalService,GiaoVienService],
  bootstrap: [AppComponent]
})
export class AppModule { }
