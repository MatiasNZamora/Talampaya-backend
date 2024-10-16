import { PartialType } from "@nestjs/swagger";

//TODO: Completar los DTO
export class CreateOperadorDto {

    readonly id: number;

    readonly email: string;

    readonly password: string;

    readonly rol: string;

    readonly compradorId: number;

};

export class UpdateOperadorDto extends PartialType(CreateOperadorDto){}