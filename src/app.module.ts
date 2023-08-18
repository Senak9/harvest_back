import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TransactionsModule } from './transactions/transactions.module';
import { ClientsModule } from './clients/clients.module';

@Module({
  imports: [TransactionsModule, ClientsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
