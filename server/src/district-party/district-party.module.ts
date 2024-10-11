import { Module } from '@nestjs/common';
import { DistrictPartyService } from './district-party.service';
import { DistrictPartyController } from './district-party.controller';

@Module({
  controllers: [DistrictPartyController],
  providers: [DistrictPartyService],
})
export class DistrictPartyModule {}
