import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PostType } from './enums/postType.enums';
import { Status } from './enums/status.enums';
import { CreatePostMetaOptionsDto } from 'src/meta-options/dtos/create-post-meta-options.dto';
import { MetaOption } from 'src/meta-options/meta-option.entity';

@Entity()
// resource for entity => https://typeorm.io/entities#column-options
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 512,
    nullable: false,
  })
  title: string;

  @Column({
    type: 'enum',
    enum: PostType,
    default: PostType.POST,
    nullable: false,
  })
  postType: PostType;

  @Column({
    type: 'varchar',
    length: 256,
    nullable: false,
    unique: true,
  })
  slug: string;

  @Column({
    type: 'enum',
    nullable: false,
    enum: Status,
    default: Status.DRAFT,
  })
  status: Status;

  @Column({
    type: 'text', // Large amount of string
    nullable: true,
  })
  content?: string;

  @Column({
    type: 'text',
    nullable: false,
  })
  schema: string;

  @Column({
    type: 'varchar',
    length: 1024,
    nullable: true,
  })
  featuredImageUrl?: string;

  @Column({
    type: 'timestamp', // "datetime" in MySQL
    nullable: true,
  })
  publishOn?: Date;

  // Relation to other tables

  tags?: string[];

  @OneToOne(() => MetaOption, (metaOptions) => metaOptions.post, {
    nullable: true,
    cascade: true,
  })
  // eager = true เหมือนกับ include ข้อมูลที่เป็น foreign key มาด้วยทั้งหมด
  // cascade = true ถ้า สร้าง, อัปเดต, หรือลบ Post, TypeORM จะทำสิ่งเดียวกันกับ MetaOption โดยอัตโนมัติ
  @JoinColumn() // To create a column inside in entity table or Foreign key to get the relationship between columns
  metaOptions?: MetaOption;
}
