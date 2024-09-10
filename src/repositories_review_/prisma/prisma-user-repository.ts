import { randomUUID } from 'node:crypto';
import { PrismaService } from '../../database/prisma.service';
import { UserRepository } from '../user-repository'
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaUserRepository implements UserRepository {

    constructor(
        private prisma: PrismaService
    ) {}

    async create(name: string, lastname: string): Promise<void> {

        await this.prisma.user.create({
            data: {
                id: randomUUID(),
                name,
                lastname
            }
        });

        throw new Error('Method not implemented.');
    }

}