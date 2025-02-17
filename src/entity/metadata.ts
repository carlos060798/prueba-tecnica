import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToOne,
    JoinColumn,
} from "typeorm"
import Photo from "./photo"

@Entity()
export class PhotoMetadata {
    @PrimaryGeneratedColumn()
    id!: number

    @Column("int")
    height!: number

    @Column("int")
    width!: number

    @Column()
    orientation!: string

    @Column()
    compressed!: boolean

    @Column()
    comment!: string
// creacion de una relacion  del photoMetadata con photo  de uno a uno
    @OneToOne(() => Photo)
    @JoinColumn()
    photo!: Photo
}