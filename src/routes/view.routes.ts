import { Router } from "express";

const router = Router();

// import controllers

import {
  homePageHandler,
  newNotePageHandler,
  updateNotePageHandler,
} from "../controllers/view.controller";
import { validateResource } from "../middlewares/validate-resource";
import { getNoteSchema } from "../schemas/note.schema";

router.route("/note/new").get(newNotePageHandler);
router.route("/note/:noteId").get(validateResource(getNoteSchema), updateNotePageHandler);
router.route("/").get(homePageHandler);

export default router;
