import { Module } from '@nestjs/common';
import { MapService } from './map.service';
import { MapController } from './map.controller';
import { MongoDBService } from '../mongo-db/mongo-db.service';

@Module({
  controllers: [MapController],
  providers: [MapService, MongoDBService],
})
export class MapModule {}
