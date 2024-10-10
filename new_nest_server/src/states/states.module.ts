import { Module } from '@nestjs/common';
import { StatesService } from './states.service';
import { StatesController } from './states.controller';
import { MongoDBService } from '../mongo-db/mongo-db.service';

@Module({
  controllers: [StatesController],
  providers: [StatesService, MongoDBService],
})
export class StatesModule {}
