import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {}

// PartialType คือการ Map input data มาจาก object อื่นๆ เพื่อจะได้ไม่ต้องเขียน DTO ใหม่เองทั้งหมด
