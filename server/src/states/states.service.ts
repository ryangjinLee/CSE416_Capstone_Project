import { Injectable } from '@nestjs/common';
import { MongoDBService } from '../mongo-db/mongo-db.service';

@Injectable()
export class StatesService {
  constructor(private readonly mongoDBService: MongoDBService) {}

  async getCountyGeoData(countyName: string) {
    const countyGeoData = await this.mongoDBService.findAll(countyName);

    return countyGeoData;
  }

  async findOne(stateName: string, whereQuery: any) {
    const stateInfo = await this.mongoDBService.findOne(stateName, whereQuery);

    return stateInfo;
  }

  // update(id: number, updateStateDto: UpdateStateDto) {
  //   return `This action updates a #${id} state`;
  // }
  //
  // remove(id: number) {
  //   return `This action removes a #${id} state`;
  // }
}
