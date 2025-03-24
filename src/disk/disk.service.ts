import { Injectable } from '@nestjs/common';
import { PowerService } from '../power/power.service';

@Injectable()
export class DiskService {
  constructor(private powerService: PowerService) {}
  getData() {
    console.log('Drawing 20 watts of power from powerService');
    this.powerService.supplyPower(20)
  }

}
