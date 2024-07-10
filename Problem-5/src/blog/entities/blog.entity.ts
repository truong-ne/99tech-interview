import { nanoid } from "nanoid";
import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { BlogType } from "../../hooks/database/enum.constant";

@Entity({ name: 'Blogs' })
export class Blog {
    constructor() {
        this.id = nanoid()
    }

    @PrimaryColumn()
    id: string

    @Column({ nullable: false })
    title!: string

    @Column({ nullable: false })
    content!: string

    @Column({ type: 'enum', enum: BlogType, nullable: false })
    type!: string

    @CreateDateColumn({ type: 'timestamp', name: 'createdAt', default: () => 'CURRENT_TIMESTAMP' })
    createdAt!: Date

    @UpdateDateColumn({ type: 'timestamp', name: 'updateAt', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    updatedAt!: Date
}