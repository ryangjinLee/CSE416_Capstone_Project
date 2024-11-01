import { Controller, Get, Param } from '@nestjs/common';
import { StateGeoService } from './state-geo.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('StateGeo')
@Controller('state-geo')
export class StateGeoController {
  constructor(private readonly countyGeoService: StateGeoService) {}

  @Get('/')
  async getAllStateData() {
    const allStateData =
      await this.countyGeoService.getStateGeoData('countyGeo');

    return allStateData;
  }

  // TODO: NY, MS, CA 만 받도록 수정
  @Get('/:state')
  async getStateData(@Param('state') stateName: string) {
    const stateData = await this.countyGeoService.getStateData('countyGeo', {
      name: stateName,
    });

    return stateData;
  }
}
