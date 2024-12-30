import { Router } from "express";

// import schemas

import {
  createNoteSchema,
  getNoteSchema,
  updateNoteSchema,
} from "../schemas/note.schema";

// import controllers

import {
  createNoteHandler,
  deleteNoteHanlder,
  updateNoteHanlder,
} from "../controllers/note.controller";

// import middlewares

import { validateResource } from "../middlewares/validate-resource";

const router = Router();

router
  .route("/update/:noteId")
  .post(validateResource(updateNoteSchema), updateNoteHanlder);
router
  .route("/delete/:noteId")
  .post(validateResource(getNoteSchema), deleteNoteHanlder);

router.route("/").post(validateResource(createNoteSchema), createNoteHandler);

export default router;
