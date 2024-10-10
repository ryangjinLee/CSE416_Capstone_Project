import { Controller, Get, Param } from '@nestjs/common';
import { StatesService } from './states.service';

@Controller('states')
export class StatesController {
  constructor(private readonly statesService: StatesService) {}

  @Get('/')
  async findAllStates() {
    const states = await this.statesService.findAll('states');

    return states;
  }

  @Get('/:name')
  async findExample(@Param('name') name: string) {
    const exampleState = await this.statesService.findOne('states', {
      name: name,
    });

    return exampleState;
  }
}
