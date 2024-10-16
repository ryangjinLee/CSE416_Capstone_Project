import { Controller, Get, Param } from '@nestjs/common';
import { MapService } from './map.service';

@Controller('map')
export class MapController {
  constructor(private readonly mapService: MapService) {}

  @Get('/:state')
  async getStateMapLocation(@Param('state') state: string) {
    return await this.mapService.getStateMapLocation(state);
  }

  @Get('/:state/:districting')
  async getStateDistricting(@Param('state') state: string, @Param('districting') districtingOption: string) {
    return await this.mapService.getStateDistricting(state, districtingOption);
  }
}
