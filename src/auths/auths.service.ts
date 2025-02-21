import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';

@Injectable()
export class AuthsService {
  constructor(
    @Inject(forwardRef(() => UsersService)) private usersService: UsersService,
  ) {}

  public login(email: string, password: string, id: string) {
    const user = this.usersService.findUserById('1234');
    return 'SAMPLE_TOKEN';
  }

  public isAuth() {
    return true;
  }
}
