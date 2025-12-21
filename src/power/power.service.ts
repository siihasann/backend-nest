import { Injectable } from '@nestjs/common';

@Injectable()
export class PowerService {
  supplyPower(watts: number, module: string) {
    console.log(`Supplied ${watts} watts of power for ${module}`);
  }
}
