import { Body, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';
import { CreatePostDto } from '../dtos/create-post.dto';

@Injectable()
export class PostsService {
  // Injecting Users Service
  constructor(private readonly usersService: UsersService) {}
  public findAll(userId: string | undefined) {
    const user = this.usersService.findUserById(userId);
    return [
      {
        user: user,
        title: 'Test 1',
        content: 'Description 1',
      },
      {
        user: user,
        title: 'Test 2',
        content: 'Description 2',
      },
    ];
  }

  addPosts(@Body() createPostDto: CreatePostDto) {
    console.log(createPostDto);
    return "Created Post successfully";
  }
}
