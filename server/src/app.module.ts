import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongoDBService } from './mongo-db/mongo-db.service';
import { CountyGeoModule } from './county-geo/county-geo.module';

@Module({
  imports: [CountyGeoModule],
  controllers: [AppController],
  providers: [AppService, MongoDBService],
})
export class AppModule {}
