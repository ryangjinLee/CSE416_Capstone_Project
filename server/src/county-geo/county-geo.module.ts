import { Module } from '@nestjs/common';
import { CountyGeoService } from './county-geo.service';
import { CountyGeoController } from './county-geo.controller';
import { MongoDBService } from '../mongo-db/mongo-db.service';

@Module({
  controllers: [CountyGeoController],
  providers: [CountyGeoService, MongoDBService],
})
export class CountyGeoModule {}
