import * as express from "express";
import UserController from "./controllers/UserController"

const router = express.Router();

router.post("/users", UserController.create)
router.get("/users", UserController.fildAll)
router.post("/users/:userId", UserController.findOne)
router.put('/users/:userId', UserController.update)
router.delete('/users/:userId', UserController.destroy)

export { router };
