import { Body, Controller, Post } from '@nestjs/common';
import { MetaOptionsService } from './provider/meta-options.service';
import { CreatePostMetaOptionsDto } from './dtos/create-post-meta-options.dto';

@Controller('meta-options')
export class MetaOptionsController {
  constructor(private readonly metaOptionsService: MetaOptionsService) {}

  
  @Post()
  public async addMetaOption(
    @Body() createPostMetaOptionsDto: CreatePostMetaOptionsDto,
  ) {
    return this.metaOptionsService.create(createPostMetaOptionsDto);
  }
}
