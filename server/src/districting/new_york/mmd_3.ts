import { Controller, Get } from '@nestjs/common';
import { DistrictPartyService } from './district-party.service';

@Controller('districting/new_york')
export class DistrictPartyController {
  constructor(private readonly districtPartyService: DistrictPartyService) {}

  @Get('mmd_3')
  getMMD3Data() {
    return this.districtPartyService.findOne(3); // Fetch MMD 3 data
  }
}
