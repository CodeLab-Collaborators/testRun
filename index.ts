import * as express from "express";
import { Application, Request, Response } from "express";
import { myDataSource } from "./database";
import { UserEntity } from "./entity/userEntity";
import user from "./router.ts/userRouter";
import stack from "./router.ts/stackRoute";

myDataSource
  .initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err);
  });
// create and setup express app

const app: Application = express();
app.use(express.json());

app.use("/user", user);
app.use("/stack", stack);

// start express server
app.listen(3023, () => {
  console.log("server connected");
});
