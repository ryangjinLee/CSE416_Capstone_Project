import { Module } from '@nestjs/common';
import { BoxplotService } from './boxplot.service';
import { BoxplotController } from './boxplot.controller';
import { MongoDBService } from '../mongo-db/mongo-db.service';

@Module({
  controllers: [BoxplotController],
  providers: [BoxplotService, MongoDBService],
})
export class BoxplotModule {}
