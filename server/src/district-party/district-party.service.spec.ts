import { Test, TestingModule } from '@nestjs/testing';
import { DistrictPartyService } from './district-party.service';

describe('DistrictPartyService', () => {
  let service: DistrictPartyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DistrictPartyService],
    }).compile();

    service = module.get<DistrictPartyService>(DistrictPartyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
