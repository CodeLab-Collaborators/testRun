import {
    BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { UserEntity } from "./userEntity";

@Entity("StackEntity")
export class StackEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @Column()
  detail!: string;

  @ManyToOne(() => UserEntity, (user) => user.stacks)
  user: UserEntity;
}
