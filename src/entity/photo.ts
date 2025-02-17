
//  creacion de un modelo

import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

type PhotoType = {
    id: number
    name: string
    description: string
    filename: string
    views: number
    isPublished: boolean
}

@Entity()
 class Photo implements PhotoType {
    @PrimaryGeneratedColumn()
    id!: number

    @Column({
        length: 100,
    })
    name!: string

    @Column("text")
    description!: string

    @Column()
    filename!: string

    @Column("float")
    views!: number

    @Column()
    isPublished!: boolean
}

export default Photo