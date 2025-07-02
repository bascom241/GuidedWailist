import express from 'express';
import { addWaitListUser, getWaitListUsers} from '../controller/waitListController.js';
const router = express.Router();

router.post("/add", addWaitListUser);
router.get("/users", getWaitListUsers);


export default router;
