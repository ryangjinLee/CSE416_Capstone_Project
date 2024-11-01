import { Injectable } from '@nestjs/common';
import { MongoDBService } from '../mongo-db/mongo-db.service';

@Injectable()
export class BoxplotService {
  constructor(private readonly mongoDBService: MongoDBService) {}

  async getStateDistrictingBoxPlot(
    stateName: string,
    districtingOption: string,
  ) {
    return await this.mongoDBService.findOne(
      'boxplot',
      {
      name: `${stateName}_${districtingOption}`,
    });
  }
}
