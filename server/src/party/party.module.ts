import { Module } from '@nestjs/common';
import { PartyService } from './party.service';
import { PartyController } from './party.controller';
import { MongoDBService } from '../mongo-db/mongo-db.service';

@Module({
  controllers: [PartyController],
  providers: [PartyService, MongoDBService],
})
export class PartyModule {}
