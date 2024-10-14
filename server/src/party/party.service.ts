import { Injectable } from '@nestjs/common';
import { MongoDBService } from '../mongo-db/mongo-db.service';

@Injectable()
export class PartyService {
  constructor(private readonly mongoDBService: MongoDBService) {}

  async getDistrictPartyInfo(stateName: string) {
    await this.mongoDBService.findOne('districtParty', {
      name: stateName,
    });
  }
}
