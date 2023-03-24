import * as express from "express";
import { createStack, getStatcks } from "../controller/stackController";


const router = express.Router();

router.route("/:id/stack").get(getStatcks);

router.route("/:id/create-stack").post(createStack);

export default router;
