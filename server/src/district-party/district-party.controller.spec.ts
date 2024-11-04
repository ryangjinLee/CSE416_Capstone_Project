import { Test, TestingModule } from '@nestjs/testing';
import { DistrictPartyController } from './district-party.controller';
import { DistrictPartyService } from './district-party.service';

describe('DistrictPartyController', () => {
  let controller: DistrictPartyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DistrictPartyController],
      providers: [DistrictPartyService],
    }).compile();

    controller = module.get<DistrictPartyController>(DistrictPartyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
