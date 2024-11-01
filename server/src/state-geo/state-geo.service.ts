import { Injectable } from '@nestjs/common';
import { MongoDBService } from '../mongo-db/mongo-db.service';

@Injectable()
export class StateGeoService {
  constructor(private readonly mongoDBService: MongoDBService) {}

  async getStateGeoData(stateName: string) {
    const stateGeoData = await this.mongoDBService.findAll(stateName);

    return stateGeoData;
  }

  async getStateData(stateName: string, whereQuery: any) {
    const stateInfo = await this.mongoDBService.findOne(stateName, whereQuery);

    return stateInfo;
  }
}
