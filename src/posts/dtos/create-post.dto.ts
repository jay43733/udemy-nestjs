import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  IsDate,
  IsEnum,
  IsISO8601,
  IsJSON,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  Matches,
  MaxLength,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { PostType } from '../enums/postType.enums';
import { Status } from '../enums/status.enums';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { CreatePostMetaOptionsDto } from 'src/meta-options/dtos/create-post-meta-options.dto';

export class CreatePostDto {
  @ApiProperty({
    example: 'This is the example title',
    description: 'This is the title for the blog post',
  }) // Pipe นี้ทำให้ variable นี้ที่จำเป็นในการใช้ API เส้นนี้ ขึ้นบอกในหน้า Swagger
  @IsString()
  @MinLength(4)
  @MaxLength(512)
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    enum: PostType,
    description: "Possible values, 'post', 'page', 'story', 'series' ",
  })
  @IsEnum(PostType, {
    message: 'Post type must be either post, page, story, or series',
  })
  @IsNotEmpty()
  postType: PostType;

  @ApiProperty({
    description: "For example - 'my-url' ",
    example: 'my-blog-post',
  })
  @IsString()
  @MaxLength(256)
  @IsNotEmpty()
  @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
    message:
      'A slug should be all small letters and uses only "-" and without spaces. For example "my-url"',
  })
  slug: string;

  @ApiProperty({
    enum: Status,
    description: "Possible values , 'post', 'page', 'story', 'series' ",
  })
  @IsEnum(Status, {
    message: 'Post type must be either post, page, story, or series',
  })
  @IsNotEmpty()
  status: Status;

  @ApiPropertyOptional({
    description: 'This is the content of the post',
    example: 'The post content',
  })
  @IsString()
  @IsOptional()
  content?: string;

  @ApiPropertyOptional({
    description:
      'Serialize your JSON object else a validation error will be thrown',
    example:
      '{\r\n    "@context": "https:\/\/schema.org",\r\n    "@type": "Person"\r\n  }',
  })
  @IsString()
  @IsJSON()
  schema: string;

  @ApiPropertyOptional({
    description: 'Featured Image for your blog post',
    example: 'http://localhost.com/images/image1.jpg',
  })
  @IsUrl()
  @MaxLength(1024)
  @IsOptional()
  featuredImageUrl?: string;

  @ApiPropertyOptional({
    description: 'The date on which the blog post is published',
    example: '2024-03-16T07:46:32+0000',
  })
  @IsISO8601()
  @IsOptional()
  publishOn?: Date;

  @ApiPropertyOptional({
    description: 'Array of tags passed as string values',
    example: ['technology', 'programming', 'nestjs'],
  })
  @IsArray()
  @IsOptional()
  @IsString({ each: true })
  @MinLength(3, { each: true })
  tags?: string[]; // Array of strings

  // @ApiPropertyOptional({
  //   // In case ว่าเป็น Array ที่มี object หลายๆอันอยู่ข้างใน

  //   type: 'array',
  //   required: false,
  //   items: {
  //     type: 'object',
  //     properties: {
  //       key: {
  //         type: 'string',
  //         description:
  //           'The key can be any string identifies for your meta option',
  //         example: 'sidebarEnabled',
  //       },
  //       value: {
  //         type: 'any',
  //         description: 'Any value that you want to save to the key',
  //         example: true,
  //       },
  //     },
  //   },
  // })

  @ApiPropertyOptional({
    type: 'object',

    properties: {
      metavalue: {
        type: 'string',
        description: 'The metaValue is a JSON string',
        example: '{"sidebarEnabled": true,}',
      },
    },
  })
  @IsOptional()
  @ValidateNested()
  @Type(() => CreatePostMetaOptionsDto) // If input data matches with DTO, @Type() will transform data into instance of this
  metaOptions?: CreatePostMetaOptionsDto | null; // It's possible to be null because it is optional
}
