import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongoDBService } from './mongo-db/mongo-db.service';
import { StateGeoModule } from './state-geo/state-geo.module';
import { BoxplotModule } from './boxplot/boxplot.module';
import { PartyModule } from './party/party.module';
import { MapModule } from './map/map.module';

@Module({
  imports: [
    StateGeoModule,
    BoxplotModule,
    PartyModule,
    MapModule,
  ],
  controllers: [AppController],
  providers: [AppService, MongoDBService],
})
export class AppModule {}
