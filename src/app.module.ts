import { Module, Logger } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    TypeOrmModule.forRootAsync({
      inject: [ConfigService],

      useFactory: (configService: ConfigService) => {
        const logger = new Logger('Database');

        const host = configService.get<string>('DB_HOST');
        const port = configService.get<number>('DB_PORT');
        const database = configService.get<string>('DB_NAME');

        logger.log(
          `Initializing PostgreSQL connection (${database}) on ${host}:${port}`,
        );

        return {
          type: 'postgres',

          host,
          port,
          username: configService.get('DB_USERNAME'),
          password: configService.get('DB_PASSWORD'),
          database,

          autoLoadEntities: true,
          synchronize: true,

          logging: ['error', 'warn'],
        };
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
