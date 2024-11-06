import { Module } from '@nestjs/common';
import { EthnicityService } from './ethnicity.service';
import { EthnicityController } from './ethnicity.controller';
import { MongoDBService } from '../mongo-db/mongo-db.service';

@Module({
  controllers: [EthnicityController],
  providers: [EthnicityService, MongoDBService],
})
export class EthnicityModule {}
