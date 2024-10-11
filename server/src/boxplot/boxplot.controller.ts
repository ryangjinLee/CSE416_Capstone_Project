import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BoxplotService } from './boxplot.service';

@Controller('boxplot')
export class BoxplotController {
  constructor(private readonly boxplotService: BoxplotService) {}

  @Get('/:county/:districting')
  async getCountyDistrictingBoxPlot(
    @Param('county') countyName: string,
    @Param('districting') districting: string,
  ) {
    const countyDistrictingBoxPlot =
      await this.boxplotService.getCountyDistrictingBoxPlot(
        countyName,
        districting,
      );
    console.log(countyName, districting);
    console.log(countyDistrictingBoxPlot);
    return countyDistrictingBoxPlot;
  }
}
