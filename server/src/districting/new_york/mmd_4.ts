import { Controller, Get } from '@nestjs/common';
import { DistrictPartyService } from './district-party.service';

@Controller('districting/new_york')
export class DistrictPartyController {
  constructor(private readonly districtPartyService: DistrictPartyService) {}

  @Get('mmd_4')
  getMMD4Data() {
    return this.districtPartyService.findOne(4); // Fetch MMD 4 data
  }
}
