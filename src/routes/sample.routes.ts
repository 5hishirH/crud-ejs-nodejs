import { Router } from "express";

import { testServer } from "../controllers/sample.controller";

const router = Router();

router.route("/").get(testServer);

export default router;

