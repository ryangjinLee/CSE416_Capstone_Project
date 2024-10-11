import { Controller, Get, Param } from '@nestjs/common';
import { CountyGeoService } from './county-geo.service';

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
  @Get('/:county')
  async getCountyData(@Param('county') countyName: string) {
    const countyData = await this.countyGeoService.getCountyData('countyGeo', {
      name: countyName,
    });

    return countyData;
  }
}
