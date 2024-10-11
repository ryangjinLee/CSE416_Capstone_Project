import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DistrictPartyService } from '../district-party.service';
import { CreateDistrictPartyDto } from '../dto/create-district-party.dto';
import { UpdateDistrictPartyDto } from '../dto/update-district-party.dto';

@Controller('district-party/total_Data')
export class DistrictPartyController {
  constructor(private readonly districtPartyService: DistrictPartyService) {}

  @Post()
  create(@Body() createDistrictPartyDto: CreateDistrictPartyDto) {
    return this.districtPartyService.create(createDistrictPartyDto);
  }

  @Get()
  findAll() {
    return this.districtPartyService.findAll();
  }

  @Get('mmd5')
  getMMD5Data() {
    return this.districtPartyService.findOne(4); // Fetch MMD 5 data
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.districtPartyService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDistrictPartyDto: UpdateDistrictPartyDto,
  ) {
    return this.districtPartyService.update(+id, updateDistrictPartyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.districtPartyService.remove(+id);
  }
}
