import { PartialType } from '@nestjs/swagger';
import { CreateDistrictPartyDto } from './create-district-party.dto';

export class UpdateDistrictPartyDto extends PartialType(CreateDistrictPartyDto) {}
