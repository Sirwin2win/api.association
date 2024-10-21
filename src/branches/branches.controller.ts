import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  UseGuards,
  UploadedFiles,
  UseInterceptors,
 Request,
Response
} from '@nestjs/common';
import {JwtAuthGuard} from '../auth/jwt-auth.guard'
import { ApiCreatedResponse,ApiOkResponse, ApiTags, ApiConsumes, ApiBody } from '@nestjs/swagger';
import { BranchesService } from './branches.service';
import { CreateBranchDto } from './dto/create-branch.dto';
import { UpdateBranchDto } from './dto/update-branch.dto';

@Controller('branches')
@ApiTags('branches')
export class BranchesController {
  constructor(private readonly branchesService: BranchesService) {}







  @UseGuards(JwtAuthGuard)
  @Post()
  // @ApiConsumes('multipart/form-data')
  @ApiCreatedResponse()
  async create(@Body() createBranchDto: CreateBranchDto) {
    // return new UserEntity(await this.usersService.create(createUserDto));
    return await this.branchesService.create(createBranchDto);
  }


   // Get request
   @Get()
   findAll() {
   
     return this.branchesService.findAll();
   }
}
