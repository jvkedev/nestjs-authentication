import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

import { EmailAlreadyExistsException } from '../common/exceptions/email-already-exists.exception';
import { UserNotFoundException } from '../common/exceptions/user-not-found.exception';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const existingUser = await this.userRepository.findOne({
      where: { email: createUserDto.email },
    });

    if (existingUser) throw new EmailAlreadyExistsException();

    const user = this.userRepository.create(createUserDto);
    return await this.userRepository.save(user);
  }

  async findAll() {
    return await this.userRepository.find();
  }

  async findOne(id: string) {
    const user = await this.userRepository.findOne({
      where: { id },
    });

    if (!user) throw new UserNotFoundException();

    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    await this.findOne(id);

    await this.userRepository.update(id, updateUserDto);

    return this.findOne(id);
  }

  async remove(id: string) {
    await this.findOne(id);

    await this.userRepository.delete(id);

    return {
      message: 'User deleted successfully',
    };
  }
}
