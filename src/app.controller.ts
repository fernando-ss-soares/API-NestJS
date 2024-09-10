import { Body, Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';
import { randomUUID } from 'node:crypto'
import { CreateUserBody } from './dtos/createUser';

@Controller('app')
export class AppController {

    constructor(private prisma: PrismaService) { }


    @Get('getUser')
    async getUser() {
        const user = await this.prisma.user.findMany();

        return { userList: user };
    }

    @Post('postUser')
    async postUser(@Body() body: CreateUserBody) {
        const { name, lastname } = body;

        const user = await this.prisma.user.create({
            data: {
                id: randomUUID(),
                name,
                lastname
            }
        });

        return { data: name, lastname };
    }
}
