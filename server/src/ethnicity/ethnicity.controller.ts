import { Controller, Get, Param } from '@nestjs/common';
import { EthnicityService } from './ethnicity.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Ethnicity')
@Controller('ethnicity')
export class EthnicityController {
  constructor(private readonly ethnicityService: EthnicityService) {}

  @Get('/:district')
  @ApiOperation({ summary: 'returns the ethnicity data of given district' })
  getDistrictEthnicityJSON(@Param('district') districtName: string) {
    console.log(districtName);
    return this.ethnicityService.getDistrictEthnicityJSON(districtName);
  }
}
