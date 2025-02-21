import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsInt, IsOptional } from 'class-validator';

export class GetUserParamDto {
  @ApiPropertyOptional({
    description: 'Get user with specific id',
    example: 1234, //Placeholder in input
  }) // Add Variable that is in DTO to Swagger
  
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  id?: number;
}
