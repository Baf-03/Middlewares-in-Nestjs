import { HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class UsersMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const authorization = req.headers.authorization;
    if (!authorization) {
      throw new HttpException('No authorization token found', HttpStatus.FORBIDDEN);
    }

    if (authorization === 'tokenValueSet') {
      next(); // Only call next here when authorization is valid
    } else {
      throw new HttpException('Invalid code', HttpStatus.FORBIDDEN);
    }
  }
}
