// register routes

import { Request, Response } from "express";
import { myDataSource } from "../database";
import { UserEntity } from "../entity/userEntity";

export const getUser = async (req: Request, res: Response) => {
  const users = await myDataSource.getRepository(UserEntity).find();
  res.json(users);
};

export const getOneUser = async (req: Request, res: Response) => {
  const user = await myDataSource
    .getRepository(UserEntity)
    .findOneBy({ id: req.params.id });

  return res.status(200).json({
    message: "found",
    data: user,
  });
};

export const createUser = async (req: Request, res: Response) => {
  const user = await myDataSource.getRepository(UserEntity).create(req.body);
  const result = await myDataSource.getRepository(UserEntity).save(user);

  return res.status(200).json({
    message: "created",
    data: result,
  });
};

export const updateUser = async (req: Request, res: Response) => {
  const user = await myDataSource
    .getRepository(UserEntity)
    .findOneBy({ id: req.params.id });

  const result = await myDataSource
    .getRepository(UserEntity)
    .merge(user, req.body);

  return res.status(200).json({
    message: "updated",
    data: result,
  });
};

// export const deleteUser = async (req: Request, res: Response) => {
//   const user = await myDataSource
//     .getRepository(UserEntity)
//     .findOneBy({ id: req.params.id });

//   const result = await myDataSource.getRepository(UserEntity).delete(user);

//   return res.status(200).json({
//     message: "updated",
//     data: result,
//   });
// };

