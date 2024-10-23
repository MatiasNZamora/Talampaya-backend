import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateAtUpdateAt1729115675575 implements MigrationInterface {
    name = 'CreateAtUpdateAt1729115675575'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "operador" ("id" SERIAL NOT NULL, "email" character varying(255) NOT NULL, "password" character varying(255) NOT NULL, "role" character varying(255) NOT NULL, "createAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updateAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "compradorId" integer, CONSTRAINT "REL_9a6bd793b4f149fb11d8692ed7" UNIQUE ("compradorId"), CONSTRAINT "PK_6cd1ed38785b46d815458885dfd" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "comprador" ("id" SERIAL NOT NULL, "nombre" character varying(255) NOT NULL, "apellido" character varying(255) NOT NULL, "telefono" character varying(255) NOT NULL, "createAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updateAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_2174fea3473575f9d08507dbc78" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "operador" ADD CONSTRAINT "FK_9a6bd793b4f149fb11d8692ed75" FOREIGN KEY ("compradorId") REFERENCES "comprador"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "operador" DROP CONSTRAINT "FK_9a6bd793b4f149fb11d8692ed75"`);
        await queryRunner.query(`DROP TABLE "comprador"`);
        await queryRunner.query(`DROP TABLE "operador"`);
    }

}
