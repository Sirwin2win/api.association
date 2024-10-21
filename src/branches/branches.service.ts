import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateBranchDto } from './dto/create-branch.dto';
import { UpdateBranchDto } from './dto/update-branch.dto';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

@Injectable()
export class BranchesService {
    constructor(private prisma: PrismaService) {}

    // Create Branch
    async  create(createBranchDto: CreateBranchDto) {
        return this.prisma.branch.create({
            //  data: createBranchDto
            data:{
                  address:createBranchDto.address,
                  state:createBranchDto.state,
                  branch:createBranchDto.branch,
                  userId:createBranchDto.userId
            }
            });
      }

// Get All Branches
      async  findAll() {
        return this.prisma.branch.findMany();
      }

    //   // @Get Products By StoreId
    //   async findMany(subdomain: string) {
    //     return this.prisma.product.findMany({ 
    //       where: { 
    //    store:{
    //     is:{
    //       subdomain:subdomain
    //     },
      
    //    }
    //       }
    //       });
    //   }
    
     async findMany(branch: string) {
        return this.prisma.branch.findMany({ 
     where:{
        branch
     }
          });
      }
    
}
