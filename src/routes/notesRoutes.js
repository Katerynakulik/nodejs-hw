import { Router } from 'express';
import {
  getNoteById,
  getAllNotes,
  createNote,
  deleteNote,
  updateNote,
} from '../controllers/notesController.js';
import { celebrate } from 'celebrate';
import {
  createNoteSchema,
  noteIdSchema,
  updateNoteSchema,
} from '../validations/notesValidation.js';

const router = Router();
router.get('/notes', getAllNotes);
router.get('/notes/:noteId', celebrate(noteIdSchema), getNoteById);
router.delete('/notes/:noteId', celebrate(noteIdSchema), deleteNote);
router.post('/notes/', celebrate(createNoteSchema), createNote);
router.patch('/notes/:noteId', celebrate(updateNoteSchema), updateNote);
export default router;
