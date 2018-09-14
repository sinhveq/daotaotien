import { InMemoryDbService } from 'angular-in-memory-web-api';
export class SinhVienApiService implements InMemoryDbService {
  constructor(){
    console.log(this.createDb);
  }
  createDb() {
    const sinhViens = [
      { id: 1,idGV: 11,name: 'Nguyễn Thiên Sinh' },
      { id: 2,idGV: 12,name: 'Nguyễn Công Chức' },
    ];
    return {sinhViens};
  }
}
