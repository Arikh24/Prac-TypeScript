import { Controller,Get, Query ,Param,Post,Body,Put} from '@nestjs/common';
import { createUser } from './dto/create-user.dto.js';
import { updateUser } from './dto/update-user.dto.js';

@Controller('user')
export class UserController {
  @Get()
  getUser()
  {
    return [
      {id :21,name:'Arikh'},
      {id :22,name:'Rafi'},
    ];
  }
@Get()
getUsers(@Query('name') name?: string) {
  const users = [{ id: 21, name: 'Arikh' }, { id: 22, name: 'Rafi' }];
  return name ? users.filter(u => u.name === name) : users;
}
  @Get(':id')
  getUSerById(@Param('id') id:string)
  {
     return [
      {id ,name:'Arikh'}
    ];
  }
  @Post()
  createUser(@Body()createUser:createUser)
  {
    return{data:createUser,message:'User Created'};
  }
 @Put(':id')
updateUser(
  @Param('id') id: string,
  @Body() updateUser: updateUser,
) {
  return {
    id,
    data: updateUser,
    message: 'User updated',
  };
}
}
