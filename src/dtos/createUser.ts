import { IsNotEmpty, Length } from 'class-validator';

export class CreateUserBody {
	@IsNotEmpty({ message: "The user is not has name" })
	@Length(5, 100)
	name: string;

	@IsNotEmpty({ message: "The user is not has lastname" })
	@Length(5, 100)
	lastname: string;
}