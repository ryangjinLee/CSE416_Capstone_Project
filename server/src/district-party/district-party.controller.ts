import { Controller, Get, Param } from '@nestjs/common';
import { DistrictPartyService } from './district-party.service';

@Controller('district-party')
export class DistrictPartyController {
  constructor(private readonly districtPartyService: DistrictPartyService) {}

  @Get()
  findAll() {
    return this.districtPartyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.districtPartyService.findOne(+id);
  }
}
