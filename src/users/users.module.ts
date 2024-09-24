import { Module } from '@nestjs/common';
import { UsersController } from './controller/users/users.controller';
import { AuthController } from './controller/auth/auth.controller';
import { UsersService } from './services/users/users.service';

@Module({
  controllers: [UsersController, AuthController],
  providers: [UsersService]
})
export class UsersModule {}
