import {
  createParamDecorator,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import type { Request } from 'express';

export const User = createParamDecorator(
  (_data: unknown, ctx: ExecutionContext) => {
    const user = ctx.switchToHttp().getRequest<Request>().user;

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  },
);
