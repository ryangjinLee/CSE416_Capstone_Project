import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DistrictPartyService } from './district-party.service';
import { CreateDistrictPartyDto } from './dto/create-district-party.dto';
import { UpdateDistrictPartyDto } from './dto/update-district-party.dto';

@Controller('district-party')
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

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.districtPartyService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDistrictPartyDto: UpdateDistrictPartyDto) {
    return this.districtPartyService.update(+id, updateDistrictPartyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.districtPartyService.remove(+id);
  }
}
