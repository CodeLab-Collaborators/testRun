import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, PrimaryColumn } from "typeorm";

@Entity()
export class TestEntity extends BaseEntity {
  @PrimaryGeneratedColumn({ })
  id: number | string;

  @Column()
  name: string;
}
