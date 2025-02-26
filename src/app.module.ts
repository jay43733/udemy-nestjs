import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { AuthsModule } from './auths/auths.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';
import { TagsModule } from './tags/tags.module';
import { MetaOptionsModule } from './meta-options/meta-options.module';

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
        // entities: [User],
        autoLoadEntities: true, // Use to Auto load Entity to Database and No need to import entity in each module
        synchronize: true, // Nest and Database given will be updated automatically, no need to migrate table
        port: 5432,
        username: 'postgres',
        password: 'jay43733',
        host: 'localhost',
        database: 'udemy-nest',
      }),
    }),

    TagsModule,

    MetaOptionsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
