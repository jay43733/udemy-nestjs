import { forwardRef, Module } from '@nestjs/common';
import { AuthsService } from './auths.service';
import { AuthsController } from './auths.controller';
import { UsersService } from 'src/users/providers/users.service';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [forwardRef(() => UsersModule)],
  controllers: [AuthsController],
  providers: [AuthsService],
  exports: [AuthsService],
})
export class AuthsModule {}
