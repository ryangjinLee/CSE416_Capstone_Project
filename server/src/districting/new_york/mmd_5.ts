import { Controller, Get } from '@nestjs/common';
import { DistrictPartyService } from './district-party.service';

@Controller('districting/new_york')
export class DistrictPartyController {
  constructor(private readonly districtPartyService: DistrictPartyService) {}

  @Get('mmd_5')
  getMMD5Data() {
    return this.districtPartyService.findOne(5); // Fetch MMD 5 data
  }
}
