import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { PostsService } from './providers/posts.service';
import { CreatePostDto } from './dtos/create-post.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { PatchPostDto } from './dtos/patch-post-dto';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get('/:userId')
  public getPosts(@Param('userId') userId: string | undefined) {
    return this.postsService.findAll(userId);
  }

  @ApiOperation({
    // Describe the purpose of an endpoint.
    summary: 'Create a new blog post',
  })
  @ApiResponse({
    // Define expected HTTP response status codes and responses.
    status: 201,
    description: 'You get a 201 response if your post is created successfully',
  })
  @Post()
  create(@Body() createPostDto: CreatePostDto) {
    return this.postsService.addPosts(createPostDto);
  }

  @ApiOperation({
    // Describe the purpose of an endpoint.
    summary: 'Update an existing blog post',
  })
  @ApiResponse({
    // Define expected HTTP response status codes and responses.
    status: 200,
    description: 'You get a 200 response if your post is updated successfully',
  })
  @Patch()
  public updatePost(@Body() patchPostDto: PatchPostDto) {
    console.log(patchPostDto);
  }
}
