import { Controller, Get } from '@nestjs/common';
import { DistrictPartyService } from './district-party.service';

@Controller('districting/new_york')
export class DistrictPartyController {
  constructor(private readonly districtPartyService: DistrictPartyService) {}

  @Get('mmd_2')
  getMMD2Data() {
    return this.districtPartyService.findOne(2); // Fetch MMD 2 data
  }
}
