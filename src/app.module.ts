import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { UsersMiddleware } from './users/middlewares/users/users.middleware';


@Module({
  imports: [UsersModule],
  controllers: [],
  providers: [],
})

export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer
    .apply(UsersMiddleware)
    .forRoutes({ path: 'users/*', method: RequestMethod.ALL }); 
  }
}
