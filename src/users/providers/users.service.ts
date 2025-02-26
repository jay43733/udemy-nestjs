import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { GetUserParamDto } from '../dtos/get-user-param.dto';
import { AuthsService } from 'src/auths/auths.service';
import { Repository } from 'typeorm';
import { User } from '../user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from '../dtos/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    // Injecting usersRepository
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  // constructor(
  //   @Inject(forwardRef(() => AuthsService))
  //   private readonly authsService: AuthsService,
  // ) {}

  public async createUser(createUserDto: CreateUserDto) {
    // Check if user exists with the same  email
    const checkUserExists = await this.usersRepository.findOne({
      where: {
        email: createUserDto.email,
      },
    });

    //Handle Exception

    // Create a new user
    let newUser = this.usersRepository.create(createUserDto); // Creating user successfully doesn't mean that it will be saved in database, you need to use save() to insert it into database.
    newUser = await this.usersRepository.save(newUser);
    return newUser;
  }

  public findAll(
    getUserParamDto: GetUserParamDto,
    limit: number,
    page: number,
  ) {
    return [
      {
        firstName: 'Jay',
        lastName: 'Tanakit',
      },
      {
        firstName: 'Jane',
        lastName: 'Tanakorn',
      },
      {
        firstName: 'Jazz',
        lastName: 'Tanakort',
      },
    ];
  }

  public findUserById(id: string | undefined) {
    return {
      id: 1234,
      firstName: 'Jay',
      lastName: 'Tanakit',
    };
  }
}
