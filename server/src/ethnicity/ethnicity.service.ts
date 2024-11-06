import { Injectable } from '@nestjs/common';
import { MongoDBService } from '../mongo-db/mongo-db.service';
import { COLLECTIONS } from '../constants';

@Injectable()
export class EthnicityService {
  constructor(private readonly mongoDBService: MongoDBService) {}

  async getDistrictEthnicityJSON(districtName: string) {
    const whereQuery = { name: districtName };

    return await this.mongoDBService.findOne(COLLECTIONS.ETHNICITY, whereQuery);
  }
}
