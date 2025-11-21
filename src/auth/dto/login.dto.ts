import { IsString, MinLength } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';


export class LoginDto {
  @ApiProperty({ description: 'Email or username' })
  @IsString()
  identifier: string;

  @ApiProperty({ minLength: 6, description: 'Password' })
  @IsString()
  @MinLength(6)
  password: string;
}
