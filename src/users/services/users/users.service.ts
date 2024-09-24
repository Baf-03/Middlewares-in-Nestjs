import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from 'src/users/dtos/updateUser.dto';

@Injectable()
export class UsersService {

    private usersData =[
        {
            id:1,
            name:"bilal",
            email:"bilal@gmail.com"
        },{
            id:2,
            name:"baf",
            email:"baf@gmail.com"
        },
        {
            id:3,
            name:"baf03",
            email:"bilal03@gmail.com"
        },
    ]

    public fetchUsers(){
        return this.usersData
    }

    public updateUser(id: number, userData: UpdateUserDto) {
        const userIndex = this.usersData.findIndex(user => user.id === id);
        if (userIndex === -1) {
            return null;
        }

        this.usersData[userIndex] = { ...this.usersData[userIndex], ...userData };

        return this.usersData[userIndex];
    }
}
