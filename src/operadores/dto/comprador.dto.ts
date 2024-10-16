import { PartialType } from "@nestjs/swagger";

//TODO: Completar los DTO
export class CreateCompradorDto {




};

export class UpdateCompradorDto extends PartialType(CreateCompradorDto){};