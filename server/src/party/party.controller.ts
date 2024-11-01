import { Controller, Get, Param } from '@nestjs/common';
import { PartyService } from './party.service';

@Controller('party')
export class PartyController {
  constructor(private readonly partyService: PartyService) {}

  @Get('/:stateName')
  getDistrictPartyInfo(@Param('stateName') stateName: string) {
    return this.partyService.getDistrictPartyInfo(stateName);
  }
}
