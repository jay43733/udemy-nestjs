import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { GetUserParamDto } from '../dtos/get-user-param.dto';
import { AuthsService } from 'src/auths/auths.service';

@Injectable()
export class UsersService {
  constructor(
    @Inject(forwardRef(() => AuthsService))
    private readonly authsService: AuthsService,
  ) {}

  public findAll(
    getUserParamDto: GetUserParamDto,
    limit: number,
    page: number,
  ) {
    const isAuth = this.authsService.isAuth();
    console.log(isAuth);
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
