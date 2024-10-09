import {MigrationInterface, QueryRunner} from "typeorm";

export class inicio1728512001014 implements MigrationInterface {
    name = 'inicio1728512001014'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "producto" ("id" SERIAL NOT NULL, "nombre" character varying(255) NOT NULL, "description" text NOT NULL, "precio" integer NOT NULL, "stock" integer NOT NULL, "origen" character varying NOT NULL, "image" character varying NOT NULL, CONSTRAINT "UQ_d86d179360134b4b74bda750664" UNIQUE ("nombre"), CONSTRAINT "PK_5be023b11909fe103e24c740c7d" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "producto"`);
    }

}
