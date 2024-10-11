import { Injectable } from '@nestjs/common';
import { MongoDBService } from '../mongo-db/mongo-db.service';

@Injectable()
export class BoxplotService {
  constructor(private readonly mongoDBService: MongoDBService) {}

  async getCountyDistrictingBoxPlot(countyName: string, districting: string) {
    const countyDistrictingBoxPlot = await this.mongoDBService.findOne(
      'boxplots',
      {
        name: `${countyName}_${districting}`,
      },
    );

    return countyDistrictingBoxPlot;
  }
}
