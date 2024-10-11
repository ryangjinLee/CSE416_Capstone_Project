import { Controller, Get, Param } from '@nestjs/common';
import { CountyGeoService } from './county-geo.service';
import { ApiTags } from "@nestjs/swagger";

@ApiTags('CountyGeo')
@Controller('county-geo')
export class CountyGeoController {
  constructor(private readonly countyGeoService: CountyGeoService) {}

  @Get('/')
  async getAllCountyData() {
    const allCountyData =
      await this.countyGeoService.getCountyGeoData('countyGeo');

    return allCountyData;
  }

  // TODO: NY, MS, CA 만 받도록 수정
  @Get('/:state')
  async getCountyData(@Param('state') stateName: string) {
    const countyData = await this.countyGeoService.getCountyData('countyGeo', {
      name: stateName,
    });

    return countyData;
  }
}
