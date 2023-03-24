import { DataSource } from "typeorm";
import {  StackEntity } from "./entity/stackEntity";
import { TestEntity } from "./entity/testEntity";
import { UserEntity } from "./entity/userEntity";

export const myDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "Petxcanadi@2020",
  database: "postgres",
  entities: [UserEntity, StackEntity,( TestEntity)],
  logging: false,
  synchronize: true,
});
