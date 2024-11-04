import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BoxplotService } from './boxplot.service';
import { ApiTags } from "@nestjs/swagger";

@ApiTags('Boxplot')
@Controller('boxplot')
export class BoxplotController {
  constructor(private readonly boxplotService: BoxplotService) {}

  @Get('/:state/:districting')
  async getCountyDistrictingBoxPlot(
    @Param('state') stateName: string,
    @Param('districting') districting: string,
  ) {
    const stateDistrictingBoxPlot =
      await this.boxplotService.getStateDistrictingBoxPlot(
        stateName,
        districting,
      );
    return stateDistrictingBoxPlot;
  }
}
