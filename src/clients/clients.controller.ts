import { Controller, Get } from '@nestjs/common';
import { ClientsService } from './clients.service';

@Controller('clients')
export class ClientsController {
  constructor(private clientsSevice: ClientsService) {}
  @Get()
  findAll() {
    return this.clientsSevice.findAll();
  }
}
