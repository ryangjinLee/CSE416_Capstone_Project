import { Injectable } from '@nestjs/common';
import { MongoDBService } from '../mongo-db/mongo-db.service';

@Injectable()
export class BoxplotService {
  constructor(private readonly mongoDBService: MongoDBService) {}

  async getStateDistrictingBoxPlot(stateName: string, districting: string) {
    const countyDistrictingBoxPlot = await this.mongoDBService.findOne(
      'boxplots',
      {
        name: `${stateName}_${districting}`,
      },
    );

    return countyDistrictingBoxPlot;
  }
}
