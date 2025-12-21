import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class DiskService {
  constructor(private powerService: PowerService) {}

  getData() {
    console.log('Disk requires 20 watts to read data');

    this.powerService.supplyPower(20, 'Disk');
    return 'Data from disk';
  }
}
