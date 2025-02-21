import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { AuthsModule } from './auths/auths.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    UsersModule,
    PostsModule,
    AuthsModule,

    // Connecting NestJS to PostgreSQL with TypeORM
    TypeOrmModule.forRootAsync({
      // forRootAsync => help to convert database connection into asynchronous connection
      imports: [],
      inject: [],
      useFactory: () => ({
        type: 'postgres',
        entities: [],
        synchronize: true,
        port: 5432,
        username: 'postgres',
        password: 'jay43733',
        host: 'localhost',
        database: 'udemy-nest',
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
