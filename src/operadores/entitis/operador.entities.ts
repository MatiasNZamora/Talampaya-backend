import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Comprador } from "./comprador.entities";

@Entity()
export class Operador {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255 })
    email: string;

    @Column({ type: 'varchar', length: 255 })
    password: string;
    
    @Column({ type: 'varchar', length: 255 })
    role: string;

    @CreateDateColumn({
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP',
    })
    createAt: Date;

    @UpdateDateColumn({
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP',
    })
    updateAt: Date;

    @OneToOne(() => Comprador, (comprador) => comprador.operador, {
        nullable: true,
    })

    @JoinColumn()
    comprador: Comprador;
};  
