import { InMemoryDbService } from 'angular-in-memory-web-api';
export class GiaovienApiService implements InMemoryDbService {
  createDb() {
    const GiaoViens = [
      { id: 11,name: 'gv1' },
      { id: 12,name: 'gv2' },
    ];

    return {GiaoViens};
  }
}