import { Body, Controller, Get, Param, ParseBoolPipe, ParseIntPipe, Post, Put, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { UpdateUserDto } from 'src/users/dtos/updateUser.dto';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')

export class UsersController {
constructor(readonly userService:UsersService){}

    @Get()
    getUsers(){
        return this.userService.fetchUsers()
    }

    @Put(":id")
    // @UsePipes(new ValidationPipe())
    updateUser(
        @Param("id",ParseIntPipe) id:number,
        // @Query("status",ParseBoolPipe) status:boolean,
        @Body() userData:UpdateUserDto
    ){
        this.userService.updateUser(id,userData)
        return this.userService.fetchUsers()
    }
}
