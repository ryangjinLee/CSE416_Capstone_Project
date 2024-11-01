import { Module } from '@nestjs/common';
import { StateGeoService } from './state-geo.service';
import { StateGeoController } from './state-geo.controller';
import { MongoDBService } from '../mongo-db/mongo-db.service';

@Module({
  controllers: [StateGeoController],
  providers: [StateGeoService, MongoDBService],
})
export class StateGeoModule {}
