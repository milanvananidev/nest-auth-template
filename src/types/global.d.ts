import { JwtPayload } from '@nestjs/jwt';

export interface RequestUser {
  _id: string;
  name: string;
  username: string;
  email: string;
  phone?: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}


declare module 'express-serve-static-core' {
  interface Request {
    user?: RequestUser
  }
}
