import { NotFoundException } from '@nestjs/common';

export class UserNotFoundException extends NotFoundException {
  constructor(userId?: string) {
    super({
      statusCode: 404,
      error: 'Not Found',
      errorCode: 'USER_NOT_FOUND',
      message: userId
        ? `User with id ${userId} was not found`
        : `User not found`,
    });
  }
}
