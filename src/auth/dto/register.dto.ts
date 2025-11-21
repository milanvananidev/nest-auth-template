import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmail, IsOptional, IsString, MinLength } from 'class-validator';

export class RegisterDto {
  @ApiProperty({ minLength: 2, description: 'Full name of the user' })
  @IsString()
  @MinLength(2)
  name: string;

  @ApiProperty({ minLength: 3, description: 'Username for login' })
  @IsString()
  @MinLength(3)
  username: string;

  @ApiProperty({ description: 'Email address', format: 'email' })
  @IsEmail()
  email: string;

  @ApiPropertyOptional({ description: 'Phone number' })
  @IsOptional()
  @IsString()
  phone?: string;

  @ApiProperty({ minLength: 6, description: 'Password for login' })
  @IsString()
  @MinLength(6)
  password: string;
}
