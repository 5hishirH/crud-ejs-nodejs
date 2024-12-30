import { getNote, getNotes } from "../services/note.services";
import { asyncHandler } from "../utils/async-handler";

const homePageHandler = asyncHandler(async (_, res) => {
  const notes = await getNotes();

  res.render("home", { notes });
});

const newNotePageHandler = asyncHandler((_, res) => {
  res.render("new-note");
});

const updateNotePageHandler = asyncHandler(async (req, res) => {
  const noteId = req.params.noteId as string;

  const note = await getNote(noteId);

  res.render("update-note", { note });
});

export { homePageHandler, newNotePageHandler, updateNotePageHandler };
