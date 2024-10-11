import { Injectable } from '@nestjs/common';
import { CreateDistrictPartyDto } from '../dto/create-district-party.dto';
import { UpdateDistrictPartyDto } from '../dto/update-district-party.dto';

@Injectable()
export class DistrictPartyService {
  create(createDistrictPartyDto: CreateDistrictPartyDto) {
    return 'This action adds a new districtParty';
  }

  findAll() {
    return `This action returns all districtParty`;
  }

  findOne(id: number) {
    return `This action returns a #${id} districtParty`;
  }

  update(id: number, updateDistrictPartyDto: UpdateDistrictPartyDto) {
    return `This action updates a #${id} districtParty`;
  }

  remove(id: number) {
    return `This action removes a #${id} districtParty`;
  }
}
