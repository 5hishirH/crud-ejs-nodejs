import { asyncHandler } from "../utils/async-handler";
import { UpdateNoteInput } from "../schemas/note.schema";
import { createNote, deleteNote, updateNote } from "../services/note.services";

const createNoteHandler = asyncHandler(async (req, res) => {
  const body = req.body;
  await createNote(body);

  res.redirect("/");
});

const updateNoteHanlder = asyncHandler(async (req, res) => {
  const body = req.body as UpdateNoteInput["body"];
  const noteId = req.params.noteId;

  await updateNote(noteId, body);

  res.redirect(`/note/${noteId}`);
});

const deleteNoteHanlder = asyncHandler(async (req, res) => {
  const noteId = req.params.noteId;

  await deleteNote(noteId);

  res.redirect("/");
});

export { createNoteHandler, updateNoteHanlder, deleteNoteHanlder };
