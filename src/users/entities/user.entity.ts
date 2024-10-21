import { ApiProperty } from '@nestjs/swagger';
import { User } from '@prisma/client';
// import { Exclude } from 'class-transformer';

export class UserEntity implements User {
    constructor(partial: Partial<UserEntity>) {
      Object.assign(this, partial);
    }
   
    // @ApiProperty({ type: String })
    // _id: ObjectId;

  @ApiProperty()
  id: number;
  
  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  state: string;

  @ApiProperty()
  village: string;

  @ApiProperty()
  phone: string;

  @ApiProperty()
  occupation: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;

  // @Exclude()
  // password: string;
}