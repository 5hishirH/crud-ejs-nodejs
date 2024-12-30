import { Note } from "../models/note.model";
import { CreateNoteInput, UpdateNoteInput } from "../schemas/note.schema";
import { ApiError } from "../utils/api-error";

const createNote = async (body: CreateNoteInput["body"]) => {
  const note = await Note.create(body);

  return note;
};

const getNote = async (noteId: string) => {
  const note = await Note.findById(noteId);

  if (!note) {
    throw new ApiError(404, "Cannot find the note with the requested id");
  }

  return note;
};

const getNotes = async () => {
  const notes = await Note.find().sort({ updatedAt: -1 });

  return notes;
};

const updateNote = async (
  noteId: string,
  updateData: UpdateNoteInput["body"]
) => {
  const prevNote = await Note.findById(noteId);

  if (!prevNote) {
    throw new ApiError(404, "Cannot find the note with the requested id");
  }

  prevNote.set(updateData);
  const updatedNote = await prevNote.save();

  return updatedNote;
};

const deleteNote = async (noteId: string) => {
  const note = await Note.findByIdAndDelete(noteId);

  if (!note) {
    throw new ApiError(404, "Cannot find the note with the requested id");
  }

  return note;
};

export { getNote, getNotes, createNote, updateNote, deleteNote };
