import { createUser } from './dto/create-user.dto.js';
import { updateUser } from './dto/update-user.dto.js';
export declare class UserController {
    getUser(): {
        id: number;
        name: string;
    }[];
    getUsers(name?: string): {
        id: number;
        name: string;
    }[];
    getUSerById(id: string): {
        id: string;
        name: string;
    }[];
    createUser(createUser: createUser): {
        data: createUser;
        message: string;
    };
    updateUser(id: string, updateUser: updateUser): {
        id: string;
        data: updateUser;
        message: string;
    };
}
