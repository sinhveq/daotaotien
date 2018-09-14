import { InMemoryDbService } from 'angular-in-memory-web-api';
export class GiaovienApiService implements InMemoryDbService {
  createDb() {
    const GiaoViens = [
      { id: 11,name: 'Nguyễn Thiên Sinh' },
      { id: 12,name: 'Trần Quốc' },
      { id: 13,name: 'Nguyễn Công Chức' },
      { id: 14,name: 'Nguyễn Anh Khoa' },
      { id: 15,name: 'Đỗ Ngọc Trung Kiên' },
      { id: 16,name: 'Nguyễn Minh Triết' },
    ];

    return {GiaoViens};
  }
}