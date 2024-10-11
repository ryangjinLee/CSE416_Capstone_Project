import { Injectable } from '@nestjs/common';
import { MongoDBService } from '../mongo-db/mongo-db.service';

@Injectable()
export class CountyGeoService {
  constructor(private readonly mongoDBService: MongoDBService) {}

  async getCountyGeoData(countyName: string) {
    const countyGeoData = await this.mongoDBService.findAll(countyName);

    return countyGeoData;
  }

  async getCountyData(stateName: string, whereQuery: any) {
    const stateInfo = await this.mongoDBService.findOne(stateName, whereQuery);

    return stateInfo;
  }
}
