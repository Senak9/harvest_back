import { Module } from '@nestjs/common';
import { TransactionsModule } from './transactions/transactions.module';
import { ClientsModule } from './clients/clients.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from './clients/client.entity';
import { Transaction } from './transactions/transaction.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TransactionsModule,
    ClientsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      entities: [Client, Transaction],
      synchronize: true,
      username: process.env.PGUSER,
      password: process.env.PGPASSWORD,
      host: process.env.PGHOST.toString(),
      database: process.env.PGDATABASE,
      port: Number(process.env.PGPORT),
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
