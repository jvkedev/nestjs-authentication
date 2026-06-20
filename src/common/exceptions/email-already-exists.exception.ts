import { ConflictException } from '@nestjs/common';

export class EmailAlreadyExistsException extends ConflictException {
  constructor() {
    super({
      statusCode: 409,
      error: 'Conflict',
      errorCode: 'EMAIL_ALREADY_EXISTS',
      message: 'Email already exists',
    });
  }
}
