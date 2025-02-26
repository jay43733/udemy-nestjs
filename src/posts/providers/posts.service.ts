import { Body, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';
import { CreatePostDto } from '../dtos/create-post.dto';
import { Repository } from 'typeorm';
import { Post } from '../post.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { MetaOption } from 'src/meta-options/meta-option.entity';

@Injectable()
export class PostsService {
  // Injecting Users Service
  constructor(
    private readonly usersService: UsersService,

    // Injecting PostRepository
    @InjectRepository(Post)
    private readonly postsRepository: Repository<Post>,

    // Injecting MetaOptionRepository
    @InjectRepository(MetaOption)
    public readonly metaOptionsRepository: Repository<MetaOption>,
  ) {}

  public async create(@Body() createPostsDto: CreatePostDto) {
    // 1. Create Meta-Options First
    let checkMetaOptions = createPostsDto.metaOptions
      ? this.metaOptionsRepository.create(createPostsDto.metaOptions)
      : null;

    // 2. Create Post while ensuring metaOptions is correctly assigned
    let newPost = this.postsRepository.create({
      ...createPostsDto,
      metaOptions: checkMetaOptions ?? undefined,
    });

    // 3. Add Meta-Options to the post
    // if (checkMetaOptions) {
    //   newPost.metaOptions = checkMetaOptions;
    // }

    // 4. Return Post to the user
    return await this.postsRepository.save(newPost);
  }

  public async findAll(userId: string | undefined) {
    const user = this.usersService.findUserById(userId);
    let posts = await this.postsRepository.find({
      relations: {
        metaOptions: true, // เหมือน include ใน prisma
      },
    });
    return posts;
  }

  public async delete(id: number) {
    const post = await this.postsRepository.findOneBy({
      id,
    });

    await this.postsRepository.delete(id);
    
    const invertPost = await this.metaOptionsRepository.findOne({
      where: { id },
      relations: {
        post: true,
      },
    });

    console.log(invertPost, '---------------------');

    return { deleted: true, id };
  }
}
