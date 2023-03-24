import { Request, Response } from "express";
import { myDataSource } from "../database";
import { StackEntity } from "../entity/stackEntity";
import { TestEntity } from "../entity/testEntity";
import { UserEntity } from "../entity/userEntity";

export const createStack = async (req: Request, res: Response) => {
  try {
    interface iData {
      userName: string;
    }
    const { id } = req.params;
    const { title, detail, userName } = req.body;
    const { clientId } = req.params;

    const user = await myDataSource.getRepository(UserEntity).findOne({
      where: { id: parseInt(req.params.id) },
    });

    console.log(user);

   

    const stack = await StackEntity.create({
      title,
      detail,
      user,
    }).save();

    user.stacks = [stack];

    return res.status(201).json({
      message: "created",
      data: {
        user,
        stack,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

// export const createStack = async (req: Request, res: Response) => {
//   try {
//     const { title, detail } = req.body;

//     const user = await myDataSource
//       .getRepository(UserEntity)
//       .findOneBy({ id: req.params.id });

//       console.log("Reading User: ",user)

//     const createStack = await myDataSource
//       .getRepository(StackEntity)
//       .create({ title, detail });

//       console.log("Reading Stack: ", createStack);

//     const result = user.stacks.push(createStack);

//     return res.status(201).json({
//       message: "created",
//       data: result,
//     });
//   } catch (err) {
//     console.log(err);
//   }
// };

export const getStatcks = async (req: Request, res: Response) => {
  try {
    const stacks = await myDataSource.getRepository(StackEntity).find();

    return res.status(201).json({
      message: "found",
      data: stacks,
    });
  } catch (err) {
    console.log(err);
  }
};

// export const getStatcks = async (req: Request, res: Response) => {
//     try {

//     } catch (err) {
//         console.log(err)
//     }
// }

export const createTest = async (req: Request, res: Response) => {
  const { name } = req.body;
  const user = await TestEntity.create({ name }).save();

  return res.status(200).json({
    message: "created",
    data: user,
  });
};
