import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StatesModule } from './states/states.module';
import { MongoDBService } from './mongo-db/mongo-db.service';

@Module({
  imports: [StatesModule],
  controllers: [AppController],
  providers: [AppService, MongoDBService],
})
export class AppModule {}
