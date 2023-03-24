import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  PrimaryColumn,
  Unique,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { StackEntity } from "./stackEntity";


@Entity("UserEntity")
export class UserEntity  extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number | string;

  @Column()
  userName: string;

  @Column()
  email: string;

  @Column()
  password: string;

    @OneToMany(() => StackEntity, (stacks) => stacks.user)
      
  stacks: StackEntity[];
}


