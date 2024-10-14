import { Injectable } from '@nestjs/common';
import { MongoDBService } from '../mongo-db/mongo-db.service';

@Injectable()
export class MapService {
  constructor(private readonly mongoDBService: MongoDBService) {}

  async getStateMapLocation(state: string) {
    return await this.mongoDBService.findOne('map', {
      name: state,
    });
  }
}
