import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongoDBService } from './mongo-db/mongo-db.service';
import { StateGeoModule } from './state-geo/state-geo.module';
import { BoxplotModule } from './boxplot/boxplot.module';
import { EthnicityModule } from './ethnicity/ethnicity.module';
import { DistrictPartyModule } from './district-party/district-party.module';

@Module({
  imports: [
    StateGeoModule,
    BoxplotModule,
    DistrictPartyModule,
    EthnicityModule,
  ],
  controllers: [AppController],
  providers: [AppService, MongoDBService],
})
export class AppModule {}
